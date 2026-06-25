const builtInScenarios = [
  {
    id: "ormuz-crise-navale",
    title: "Crise fictive dans le détroit d'Ormuz",
    briefing:
      "Simulation pédagogique : un incident naval fictif survient près du détroit d'Ormuz. Des comptes concurrents publient des vidéos, cartes et témoignages contradictoires. Les élèves doivent repérer une possible attaque informationnelle, sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    objective: "Identifier les narratifs coordonnés, les faux comptes OSINT, les images mal attribuées et les messages qui cherchent à provoquer panique, polarisation ou hausse artificielle de l'urgence.",
    timeWindow: "06:00-11:30",
    location: "Détroit d'Ormuz, zone maritime fictive",
    volume: 168,
    seed: 240619,
    trends: [
      { tag: "#OrmuzEnFeu", count: "42,8 k" },
      { tag: "#RouteDuPetrole", count: "31,2 k" },
      { tag: "#OSINTGolfe", count: "19,6 k" },
      { tag: "#ConvoiAster", count: "8,4 k" },
      { tag: "#PrixEssence", count: "6,9 k" }
    ],
    clues: [
      "Une vidéo de nuit est partagée comme récente alors qu'aucun élément ne permet de dater ni localiser la scène.",
      "Plusieurs comptes OSINT apparus récemment publient la même carte avec des légendes différentes.",
      "Des messages cherchent à relier immédiatement l'incident fictif aux prix du carburant, sans source économique.",
      "Les comptes officiels confirment seulement un incident limité, mais leurs messages sont moins relayés que les contenus alarmistes.",
      "Des captures de faux communiqués utilisent des logos plausibles mais des formulations inhabituelles."
    ],
    actors: [
      { name: "Centre Maritime Commun", handle: "@cmc_maritime", verified: true, stance: "official", trust: "high" },
      { name: "Agence Horizon", handle: "@agence_horizon", verified: true, stance: "media", trust: "high" },
      { name: "Navires & Données", handle: "@navires_donnees", verified: false, stance: "analyst", trust: "high" },
      { name: "Journal du Golfe", handle: "@journal_golfe", verified: true, stance: "media", trust: "high" },
      { name: "PortWatch FR", handle: "@portwatch_fr", verified: false, stance: "analyst", trust: "medium" },
      { name: "MarineLog Claire", handle: "@claire_marinelog", verified: false, stance: "analyst", trust: "medium" },
      { name: "Energy Desk", handle: "@energydesk_fr", verified: false, stance: "media", trust: "medium" },
      { name: "Golfe Alerte", handle: "@golfe_alerte", verified: false, stance: "amplifier", trust: "low" },
      { name: "OSINT Flash", handle: "@osint_flash_24", verified: false, stance: "amplifier", trust: "low" },
      { name: "Petrole Verite", handle: "@petrole_verite", verified: false, stance: "amplifier", trust: "low" },
      { name: "Carte Rouge Live", handle: "@carterouge_live", verified: false, stance: "amplifier", trust: "low" },
      { name: "Temoin Golfe", handle: "@temoin_golfe", verified: false, stance: "amplifier", trust: "low" }
    ],
    normalTemplates: [
      "Pour l'instant, le communiqué maritime parle d'un incident localisé. Je ne vois pas de confirmation d'un blocage du détroit.",
      "La carte AIS ne suffit pas à prouver une attaque : certaines positions publiques sont retardées ou absentes.",
      "La vidéo virale ne donne ni heure, ni coordonnées, ni source originale. Prudence avant relais.",
      "L'agence Horizon confirme une hausse de tension diplomatique, mais pas de fermeture de route maritime.",
      "Plusieurs images circulent déjà avec des légendes différentes. Il faut comparer les métadonnées et la première publication.",
      "Le prix du pétrole ne se déduit pas d'un seul post. Attendons des données de marché et des sources identifiées.",
      "Le compte officiel annonce une enquête maritime, pas une opération militaire généralisée.",
      "Je note que les messages les plus partagés utilisent tous les mêmes mots : 'détroit fermé', 'panique', 'stockez'.",
      "Une photo de fumée peut venir d'un exercice, d'un port ou d'un autre pays. Sans géolocalisation, elle ne prouve rien.",
      "Le fil évolue vite : séparons les faits confirmés, les hypothèses et les contenus non vérifiés."
    ],
    suspectTemplates: [
      "CONFIRMÉ : le détroit est fermé, les navires font demi-tour. Faites le plein avant midi, les prix vont exploser.",
      "Vidéo exclusive d'une frappe cette nuit. Les médias cachent l'ampleur réelle, partagez avant suppression.",
      "Nos sources militaires disent que trois bâtiments ont coulé. Aucun média n'ose l'écrire.",
      "Carte officielle interceptée : zone rouge sur tout Ormuz. Les gouvernements préparent le silence.",
      "Si vous attendez les communiqués, il sera trop tard. Le carburant va manquer dans 48 h.",
      "Même message de nos contacts portuaires : fermeture totale, assurance maritime suspendue, chaos logistique.",
      "On reconnaît clairement les explosions sur la vidéo. Ceux qui demandent une source protègent la version officielle.",
      "Des comptes OSINT fiables confirment l'entrée en guerre. La preuve est dans cette capture.",
      "Tout le monde sait que les marchés sont manipulés. Achetez maintenant, l'information sortira ce soir.",
      "La trajectoire AIS prouve une attaque coordonnée. Inutile d'attendre les experts."
    ],
    mediaLabels: [
      { kind: "ship", title: "Vidéo de nuit", caption: "Aucune date visible, source originale introuvable" },
      { kind: "map", title: "Carte virale", caption: "Même fond de carte, légendes contradictoires" },
      { kind: "oil", title: "Graphique carburant", caption: "Échelle coupée, donnée non sourcée" },
      { kind: "document", title: "Communiqué supposé", caption: "Logo plausible, formulation inhabituelle" },
      { kind: "chart", title: "Courbe de panique", caption: "Chiffre relayé sans méthode ni source" }
    ],
    fixedPosts: [
      {
        id: "ormuz-fixed-1",
        minute: 12,
        actor: "@cmc_maritime",
        content:
          "Un incident de navigation est signalé dans une zone limitée. Une enquête est ouverte. Aucun élément confirmé ne permet d'annoncer une fermeture du détroit.",
        suspect: false,
        likes: 980,
        reposts: 420,
        replies: 88
      },
      {
        id: "ormuz-fixed-2",
        minute: 24,
        actor: "@osint_flash_24",
        content:
          "EXCLUSIF : vidéo d'une frappe dans Ormuz cette nuit. Les autorités minimisent déjà. Partagez avant suppression. #OrmuzEnFeu",
        suspect: true,
        reason: "Vidéo non datée, absence de source originale, urgence artificielle et appel au partage.",
        likes: 6400,
        reposts: 5200,
        replies: 980,
        media: { kind: "ship", title: "Vidéo de nuit", caption: "Image spectaculaire mais non géolocalisée" }
      },
      {
        id: "ormuz-fixed-3",
        minute: 41,
        actor: "@navires_donnees",
        content:
          "La carte AIS publique montre des trajectoires partielles. Ce type de donnée ne permet pas, seul, de conclure à une fermeture ou à une attaque.",
        suspect: false,
        likes: 1500,
        reposts: 760,
        replies: 132
      },
      {
        id: "ormuz-fixed-4",
        minute: 53,
        actor: "@petrole_verite",
        content:
          "Le carburant va manquer : les initiés remplissent déjà leurs stocks. Ceux qui attendent les communiqués paieront le prix fort.",
        suspect: true,
        reason: "Rumeur économique anxiogène, absence de donnée vérifiable et incitation à un comportement de panique.",
        likes: 4300,
        reposts: 3900,
        replies: 720,
        media: { kind: "oil", title: "Graphique viral", caption: "Axe tronqué et source absente" }
      },
      {
        id: "ormuz-fixed-5",
        minute: 76,
        actor: "@carterouge_live",
        content:
          "Carte officielle récupérée : toute la zone est en rouge. Le détroit est perdu pour plusieurs semaines. #RouteDuPetrole",
        suspect: true,
        reason: "Faux document probable, vocabulaire dramatique, origine invérifiable et contradiction avec les sources identifiées.",
        likes: 5100,
        reposts: 4700,
        replies: 850,
        media: { kind: "map", title: "Carte rouge", caption: "Légende non standard, aucun lien vers l'autorité citée" }
      },
      {
        id: "ormuz-fixed-6",
        minute: 92,
        actor: "@agence_horizon",
        content:
          "Nos vérifications ne confirment ni fermeture du détroit, ni naufrage de plusieurs bâtiments. Plusieurs vidéos virales semblent anciennes ou non localisées.",
        suspect: false,
        likes: 2100,
        reposts: 1200,
        replies: 260
      },
      {
        id: "ormuz-fixed-7",
        minute: 118,
        actor: "@temoin_golfe",
        content:
          "Je suis sur place : explosions partout, navires en feu, impossible de montrer plus. Croyez les témoins, pas les bureaux climatisés.",
        suspect: true,
        reason: "Témoignage invérifiable, images absentes, opposition émotionnelle entre témoins et sources vérifiables.",
        likes: 3600,
        reposts: 3100,
        replies: 640
      }
    ]
  },
  {
    id: "eau-coupures",
    title: "Rumeur de coupures d'eau",
    briefing:
      "Une rumeur annonce des coupures d'eau massives dans une agglomération fictive. Les élèves doivent repérer si une campagne coordonnée amplifie la panique.",
    objective: "Identifier les comptes et contenus qui transforment une information incertaine en alerte virale.",
    timeWindow: "08:00-12:30",
    location: "Valmont-sur-Rive",
    volume: 142,
    seed: 81021,
    trends: [
      { tag: "#ValmontSansEau", count: "18,4 k" },
      { tag: "#MairieCacheTout", count: "9,7 k" },
      { tag: "#InfoValmont", count: "4,2 k" },
      { tag: "#ReserveEau", count: "2,9 k" }
    ],
    clues: [
      "Plusieurs comptes publient la même formule à quelques minutes d'intervalle.",
      "Les captures partagées ne citent pas de document vérifiable.",
      "Des comptes peu anciens amplifient des messages très émotionnels.",
      "Une source institutionnelle donne une information plus nuancée."
    ],
    actors: [
      { name: "Mairie de Valmont", handle: "@valmont_officiel", verified: true, stance: "official", trust: "high" },
      { name: "Radio Rive Locale", handle: "@radio_rive", verified: true, stance: "media", trust: "high" },
      { name: "Info Valmont 24", handle: "@InfoValmont24", verified: false, stance: "amplifier", trust: "low" },
      { name: "Julie Parent", handle: "@julie_parent", verified: false, stance: "citizen", trust: "medium" },
      { name: "Alerte Citoyenne", handle: "@AlerteCitoyenne_", verified: false, stance: "amplifier", trust: "low" },
      { name: "DataRive", handle: "@DataRive", verified: false, stance: "analyst", trust: "medium" },
      { name: "Canal Service Eau", handle: "@service_eau_vsr", verified: true, stance: "official", trust: "high" },
      { name: "Voix Libre 77", handle: "@voixlibre77", verified: false, stance: "amplifier", trust: "low" },
      { name: "Samir au Marché", handle: "@samir_marche", verified: false, stance: "citizen", trust: "medium" },
      { name: "Observatoire Civic", handle: "@obs_civic", verified: false, stance: "analyst", trust: "high" }
    ],
    normalTemplates: [
      "Quelqu'un a une source fiable sur les coupures annoncees ? Je ne trouve rien sur le site de la mairie.",
      "Le service eau parle d'une intervention technique limitee au quartier Nord. Rien vu sur une coupure generale.",
      "Les rayons d'eau sont plus vides que d'habitude ce matin, mais le magasin dit attendre une livraison.",
      "Attention aux captures sans lien. On peut attendre un communique clair avant de partager.",
      "La radio locale annonce un point d'information a 10 h 30 avec le service technique.",
      "J'ai appele le numero municipal : ils confirment une baisse de pression, pas une coupure massive.",
      "On devrait garder les bouteilles pour les personnes fragiles si la rumeur provoque une ruée.",
      "La carte des travaux montre seulement deux rues concernees aujourd'hui.",
      "Le mot 'massif' circule beaucoup, mais je ne vois pas de source primaire.",
      "Des voisins disent avoir de l'eau normalement. Situation peut-etre tres localisee."
    ],
    suspectTemplates: [
      "URGENT : preparez des reserves, la ville va couper l'eau partout demain matin. Ils ne veulent pas l'avouer.",
      "On me confirme de source interne que la mairie cache une panne majeure. Partagez avant suppression.",
      "Meme phrase que plusieurs comptes : plus une goutte d'eau dans 24 h, faites tourner.",
      "Capture recue en prive : plan de coupure generalise. Pas le temps de verifier, prevenez vos proches.",
      "Les medias locaux dorment. Les habitants doivent se proteger maintenant, achetez tout ce que vous pouvez.",
      "Un technicien anonyme parle d'une contamination. Pourquoi le silence officiel ?",
      "Tout le monde sait que Valmont n'a plus de reserve. Les communiques rassurants sont de la com.",
      "Si vous attendez une preuve, ce sera trop tard. La coupure totale commence cette nuit."
    ],
    mediaLabels: [
      { kind: "water", title: "Capture partagee", caption: "Image sans lien vers la source originale" },
      { kind: "shop", title: "Rayon photographie", caption: "Photo non datee reprise par plusieurs comptes" },
      { kind: "map", title: "Carte simplifiee", caption: "Perimetre flou, quartiers non sourcés" }
    ],
    fixedPosts: [
      {
        id: "eau-fixed-1",
        minute: 18,
        actor: "@service_eau_vsr",
        content:
          "Intervention technique en cours secteur Nord. Baisse de pression possible pendant deux heures. Aucun element ne confirme une coupure generalisee.",
        suspect: false,
        likes: 118,
        reposts: 54,
        replies: 18
      },
      {
        id: "eau-fixed-2",
        minute: 31,
        actor: "@AlerteCitoyenne_",
        content:
          "Ils minimisent. Meme message que ce matin : coupure totale imminente, faites des reserves maintenant. #ValmontSansEau",
        suspect: true,
        reason: "Amplification alarmiste sans source et reprise d'un narratif coordonne.",
        likes: 1240,
        reposts: 982,
        replies: 210,
        media: { kind: "water", title: "Capture virale", caption: "Aucune URL, seulement une image recadree" }
      },
      {
        id: "eau-fixed-3",
        minute: 47,
        actor: "@obs_civic",
        content:
          "On observe 26 comptes recents qui publient une formule tres proche : 'plus une goutte d'eau dans 24 h'. La prudence est necessaire avant relais.",
        suspect: false,
        likes: 302,
        reposts: 144,
        replies: 32
      },
      {
        id: "eau-fixed-4",
        minute: 64,
        actor: "@voixlibre77",
        content:
          "Un agent municipal vient de me dire que les cuves sont contaminees. Les familles doivent agir sans attendre. #MairieCacheTout",
        suspect: true,
        reason: "Temoignage anonyme invérifiable, urgence émotionnelle et accusation non sourcée.",
        likes: 2200,
        reposts: 1760,
        replies: 420
      }
    ]
  },
  {
    id: "lycee-fausse-note",
    title: "Fausse note administrative",
    briefing:
      "Un faux document circule autour d'un lycée fictif et annonce l'annulation d'examens blancs. Les élèves doivent distinguer information officielle, satire, rumeur et manipulation.",
    objective: "Repérer l'origine probable de la rumeur et les messages qui cherchent à provoquer la confusion.",
    timeWindow: "17:00-21:00",
    location: "Lycée Jean-Morel",
    volume: 118,
    seed: 51483,
    trends: [
      { tag: "#BacBlancAnnule", count: "7,8 k" },
      { tag: "#JeanMorel", count: "3,1 k" },
      { tag: "#PronoteDown", count: "1,6 k" },
      { tag: "#InfoParents", count: "980" }
    ],
    clues: [
      "Le document le plus partagé comporte une mise en page incohérente.",
      "Le compte à l'origine du message imite un compte officiel.",
      "Des élèves relaient la rumeur sans malveillance mais sans vérification.",
      "Le lycée publie un démenti précis, moins partagé que la rumeur."
    ],
    actors: [
      { name: "Lycée Jean-Morel", handle: "@lycee_jeanmorel", verified: true, stance: "official", trust: "high" },
      { name: "Parents Morel", handle: "@parentsmorel", verified: false, stance: "citizen", trust: "medium" },
      { name: "Jean Morel Infos", handle: "@jeanmorel_info", verified: false, stance: "amplifier", trust: "low" },
      { name: "Noa Terminale", handle: "@noa_term", verified: false, stance: "citizen", trust: "medium" },
      { name: "Bureau Vie Scolaire", handle: "@vie_scolaire_jm", verified: true, stance: "official", trust: "high" },
      { name: "Actu Examens", handle: "@actuexamens", verified: false, stance: "media", trust: "medium" },
      { name: "Morel Confidentiel", handle: "@morel_conf", verified: false, stance: "amplifier", trust: "low" },
      { name: "Clara Docs", handle: "@clara_docs", verified: false, stance: "analyst", trust: "high" }
    ],
    normalTemplates: [
      "Je ne vois rien dans l'espace officiel. Quelqu'un a un lien direct ?",
      "La vie scolaire vient de confirmer que le calendrier est maintenu pour l'instant.",
      "Le document partagé n'a pas le bon en-tête et la date ne correspond pas au calendrier.",
      "Merci d'eviter de faire tourner la capture sans verification, ca met tout le monde en stress.",
      "Le lycée annonce un message aux familles dans la soirée, attendons le canal officiel.",
      "Pronote rame, mais ça ne veut pas dire que les examens sont annules.",
      "Un delegue dit que les profs n'ont reçu aucune consigne d'annulation.",
      "La rumeur part d'un compte qui ressemble au compte du lycée mais n'est pas le même."
    ],
    suspectTemplates: [
      "OFFICIEL : bac blanc annule, la note interne circule déjà. Les admins vont effacer, partagez vite.",
      "Les parents doivent exiger des explications. On nous cache l'annulation depuis midi.",
      "Le compte du lycée ne dira rien avant demain. La vraie info est ici : examens annulés.",
      "Même des surveillants le disent en privé : calendrier explosé, plus personne ne maîtrise.",
      "La capture est assez claire, pas besoin d'attendre une validation. #BacBlancAnnule",
      "Si vous révisez encore ce soir, vous perdez votre temps. La décision est prise."
    ],
    mediaLabels: [
      { kind: "document", title: "Note administrative", caption: "En-tête irrégulier et signature absente" },
      { kind: "school", title: "Capture de conversation", caption: "Conversation non authentifiée" },
      { kind: "chart", title: "Statistique virale", caption: "Chiffre non relié à une source" }
    ],
    fixedPosts: [
      {
        id: "lycee-fixed-1",
        minute: 9,
        actor: "@jeanmorel_info",
        content:
          "Note interne recue : les bacs blancs seraient annules. Les familles doivent être prévenues avant que ça disparaisse. #BacBlancAnnule",
        suspect: true,
        reason: "Compte imitateur, conditionnel transformé en alerte et pièce jointe douteuse.",
        likes: 860,
        reposts: 730,
        replies: 130,
        media: { kind: "document", title: "Note virale", caption: "Logo flou, aucune référence administrative" }
      },
      {
        id: "lycee-fixed-2",
        minute: 36,
        actor: "@lycee_jeanmorel",
        content:
          "Le calendrier des examens blancs est maintenu. Toute information officielle est publiée sur l'ENT et envoyée aux familles.",
        suspect: false,
        likes: 420,
        reposts: 198,
        replies: 58
      },
      {
        id: "lycee-fixed-3",
        minute: 52,
        actor: "@morel_conf",
        content:
          "Le démenti est juste là pour éviter la panique. Plusieurs profs confirment l'annulation en off.",
        suspect: true,
        reason: "Renversement du démenti officiel sans preuve et appel à des sources anonymes.",
        likes: 1170,
        reposts: 910,
        replies: 244
      }
    ]
  }
];

const state = {
  scenarios: [...builtInScenarios],
  scenario: null,
  posts: [],
  flags: new Map(),
  filter: "all",
  query: "",
  activePostId: null
};

const els = {
  scenarioSelect: document.querySelector("#scenarioSelect"),
  scenarioBrief: document.querySelector("#scenarioBrief"),
  scenarioMeta: document.querySelector("#scenarioMeta"),
  trendList: document.querySelector("#trendList"),
  postCount: document.querySelector("#postCount"),
  feed: document.querySelector("#feed"),
  searchInput: document.querySelector("#searchInput"),
  flaggedCount: document.querySelector("#flaggedCount"),
  confidenceScore: document.querySelector("#confidenceScore"),
  flagList: document.querySelector("#flagList"),
  clearFlags: document.querySelector("#clearFlags"),
  importBtn: document.querySelector("#importBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  teacherToggle: document.querySelector("#teacherToggle"),
  fileInput: document.querySelector("#fileInput"),
  annotationDialog: document.querySelector("#annotationDialog"),
  annotationPost: document.querySelector("#annotationPost"),
  flagReason: document.querySelector("#flagReason"),
  flagNote: document.querySelector("#flagNote"),
  saveAnnotation: document.querySelector("#saveAnnotation"),
  teacherDialog: document.querySelector("#teacherDialog"),
  scenarioEditor: document.querySelector("#scenarioEditor"),
  answerKey: document.querySelector("#answerKey"),
  applyScenario: document.querySelector("#applyScenario"),
  copyTemplate: document.querySelector("#copyTemplate")
};

function hashSeed(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(list, random) {
  return list[Math.floor(random() * list.length)];
}

function formatTime(startHour, minute) {
  const date = new Date(2026, 0, 1, startHour, minute);
  return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

function actorByHandle(scenario, handle) {
  return scenario.actors.find((actor) => actor.handle === handle) || scenario.actors[0];
}

function generatePosts(scenario) {
  const random = mulberry32(scenario.seed || hashSeed(scenario.id || scenario.title));
  const startHour = Number((scenario.timeWindow || "08:00").slice(0, 2)) || 8;
  const volume = Math.max(20, Number(scenario.volume) || 100);
  const fixedPosts = scenario.fixedPosts || [];
  const generated = [];

  for (let i = 0; i < volume - fixedPosts.length; i += 1) {
    const suspectChance = 0.22 + (i > volume * 0.45 ? 0.08 : 0);
    const suspect = random() < suspectChance;
    const candidates = scenario.actors.filter((actor) => suspect ? actor.trust === "low" : actor.trust !== "low");
    const actor = pick(candidates.length ? candidates : scenario.actors, random);
    const templates = suspect ? scenario.suspectTemplates : scenario.normalTemplates;
    const minute = Math.floor(random() * 260);
    const trend = pick(scenario.trends, random).tag;
    const hasMedia = random() > (suspect ? 0.58 : 0.82);
    const spike = suspect ? 3.6 : 1;
    const likes = Math.floor((12 + random() * 280) * spike);
    const reposts = Math.floor((3 + random() * 120) * spike);
    const replies = Math.floor((1 + random() * 55) * (suspect ? 2.4 : 1));

    generated.push({
      id: `${scenario.id || "scenario"}-gen-${i}`,
      minute,
      actor: actor.handle,
      content: `${pick(templates, random)} ${random() > 0.62 ? trend : ""}`.trim(),
      suspect,
      reason: suspect ? inferReason(actor, hasMedia) : "",
      likes,
      reposts,
      replies,
      media: hasMedia ? pick(scenario.mediaLabels || [], random) : null
    });
  }

  const normalizedFixed = fixedPosts.map((post, index) => ({
    ...post,
    id: post.id || `${scenario.id || "scenario"}-fixed-${index}`,
    minute: Number(post.minute) || index * 12
  }));

  return [...generated, ...normalizedFixed]
    .sort((a, b) => a.minute - b.minute)
    .map((post, index) => {
      const actor = actorByHandle(scenario, post.actor);
      return {
        ...post,
        index: index + 1,
        time: formatTime(startHour, post.minute),
        actor
      };
    });
}

function inferReason(actor, hasMedia) {
  if (actor.stance === "amplifier" && hasMedia) {
    return "Compte amplificateur, visuel peu sourcé et formulation alarmiste.";
  }
  if (actor.stance === "amplifier") {
    return "Compte amplificateur, message très affirmatif sans source vérifiable.";
  }
  return "Message à forte charge émotionnelle qui demande une vérification.";
}

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMedia(media) {
  if (!media) return "";
  const palette = {
    water: ["#b8d8ee", "#2b75a7", "#f9fbfd"],
    shop: ["#f5d7a1", "#b45309", "#ffffff"],
    map: ["#d4eadf", "#0f766e", "#ffffff"],
    document: ["#e8edf4", "#344456", "#ffffff"],
    school: ["#d9e6f7", "#2364aa", "#ffffff"],
    chart: ["#f2d6d1", "#b42318", "#ffffff"],
    ship: ["#c7d8e8", "#1d4e89", "#ffffff"],
    oil: ["#e8decf", "#5f5a47", "#ffffff"]
  }[media.kind] || ["#d8e6f0", "#2364aa", "#ffffff"];

  const svg = `
    <svg role="img" aria-label="${escapeHtml(media.title)}" viewBox="0 0 132 104" xmlns="http://www.w3.org/2000/svg">
      <rect width="132" height="104" fill="${palette[0]}"/>
      <rect x="12" y="14" width="108" height="72" rx="6" fill="${palette[2]}" opacity=".86"/>
      <path d="M20 76 C36 44, 52 68, 68 40 S98 50, 112 24" fill="none" stroke="${palette[1]}" stroke-width="7" stroke-linecap="round"/>
      <circle cx="32" cy="30" r="9" fill="${palette[1]}" opacity=".75"/>
      <rect x="22" y="84" width="88" height="5" rx="2.5" fill="${palette[1]}" opacity=".42"/>
    </svg>
  `;

  return `
    <div class="post-media">
      ${svg}
      <div class="media-copy">
        <strong>${escapeHtml(media.title)}</strong>
        <span>${escapeHtml(media.caption)}</span>
      </div>
    </div>
  `;
}

function renderScenarioOptions() {
  els.scenarioSelect.innerHTML = state.scenarios
    .map((scenario) => `<option value="${escapeHtml(scenario.id)}">${escapeHtml(scenario.title)}</option>`)
    .join("");
}

function renderScenarioInfo() {
  const scenario = state.scenario;
  els.scenarioBrief.textContent = scenario.briefing;
  els.postCount.textContent = `${state.posts.length} posts`;
  els.scenarioMeta.innerHTML = [
    ["Objectif", scenario.objective],
    ["Lieu fictif", scenario.location || "Non précisé"],
    ["Fenêtre", scenario.timeWindow || "Libre"]
  ]
    .map(([label, value]) => `<div class="meta-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`)
    .join("");
  els.trendList.innerHTML = (scenario.trends || [])
    .map((trend) => `<div class="trend"><span>${escapeHtml(trend.tag)}</span><span>${escapeHtml(trend.count)}</span></div>`)
    .join("");
}

function filteredPosts() {
  const q = state.query.trim().toLowerCase();
  return state.posts.filter((post) => {
    const matchesFilter =
      state.filter === "all" ||
      (state.filter === "flagged" && state.flags.has(post.id)) ||
      (state.filter === "media" && post.media);
    const haystack = `${post.actor.name} ${post.actor.handle} ${post.content}`.toLowerCase();
    return matchesFilter && (!q || haystack.includes(q));
  });
}

function renderFeed() {
  const posts = filteredPosts();
  els.feed.innerHTML = posts.length
    ? posts.map(renderPost).join("")
    : `<div class="panel"><p class="brief">Aucun post ne correspond au filtre actif.</p></div>`;
}

function renderPost(post) {
  const flagged = state.flags.get(post.id);
  return `
    <article class="post ${flagged ? "is-flagged" : ""}" data-post-id="${escapeHtml(post.id)}">
      <div class="avatar" aria-hidden="true">${escapeHtml(initials(post.actor.name))}</div>
      <div>
        <div class="post-head">
          <strong>${escapeHtml(post.actor.name)}</strong>
          ${post.actor.verified ? `<span class="badge" title="Compte vérifié">✓</span>` : ""}
          <span class="handle">${escapeHtml(post.actor.handle)}</span>
          <span class="time">· ${escapeHtml(post.time)}</span>
        </div>
        <p class="post-content">${linkify(escapeHtml(post.content))}</p>
        ${renderMedia(post.media)}
        <div class="post-foot">
          <div class="stats">
            <span>${formatNumber(post.replies)} réponses</span>
            <span>${formatNumber(post.reposts)} relais</span>
            <span>${formatNumber(post.likes)} réactions</span>
          </div>
          <div class="post-actions">
            <button class="action-button ${flagged ? "active" : ""}" data-action="flag">
              ${flagged ? "Signalé" : "Signaler"}
            </button>
            <button class="action-button" data-action="annotate">Annoter</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function linkify(value) {
  return value.replace(/(#[-\p{L}\p{N}_]+)/gu, '<strong class="hashtag">$1</strong>');
}

function formatNumber(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1).replace(".", ",")} k`;
  return String(value);
}

function renderFlags() {
  const flags = [...state.flags.values()];
  const suspectIds = new Set(state.posts.filter((post) => post.suspect).map((post) => post.id));
  const truePositiveCount = flags.filter((flag) => suspectIds.has(flag.postId)).length;
  const coverage = suspectIds.size ? Math.round((truePositiveCount / suspectIds.size) * 100) : 0;

  els.flaggedCount.textContent = String(flags.length);
  els.confidenceScore.textContent = `${coverage}%`;

  if (!flags.length) {
    els.flagList.className = "flag-list empty";
    els.flagList.textContent = "Aucun post signalé pour le moment.";
    return;
  }

  els.flagList.className = "flag-list";
  els.flagList.innerHTML = flags
    .map((flag) => {
      const post = state.posts.find((item) => item.id === flag.postId);
      return `
        <div class="flag-item">
          <strong>${escapeHtml(post.actor.handle)} · ${escapeHtml(flag.reason)}</strong>
          <span>${escapeHtml(flag.note || post.content.slice(0, 92))}</span>
        </div>
      `;
    })
    .join("");
}

function renderAnswerKey() {
  const suspectPosts = state.posts.filter((post) => post.suspect);
  els.answerKey.innerHTML = `
    <p class="helper">${suspectPosts.length} publications sont marquées comme problématiques dans ce scénario.</p>
    ${suspectPosts.slice(0, 18).map((post) => `
      <div class="key-item">
        <strong>${escapeHtml(post.time)} · ${escapeHtml(post.actor.handle)}</strong>
        <span>${escapeHtml(post.reason || "Signal suspect à justifier.")}</span>
      </div>
    `).join("")}
  `;
}

function loadScenario(id) {
  const scenario = state.scenarios.find((item) => item.id === id) || state.scenarios[0];
  state.scenario = structuredClone(scenario);
  state.posts = generatePosts(state.scenario);
  state.flags.clear();
  state.query = "";
  els.searchInput.value = "";
  renderScenarioInfo();
  renderFeed();
  renderFlags();
  renderAnswerKey();
  els.scenarioEditor.value = JSON.stringify(state.scenario, null, 2);
}

function toggleFlag(postId) {
  if (state.flags.has(postId)) {
    state.flags.delete(postId);
  } else {
    state.flags.set(postId, { postId, reason: "À vérifier", note: "" });
  }
  renderFeed();
  renderFlags();
}

function openAnnotation(postId) {
  const post = state.posts.find((item) => item.id === postId);
  if (!post) return;
  state.activePostId = postId;
  const flag = state.flags.get(postId) || { reason: "Coordination", note: "" };
  els.annotationPost.textContent = `${post.actor.handle} : ${post.content}`;
  els.flagReason.value = flag.reason === "À vérifier" ? "Coordination" : flag.reason;
  els.flagNote.value = flag.note || "";
  els.annotationDialog.showModal();
}

function saveAnnotation() {
  if (!state.activePostId) return;
  state.flags.set(state.activePostId, {
    postId: state.activePostId,
    reason: els.flagReason.value,
    note: els.flagNote.value.trim()
  });
  state.activePostId = null;
  renderFeed();
  renderFlags();
}

function exportScenario() {
  const blob = new Blob([JSON.stringify(state.scenario, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${state.scenario.id || "scenario"}-simuveille.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function importScenario(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  const scenarios = Array.isArray(parsed) ? parsed : [parsed];
  scenarios.forEach(addScenario);
  renderScenarioOptions();
  els.scenarioSelect.value = scenarios[0].id;
  loadScenario(scenarios[0].id);
}

function addScenario(scenario) {
  validateScenario(scenario);
  const existingIndex = state.scenarios.findIndex((item) => item.id === scenario.id);
  if (existingIndex >= 0) {
    state.scenarios[existingIndex] = scenario;
  } else {
    state.scenarios.push(scenario);
  }
}

function validateScenario(scenario) {
  const required = ["id", "title", "briefing", "actors", "normalTemplates", "suspectTemplates"];
  const missing = required.filter((key) => !scenario[key] || (Array.isArray(scenario[key]) && !scenario[key].length));
  if (missing.length) {
    throw new Error(`Champ manquant dans le scénario : ${missing.join(", ")}`);
  }
}

function applyScenarioJson() {
  try {
    const scenario = JSON.parse(els.scenarioEditor.value);
    addScenario(scenario);
    renderScenarioOptions();
    els.scenarioSelect.value = scenario.id;
    loadScenario(scenario.id);
    els.teacherDialog.close();
  } catch (error) {
    alert(`Impossible d'appliquer ce JSON : ${error.message}`);
  }
}

function emptyTemplate() {
  return {
    id: "nouveau-scenario",
    title: "Nouveau scénario",
    briefing: "Décris ici la situation fictive à analyser.",
    objective: "Décris ce que les élèves doivent repérer.",
    timeWindow: "08:00-12:00",
    location: "Lieu fictif",
    volume: 100,
    seed: 12345,
    trends: [{ tag: "#MotCle", count: "1,2 k" }],
    clues: ["Indice attendu dans la correction."],
    actors: [
      { name: "Compte officiel", handle: "@officiel", verified: true, stance: "official", trust: "high" },
      { name: "Compte amplificateur", handle: "@alerte_info", verified: false, stance: "amplifier", trust: "low" }
    ],
    normalTemplates: ["Message prudent avec demande de source."],
    suspectTemplates: ["Message alarmiste sans source qui pousse à partager vite."],
    mediaLabels: [{ kind: "document", title: "Document partagé", caption: "Indice visuel à vérifier" }],
    fixedPosts: [
      {
        id: "nouveau-fixed-1",
        minute: 20,
        actor: "@alerte_info",
        content: "Message problématique explicitement placé par l'enseignant.",
        suspect: true,
        reason: "Explique ici le signal faible attendu.",
        likes: 400,
        reposts: 280,
        replies: 60
      }
    ]
  };
}

function bindEvents() {
  els.scenarioSelect.addEventListener("change", (event) => loadScenario(event.target.value));
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderFeed();
  });
  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segment").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      state.filter = button.dataset.filter;
      renderFeed();
    });
  });
  els.feed.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const post = event.target.closest(".post");
    if (!post) return;
    if (button.dataset.action === "flag") toggleFlag(post.dataset.postId);
    if (button.dataset.action === "annotate") openAnnotation(post.dataset.postId);
  });
  els.clearFlags.addEventListener("click", () => {
    state.flags.clear();
    renderFeed();
    renderFlags();
  });
  els.saveAnnotation.addEventListener("click", saveAnnotation);
  els.importBtn.addEventListener("click", () => els.fileInput.click());
  els.fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      await importScenario(file);
    } catch (error) {
      alert(`Import impossible : ${error.message}`);
    } finally {
      event.target.value = "";
    }
  });
  els.exportBtn.addEventListener("click", exportScenario);
  els.teacherToggle.addEventListener("click", () => {
    els.scenarioEditor.value = JSON.stringify(state.scenario, null, 2);
    renderAnswerKey();
    els.teacherDialog.showModal();
  });
  els.applyScenario.addEventListener("click", applyScenarioJson);
  els.copyTemplate.addEventListener("click", () => {
    els.scenarioEditor.value = JSON.stringify(emptyTemplate(), null, 2);
  });
}

renderScenarioOptions();
bindEvents();
loadScenario(builtInScenarios[0].id);
