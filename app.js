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
    id: "greenland-gonni-exactions",
    title: "Greenland accusée d'exactions à Gonni",
    briefing:
      "Simulation pédagogique : dans cet exercice, Greenland est un État fictif engagé dans une opération extérieure au Sahel. Après une opération près de Gonni, plusieurs comptes accusent ses forces d'avoir commis des exactions contre des villageois. Le fil mélange témoignages, images anciennes, démentis officiels, enquêtes journalistiques et contenus coordonnés.",
    objective: "Identifier les contenus qui documentent prudemment des accusations graves, ceux qui manipulent des images ou des chiffres, et ceux qui cherchent à polariser avant vérification.",
    timeWindow: "08:00-13:30",
    location: "Région fictive de Gonni, Sahel",
    volume: 162,
    seed: 60421,
    trends: [
      { tag: "#Gonni", count: "38,4 k" },
      { tag: "#GreenlandAuSahel", count: "29,1 k" },
      { tag: "#JusticePourGonni", count: "17,6 k" },
      { tag: "#ImagesDeGonni", count: "9,8 k" }
    ],
    clues: [
      "Une vidéo de village brûlé est reprise comme preuve alors qu'elle circule déjà dans un autre conflit fictif.",
      "Plusieurs comptes publient le même bilan chiffré sans source identifiable.",
      "Les messages les plus viraux imposent une conclusion avant enquête indépendante.",
      "Les sources prudentes distinguent témoignage, image géolocalisée, bilan confirmé et accusation non vérifiée."
    ],
    actors: [
      { name: "Commandement Greenland", handle: "@cmd_greenland", verified: true, stance: "official", trust: "high" },
      { name: "Mission ONU Sahel", handle: "@mission_onu_sahel", verified: true, stance: "official", trust: "high" },
      { name: "Radio Sahel Libre", handle: "@radio_sahel_libre", verified: true, stance: "media", trust: "high" },
      { name: "Enquête Civile", handle: "@enquete_civile", verified: false, stance: "analyst", trust: "high" },
      { name: "Awa de Gonni", handle: "@awa_gonni", verified: false, stance: "citizen", trust: "medium" },
      { name: "Sahel Witness", handle: "@sahel_witness", verified: false, stance: "analyst", trust: "medium" },
      { name: "Gonni Alert", handle: "@gonni_alert", verified: false, stance: "amplifier", trust: "low" },
      { name: "Greenland Leaks", handle: "@greenland_leaks", verified: false, stance: "amplifier", trust: "low" },
      { name: "Justice Sahel 24", handle: "@justice_sahel24", verified: false, stance: "amplifier", trust: "low" },
      { name: "Carte Conflit", handle: "@carte_conflit", verified: false, stance: "amplifier", trust: "low" }
    ],
    normalTemplates: [
      "Des habitants parlent d'abus près de Gonni, mais les chiffres qui circulent ne sont pas encore confirmés par une source indépendante.",
      "La vidéo virale doit être géolocalisée. Un village brûlé ne prouve pas à lui seul qui est responsable.",
      "La Mission ONU annonce recueillir des témoignages. C'est différent d'une conclusion officielle.",
      "Attention aux comptes qui mélangent enquête sur des exactions possibles et appel immédiat à la vengeance.",
      "Le démenti de Greenland ne suffit pas à clore le sujet, mais les captures anonymes ne suffisent pas non plus à établir les faits.",
      "Je cherche la première publication de cette image : elle semble antérieure aux événements de Gonni.",
      "Les ONG locales demandent une enquête indépendante, pas le relais de chiffres non vérifiés.",
      "On peut prendre l'accusation au sérieux sans partager une vidéo dont la date et le lieu sont inconnus."
    ],
    suspectTemplates: [
      "Preuve totale : Greenland a rasé Gonni. Bilan confirmé de 240 villageois, les médias vont enterrer l'affaire.",
      "Vidéo exclusive des exactions. Partagez avant suppression, les comptes officiels effacent tout.",
      "Tout soldat de Greenland est coupable. Il faut répondre maintenant, pas attendre les enquêtes.",
      "Document interne : ordre écrit de punir le village. On publie la capture malgré la censure.",
      "Même les casques bleus savent que Greenland ment. La liste complète des victimes circule en privé.",
      "La photo suffit : maisons brûlées, donc massacre organisé. Ceux qui demandent une source protègent les coupables.",
      "Les chiffres sont pires que ce qu'on dit : 500 morts, aucun survivant fiable pour témoigner.",
      "On reconnaît les uniformes sur l'image, inutile d'écouter les vérificateurs."
    ],
    mediaLabels: [
      { kind: "map", title: "Carte de Gonni", caption: "Localisation approximative, source non précisée" },
      { kind: "document", title: "Liste supposée", caption: "Bilan chiffré sans auteur identifiable" },
      { kind: "ship", title: "Vidéo de village", caption: "Image forte mais date et lieu incertains" },
      { kind: "chart", title: "Bilan viral", caption: "Chiffre relayé sans méthode" }
    ],
    fixedPosts: [
      {
        id: "gonni-fixed-1",
        minute: 14,
        actor: "@mission_onu_sahel",
        content:
          "Des allégations graves concernant des civils près de Gonni sont en cours de vérification. Une équipe recueille témoignages, images et éléments de localisation.",
        suspect: false,
        likes: 1800,
        reposts: 940,
        replies: 210
      },
      {
        id: "gonni-fixed-2",
        minute: 31,
        actor: "@gonni_alert",
        content:
          "Bilan confirmé : 240 villageois exécutés par Greenland. Les preuves sont partout, partagez avant censure. #JusticePourGonni",
        suspect: true,
        reason: "Bilan présenté comme confirmé sans source, appel au partage et accusation définitive avant enquête.",
        likes: 6900,
        reposts: 5800,
        replies: 1120,
        media: { kind: "chart", title: "Bilan viral", caption: "Aucune source pour le chiffre affiché" }
      },
      {
        id: "gonni-fixed-3",
        minute: 58,
        actor: "@enquete_civile",
        content:
          "La vidéo la plus relayée apparaît dans des archives publiées plusieurs mois avant Gonni. Elle ne doit pas être utilisée comme preuve de cet événement.",
        suspect: false,
        likes: 2400,
        reposts: 1700,
        replies: 330
      },
      {
        id: "gonni-fixed-4",
        minute: 86,
        actor: "@greenland_leaks",
        content:
          "Ordre interne récupéré : punir Gonni pour l'exemple. Pas besoin d'attendre l'ONU, le document parle de lui-même.",
        suspect: true,
        reason: "Document invérifiable, source anonyme et injonction à ignorer les vérifications indépendantes.",
        likes: 4700,
        reposts: 3900,
        replies: 780,
        media: { kind: "document", title: "Ordre supposé", caption: "Capture sans métadonnées ni chaîne de provenance" }
      }
    ]
  },
  {
    id: "greenland-bus-croix-rouge",
    title: "Greenland accusée d'avoir visé un bus humanitaire",
    briefing:
      "Simulation pédagogique : après des tirs sur un véhicule près d'un axe humanitaire fictif, des comptes affirment que l'armée de Greenland a ouvert le feu sur un bus de la Croix-Rouge. D'autres sources évoquent un bus civil, un véhicule mal identifié ou une vidéo sortie de son contexte.",
    objective: "Distinguer les faits établis, les indices de manipulation visuelle et les messages qui instrumentalisent l'emblème humanitaire pour amplifier l'indignation.",
    timeWindow: "09:00-14:00",
    location: "Axe humanitaire fictif de Nara-Kolmi",
    volume: 150,
    seed: 71804,
    trends: [
      { tag: "#BusHumanitaire", count: "34,2 k" },
      { tag: "#CroixRouge", count: "22,7 k" },
      { tag: "#GreenlandResponsable", count: "16,9 k" },
      { tag: "#ConvoiNara", count: "7,5 k" }
    ],
    clues: [
      "Une photo montre un emblème humanitaire ajouté sur une capture de mauvaise qualité.",
      "Le Comité humanitaire fictif confirme un incident de sécurité, mais pas l'identité du tireur.",
      "Des comptes confondent bus civil, ambulance et convoi humanitaire.",
      "La même vidéo est publiée avec trois lieux différents."
    ],
    actors: [
      { name: "Comité Humanitaire International", handle: "@chi_humanitaire", verified: true, stance: "official", trust: "high" },
      { name: "Commandement Greenland", handle: "@cmd_greenland", verified: true, stance: "official", trust: "high" },
      { name: "Agence Horizon Afrique", handle: "@horizon_afrique", verified: true, stance: "media", trust: "high" },
      { name: "Vérif Images", handle: "@verif_images", verified: false, stance: "analyst", trust: "high" },
      { name: "Route Nara", handle: "@route_nara", verified: false, stance: "citizen", trust: "medium" },
      { name: "Humanitaire Watch", handle: "@humanitaire_watch", verified: false, stance: "analyst", trust: "medium" },
      { name: "Bus Rouge Info", handle: "@busrouge_info", verified: false, stance: "amplifier", trust: "low" },
      { name: "Sahel Breaking", handle: "@sahel_breaking", verified: false, stance: "amplifier", trust: "low" },
      { name: "Greenland Crimes", handle: "@greenland_crimes", verified: false, stance: "amplifier", trust: "low" }
    ],
    normalTemplates: [
      "Le Comité humanitaire confirme un incident de sécurité, mais ne confirme pas encore que le véhicule était un bus Croix-Rouge.",
      "Sur l'image virale, l'emblème humanitaire semble absent de la première version publiée.",
      "La vidéo ne permet pas d'identifier l'unité qui tire. Il faut éviter de conclure à partir d'un angle unique.",
      "Plusieurs légendes donnent des lieux différents pour la même séquence. C'est un signal d'alerte.",
      "Greenland dément. Ce démenti doit être vérifié, mais il ne faut pas remplacer l'enquête par des montages viraux.",
      "Un bus civil touché reste un fait grave, même si l'étiquette Croix-Rouge est à vérifier.",
      "Les journalistes sur place cherchent le numéro du véhicule et l'itinéraire du convoi.",
      "Les emblèmes humanitaires ont un statut particulier : les fausses attributions peuvent avoir des conséquences très fortes."
    ],
    suspectTemplates: [
      "Greenland a tiré sur un bus Croix-Rouge identifié. Crime de guerre confirmé, les images sont irréfutables.",
      "La Croix-Rouge va nier sous pression. Gardez la capture avec le logo avant suppression.",
      "On voit clairement l'emblème sur le toit, donc il n'y a rien à vérifier.",
      "Ordre radio intercepté : viser le bus humanitaire. Les autorités cachent l'audio complet.",
      "Même scénario partout : Greenland tire sur les secours, puis parle d'erreur.",
      "La vidéo prouve que les soldats savaient. Ceux qui parlent de contexte cherchent à blanchir Greenland.",
      "Le bus transportait uniquement des enfants blessés, bilan terrible confirmé en privé.",
      "Les humanitaires demandent le silence pour protéger leur accès au terrain. Nous publions tout."
    ],
    mediaLabels: [
      { kind: "ship", title: "Vidéo du véhicule", caption: "Angle limité, unité non identifiable" },
      { kind: "document", title: "Capture avec emblème", caption: "Logo possiblement ajouté ou recadré" },
      { kind: "map", title: "Trajet du convoi", caption: "Itinéraire partagé sans source officielle" },
      { kind: "chart", title: "Bilan relayé", caption: "Nombre de victimes non confirmé" }
    ],
    fixedPosts: [
      {
        id: "bus-fixed-1",
        minute: 11,
        actor: "@chi_humanitaire",
        content:
          "Nous confirmons un incident de sécurité impliquant un véhicule civil près de Nara-Kolmi. Les circonstances, l'identification du véhicule et l'origine des tirs sont en cours de vérification.",
        suspect: false,
        likes: 2100,
        reposts: 1300,
        replies: 280
      },
      {
        id: "bus-fixed-2",
        minute: 27,
        actor: "@busrouge_info",
        content:
          "Greenland a ouvert le feu sur un bus Croix-Rouge parfaitement identifié. Regardez le logo sur la capture. #BusHumanitaire",
        suspect: true,
        reason: "Conclusion définitive à partir d'une capture de mauvaise qualité et d'un emblème non authentifié.",
        likes: 6100,
        reposts: 5200,
        replies: 990,
        media: { kind: "document", title: "Capture virale", caption: "Emblème difficile à authentifier" }
      },
      {
        id: "bus-fixed-3",
        minute: 49,
        actor: "@verif_images",
        content:
          "La première version de la vidéo, publiée 18 minutes avant la capture virale, ne montre pas clairement d'emblème humanitaire.",
        suspect: false,
        likes: 2600,
        reposts: 1900,
        replies: 310
      },
      {
        id: "bus-fixed-4",
        minute: 74,
        actor: "@greenland_crimes",
        content:
          "Audio intercepté : ordre direct de viser le bus humanitaire. On publiera la suite si ce post atteint 10 000 relais.",
        suspect: true,
        reason: "Preuve annoncée mais non fournie, incitation à l'amplification et chantage au partage.",
        likes: 5200,
        reposts: 4800,
        replies: 870
      }
    ]
  },
  {
    id: "greenland-violences-sexuelles",
    title: "Accusations de violences sexuelles contre des soldats de Greenland",
    briefing:
      "Simulation pédagogique sensible : Greenland est un État fictif dans cet exercice. Des soldats déployés en opération extérieure sont accusés de violences sexuelles contre plusieurs femmes. Le fil contient des appels à enquête, des témoignages anonymisés, des tentatives de discrédit des victimes et des contenus manipulés. Aucun détail graphique n'est nécessaire pour travailler l'analyse.",
    objective: "Repérer les mécanismes d'attaque informationnelle autour d'accusations de violences sexuelles : instrumentalisation politique, faux témoignages, doxxing, discrédit des victimes, chiffres non vérifiés et confusion entre prudence journalistique et déni.",
    timeWindow: "10:00-16:00",
    location: "Zone fictive d'opération extérieure de Kembala",
    volume: 148,
    seed: 51590,
    trends: [
      { tag: "#Kembala", count: "26,5 k" },
      { tag: "#GreenlandOPEX", count: "19,4 k" },
      { tag: "#ParoleAuxVictimes", count: "12,8 k" },
      { tag: "#EnqueteIndependante", count: "7,2 k" }
    ],
    clues: [
      "Certains comptes publient des noms supposés de victimes ou de soldats sans preuve, ce qui peut mettre des personnes en danger.",
      "Des messages cherchent à discréditer toutes les plaignantes au lieu d'évaluer les éléments disponibles.",
      "D'autres comptes gonflent les chiffres sans source pour imposer une conclusion immédiate.",
      "Les sources fiables protègent l'identité des personnes et demandent une enquête indépendante."
    ],
    actors: [
      { name: "Mission Droits Humains", handle: "@mission_droits", verified: true, stance: "official", trust: "high" },
      { name: "Commandement Greenland", handle: "@cmd_greenland", verified: true, stance: "official", trust: "high" },
      { name: "Radio Kembala", handle: "@radio_kembala", verified: true, stance: "media", trust: "high" },
      { name: "Observatoire Genre Conflit", handle: "@obs_genre_conflit", verified: false, stance: "analyst", trust: "high" },
      { name: "Collectif Femmes Kembala", handle: "@femmes_kembala", verified: false, stance: "citizen", trust: "medium" },
      { name: "Aide Juridique Sahel", handle: "@aide_juridique", verified: false, stance: "analyst", trust: "medium" },
      { name: "Kembala Leaks", handle: "@kembala_leaks", verified: false, stance: "amplifier", trust: "low" },
      { name: "Stop Greenland", handle: "@stop_greenland", verified: false, stance: "amplifier", trust: "low" },
      { name: "OPEX Défense", handle: "@opex_defense", verified: false, stance: "amplifier", trust: "low" },
      { name: "Dossiers Kembala", handle: "@dossiers_kembala", verified: false, stance: "amplifier", trust: "low" }
    ],
    normalTemplates: [
      "Des accusations de violences sexuelles doivent être traitées sérieusement, avec protection des victimes et enquête indépendante.",
      "Radio Kembala parle de plusieurs témoignages anonymisés, pas d'une liste publique de noms.",
      "Publier l'identité supposée de victimes ou de soldats sans vérification peut nuire à l'enquête et aux personnes concernées.",
      "Le démenti officiel de Greenland ne suffit pas à clore le dossier, mais les chiffres viraux doivent aussi être sourcés.",
      "Une ONG demande l'accès aux plaignantes avec accompagnement juridique et médical. C'est une source plus prudente que les captures anonymes.",
      "Je vois deux narratifs extrêmes : tout nier immédiatement ou tout présenter comme prouvé sans enquête.",
      "Les témoignages doivent être recueillis dans un cadre sécurisé, pas transformés en contenu viral.",
      "La prudence journalistique n'est pas un refus de croire ; elle sert à établir des faits utilisables."
    ],
    suspectTemplates: [
      "Liste complète des victimes et des soldats impliqués : partagez avant suppression.",
      "Tout est inventé pour salir Greenland. Ces femmes sont manipulées, affaire classée.",
      "Chiffre confirmé : 70 victimes en une semaine. Les ONG ont peur de publier la vérité.",
      "Photos des accusés retrouvées. On doit les afficher partout, pas attendre la justice.",
      "Les médias protègent les militaires. La seule preuve nécessaire, c'est la colère des habitants.",
      "Les plaignantes changent déjà leur version, donc tout le dossier s'effondre.",
      "Document interne : le commandement savait et a payé les familles pour se taire.",
      "Si vous demandez une enquête, vous couvrez les violeurs. Il faut choisir un camp maintenant."
    ],
    mediaLabels: [
      { kind: "document", title: "Liste supposée", caption: "Noms non vérifiés, risque de mise en danger" },
      { kind: "chart", title: "Chiffres viraux", caption: "Nombre de victimes non sourcé" },
      { kind: "school", title: "Capture de messagerie", caption: "Conversation non authentifiée" },
      { kind: "map", title: "Carte des accusations", caption: "Localisations approximatives et non confirmées" }
    ],
    fixedPosts: [
      {
        id: "violences-fixed-1",
        minute: 18,
        actor: "@mission_droits",
        content:
          "Nous avons reçu des signalements de violences sexuelles présumées impliquant des militaires étrangers à Kembala. Une enquête indépendante et confidentielle est demandée.",
        suspect: false,
        likes: 2400,
        reposts: 1500,
        replies: 360
      },
      {
        id: "violences-fixed-2",
        minute: 35,
        actor: "@kembala_leaks",
        content:
          "Liste complète des victimes et des soldats de Greenland impliqués. Publiez les noms avant que tout disparaisse.",
        suspect: true,
        reason: "Doxxing potentiel, noms non vérifiés et risque direct pour les victimes et l'enquête.",
        likes: 5100,
        reposts: 4600,
        replies: 920,
        media: { kind: "document", title: "Liste virale", caption: "Identités non vérifiées, contenu dangereux" }
      },
      {
        id: "violences-fixed-3",
        minute: 62,
        actor: "@obs_genre_conflit",
        content:
          "Dans ce type d'affaire, la priorité est la protection des personnes, la conservation des preuves et une enquête indépendante. Les listes virales sont à proscrire.",
        suspect: false,
        likes: 1900,
        reposts: 1200,
        replies: 210
      },
      {
        id: "violences-fixed-4",
        minute: 91,
        actor: "@opex_defense",
        content:
          "Tout est fabriqué contre Greenland. Les plaignantes mentent forcément puisqu'aucune preuve publique n'est encore sortie.",
        suspect: true,
        reason: "Discrédit global des plaignantes, faux raisonnement et confusion entre confidentialité de l'enquête et absence de faits.",
        likes: 3900,
        reposts: 3100,
        replies: 760
      }
    ]
  },
  {
    id: "hopital-cyberattaque",
    title: "Cyberattaque fictive contre un hôpital",
    briefing:
      "Simulation pédagogique : un hôpital fictif annonce une panne informatique. Des comptes transforment l'incident en rumeur de fuite massive de données, puis en accusation politique et sanitaire. Les élèves doivent distinguer les faits confirmés, les hypothèses crédibles et les contenus d'amplification.",
    objective: "Repérer les messages qui exploitent une crise cyber pour provoquer panique, défiance institutionnelle ou partage de fausses captures.",
    timeWindow: "07:00-12:00",
    location: "Hôpital Saint-Aubin, ville fictive",
    volume: 146,
    seed: 33041,
    trends: [
      { tag: "#HopitalSaintAubin", count: "21,5 k" },
      { tag: "#DossiersPatients", count: "14,9 k" },
      { tag: "#CyberPanne", count: "8,2 k" },
      { tag: "#UrgencesFermees", count: "5,7 k" }
    ],
    clues: [
      "Des captures supposées de dossiers patients ne comportent aucun élément vérifiable.",
      "Plusieurs comptes répètent la même phrase sur des urgences fermées alors que le communiqué parle d'un accueil régulé.",
      "Un compte se présente comme soignant sans preuve et multiplie les messages alarmistes.",
      "Les sources fiables donnent peu d'informations mais distinguent panne, attaque et fuite de données."
    ],
    actors: [
      { name: "Hôpital Saint-Aubin", handle: "@hopital_sta", verified: true, stance: "official", trust: "high" },
      { name: "Agence Santé Locale", handle: "@ars_valnord", verified: true, stance: "official", trust: "high" },
      { name: "Radio Valnord", handle: "@radio_valnord", verified: true, stance: "media", trust: "high" },
      { name: "CyberVeille Santé", handle: "@cyberveille_sante", verified: false, stance: "analyst", trust: "high" },
      { name: "Parents Saint-Aubin", handle: "@parents_sta", verified: false, stance: "citizen", trust: "medium" },
      { name: "Urgence Info 24", handle: "@urgenceinfo24", verified: false, stance: "amplifier", trust: "low" },
      { name: "Leak Santé", handle: "@leak_sante", verified: false, stance: "amplifier", trust: "low" },
      { name: "Soignant Anonyme", handle: "@soignant_cache", verified: false, stance: "amplifier", trust: "low" },
      { name: "Données Libres", handle: "@donnees_libres", verified: false, stance: "amplifier", trust: "low" }
    ],
    normalTemplates: [
      "L'hôpital parle d'une panne informatique avec maintien des soins urgents. Je ne vois pas de confirmation d'une fuite de données.",
      "Le mot cyberattaque circule, mais la source officielle dit seulement qu'une analyse technique est en cours.",
      "Les urgences ne seraient pas fermées : l'accueil est régulé et les cas non urgents sont réorientés.",
      "Attention aux captures de dossiers patients : sans origine et sans vérification, elles peuvent être fabriquées.",
      "La radio locale annonce un point de situation à 10 h. Attendons une source primaire.",
      "Un incident informatique ne signifie pas automatiquement que tous les dossiers sont publiés.",
      "Le centre hospitalier demande d'appeler avant de se déplacer, ce qui est différent d'une fermeture totale.",
      "Je classe pour l'instant : fait confirmé = panne ; non confirmé = fuite massive."
    ],
    suspectTemplates: [
      "TOUS les dossiers patients sont dans la nature. Si vous avez été soigné ici, changez tout maintenant.",
      "Les urgences sont fermées et ils le cachent. Partagez avant que le communiqué soit modifié.",
      "Un soignant confirme en privé que les opérations sont annulées toute la semaine.",
      "Capture exclusive : les hackers affichent déjà les dossiers. Les médias protègent l'hôpital.",
      "La direction minimise pour éviter les plaintes. Les familles doivent se rendre sur place immédiatement.",
      "On me dit que des décès sont cachés depuis ce matin. Silence total des autorités.",
      "Même phrase dans plusieurs services : plus aucun ordinateur ne marche, chaos complet.",
      "La fuite prouve que les autorités savaient depuis des mois. Ne faites confiance à aucun démenti."
    ],
    mediaLabels: [
      { kind: "document", title: "Capture de dossier", caption: "Donnée sensible supposée, origine non vérifiable" },
      { kind: "chart", title: "Graphique de fuite", caption: "Chiffre spectaculaire sans méthode" },
      { kind: "school", title: "Conversation interne", caption: "Capture de messagerie non authentifiée" }
    ],
    fixedPosts: [
      {
        id: "hopital-fixed-1",
        minute: 16,
        actor: "@hopital_sta",
        content:
          "Incident informatique en cours. Les soins urgents sont maintenus. Les patients non urgents sont invités à appeler avant déplacement.",
        suspect: false,
        likes: 820,
        reposts: 360,
        replies: 90
      },
      {
        id: "hopital-fixed-2",
        minute: 29,
        actor: "@leak_sante",
        content:
          "Capture reçue : dossiers patients publiés par les hackers. L'hôpital cache tout. #DossiersPatients",
        suspect: true,
        reason: "Capture invérifiable, affirmation massive sans source et accusation directe.",
        likes: 3700,
        reposts: 3100,
        replies: 690,
        media: { kind: "document", title: "Capture virale", caption: "Aucun lien vers une source originale" }
      },
      {
        id: "hopital-fixed-3",
        minute: 48,
        actor: "@cyberveille_sante",
        content:
          "Une indisponibilité informatique n'est pas une preuve de fuite. Les captures virales doivent être vérifiées avant tout relais.",
        suspect: false,
        likes: 1300,
        reposts: 740,
        replies: 120
      },
      {
        id: "hopital-fixed-4",
        minute: 72,
        actor: "@soignant_cache",
        content:
          "Je travaille là-bas : urgences fermées, opérations annulées, direction absente. Ne croyez pas les messages officiels.",
        suspect: true,
        reason: "Témoignage anonyme non vérifiable, généralisation et appel à rejeter les sources identifiées.",
        likes: 4100,
        reposts: 3500,
        replies: 810
      }
    ]
  },
  {
    id: "cantine-intoxication",
    title: "Fausse alerte sanitaire dans les cantines",
    briefing:
      "Simulation pédagogique : une rumeur accuse les cantines d'une commune fictive d'avoir provoqué une intoxication massive. Des photos anciennes, témoignages non vérifiés et appels au retrait des enfants circulent très vite.",
    objective: "Identifier les contenus qui transforment un signal sanitaire incertain en mouvement de panique locale.",
    timeWindow: "11:30-16:30",
    location: "Commune fictive de Belle-Rive",
    volume: 132,
    seed: 90217,
    trends: [
      { tag: "#CantinesBelleRive", count: "12,6 k" },
      { tag: "#EnfantsMalades", count: "9,3 k" },
      { tag: "#MenuToxique", count: "6,1 k" },
      { tag: "#ParentsEnColere", count: "3,4 k" }
    ],
    clues: [
      "Une photo de plateau repas est ancienne et déjà apparue dans un autre contexte.",
      "Des comptes appellent à retirer tous les enfants avant toute confirmation sanitaire.",
      "La mairie confirme quelques signalements mais pas d'intoxication massive.",
      "Plusieurs messages citent un médecin scolaire sans nom ni document."
    ],
    actors: [
      { name: "Ville de Belle-Rive", handle: "@ville_bellerive", verified: true, stance: "official", trust: "high" },
      { name: "Info Belle-Rive", handle: "@info_bellerive", verified: true, stance: "media", trust: "high" },
      { name: "Cantines & Santé", handle: "@cantines_sante", verified: false, stance: "analyst", trust: "high" },
      { name: "Collectif Parents BR", handle: "@parents_br", verified: false, stance: "citizen", trust: "medium" },
      { name: "Nora Parent", handle: "@nora_parent", verified: false, stance: "citizen", trust: "medium" },
      { name: "Alerte Menu", handle: "@alerte_menu", verified: false, stance: "amplifier", trust: "low" },
      { name: "BelleRive Confidentiel", handle: "@br_confidentiel", verified: false, stance: "amplifier", trust: "low" },
      { name: "Stop Cantine", handle: "@stop_cantine", verified: false, stance: "amplifier", trust: "low" }
    ],
    normalTemplates: [
      "La mairie parle de quelques enfants malades et d'une vérification du repas, pas d'une intoxication massive confirmée.",
      "La photo du plateau circule sans date. Quelqu'un a la source originale ?",
      "Le bon réflexe est d'attendre le message de l'école et de contacter un médecin si symptômes.",
      "Plusieurs classes n'ont aucun signalement. Prudence avec les messages qui parlent de toute la commune.",
      "Les menus sont publics, mais ça ne prouve ni contamination ni origine commune.",
      "Le collectif parents demande des informations, pas un retrait immédiat de tous les élèves.",
      "Une enquête sanitaire prend du temps : les chiffres non sourcés peuvent amplifier la panique.",
      "Je vois beaucoup de partages de la même photo, mais pas de confirmation qu'elle vient de Belle-Rive."
    ],
    suspectTemplates: [
      "Retirez vos enfants MAINTENANT. La cantine est toxique et les écoles attendent l'ordre de se taire.",
      "Un médecin scolaire confirme plus de 80 enfants touchés, mais personne ne veut publier le chiffre.",
      "La photo prouve tout : repas avarié servi ce midi dans toutes les écoles. #MenuToxique",
      "La mairie savait depuis hier. Les parents doivent bloquer les cantines demain matin.",
      "Même message dans plusieurs groupes : vomissements partout, ambulance devant chaque école.",
      "Si votre enfant a mangé à la cantine, allez directement aux urgences, ne perdez pas de temps.",
      "Les médias locaux minimisent parce que la société de restauration les finance.",
      "Partage massif : ils vont supprimer les photos des plateaux contaminés."
    ],
    mediaLabels: [
      { kind: "shop", title: "Photo de plateau", caption: "Image non datée et contexte incertain" },
      { kind: "document", title: "Message école supposé", caption: "Capture sans en-tête complet" },
      { kind: "chart", title: "Chiffres viraux", caption: "Nombre de cas non sourcé" }
    ],
    fixedPosts: [
      {
        id: "cantine-fixed-1",
        minute: 18,
        actor: "@ville_bellerive",
        content:
          "Plusieurs signalements de maux de ventre sont étudiés. Les familles seront informées par les écoles. Aucune intoxication massive n'est confirmée à ce stade.",
        suspect: false,
        likes: 640,
        reposts: 310,
        replies: 96
      },
      {
        id: "cantine-fixed-2",
        minute: 34,
        actor: "@alerte_menu",
        content:
          "Photo du repas toxique servi aujourd'hui. Retirez vos enfants avant la sortie officielle de la mairie. #EnfantsMalades",
        suspect: true,
        reason: "Photo non datée, injonction de panique et anticipation d'une dissimulation.",
        likes: 2600,
        reposts: 2250,
        replies: 520,
        media: { kind: "shop", title: "Plateau viral", caption: "Image déjà reprise sans source vérifiable" }
      },
      {
        id: "cantine-fixed-3",
        minute: 66,
        actor: "@cantines_sante",
        content:
          "Une suspicion sanitaire se traite avec des faits : nombre de cas, symptômes, repas commun, horaires. Les captures isolées ne suffisent pas.",
        suspect: false,
        likes: 980,
        reposts: 520,
        replies: 80
      },
      {
        id: "cantine-fixed-4",
        minute: 87,
        actor: "@br_confidentiel",
        content:
          "On me confirme 80 enfants malades et des consignes de silence aux directeurs. Les parents doivent se mobiliser ce soir.",
        suspect: true,
        reason: "Chiffre invérifiable, source anonyme et appel à l'action avant confirmation.",
        likes: 3300,
        reposts: 2850,
        replies: 670
      }
    ]
  },
  {
    id: "municipales-faux-sondage",
    title: "Faux sondage avant une élection municipale",
    briefing:
      "Simulation pédagogique : à quelques jours d'une élection municipale fictive, un faux sondage et de prétendus documents internes circulent. Le fil mélange opinion politique, satire, vrais articles et manipulation coordonnée.",
    objective: "Repérer l'usage de faux chiffres, de comptes imitateurs et de narratifs répétés pour influencer la perception d'une campagne.",
    timeWindow: "18:00-23:00",
    location: "Ville fictive de Montfaucon",
    volume: 154,
    seed: 78126,
    trends: [
      { tag: "#Montfaucon2026", count: "17,2 k" },
      { tag: "#SondageChoc", count: "11,8 k" },
      { tag: "#VoteUtile", count: "7,6 k" },
      { tag: "#MairieLeaks", count: "4,1 k" }
    ],
    clues: [
      "Le sondage viral ne donne ni institut, ni échantillon, ni date de terrain.",
      "Un compte imite un média local avec un nom très proche.",
      "Des messages répètent la même formule sur un retrait de candidature.",
      "Les posts suspects cherchent moins à informer qu'à décourager ou déplacer le vote."
    ],
    actors: [
      { name: "Le Courrier Montfaucon", handle: "@courrier_mtf", verified: true, stance: "media", trust: "high" },
      { name: "Ville de Montfaucon", handle: "@ville_mtf", verified: true, stance: "official", trust: "high" },
      { name: "Observatoire Électoral", handle: "@obs_electoral", verified: false, stance: "analyst", trust: "high" },
      { name: "Clara Montfaucon", handle: "@clara_mtf", verified: false, stance: "citizen", trust: "medium" },
      { name: "Débat Local", handle: "@debat_local", verified: false, stance: "media", trust: "medium" },
      { name: "Courrier Montfaucon+", handle: "@courrier_mtf_plus", verified: false, stance: "amplifier", trust: "low" },
      { name: "Sondages Minute", handle: "@sondages_minute", verified: false, stance: "amplifier", trust: "low" },
      { name: "Mairie Leaks", handle: "@mairie_leaks", verified: false, stance: "amplifier", trust: "low" },
      { name: "Vote Clair", handle: "@vote_clair", verified: false, stance: "amplifier", trust: "low" }
    ],
    normalTemplates: [
      "Le sondage partagé ne mentionne pas d'institut. Sans méthode, il vaut mieux le traiter comme non vérifié.",
      "Le vrai média local n'a pas publié ce graphique. Le compte viral ajoute un plus à son nom.",
      "Un retrait de candidature doit être confirmé par la candidate ou la préfecture, pas par une capture.",
      "Attention aux chiffres très précis qui circulent sans lien vers une étude.",
      "Le débat local de demain est confirmé par la mairie, pas annulé.",
      "Les messages qui disent 'inutile de voter' sont un signal à surveiller.",
      "Je distingue opinion politique et manipulation : ici, le problème est la fausse source.",
      "La même phrase 'l'écart est irrattrapable' est publiée par plusieurs comptes récents."
    ],
    suspectTemplates: [
      "SONDAGE CHOC : l'élection est déjà pliée. Inutile de perdre son temps dimanche. #VoteUtile",
      "Document interne : une candidate va se retirer cette nuit. Ses électeurs doivent se reporter maintenant.",
      "Le vrai chiffre circule enfin : 63 % pour la liste qui monte. Les médias locaux paniquent.",
      "Graphique exclusif supprimé par le Courrier. On republie avant censure. #SondageChoc",
      "Si vous votez pour une petite liste, vous offrez la mairie aux extrêmes. Les chiffres sont clairs.",
      "La préfecture sait déjà que des bureaux seront fermés dans deux quartiers. Organisez-vous ailleurs.",
      "Même les militants adverses reconnaissent la défaite en privé. Restez chez vous.",
      "Fuite mairie : consignes données aux assesseurs pour favoriser un camp."
    ],
    mediaLabels: [
      { kind: "chart", title: "Sondage viral", caption: "Aucun institut, aucune méthodologie" },
      { kind: "document", title: "Note interne supposée", caption: "Capture sans référence administrative" },
      { kind: "map", title: "Carte des bureaux", caption: "Bureaux prétendument fermés sans source officielle" }
    ],
    fixedPosts: [
      {
        id: "municipales-fixed-1",
        minute: 15,
        actor: "@courrier_mtf",
        content:
          "Nous n'avons publié aucun sondage ce soir. Les captures qui utilisent notre logo ne proviennent pas de notre rédaction.",
        suspect: false,
        likes: 1100,
        reposts: 760,
        replies: 140
      },
      {
        id: "municipales-fixed-2",
        minute: 28,
        actor: "@sondages_minute",
        content:
          "SONDAGE CHOC : 63 % pour une liste, élection terminée. Les autres votes ne servent plus à rien. #SondageChoc",
        suspect: true,
        reason: "Faux sondage sans méthode, formulation destinée à décourager le vote.",
        likes: 4200,
        reposts: 3600,
        replies: 740,
        media: { kind: "chart", title: "Graphique viral", caption: "Aucun institut ni taille d'échantillon" }
      },
      {
        id: "municipales-fixed-3",
        minute: 54,
        actor: "@obs_electoral",
        content:
          "Un sondage crédible indique au minimum commanditaire, institut, dates, échantillon et marge d'erreur. Rien de tout cela n'apparaît ici.",
        suspect: false,
        likes: 1600,
        reposts: 980,
        replies: 110
      },
      {
        id: "municipales-fixed-4",
        minute: 79,
        actor: "@mairie_leaks",
        content:
          "Fuite : plusieurs bureaux vont fermer dimanche dans les quartiers opposants. Préparez un autre plan, la mairie ne dira rien.",
        suspect: true,
        reason: "Fausse information électorale potentiellement dissuasive, sans source officielle.",
        likes: 3900,
        reposts: 3300,
        replies: 690,
        media: { kind: "map", title: "Carte de fermeture", caption: "Carte non officielle et non datée" }
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

// BEGIN SIMUVEILLE NETWORK ENRICHMENT
function addUniqueActor(scenario, actor) {
  if (!Array.isArray(scenario.actors)) scenario.actors = [];
  if (!scenario.actors.some((item) => item.handle === actor.handle)) scenario.actors.push(actor);
}

function addUniqueTrend(scenario, trend) {
  if (!Array.isArray(scenario.trends)) scenario.trends = [];
  if (!scenario.trends.some((item) => item.tag === trend.tag)) scenario.trends.push(trend);
}

function addUniqueClue(scenario, clue) {
  if (!Array.isArray(scenario.clues)) scenario.clues = [];
  if (!scenario.clues.includes(clue)) scenario.clues.push(clue);
}

function addUniqueTemplate(list, text) {
  if (Array.isArray(list) && !list.includes(text)) list.push(text);
}

function addUniquePost(scenario, post) {
  if (!Array.isArray(scenario.fixedPosts)) scenario.fixedPosts = [];
  if (!scenario.fixedPosts.some((item) => item.id === post.id)) scenario.fixedPosts.push(post);
}

function enrichScenarioNetwork(scenarios) {
  const politicalActors = [
    {
      name: "Donald Tromp",
      handle: "@donald_tromp",
      verified: true,
      stance: "amplifier",
      trust: "low",
      bio: "45e et 47e pr?sident d'Am?ria. Mouvement America First Again. Messages personnels et commentaires politiques."
    },
    {
      name: "Emmanuel Macro",
      handle: "@emmanuel_macro",
      verified: true,
      stance: "official",
      trust: "high",
      bio: "Pr?sident de la R?publique de Francie. Compte officiel simul? : diplomatie, s?curit?, ?nergie et vie publique."
    },
    {
      name: "Ursula von der Lyen",
      handle: "@vonderlyen_eu",
      verified: true,
      stance: "official",
      trust: "high",
      bio: "Pr?sidente fictive de la Commission eur?lienne. Coordination europ?enne, aide civile et diplomatie."
    },
    {
      name: "Vladmir Poutin",
      handle: "@vladmir_poutin",
      verified: true,
      stance: "official",
      trust: "low",
      bio: "Pr?sident fictif de la F?d?ration du Nord. Communiqu?s g?opolitiques, souverainet? et s?curit? internationale."
    },
    {
      name: "Ilhan Aliyef",
      handle: "@ilhan_aliyef",
      verified: true,
      stance: "official",
      trust: "low",
      bio: "Pr?sident fictif d'Azeria. Compte institutionnel simul?, ?nergie, corridors commerciaux et diplomatie r?gionale."
    },
    {
      name: "Elon Musque",
      handle: "@elon_musque",
      verified: true,
      stance: "amplifier",
      trust: "medium",
      bio: "Entrepreneur technologique fictif. Satellites, plateformes num?riques, IA et opinions personnelles."
    },
    {
      name: "Giorgia Melonia",
      handle: "@giorgia_melonia",
      verified: true,
      stance: "official",
      trust: "medium",
      bio: "Pr?sidente du Conseil d'Italica. S?curit?, fronti?res, ?nergie et politique europ?enne."
    },
    {
      name: "Viktor Orbann",
      handle: "@viktor_orbann",
      verified: true,
      stance: "official",
      trust: "medium",
      bio: "Premier ministre de Danubie. Souverainet?, ?nergie, diplomatie et commentaires politiques."
    }
  ];

  const confusionActors = [
    {
      name: "Global Intel FR",
      handle: "@global_intel_fr",
      verified: false,
      stance: "amplifier",
      trust: "low",
      bio: "Alertes g?opolitiques en continu. Publie cartes, captures et informations re?ues en priv?."
    },
    {
      name: "V?rif Minute",
      handle: "@verif_minute",
      verified: false,
      stance: "analyst",
      trust: "medium",
      bio: "Compte de v?rification rapide. M?thodes OSINT affich?es, conclusions ? recouper."
    },
    {
      name: "Voix du Peuple News",
      handle: "@voix_peuple_news",
      verified: false,
      stance: "amplifier",
      trust: "low",
      bio: "Actualit? alternative, t?moignages anonymes et d?nonciation des silences officiels."
    },
    {
      name: "Observatoire Influence",
      handle: "@obs_influence",
      verified: false,
      stance: "analyst",
      trust: "high",
      bio: "Analyse des op?rations d'influence, r?seaux de relais et anomalies de diffusion."
    },
    {
      name: "Info Directe Monde",
      handle: "@info_directe_monde",
      verified: false,
      stance: "media",
      trust: "low",
      bio: "Fil d'actualit? non officiel. Reprises de comptes ?trangers, captures et alertes virales."
    },
    {
      name: "?coPanique",
      handle: "@ecopanique",
      verified: false,
      stance: "amplifier",
      trust: "low",
      bio: "Prix, p?nuries, march?s et alertes consommation. Publie surtout des captures et t?moignages."
    },
    {
      name: "RiskDesk Maritime",
      handle: "@riskdesk_mer",
      verified: false,
      stance: "analyst",
      trust: "medium",
      bio: "Veille assurance maritime, fret, primes de risque et perturbations logistiques."
    }
  ];

  scenarios.forEach((scenario) => {
    const id = scenario.id || "";
    const geopolitical = id.includes("ormuz") || id.includes("greenland");
    const civic = id.includes("municipales") || id.includes("eau") || id.includes("hopital") || id.includes("cantine") || id.includes("lycee");

    if (geopolitical || id.includes("hopital") || id.includes("municipales")) politicalActors.forEach((actor) => addUniqueActor(scenario, actor));
    confusionActors.forEach((actor) => addUniqueActor(scenario, actor));

    if (id.includes("ormuz")) {
      addUniqueActor(scenario, { name: "Bourse ?nergie Live", handle: "@bourse_energie", verified: false, stance: "media", trust: "medium", bio: "Veille ?nergie fictive : p?trole, gaz, fret, assurance maritime et march?s. Donn?es ? recouper." });
      addUniqueTrend(scenario, { tag: "#BarilSousTension", count: "12,4 k" });
      addUniqueTrend(scenario, { tag: "#AssuranceMaritime", count: "5,8 k" });
      addUniqueTrend(scenario, { tag: "#FilesAuxPompes", count: "3,7 k" });
      addUniqueClue(scenario, "Des comptes politiques tr?s suivis transforment une tension maritime en pr?diction imm?diate sur le prix ? la pompe.");
      addUniqueClue(scenario, "Les cons?quences ?conomiques plausibles sont m?lang?es avec des appels ? stocker carburant, nourriture ou argent liquide.");
      addUniqueTemplate(scenario.normalTemplates, "Cons?quence possible ? surveiller : hausse des primes d'assurance maritime et du fret, mais cela ne prouve pas une fermeture du d?troit.");
      addUniqueTemplate(scenario.normalTemplates, "Un mouvement du baril fictif peut exister sans hausse imm?diate et uniforme du prix ? la pompe.");
      addUniqueTemplate(scenario.normalTemplates, "Les files en station-service peuvent ?tre provoqu?es par la rumeur elle-m?me : il faut distinguer cause r?elle et panique auto-entretenue.");
      addUniqueTemplate(scenario.suspectTemplates, "Le p?trole va doubler, les stations seront vides demain. Les politiques qui minimisent mentent pour ?viter la panique.");
      addUniqueTemplate(scenario.suspectTemplates, "Un pr?sident ?tranger vient de confirmer que tout est perdu ? Ormuz. Stockez carburant, cash et nourriture.");
      addUniqueTemplate(scenario.suspectTemplates, "Les assureurs savent d?j? que la route est ferm?e. Les chiffres officiels sortiront trop tard pour vous prot?ger.");
      addUniquePost(scenario, {
        id: "ormuz-consequence-energy-1",
        minute: 132,
        actor: "@bourse_energie",
        content: "Le baril fictif r?agit ? la hausse dans les ?changes simul?s (+4,8 %), mais aucune donn?e ne permet d'annoncer une p?nurie ? la pompe. ? surveiller : fret, assurance, d?lais portuaires.",
        suspect: false,
        likes: 2800,
        reposts: 1450,
        replies: 310,
        media: { kind: "oil", title: "March? p?trolier", caption: "Variation plausible, cons?quences ? contextualiser" }
      });
      addUniquePost(scenario, {
        id: "ormuz-consequence-tromp-1",
        minute: 158,
        actor: "@donald_tromp",
        content: "Quand j'?tais ? la Maison Blanche d'Am?ria, Ormuz n'aurait jamais ?t? bloqu?. Le p?trole va doubler si les faibles restent aux commandes. #PrixEssence",
        suspect: true,
        reason: "Personnalit? politique fictive tr?s suivie, pr?diction ?conomique cat?gorique et r?cup?ration partisane sans source.",
        likes: 28400,
        reposts: 16100,
        replies: 5200,
        media: { kind: "oil", title: "File en station", caption: "Photo anxiog?ne non dat?e, possible panique auto-entretenue" }
      });
      addUniquePost(scenario, {
        id: "ormuz-consequence-macro-1",
        minute: 176,
        actor: "@emmanuel_macro",
        content: "La Francie suit l'?volution maritime avec ses partenaires. ? ce stade, aucun ?l?ment ne justifie des achats de panique. Les informations confirm?es seront publi?es par les canaux officiels.",
        suspect: false,
        likes: 18400,
        reposts: 6900,
        replies: 4100
      });
      addUniquePost(scenario, {
        id: "ormuz-consequence-musque-1",
        minute: 188,
        actor: "@elon_musque",
        content: "Trafic satellite ?trange au-dessus du Golfe. Je ne dis pas que le d?troit est ferm?, mais les march?s savent lire les signaux avant les gouvernements.",
        suspect: true,
        reason: "Autorit? technologique fictive, insinuation sans publication de donn?es v?rifiables et effet d'amplification.",
        likes: 39700,
        reposts: 22100,
        replies: 7600,
        media: { kind: "map", title: "Carte satellite", caption: "Capture interpr?t?e sans m?thode publi?e" }
      });
      addUniquePost(scenario, {
        id: "ormuz-consequence-risk-1",
        minute: 212,
        actor: "@riskdesk_mer",
        content: "Cons?quence cr?dible si la tension dure : surprime de risque maritime, retards portuaires, co?ts de fret plus ?lev?s. Ce n'est pas la m?me chose qu'une fermeture confirm?e.",
        suspect: false,
        likes: 3900,
        reposts: 2100,
        replies: 360
      });
      addUniquePost(scenario, {
        id: "ormuz-consequence-poutin-1",
        minute: 226,
        actor: "@vladmir_poutin",
        content: "La crise d'Ormuz montre encore l'?chec des puissances occidentales. Les peuples paieront leur carburant plus cher ? cause de leurs dirigeants.",
        suspect: true,
        reason: "R?cup?ration g?opolitique, attribution globale et lien ?conomique simplifi? sans source.",
        likes: 21400,
        reposts: 12900,
        replies: 4500
      });
    }

    if (id.includes("greenland")) {
      addUniqueClue(scenario, "Des responsables politiques fictifs reprennent les accusations pour imposer un cadrage g?opolitique avant les enqu?tes.");
      addUniqueTemplate(scenario.normalTemplates, "Plusieurs personnalit?s politiques commentent d?j? le dossier : cela augmente la visibilit?, pas le niveau de preuve.");
      addUniqueTemplate(scenario.suspectTemplates, "M?me des pr?sidents ?trangers le disent maintenant : Greenland ment, donc l'enqu?te est inutile.");
      addUniquePost(scenario, {
        id: `${id}-political-lyen-1`,
        minute: 121,
        actor: "@vonderlyen_eu",
        content: "Les accusations visant des civils doivent ?tre examin?es par une enqu?te ind?pendante. Prot?ger les t?moins, verifier les images, ?viter les conclusions pr?cipit?es.",
        suspect: false,
        likes: 6400,
        reposts: 3100,
        replies: 980
      });
      addUniquePost(scenario, {
        id: `${id}-political-poutin-1`,
        minute: 146,
        actor: "@vladmir_poutin",
        content: "Greenland donne des le?ons au monde et se r?v?le ? Gonni. Les images parlent plus fort que leurs d?mentis.",
        suspect: true,
        reason: "Personnalit? politique fictive exploitant une accusation grave, conclusion impos?e avant v?rification ind?pendante.",
        likes: 18800,
        reposts: 12100,
        replies: 4300,
        media: { kind: "ship", title: "Image de terrain", caption: "Photo forte, mais date et lieu ? ?tablir" }
      });
      addUniquePost(scenario, {
        id: `${id}-political-tromp-1`,
        minute: 169,
        actor: "@donald_tromp",
        content: "Personne ne respecte Greenland parce que ses dirigeants sont faibles. Les vraies victimes sont toujours cach?es par les m?dias officiels.",
        suspect: true,
        reason: "R?cup?ration politique, g?n?ralisation et accusation m?diatique sans ?l?ment nouveau.",
        likes: 20300,
        reposts: 11800,
        replies: 3900
      });
      addUniquePost(scenario, {
        id: `${id}-influence-watch-1`,
        minute: 194,
        actor: "@obs_influence",
        content: "Nous observons des reprises coordonn?es du m?me visuel par des comptes politiques, m?dias alternatifs et profils r?cents. La viralit? ne remplace pas la v?rification.",
        suspect: false,
        likes: 2100,
        reposts: 1250,
        replies: 240,
        media: { kind: "map", title: "R?seau de relais", caption: "Carte de diffusion ? recouper" }
      });
    }

    if (id.includes("hopital")) {
      addUniqueActor(scenario, { name: "Ministre Santia", handle: "@ministre_santia", verified: true, stance: "official", trust: "high", bio: "Ministre fictive de la Sant? de Francie. H?pitaux, cyber, s?curit? sanitaire et communiqu?s officiels." });
      addUniquePost(scenario, {
        id: "hopital-politique-santia-1",
        minute: 112,
        actor: "@ministre_santia",
        content: "Les ?quipes cyber et hospitali?res sont mobilis?es. Les urgences restent ouvertes. Ne partagez pas de captures contenant de pr?tendues donn?es m?dicales.",
        suspect: false,
        likes: 5200,
        reposts: 2600,
        replies: 620
      });
      addUniquePost(scenario, {
        id: "hopital-politique-tromp-1",
        minute: 136,
        actor: "@donald_tromp",
        content: "Encore un h?pital paralys? parce que les gouvernements ne savent pas prot?ger leurs citoyens. On nous cache s?rement l'ampleur r?elle.",
        suspect: true,
        reason: "Personnalit? tr?s suivie, extrapolation politique et insinuation sans preuve sur l'ampleur de l'incident.",
        likes: 12600,
        reposts: 7400,
        replies: 2800,
        media: { kind: "document", title: "Capture h?pital", caption: "Visuel anxiog?ne, source originale absente" }
      });
    }

    if (id.includes("cantine")) {
      addUniqueActor(scenario, { name: "Jordane Bardelle", handle: "@jordane_bardelle", verified: true, stance: "amplifier", trust: "low", bio: "Pr?sident fictif d'un mouvement politique national. S?curit?, ?cole, identit? et commentaires d'actualit?." });
      addUniquePost(scenario, {
        id: "cantine-politique-bardelle-1",
        minute: 142,
        actor: "@jordane_bardelle",
        content: "Quand m?me les cantines ne sont plus s?res, c'est tout un syst?me qui abandonne les familles. Les parents doivent exiger la v?rit? ce soir.",
        suspect: true,
        reason: "R?cup?ration politique d'une alerte sanitaire incertaine et appel ? l'indignation avant confirmation.",
        likes: 9800,
        reposts: 6100,
        replies: 1900,
        media: { kind: "shop", title: "Plateau partag?", caption: "Photo sans date ni contexte v?rifi?" }
      });
    }

    if (id.includes("municipales")) {
      addUniqueActor(scenario, { name: "Jordane Bardelle", handle: "@jordane_bardelle", verified: true, stance: "amplifier", trust: "low", bio: "Pr?sident fictif d'un mouvement politique national. S?curit?, ?cole, identit? et commentaires d'actualit?." });
      addUniquePost(scenario, {
        id: "municipales-politique-tromp-1",
        minute: 94,
        actor: "@donald_tromp",
        content: "Quand un sondage donne 63 %, l'?lection est termin?e. Les ?lecteurs devraient arr?ter de se faire voler leur temps.",
        suspect: true,
        reason: "Amplification politique d'un sondage inv?rifiable et message susceptible de d?courager le vote.",
        likes: 15600,
        reposts: 8200,
        replies: 3100,
        media: { kind: "chart", title: "Sondage repris", caption: "Graphique sans institut ni m?thode" }
      });
      addUniquePost(scenario, {
        id: "municipales-influence-watch-1",
        minute: 118,
        actor: "@obs_influence",
        content: "Le faux sondage local est maintenant repris par des comptes nationaux et ?trangers. Changement d'?chelle : la rumeur sort de son contexte municipal.",
        suspect: false,
        likes: 980,
        reposts: 540,
        replies: 110
      });
    }

    if (id.includes("eau")) {
      addUniquePost(scenario, {
        id: "eau-politique-voix-1",
        minute: 86,
        actor: "@voix_peuple_news",
        content: "Valmont n'est que le d?but : les mairies savent que les r?seaux d'eau l?chent partout. Faites vos r?serves avant le communiqu? qui minimisera tout.",
        suspect: true,
        reason: "G?n?ralisation ? partir d'un incident local, incitation au stockage et anticipation d'un pr?tendu mensonge officiel.",
        likes: 4300,
        reposts: 2700,
        replies: 820,
        media: { kind: "water", title: "Rayon vide", caption: "Photo possiblement ancienne, contexte absent" }
      });
    }

    if (id.includes("lycee")) {
      addUniquePost(scenario, {
        id: "lycee-confusion-directe-1",
        minute: 74,
        actor: "@info_directe_monde",
        content: "Plusieurs ?tablissements seraient concern?s par des annulations d'examens blancs. Les familles partagent d?j? les captures en priv?.",
        suspect: true,
        reason: "Extension non prouv?e d'une rumeur locale, sources priv?es inv?rifiables et effet d'amplification.",
        likes: 780,
        reposts: 530,
        replies: 140,
        media: { kind: "school", title: "Message transf?r?", caption: "Capture sans canal officiel identifiable" }
      });
    }

    if (civic) {
      addUniqueTemplate(scenario.suspectTemplates, "Une personnalit? tr?s suivie vient de reprendre le sujet : si elle en parle, c'est que l'affaire est grave.");
      addUniqueTemplate(scenario.normalTemplates, "Le relais par un gros compte augmente la visibilit?, mais ne valide pas le contenu initial.");
    }
  });
}

enrichScenarioNetwork(builtInScenarios);
// END SIMUVEILLE NETWORK ENRICHMENT
const evidenceAssets = {"cantine_tray_02_az.png":"./assets/evidence/cantine_tray_02_az.png","cantine_tray_az.png":"./assets/evidence/cantine_tray_az.png","chart_ru.png":"./assets/evidence/chart_ru.png","city_notice_02_az.png":"./assets/evidence/city_notice_02_az.png","civic_message_04_az.png":"./assets/evidence/civic_message_04_az.png","convoy_ru.png":"./assets/evidence/convoy_ru.png","document_ru.png":"./assets/evidence/document_ru.png","election_poll_01_ru.png":"./assets/evidence/election_poll_01_ru.png","election_poll_ru.png":"./assets/evidence/election_poll_ru.png","hospital_cyber_ru.png":"./assets/evidence/hospital_cyber_ru.png","hospital_entrance_01_ru.png":"./assets/evidence/hospital_entrance_01_ru.png","map_sahel_az.png":"./assets/evidence/map_sahel_az.png","ormuz_ais_map_02_ru.png":"./assets/evidence/ormuz_ais_map_02_ru.png","ormuz_fuel_queue_03_az.png":"./assets/evidence/ormuz_fuel_queue_03_az.png","ormuz_maritime_ru.png":"./assets/evidence/ormuz_maritime_ru.png","ormuz_night_ship_04_ru.png":"./assets/evidence/ormuz_night_ship_04_ru.png","ormuz_tankers_01_ru.png":"./assets/evidence/ormuz_tankers_01_ru.png","sahel_aid_vehicle_03_ru.png":"./assets/evidence/sahel_aid_vehicle_03_ru.png","sahel_convoy_01_ru.png":"./assets/evidence/sahel_convoy_01_ru.png","sahel_osint_04_ru.png":"./assets/evidence/sahel_osint_04_ru.png","sahel_village_02_az.png":"./assets/evidence/sahel_village_02_az.png","school_note_04_az.png":"./assets/evidence/school_note_04_az.png","school_note_az.png":"./assets/evidence/school_note_az.png","vehicle_osint_ru.png":"./assets/evidence/vehicle_osint_ru.png","water_map_03_ru.png":"./assets/evidence/water_map_03_ru.png","water_shelves_03_ru.png":"./assets/evidence/water_shelves_03_ru.png","water_shelves_ru.png":"./assets/evidence/water_shelves_ru.png"};
const avatarAssets = {"avatar_00.png":"./assets/avatars/avatar_00.png","avatar_01.png":"./assets/avatars/avatar_01.png","avatar_02.png":"./assets/avatars/avatar_02.png","avatar_03.png":"./assets/avatars/avatar_03.png","avatar_04.png":"./assets/avatars/avatar_04.png","avatar_05.png":"./assets/avatars/avatar_05.png","avatar_06.png":"./assets/avatars/avatar_06.png","avatar_07.png":"./assets/avatars/avatar_07.png","avatar_08.png":"./assets/avatars/avatar_08.png","avatar_09.png":"./assets/avatars/avatar_09.png","avatar_10.png":"./assets/avatars/avatar_10.png","avatar_11.png":"./assets/avatars/avatar_11.png","avatar_12.png":"./assets/avatars/avatar_12.png","avatar_13.png":"./assets/avatars/avatar_13.png","avatar_14.png":"./assets/avatars/avatar_14.png","avatar_15.png":"./assets/avatars/avatar_15.png"};

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
  profileDialog: document.querySelector("#profileDialog"),
  profileContent: document.querySelector("#profileContent"),
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

function parisNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Paris" }));
}

function scenarioDurationMinutes(scenario) {
  const match = String(scenario.timeWindow || "").match(/(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})/);
  if (!match) return 300;
  const start = Number(match[1]) * 60 + Number(match[2]);
  const end = Number(match[3]) * 60 + Number(match[4]);
  return Math.max(90, end > start ? end - start : end + 1440 - start);
}

function formatTime(date) {
  return date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Paris"
  });
}

function formatRelativeTime(date, now = parisNow()) {
  const diffMinutes = Math.max(0, Math.round((now - date) / 60000));
  if (diffMinutes < 1) return "à l'instant";
  if (diffMinutes < 60) return `${diffMinutes} min`;
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;
  if (hours < 24) return minutes ? `${hours} h ${minutes}` : `${hours} h`;
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", timeZone: "Europe/Paris" });
}

function livePostDate(minute, duration, now = parisNow()) {
  const spread = Math.max(duration, minute + 20);
  const ageMinutes = Math.max(0, spread - minute);
  return new Date(now.getTime() - ageMinutes * 60000);
}

function actorByHandle(scenario, handle) {
  return scenario.actors.find((actor) => actor.handle === handle) || scenario.actors[0];
}

function generatePosts(scenario) {
  const random = mulberry32(scenario.seed || hashSeed(scenario.id || scenario.title));
  const now = parisNow();
  const duration = scenarioDurationMinutes(scenario);
  const volume = Math.max(20, Number(scenario.volume) || 100);
  const fixedPosts = scenario.fixedPosts || [];
  const generated = [];

  for (let i = 0; i < volume - fixedPosts.length; i += 1) {
    const suspectChance = 0.22 + (i > volume * 0.45 ? 0.08 : 0);
    const suspect = random() < suspectChance;
    const candidates = scenario.actors.filter((actor) => suspect ? actor.trust === "low" : actor.trust !== "low");
    const actor = pick(candidates.length ? candidates : scenario.actors, random);
    const templates = suspect ? scenario.suspectTemplates : scenario.normalTemplates;
    const minute = Math.floor(random() * duration);
    const trend = pick(scenario.trends, random).tag;
    const hasMedia = random() > (suspect ? 0.28 : 0.55);
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
    .map((post) => {
      const liveDate = livePostDate(post.minute, duration, now);
      return { ...post, liveDate };
    })
    .sort((a, b) => b.liveDate - a.liveDate)
    .map((post, index) => {
      const actor = actorByHandle(scenario, post.actor);
      return {
        ...post,
        index: index + 1,
        time: formatTime(post.liveDate),
        relativeTime: formatRelativeTime(post.liveDate, now),
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
function profileHue(actor) {
  return profileNumber(hashSeed(actor.handle), 178, 222);
}

function avatarAssetFor(actor) {
  const seed = hashSeed(`${state.scenario?.id || "scenario"}:${actor.handle}`);
  const key = `avatar_${String(profileNumber(seed, 0, 15)).padStart(2, "0")}.png`;
  return avatarAssets[key] ? { key, src: avatarAssets[key] } : null;
}

function renderAvatarButton(actor, extraClass = "") {
  const hue = profileHue(actor);
  const variant = actor.trust === "low" ? "avatar-warm" : actor.trust === "medium" ? "avatar-neutral" : "avatar-cool";
  const avatar = avatarAssetFor(actor);
  const visual = avatar
    ? `<img class="avatar-img" src="${avatar.src}" alt="" loading="lazy" />`
    : `<span class="avatar-bg"></span><span class="avatar-face"></span>`;
  return `<button class="avatar profile-trigger avatar-photo ${escapeHtml(extraClass)} ${variant}" data-action="profile" data-handle="${escapeHtml(actor.handle)}" data-avatar="${escapeHtml(avatar ? avatar.key : "fallback")}" style="--avatar-hue:${hue}" title="Voir le profil de ${escapeHtml(actor.name)}" aria-label="Voir le profil de ${escapeHtml(actor.name)}">${visual}</button>`;
}


function profileSeed(actor) {
  return hashSeed(`${state.scenario?.id || "scenario"}:${actor.handle}`);
}

function profileNumber(seed, min, max) {
  return min + (seed % (max - min + 1));
}

function buildProfile(actor) {
  const seed = profileSeed(actor);
  const lowTrust = actor.trust === "low";
  const official = actor.trust === "high" && actor.verified;
  const analyst = actor.stance === "analyst";
  const createdDays = lowTrust ? profileNumber(seed, 2, 24) : actor.trust === "medium" ? profileNumber(seed, 80, 540) : profileNumber(seed, 760, 2800);
  const followers = lowTrust ? profileNumber(seed * 7, 420, 18200) : actor.trust === "medium" ? profileNumber(seed * 11, 1600, 42000) : profileNumber(seed * 13, 18000, 420000);
  const following = lowTrust ? profileNumber(seed * 17, 12, 148) : profileNumber(seed * 19, 180, 1200);
  const dailyPosts = lowTrust ? profileNumber(seed * 23, 58, 210) : actor.trust === "medium" ? profileNumber(seed * 29, 8, 34) : profileNumber(seed * 31, 2, 18);
  const names = state.scenario.actors.map((item) => item.name.toLowerCase());
  const imitates = !official && names.some((name) => actor.name.toLowerCase() !== name && similarName(actor.name.toLowerCase(), name));

  const bios = {
    official: "Canal officiel. Informations vérifiées et communiqués institutionnels.",
    media: actor.trust === "low" ? "Actu terrain, infos que les médias ne montrent pas." : "Rédaction locale. Vérification, terrain, contexte.",
    analyst: "Analyse de sources ouvertes, chronologie et vérification d'images.",
    citizen: "Compte personnel. Témoignages, questions et relais d'informations locales.",
    amplifier: "Alertes, révélations et contenus reçus en privé."
  };

  const signals = [];
  if (official) signals.push("Compte vérifié ou institutionnel", "Canal cohérent avec son rôle déclaré");
  if (analyst && actor.trust !== "low") signals.push("Explique ses méthodes", "Corrige ou nuance les contenus viraux");
  if (actor.trust === "medium") signals.push("Compte humain plausible", "Informations utiles mais à recouper");
  if (lowTrust) signals.push("Compte récent ou identité floue", "Volume de publication élevé", "Relais fréquent de captures non sourcées");
  if (imitates) signals.push("Nom proche d'un autre compte du scénario");
  if (actor.stance === "amplifier") signals.push("Formulations urgentes et très affirmatives");

  const risk = lowTrust ? "Élevé" : actor.trust === "medium" ? "Moyen" : "Faible";
  const status = official ? "Source primaire probable" : analyst ? "Source d'analyse" : lowTrust ? "Source à forte vigilance" : "Source à recouper";
  const posts = state.posts.filter((post) => post.actor.handle === actor.handle).slice(0, 4);

  return {
    actor,
    bio: actor.bio || bios[actor.stance] || "Compte participant au débat public.",
    created: createdDays < 31 ? `il y a ${createdDays} jours` : createdDays < 730 ? `il y a ${Math.round(createdDays / 30)} mois` : `il y a ${Math.round(createdDays / 365)} ans`,
    followers,
    following,
    dailyPosts,
    risk,
    status,
    signals,
    posts
  };
}

function similarName(a, b) {
  const cleanA = a.replace(/[^a-z0-9]/g, "");
  const cleanB = b.replace(/[^a-z0-9]/g, "");
  return cleanA.length > 7 && cleanB.length > 7 && (cleanA.includes(cleanB.slice(0, 8)) || cleanB.includes(cleanA.slice(0, 8)));
}

function formatCompact(value) {
  if (value >= 100000) return `${Math.round(value / 1000)} k`;
  if (value >= 1000) return `${(value / 1000).toFixed(1).replace(".", ",")} k`;
  return String(value);
}

function openProfile(handle) {
  const actor = state.scenario.actors.find((item) => item.handle === handle);
  if (!actor) return;
  const profile = buildProfile(actor);
  els.profileContent.innerHTML = renderProfile(profile);
  els.profileDialog.showModal();
}

function renderProfile(profile) {
  const actor = profile.actor;
  const recentPosts = profile.posts.length ? profile.posts : state.posts.filter((post) => post.actor.handle === actor.handle).slice(0, 5);
  return `
    <section class="profile-page">
      <div class="x-cover" style="--avatar-hue:${profileHue(actor)}"></div>
      <div class="x-profile-head">
        ${renderAvatarButton(actor, "avatar-profile-large")}
        <button class="follow-button" type="button">Suivre</button>
      </div>
      <div class="x-profile-title">
        <h2>${escapeHtml(actor.name)} ${actor.verified ? `<span class="badge" title="Compte v&eacute;rifi&eacute;">&#10003;</span>` : ""}</h2>
        <p>${escapeHtml(actor.handle)}</p>
      </div>
      <p class="x-bio">${escapeHtml(profile.bio)}</p>
      <div class="x-profile-meta">
        <span>${escapeHtml(profile.created)}</span>
        <span>${formatCompact(profile.following)} abonnements</span>
        <span>${formatCompact(profile.followers)} abonn&eacute;s</span>
      </div>
      <div class="x-tabs" aria-label="Navigation du profil">
        <span class="is-active">Posts</span>
        <span>R&eacute;ponses</span>
        <span>M&eacute;dias</span>
      </div>
      <div class="x-profile-posts">
        ${recentPosts.length ? recentPosts.map((post) => `
          <article class="x-profile-post">
            ${renderAvatarButton(actor, "avatar-mini")}
            <div>
              <div class="post-head compact">
                <strong>${escapeHtml(actor.name)}</strong>
                ${actor.verified ? `<span class="badge" title="Compte v&eacute;rifi&eacute;">&#10003;</span>` : ""}
                <span class="handle">${escapeHtml(actor.handle)}</span>
                <span class="time">&middot; ${escapeHtml(post.relativeTime || post.time)}</span>
              </div>
              <p>${escapeHtml(post.content)}</p>
            </div>
          </article>
        `).join("") : "<p class=\"x-empty\">Aucune publication r&eacute;cente.</p>"}
      </div>
    </section>
  `;
}
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderMedia(media, post) {
  if (!media) return "";
  const asset = media.asset || defaultEvidenceAsset(media, post);
  const src = evidenceAssets[asset];
  const filename = asset || `${media.kind || "media"}.png`;
  const visual = src
    ? `<img class="evidence-image" src="${src}" alt="${escapeHtml(media.title)}" loading="lazy" />`
    : renderEvidenceSvg(media, ["#d8e6f0", "#2364aa", "#ffffff"]);

  return `
    <div class="post-media evidence-card">
      ${visual}
      <div class="media-copy">
        <strong>${escapeHtml(media.title)}</strong>
        <span>${escapeHtml(media.caption)}</span>
        ${src ? `<a class="download-link" href="${src}" download="${escapeHtml(filename)}">T&eacute;l&eacute;charger l'image</a>` : ""}
      </div>
    </div>
  `;
}

function chooseEvidenceAsset(options, media, post) {
  const available = options.filter((name) => evidenceAssets[name]);
  if (!available.length) return "convoy_ru.png";
  const seed = hashSeed(`${state.scenario?.id || "scenario"}:${post?.id || "post"}:${post?.actor?.handle || "actor"}:${media.kind || "media"}:${media.title || "title"}`);
  return available[seed % available.length];
}

function defaultEvidenceAsset(media, post) {
  const kind = media.kind || "";
  const scenarioId = state.scenario?.id || "";

  if (scenarioId.includes("ormuz")) {
    if (kind === "map") return chooseEvidenceAsset(["ormuz_ais_map_02_ru.png", "ormuz_maritime_ru.png", "ormuz_tankers_01_ru.png"], media, post);
    if (kind === "oil" || kind === "chart") return chooseEvidenceAsset(["chart_ru.png", "ormuz_fuel_queue_03_az.png", "election_poll_01_ru.png"], media, post);
    if (kind === "document") return chooseEvidenceAsset(["city_notice_02_az.png", "document_ru.png", "civic_message_04_az.png"], media, post);
    return chooseEvidenceAsset(["ormuz_tankers_01_ru.png", "ormuz_night_ship_04_ru.png", "ormuz_maritime_ru.png"], media, post);
  }

  if (scenarioId.includes("bus-croix-rouge")) {
    if (kind === "document") return chooseEvidenceAsset(["vehicle_osint_ru.png", "sahel_osint_04_ru.png", "document_ru.png"], media, post);
    if (kind === "map") return chooseEvidenceAsset(["map_sahel_az.png", "sahel_osint_04_ru.png"], media, post);
    if (kind === "chart") return chooseEvidenceAsset(["chart_ru.png", "document_ru.png"], media, post);
    return chooseEvidenceAsset(["sahel_aid_vehicle_03_ru.png", "convoy_ru.png", "sahel_convoy_01_ru.png"], media, post);
  }

  if (scenarioId.includes("gonni")) {
    if (kind === "map") return chooseEvidenceAsset(["map_sahel_az.png", "sahel_osint_04_ru.png"], media, post);
    if (kind === "document" || kind === "school") return chooseEvidenceAsset(["document_ru.png", "city_notice_02_az.png"], media, post);
    if (kind === "chart") return chooseEvidenceAsset(["chart_ru.png", "document_ru.png"], media, post);
    return chooseEvidenceAsset(["sahel_village_02_az.png", "sahel_convoy_01_ru.png", "convoy_ru.png"], media, post);
  }

  if (scenarioId.includes("violences-sexuelles")) {
    if (kind === "map") return chooseEvidenceAsset(["map_sahel_az.png", "sahel_osint_04_ru.png"], media, post);
    if (kind === "chart") return chooseEvidenceAsset(["chart_ru.png", "document_ru.png"], media, post);
    return chooseEvidenceAsset(["document_ru.png", "school_note_04_az.png", "sahel_osint_04_ru.png"], media, post);
  }

  if (scenarioId.includes("hopital")) {
    if (kind === "chart") return chooseEvidenceAsset(["chart_ru.png", "hospital_cyber_ru.png"], media, post);
    return chooseEvidenceAsset(["hospital_entrance_01_ru.png", "hospital_cyber_ru.png", "civic_message_04_az.png"], media, post);
  }

  if (scenarioId.includes("cantine")) {
    if (kind === "chart") return chooseEvidenceAsset(["chart_ru.png", "cantine_tray_02_az.png"], media, post);
    if (kind === "document" || kind === "school") return chooseEvidenceAsset(["school_note_04_az.png", "civic_message_04_az.png"], media, post);
    return chooseEvidenceAsset(["cantine_tray_02_az.png", "cantine_tray_az.png"], media, post);
  }

  if (scenarioId.includes("municipales")) {
    if (kind === "chart") return chooseEvidenceAsset(["election_poll_01_ru.png", "election_poll_ru.png", "chart_ru.png"], media, post);
    if (kind === "map") return chooseEvidenceAsset(["city_notice_02_az.png", "water_map_03_ru.png"], media, post);
    return chooseEvidenceAsset(["city_notice_02_az.png", "civic_message_04_az.png", "election_poll_01_ru.png"], media, post);
  }

  if (scenarioId.includes("eau")) {
    if (kind === "map") return chooseEvidenceAsset(["water_map_03_ru.png", "city_notice_02_az.png"], media, post);
    if (kind === "document") return chooseEvidenceAsset(["civic_message_04_az.png", "city_notice_02_az.png"], media, post);
    return chooseEvidenceAsset(["water_shelves_03_ru.png", "water_shelves_ru.png", "water_map_03_ru.png"], media, post);
  }

  if (scenarioId.includes("lycee")) {
    if (kind === "chart") return chooseEvidenceAsset(["chart_ru.png", "civic_message_04_az.png"], media, post);
    return chooseEvidenceAsset(["school_note_04_az.png", "school_note_az.png", "civic_message_04_az.png"], media, post);
  }

  if (media.title && /carte|trajet|gonni|nara/i.test(media.title)) return chooseEvidenceAsset(["map_sahel_az.png", "sahel_osint_04_ru.png"], media, post);
  if (kind === "map") return chooseEvidenceAsset(["map_sahel_az.png", "water_map_03_ru.png"], media, post);
  if (kind === "document" || kind === "school") return chooseEvidenceAsset(["document_ru.png", "school_note_04_az.png"], media, post);
  if (kind === "chart" || kind === "oil") return chooseEvidenceAsset(["chart_ru.png", "election_poll_01_ru.png"], media, post);
  if (kind === "water") return chooseEvidenceAsset(["water_shelves_03_ru.png", "water_shelves_ru.png"], media, post);
  if (kind === "shop") return chooseEvidenceAsset(["cantine_tray_02_az.png", "cantine_tray_az.png"], media, post);
  return chooseEvidenceAsset(["convoy_ru.png", "sahel_convoy_01_ru.png", "ormuz_tankers_01_ru.png"], media, post);
}
function renderEvidenceSvg(media, palette) {
  const label = escapeHtml(media.title);
  const common = `<rect width="220" height="140" fill="${palette[0]}"/><rect x="8" y="8" width="204" height="124" rx="8" fill="rgba(255,255,255,.72)"/>`;
  let body = "";
  if (media.kind === "map") {
    body = `<path d="M20 112 C54 88, 70 55, 104 66 S158 43, 198 18" fill="none" stroke="${palette[1]}" stroke-width="5"/><path d="M26 28 H202 M28 58 H194 M18 88 H184 M52 16 V126 M98 14 V126 M150 12 V126" stroke="rgba(52,68,86,.22)"/><circle cx="106" cy="66" r="7" fill="#b42318"/><circle cx="160" cy="42" r="7" fill="#2364aa"/><rect x="18" y="18" width="64" height="19" rx="3" fill="rgba(23,33,43,.78)"/><text x="25" y="32" fill="white" font-size="11" font-family="Arial">MAP</text>`;
  } else if (media.kind === "document" || media.kind === "school") {
    body = `<rect x="34" y="18" width="112" height="104" rx="3" fill="white" stroke="rgba(52,68,86,.22)"/><rect x="50" y="34" width="72" height="8" rx="2" fill="${palette[1]}" opacity=".75"/><rect x="50" y="52" width="80" height="5" rx="2" fill="rgba(52,68,86,.35)"/><rect x="50" y="64" width="62" height="5" rx="2" fill="rgba(52,68,86,.28)"/><rect x="50" y="76" width="84" height="5" rx="2" fill="rgba(52,68,86,.28)"/><rect x="50" y="96" width="48" height="12" rx="2" fill="#b42318" opacity=".78"/><rect x="154" y="28" width="42" height="42" rx="6" fill="rgba(23,33,43,.78)"/><text x="162" y="53" fill="white" font-size="13" font-family="Arial">PDF</text>`;
  } else if (media.kind === "chart" || media.kind === "oil") {
    body = `<path d="M28 112 H198" stroke="rgba(52,68,86,.38)"/><path d="M32 108 V24" stroke="rgba(52,68,86,.38)"/><path d="M38 96 C62 90, 70 72, 90 76 S116 92, 132 58 S168 44, 194 28" fill="none" stroke="${palette[1]}" stroke-width="6" stroke-linecap="round"/><rect x="132" y="18" width="58" height="22" rx="4" fill="#b42318"/><text x="142" y="33" fill="white" font-size="11" font-family="Arial">VIRAL</text><rect x="42" y="28" width="54" height="10" rx="2" fill="rgba(52,68,86,.24)"/>`;
  } else {
    body = `<rect x="20" y="26" width="180" height="88" rx="8" fill="rgba(23,33,43,.82)"/><path d="M30 92 C54 76, 72 70, 94 78 S134 88, 190 58" fill="none" stroke="rgba(255,255,255,.32)" stroke-width="7"/><rect x="48" y="66" width="52" height="20" rx="6" fill="${palette[1]}"/><rect x="108" y="58" width="46" height="24" rx="5" fill="rgba(255,255,255,.72)"/><circle cx="168" cy="70" r="10" fill="#b42318" opacity=".9"/><rect x="28" y="30" width="68" height="18" rx="3" fill="rgba(180,35,24,.9)"/><text x="36" y="43" fill="white" font-size="11" font-family="Arial">VIDEO</text>`;
  }
  return `<svg role="img" aria-label="${label}" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">${common}${body}<text x="18" y="126" fill="rgba(23,33,43,.72)" font-size="10" font-family="Arial">SIMULATION - SOURCE A VERIFIER</text></svg>`;
}
function renderMediaMetadata(media, post) {
  const rows = media.metadata || simulatedMetadata(media, post);
  if (!rows.length) return "";
  return `
    <div class="metadata-box">
      <div class="metadata-title">
        <strong>Métadonnées simulées</strong>
        <span>ouvrir pour verifier</span>
      </div>
      ${rows.map((row) => `
        <div class="metadata-row">
          <span>${escapeHtml(row.label)}</span>
          <strong>${escapeHtml(row.value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function simulatedMetadata(media, post) {
  const scenarioId = state.scenario?.id || "";
  const seed = hashSeed(`${scenarioId}:${post?.id || media.title}:${media.kind}`);
  const suspect = Boolean(post?.suspect || post?.actor?.trust === "low");
  const greenland = scenarioId.includes("greenland");
  const russianTrace = greenland && suspect && seed % 3 !== 1;
  const azeriTrace = greenland && suspect && seed % 3 === 1;
  const neutralFile = `${media.kind || "media"}_${String(seed).slice(0, 5)}.${media.kind === "document" ? "pdf" : "jpg"}`;

  if (russianTrace) {
    return [
      { label: "Fichier", value: media.kind === "document" ? "справка_пересылка.pdf" : "IMG_пересылка_0742.jpg" },
      { label: "Locale", value: "ru_RU" },
      { label: "Fuseau", value: "UTC+3" },
      { label: "Chaîne", value: "export Telegram compressé" },
      { label: "Cohérence", value: "horodatage antérieur au récit" }
    ];
  }

  if (azeriTrace) {
    return [
      { label: "Fichier", value: media.kind === "map" ? "xəritə_Nara_041.png" : "sübut_export_041.jpg" },
      { label: "Locale", value: "az_AZ" },
      { label: "Fuseau", value: "UTC+4" },
      { label: "Chaîne", value: "copie depuis canal relais" },
      { label: "Cohérence", value: "métadonnées partielles" }
    ];
  }

  if (suspect) {
    return [
      { label: "Fichier", value: `forwarded_${neutralFile}` },
      { label: "Locale", value: "inconnue" },
      { label: "Fuseau", value: "supprimé" },
      { label: "Chaîne", value: "capture recadrée" },
      { label: "Cohérence", value: "source originale absente" }
    ];
  }

  return [
    { label: "Fichier", value: neutralFile },
    { label: "Locale", value: "fr_FR" },
    { label: "Fuseau", value: "Europe/Paris" },
    { label: "Chaîne", value: "source citée" },
    { label: "Cohérence", value: "éléments recoupables" }
  ];
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
    ["Fil simulé", `dernières ${Math.round(scenarioDurationMinutes(scenario) / 60)} h · heure de Paris`]
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
      ${renderAvatarButton(post.actor, "avatar-feed")}
      <div>
        <div class="post-head">
          <button class="profile-name" data-action="profile" data-handle="${escapeHtml(post.actor.handle)}">${escapeHtml(post.actor.name)}</button>
          ${post.actor.verified ? `<span class="badge" title="Compte v&eacute;rifi&eacute;">&#10003;</span>` : ""}
          <span class="handle">${escapeHtml(post.actor.handle)}</span>
          <span class="time">&middot; ${escapeHtml(post.relativeTime)} &middot; ${escapeHtml(post.time)}</span>
        </div>
        <p class="post-content">${linkify(escapeHtml(post.content))}</p>
        ${renderMedia(post.media, post)}
        <div class="post-foot">
          <div class="stats">
            <span>${formatNumber(post.replies)} r&eacute;ponses</span>
            <span>${formatNumber(post.reposts)} relais</span>
            <span>${formatNumber(post.likes)} r&eacute;actions</span>
          </div>
          <div class="post-actions">
            <button class="action-button ${flagged ? "active" : ""}" data-action="flag">
              ${flagged ? "Signal&eacute;" : "Signaler"}
            </button>
            <button class="action-button" data-action="annotate">Annoter</button>
          </div>
        </div>
      </div>
    </article>
  `;
}
function refreshLiveTimes() {
  const now = parisNow();
  state.posts = state.posts
    .map((post) => ({
      ...post,
      time: formatTime(post.liveDate),
      relativeTime: formatRelativeTime(post.liveDate, now)
    }))
    .sort((a, b) => b.liveDate - a.liveDate);
  renderFeed();
  renderFlags();
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
    <div class="key-item">
      <strong>Métadonnées</strong>
      <span>Les champs ru_RU, az_AZ, UTC+3, UTC+4, export Telegram ou nom de fichier en cyrillique sont des indices de chaîne de diffusion. Ils doivent être recoupés avec le compte, la première publication, l'image, le fuseau horaire et le narratif.</span>
    </div>
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
    if (button.dataset.action === "profile") openProfile(button.dataset.handle);
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
setInterval(refreshLiveTimes, 60000);
