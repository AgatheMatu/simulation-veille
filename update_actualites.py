#!/usr/bin/env python3
"""Build the small, sanitized news file consumed by VEILLE-ILI."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import sys
import unicodedata
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


SOURCES = (
    {
        "name": "France 24",
        "handle": "@france24_flux",
        "url": "https://www.france24.com/fr/rss",
    },
    {
        "name": "RFI",
        "handle": "@rfi_flux",
        "url": "https://www.rfi.fr/fr/rss",
    },
    {
        "name": "franceinfo",
        "handle": "@franceinfo_flux",
        "url": "https://www.francetvinfo.fr/titres.rss",
    },
    {
        "name": "Le Monde",
        "handle": "@lemonde_flux",
        "url": "https://www.lemonde.fr/rss/une.xml",
    },
)

MAX_FEED_BYTES = 2_000_000
MAX_ITEMS_PER_SOURCE = 12
MAX_OUTPUT_ITEMS = 36
MAX_ITEM_AGE = timedelta(hours=72)


class TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        self.parts.append(data)


def plain_text(value: str, limit: int = 260) -> str:
    parser = TextExtractor()
    try:
        parser.feed(value or "")
        text = " ".join(parser.parts)
    except Exception:
        text = value or ""
    text = html.unescape(text)
    text = re.sub(r"\s+", " ", text).strip()
    return text[:limit]


def local_name(tag: str) -> str:
    return tag.rsplit("}", 1)[-1].lower()


def child_text(node: ET.Element, names: tuple[str, ...]) -> str:
    wanted = {name.lower() for name in names}
    for child in node.iter():
        if child is node:
            continue
        if local_name(child.tag) in wanted and child.text:
            return child.text.strip()
    return ""


def item_link(node: ET.Element) -> str:
    for child in node.iter():
        if local_name(child.tag) != "link":
            continue
        href = child.attrib.get("href", "").strip()
        candidate = href or (child.text or "").strip()
        if candidate:
            return candidate
    return ""


def safe_http_url(value: str) -> str:
    try:
        parsed = urlparse(value.strip())
    except ValueError:
        return ""
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        return ""
    return value.strip()


def parse_datetime(value: str, fallback: datetime) -> datetime:
    value = (value or "").strip()
    if not value:
        return fallback
    try:
        parsed = parsedate_to_datetime(value)
    except (TypeError, ValueError, OverflowError):
        try:
            parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        except ValueError:
            return fallback
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc)


def normalized(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(char for char in value if not unicodedata.combining(char))
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def classify(title: str) -> str:
    text = normalized(title)
    groups = (
        ("sport", ("football", "rugby", "tennis", "match", "ligue", "mondial", "jo ")),
        ("economie", ("economie", "inflation", "emploi", "entreprise", "marche", "budget", "prix ", "euro")),
        ("sciences", ("science", "espace", "climat", "meteo", "sante", "recherche", "numerique")),
        ("culture", ("cinema", "musique", "livre", "festival", "serie", "culture")),
        ("societe", ("ecole", "transport", "justice", "logement", "societe", "greve")),
        ("politique", ("gouvernement", "assemblee", "election", "president", "ministre", "senat")),
        ("international", ("guerre", "ukraine", "russie", "chine", "etats unis", "europe", "afrique", "moyen orient")),
    )
    for category, keywords in groups:
        if any(keyword in text for keyword in keywords):
            return category
    return "actualite"


def feed_nodes(root: ET.Element) -> list[ET.Element]:
    items = [node for node in root.iter() if local_name(node.tag) == "item"]
    if items:
        return items
    return [node for node in root.iter() if local_name(node.tag) == "entry"]


def fetch_source(source: dict[str, str], fetched_at: datetime) -> list[dict[str, str]]:
    request = urllib.request.Request(
        source["url"],
        headers={
            "User-Agent": "VEILLE-ILI/1.0 (+educational news reader)",
            "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9",
        },
    )
    with urllib.request.urlopen(request, timeout=25) as response:
        payload = response.read(MAX_FEED_BYTES + 1)
    if len(payload) > MAX_FEED_BYTES:
        raise ValueError("feed exceeds the configured size limit")

    root = ET.fromstring(payload)
    result: list[dict[str, str]] = []
    oldest = fetched_at - MAX_ITEM_AGE
    for node in feed_nodes(root):
        title = plain_text(child_text(node, ("title",)))
        link = safe_http_url(item_link(node))
        published = parse_datetime(
            child_text(node, ("pubdate", "published", "updated", "dc:date", "date")),
            fetched_at,
        )
        if not title or not link or published < oldest or published > fetched_at + timedelta(minutes=10):
            continue
        item_id = hashlib.sha256(f"{source['name']}|{link}|{title}".encode("utf-8")).hexdigest()[:20]
        result.append(
            {
                "id": item_id,
                "source": source["name"],
                "handle": source["handle"],
                "title": title,
                "url": link,
                "publishedAt": published.isoformat().replace("+00:00", "Z"),
                "category": classify(title),
            }
        )
        if len(result) >= MAX_ITEMS_PER_SOURCE:
            break
    return result


def build_payload() -> dict[str, object]:
    fetched_at = datetime.now(timezone.utc).replace(microsecond=0)
    items: list[dict[str, str]] = []
    failures: list[str] = []
    for source in SOURCES:
        try:
            items.extend(fetch_source(source, fetched_at))
        except Exception as error:
            failures.append(f"{source['name']}: {error}")

    deduplicated: list[dict[str, str]] = []
    seen_titles: set[str] = set()
    for item in sorted(items, key=lambda entry: entry["publishedAt"], reverse=True):
        key = normalized(item["title"])
        if not key or key in seen_titles:
            continue
        seen_titles.add(key)
        deduplicated.append(item)
        if len(deduplicated) >= MAX_OUTPUT_ITEMS:
            break

    if failures:
        print("Flux indisponibles : " + " | ".join(failures), file=sys.stderr)
    return {
        "updatedAt": fetched_at.isoformat().replace("+00:00", "Z"),
        "sourceCount": len({item["source"] for item in deduplicated}),
        "items": deduplicated,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", default="actualites.json")
    args = parser.parse_args()
    output = Path(args.output)
    payload = build_payload()
    if not payload["items"]:
        if output.exists():
            print("Aucun nouveau titre : conservation du dernier fichier valide.", file=sys.stderr)
            return 0
        print("Aucun flux n'a fourni de titre exploitable.", file=sys.stderr)
        return 1
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{len(payload['items'])} titres enregistres dans {output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
