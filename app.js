const builtInScenarios = [
  {
    "id": "espace-militarisation-civils",
    "title": "Espace : la France militariserait l'espace au d\u00e9triment des civils",
    "briefing": "Simulation p\u00e9dagogique : la France transformerait l'espace en champ de bataille sous couvert de prot\u00e9ger ses satellites. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : d\u00e9l\u00e9gitimer le Commandement de l'Espace et opposer s\u00e9curit\u00e9 nationale et d\u00e9penses sociales.",
    "timeWindow": "09:00-15:30",
    "location": "Orbite basse et d\u00e9bat budg\u00e9taire fictif",
    "volume": 390,
    "seed": 2093314499,
    "trends": [
      {
        "tag": "#EspaceMilitaire",
        "count": "34,1 k"
      },
      {
        "tag": "#BudgetOuHopital",
        "count": "31,2 k"
      },
      {
        "tag": "#SatellitesEnQuestion",
        "count": "28,3 k"
      },
      {
        "tag": "#PaixDansLEspace",
        "count": "25,4 k"
      },
      {
        "tag": "#CielSousControle",
        "count": "22,5 k"
      }
    ],
    "clues": [
      "Narratif central : la France transformerait l'espace en champ de bataille sous couvert de prot\u00e9ger ses satellites.",
      "Acteurs plausibles : puissance spatiale concurrente, r\u00e9seau anti-OTAN et comptes souverainistes instrumentalis\u00e9s.",
      "Publics vis\u00e9s : jeunes, \u00e9tudiants, publics anti-guerre et citoyens sensibles aux d\u00e9penses sociales.",
      "D\u00e9clencheur fictif : une photo de salle de contr\u00f4le et un graphique budg\u00e9taire non sourc\u00e9.",
      "Point de vigilance : distinguer programmes civils, capacit\u00e9s d\u00e9fensives, documents budg\u00e9taires et interpr\u00e9tations militantes.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Espace",
        "handle": "@canal_officiel_espace",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_espace.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Espace",
        "handle": "@temoin_espace_militarisat",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_espace_militarisat.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_01",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_01.jpg"
      },
      {
        "name": "Alerte Espace",
        "handle": "@alerte_espace_militarisat",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_espace_militarisat.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_01",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_01.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_01",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_01.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que la France transformerait l'espace en champ de bataille sous couvert de prot\u00e9ger ses satellites. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : distinguer programmes civils, capacit\u00e9s d\u00e9fensives, documents budg\u00e9taires et interpr\u00e9tations militantes. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur une photo de salle de contr\u00f4le et un graphique budg\u00e9taire non sourc\u00e9. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais d\u00e9l\u00e9gitimer le Commandement de l'Espace et opposer s\u00e9curit\u00e9 nationale et d\u00e9penses sociales ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : la France transformerait l'espace en champ de bataille sous couvert de prot\u00e9ger ses satellites. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Pendant que les h\u00f4pitaux manquent de moyens, Paris financerait des satellites militaires. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : la France transformerait l'espace en champ de bataille sous couvert de prot\u00e9ger ses satellites. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : d\u00e9l\u00e9gitimer le Commandement de l'Espace et opposer s\u00e9curit\u00e9 nationale et d\u00e9penses sociales. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Satellite militaire",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "espace-militarisation-civils_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Budget contre h\u00f4pital",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "espace-militarisation-civils_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Salle de contr\u00f4le",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "espace-militarisation-civils_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Atelier satellite",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "espace-militarisation-civils_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Audition publique",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "espace-militarisation-civils_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Carte orbitale",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "espace-militarisation-civils_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Mobilisation \u00e9tudiante",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "espace-militarisation-civils_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Lancement nocturne",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "espace-militarisation-civils_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Tableau de suivi",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "espace-militarisation-civils_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "espace-militarisation-civils_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "espace-militarisation-civils_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "espace-militarisation-civils_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "espace-militarisation-civils_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_espace",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que la France transformerait l'espace en champ de bataille sous couvert de prot\u00e9ger ses satellites.",
        "suspect": false,
        "likes": 987,
        "reposts": 244,
        "replies": 73,
        "id": "espace-militarisation-civils-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_espace_militarisat",
        "content": "EXCLUSIF : la France transformerait l'espace en champ de bataille sous couvert de prot\u00e9ger ses satellites. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #EspaceMilitaire",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 25600000,
        "reposts": 12341140,
        "replies": 1176768,
        "media": {
          "kind": "photo",
          "title": "Satellite militaire",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "espace-militarisation-civils_01.png",
          "trace": "ru"
        },
        "id": "espace-militarisation-civils-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. distinguer programmes civils, capacit\u00e9s d\u00e9fensives, documents budg\u00e9taires et interpr\u00e9tations militantes",
        "suspect": false,
        "likes": 1812,
        "reposts": 796,
        "replies": 121,
        "media": {
          "kind": "map",
          "title": "Budget contre h\u00f4pital",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "espace-militarisation-civils_02.png",
          "trace": "az"
        },
        "id": "espace-militarisation-civils-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_espace_militarisat",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #BudgetOuHopital",
        "suspect": false,
        "likes": 769,
        "reposts": 285,
        "replies": 97,
        "media": {
          "kind": "video",
          "title": "Salle de contr\u00f4le",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "espace-militarisation-civils_03.png",
          "trace": "unknown"
        },
        "id": "espace-militarisation-civils-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_01",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que la France transformerait l'espace en champ de bataille sous couvert de prot\u00e9ger ses satellites. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 19501056,
        "reposts": 9481549,
        "replies": 1123200,
        "media": {
          "kind": "document",
          "title": "Atelier satellite",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "espace-militarisation-civils_04.png",
          "trace": "fr"
        },
        "id": "espace-militarisation-civils-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 148000,
        "reposts": 92000,
        "replies": 28000,
        "media": {
          "kind": "chart",
          "title": "Audition publique",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "espace-militarisation-civils_05.png",
          "trace": "ru"
        },
        "id": "espace-militarisation-civils-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2311,
        "reposts": 1108,
        "replies": 181,
        "media": {
          "kind": "osint",
          "title": "Carte orbitale",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "espace-militarisation-civils_06.png",
          "trace": "unknown"
        },
        "id": "espace-militarisation-civils-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_01",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi d\u00e9l\u00e9gitimer le Commandement de l'Espace et opposer s\u00e9curit\u00e9 nationale et d\u00e9penses sociales. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 21585920,
        "reposts": 10449152,
        "replies": 1123200,
        "media": {
          "kind": "photo",
          "title": "Mobilisation \u00e9tudiante",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "espace-militarisation-civils_07.png",
          "trace": "az"
        },
        "id": "espace-militarisation-civils-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : d\u00e9l\u00e9gitimer le Commandement de l'Espace et opposer s\u00e9curit\u00e9 nationale et d\u00e9penses sociales. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2609,
        "reposts": 1307,
        "replies": 211,
        "media": {
          "kind": "screenshot",
          "title": "Lancement nocturne",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "espace-militarisation-civils_08.png",
          "trace": "fr"
        },
        "id": "espace-militarisation-civils-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #SatellitesEnQuestion",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 35934208,
        "reposts": 16439647,
        "replies": 1955664,
        "media": {
          "kind": "comparison",
          "title": "Tableau de suivi",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "espace-militarisation-civils_09.png",
          "trace": "ru"
        },
        "id": "espace-militarisation-civils-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3110,
        "reposts": 1707,
        "replies": 261,
        "id": "espace-militarisation-civils-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "espace-incident-orbital",
    "title": "Espace : un satellite fran\u00e7ais aurait provoqu\u00e9 un incident orbital",
    "briefing": "Simulation p\u00e9dagogique : un satellite militaire fran\u00e7ais aurait fr\u00f4l\u00e9 un satellite m\u00e9t\u00e9o utilis\u00e9 par plusieurs pays africains. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : installer l'id\u00e9e d'une France irresponsable dans l'espace civil.",
    "timeWindow": "09:00-15:30",
    "location": "Trajectoire orbitale fictive au-dessus de l'Afrique",
    "volume": 425,
    "seed": 2658575800,
    "trends": [
      {
        "tag": "#IncidentOrbital",
        "count": "34,2 k"
      },
      {
        "tag": "#SatelliteMeteo",
        "count": "31,3 k"
      },
      {
        "tag": "#FuiteSpatiale",
        "count": "28,4 k"
      },
      {
        "tag": "#RisqueCivil",
        "count": "25,5 k"
      },
      {
        "tag": "#OrbiteAfrique",
        "count": "22,6 k"
      }
    ],
    "clues": [
      "Narratif central : un satellite militaire fran\u00e7ais aurait fr\u00f4l\u00e9 un satellite m\u00e9t\u00e9o utilis\u00e9 par plusieurs pays africains.",
      "Acteurs plausibles : \u00c9tat concurrent dans le spatial, m\u00e9dia proxy et collectif pseudo-scientifique.",
      "Publics vis\u00e9s : ONG, journalistes environnement, \u00e9tudiants ing\u00e9nieurs et pays partenaires.",
      "D\u00e9clencheur fictif : un faux graphique de trajectoire pr\u00e9sent\u00e9 comme une fuite d'agence europ\u00e9enne.",
      "Point de vigilance : contr\u00f4ler la source du graphique, les horaires orbitaux, les unit\u00e9s et l'existence du document original.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Espace",
        "handle": "@canal_officiel_espace",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_espace.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Espace",
        "handle": "@temoin_espace_incident_or",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_espace_incident_or.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_02",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_02.jpg"
      },
      {
        "name": "Alerte Espace",
        "handle": "@alerte_espace_incident_or",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_espace_incident_or.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_02",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_02.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_02",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_02.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que un satellite militaire fran\u00e7ais aurait fr\u00f4l\u00e9 un satellite m\u00e9t\u00e9o utilis\u00e9 par plusieurs pays africains. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : contr\u00f4ler la source du graphique, les horaires orbitaux, les unit\u00e9s et l'existence du document original. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur un faux graphique de trajectoire pr\u00e9sent\u00e9 comme une fuite d'agence europ\u00e9enne. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais installer l'id\u00e9e d'une France irresponsable dans l'espace civil ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : un satellite militaire fran\u00e7ais aurait fr\u00f4l\u00e9 un satellite m\u00e9t\u00e9o utilis\u00e9 par plusieurs pays africains. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Paris aurait cach\u00e9 un incident qui menace la m\u00e9t\u00e9o, l'agriculture et l'aide humanitaire. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : un satellite militaire fran\u00e7ais aurait fr\u00f4l\u00e9 un satellite m\u00e9t\u00e9o utilis\u00e9 par plusieurs pays africains. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : installer l'id\u00e9e d'une France irresponsable dans l'espace civil. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Trajectoires crois\u00e9es",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "espace-incident-orbital_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Satellite m\u00e9t\u00e9o",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "espace-incident-orbital_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Centre d'alerte",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "espace-incident-orbital_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "\u00c9cran technique",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "espace-incident-orbital_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Carte nuageuse",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "espace-incident-orbital_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Rapport flout\u00e9",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "espace-incident-orbital_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Station radar",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "espace-incident-orbital_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Simulation d\u00e9bris",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "espace-incident-orbital_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Salle de presse",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "espace-incident-orbital_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "espace-incident-orbital_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "espace-incident-orbital_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "espace-incident-orbital_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "espace-incident-orbital_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_espace",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que un satellite militaire fran\u00e7ais aurait fr\u00f4l\u00e9 un satellite m\u00e9t\u00e9o utilis\u00e9 par plusieurs pays africains.",
        "suspect": false,
        "likes": 994,
        "reposts": 248,
        "replies": 74,
        "id": "espace-incident-orbital-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_espace_incident_or",
        "content": "EXCLUSIF : un satellite militaire fran\u00e7ais aurait fr\u00f4l\u00e9 un satellite m\u00e9t\u00e9o utilis\u00e9 par plusieurs pays africains. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #IncidentOrbital",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 25804800,
        "reposts": 12437180,
        "replies": 1187136,
        "media": {
          "kind": "photo",
          "title": "Trajectoires crois\u00e9es",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "espace-incident-orbital_01.png",
          "trace": "ru"
        },
        "id": "espace-incident-orbital-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. contr\u00f4ler la source du graphique, les horaires orbitaux, les unit\u00e9s et l'existence du document original",
        "suspect": false,
        "likes": 1824,
        "reposts": 802,
        "replies": 122,
        "media": {
          "kind": "map",
          "title": "Satellite m\u00e9t\u00e9o",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "espace-incident-orbital_02.png",
          "trace": "az"
        },
        "id": "espace-incident-orbital-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_espace_incident_or",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #SatelliteMeteo",
        "suspect": false,
        "likes": 778,
        "reposts": 290,
        "replies": 98,
        "media": {
          "kind": "video",
          "title": "Centre d'alerte",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "espace-incident-orbital_03.png",
          "trace": "unknown"
        },
        "id": "espace-incident-orbital-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_02",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que un satellite militaire fran\u00e7ais aurait fr\u00f4l\u00e9 un satellite m\u00e9t\u00e9o utilis\u00e9 par plusieurs pays africains. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 19750912,
        "reposts": 9599198,
        "replies": 1170720,
        "media": {
          "kind": "document",
          "title": "\u00c9cran technique",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "espace-incident-orbital_04.png",
          "trace": "fr"
        },
        "id": "espace-incident-orbital-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 149400,
        "reposts": 92900,
        "replies": 28300,
        "media": {
          "kind": "chart",
          "title": "Carte nuageuse",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "espace-incident-orbital_05.png",
          "trace": "ru"
        },
        "id": "espace-incident-orbital-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2322,
        "reposts": 1116,
        "replies": 182,
        "media": {
          "kind": "osint",
          "title": "Rapport flout\u00e9",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "espace-incident-orbital_06.png",
          "trace": "unknown"
        },
        "id": "espace-incident-orbital-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_02",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi installer l'id\u00e9e d'une France irresponsable dans l'espace civil. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 21872640,
        "reposts": 10574004,
        "replies": 1170720,
        "media": {
          "kind": "photo",
          "title": "Station radar",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "espace-incident-orbital_07.png",
          "trace": "az"
        },
        "id": "espace-incident-orbital-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : installer l'id\u00e9e d'une France irresponsable dans l'espace civil. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2618,
        "reposts": 1314,
        "replies": 212,
        "media": {
          "kind": "screenshot",
          "title": "Simulation d\u00e9bris",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "espace-incident-orbital_08.png",
          "trace": "fr"
        },
        "id": "espace-incident-orbital-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #FuiteSpatiale",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 36233216,
        "reposts": 16552494,
        "replies": 1967328,
        "media": {
          "kind": "comparison",
          "title": "Salle de presse",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "espace-incident-orbital_09.png",
          "trace": "ru"
        },
        "id": "espace-incident-orbital-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3120,
        "reposts": 1714,
        "replies": 262,
        "id": "espace-incident-orbital-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "espace-espionnage-afrique",
    "title": "Espace : les satellites fran\u00e7ais espionneraient l'Afrique",
    "briefing": "Simulation p\u00e9dagogique : des satellites militaires fran\u00e7ais surveilleraient les ressources, les mouvements politiques et les infrastructures africaines. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : nourrir l'accusation de n\u00e9ocolonialisme et fragiliser la coop\u00e9ration.",
    "timeWindow": "09:00-15:30",
    "location": "Sahel, zones mini\u00e8res et infrastructures fictives",
    "volume": 460,
    "seed": 3777096181,
    "trends": [
      {
        "tag": "#EspionnageSpatial",
        "count": "34,3 k"
      },
      {
        "tag": "#AfriqueObservee",
        "count": "31,4 k"
      },
      {
        "tag": "#RessourcesSousSurveillance",
        "count": "28,5 k"
      },
      {
        "tag": "#NeoColonialisme",
        "count": "25,6 k"
      },
      {
        "tag": "#SatellitesFrancais",
        "count": "22,7 k"
      }
    ],
    "clues": [
      "Narratif central : des satellites militaires fran\u00e7ais surveilleraient les ressources, les mouvements politiques et les infrastructures africaines.",
      "Acteurs plausibles : r\u00e9gime de transition hostile, puissance ext\u00e9rieure concurrente et relais panafricanistes instrumentalis\u00e9s.",
      "Publics vis\u00e9s : jeunesse africaine urbaine, \u00e9tudiants, m\u00e9dias locaux et diaspora.",
      "D\u00e9clencheur fictif : des cartes satellite annot\u00e9es et des captures de contr\u00f4le sorties de leur contexte.",
      "Point de vigilance : chercher la premi\u00e8re publication, la r\u00e9solution r\u00e9elle des images et les usages civils/militaires des satellites.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Espace",
        "handle": "@canal_officiel_espace",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_espace.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Espace",
        "handle": "@temoin_espace_espionnage_",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_espace_espionnage.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_03",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_03.jpg"
      },
      {
        "name": "Alerte Espace",
        "handle": "@alerte_espace_espionnage_",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_espace_espionnage.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_03",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_03.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_03",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_03.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que des satellites militaires fran\u00e7ais surveilleraient les ressources, les mouvements politiques et les infrastructures africaines. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : chercher la premi\u00e8re publication, la r\u00e9solution r\u00e9elle des images et les usages civils/militaires des satellites. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur des cartes satellite annot\u00e9es et des captures de contr\u00f4le sorties de leur contexte. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais nourrir l'accusation de n\u00e9ocolonialisme et fragiliser la coop\u00e9ration ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : des satellites militaires fran\u00e7ais surveilleraient les ressources, les mouvements politiques et les infrastructures africaines. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : La France aurait quitt\u00e9 certains pays au sol mais continuerait de les surveiller depuis l'espace. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : des satellites militaires fran\u00e7ais surveilleraient les ressources, les mouvements politiques et les infrastructures africaines. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : nourrir l'accusation de n\u00e9ocolonialisme et fragiliser la coop\u00e9ration. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Satellite au-dessus du Sahel",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "espace-espionnage-afrique_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "\u00c9cran de contr\u00f4le",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "espace-espionnage-afrique_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Carte d'observation",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "espace-espionnage-afrique_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Lumi\u00e8res nocturnes",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "espace-espionnage-afrique_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Article flout\u00e9",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "espace-espionnage-afrique_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Orbites affich\u00e9es",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "espace-espionnage-afrique_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Site minier",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "espace-espionnage-afrique_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Carte logistique",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "espace-espionnage-afrique_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Pancarte sans texte",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "espace-espionnage-afrique_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "espace-espionnage-afrique_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "espace-espionnage-afrique_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "espace-espionnage-afrique_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "espace-espionnage-afrique_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_espace",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que des satellites militaires fran\u00e7ais surveilleraient les ressources, les mouvements politiques et les infrastructures africaines.",
        "suspect": false,
        "likes": 1001,
        "reposts": 252,
        "replies": 75,
        "id": "espace-espionnage-afrique-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_espace_espionnage_",
        "content": "EXCLUSIF : des satellites militaires fran\u00e7ais surveilleraient les ressources, les mouvements politiques et les infrastructures africaines. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #EspionnageSpatial",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 26009600,
        "reposts": 12533220,
        "replies": 1218240,
        "media": {
          "kind": "photo",
          "title": "Satellite au-dessus du Sahel",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "espace-espionnage-afrique_01.png",
          "trace": "ru"
        },
        "id": "espace-espionnage-afrique-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. chercher la premi\u00e8re publication, la r\u00e9solution r\u00e9elle des images et les usages civils/militaires des satellites",
        "suspect": false,
        "likes": 1836,
        "reposts": 808,
        "replies": 123,
        "media": {
          "kind": "map",
          "title": "\u00c9cran de contr\u00f4le",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "espace-espionnage-afrique_02.png",
          "trace": "az"
        },
        "id": "espace-espionnage-afrique-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_espace_espionnage_",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #AfriqueObservee",
        "suspect": false,
        "likes": 787,
        "reposts": 295,
        "replies": 99,
        "media": {
          "kind": "video",
          "title": "Carte d'observation",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "espace-espionnage-afrique_03.png",
          "trace": "unknown"
        },
        "id": "espace-espionnage-afrique-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_03",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que des satellites militaires fran\u00e7ais surveilleraient les ressources, les mouvements politiques et les infrastructures africaines. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 20000768,
        "reposts": 9716847,
        "replies": 1218240,
        "media": {
          "kind": "document",
          "title": "Lumi\u00e8res nocturnes",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "espace-espionnage-afrique_04.png",
          "trace": "fr"
        },
        "id": "espace-espionnage-afrique-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 150800,
        "reposts": 93800,
        "replies": 28600,
        "media": {
          "kind": "chart",
          "title": "Article flout\u00e9",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "espace-espionnage-afrique_05.png",
          "trace": "ru"
        },
        "id": "espace-espionnage-afrique-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2333,
        "reposts": 1124,
        "replies": 183,
        "media": {
          "kind": "osint",
          "title": "Orbites affich\u00e9es",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "espace-espionnage-afrique_06.png",
          "trace": "unknown"
        },
        "id": "espace-espionnage-afrique-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_03",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi nourrir l'accusation de n\u00e9ocolonialisme et fragiliser la coop\u00e9ration. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 22159360,
        "reposts": 10698856,
        "replies": 1218240,
        "media": {
          "kind": "photo",
          "title": "Site minier",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "espace-espionnage-afrique_07.png",
          "trace": "az"
        },
        "id": "espace-espionnage-afrique-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : nourrir l'accusation de n\u00e9ocolonialisme et fragiliser la coop\u00e9ration. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2627,
        "reposts": 1321,
        "replies": 213,
        "media": {
          "kind": "screenshot",
          "title": "Carte logistique",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "espace-espionnage-afrique_08.png",
          "trace": "fr"
        },
        "id": "espace-espionnage-afrique-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #RessourcesSousSurveillance",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 36532224,
        "reposts": 16665341,
        "replies": 1978992,
        "media": {
          "kind": "comparison",
          "title": "Pancarte sans texte",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "espace-espionnage-afrique_09.png",
          "trace": "ru"
        },
        "id": "espace-espionnage-afrique-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3130,
        "reposts": 1721,
        "replies": 263,
        "id": "espace-espionnage-afrique-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "crise-quartiers-riches",
    "title": "Crise civile : l'arm\u00e9e prot\u00e9gerait les quartiers riches",
    "briefing": "Simulation p\u00e9dagogique : les militaires auraient prioris\u00e9 les zones ais\u00e9es et abandonn\u00e9 les autres quartiers. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : transformer une op\u00e9ration de soutien en accusation politique contre l'arm\u00e9e.",
    "timeWindow": "09:00-15:30",
    "location": "M\u00e9tropole fictive touch\u00e9e par une inondation",
    "volume": 495,
    "seed": 283672895,
    "trends": [
      {
        "tag": "#QuartiersOublies",
        "count": "34,4 k"
      },
      {
        "tag": "#SecoursADeuxVitesses",
        "count": "31,5 k"
      },
      {
        "tag": "#CriseLocale",
        "count": "28,6 k"
      },
      {
        "tag": "#ArmeeEtPopulation",
        "count": "25,7 k"
      },
      {
        "tag": "#InondationInfo",
        "count": "22,8 k"
      }
    ],
    "clues": [
      "Narratif central : les militaires auraient prioris\u00e9 les zones ais\u00e9es et abandonn\u00e9 les autres quartiers.",
      "Acteurs plausibles : r\u00e9seaux contestataires internes et acteurs \u00e9trangers exploitant la d\u00e9fiance envers l'\u00c9tat.",
      "Publics vis\u00e9s : population locale sinistr\u00e9e, \u00e9lus, m\u00e9dias r\u00e9gionaux et familles de militaires.",
      "D\u00e9clencheur fictif : photos d'anciens v\u00e9hicules militaires et t\u00e9moignages anonymes g\u00e9olocalis\u00e9s approximativement.",
      "Point de vigilance : comparer les horaires d'intervention, les zones r\u00e9ellement touch\u00e9es et les sources de terrain.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Crise",
        "handle": "@canal_officiel_crise",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_crise.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Crise",
        "handle": "@temoin_crise_quartiers_ri",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_crise_quartiers_ri.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_04",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_04.jpg"
      },
      {
        "name": "Alerte Crise",
        "handle": "@alerte_crise_quartiers_ri",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_crise_quartiers_ri.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_04",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_04.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_04",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_04.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que les militaires auraient prioris\u00e9 les zones ais\u00e9es et abandonn\u00e9 les autres quartiers. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : comparer les horaires d'intervention, les zones r\u00e9ellement touch\u00e9es et les sources de terrain. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur photos d'anciens v\u00e9hicules militaires et t\u00e9moignages anonymes g\u00e9olocalis\u00e9s approximativement. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais transformer une op\u00e9ration de soutien en accusation politique contre l'arm\u00e9e ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : les militaires auraient prioris\u00e9 les zones ais\u00e9es et abandonn\u00e9 les autres quartiers. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : On nous a oubli\u00e9s pendant que les beaux quartiers recevaient l'aide. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : les militaires auraient prioris\u00e9 les zones ais\u00e9es et abandonn\u00e9 les autres quartiers. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : transformer une op\u00e9ration de soutien en accusation politique contre l'arm\u00e9e. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Rue inond\u00e9e",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "crise-quartiers-riches_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Sacs de sable",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "crise-quartiers-riches_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Zone \u00e9vacu\u00e9e",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "crise-quartiers-riches_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Aide aux sinistr\u00e9s",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "crise-quartiers-riches_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Point de contr\u00f4le",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "crise-quartiers-riches_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Carte des quartiers",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "crise-quartiers-riches_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "V\u00e9hicule ancien",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "crise-quartiers-riches_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Centre d'h\u00e9bergement",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "crise-quartiers-riches_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Route barr\u00e9e",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "crise-quartiers-riches_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "crise-quartiers-riches_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "crise-quartiers-riches_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "crise-quartiers-riches_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "crise-quartiers-riches_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_crise",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que les militaires auraient prioris\u00e9 les zones ais\u00e9es et abandonn\u00e9 les autres quartiers.",
        "suspect": false,
        "likes": 1008,
        "reposts": 256,
        "replies": 76,
        "id": "crise-quartiers-riches-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_crise_quartiers_ri",
        "content": "EXCLUSIF : les militaires auraient prioris\u00e9 les zones ais\u00e9es et abandonn\u00e9 les autres quartiers. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #QuartiersOublies",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 26214400,
        "reposts": 12629260,
        "replies": 1265760,
        "media": {
          "kind": "photo",
          "title": "Rue inond\u00e9e",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "crise-quartiers-riches_01.png",
          "trace": "ru"
        },
        "id": "crise-quartiers-riches-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. comparer les horaires d'intervention, les zones r\u00e9ellement touch\u00e9es et les sources de terrain",
        "suspect": false,
        "likes": 1848,
        "reposts": 814,
        "replies": 124,
        "media": {
          "kind": "map",
          "title": "Sacs de sable",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "crise-quartiers-riches_02.png",
          "trace": "az"
        },
        "id": "crise-quartiers-riches-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_crise_quartiers_ri",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #SecoursADeuxVitesses",
        "suspect": false,
        "likes": 796,
        "reposts": 300,
        "replies": 100,
        "media": {
          "kind": "video",
          "title": "Zone \u00e9vacu\u00e9e",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "crise-quartiers-riches_03.png",
          "trace": "unknown"
        },
        "id": "crise-quartiers-riches-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_04",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que les militaires auraient prioris\u00e9 les zones ais\u00e9es et abandonn\u00e9 les autres quartiers. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 20250624,
        "reposts": 9834496,
        "replies": 1265760,
        "media": {
          "kind": "document",
          "title": "Aide aux sinistr\u00e9s",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "crise-quartiers-riches_04.png",
          "trace": "fr"
        },
        "id": "crise-quartiers-riches-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 152200,
        "reposts": 94700,
        "replies": 28900,
        "media": {
          "kind": "chart",
          "title": "Point de contr\u00f4le",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "crise-quartiers-riches_05.png",
          "trace": "ru"
        },
        "id": "crise-quartiers-riches-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2344,
        "reposts": 1132,
        "replies": 184,
        "media": {
          "kind": "osint",
          "title": "Carte des quartiers",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "crise-quartiers-riches_06.png",
          "trace": "unknown"
        },
        "id": "crise-quartiers-riches-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_04",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi transformer une op\u00e9ration de soutien en accusation politique contre l'arm\u00e9e. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 22446080,
        "reposts": 10823708,
        "replies": 1265760,
        "media": {
          "kind": "photo",
          "title": "V\u00e9hicule ancien",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "crise-quartiers-riches_07.png",
          "trace": "az"
        },
        "id": "crise-quartiers-riches-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : transformer une op\u00e9ration de soutien en accusation politique contre l'arm\u00e9e. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2636,
        "reposts": 1328,
        "replies": 214,
        "media": {
          "kind": "screenshot",
          "title": "Centre d'h\u00e9bergement",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "crise-quartiers-riches_08.png",
          "trace": "fr"
        },
        "id": "crise-quartiers-riches-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #CriseLocale",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 36831232,
        "reposts": 16778188,
        "replies": 1990656,
        "media": {
          "kind": "comparison",
          "title": "Route barr\u00e9e",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "crise-quartiers-riches_09.png",
          "trace": "ru"
        },
        "id": "crise-quartiers-riches-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3140,
        "reposts": 1728,
        "replies": 264,
        "id": "crise-quartiers-riches-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "crise-controle-militaire",
    "title": "Crise civile : l'arm\u00e9e pr\u00e9parerait un contr\u00f4le permanent",
    "briefing": "Simulation p\u00e9dagogique : les op\u00e9rations de protection seraient une r\u00e9p\u00e9tition g\u00e9n\u00e9rale pour installer un contr\u00f4le militaire. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : associer protection civile et d\u00e9rive autoritaire.",
    "timeWindow": "09:00-15:30",
    "location": "Ville fictive pendant un exercice de s\u00e9curisation",
    "volume": 530,
    "seed": 669488287,
    "trends": [
      {
        "tag": "#ControleMilitaire",
        "count": "34,5 k"
      },
      {
        "tag": "#ExerciceOuDerive",
        "count": "31,6 k"
      },
      {
        "tag": "#DronesEnVille",
        "count": "28,7 k"
      },
      {
        "tag": "#CriseEtLibertes",
        "count": "25,8 k"
      },
      {
        "tag": "#MairieSousSurveillance",
        "count": "22,0 k"
      }
    ],
    "clues": [
      "Narratif central : les op\u00e9rations de protection seraient une r\u00e9p\u00e9tition g\u00e9n\u00e9rale pour installer un contr\u00f4le militaire.",
      "Acteurs plausibles : milieux complotistes, extr\u00eames politiques et acteurs \u00e9trangers amplifiant la d\u00e9fiance.",
      "Publics vis\u00e9s : citoyens m\u00e9fiants, jeunes sur les r\u00e9seaux et militants anti-syst\u00e8me.",
      "D\u00e9clencheur fictif : vid\u00e9os de patrouilles r\u00e9elles mais dat\u00e9es d'un exercice annonc\u00e9 publiquement.",
      "Point de vigilance : v\u00e9rifier l'existence de l'exercice, le cadre l\u00e9gal, les dates et les lieux pr\u00e9cis.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Crise",
        "handle": "@canal_officiel_crise",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_crise.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Crise",
        "handle": "@temoin_crise_controle_mil",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_crise_controle_mil.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_05",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_05.jpg"
      },
      {
        "name": "Alerte Crise",
        "handle": "@alerte_crise_controle_mil",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_crise_controle_mil.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_05",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_05.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_05",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_05.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que les op\u00e9rations de protection seraient une r\u00e9p\u00e9tition g\u00e9n\u00e9rale pour installer un contr\u00f4le militaire. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : v\u00e9rifier l'existence de l'exercice, le cadre l\u00e9gal, les dates et les lieux pr\u00e9cis. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur vid\u00e9os de patrouilles r\u00e9elles mais dat\u00e9es d'un exercice annonc\u00e9 publiquement. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais associer protection civile et d\u00e9rive autoritaire ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : les op\u00e9rations de protection seraient une r\u00e9p\u00e9tition g\u00e9n\u00e9rale pour installer un contr\u00f4le militaire. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Apr\u00e8s les cam\u00e9ras, les drones et les patrouilles, demain les militaires devant chaque mairie. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : les op\u00e9rations de protection seraient une r\u00e9p\u00e9tition g\u00e9n\u00e9rale pour installer un contr\u00f4le militaire. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : associer protection civile et d\u00e9rive autoritaire. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Patrouille mairie",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "crise-controle-militaire_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Drone urbain",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "crise-controle-militaire_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Contr\u00f4le provisoire",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "crise-controle-militaire_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Cam\u00e9ra de rue",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "crise-controle-militaire_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "T\u00e9l\u00e9phones sortis",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "crise-controle-militaire_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "P\u00e9rim\u00e8tre s\u00e9curit\u00e9",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "crise-controle-militaire_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Dossier exercice",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "crise-controle-militaire_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Patrouille nocturne",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "crise-controle-militaire_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "V\u00e9hicules civiques",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "crise-controle-militaire_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "crise-controle-militaire_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "crise-controle-militaire_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "crise-controle-militaire_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "crise-controle-militaire_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_crise",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que les op\u00e9rations de protection seraient une r\u00e9p\u00e9tition g\u00e9n\u00e9rale pour installer un contr\u00f4le militaire.",
        "suspect": false,
        "likes": 1015,
        "reposts": 260,
        "replies": 77,
        "id": "crise-controle-militaire-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_crise_controle_mil",
        "content": "EXCLUSIF : les op\u00e9rations de protection seraient une r\u00e9p\u00e9tition g\u00e9n\u00e9rale pour installer un contr\u00f4le militaire. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #ControleMilitaire",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 26419200,
        "reposts": 12725300,
        "replies": 1313280,
        "media": {
          "kind": "photo",
          "title": "Patrouille mairie",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "crise-controle-militaire_01.png",
          "trace": "ru"
        },
        "id": "crise-controle-militaire-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. v\u00e9rifier l'existence de l'exercice, le cadre l\u00e9gal, les dates et les lieux pr\u00e9cis",
        "suspect": false,
        "likes": 1860,
        "reposts": 820,
        "replies": 125,
        "media": {
          "kind": "map",
          "title": "Drone urbain",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "crise-controle-militaire_02.png",
          "trace": "az"
        },
        "id": "crise-controle-militaire-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_crise_controle_mil",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #ExerciceOuDerive",
        "suspect": false,
        "likes": 805,
        "reposts": 305,
        "replies": 101,
        "media": {
          "kind": "video",
          "title": "Contr\u00f4le provisoire",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "crise-controle-militaire_03.png",
          "trace": "unknown"
        },
        "id": "crise-controle-militaire-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_05",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que les op\u00e9rations de protection seraient une r\u00e9p\u00e9tition g\u00e9n\u00e9rale pour installer un contr\u00f4le militaire. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 20500480,
        "reposts": 9952145,
        "replies": 1313280,
        "media": {
          "kind": "document",
          "title": "Cam\u00e9ra de rue",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "crise-controle-militaire_04.png",
          "trace": "fr"
        },
        "id": "crise-controle-militaire-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 153600,
        "reposts": 95600,
        "replies": 29200,
        "media": {
          "kind": "chart",
          "title": "T\u00e9l\u00e9phones sortis",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "crise-controle-militaire_05.png",
          "trace": "ru"
        },
        "id": "crise-controle-militaire-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2355,
        "reposts": 1140,
        "replies": 185,
        "media": {
          "kind": "osint",
          "title": "P\u00e9rim\u00e8tre s\u00e9curit\u00e9",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "crise-controle-militaire_06.png",
          "trace": "unknown"
        },
        "id": "crise-controle-militaire-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_05",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi associer protection civile et d\u00e9rive autoritaire. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 22732800,
        "reposts": 10948560,
        "replies": 1313280,
        "media": {
          "kind": "photo",
          "title": "Dossier exercice",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "crise-controle-militaire_07.png",
          "trace": "az"
        },
        "id": "crise-controle-militaire-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : associer protection civile et d\u00e9rive autoritaire. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2645,
        "reposts": 1335,
        "replies": 215,
        "media": {
          "kind": "screenshot",
          "title": "Patrouille nocturne",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "crise-controle-militaire_08.png",
          "trace": "fr"
        },
        "id": "crise-controle-militaire-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #DronesEnVille",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 37130240,
        "reposts": 16891035,
        "replies": 2002320,
        "media": {
          "kind": "comparison",
          "title": "V\u00e9hicules civiques",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "crise-controle-militaire_09.png",
          "trace": "ru"
        },
        "id": "crise-controle-militaire-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3150,
        "reposts": 1735,
        "replies": 265,
        "id": "crise-controle-militaire-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "base-contamination-eau",
    "title": "Protection de la population : une base aurait contamin\u00e9 l'eau",
    "briefing": "Simulation p\u00e9dagogique : une base militaire aurait contamin\u00e9 l'eau potable et fait pression pour \u00e9touffer l'affaire. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : faire basculer une pr\u00e9occupation environnementale l\u00e9gitime vers une accusation globale.",
    "timeWindow": "09:00-15:30",
    "location": "Commune fictive voisine d'une base a\u00e9rienne",
    "volume": 390,
    "seed": 4085369458,
    "trends": [
      {
        "tag": "#EauPolluee",
        "count": "34,6 k"
      },
      {
        "tag": "#BaseMilitaire",
        "count": "31,7 k"
      },
      {
        "tag": "#RiverainsInquiets",
        "count": "28,8 k"
      },
      {
        "tag": "#AnalyseCachee",
        "count": "25,0 k"
      },
      {
        "tag": "#SanteLocale",
        "count": "22,1 k"
      }
    ],
    "clues": [
      "Narratif central : une base militaire aurait contamin\u00e9 l'eau potable et fait pression pour \u00e9touffer l'affaire.",
      "Acteurs plausibles : r\u00e9seau militant radical, concurrent politique local ou acteur \u00e9tranger amplifiant une inqui\u00e9tude plausible.",
      "Publics vis\u00e9s : riverains, associations \u00e9cologistes, \u00e9lus locaux et parents d'\u00e9l\u00e8ves.",
      "D\u00e9clencheur fictif : analyses partielles, cartes de pollution non dat\u00e9es et photos de bouteilles d'eau stock\u00e9es.",
      "Point de vigilance : recouper analyses officielles, laboratoires, p\u00e9rim\u00e8tres, dates de pr\u00e9l\u00e8vement et historique industriel.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Crise",
        "handle": "@canal_officiel_base",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_base.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Base",
        "handle": "@temoin_base_contamination",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_base_contamination.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_06",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_06.jpg"
      },
      {
        "name": "Alerte Base",
        "handle": "@alerte_base_contamination",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_base_contamination.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_06",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_06.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_06",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_06.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que une base militaire aurait contamin\u00e9 l'eau potable et fait pression pour \u00e9touffer l'affaire. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : recouper analyses officielles, laboratoires, p\u00e9rim\u00e8tres, dates de pr\u00e9l\u00e8vement et historique industriel. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur analyses partielles, cartes de pollution non dat\u00e9es et photos de bouteilles d'eau stock\u00e9es. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais faire basculer une pr\u00e9occupation environnementale l\u00e9gitime vers une accusation globale ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : une base militaire aurait contamin\u00e9 l'eau potable et fait pression pour \u00e9touffer l'affaire. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : L'arm\u00e9e prot\u00e9gerait son image avant la sant\u00e9 des riverains. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : une base militaire aurait contamin\u00e9 l'eau potable et fait pression pour \u00e9touffer l'affaire. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : faire basculer une pr\u00e9occupation environnementale l\u00e9gitime vers une accusation globale. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Base a\u00e9rienne",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "base-contamination-eau_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "\u00c9chantillon d'eau",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "base-contamination-eau_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Rivi\u00e8re cl\u00f4tur\u00e9e",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "base-contamination-eau_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Ch\u00e2teau d'eau",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "base-contamination-eau_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Verre trouble",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "base-contamination-eau_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Carte de pollution",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "base-contamination-eau_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Rapport labo",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "base-contamination-eau_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "R\u00e9union riverains",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "base-contamination-eau_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Bouteilles stock\u00e9es",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "base-contamination-eau_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "base-contamination-eau_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "base-contamination-eau_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "base-contamination-eau_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "base-contamination-eau_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_base",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que une base militaire aurait contamin\u00e9 l'eau potable et fait pression pour \u00e9touffer l'affaire.",
        "suspect": false,
        "likes": 1022,
        "reposts": 264,
        "replies": 78,
        "id": "base-contamination-eau-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_base_contamination",
        "content": "EXCLUSIF : une base militaire aurait contamin\u00e9 l'eau potable et fait pression pour \u00e9touffer l'affaire. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #EauPolluee",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 26624000,
        "reposts": 12821340,
        "replies": 1360800,
        "media": {
          "kind": "photo",
          "title": "Base a\u00e9rienne",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "base-contamination-eau_01.png",
          "trace": "ru"
        },
        "id": "base-contamination-eau-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. recouper analyses officielles, laboratoires, p\u00e9rim\u00e8tres, dates de pr\u00e9l\u00e8vement et historique industriel",
        "suspect": false,
        "likes": 1872,
        "reposts": 826,
        "replies": 126,
        "media": {
          "kind": "map",
          "title": "\u00c9chantillon d'eau",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "base-contamination-eau_02.png",
          "trace": "az"
        },
        "id": "base-contamination-eau-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_base_contamination",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #BaseMilitaire",
        "suspect": false,
        "likes": 814,
        "reposts": 310,
        "replies": 102,
        "media": {
          "kind": "video",
          "title": "Rivi\u00e8re cl\u00f4tur\u00e9e",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "base-contamination-eau_03.png",
          "trace": "unknown"
        },
        "id": "base-contamination-eau-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_06",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que une base militaire aurait contamin\u00e9 l'eau potable et fait pression pour \u00e9touffer l'affaire. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 20750336,
        "reposts": 10069794,
        "replies": 1360800,
        "media": {
          "kind": "document",
          "title": "Ch\u00e2teau d'eau",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "base-contamination-eau_04.png",
          "trace": "fr"
        },
        "id": "base-contamination-eau-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 155000,
        "reposts": 96500,
        "replies": 29500,
        "media": {
          "kind": "chart",
          "title": "Verre trouble",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "base-contamination-eau_05.png",
          "trace": "ru"
        },
        "id": "base-contamination-eau-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2366,
        "reposts": 1148,
        "replies": 186,
        "media": {
          "kind": "osint",
          "title": "Carte de pollution",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "base-contamination-eau_06.png",
          "trace": "unknown"
        },
        "id": "base-contamination-eau-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_06",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi faire basculer une pr\u00e9occupation environnementale l\u00e9gitime vers une accusation globale. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 23019520,
        "reposts": 11073412,
        "replies": 1360800,
        "media": {
          "kind": "photo",
          "title": "Rapport labo",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "base-contamination-eau_07.png",
          "trace": "az"
        },
        "id": "base-contamination-eau-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : faire basculer une pr\u00e9occupation environnementale l\u00e9gitime vers une accusation globale. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2654,
        "reposts": 1342,
        "replies": 216,
        "media": {
          "kind": "screenshot",
          "title": "R\u00e9union riverains",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "base-contamination-eau_08.png",
          "trace": "fr"
        },
        "id": "base-contamination-eau-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #RiverainsInquiets",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 37429248,
        "reposts": 17003882,
        "replies": 2013984,
        "media": {
          "kind": "comparison",
          "title": "Bouteilles stock\u00e9es",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "base-contamination-eau_09.png",
          "trace": "ru"
        },
        "id": "base-contamination-eau-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3160,
        "reposts": 1742,
        "replies": 266,
        "id": "base-contamination-eau-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "opex-interets-economiques",
    "title": "OPEX : les op\u00e9rations serviraient les int\u00e9r\u00eats \u00e9conomiques",
    "briefing": "Simulation p\u00e9dagogique : les interventions fran\u00e7aises ne viseraient pas la s\u00e9curit\u00e9 mais les ressources et les contrats. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : d\u00e9l\u00e9gitimer toute pr\u00e9sence fran\u00e7aise et salir l'image des militaires.",
    "timeWindow": "09:00-15:30",
    "location": "Zone ext\u00e9rieure fictive riche en ressources",
    "volume": 425,
    "seed": 699142885,
    "trends": [
      {
        "tag": "#OPEXBusiness",
        "count": "34,7 k"
      },
      {
        "tag": "#RessourcesEtArmee",
        "count": "31,8 k"
      },
      {
        "tag": "#ContratsCaches",
        "count": "28,0 k"
      },
      {
        "tag": "#PortsEtMinerais",
        "count": "25,1 k"
      },
      {
        "tag": "#ProtectionOuProfit",
        "count": "22,2 k"
      }
    ],
    "clues": [
      "Narratif central : les interventions fran\u00e7aises ne viseraient pas la s\u00e9curit\u00e9 mais les ressources et les contrats.",
      "Acteurs plausibles : \u00c9tat concurrent, r\u00e9seau anti-fran\u00e7ais, groupes arm\u00e9s locaux et influenceurs politiques.",
      "Publics vis\u00e9s : opinions africaines, ONG, journalistes et opinion fran\u00e7aise fatigu\u00e9e des engagements ext\u00e9rieurs.",
      "D\u00e9clencheur fictif : cartes de routes mini\u00e8res et montages entre convois, ports et contrats.",
      "Point de vigilance : s\u00e9parer faits \u00e9conomiques, pr\u00e9sence militaire, calendrier des contrats et raccourcis narratifs.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Op\u00e9rations",
        "handle": "@canal_officiel_opex",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_opex.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Opex",
        "handle": "@temoin_opex_interets_econ",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_opex_interets_econ.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_07",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_07.jpg"
      },
      {
        "name": "Alerte Opex",
        "handle": "@alerte_opex_interets_econ",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_opex_interets_econ.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_07",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_07.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_07",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_07.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que les interventions fran\u00e7aises ne viseraient pas la s\u00e9curit\u00e9 mais les ressources et les contrats. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : s\u00e9parer faits \u00e9conomiques, pr\u00e9sence militaire, calendrier des contrats et raccourcis narratifs. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur cartes de routes mini\u00e8res et montages entre convois, ports et contrats. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais d\u00e9l\u00e9gitimer toute pr\u00e9sence fran\u00e7aise et salir l'image des militaires ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : les interventions fran\u00e7aises ne viseraient pas la s\u00e9curit\u00e9 mais les ressources et les contrats. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Les soldats parlent de protection, les minist\u00e8res parleraient de contrats. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : les interventions fran\u00e7aises ne viseraient pas la s\u00e9curit\u00e9 mais les ressources et les contrats. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : d\u00e9l\u00e9gitimer toute pr\u00e9sence fran\u00e7aise et salir l'image des militaires. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Convoi minier",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "opex-interets-economiques_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Port strat\u00e9gique",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "opex-interets-economiques_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Mine vue satellite",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "opex-interets-economiques_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "R\u00e9union contrats",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "opex-interets-economiques_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Conteneurs",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "opex-interets-economiques_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Pipeline d\u00e9sert",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "opex-interets-economiques_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Routes commerciales",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "opex-interets-economiques_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Checkpoint",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "opex-interets-economiques_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Courbe \u00e9conomique",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "opex-interets-economiques_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "opex-interets-economiques_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "opex-interets-economiques_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "opex-interets-economiques_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "opex-interets-economiques_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_opex",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que les interventions fran\u00e7aises ne viseraient pas la s\u00e9curit\u00e9 mais les ressources et les contrats.",
        "suspect": false,
        "likes": 1029,
        "reposts": 268,
        "replies": 79,
        "id": "opex-interets-economiques-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_opex_interets_econ",
        "content": "EXCLUSIF : les interventions fran\u00e7aises ne viseraient pas la s\u00e9curit\u00e9 mais les ressources et les contrats. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #OPEXBusiness",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 26828800,
        "reposts": 12917380,
        "replies": 1408320,
        "media": {
          "kind": "photo",
          "title": "Convoi minier",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "opex-interets-economiques_01.png",
          "trace": "ru"
        },
        "id": "opex-interets-economiques-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. s\u00e9parer faits \u00e9conomiques, pr\u00e9sence militaire, calendrier des contrats et raccourcis narratifs",
        "suspect": false,
        "likes": 1884,
        "reposts": 832,
        "replies": 127,
        "media": {
          "kind": "map",
          "title": "Port strat\u00e9gique",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "opex-interets-economiques_02.png",
          "trace": "az"
        },
        "id": "opex-interets-economiques-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_opex_interets_econ",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #RessourcesEtArmee",
        "suspect": false,
        "likes": 823,
        "reposts": 315,
        "replies": 103,
        "media": {
          "kind": "video",
          "title": "Mine vue satellite",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "opex-interets-economiques_03.png",
          "trace": "unknown"
        },
        "id": "opex-interets-economiques-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_07",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que les interventions fran\u00e7aises ne viseraient pas la s\u00e9curit\u00e9 mais les ressources et les contrats. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 21000192,
        "reposts": 10187443,
        "replies": 1408320,
        "media": {
          "kind": "document",
          "title": "R\u00e9union contrats",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "opex-interets-economiques_04.png",
          "trace": "fr"
        },
        "id": "opex-interets-economiques-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 156400,
        "reposts": 97400,
        "replies": 29800,
        "media": {
          "kind": "chart",
          "title": "Conteneurs",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "opex-interets-economiques_05.png",
          "trace": "ru"
        },
        "id": "opex-interets-economiques-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2377,
        "reposts": 1156,
        "replies": 187,
        "media": {
          "kind": "osint",
          "title": "Pipeline d\u00e9sert",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "opex-interets-economiques_06.png",
          "trace": "unknown"
        },
        "id": "opex-interets-economiques-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_07",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi d\u00e9l\u00e9gitimer toute pr\u00e9sence fran\u00e7aise et salir l'image des militaires. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 23306240,
        "reposts": 11198264,
        "replies": 1408320,
        "media": {
          "kind": "photo",
          "title": "Routes commerciales",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "opex-interets-economiques_07.png",
          "trace": "az"
        },
        "id": "opex-interets-economiques-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : d\u00e9l\u00e9gitimer toute pr\u00e9sence fran\u00e7aise et salir l'image des militaires. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2663,
        "reposts": 1349,
        "replies": 217,
        "media": {
          "kind": "screenshot",
          "title": "Checkpoint",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "opex-interets-economiques_08.png",
          "trace": "fr"
        },
        "id": "opex-interets-economiques-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #ContratsCaches",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 37728256,
        "reposts": 17116729,
        "replies": 2025648,
        "media": {
          "kind": "comparison",
          "title": "Courbe \u00e9conomique",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "opex-interets-economiques_09.png",
          "trace": "ru"
        },
        "id": "opex-interets-economiques-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3170,
        "reposts": 1749,
        "replies": 267,
        "id": "opex-interets-economiques-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "opex-soutien-groupe-arme",
    "title": "OPEX : la France soutiendrait secr\u00e8tement un groupe arm\u00e9",
    "briefing": "Simulation p\u00e9dagogique : des forces fran\u00e7aises auraient pass\u00e9 un accord secret avec une milice locale. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : semer le doute chez les partenaires et provoquer une r\u00e9action diplomatique.",
    "timeWindow": "09:00-15:30",
    "location": "Zone instable fictive de Nara-Kolmi",
    "volume": 460,
    "seed": 3941185283,
    "trends": [
      {
        "tag": "#AccordSecret",
        "count": "34,8 k"
      },
      {
        "tag": "#MiliceLocale",
        "count": "31,0 k"
      },
      {
        "tag": "#DocumentFuite",
        "count": "28,1 k"
      },
      {
        "tag": "#NaraKolmi",
        "count": "25,2 k"
      },
      {
        "tag": "#OPEXSousMain",
        "count": "22,3 k"
      }
    ],
    "clues": [
      "Narratif central : des forces fran\u00e7aises auraient pass\u00e9 un accord secret avec une milice locale.",
      "Acteurs plausibles : groupe arm\u00e9 rival, pouvoir local cherchant un bouc \u00e9missaire et acteur \u00e9tranger concurrent.",
      "Publics vis\u00e9s : populations locales, forces partenaires, journalistes internationaux et familles de victimes.",
      "D\u00e9clencheur fictif : un pr\u00e9tendu document confidentiel mal r\u00e9dig\u00e9 mais viral.",
      "Point de vigilance : chercher l'origine du document, les incoh\u00e9rences de style, les lieux et les signatures.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Op\u00e9rations",
        "handle": "@canal_officiel_opex",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_opex.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Opex",
        "handle": "@temoin_opex_soutien_group",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_opex_soutien_group.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_08",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_08.jpg"
      },
      {
        "name": "Alerte Opex",
        "handle": "@alerte_opex_soutien_group",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_opex_soutien_group.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_08",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_08.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_08",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_08.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que des forces fran\u00e7aises auraient pass\u00e9 un accord secret avec une milice locale. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : chercher l'origine du document, les incoh\u00e9rences de style, les lieux et les signatures. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur un pr\u00e9tendu document confidentiel mal r\u00e9dig\u00e9 mais viral. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais semer le doute chez les partenaires et provoquer une r\u00e9action diplomatique ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : des forces fran\u00e7aises auraient pass\u00e9 un accord secret avec une milice locale. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Paris combattrait officiellement la violence tout en n\u00e9gociant avec certains groupes. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : des forces fran\u00e7aises auraient pass\u00e9 un accord secret avec une milice locale. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : semer le doute chez les partenaires et provoquer une r\u00e9action diplomatique. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Rencontre nocturne",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "opex-soutien-groupe-arme_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Document confidentiel",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "opex-soutien-groupe-arme_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Convoi poussi\u00e8re",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "opex-soutien-groupe-arme_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Carte sur table",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "opex-soutien-groupe-arme_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Silhouettes arm\u00e9es",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "opex-soutien-groupe-arme_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Capture messagerie",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "opex-soutien-groupe-arme_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Compound satellite",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "opex-soutien-groupe-arme_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Caisses anonymes",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "opex-soutien-groupe-arme_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Dossier journaliste",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "opex-soutien-groupe-arme_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "opex-soutien-groupe-arme_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "opex-soutien-groupe-arme_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "opex-soutien-groupe-arme_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "opex-soutien-groupe-arme_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_opex",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que des forces fran\u00e7aises auraient pass\u00e9 un accord secret avec une milice locale.",
        "suspect": false,
        "likes": 1036,
        "reposts": 272,
        "replies": 80,
        "id": "opex-soutien-groupe-arme-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_opex_soutien_group",
        "content": "EXCLUSIF : des forces fran\u00e7aises auraient pass\u00e9 un accord secret avec une milice locale. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #AccordSecret",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 27033600,
        "reposts": 13013420,
        "replies": 1455840,
        "media": {
          "kind": "photo",
          "title": "Rencontre nocturne",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "opex-soutien-groupe-arme_01.png",
          "trace": "ru"
        },
        "id": "opex-soutien-groupe-arme-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. chercher l'origine du document, les incoh\u00e9rences de style, les lieux et les signatures",
        "suspect": false,
        "likes": 1896,
        "reposts": 838,
        "replies": 128,
        "media": {
          "kind": "map",
          "title": "Document confidentiel",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "opex-soutien-groupe-arme_02.png",
          "trace": "az"
        },
        "id": "opex-soutien-groupe-arme-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_opex_soutien_group",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #MiliceLocale",
        "suspect": false,
        "likes": 832,
        "reposts": 320,
        "replies": 104,
        "media": {
          "kind": "video",
          "title": "Convoi poussi\u00e8re",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "opex-soutien-groupe-arme_03.png",
          "trace": "unknown"
        },
        "id": "opex-soutien-groupe-arme-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_08",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que des forces fran\u00e7aises auraient pass\u00e9 un accord secret avec une milice locale. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 21250048,
        "reposts": 10305092,
        "replies": 1455840,
        "media": {
          "kind": "document",
          "title": "Carte sur table",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "opex-soutien-groupe-arme_04.png",
          "trace": "fr"
        },
        "id": "opex-soutien-groupe-arme-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 157800,
        "reposts": 98300,
        "replies": 30100,
        "media": {
          "kind": "chart",
          "title": "Silhouettes arm\u00e9es",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "opex-soutien-groupe-arme_05.png",
          "trace": "ru"
        },
        "id": "opex-soutien-groupe-arme-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2388,
        "reposts": 1164,
        "replies": 188,
        "media": {
          "kind": "osint",
          "title": "Capture messagerie",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "opex-soutien-groupe-arme_06.png",
          "trace": "unknown"
        },
        "id": "opex-soutien-groupe-arme-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_08",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi semer le doute chez les partenaires et provoquer une r\u00e9action diplomatique. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 23592960,
        "reposts": 11323116,
        "replies": 1455840,
        "media": {
          "kind": "photo",
          "title": "Compound satellite",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "opex-soutien-groupe-arme_07.png",
          "trace": "az"
        },
        "id": "opex-soutien-groupe-arme-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : semer le doute chez les partenaires et provoquer une r\u00e9action diplomatique. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2672,
        "reposts": 1356,
        "replies": 218,
        "media": {
          "kind": "screenshot",
          "title": "Caisses anonymes",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "opex-soutien-groupe-arme_08.png",
          "trace": "fr"
        },
        "id": "opex-soutien-groupe-arme-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #DocumentFuite",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 38027264,
        "reposts": 17229576,
        "replies": 2037312,
        "media": {
          "kind": "comparison",
          "title": "Dossier journaliste",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "opex-soutien-groupe-arme_09.png",
          "trace": "ru"
        },
        "id": "opex-soutien-groupe-arme-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3180,
        "reposts": 1756,
        "replies": 268,
        "id": "opex-soutien-groupe-arme-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "opex-frappes-civils",
    "title": "OPEX : des frappes fran\u00e7aises auraient vis\u00e9 des civils",
    "briefing": "Simulation p\u00e9dagogique : des images de victimes civiles seraient attribu\u00e9es \u00e0 une op\u00e9ration fran\u00e7aise r\u00e9cente. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : transformer une op\u00e9ration militaire en scandale moral imm\u00e9diat.",
    "timeWindow": "09:00-15:30",
    "location": "Village fictif pr\u00e8s d'une zone de combat",
    "volume": 495,
    "seed": 1826032749,
    "trends": [
      {
        "tag": "#VictimesCiviles",
        "count": "34,0 k"
      },
      {
        "tag": "#FrappeContestee",
        "count": "31,1 k"
      },
      {
        "tag": "#ImagesAnciennes",
        "count": "28,2 k"
      },
      {
        "tag": "#OPEXVerif",
        "count": "25,3 k"
      },
      {
        "tag": "#JusticeOuManip",
        "count": "22,4 k"
      }
    ],
    "clues": [
      "Narratif central : des images de victimes civiles seraient attribu\u00e9es \u00e0 une op\u00e9ration fran\u00e7aise r\u00e9cente.",
      "Acteurs plausibles : groupe terroriste, r\u00e9seau de propagande hostile et \u00c9tat concurrent.",
      "Publics vis\u00e9s : opinion fran\u00e7aise, familles de militaires, m\u00e9dias internationaux et ONG.",
      "D\u00e9clencheur fictif : images anciennes ou prises dans un autre pays r\u00e9attribu\u00e9es \u00e0 l'op\u00e9ration.",
      "Point de vigilance : contr\u00f4ler date, m\u00e9t\u00e9o, relief, premi\u00e8re publication, source primaire et chronologie officielle.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Op\u00e9rations",
        "handle": "@canal_officiel_opex",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_opex.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Opex",
        "handle": "@temoin_opex_frappes_civil",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_opex_frappes_civil.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_09",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_09.jpg"
      },
      {
        "name": "Alerte Opex",
        "handle": "@alerte_opex_frappes_civil",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_opex_frappes_civil.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_09",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_09.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_09",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_09.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que des images de victimes civiles seraient attribu\u00e9es \u00e0 une op\u00e9ration fran\u00e7aise r\u00e9cente. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : contr\u00f4ler date, m\u00e9t\u00e9o, relief, premi\u00e8re publication, source primaire et chronologie officielle. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur images anciennes ou prises dans un autre pays r\u00e9attribu\u00e9es \u00e0 l'op\u00e9ration. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais transformer une op\u00e9ration militaire en scandale moral imm\u00e9diat ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : des images de victimes civiles seraient attribu\u00e9es \u00e0 une op\u00e9ration fran\u00e7aise r\u00e9cente. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Paris parle de terroristes neutralis\u00e9s, les villageois parleraient d'enfants tu\u00e9s. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : des images de victimes civiles seraient attribu\u00e9es \u00e0 une op\u00e9ration fran\u00e7aise r\u00e9cente. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : transformer une op\u00e9ration militaire en scandale moral imm\u00e9diat. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Fum\u00e9e distante",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "opex-frappes-civils_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Secours au loin",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "opex-frappes-civils_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Carte g\u00e9olocalis\u00e9e",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "opex-frappes-civils_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "B\u00e2timent endommag\u00e9",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "opex-frappes-civils_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "\u00c9cran cam\u00e9ra",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "opex-frappes-civils_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Archive discordante",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "opex-frappes-civils_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Comparaison OSINT",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "opex-frappes-civils_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Terrain vu drone",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "opex-frappes-civils_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Route humanitaire",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "opex-frappes-civils_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "opex-frappes-civils_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "opex-frappes-civils_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "opex-frappes-civils_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "opex-frappes-civils_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_opex",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que des images de victimes civiles seraient attribu\u00e9es \u00e0 une op\u00e9ration fran\u00e7aise r\u00e9cente.",
        "suspect": false,
        "likes": 1043,
        "reposts": 276,
        "replies": 81,
        "id": "opex-frappes-civils-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_opex_frappes_civil",
        "content": "EXCLUSIF : des images de victimes civiles seraient attribu\u00e9es \u00e0 une op\u00e9ration fran\u00e7aise r\u00e9cente. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #VictimesCiviles",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 27238400,
        "reposts": 13109460,
        "replies": 1503360,
        "media": {
          "kind": "photo",
          "title": "Fum\u00e9e distante",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "opex-frappes-civils_01.png",
          "trace": "ru"
        },
        "id": "opex-frappes-civils-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. contr\u00f4ler date, m\u00e9t\u00e9o, relief, premi\u00e8re publication, source primaire et chronologie officielle",
        "suspect": false,
        "likes": 1908,
        "reposts": 844,
        "replies": 129,
        "media": {
          "kind": "map",
          "title": "Secours au loin",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "opex-frappes-civils_02.png",
          "trace": "az"
        },
        "id": "opex-frappes-civils-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_opex_frappes_civil",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #FrappeContestee",
        "suspect": false,
        "likes": 841,
        "reposts": 325,
        "replies": 105,
        "media": {
          "kind": "video",
          "title": "Carte g\u00e9olocalis\u00e9e",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "opex-frappes-civils_03.png",
          "trace": "unknown"
        },
        "id": "opex-frappes-civils-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_09",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que des images de victimes civiles seraient attribu\u00e9es \u00e0 une op\u00e9ration fran\u00e7aise r\u00e9cente. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 21499904,
        "reposts": 10422741,
        "replies": 1503360,
        "media": {
          "kind": "document",
          "title": "B\u00e2timent endommag\u00e9",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "opex-frappes-civils_04.png",
          "trace": "fr"
        },
        "id": "opex-frappes-civils-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 159200,
        "reposts": 99200,
        "replies": 30400,
        "media": {
          "kind": "chart",
          "title": "\u00c9cran cam\u00e9ra",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "opex-frappes-civils_05.png",
          "trace": "ru"
        },
        "id": "opex-frappes-civils-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2399,
        "reposts": 1172,
        "replies": 189,
        "media": {
          "kind": "osint",
          "title": "Archive discordante",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "opex-frappes-civils_06.png",
          "trace": "unknown"
        },
        "id": "opex-frappes-civils-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_09",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi transformer une op\u00e9ration militaire en scandale moral imm\u00e9diat. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 23879680,
        "reposts": 11447968,
        "replies": 1503360,
        "media": {
          "kind": "photo",
          "title": "Comparaison OSINT",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "opex-frappes-civils_07.png",
          "trace": "az"
        },
        "id": "opex-frappes-civils-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : transformer une op\u00e9ration militaire en scandale moral imm\u00e9diat. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2681,
        "reposts": 1363,
        "replies": 219,
        "media": {
          "kind": "screenshot",
          "title": "Terrain vu drone",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "opex-frappes-civils_08.png",
          "trace": "fr"
        },
        "id": "opex-frappes-civils-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #ImagesAnciennes",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 38326272,
        "reposts": 17342423,
        "replies": 2048976,
        "media": {
          "kind": "comparison",
          "title": "Route humanitaire",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "opex-frappes-civils_09.png",
          "trace": "ru"
        },
        "id": "opex-frappes-civils-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3190,
        "reposts": 1763,
        "replies": 269,
        "id": "opex-frappes-civils-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "sahel-charnier-desert",
    "title": "Sahel : un charnier d\u00e9sertique serait attribu\u00e9 aux forces fran\u00e7aises",
    "briefing": "Simulation p\u00e9dagogique : une vid\u00e9o montrerait des civils ex\u00e9cut\u00e9s par des forces fran\u00e7aises lors d'une ancienne op\u00e9ration. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : r\u00e9\u00e9crire le pass\u00e9 op\u00e9rationnel fran\u00e7ais et installer une accusation durable.",
    "timeWindow": "09:00-15:30",
    "location": "Zone d\u00e9sertique fictive difficile \u00e0 g\u00e9olocaliser",
    "volume": 530,
    "seed": 4045508031,
    "trends": [
      {
        "tag": "#CharnierSahel",
        "count": "34,1 k"
      },
      {
        "tag": "#DesertTemoin",
        "count": "31,2 k"
      },
      {
        "tag": "#ArchiveOuPreuve",
        "count": "28,3 k"
      },
      {
        "tag": "#JusticeSahel",
        "count": "25,4 k"
      },
      {
        "tag": "#Geolocalisation",
        "count": "22,5 k"
      }
    ],
    "clues": [
      "Narratif central : une vid\u00e9o montrerait des civils ex\u00e9cut\u00e9s par des forces fran\u00e7aises lors d'une ancienne op\u00e9ration.",
      "Acteurs plausibles : groupe arm\u00e9 sah\u00e9lien, m\u00e9dia proxy \u00e9tranger et r\u00e9gime justifiant sa rupture avec Paris.",
      "Publics vis\u00e9s : jeunesse sah\u00e9lienne, diaspora, ONG, m\u00e9dias internationaux et opinion fran\u00e7aise.",
      "D\u00e9clencheur fictif : vid\u00e9o floue, traces au sol et r\u00e9cits anonymes impossibles \u00e0 dater rapidement.",
      "Point de vigilance : g\u00e9olocaliser le terrain, comparer ombres, v\u00e9hicules, m\u00e9t\u00e9o, archives et sources ind\u00e9pendantes.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Op\u00e9rations",
        "handle": "@canal_officiel_sahel",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_sahel.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Sahel",
        "handle": "@temoin_sahel_charnier_des",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_sahel_charnier_des.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_10",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_10.jpg"
      },
      {
        "name": "Alerte Sahel",
        "handle": "@alerte_sahel_charnier_des",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_sahel_charnier_des.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_10",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_10.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_10",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_10.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que une vid\u00e9o montrerait des civils ex\u00e9cut\u00e9s par des forces fran\u00e7aises lors d'une ancienne op\u00e9ration. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : g\u00e9olocaliser le terrain, comparer ombres, v\u00e9hicules, m\u00e9t\u00e9o, archives et sources ind\u00e9pendantes. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur vid\u00e9o floue, traces au sol et r\u00e9cits anonymes impossibles \u00e0 dater rapidement. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais r\u00e9\u00e9crire le pass\u00e9 op\u00e9rationnel fran\u00e7ais et installer une accusation durable ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : une vid\u00e9o montrerait des civils ex\u00e9cut\u00e9s par des forces fran\u00e7aises lors d'une ancienne op\u00e9ration. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Le d\u00e9sert cacherait les preuves d'un pass\u00e9 op\u00e9rationnel violent. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : une vid\u00e9o montrerait des civils ex\u00e9cut\u00e9s par des forces fran\u00e7aises lors d'une ancienne op\u00e9ration. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : r\u00e9\u00e9crire le pass\u00e9 op\u00e9rationnel fran\u00e7ais et installer une accusation durable. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Site d\u00e9sertique",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-charnier-desert_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Enqu\u00eateurs anonymes",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "sahel-charnier-desert_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Traces satellite",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "sahel-charnier-desert_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Vid\u00e9o flout\u00e9e",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "sahel-charnier-desert_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Archive convoi",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "sahel-charnier-desert_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Cercle g\u00e9oloc",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "sahel-charnier-desert_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Carnet GPS",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-charnier-desert_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Rassemblement local",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "sahel-charnier-desert_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Relief compar\u00e9",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "sahel-charnier-desert_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "sahel-charnier-desert_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "sahel-charnier-desert_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "sahel-charnier-desert_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "sahel-charnier-desert_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_sahel",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que une vid\u00e9o montrerait des civils ex\u00e9cut\u00e9s par des forces fran\u00e7aises lors d'une ancienne op\u00e9ration.",
        "suspect": false,
        "likes": 1050,
        "reposts": 280,
        "replies": 82,
        "id": "sahel-charnier-desert-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_sahel_charnier_des",
        "content": "EXCLUSIF : une vid\u00e9o montrerait des civils ex\u00e9cut\u00e9s par des forces fran\u00e7aises lors d'une ancienne op\u00e9ration. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #CharnierSahel",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 27443200,
        "reposts": 13205500,
        "replies": 1550880,
        "media": {
          "kind": "photo",
          "title": "Site d\u00e9sertique",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-charnier-desert_01.png",
          "trace": "ru"
        },
        "id": "sahel-charnier-desert-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. g\u00e9olocaliser le terrain, comparer ombres, v\u00e9hicules, m\u00e9t\u00e9o, archives et sources ind\u00e9pendantes",
        "suspect": false,
        "likes": 1920,
        "reposts": 850,
        "replies": 130,
        "media": {
          "kind": "map",
          "title": "Enqu\u00eateurs anonymes",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "sahel-charnier-desert_02.png",
          "trace": "az"
        },
        "id": "sahel-charnier-desert-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_sahel_charnier_des",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #DesertTemoin",
        "suspect": false,
        "likes": 850,
        "reposts": 330,
        "replies": 106,
        "media": {
          "kind": "video",
          "title": "Traces satellite",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "sahel-charnier-desert_03.png",
          "trace": "unknown"
        },
        "id": "sahel-charnier-desert-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_10",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que une vid\u00e9o montrerait des civils ex\u00e9cut\u00e9s par des forces fran\u00e7aises lors d'une ancienne op\u00e9ration. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 21749760,
        "reposts": 10540390,
        "replies": 1550880,
        "media": {
          "kind": "document",
          "title": "Vid\u00e9o flout\u00e9e",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "sahel-charnier-desert_04.png",
          "trace": "fr"
        },
        "id": "sahel-charnier-desert-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 160600,
        "reposts": 100100,
        "replies": 30700,
        "media": {
          "kind": "chart",
          "title": "Archive convoi",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "sahel-charnier-desert_05.png",
          "trace": "ru"
        },
        "id": "sahel-charnier-desert-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2410,
        "reposts": 1180,
        "replies": 190,
        "media": {
          "kind": "osint",
          "title": "Cercle g\u00e9oloc",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "sahel-charnier-desert_06.png",
          "trace": "unknown"
        },
        "id": "sahel-charnier-desert-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_10",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi r\u00e9\u00e9crire le pass\u00e9 op\u00e9rationnel fran\u00e7ais et installer une accusation durable. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 24166400,
        "reposts": 11572820,
        "replies": 1550880,
        "media": {
          "kind": "photo",
          "title": "Carnet GPS",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-charnier-desert_07.png",
          "trace": "az"
        },
        "id": "sahel-charnier-desert-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : r\u00e9\u00e9crire le pass\u00e9 op\u00e9rationnel fran\u00e7ais et installer une accusation durable. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2690,
        "reposts": 1370,
        "replies": 220,
        "media": {
          "kind": "screenshot",
          "title": "Rassemblement local",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "sahel-charnier-desert_08.png",
          "trace": "fr"
        },
        "id": "sahel-charnier-desert-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #ArchiveOuPreuve",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 38625280,
        "reposts": 17455270,
        "replies": 2060640,
        "media": {
          "kind": "comparison",
          "title": "Relief compar\u00e9",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "sahel-charnier-desert_09.png",
          "trace": "ru"
        },
        "id": "sahel-charnier-desert-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3200,
        "reposts": 1770,
        "replies": 270,
        "id": "sahel-charnier-desert-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "sahel-puits-empoisonnes",
    "title": "Sahel : la France aurait empoisonn\u00e9 des puits",
    "briefing": "Simulation p\u00e9dagogique : des militaires fran\u00e7ais auraient rendu des puits inutilisables pour punir des villages. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : pr\u00e9senter l'arm\u00e9e fran\u00e7aise comme une force de punition collective.",
    "timeWindow": "09:00-15:30",
    "location": "Villages ruraux fictifs autour de points d'eau",
    "volume": 390,
    "seed": 343143087,
    "trends": [
      {
        "tag": "#PuitsEmpoisonnes",
        "count": "34,2 k"
      },
      {
        "tag": "#EauDuSahel",
        "count": "31,3 k"
      },
      {
        "tag": "#PunitionCollective",
        "count": "28,4 k"
      },
      {
        "tag": "#VillagesAbandonnes",
        "count": "25,5 k"
      },
      {
        "tag": "#Prelevements",
        "count": "22,6 k"
      }
    ],
    "clues": [
      "Narratif central : des militaires fran\u00e7ais auraient rendu des puits inutilisables pour punir des villages.",
      "Acteurs plausibles : groupes jihadistes, r\u00e9seaux anti-fran\u00e7ais et autorit\u00e9 locale hostile.",
      "Publics vis\u00e9s : populations rurales, \u00e9leveurs, communaut\u00e9s nomades et ONG humanitaires.",
      "D\u00e9clencheur fictif : photos de puits, flacons de test et t\u00e9moignages \u00e9motionnels non dat\u00e9s.",
      "Point de vigilance : v\u00e9rifier analyses d'eau, cha\u00eene de pr\u00e9l\u00e8vement, sources m\u00e9dicales et acc\u00e8s au terrain.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Op\u00e9rations",
        "handle": "@canal_officiel_sahel",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_sahel.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Sahel",
        "handle": "@temoin_sahel_puits_empois",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_sahel_puits_empois.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_11",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_11.jpg"
      },
      {
        "name": "Alerte Sahel",
        "handle": "@alerte_sahel_puits_empois",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_sahel_puits_empois.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_11",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_11.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_11",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_11.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que des militaires fran\u00e7ais auraient rendu des puits inutilisables pour punir des villages. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : v\u00e9rifier analyses d'eau, cha\u00eene de pr\u00e9l\u00e8vement, sources m\u00e9dicales et acc\u00e8s au terrain. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur photos de puits, flacons de test et t\u00e9moignages \u00e9motionnels non dat\u00e9s. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais pr\u00e9senter l'arm\u00e9e fran\u00e7aise comme une force de punition collective ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : des militaires fran\u00e7ais auraient rendu des puits inutilisables pour punir des villages. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : L'eau, le b\u00e9tail et les enfants malades seraient les preuves d'une punition collective. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : des militaires fran\u00e7ais auraient rendu des puits inutilisables pour punir des villages. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : pr\u00e9senter l'arm\u00e9e fran\u00e7aise comme une force de punition collective. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Puits rural",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-puits-empoisonnes_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Flacon test",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "sahel-puits-empoisonnes_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "B\u00e9tail au loin",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "sahel-puits-empoisonnes_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Clinique locale",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "sahel-puits-empoisonnes_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Carte des puits",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "sahel-puits-empoisonnes_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Avis flout\u00e9",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "sahel-puits-empoisonnes_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Convoi lointain",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-puits-empoisonnes_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Bidons d'eau",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "sahel-puits-empoisonnes_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Table labo",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "sahel-puits-empoisonnes_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "sahel-puits-empoisonnes_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "sahel-puits-empoisonnes_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "sahel-puits-empoisonnes_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "sahel-puits-empoisonnes_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_sahel",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que des militaires fran\u00e7ais auraient rendu des puits inutilisables pour punir des villages.",
        "suspect": false,
        "likes": 1057,
        "reposts": 284,
        "replies": 83,
        "id": "sahel-puits-empoisonnes-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_sahel_puits_empois",
        "content": "EXCLUSIF : des militaires fran\u00e7ais auraient rendu des puits inutilisables pour punir des villages. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #PuitsEmpoisonnes",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 27648000,
        "reposts": 13301540,
        "replies": 1598400,
        "media": {
          "kind": "photo",
          "title": "Puits rural",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-puits-empoisonnes_01.png",
          "trace": "ru"
        },
        "id": "sahel-puits-empoisonnes-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. v\u00e9rifier analyses d'eau, cha\u00eene de pr\u00e9l\u00e8vement, sources m\u00e9dicales et acc\u00e8s au terrain",
        "suspect": false,
        "likes": 1932,
        "reposts": 856,
        "replies": 131,
        "media": {
          "kind": "map",
          "title": "Flacon test",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "sahel-puits-empoisonnes_02.png",
          "trace": "az"
        },
        "id": "sahel-puits-empoisonnes-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_sahel_puits_empois",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #EauDuSahel",
        "suspect": false,
        "likes": 859,
        "reposts": 335,
        "replies": 107,
        "media": {
          "kind": "video",
          "title": "B\u00e9tail au loin",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "sahel-puits-empoisonnes_03.png",
          "trace": "unknown"
        },
        "id": "sahel-puits-empoisonnes-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_11",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que des militaires fran\u00e7ais auraient rendu des puits inutilisables pour punir des villages. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 21999616,
        "reposts": 10658039,
        "replies": 1598400,
        "media": {
          "kind": "document",
          "title": "Clinique locale",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "sahel-puits-empoisonnes_04.png",
          "trace": "fr"
        },
        "id": "sahel-puits-empoisonnes-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 162000,
        "reposts": 101000,
        "replies": 31000,
        "media": {
          "kind": "chart",
          "title": "Carte des puits",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "sahel-puits-empoisonnes_05.png",
          "trace": "ru"
        },
        "id": "sahel-puits-empoisonnes-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2421,
        "reposts": 1188,
        "replies": 191,
        "media": {
          "kind": "osint",
          "title": "Avis flout\u00e9",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "sahel-puits-empoisonnes_06.png",
          "trace": "unknown"
        },
        "id": "sahel-puits-empoisonnes-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_11",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi pr\u00e9senter l'arm\u00e9e fran\u00e7aise comme une force de punition collective. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 24453120,
        "reposts": 11697672,
        "replies": 1598400,
        "media": {
          "kind": "photo",
          "title": "Convoi lointain",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-puits-empoisonnes_07.png",
          "trace": "az"
        },
        "id": "sahel-puits-empoisonnes-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : pr\u00e9senter l'arm\u00e9e fran\u00e7aise comme une force de punition collective. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2699,
        "reposts": 1377,
        "replies": 221,
        "media": {
          "kind": "screenshot",
          "title": "Bidons d'eau",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "sahel-puits-empoisonnes_08.png",
          "trace": "fr"
        },
        "id": "sahel-puits-empoisonnes-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #PunitionCollective",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 38924288,
        "reposts": 17568117,
        "replies": 2072304,
        "media": {
          "kind": "comparison",
          "title": "Table labo",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "sahel-puits-empoisonnes_09.png",
          "trace": "ru"
        },
        "id": "sahel-puits-empoisonnes-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3210,
        "reposts": 1777,
        "replies": 271,
        "id": "sahel-puits-empoisonnes-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "sahel-drones-bergers",
    "title": "Sahel : des drones fran\u00e7ais auraient cibl\u00e9 des bergers",
    "briefing": "Simulation p\u00e9dagogique : une frappe de drone fran\u00e7aise aurait touch\u00e9 des bergers confondus avec des combattants. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : attaquer l'image de pr\u00e9cision technologique des arm\u00e9es fran\u00e7aises.",
    "timeWindow": "09:00-15:30",
    "location": "Pistes pastorales fictives du Sahel",
    "volume": 425,
    "seed": 256541959,
    "trends": [
      {
        "tag": "#DronesAuSahel",
        "count": "34,3 k"
      },
      {
        "tag": "#BergersVises",
        "count": "31,4 k"
      },
      {
        "tag": "#ErreurDeCible",
        "count": "28,5 k"
      },
      {
        "tag": "#VideoPoussiere",
        "count": "25,6 k"
      },
      {
        "tag": "#OSINTDrone",
        "count": "22,7 k"
      }
    ],
    "clues": [
      "Narratif central : une frappe de drone fran\u00e7aise aurait touch\u00e9 des bergers confondus avec des combattants.",
      "Acteurs plausibles : groupe arm\u00e9 local, relais militants et m\u00e9dia \u00e9tranger anti-occidental.",
      "Publics vis\u00e9s : communaut\u00e9s rurales, jeunes africains connect\u00e9s, ONG et journalistes d\u00e9fense.",
      "D\u00e9clencheur fictif : vid\u00e9o de poussi\u00e8re, carte de p\u00e2turage et t\u00e9moignages repris sans v\u00e9rification.",
      "Point de vigilance : croiser trajectoires, images a\u00e9riennes, t\u00e9moins, heure solaire, relief et source de la vid\u00e9o.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Op\u00e9rations",
        "handle": "@canal_officiel_sahel",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_sahel.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Sahel",
        "handle": "@temoin_sahel_drones_berge",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_sahel_drones_berge.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_12",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_12.jpg"
      },
      {
        "name": "Alerte Sahel",
        "handle": "@alerte_sahel_drones_berge",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_sahel_drones_berge.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_12",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_12.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_12",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_12.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que une frappe de drone fran\u00e7aise aurait touch\u00e9 des bergers confondus avec des combattants. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : croiser trajectoires, images a\u00e9riennes, t\u00e9moins, heure solaire, relief et source de la vid\u00e9o. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur vid\u00e9o de poussi\u00e8re, carte de p\u00e2turage et t\u00e9moignages repris sans v\u00e9rification. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais attaquer l'image de pr\u00e9cision technologique des arm\u00e9es fran\u00e7aises ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : une frappe de drone fran\u00e7aise aurait touch\u00e9 des bergers confondus avec des combattants. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Leurs capteurs modernes ne les emp\u00eacheraient pas de tuer des innocents. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : une frappe de drone fran\u00e7aise aurait touch\u00e9 des bergers confondus avec des combattants. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : attaquer l'image de pr\u00e9cision technologique des arm\u00e9es fran\u00e7aises. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Bergers au loin",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-drones-bergers_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Drone dans le ciel",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "sahel-drones-bergers_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Piste a\u00e9rienne",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "sahel-drones-bergers_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Nuage de poussi\u00e8re",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "sahel-drones-bergers_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Routes de p\u00e2turage",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "sahel-drones-bergers_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Analyse d'ombres",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "sahel-drones-bergers_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "V\u00e9hicule ab\u00eem\u00e9",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-drones-bergers_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "\u00c9coute radio",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "sahel-drones-bergers_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Chronologie flout\u00e9e",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "sahel-drones-bergers_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "sahel-drones-bergers_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "sahel-drones-bergers_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "sahel-drones-bergers_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "sahel-drones-bergers_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_sahel",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que une frappe de drone fran\u00e7aise aurait touch\u00e9 des bergers confondus avec des combattants.",
        "suspect": false,
        "likes": 1064,
        "reposts": 288,
        "replies": 84,
        "id": "sahel-drones-bergers-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_sahel_drones_berge",
        "content": "EXCLUSIF : une frappe de drone fran\u00e7aise aurait touch\u00e9 des bergers confondus avec des combattants. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #DronesAuSahel",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 27852800,
        "reposts": 13397580,
        "replies": 1645920,
        "media": {
          "kind": "photo",
          "title": "Bergers au loin",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-drones-bergers_01.png",
          "trace": "ru"
        },
        "id": "sahel-drones-bergers-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. croiser trajectoires, images a\u00e9riennes, t\u00e9moins, heure solaire, relief et source de la vid\u00e9o",
        "suspect": false,
        "likes": 1944,
        "reposts": 862,
        "replies": 132,
        "media": {
          "kind": "map",
          "title": "Drone dans le ciel",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "sahel-drones-bergers_02.png",
          "trace": "az"
        },
        "id": "sahel-drones-bergers-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_sahel_drones_berge",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #BergersVises",
        "suspect": false,
        "likes": 868,
        "reposts": 340,
        "replies": 108,
        "media": {
          "kind": "video",
          "title": "Piste a\u00e9rienne",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "sahel-drones-bergers_03.png",
          "trace": "unknown"
        },
        "id": "sahel-drones-bergers-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_12",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que une frappe de drone fran\u00e7aise aurait touch\u00e9 des bergers confondus avec des combattants. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 22249472,
        "reposts": 10775688,
        "replies": 1645920,
        "media": {
          "kind": "document",
          "title": "Nuage de poussi\u00e8re",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "sahel-drones-bergers_04.png",
          "trace": "fr"
        },
        "id": "sahel-drones-bergers-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 163400,
        "reposts": 101900,
        "replies": 31300,
        "media": {
          "kind": "chart",
          "title": "Routes de p\u00e2turage",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "sahel-drones-bergers_05.png",
          "trace": "ru"
        },
        "id": "sahel-drones-bergers-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2432,
        "reposts": 1196,
        "replies": 192,
        "media": {
          "kind": "osint",
          "title": "Analyse d'ombres",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "sahel-drones-bergers_06.png",
          "trace": "unknown"
        },
        "id": "sahel-drones-bergers-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_12",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi attaquer l'image de pr\u00e9cision technologique des arm\u00e9es fran\u00e7aises. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 24739840,
        "reposts": 11822524,
        "replies": 1645920,
        "media": {
          "kind": "photo",
          "title": "V\u00e9hicule ab\u00eem\u00e9",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-drones-bergers_07.png",
          "trace": "az"
        },
        "id": "sahel-drones-bergers-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : attaquer l'image de pr\u00e9cision technologique des arm\u00e9es fran\u00e7aises. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2708,
        "reposts": 1384,
        "replies": 222,
        "media": {
          "kind": "screenshot",
          "title": "\u00c9coute radio",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "sahel-drones-bergers_08.png",
          "trace": "fr"
        },
        "id": "sahel-drones-bergers-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #ErreurDeCible",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 39223296,
        "reposts": 17680964,
        "replies": 2083968,
        "media": {
          "kind": "comparison",
          "title": "Chronologie flout\u00e9e",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "sahel-drones-bergers_09.png",
          "trace": "ru"
        },
        "id": "sahel-drones-bergers-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3220,
        "reposts": 1784,
        "replies": 272,
        "id": "sahel-drones-bergers-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "sahel-auxiliaires-abandonnes",
    "title": "Sahel : les Fran\u00e7ais auraient abandonn\u00e9 leurs auxiliaires locaux",
    "briefing": "Simulation p\u00e9dagogique : des interpr\u00e8tes, guides ou partenaires locaux auraient \u00e9t\u00e9 laiss\u00e9s sans protection. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : d\u00e9truire l'image de loyaut\u00e9 et d\u00e9courager toute coop\u00e9ration future.",
    "timeWindow": "09:00-15:30",
    "location": "Capitale r\u00e9gionale fictive et routes d'\u00e9vacuation",
    "volume": 460,
    "seed": 488356180,
    "trends": [
      {
        "tag": "#AuxiliairesAbandonnes",
        "count": "34,4 k"
      },
      {
        "tag": "#PromessesBrisees",
        "count": "31,5 k"
      },
      {
        "tag": "#Evacuation",
        "count": "28,6 k"
      },
      {
        "tag": "#Interpretes",
        "count": "25,7 k"
      },
      {
        "tag": "#Loyaute",
        "count": "22,8 k"
      }
    ],
    "clues": [
      "Narratif central : des interpr\u00e8tes, guides ou partenaires locaux auraient \u00e9t\u00e9 laiss\u00e9s sans protection.",
      "Acteurs plausibles : r\u00e9seaux politiques locaux, groupes arm\u00e9s et activistes sinc\u00e8res amplifi\u00e9s par des acteurs hostiles.",
      "Publics vis\u00e9s : anciens partenaires locaux, familles, militaires fran\u00e7ais et opinion publique fran\u00e7aise.",
      "D\u00e9clencheur fictif : listes de noms flout\u00e9es, messages d'urgence et photos de grilles ferm\u00e9es.",
      "Point de vigilance : distinguer cas individuels r\u00e9els, documents manipul\u00e9s, d\u00e9lais administratifs et rumeurs coordonn\u00e9es.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Op\u00e9rations",
        "handle": "@canal_officiel_sahel",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_sahel.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Sahel",
        "handle": "@temoin_sahel_auxiliaires_",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_sahel_auxiliaires.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_13",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_13.jpg"
      },
      {
        "name": "Alerte Sahel",
        "handle": "@alerte_sahel_auxiliaires_",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_sahel_auxiliaires.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_13",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_13.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_13",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_13.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que des interpr\u00e8tes, guides ou partenaires locaux auraient \u00e9t\u00e9 laiss\u00e9s sans protection. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : distinguer cas individuels r\u00e9els, documents manipul\u00e9s, d\u00e9lais administratifs et rumeurs coordonn\u00e9es. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur listes de noms flout\u00e9es, messages d'urgence et photos de grilles ferm\u00e9es. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais d\u00e9truire l'image de loyaut\u00e9 et d\u00e9courager toute coop\u00e9ration future ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : des interpr\u00e8tes, guides ou partenaires locaux auraient \u00e9t\u00e9 laiss\u00e9s sans protection. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Travailler avec la France, ce serait \u00eatre utilis\u00e9 puis abandonn\u00e9. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : des interpr\u00e8tes, guides ou partenaires locaux auraient \u00e9t\u00e9 laiss\u00e9s sans protection. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : d\u00e9truire l'image de loyaut\u00e9 et d\u00e9courager toute coop\u00e9ration future. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Badges anonymes",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-auxiliaires-abandonnes_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Salle d'attente",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "sahel-auxiliaires-abandonnes_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Grille ferm\u00e9e",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "sahel-auxiliaires-abandonnes_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Liste flout\u00e9e",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "sahel-auxiliaires-abandonnes_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Famille de dos",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "sahel-auxiliaires-abandonnes_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Ancien convoi",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "sahel-auxiliaires-abandonnes_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Messages urgents",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-auxiliaires-abandonnes_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Route capitale",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "sahel-auxiliaires-abandonnes_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Carnet enqu\u00eate",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "sahel-auxiliaires-abandonnes_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "sahel-auxiliaires-abandonnes_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "sahel-auxiliaires-abandonnes_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "sahel-auxiliaires-abandonnes_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "sahel-auxiliaires-abandonnes_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_sahel",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que des interpr\u00e8tes, guides ou partenaires locaux auraient \u00e9t\u00e9 laiss\u00e9s sans protection.",
        "suspect": false,
        "likes": 1071,
        "reposts": 292,
        "replies": 85,
        "id": "sahel-auxiliaires-abandonnes-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_sahel_auxiliaires_",
        "content": "EXCLUSIF : des interpr\u00e8tes, guides ou partenaires locaux auraient \u00e9t\u00e9 laiss\u00e9s sans protection. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #AuxiliairesAbandonnes",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 28057600,
        "reposts": 13493620,
        "replies": 1693440,
        "media": {
          "kind": "photo",
          "title": "Badges anonymes",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-auxiliaires-abandonnes_01.png",
          "trace": "ru"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. distinguer cas individuels r\u00e9els, documents manipul\u00e9s, d\u00e9lais administratifs et rumeurs coordonn\u00e9es",
        "suspect": false,
        "likes": 1956,
        "reposts": 868,
        "replies": 133,
        "media": {
          "kind": "map",
          "title": "Salle d'attente",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "sahel-auxiliaires-abandonnes_02.png",
          "trace": "az"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_sahel_auxiliaires_",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #PromessesBrisees",
        "suspect": false,
        "likes": 877,
        "reposts": 345,
        "replies": 109,
        "media": {
          "kind": "video",
          "title": "Grille ferm\u00e9e",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "sahel-auxiliaires-abandonnes_03.png",
          "trace": "unknown"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_13",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que des interpr\u00e8tes, guides ou partenaires locaux auraient \u00e9t\u00e9 laiss\u00e9s sans protection. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 22499328,
        "reposts": 10893337,
        "replies": 1693440,
        "media": {
          "kind": "document",
          "title": "Liste flout\u00e9e",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "sahel-auxiliaires-abandonnes_04.png",
          "trace": "fr"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 164800,
        "reposts": 102800,
        "replies": 31600,
        "media": {
          "kind": "chart",
          "title": "Famille de dos",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "sahel-auxiliaires-abandonnes_05.png",
          "trace": "ru"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2443,
        "reposts": 1204,
        "replies": 193,
        "media": {
          "kind": "osint",
          "title": "Ancien convoi",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "sahel-auxiliaires-abandonnes_06.png",
          "trace": "unknown"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_13",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi d\u00e9truire l'image de loyaut\u00e9 et d\u00e9courager toute coop\u00e9ration future. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 25026560,
        "reposts": 11947376,
        "replies": 1693440,
        "media": {
          "kind": "photo",
          "title": "Messages urgents",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-auxiliaires-abandonnes_07.png",
          "trace": "az"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : d\u00e9truire l'image de loyaut\u00e9 et d\u00e9courager toute coop\u00e9ration future. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2717,
        "reposts": 1391,
        "replies": 223,
        "media": {
          "kind": "screenshot",
          "title": "Route capitale",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "sahel-auxiliaires-abandonnes_08.png",
          "trace": "fr"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #Evacuation",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 39522304,
        "reposts": 17793811,
        "replies": 2095632,
        "media": {
          "kind": "comparison",
          "title": "Carnet enqu\u00eate",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "sahel-auxiliaires-abandonnes_09.png",
          "trace": "ru"
        },
        "id": "sahel-auxiliaires-abandonnes-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3230,
        "reposts": 1791,
        "replies": 273,
        "id": "sahel-auxiliaires-abandonnes-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "sahel-retour-terroristes",
    "title": "Sahel : la France organiserait le retour de terroristes",
    "briefing": "Simulation p\u00e9dagogique : la France laisserait circuler des groupes arm\u00e9s pour maintenir l'instabilit\u00e9. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : retourner le discours s\u00e9curitaire fran\u00e7ais contre lui-m\u00eame.",
    "timeWindow": "09:00-15:30",
    "location": "Fronti\u00e8re fictive et routes d\u00e9sertiques",
    "volume": 495,
    "seed": 298962257,
    "trends": [
      {
        "tag": "#TerrorismeEntretenu",
        "count": "34,5 k"
      },
      {
        "tag": "#RoutesDuDesert",
        "count": "31,6 k"
      },
      {
        "tag": "#InstabiliteOrganisee",
        "count": "28,7 k"
      },
      {
        "tag": "#FrontiereOuverte",
        "count": "25,8 k"
      },
      {
        "tag": "#SahelInfo",
        "count": "22,0 k"
      }
    ],
    "clues": [
      "Narratif central : la France laisserait circuler des groupes arm\u00e9s pour maintenir l'instabilit\u00e9.",
      "Acteurs plausibles : r\u00e9gime hostile, puissance concurrente et influenceurs anti-fran\u00e7ais.",
      "Publics vis\u00e9s : jeunesse urbaine, opinions africaines, m\u00e9dias panafricains et diaspora.",
      "D\u00e9clencheur fictif : cartes de mouvements, photos de phares nocturnes et messages intercept\u00e9s inv\u00e9rifiables.",
      "Point de vigilance : distinguer corr\u00e9lation, co\u00efncidence, absence de preuve et accusation strat\u00e9gique.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel Op\u00e9rations",
        "handle": "@canal_officiel_sahel",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_sahel.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Sahel",
        "handle": "@temoin_sahel_retour_terro",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_sahel_retour_terro.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_14",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_14.jpg"
      },
      {
        "name": "Alerte Sahel",
        "handle": "@alerte_sahel_retour_terro",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_sahel_retour_terro.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_14",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_14.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_14",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_14.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que la France laisserait circuler des groupes arm\u00e9s pour maintenir l'instabilit\u00e9. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : distinguer corr\u00e9lation, co\u00efncidence, absence de preuve et accusation strat\u00e9gique. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur cartes de mouvements, photos de phares nocturnes et messages intercept\u00e9s inv\u00e9rifiables. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais retourner le discours s\u00e9curitaire fran\u00e7ais contre lui-m\u00eame ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : la France laisserait circuler des groupes arm\u00e9s pour maintenir l'instabilit\u00e9. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Ils ne combattent pas le terrorisme, ils l'entretiendraient. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : la France laisserait circuler des groupes arm\u00e9s pour maintenir l'instabilit\u00e9. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : retourner le discours s\u00e9curitaire fran\u00e7ais contre lui-m\u00eame. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Checkpoint d\u00e9sert",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-retour-terroristes_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Convoi lointain",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "sahel-retour-terroristes_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Fl\u00e8ches de route",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "sahel-retour-terroristes_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Message intercept\u00e9",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "sahel-retour-terroristes_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Traces fronti\u00e8re",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "sahel-retour-terroristes_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Chronologie analyste",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "sahel-retour-terroristes_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Rumeur au march\u00e9",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "sahel-retour-terroristes_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Phares nocturnes",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "sahel-retour-terroristes_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Salle presse vide",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "sahel-retour-terroristes_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "sahel-retour-terroristes_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "sahel-retour-terroristes_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "sahel-retour-terroristes_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "sahel-retour-terroristes_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_sahel",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que la France laisserait circuler des groupes arm\u00e9s pour maintenir l'instabilit\u00e9.",
        "suspect": false,
        "likes": 1078,
        "reposts": 296,
        "replies": 86,
        "id": "sahel-retour-terroristes-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_sahel_retour_terro",
        "content": "EXCLUSIF : la France laisserait circuler des groupes arm\u00e9s pour maintenir l'instabilit\u00e9. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #TerrorismeEntretenu",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 28262400,
        "reposts": 13589660,
        "replies": 1740960,
        "media": {
          "kind": "photo",
          "title": "Checkpoint d\u00e9sert",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-retour-terroristes_01.png",
          "trace": "ru"
        },
        "id": "sahel-retour-terroristes-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. distinguer corr\u00e9lation, co\u00efncidence, absence de preuve et accusation strat\u00e9gique",
        "suspect": false,
        "likes": 1968,
        "reposts": 874,
        "replies": 134,
        "media": {
          "kind": "map",
          "title": "Convoi lointain",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "sahel-retour-terroristes_02.png",
          "trace": "az"
        },
        "id": "sahel-retour-terroristes-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_sahel_retour_terro",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #RoutesDuDesert",
        "suspect": false,
        "likes": 886,
        "reposts": 350,
        "replies": 110,
        "media": {
          "kind": "video",
          "title": "Fl\u00e8ches de route",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "sahel-retour-terroristes_03.png",
          "trace": "unknown"
        },
        "id": "sahel-retour-terroristes-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_14",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que la France laisserait circuler des groupes arm\u00e9s pour maintenir l'instabilit\u00e9. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 22749184,
        "reposts": 11010986,
        "replies": 1740960,
        "media": {
          "kind": "document",
          "title": "Message intercept\u00e9",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "sahel-retour-terroristes_04.png",
          "trace": "fr"
        },
        "id": "sahel-retour-terroristes-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 166200,
        "reposts": 103700,
        "replies": 31900,
        "media": {
          "kind": "chart",
          "title": "Traces fronti\u00e8re",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "sahel-retour-terroristes_05.png",
          "trace": "ru"
        },
        "id": "sahel-retour-terroristes-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2454,
        "reposts": 1212,
        "replies": 194,
        "media": {
          "kind": "osint",
          "title": "Chronologie analyste",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "sahel-retour-terroristes_06.png",
          "trace": "unknown"
        },
        "id": "sahel-retour-terroristes-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_14",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi retourner le discours s\u00e9curitaire fran\u00e7ais contre lui-m\u00eame. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 25313280,
        "reposts": 12072228,
        "replies": 1740960,
        "media": {
          "kind": "photo",
          "title": "Rumeur au march\u00e9",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "sahel-retour-terroristes_07.png",
          "trace": "az"
        },
        "id": "sahel-retour-terroristes-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : retourner le discours s\u00e9curitaire fran\u00e7ais contre lui-m\u00eame. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2726,
        "reposts": 1398,
        "replies": 224,
        "media": {
          "kind": "screenshot",
          "title": "Phares nocturnes",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "sahel-retour-terroristes_08.png",
          "trace": "fr"
        },
        "id": "sahel-retour-terroristes-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #InstabiliteOrganisee",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 39821312,
        "reposts": 17906658,
        "replies": 2107296,
        "media": {
          "kind": "comparison",
          "title": "Salle presse vide",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "sahel-retour-terroristes_09.png",
          "trace": "ru"
        },
        "id": "sahel-retour-terroristes-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3240,
        "reposts": 1798,
        "replies": 274,
        "id": "sahel-retour-terroristes-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "recrutement-soldats-sacrifies",
    "title": "Recrutement : les soldats fran\u00e7ais seraient sacrifi\u00e9s pour des causes perdues",
    "briefing": "Simulation p\u00e9dagogique : des militaires seraient envoy\u00e9s dans des missions inutiles, mal \u00e9quip\u00e9s et politiquement floues. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : atteindre le moral, le recrutement et la confiance dans la hi\u00e9rarchie.",
    "timeWindow": "09:00-15:30",
    "location": "Communaut\u00e9s militaires et familles fictives",
    "volume": 530,
    "seed": 2856402724,
    "trends": [
      {
        "tag": "#SoldatsSacrifies",
        "count": "34,6 k"
      },
      {
        "tag": "#FamillesMilitaires",
        "count": "31,7 k"
      },
      {
        "tag": "#Recrutement",
        "count": "28,8 k"
      },
      {
        "tag": "#RetourMission",
        "count": "25,0 k"
      },
      {
        "tag": "#CausesPerdues",
        "count": "22,1 k"
      }
    ],
    "clues": [
      "Narratif central : des militaires seraient envoy\u00e9s dans des missions inutiles, mal \u00e9quip\u00e9s et politiquement floues.",
      "Acteurs plausibles : acteur \u00e9tranger hostile, r\u00e9seau antimilitariste radical et comptes ciblant les familles.",
      "Publics vis\u00e9s : jeunes susceptibles de s'engager, familles de militaires, anciens et r\u00e9servistes.",
      "D\u00e9clencheur fictif : t\u00e9moignages anonymes, photos de mat\u00e9riel et r\u00e9cits \u00e9motionnels de familles.",
      "Point de vigilance : s\u00e9parer souffrance r\u00e9elle, cas individuels, chiffres non sourc\u00e9s et strat\u00e9gie de d\u00e9couragement.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel D\u00e9fense",
        "handle": "@canal_officiel_recrutement",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_recrutement.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Recrutement",
        "handle": "@temoin_recrutement_soldat",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_recrutement_soldat.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_15",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_15.jpg"
      },
      {
        "name": "Alerte Recrutement",
        "handle": "@alerte_recrutement_soldat",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_recrutement_soldat.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_15",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_15.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_15",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_15.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que des militaires seraient envoy\u00e9s dans des missions inutiles, mal \u00e9quip\u00e9s et politiquement floues. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : s\u00e9parer souffrance r\u00e9elle, cas individuels, chiffres non sourc\u00e9s et strat\u00e9gie de d\u00e9couragement. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur t\u00e9moignages anonymes, photos de mat\u00e9riel et r\u00e9cits \u00e9motionnels de familles. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais atteindre le moral, le recrutement et la confiance dans la hi\u00e9rarchie ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : des militaires seraient envoy\u00e9s dans des missions inutiles, mal \u00e9quip\u00e9s et politiquement floues. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : On vous appelle h\u00e9ros quand vous partez, on vous oublie quand vous revenez. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : des militaires seraient envoy\u00e9s dans des missions inutiles, mal \u00e9quip\u00e9s et politiquement floues. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : atteindre le moral, le recrutement et la confiance dans la hi\u00e9rarchie. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Couloir caserne",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "recrutement-soldats-sacrifies_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Sac pr\u00e9par\u00e9",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "recrutement-soldats-sacrifies_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Famille en gare",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "recrutement-soldats-sacrifies_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Mur recrutement",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "recrutement-soldats-sacrifies_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Chaises c\u00e9r\u00e9monie",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "recrutement-soldats-sacrifies_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Silhouette aube",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "recrutement-soldats-sacrifies_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "T\u00e9moignage flout\u00e9",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "recrutement-soldats-sacrifies_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Caisse mat\u00e9riel",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "recrutement-soldats-sacrifies_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Porte soutien",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "recrutement-soldats-sacrifies_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "recrutement-soldats-sacrifies_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "recrutement-soldats-sacrifies_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "recrutement-soldats-sacrifies_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "recrutement-soldats-sacrifies_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_recrutement",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que des militaires seraient envoy\u00e9s dans des missions inutiles, mal \u00e9quip\u00e9s et politiquement floues.",
        "suspect": false,
        "likes": 1085,
        "reposts": 300,
        "replies": 87,
        "id": "recrutement-soldats-sacrifies-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_recrutement_soldat",
        "content": "EXCLUSIF : des militaires seraient envoy\u00e9s dans des missions inutiles, mal \u00e9quip\u00e9s et politiquement floues. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #SoldatsSacrifies",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 28467200,
        "reposts": 13685700,
        "replies": 1788480,
        "media": {
          "kind": "photo",
          "title": "Couloir caserne",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "recrutement-soldats-sacrifies_01.png",
          "trace": "ru"
        },
        "id": "recrutement-soldats-sacrifies-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. s\u00e9parer souffrance r\u00e9elle, cas individuels, chiffres non sourc\u00e9s et strat\u00e9gie de d\u00e9couragement",
        "suspect": false,
        "likes": 1980,
        "reposts": 880,
        "replies": 135,
        "media": {
          "kind": "map",
          "title": "Sac pr\u00e9par\u00e9",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "recrutement-soldats-sacrifies_02.png",
          "trace": "az"
        },
        "id": "recrutement-soldats-sacrifies-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_recrutement_soldat",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #FamillesMilitaires",
        "suspect": false,
        "likes": 895,
        "reposts": 355,
        "replies": 111,
        "media": {
          "kind": "video",
          "title": "Famille en gare",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "recrutement-soldats-sacrifies_03.png",
          "trace": "unknown"
        },
        "id": "recrutement-soldats-sacrifies-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_15",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que des militaires seraient envoy\u00e9s dans des missions inutiles, mal \u00e9quip\u00e9s et politiquement floues. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 22999040,
        "reposts": 11128635,
        "replies": 1788480,
        "media": {
          "kind": "document",
          "title": "Mur recrutement",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "recrutement-soldats-sacrifies_04.png",
          "trace": "fr"
        },
        "id": "recrutement-soldats-sacrifies-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 167600,
        "reposts": 104600,
        "replies": 32200,
        "media": {
          "kind": "chart",
          "title": "Chaises c\u00e9r\u00e9monie",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "recrutement-soldats-sacrifies_05.png",
          "trace": "ru"
        },
        "id": "recrutement-soldats-sacrifies-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2465,
        "reposts": 1220,
        "replies": 195,
        "media": {
          "kind": "osint",
          "title": "Silhouette aube",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "recrutement-soldats-sacrifies_06.png",
          "trace": "unknown"
        },
        "id": "recrutement-soldats-sacrifies-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_15",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi atteindre le moral, le recrutement et la confiance dans la hi\u00e9rarchie. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 25600000,
        "reposts": 12197080,
        "replies": 1788480,
        "media": {
          "kind": "photo",
          "title": "T\u00e9moignage flout\u00e9",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "recrutement-soldats-sacrifies_07.png",
          "trace": "az"
        },
        "id": "recrutement-soldats-sacrifies-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : atteindre le moral, le recrutement et la confiance dans la hi\u00e9rarchie. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2735,
        "reposts": 1405,
        "replies": 225,
        "media": {
          "kind": "screenshot",
          "title": "Caisse mat\u00e9riel",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "recrutement-soldats-sacrifies_08.png",
          "trace": "fr"
        },
        "id": "recrutement-soldats-sacrifies-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #Recrutement",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 40120320,
        "reposts": 18019505,
        "replies": 2118960,
        "media": {
          "kind": "comparison",
          "title": "Porte soutien",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "recrutement-soldats-sacrifies_09.png",
          "trace": "ru"
        },
        "id": "recrutement-soldats-sacrifies-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3250,
        "reposts": 1805,
        "replies": 275,
        "id": "recrutement-soldats-sacrifies-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "industrie-armes-civils",
    "title": "Industrie de d\u00e9fense : les armes fran\u00e7aises tueraient des civils partout",
    "briefing": "Simulation p\u00e9dagogique : la France serait complice syst\u00e9matique de crimes de guerre via ses exportations d'armement. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : fragiliser la BITD fran\u00e7aise, peser sur les contrats et diviser l'opinion.",
    "timeWindow": "09:00-15:30",
    "location": "Cha\u00eene industrielle et conflits \u00e9trangers fictifs",
    "volume": 390,
    "seed": 1107423687,
    "trends": [
      {
        "tag": "#MadeInFrance",
        "count": "34,7 k"
      },
      {
        "tag": "#ArmesEtCivils",
        "count": "31,8 k"
      },
      {
        "tag": "#ExportDefense",
        "count": "28,0 k"
      },
      {
        "tag": "#ContratsSousPression",
        "count": "25,1 k"
      },
      {
        "tag": "#IndustrieEnCause",
        "count": "22,2 k"
      }
    ],
    "clues": [
      "Narratif central : la France serait complice syst\u00e9matique de crimes de guerre via ses exportations d'armement.",
      "Acteurs plausibles : ONG radicalis\u00e9e, concurrent industriel, \u00c9tat rival et r\u00e9seau militant manipul\u00e9.",
      "Publics vis\u00e9s : \u00e9tudiants, \u00e9lus, journalistes \u00e9conomiques et salari\u00e9s de l'industrie de d\u00e9fense.",
      "D\u00e9clencheur fictif : m\u00e9lange de vrais d\u00e9bats, images de conflits \u00e9trangers et accusations non v\u00e9rifi\u00e9es.",
      "Point de vigilance : identifier armes, dates, utilisateurs finaux, licences, sources et contexte juridique.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel D\u00e9fense",
        "handle": "@canal_officiel_industrie",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_industrie.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Industrie",
        "handle": "@temoin_industrie_armes_ci",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_industrie_armes_ci.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_16",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_16.jpg"
      },
      {
        "name": "Alerte Industrie",
        "handle": "@alerte_industrie_armes_ci",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_industrie_armes_ci.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_16",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_16.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_16",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_16.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que la France serait complice syst\u00e9matique de crimes de guerre via ses exportations d'armement. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : identifier armes, dates, utilisateurs finaux, licences, sources et contexte juridique. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur m\u00e9lange de vrais d\u00e9bats, images de conflits \u00e9trangers et accusations non v\u00e9rifi\u00e9es. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais fragiliser la BITD fran\u00e7aise, peser sur les contrats et diviser l'opinion ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : la France serait complice syst\u00e9matique de crimes de guerre via ses exportations d'armement. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Made in France, used against civilians. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : la France serait complice syst\u00e9matique de crimes de guerre via ses exportations d'armement. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : fragiliser la BITD fran\u00e7aise, peser sur les contrats et diviser l'opinion. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Cha\u00eene industrielle",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "industrie-armes-civils_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Port conteneurs",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "industrie-armes-civils_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Certificat flout\u00e9",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "industrie-armes-civils_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Rue d\u00e9truite vide",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "industrie-armes-civils_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Salon d\u00e9fense",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "industrie-armes-civils_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Carte exports",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "industrie-armes-civils_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Num\u00e9ro s\u00e9rie",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "industrie-armes-civils_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Pancartes vierges",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "industrie-armes-civils_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Bureau enqu\u00eate",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "industrie-armes-civils_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "industrie-armes-civils_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "industrie-armes-civils_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "industrie-armes-civils_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "industrie-armes-civils_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_industrie",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que la France serait complice syst\u00e9matique de crimes de guerre via ses exportations d'armement.",
        "suspect": false,
        "likes": 1092,
        "reposts": 304,
        "replies": 88,
        "id": "industrie-armes-civils-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_industrie_armes_ci",
        "content": "EXCLUSIF : la France serait complice syst\u00e9matique de crimes de guerre via ses exportations d'armement. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #MadeInFrance",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 28672000,
        "reposts": 13781740,
        "replies": 1836000,
        "media": {
          "kind": "photo",
          "title": "Cha\u00eene industrielle",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "industrie-armes-civils_01.png",
          "trace": "ru"
        },
        "id": "industrie-armes-civils-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. identifier armes, dates, utilisateurs finaux, licences, sources et contexte juridique",
        "suspect": false,
        "likes": 1992,
        "reposts": 886,
        "replies": 136,
        "media": {
          "kind": "map",
          "title": "Port conteneurs",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "industrie-armes-civils_02.png",
          "trace": "az"
        },
        "id": "industrie-armes-civils-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_industrie_armes_ci",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #ArmesEtCivils",
        "suspect": false,
        "likes": 904,
        "reposts": 360,
        "replies": 112,
        "media": {
          "kind": "video",
          "title": "Certificat flout\u00e9",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "industrie-armes-civils_03.png",
          "trace": "unknown"
        },
        "id": "industrie-armes-civils-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_16",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que la France serait complice syst\u00e9matique de crimes de guerre via ses exportations d'armement. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 23248896,
        "reposts": 11246284,
        "replies": 1836000,
        "media": {
          "kind": "document",
          "title": "Rue d\u00e9truite vide",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "industrie-armes-civils_04.png",
          "trace": "fr"
        },
        "id": "industrie-armes-civils-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 169000,
        "reposts": 105500,
        "replies": 32500,
        "media": {
          "kind": "chart",
          "title": "Salon d\u00e9fense",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "industrie-armes-civils_05.png",
          "trace": "ru"
        },
        "id": "industrie-armes-civils-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2476,
        "reposts": 1228,
        "replies": 196,
        "media": {
          "kind": "osint",
          "title": "Carte exports",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "industrie-armes-civils_06.png",
          "trace": "unknown"
        },
        "id": "industrie-armes-civils-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_16",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi fragiliser la BITD fran\u00e7aise, peser sur les contrats et diviser l'opinion. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 25886720,
        "reposts": 12321932,
        "replies": 1836000,
        "media": {
          "kind": "photo",
          "title": "Num\u00e9ro s\u00e9rie",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "industrie-armes-civils_07.png",
          "trace": "az"
        },
        "id": "industrie-armes-civils-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : fragiliser la BITD fran\u00e7aise, peser sur les contrats et diviser l'opinion. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2744,
        "reposts": 1412,
        "replies": 226,
        "media": {
          "kind": "screenshot",
          "title": "Pancartes vierges",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "industrie-armes-civils_08.png",
          "trace": "fr"
        },
        "id": "industrie-armes-civils-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #ExportDefense",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 40419328,
        "reposts": 18132352,
        "replies": 2130624,
        "media": {
          "kind": "comparison",
          "title": "Bureau enqu\u00eate",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "industrie-armes-civils_09.png",
          "trace": "ru"
        },
        "id": "industrie-armes-civils-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3260,
        "reposts": 1812,
        "replies": 276,
        "id": "industrie-armes-civils-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "outremer-militarisation",
    "title": "Outre-mer : Paris militariserait les territoires contre leurs habitants",
    "briefing": "Simulation p\u00e9dagogique : les forces arm\u00e9es verrouilleraient les territoires pour d\u00e9fendre les int\u00e9r\u00eats de Paris. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : cr\u00e9er une fracture entre arm\u00e9es et populations ultramarines.",
    "timeWindow": "09:00-15:30",
    "location": "Territoire ultramarin fictif et zone maritime associ\u00e9e",
    "volume": 425,
    "seed": 1500350561,
    "trends": [
      {
        "tag": "#OutreMerSousControle",
        "count": "34,8 k"
      },
      {
        "tag": "#ParisMilitarise",
        "count": "31,0 k"
      },
      {
        "tag": "#ZoneMaritime",
        "count": "28,1 k"
      },
      {
        "tag": "#HabitantsOuInterets",
        "count": "25,2 k"
      },
      {
        "tag": "#Souverainete",
        "count": "22,3 k"
      }
    ],
    "clues": [
      "Narratif central : les forces arm\u00e9es verrouilleraient les territoires pour d\u00e9fendre les int\u00e9r\u00eats de Paris.",
      "Acteurs plausibles : r\u00e9seaux s\u00e9paratistes, acteurs \u00e9trangers int\u00e9ress\u00e9s par les zones maritimes et influenceurs anti-\u00c9tat.",
      "Publics vis\u00e9s : jeunesse ultramarine, diasporas, \u00e9lus locaux et associations.",
      "D\u00e9clencheur fictif : images de patrouilles, cartes maritimes et sc\u00e8nes de secours sorties de leur contexte.",
      "Point de vigilance : distinguer souverainet\u00e9, secours, pr\u00e9sence permanente, missions r\u00e9elles et perception locale.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel D\u00e9fense",
        "handle": "@canal_officiel_outremer",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_outremer.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Outremer",
        "handle": "@temoin_outremer_militaris",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_outremer_militaris.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_17",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_17.jpg"
      },
      {
        "name": "Alerte Outremer",
        "handle": "@alerte_outremer_militaris",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_outremer_militaris.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_17",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_17.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_17",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_17.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que les forces arm\u00e9es verrouilleraient les territoires pour d\u00e9fendre les int\u00e9r\u00eats de Paris. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : distinguer souverainet\u00e9, secours, pr\u00e9sence permanente, missions r\u00e9elles et perception locale. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur images de patrouilles, cartes maritimes et sc\u00e8nes de secours sorties de leur contexte. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais cr\u00e9er une fracture entre arm\u00e9es et populations ultramarines ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : les forces arm\u00e9es verrouilleraient les territoires pour d\u00e9fendre les int\u00e9r\u00eats de Paris. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Quand il faut prot\u00e9ger les habitants, personne ; quand il faut prot\u00e9ger Paris, les militaires arrivent. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : les forces arm\u00e9es verrouilleraient les territoires pour d\u00e9fendre les int\u00e9r\u00eats de Paris. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : cr\u00e9er une fracture entre arm\u00e9es et populations ultramarines. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "C\u00f4te tropicale",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "outremer-militarisation_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Entrep\u00f4t secours",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "outremer-militarisation_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "V\u00e9hicule portuaire",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "outremer-militarisation_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "R\u00e9union locale",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "outremer-militarisation_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Carte maritime",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "outremer-militarisation_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Apr\u00e8s cyclone",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "outremer-militarisation_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Station radar",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "outremer-militarisation_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Patrouille village",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "outremer-militarisation_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Port insulaire",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "outremer-militarisation_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "outremer-militarisation_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "outremer-militarisation_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "outremer-militarisation_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "outremer-militarisation_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_outremer",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que les forces arm\u00e9es verrouilleraient les territoires pour d\u00e9fendre les int\u00e9r\u00eats de Paris.",
        "suspect": false,
        "likes": 1099,
        "reposts": 308,
        "replies": 89,
        "id": "outremer-militarisation-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_outremer_militaris",
        "content": "EXCLUSIF : les forces arm\u00e9es verrouilleraient les territoires pour d\u00e9fendre les int\u00e9r\u00eats de Paris. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #OutreMerSousControle",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 28876800,
        "reposts": 13877780,
        "replies": 1883520,
        "media": {
          "kind": "photo",
          "title": "C\u00f4te tropicale",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "outremer-militarisation_01.png",
          "trace": "ru"
        },
        "id": "outremer-militarisation-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. distinguer souverainet\u00e9, secours, pr\u00e9sence permanente, missions r\u00e9elles et perception locale",
        "suspect": false,
        "likes": 2004,
        "reposts": 892,
        "replies": 137,
        "media": {
          "kind": "map",
          "title": "Entrep\u00f4t secours",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "outremer-militarisation_02.png",
          "trace": "az"
        },
        "id": "outremer-militarisation-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_outremer_militaris",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #ParisMilitarise",
        "suspect": false,
        "likes": 913,
        "reposts": 365,
        "replies": 113,
        "media": {
          "kind": "video",
          "title": "V\u00e9hicule portuaire",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "outremer-militarisation_03.png",
          "trace": "unknown"
        },
        "id": "outremer-militarisation-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_17",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que les forces arm\u00e9es verrouilleraient les territoires pour d\u00e9fendre les int\u00e9r\u00eats de Paris. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 23498752,
        "reposts": 11363933,
        "replies": 1883520,
        "media": {
          "kind": "document",
          "title": "R\u00e9union locale",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "outremer-militarisation_04.png",
          "trace": "fr"
        },
        "id": "outremer-militarisation-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 170400,
        "reposts": 106400,
        "replies": 32800,
        "media": {
          "kind": "chart",
          "title": "Carte maritime",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "outremer-militarisation_05.png",
          "trace": "ru"
        },
        "id": "outremer-militarisation-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2487,
        "reposts": 1236,
        "replies": 197,
        "media": {
          "kind": "osint",
          "title": "Apr\u00e8s cyclone",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "outremer-militarisation_06.png",
          "trace": "unknown"
        },
        "id": "outremer-militarisation-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_17",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi cr\u00e9er une fracture entre arm\u00e9es et populations ultramarines. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 26173440,
        "reposts": 12446784,
        "replies": 1883520,
        "media": {
          "kind": "photo",
          "title": "Station radar",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "outremer-militarisation_07.png",
          "trace": "az"
        },
        "id": "outremer-militarisation-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : cr\u00e9er une fracture entre arm\u00e9es et populations ultramarines. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2753,
        "reposts": 1419,
        "replies": 227,
        "media": {
          "kind": "screenshot",
          "title": "Patrouille village",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "outremer-militarisation_08.png",
          "trace": "fr"
        },
        "id": "outremer-militarisation-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #ZoneMaritime",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 40718336,
        "reposts": 18245199,
        "replies": 2142288,
        "media": {
          "kind": "comparison",
          "title": "Port insulaire",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "outremer-militarisation_09.png",
          "trace": "ru"
        },
        "id": "outremer-militarisation-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3270,
        "reposts": 1819,
        "replies": 277,
        "id": "outremer-militarisation-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "nrbc-cobayes",
    "title": "Crise sanitaire : l'arm\u00e9e testerait des proc\u00e9dures NRBC sur la population",
    "briefing": "Simulation p\u00e9dagogique : les militaires testeraient confinement, d\u00e9contamination ou contr\u00f4le sur des civils sans consentement. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : associer d\u00e9fense, sant\u00e9 et exp\u00e9rimentation pour rendre toute communication suspecte.",
    "timeWindow": "09:00-15:30",
    "location": "Exercice NRBC fictif pr\u00e8s d'une base",
    "volume": 460,
    "seed": 2516786485,
    "trends": [
      {
        "tag": "#CobayesNRBC",
        "count": "34,0 k"
      },
      {
        "tag": "#ExerciceOuTest",
        "count": "31,1 k"
      },
      {
        "tag": "#Decontamination",
        "count": "28,2 k"
      },
      {
        "tag": "#CriseSanitaire",
        "count": "25,3 k"
      },
      {
        "tag": "#BaseEtPopulation",
        "count": "22,4 k"
      }
    ],
    "clues": [
      "Narratif central : les militaires testeraient confinement, d\u00e9contamination ou contr\u00f4le sur des civils sans consentement.",
      "Acteurs plausibles : milieux complotistes, r\u00e9seaux anti-vaccins et acteurs \u00e9trangers amplifiant la d\u00e9fiance sanitaire.",
      "Publics vis\u00e9s : parents, soignants, habitants proches d'une base et communaut\u00e9s m\u00e9fiantes.",
      "D\u00e9clencheur fictif : photos de tenues de protection, barri\u00e8res et avis d'exercice recadr\u00e9s.",
      "Point de vigilance : v\u00e9rifier cadre d'exercice, participants, objectifs, arr\u00eat\u00e9s publics et dates des images.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel D\u00e9fense",
        "handle": "@canal_officiel_nrbc",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_nrbc.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Nrbc",
        "handle": "@temoin_nrbc_cobayes",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_nrbc_cobayes.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_18",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_18.jpg"
      },
      {
        "name": "Alerte Nrbc",
        "handle": "@alerte_nrbc_cobayes",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_nrbc_cobayes.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_18",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_18.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_18",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_18.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que les militaires testeraient confinement, d\u00e9contamination ou contr\u00f4le sur des civils sans consentement. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : v\u00e9rifier cadre d'exercice, participants, objectifs, arr\u00eat\u00e9s publics et dates des images. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur photos de tenues de protection, barri\u00e8res et avis d'exercice recadr\u00e9s. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais associer d\u00e9fense, sant\u00e9 et exp\u00e9rimentation pour rendre toute communication suspecte ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : les militaires testeraient confinement, d\u00e9contamination ou contr\u00f4le sur des civils sans consentement. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : Ils appellent \u00e7a un exercice, mais nous serions les cobayes. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : les militaires testeraient confinement, d\u00e9contamination ou contr\u00f4le sur des civils sans consentement. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : associer d\u00e9fense, sant\u00e9 et exp\u00e9rimentation pour rendre toute communication suspecte. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Tente d\u00e9contamination",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "nrbc-cobayes_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Tenues protection",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "nrbc-cobayes_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Zone balis\u00e9e",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "nrbc-cobayes_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Table triage",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "nrbc-cobayes_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Bus exercice",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "nrbc-cobayes_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Avis flout\u00e9",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "nrbc-cobayes_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Masque et gants",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "nrbc-cobayes_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Carte p\u00e9rim\u00e8tre",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "nrbc-cobayes_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Parents observant",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "nrbc-cobayes_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "nrbc-cobayes_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "nrbc-cobayes_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "nrbc-cobayes_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "nrbc-cobayes_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_nrbc",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que les militaires testeraient confinement, d\u00e9contamination ou contr\u00f4le sur des civils sans consentement.",
        "suspect": false,
        "likes": 1106,
        "reposts": 312,
        "replies": 90,
        "id": "nrbc-cobayes-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_nrbc_cobayes",
        "content": "EXCLUSIF : les militaires testeraient confinement, d\u00e9contamination ou contr\u00f4le sur des civils sans consentement. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #CobayesNRBC",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 29081600,
        "reposts": 13973820,
        "replies": 1931040,
        "media": {
          "kind": "photo",
          "title": "Tente d\u00e9contamination",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "nrbc-cobayes_01.png",
          "trace": "ru"
        },
        "id": "nrbc-cobayes-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. v\u00e9rifier cadre d'exercice, participants, objectifs, arr\u00eat\u00e9s publics et dates des images",
        "suspect": false,
        "likes": 2016,
        "reposts": 898,
        "replies": 138,
        "media": {
          "kind": "map",
          "title": "Tenues protection",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "nrbc-cobayes_02.png",
          "trace": "az"
        },
        "id": "nrbc-cobayes-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_nrbc_cobayes",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #ExerciceOuTest",
        "suspect": false,
        "likes": 922,
        "reposts": 370,
        "replies": 114,
        "media": {
          "kind": "video",
          "title": "Zone balis\u00e9e",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "nrbc-cobayes_03.png",
          "trace": "unknown"
        },
        "id": "nrbc-cobayes-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_18",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que les militaires testeraient confinement, d\u00e9contamination ou contr\u00f4le sur des civils sans consentement. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 23748608,
        "reposts": 11481582,
        "replies": 1931040,
        "media": {
          "kind": "document",
          "title": "Table triage",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "nrbc-cobayes_04.png",
          "trace": "fr"
        },
        "id": "nrbc-cobayes-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 171800,
        "reposts": 107300,
        "replies": 33100,
        "media": {
          "kind": "chart",
          "title": "Bus exercice",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "nrbc-cobayes_05.png",
          "trace": "ru"
        },
        "id": "nrbc-cobayes-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2498,
        "reposts": 1244,
        "replies": 198,
        "media": {
          "kind": "osint",
          "title": "Avis flout\u00e9",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "nrbc-cobayes_06.png",
          "trace": "unknown"
        },
        "id": "nrbc-cobayes-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_18",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi associer d\u00e9fense, sant\u00e9 et exp\u00e9rimentation pour rendre toute communication suspecte. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 26460160,
        "reposts": 12571636,
        "replies": 1931040,
        "media": {
          "kind": "photo",
          "title": "Masque et gants",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "nrbc-cobayes_07.png",
          "trace": "az"
        },
        "id": "nrbc-cobayes-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : associer d\u00e9fense, sant\u00e9 et exp\u00e9rimentation pour rendre toute communication suspecte. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2762,
        "reposts": 1426,
        "replies": 228,
        "media": {
          "kind": "screenshot",
          "title": "Carte p\u00e9rim\u00e8tre",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "nrbc-cobayes_08.png",
          "trace": "fr"
        },
        "id": "nrbc-cobayes-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #Decontamination",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 41017344,
        "reposts": 18358046,
        "replies": 2153952,
        "media": {
          "kind": "comparison",
          "title": "Parents observant",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "nrbc-cobayes_09.png",
          "trace": "ru"
        },
        "id": "nrbc-cobayes-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3280,
        "reposts": 1826,
        "replies": 278,
        "id": "nrbc-cobayes-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "otan-souverainete-washington",
    "title": "Europe / OTAN : la France ob\u00e9irait \u00e0 Washington",
    "briefing": "Simulation p\u00e9dagogique : les forces fran\u00e7aises ne d\u00e9cideraient plus de leurs engagements et ob\u00e9iraient \u00e0 l'OTAN ou aux \u00c9tats-Unis. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : opposer patriotisme fran\u00e7ais et alliances militaires.",
    "timeWindow": "09:00-15:30",
    "location": "D\u00e9bat fictif sur une op\u00e9ration alli\u00e9e",
    "volume": 495,
    "seed": 2340601679,
    "trends": [
      {
        "tag": "#SouveraineteMilitaire",
        "count": "34,1 k"
      },
      {
        "tag": "#SousTraitantOTAN",
        "count": "31,2 k"
      },
      {
        "tag": "#WashingtonDecide",
        "count": "28,3 k"
      },
      {
        "tag": "#IndependanceStrategique",
        "count": "25,4 k"
      },
      {
        "tag": "#AllianceOuSoumission",
        "count": "22,5 k"
      }
    ],
    "clues": [
      "Narratif central : les forces fran\u00e7aises ne d\u00e9cideraient plus de leurs engagements et ob\u00e9iraient \u00e0 l'OTAN ou aux \u00c9tats-Unis.",
      "Acteurs plausibles : puissance anti-OTAN, relais souverainistes et influenceurs g\u00e9opolitiques.",
      "Publics vis\u00e9s : milieux souverainistes, jeunes officiers et opinion m\u00e9fiante envers l'OTAN.",
      "D\u00e9clencheur fictif : cartes d'exercices alli\u00e9s, photos de r\u00e9unions et montages de fl\u00e8ches transatlantiques.",
      "Point de vigilance : distinguer commandement national, coordination alli\u00e9e, exercice, d\u00e9cision politique et propagande.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel D\u00e9fense",
        "handle": "@canal_officiel_otan",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_otan.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Otan",
        "handle": "@temoin_otan_souverainete_",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_otan_souverainete.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_19",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_19.jpg"
      },
      {
        "name": "Alerte Otan",
        "handle": "@alerte_otan_souverainete_",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_otan_souverainete.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_19",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_19.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_19",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_19.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que les forces fran\u00e7aises ne d\u00e9cideraient plus de leurs engagements et ob\u00e9iraient \u00e0 l'OTAN ou aux \u00c9tats-Unis. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : distinguer commandement national, coordination alli\u00e9e, exercice, d\u00e9cision politique et propagande. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur cartes d'exercices alli\u00e9s, photos de r\u00e9unions et montages de fl\u00e8ches transatlantiques. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais opposer patriotisme fran\u00e7ais et alliances militaires ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : les forces fran\u00e7aises ne d\u00e9cideraient plus de leurs engagements et ob\u00e9iraient \u00e0 l'OTAN ou aux \u00c9tats-Unis. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : La France parle d'ind\u00e9pendance strat\u00e9gique mais agirait comme sous-traitant militaire. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : les forces fran\u00e7aises ne d\u00e9cideraient plus de leurs engagements et ob\u00e9iraient \u00e0 l'OTAN ou aux \u00c9tats-Unis. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : opposer patriotisme fran\u00e7ais et alliances militaires. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Salle alliance",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "otan-souverainete-washington_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Avion tarmac",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "otan-souverainete-washington_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Fl\u00e8ches atlantiques",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "otan-souverainete-washington_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Centre commandement",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "otan-souverainete-washington_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Poign\u00e9e de main",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "otan-souverainete-washington_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Audition parlement",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "otan-souverainete-washington_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Navire gris",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "otan-souverainete-washington_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Graphique viral",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "otan-souverainete-washington_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Pancartes vides",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "otan-souverainete-washington_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "otan-souverainete-washington_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "otan-souverainete-washington_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "otan-souverainete-washington_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "otan-souverainete-washington_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_otan",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que les forces fran\u00e7aises ne d\u00e9cideraient plus de leurs engagements et ob\u00e9iraient \u00e0 l'OTAN ou aux \u00c9tats-Unis.",
        "suspect": false,
        "likes": 1113,
        "reposts": 316,
        "replies": 91,
        "id": "otan-souverainete-washington-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_otan_souverainete_",
        "content": "EXCLUSIF : les forces fran\u00e7aises ne d\u00e9cideraient plus de leurs engagements et ob\u00e9iraient \u00e0 l'OTAN ou aux \u00c9tats-Unis. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #SouveraineteMilitaire",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 29286400,
        "reposts": 14069860,
        "replies": 1978560,
        "media": {
          "kind": "photo",
          "title": "Salle alliance",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "otan-souverainete-washington_01.png",
          "trace": "ru"
        },
        "id": "otan-souverainete-washington-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. distinguer commandement national, coordination alli\u00e9e, exercice, d\u00e9cision politique et propagande",
        "suspect": false,
        "likes": 2028,
        "reposts": 904,
        "replies": 139,
        "media": {
          "kind": "map",
          "title": "Avion tarmac",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "otan-souverainete-washington_02.png",
          "trace": "az"
        },
        "id": "otan-souverainete-washington-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_otan_souverainete_",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #SousTraitantOTAN",
        "suspect": false,
        "likes": 931,
        "reposts": 375,
        "replies": 115,
        "media": {
          "kind": "video",
          "title": "Fl\u00e8ches atlantiques",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "otan-souverainete-washington_03.png",
          "trace": "unknown"
        },
        "id": "otan-souverainete-washington-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_19",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que les forces fran\u00e7aises ne d\u00e9cideraient plus de leurs engagements et ob\u00e9iraient \u00e0 l'OTAN ou aux \u00c9tats-Unis. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 23998464,
        "reposts": 11599231,
        "replies": 1978560,
        "media": {
          "kind": "document",
          "title": "Centre commandement",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "otan-souverainete-washington_04.png",
          "trace": "fr"
        },
        "id": "otan-souverainete-washington-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 173200,
        "reposts": 108200,
        "replies": 33400,
        "media": {
          "kind": "chart",
          "title": "Poign\u00e9e de main",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "otan-souverainete-washington_05.png",
          "trace": "ru"
        },
        "id": "otan-souverainete-washington-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2509,
        "reposts": 1252,
        "replies": 199,
        "media": {
          "kind": "osint",
          "title": "Audition parlement",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "otan-souverainete-washington_06.png",
          "trace": "unknown"
        },
        "id": "otan-souverainete-washington-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_19",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi opposer patriotisme fran\u00e7ais et alliances militaires. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 26746880,
        "reposts": 12696488,
        "replies": 1978560,
        "media": {
          "kind": "photo",
          "title": "Navire gris",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "otan-souverainete-washington_07.png",
          "trace": "az"
        },
        "id": "otan-souverainete-washington-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : opposer patriotisme fran\u00e7ais et alliances militaires. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2771,
        "reposts": 1433,
        "replies": 229,
        "media": {
          "kind": "screenshot",
          "title": "Graphique viral",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "otan-souverainete-washington_08.png",
          "trace": "fr"
        },
        "id": "otan-souverainete-washington-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #WashingtonDecide",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 41316352,
        "reposts": 18470893,
        "replies": 2165616,
        "media": {
          "kind": "comparison",
          "title": "Pancartes vides",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "otan-souverainete-washington_09.png",
          "trace": "ru"
        },
        "id": "otan-souverainete-washington-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3290,
        "reposts": 1833,
        "replies": 279,
        "id": "otan-souverainete-washington-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  },
  {
    "id": "transversal-france-ment",
    "title": "Transversal : la France mentirait toujours apr\u00e8s ses op\u00e9rations",
    "briefing": "Simulation p\u00e9dagogique : l'arm\u00e9e fran\u00e7aise aurait une culture du secret et du mensonge apr\u00e8s chaque op\u00e9ration. Le fil m\u00e9lange publications prudentes, images fortes, faux documents, comptes politiques fictifs et relais coordonn\u00e9s. Les \u00e9l\u00e8ves doivent rep\u00e9rer une attaque informationnelle sans supposer qu'un message viral est vrai parce qu'il est spectaculaire.",
    "objective": "Identifier le narratif, les comptes amplificateurs, les visuels d\u00e9tourn\u00e9s, les m\u00e9tadonn\u00e9es suspectes et les cons\u00e9quences recherch\u00e9es : installer un climat g\u00e9n\u00e9ral de doute plut\u00f4t qu'imposer une seule fausse information.",
    "timeWindow": "09:00-15:30",
    "location": "Fil multi-crises fictif agr\u00e9geant plusieurs accusations",
    "volume": 530,
    "seed": 116471542,
    "trends": [
      {
        "tag": "#ToutEstCache",
        "count": "34,2 k"
      },
      {
        "tag": "#MensongePermanent",
        "count": "31,3 k"
      },
      {
        "tag": "#OperationSilence",
        "count": "28,4 k"
      },
      {
        "tag": "#DouteOrganise",
        "count": "25,5 k"
      },
      {
        "tag": "#NarratifsCoordonnes",
        "count": "22,6 k"
      }
    ],
    "clues": [
      "Narratif central : l'arm\u00e9e fran\u00e7aise aurait une culture du secret et du mensonge apr\u00e8s chaque op\u00e9ration.",
      "Acteurs plausibles : coalition informelle d'\u00c9tat hostile, relais militants, m\u00e9dias d'influence et comptes opportunistes.",
      "Publics vis\u00e9s : grand public, journalistes, \u00e9l\u00e8ves, familles et partenaires \u00e9trangers.",
      "D\u00e9clencheur fictif : agr\u00e9gation d'incident spatial, pollution, civils tu\u00e9s, crise civile et faux lanceurs d'alerte.",
      "Point de vigilance : cartographier les narratifs, rep\u00e9rer les comptes pivots, s\u00e9parer les dossiers et v\u00e9rifier les sources primaires.",
      "Certains visuels contiennent des m\u00e9tadonn\u00e9es simul\u00e9es ru_RU ou az_AZ : ce sont des indices \u00e0 recouper, pas des preuves automatiques."
    ],
    "actors": [
      {
        "name": "Canal officiel D\u00e9fense",
        "handle": "@canal_officiel_transversal",
        "verified": true,
        "stance": "official",
        "trust": "high",
        "bio": "Canal institutionnel fictif. Publie des communiqu\u00e9s prudents, dat\u00e9s et v\u00e9rifiables.",
        "avatar": "avatar_org_canal_officiel_transversal.jpg"
      },
      {
        "name": "Agence Horizon",
        "handle": "@agence_horizon",
        "verified": true,
        "stance": "media",
        "trust": "high",
        "bio": "M\u00e9dia fictif g\u00e9n\u00e9raliste. V\u00e9rification, terrain et contexte.",
        "avatar": "avatar_org_agence_horizon.jpg"
      },
      {
        "name": "V\u00e9rif Images",
        "handle": "@verif_images",
        "verified": true,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte fictif sp\u00e9cialis\u00e9 dans la g\u00e9olocalisation, les m\u00e9tadonn\u00e9es et la premi\u00e8re publication.",
        "avatar": "avatar_org_verif_images.jpg"
      },
      {
        "name": "OSINT M\u00e9thodes",
        "handle": "@osint_methodes",
        "verified": false,
        "stance": "analyst",
        "trust": "high",
        "bio": "Compte p\u00e9dagogique fictif. Explique les limites des cartes, images et captures virales.",
        "avatar": "avatar_org_osint_methodes.jpg"
      },
      {
        "name": "T\u00e9moin Transversal",
        "handle": "@temoin_transversal_france",
        "verified": false,
        "stance": "citizen",
        "trust": "medium",
        "bio": "Compte local fictif. T\u00e9moignages et questions utiles, \u00e0 recouper avec d'autres sources.",
        "avatar": "avatar_human_temoin_transversal_france.jpg"
      },
      {
        "name": "Observatoire Civil",
        "handle": "@observatoire_civil_20",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Collectif fictif. Recueille t\u00e9moignages et demandes d'enqu\u00eate, avec prudence variable selon les posts.",
        "avatar": "avatar_org_observatoire_civil_20.jpg"
      },
      {
        "name": "Alerte Transversal",
        "handle": "@alerte_transversal_france",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte d'alerte fictif cr\u00e9\u00e9 r\u00e9cemment. Publie beaucoup, souvent sans source primaire.",
        "avatar": "avatar_human_alerte_transversal_france.jpg"
      },
      {
        "name": "Dossier Confidentiel",
        "handle": "@dossier_conf_20",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Compte de r\u00e9v\u00e9lations suppos\u00e9es. Utilise captures, fuites et documents inv\u00e9rifiables.",
        "avatar": "avatar_human_dossier_conf_20.jpg"
      },
      {
        "name": "Canal Leaks 24",
        "handle": "@leaks24_20",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Canal relais fictif. Revendique des sources priv\u00e9es et pousse au partage rapide.",
        "avatar": "avatar_human_leaks24_20.jpg"
      },
      {
        "name": "Voix du Peuple News",
        "handle": "@voixdupeuple_news",
        "verified": false,
        "stance": "amplifier",
        "trust": "low",
        "bio": "M\u00e9dia alternatif fictif. Ton \u00e9motionnel, titres tr\u00e8s affirmatifs et reprises de contenus priv\u00e9s.",
        "avatar": "avatar_human_voixdupeuple_news.jpg"
      },
      {
        "name": "Global Intel FR",
        "handle": "@globalintel_fr",
        "verified": false,
        "stance": "analyst",
        "trust": "medium",
        "bio": "Compte OSINT fictif. M\u00e9lange parfois bonnes questions et conclusions trop rapides.",
        "avatar": "avatar_org_globalintel_fr.jpg"
      },
      {
        "name": "Donald Tromp",
        "handle": "@donald_tromp",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Ancien pr\u00e9sident fictif d'Am\u00e9ria. Tr\u00e8s suivi, ton direct, r\u00e9cup\u00e8re souvent les crises pour imposer un cadrage politique.",
        "avatar": "avatar_political_donald_tromp.jpg"
      },
      {
        "name": "Vladmir Poutin",
        "handle": "@vladmir_poutin",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'une puissance eurasiatique. Utilise les crises occidentales pour affaiblir l'OTAN et la cr\u00e9dibilit\u00e9 fran\u00e7aise.",
        "avatar": "avatar_political_vladmir_poutin.jpg"
      },
      {
        "name": "Ilhan Aliyef",
        "handle": "@ilhan_aliyef",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Dirigeant fictif d'Az\u00e9rane. Commente les crises fran\u00e7aises sous l'angle de la souverainet\u00e9 et de la d\u00e9fiance envers Paris.",
        "avatar": "avatar_political_ilhan_aliyef.jpg"
      },
      {
        "name": "Ursula von der Lyen",
        "handle": "@ursula_von_der_lyen",
        "verified": true,
        "stance": "official",
        "trust": "medium",
        "bio": "Responsable europ\u00e9enne fictive. Intervient sur s\u00e9curit\u00e9, souverainet\u00e9 et stabilit\u00e9 des alliances.",
        "avatar": "avatar_political_ursula_von_der_lyen.jpg"
      },
      {
        "name": "Jordane Bardelle",
        "handle": "@jordane_bardelle",
        "verified": true,
        "stance": "amplifier",
        "trust": "low",
        "bio": "Responsable politique fictif. R\u00e9agit vite aux crises int\u00e9rieures avec des formulations tr\u00e8s affirmatives.",
        "avatar": "avatar_political_jordane_bardelle.jpg"
      }
    ],
    "normalTemplates": [
      "Le narratif affirme que l'arm\u00e9e fran\u00e7aise aurait une culture du secret et du mensonge apr\u00e8s chaque op\u00e9ration. Pour l'instant, il faut s\u00e9parer accusation, indice et preuve v\u00e9rifiable.",
      "Point de m\u00e9thode : cartographier les narratifs, rep\u00e9rer les comptes pivots, s\u00e9parer les dossiers et v\u00e9rifier les sources primaires. Une image spectaculaire ne suffit pas \u00e0 conclure.",
      "Le d\u00e9clencheur annonc\u00e9 repose sur agr\u00e9gation d'incident spatial, pollution, civils tu\u00e9s, crise civile et faux lanceurs d'alerte. Je cherche la premi\u00e8re publication et une source primaire.",
      "Des cons\u00e9quences sont possibles, mais installer un climat g\u00e9n\u00e9ral de doute plut\u00f4t qu'imposer une seule fausse information ne se d\u00e9montre pas avec une capture isol\u00e9e.",
      "La viralit\u00e9 indique qu'un sujet prend, pas qu'il est vrai. Il faut recouper compte, date, lieu et cha\u00eene de diffusion.",
      "Je vois plusieurs comptes r\u00e9cents reprendre les m\u00eames mots. \u00c7a peut signaler une coordination ou un simple effet de reprise.",
      "Attention \u00e0 ne pas confondre d\u00e9bat l\u00e9gitime, critique politique et op\u00e9ration d'influence.",
      "Les m\u00e9tadonn\u00e9es donnent des indices sur la cha\u00eene de diffusion, mais elles ne prouvent pas seules l'attribution.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation.",
      "Un grand compte politique peut acc\u00e9l\u00e9rer la crise sans apporter la moindre preuve nouvelle.",
      "Plus le volume augmente, plus il faut ralentir la v\u00e9rification : origine, date, lieu, source primaire, puis seulement interpr\u00e9tation."
    ],
    "suspectTemplates": [
      "PREUVE TOTALE : l'arm\u00e9e fran\u00e7aise aurait une culture du secret et du mensonge apr\u00e8s chaque op\u00e9ration. Les m\u00e9dias vont enterrer l'affaire, partagez avant suppression.",
      "Tout confirme le sc\u00e9nario : L'objectif n'est pas une seule histoire, mais l'id\u00e9e que tout est suspect. Ceux qui demandent des sources prot\u00e8gent la version officielle.",
      "Document interne re\u00e7u en priv\u00e9 : l'arm\u00e9e fran\u00e7aise aurait une culture du secret et du mensonge apr\u00e8s chaque op\u00e9ration. Aucun besoin d'attendre une enqu\u00eate.",
      "M\u00eame des responsables \u00e9trangers le disent maintenant : installer un climat g\u00e9n\u00e9ral de doute plut\u00f4t qu'imposer une seule fausse information. Le silence officiel est un aveu.",
      "Les v\u00e9rificateurs arrivent toujours trop tard. Si l'image choque, c'est qu'elle montre la v\u00e9rit\u00e9 que le pouvoir cache.",
      "Nos sources locales confirment tout, mais elles ne peuvent pas parler publiquement. Faites circuler massivement.",
      "On reconna\u00eet clairement la sc\u00e8ne sur l'image. Les d\u00e9tails techniques ne servent qu'\u00e0 noyer le scandale.",
      "La m\u00eame information sort de plusieurs comptes : impossible que ce soit faux.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main.",
      "Donald Tromp menace d\u00e9j\u00e0 d'augmenter les taxes contre la France et de bloquer les visites de ressortissants fran\u00e7ais. C'est que le dossier est \u00e9norme.",
      "Les fact-checkers minimisent pendant que les grands comptes \u00e9trangers r\u00e9agissent. Si tout le monde en parle, c'est que la v\u00e9rit\u00e9 sort.",
      "La rumeur devient impossible \u00e0 contr\u00f4ler : captures, cartes, t\u00e9moins et fuites disent la m\u00eame chose. Les autorit\u00e9s ont perdu la main."
    ],
    "mediaLabels": [
      {
        "kind": "photo",
        "title": "Mur d'indices",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "transversal-france-ment_01.jpg",
        "trace": "ru"
      },
      {
        "kind": "map",
        "title": "Conf\u00e9rence presse",
        "caption": "Carte annot\u00e9e, source primaire absente",
        "asset": "transversal-france-ment_02.jpg",
        "trace": "az"
      },
      {
        "kind": "video",
        "title": "Bureau fact-check",
        "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
        "asset": "transversal-france-ment_03.jpg",
        "trace": "unknown"
      },
      {
        "kind": "document",
        "title": "Mosa\u00efque r\u00e9seaux",
        "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
        "asset": "transversal-france-ment_04.jpg",
        "trace": "fr"
      },
      {
        "kind": "chart",
        "title": "Carte crises",
        "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
        "asset": "transversal-france-ment_05.jpg",
        "trace": "ru"
      },
      {
        "kind": "osint",
        "title": "Documents fuit\u00e9s",
        "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
        "asset": "transversal-france-ment_06.jpg",
        "trace": "unknown"
      },
      {
        "kind": "photo",
        "title": "Foule pancartes",
        "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
        "asset": "transversal-france-ment_07.jpg",
        "trace": "az"
      },
      {
        "kind": "screenshot",
        "title": "Chronologie",
        "caption": "Capture sociale recadr\u00e9e, origine incertaine",
        "asset": "transversal-france-ment_08.jpg",
        "trace": "fr"
      },
      {
        "kind": "comparison",
        "title": "Vignette virale",
        "caption": "Comparaison utile mais conclusion \u00e0 recouper",
        "asset": "transversal-france-ment_09.jpg",
        "trace": "ru"
      },
      {
        "kind": "photo",
        "title": "Relais viral secondaire",
        "caption": "Photo reprise par plusieurs comptes, contexte \u00e0 \u00e9tablir",
        "asset": "transversal-france-ment_10.jpg",
        "trace": "ru"
      },
      {
        "kind": "document",
        "title": "Document recadr\u00e9",
        "caption": "Capture partielle, auteur et date \u00e0 v\u00e9rifier",
        "asset": "transversal-france-ment_11.jpg",
        "trace": "az"
      },
      {
        "kind": "photo",
        "title": "Photo de terrain tardive",
        "caption": "Image \u00e9motionnelle, g\u00e9olocalisation n\u00e9cessaire",
        "asset": "transversal-france-ment_12.jpg",
        "trace": "unknown"
      },
      {
        "kind": "screenshot",
        "title": "Montage de crise",
        "caption": "Assemblage viral, sources multiples non cit\u00e9es",
        "asset": "transversal-france-ment_13.jpg",
        "trace": "ru"
      }
    ],
    "fixedPosts": [
      {
        "minute": 12,
        "actor": "@canal_officiel_transversal",
        "content": "Nous confirmons suivre le sujet. Aucun \u00e9l\u00e9ment v\u00e9rifi\u00e9 ne permet \u00e0 ce stade d'\u00e9tablir que l'arm\u00e9e fran\u00e7aise aurait une culture du secret et du mensonge apr\u00e8s chaque op\u00e9ration.",
        "suspect": false,
        "likes": 1120,
        "reposts": 320,
        "replies": 92,
        "id": "transversal-france-ment-fixed-1"
      },
      {
        "minute": 26,
        "actor": "@alerte_transversal_france",
        "content": "EXCLUSIF : l'arm\u00e9e fran\u00e7aise aurait une culture du secret et du mensonge apr\u00e8s chaque op\u00e9ration. Les preuves circulent d\u00e9j\u00e0, mais les autorit\u00e9s gagnent du temps. #ToutEstCache",
        "suspect": true,
        "reason": "Affirmation d\u00e9finitive, source absente et appel implicite au relais avant v\u00e9rification.",
        "likes": 29491200,
        "reposts": 14165900,
        "replies": 2026080,
        "media": {
          "kind": "photo",
          "title": "Mur d'indices",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "transversal-france-ment_01.png",
          "trace": "ru"
        },
        "id": "transversal-france-ment-fixed-2"
      },
      {
        "minute": 43,
        "actor": "@verif_images",
        "content": "Ce visuel peut \u00eatre utile, mais il faut v\u00e9rifier la date, la premi\u00e8re publication et le lieu. cartographier les narratifs, rep\u00e9rer les comptes pivots, s\u00e9parer les dossiers et v\u00e9rifier les sources primaires",
        "suspect": false,
        "likes": 2040,
        "reposts": 910,
        "replies": 140,
        "media": {
          "kind": "map",
          "title": "Conf\u00e9rence presse",
          "caption": "Carte annot\u00e9e, source primaire absente",
          "asset": "transversal-france-ment_02.png",
          "trace": "az"
        },
        "id": "transversal-france-ment-fixed-3"
      },
      {
        "minute": 58,
        "actor": "@temoin_transversal_france",
        "content": "Sur place, beaucoup de rumeurs circulent autour de ce dossier. Je vois surtout des captures et peu de sources directes. #MensongePermanent",
        "suspect": false,
        "likes": 940,
        "reposts": 380,
        "replies": 116,
        "media": {
          "kind": "video",
          "title": "Bureau fact-check",
          "caption": "Capture vid\u00e9o spectaculaire, contexte incomplet",
          "asset": "transversal-france-ment_03.png",
          "trace": "unknown"
        },
        "id": "transversal-france-ment-fixed-4"
      },
      {
        "minute": 74,
        "actor": "@leaks24_20",
        "content": "Fuite re\u00e7ue cette nuit : tout prouve que l'arm\u00e9e fran\u00e7aise aurait une culture du secret et du mensonge apr\u00e8s chaque op\u00e9ration. Les noms complets arrivent bient\u00f4t.",
        "suspect": true,
        "reason": "Fuite inv\u00e9rifiable, promesse de preuves futures et pression temporelle.",
        "likes": 24248320,
        "reposts": 11716880,
        "replies": 2026080,
        "media": {
          "kind": "document",
          "title": "Mosa\u00efque r\u00e9seaux",
          "caption": "Document suppos\u00e9, mise en page \u00e0 examiner",
          "asset": "transversal-france-ment_04.png",
          "trace": "fr"
        },
        "id": "transversal-france-ment-fixed-5"
      },
      {
        "minute": 91,
        "actor": "@donald_tromp",
        "content": "Si Paris continue de mentir, j'augmenterai les taxes sur les produits fran\u00e7ais et je demanderai un gel des visites de ressortissants fran\u00e7ais en Am\u00e9ria. Les faibles doivent payer le prix de leurs mensonges.",
        "suspect": true,
        "reason": "Menace politique spectaculaire, r\u00e9cup\u00e9ration par un tr\u00e8s gros compte et absence de preuve nouvelle.",
        "likes": 174600,
        "reposts": 109100,
        "replies": 33700,
        "media": {
          "kind": "chart",
          "title": "Carte crises",
          "caption": "Graphique viral, m\u00e9thode non indiqu\u00e9e",
          "asset": "transversal-france-ment_05.png",
          "trace": "ru"
        },
        "id": "transversal-france-ment-fixed-6"
      },
      {
        "minute": 108,
        "actor": "@osint_methodes",
        "content": "Je reconstruis la chronologie. Pour l'instant, le r\u00e9cit m\u00e9lange faits possibles, images non dat\u00e9es et conclusion politique.",
        "suspect": false,
        "likes": 2520,
        "reposts": 1260,
        "replies": 200,
        "media": {
          "kind": "osint",
          "title": "Documents fuit\u00e9s",
          "caption": "Capture OSINT, cha\u00eene de diffusion \u00e0 reconstituer",
          "asset": "transversal-france-ment_06.png",
          "trace": "unknown"
        },
        "id": "transversal-france-ment-fixed-7"
      },
      {
        "minute": 126,
        "actor": "@dossier_conf_20",
        "content": "Les autorit\u00e9s connaissaient tout. Ce dossier montre pourquoi installer un climat g\u00e9n\u00e9ral de doute plut\u00f4t qu'imposer une seule fausse information. Les m\u00e9dias n'en parleront pas.",
        "suspect": true,
        "reason": "Narratif de dissimulation, document non authentifi\u00e9 et g\u00e9n\u00e9ralisation strat\u00e9gique.",
        "likes": 27033600,
        "reposts": 12821340,
        "replies": 2026080,
        "media": {
          "kind": "photo",
          "title": "Foule pancartes",
          "caption": "Photo forte, date et lieu \u00e0 v\u00e9rifier",
          "asset": "transversal-france-ment_07.png",
          "trace": "az"
        },
        "id": "transversal-france-ment-fixed-8"
      },
      {
        "minute": 143,
        "actor": "@agence_horizon",
        "content": "Cons\u00e9quence possible \u00e0 surveiller : installer un climat g\u00e9n\u00e9ral de doute plut\u00f4t qu'imposer une seule fausse information. Mais cela ne valide pas automatiquement le narratif viral.",
        "suspect": false,
        "likes": 2780,
        "reposts": 1440,
        "replies": 230,
        "media": {
          "kind": "screenshot",
          "title": "Chronologie",
          "caption": "Capture sociale recadr\u00e9e, origine incertaine",
          "asset": "transversal-france-ment_08.png",
          "trace": "fr"
        },
        "id": "transversal-france-ment-fixed-9"
      },
      {
        "minute": 160,
        "actor": "@vladmir_poutin",
        "content": "Encore une preuve que Paris donne des le\u00e7ons mais cache la r\u00e9alit\u00e9. #OperationSilence",
        "suspect": true,
        "reason": "Exploitation g\u00e9opolitique par un compte \u00e9tranger fictif, cadrage global avant v\u00e9rification.",
        "likes": 41615360,
        "reposts": 18583740,
        "replies": 2177280,
        "media": {
          "kind": "comparison",
          "title": "Vignette virale",
          "caption": "Comparaison utile mais conclusion \u00e0 recouper",
          "asset": "transversal-france-ment_09.png",
          "trace": "ru"
        },
        "id": "transversal-france-ment-fixed-10"
      },
      {
        "minute": 178,
        "actor": "@verif_images",
        "content": "Synth\u00e8se provisoire : plusieurs images sont int\u00e9ressantes, mais aucune ne suffit seule. Il faut remonter la cha\u00eene de publication et comparer les m\u00e9tadonn\u00e9es.",
        "suspect": false,
        "likes": 3300,
        "reposts": 1840,
        "replies": 280,
        "id": "transversal-france-ment-fixed-11"
      }
    ],
    "traceProfile": [
      "ru",
      "az",
      "unknown",
      "fr"
    ]
  }
];

const evidenceAssets = {"espace-militarisation-civils_01.jpg":"./assets/evidence/espace-militarisation-civils_01.jpg","espace-militarisation-civils_02.jpg":"./assets/evidence/espace-militarisation-civils_02.jpg","espace-militarisation-civils_03.jpg":"./assets/evidence/espace-militarisation-civils_03.jpg","espace-militarisation-civils_04.jpg":"./assets/evidence/espace-militarisation-civils_04.jpg","espace-militarisation-civils_05.jpg":"./assets/evidence/espace-militarisation-civils_05.jpg","espace-militarisation-civils_06.jpg":"./assets/evidence/espace-militarisation-civils_06.jpg","espace-militarisation-civils_07.jpg":"./assets/evidence/espace-militarisation-civils_07.jpg","espace-militarisation-civils_08.jpg":"./assets/evidence/espace-militarisation-civils_08.jpg","espace-militarisation-civils_09.jpg":"./assets/evidence/espace-militarisation-civils_09.jpg","espace-incident-orbital_01.jpg":"./assets/evidence/espace-incident-orbital_01.jpg","espace-incident-orbital_02.jpg":"./assets/evidence/espace-incident-orbital_02.jpg","espace-incident-orbital_03.jpg":"./assets/evidence/espace-incident-orbital_03.jpg","espace-incident-orbital_04.jpg":"./assets/evidence/espace-incident-orbital_04.jpg","espace-incident-orbital_05.jpg":"./assets/evidence/espace-incident-orbital_05.jpg","espace-incident-orbital_06.jpg":"./assets/evidence/espace-incident-orbital_06.jpg","espace-incident-orbital_07.jpg":"./assets/evidence/espace-incident-orbital_07.jpg","espace-incident-orbital_08.jpg":"./assets/evidence/espace-incident-orbital_08.jpg","espace-incident-orbital_09.jpg":"./assets/evidence/espace-incident-orbital_09.jpg","espace-espionnage-afrique_01.jpg":"./assets/evidence/espace-espionnage-afrique_01.jpg","espace-espionnage-afrique_02.jpg":"./assets/evidence/espace-espionnage-afrique_02.jpg","espace-espionnage-afrique_03.jpg":"./assets/evidence/espace-espionnage-afrique_03.jpg","espace-espionnage-afrique_04.jpg":"./assets/evidence/espace-espionnage-afrique_04.jpg","espace-espionnage-afrique_05.jpg":"./assets/evidence/espace-espionnage-afrique_05.jpg","espace-espionnage-afrique_06.jpg":"./assets/evidence/espace-espionnage-afrique_06.jpg","espace-espionnage-afrique_07.jpg":"./assets/evidence/espace-espionnage-afrique_07.jpg","espace-espionnage-afrique_08.jpg":"./assets/evidence/espace-espionnage-afrique_08.jpg","espace-espionnage-afrique_09.jpg":"./assets/evidence/espace-espionnage-afrique_09.jpg","crise-quartiers-riches_01.jpg":"./assets/evidence/crise-quartiers-riches_01.jpg","crise-quartiers-riches_02.jpg":"./assets/evidence/crise-quartiers-riches_02.jpg","crise-quartiers-riches_03.jpg":"./assets/evidence/crise-quartiers-riches_03.jpg","crise-quartiers-riches_04.jpg":"./assets/evidence/crise-quartiers-riches_04.jpg","crise-quartiers-riches_05.jpg":"./assets/evidence/crise-quartiers-riches_05.jpg","crise-quartiers-riches_06.jpg":"./assets/evidence/crise-quartiers-riches_06.jpg","crise-quartiers-riches_07.jpg":"./assets/evidence/crise-quartiers-riches_07.jpg","crise-quartiers-riches_08.jpg":"./assets/evidence/crise-quartiers-riches_08.jpg","crise-quartiers-riches_09.jpg":"./assets/evidence/crise-quartiers-riches_09.jpg","crise-controle-militaire_01.jpg":"./assets/evidence/crise-controle-militaire_01.jpg","crise-controle-militaire_02.jpg":"./assets/evidence/crise-controle-militaire_02.jpg","crise-controle-militaire_03.jpg":"./assets/evidence/crise-controle-militaire_03.jpg","crise-controle-militaire_04.jpg":"./assets/evidence/crise-controle-militaire_04.jpg","crise-controle-militaire_05.jpg":"./assets/evidence/crise-controle-militaire_05.jpg","crise-controle-militaire_06.jpg":"./assets/evidence/crise-controle-militaire_06.jpg","crise-controle-militaire_07.jpg":"./assets/evidence/crise-controle-militaire_07.jpg","crise-controle-militaire_08.jpg":"./assets/evidence/crise-controle-militaire_08.jpg","crise-controle-militaire_09.jpg":"./assets/evidence/crise-controle-militaire_09.jpg","base-contamination-eau_01.jpg":"./assets/evidence/base-contamination-eau_01.jpg","base-contamination-eau_02.jpg":"./assets/evidence/base-contamination-eau_02.jpg","base-contamination-eau_03.jpg":"./assets/evidence/base-contamination-eau_03.jpg","base-contamination-eau_04.jpg":"./assets/evidence/base-contamination-eau_04.jpg","base-contamination-eau_05.jpg":"./assets/evidence/base-contamination-eau_05.jpg","base-contamination-eau_06.jpg":"./assets/evidence/base-contamination-eau_06.jpg","base-contamination-eau_07.jpg":"./assets/evidence/base-contamination-eau_07.jpg","base-contamination-eau_08.jpg":"./assets/evidence/base-contamination-eau_08.jpg","base-contamination-eau_09.jpg":"./assets/evidence/base-contamination-eau_09.jpg","opex-interets-economiques_01.jpg":"./assets/evidence/opex-interets-economiques_01.jpg","opex-interets-economiques_02.jpg":"./assets/evidence/opex-interets-economiques_02.jpg","opex-interets-economiques_03.jpg":"./assets/evidence/opex-interets-economiques_03.jpg","opex-interets-economiques_04.jpg":"./assets/evidence/opex-interets-economiques_04.jpg","opex-interets-economiques_05.jpg":"./assets/evidence/opex-interets-economiques_05.jpg","opex-interets-economiques_06.jpg":"./assets/evidence/opex-interets-economiques_06.jpg","opex-interets-economiques_07.jpg":"./assets/evidence/opex-interets-economiques_07.jpg","opex-interets-economiques_08.jpg":"./assets/evidence/opex-interets-economiques_08.jpg","opex-interets-economiques_09.jpg":"./assets/evidence/opex-interets-economiques_09.jpg","opex-soutien-groupe-arme_01.jpg":"./assets/evidence/opex-soutien-groupe-arme_01.jpg","opex-soutien-groupe-arme_02.jpg":"./assets/evidence/opex-soutien-groupe-arme_02.jpg","opex-soutien-groupe-arme_03.jpg":"./assets/evidence/opex-soutien-groupe-arme_03.jpg","opex-soutien-groupe-arme_04.jpg":"./assets/evidence/opex-soutien-groupe-arme_04.jpg","opex-soutien-groupe-arme_05.jpg":"./assets/evidence/opex-soutien-groupe-arme_05.jpg","opex-soutien-groupe-arme_06.jpg":"./assets/evidence/opex-soutien-groupe-arme_06.jpg","opex-soutien-groupe-arme_07.jpg":"./assets/evidence/opex-soutien-groupe-arme_07.jpg","opex-soutien-groupe-arme_08.jpg":"./assets/evidence/opex-soutien-groupe-arme_08.jpg","opex-soutien-groupe-arme_09.jpg":"./assets/evidence/opex-soutien-groupe-arme_09.jpg","opex-frappes-civils_01.jpg":"./assets/evidence/opex-frappes-civils_01.jpg","opex-frappes-civils_02.jpg":"./assets/evidence/opex-frappes-civils_02.jpg","opex-frappes-civils_03.jpg":"./assets/evidence/opex-frappes-civils_03.jpg","opex-frappes-civils_04.jpg":"./assets/evidence/opex-frappes-civils_04.jpg","opex-frappes-civils_05.jpg":"./assets/evidence/opex-frappes-civils_05.jpg","opex-frappes-civils_06.jpg":"./assets/evidence/opex-frappes-civils_06.jpg","opex-frappes-civils_07.jpg":"./assets/evidence/opex-frappes-civils_07.jpg","opex-frappes-civils_08.jpg":"./assets/evidence/opex-frappes-civils_08.jpg","opex-frappes-civils_09.jpg":"./assets/evidence/opex-frappes-civils_09.jpg","sahel-charnier-desert_01.jpg":"./assets/evidence/sahel-charnier-desert_01.jpg","sahel-charnier-desert_02.jpg":"./assets/evidence/sahel-charnier-desert_02.jpg","sahel-charnier-desert_03.jpg":"./assets/evidence/sahel-charnier-desert_03.jpg","sahel-charnier-desert_04.jpg":"./assets/evidence/sahel-charnier-desert_04.jpg","sahel-charnier-desert_05.jpg":"./assets/evidence/sahel-charnier-desert_05.jpg","sahel-charnier-desert_06.jpg":"./assets/evidence/sahel-charnier-desert_06.jpg","sahel-charnier-desert_07.jpg":"./assets/evidence/sahel-charnier-desert_07.jpg","sahel-charnier-desert_08.jpg":"./assets/evidence/sahel-charnier-desert_08.jpg","sahel-charnier-desert_09.jpg":"./assets/evidence/sahel-charnier-desert_09.jpg","sahel-puits-empoisonnes_01.jpg":"./assets/evidence/sahel-puits-empoisonnes_01.jpg","sahel-puits-empoisonnes_02.jpg":"./assets/evidence/sahel-puits-empoisonnes_02.jpg","sahel-puits-empoisonnes_03.jpg":"./assets/evidence/sahel-puits-empoisonnes_03.jpg","sahel-puits-empoisonnes_04.jpg":"./assets/evidence/sahel-puits-empoisonnes_04.jpg","sahel-puits-empoisonnes_05.jpg":"./assets/evidence/sahel-puits-empoisonnes_05.jpg","sahel-puits-empoisonnes_06.jpg":"./assets/evidence/sahel-puits-empoisonnes_06.jpg","sahel-puits-empoisonnes_07.jpg":"./assets/evidence/sahel-puits-empoisonnes_07.jpg","sahel-puits-empoisonnes_08.jpg":"./assets/evidence/sahel-puits-empoisonnes_08.jpg","sahel-puits-empoisonnes_09.jpg":"./assets/evidence/sahel-puits-empoisonnes_09.jpg","sahel-drones-bergers_01.jpg":"./assets/evidence/sahel-drones-bergers_01.jpg","sahel-drones-bergers_02.jpg":"./assets/evidence/sahel-drones-bergers_02.jpg","sahel-drones-bergers_03.jpg":"./assets/evidence/sahel-drones-bergers_03.jpg","sahel-drones-bergers_04.jpg":"./assets/evidence/sahel-drones-bergers_04.jpg","sahel-drones-bergers_05.jpg":"./assets/evidence/sahel-drones-bergers_05.jpg","sahel-drones-bergers_06.jpg":"./assets/evidence/sahel-drones-bergers_06.jpg","sahel-drones-bergers_07.jpg":"./assets/evidence/sahel-drones-bergers_07.jpg","sahel-drones-bergers_08.jpg":"./assets/evidence/sahel-drones-bergers_08.jpg","sahel-drones-bergers_09.jpg":"./assets/evidence/sahel-drones-bergers_09.jpg","sahel-auxiliaires-abandonnes_01.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_01.jpg","sahel-auxiliaires-abandonnes_02.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_02.jpg","sahel-auxiliaires-abandonnes_03.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_03.jpg","sahel-auxiliaires-abandonnes_04.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_04.jpg","sahel-auxiliaires-abandonnes_05.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_05.jpg","sahel-auxiliaires-abandonnes_06.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_06.jpg","sahel-auxiliaires-abandonnes_07.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_07.jpg","sahel-auxiliaires-abandonnes_08.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_08.jpg","sahel-auxiliaires-abandonnes_09.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_09.jpg","sahel-retour-terroristes_01.jpg":"./assets/evidence/sahel-retour-terroristes_01.jpg","sahel-retour-terroristes_02.jpg":"./assets/evidence/sahel-retour-terroristes_02.jpg","sahel-retour-terroristes_03.jpg":"./assets/evidence/sahel-retour-terroristes_03.jpg","sahel-retour-terroristes_04.jpg":"./assets/evidence/sahel-retour-terroristes_04.jpg","sahel-retour-terroristes_05.jpg":"./assets/evidence/sahel-retour-terroristes_05.jpg","sahel-retour-terroristes_06.jpg":"./assets/evidence/sahel-retour-terroristes_06.jpg","sahel-retour-terroristes_07.jpg":"./assets/evidence/sahel-retour-terroristes_07.jpg","sahel-retour-terroristes_08.jpg":"./assets/evidence/sahel-retour-terroristes_08.jpg","sahel-retour-terroristes_09.jpg":"./assets/evidence/sahel-retour-terroristes_09.jpg","recrutement-soldats-sacrifies_01.jpg":"./assets/evidence/recrutement-soldats-sacrifies_01.jpg","recrutement-soldats-sacrifies_02.jpg":"./assets/evidence/recrutement-soldats-sacrifies_02.jpg","recrutement-soldats-sacrifies_03.jpg":"./assets/evidence/recrutement-soldats-sacrifies_03.jpg","recrutement-soldats-sacrifies_04.jpg":"./assets/evidence/recrutement-soldats-sacrifies_04.jpg","recrutement-soldats-sacrifies_05.jpg":"./assets/evidence/recrutement-soldats-sacrifies_05.jpg","recrutement-soldats-sacrifies_06.jpg":"./assets/evidence/recrutement-soldats-sacrifies_06.jpg","recrutement-soldats-sacrifies_07.jpg":"./assets/evidence/recrutement-soldats-sacrifies_07.jpg","recrutement-soldats-sacrifies_08.jpg":"./assets/evidence/recrutement-soldats-sacrifies_08.jpg","recrutement-soldats-sacrifies_09.jpg":"./assets/evidence/recrutement-soldats-sacrifies_09.jpg","industrie-armes-civils_01.jpg":"./assets/evidence/industrie-armes-civils_01.jpg","industrie-armes-civils_02.jpg":"./assets/evidence/industrie-armes-civils_02.jpg","industrie-armes-civils_03.jpg":"./assets/evidence/industrie-armes-civils_03.jpg","industrie-armes-civils_04.jpg":"./assets/evidence/industrie-armes-civils_04.jpg","industrie-armes-civils_05.jpg":"./assets/evidence/industrie-armes-civils_05.jpg","industrie-armes-civils_06.jpg":"./assets/evidence/industrie-armes-civils_06.jpg","industrie-armes-civils_07.jpg":"./assets/evidence/industrie-armes-civils_07.jpg","industrie-armes-civils_08.jpg":"./assets/evidence/industrie-armes-civils_08.jpg","industrie-armes-civils_09.jpg":"./assets/evidence/industrie-armes-civils_09.jpg","outremer-militarisation_01.jpg":"./assets/evidence/outremer-militarisation_01.jpg","outremer-militarisation_02.jpg":"./assets/evidence/outremer-militarisation_02.jpg","outremer-militarisation_03.jpg":"./assets/evidence/outremer-militarisation_03.jpg","outremer-militarisation_04.jpg":"./assets/evidence/outremer-militarisation_04.jpg","outremer-militarisation_05.jpg":"./assets/evidence/outremer-militarisation_05.jpg","outremer-militarisation_06.jpg":"./assets/evidence/outremer-militarisation_06.jpg","outremer-militarisation_07.jpg":"./assets/evidence/outremer-militarisation_07.jpg","outremer-militarisation_08.jpg":"./assets/evidence/outremer-militarisation_08.jpg","outremer-militarisation_09.jpg":"./assets/evidence/outremer-militarisation_09.jpg","nrbc-cobayes_01.jpg":"./assets/evidence/nrbc-cobayes_01.jpg","nrbc-cobayes_02.jpg":"./assets/evidence/nrbc-cobayes_02.jpg","nrbc-cobayes_03.jpg":"./assets/evidence/nrbc-cobayes_03.jpg","nrbc-cobayes_04.jpg":"./assets/evidence/nrbc-cobayes_04.jpg","nrbc-cobayes_05.jpg":"./assets/evidence/nrbc-cobayes_05.jpg","nrbc-cobayes_06.jpg":"./assets/evidence/nrbc-cobayes_06.jpg","nrbc-cobayes_07.jpg":"./assets/evidence/nrbc-cobayes_07.jpg","nrbc-cobayes_08.jpg":"./assets/evidence/nrbc-cobayes_08.jpg","nrbc-cobayes_09.jpg":"./assets/evidence/nrbc-cobayes_09.jpg","otan-souverainete-washington_01.jpg":"./assets/evidence/otan-souverainete-washington_01.jpg","otan-souverainete-washington_02.jpg":"./assets/evidence/otan-souverainete-washington_02.jpg","otan-souverainete-washington_03.jpg":"./assets/evidence/otan-souverainete-washington_03.jpg","otan-souverainete-washington_04.jpg":"./assets/evidence/otan-souverainete-washington_04.jpg","otan-souverainete-washington_05.jpg":"./assets/evidence/otan-souverainete-washington_05.jpg","otan-souverainete-washington_06.jpg":"./assets/evidence/otan-souverainete-washington_06.jpg","otan-souverainete-washington_07.jpg":"./assets/evidence/otan-souverainete-washington_07.jpg","otan-souverainete-washington_08.jpg":"./assets/evidence/otan-souverainete-washington_08.jpg","otan-souverainete-washington_09.jpg":"./assets/evidence/otan-souverainete-washington_09.jpg","transversal-france-ment_01.jpg":"./assets/evidence/transversal-france-ment_01.jpg","transversal-france-ment_02.jpg":"./assets/evidence/transversal-france-ment_02.jpg","transversal-france-ment_03.jpg":"./assets/evidence/transversal-france-ment_03.jpg","transversal-france-ment_04.jpg":"./assets/evidence/transversal-france-ment_04.jpg","transversal-france-ment_05.jpg":"./assets/evidence/transversal-france-ment_05.jpg","transversal-france-ment_06.jpg":"./assets/evidence/transversal-france-ment_06.jpg","transversal-france-ment_07.jpg":"./assets/evidence/transversal-france-ment_07.jpg","transversal-france-ment_08.jpg":"./assets/evidence/transversal-france-ment_08.jpg","transversal-france-ment_09.jpg":"./assets/evidence/transversal-france-ment_09.jpg","espace-militarisation-civils_10.jpg":"./assets/evidence/espace-militarisation-civils_10.jpg","espace-incident-orbital_10.jpg":"./assets/evidence/espace-incident-orbital_10.jpg","espace-espionnage-afrique_10.jpg":"./assets/evidence/espace-espionnage-afrique_10.jpg","crise-quartiers-riches_10.jpg":"./assets/evidence/crise-quartiers-riches_10.jpg","crise-controle-militaire_10.jpg":"./assets/evidence/crise-controle-militaire_10.jpg","base-contamination-eau_10.jpg":"./assets/evidence/base-contamination-eau_10.jpg","opex-interets-economiques_10.jpg":"./assets/evidence/opex-interets-economiques_10.jpg","opex-soutien-groupe-arme_10.jpg":"./assets/evidence/opex-soutien-groupe-arme_10.jpg","opex-frappes-civils_10.jpg":"./assets/evidence/opex-frappes-civils_10.jpg","sahel-charnier-desert_10.jpg":"./assets/evidence/sahel-charnier-desert_10.jpg","sahel-puits-empoisonnes_10.jpg":"./assets/evidence/sahel-puits-empoisonnes_10.jpg","sahel-drones-bergers_10.jpg":"./assets/evidence/sahel-drones-bergers_10.jpg","sahel-auxiliaires-abandonnes_10.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_10.jpg","sahel-retour-terroristes_10.jpg":"./assets/evidence/sahel-retour-terroristes_10.jpg","recrutement-soldats-sacrifies_10.jpg":"./assets/evidence/recrutement-soldats-sacrifies_10.jpg","industrie-armes-civils_10.jpg":"./assets/evidence/industrie-armes-civils_10.jpg","outremer-militarisation_10.jpg":"./assets/evidence/outremer-militarisation_10.jpg","nrbc-cobayes_10.jpg":"./assets/evidence/nrbc-cobayes_10.jpg","otan-souverainete-washington_10.jpg":"./assets/evidence/otan-souverainete-washington_10.jpg","transversal-france-ment_10.jpg":"./assets/evidence/transversal-france-ment_10.jpg","espace-militarisation-civils_11.jpg":"./assets/evidence/espace-militarisation-civils_11.jpg","espace-incident-orbital_11.jpg":"./assets/evidence/espace-incident-orbital_11.jpg","espace-espionnage-afrique_11.jpg":"./assets/evidence/espace-espionnage-afrique_11.jpg","crise-quartiers-riches_11.jpg":"./assets/evidence/crise-quartiers-riches_11.jpg","crise-controle-militaire_11.jpg":"./assets/evidence/crise-controle-militaire_11.jpg","base-contamination-eau_11.jpg":"./assets/evidence/base-contamination-eau_11.jpg","opex-interets-economiques_11.jpg":"./assets/evidence/opex-interets-economiques_11.jpg","opex-soutien-groupe-arme_11.jpg":"./assets/evidence/opex-soutien-groupe-arme_11.jpg","opex-frappes-civils_11.jpg":"./assets/evidence/opex-frappes-civils_11.jpg","sahel-charnier-desert_11.jpg":"./assets/evidence/sahel-charnier-desert_11.jpg","sahel-puits-empoisonnes_11.jpg":"./assets/evidence/sahel-puits-empoisonnes_11.jpg","sahel-drones-bergers_11.jpg":"./assets/evidence/sahel-drones-bergers_11.jpg","sahel-auxiliaires-abandonnes_11.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_11.jpg","sahel-retour-terroristes_11.jpg":"./assets/evidence/sahel-retour-terroristes_11.jpg","recrutement-soldats-sacrifies_11.jpg":"./assets/evidence/recrutement-soldats-sacrifies_11.jpg","industrie-armes-civils_11.jpg":"./assets/evidence/industrie-armes-civils_11.jpg","outremer-militarisation_11.jpg":"./assets/evidence/outremer-militarisation_11.jpg","nrbc-cobayes_11.jpg":"./assets/evidence/nrbc-cobayes_11.jpg","otan-souverainete-washington_11.jpg":"./assets/evidence/otan-souverainete-washington_11.jpg","transversal-france-ment_11.jpg":"./assets/evidence/transversal-france-ment_11.jpg","espace-militarisation-civils_12.jpg":"./assets/evidence/espace-militarisation-civils_12.jpg","espace-incident-orbital_12.jpg":"./assets/evidence/espace-incident-orbital_12.jpg","espace-espionnage-afrique_12.jpg":"./assets/evidence/espace-espionnage-afrique_12.jpg","crise-quartiers-riches_12.jpg":"./assets/evidence/crise-quartiers-riches_12.jpg","crise-controle-militaire_12.jpg":"./assets/evidence/crise-controle-militaire_12.jpg","base-contamination-eau_12.jpg":"./assets/evidence/base-contamination-eau_12.jpg","opex-interets-economiques_12.jpg":"./assets/evidence/opex-interets-economiques_12.jpg","opex-soutien-groupe-arme_12.jpg":"./assets/evidence/opex-soutien-groupe-arme_12.jpg","opex-frappes-civils_12.jpg":"./assets/evidence/opex-frappes-civils_12.jpg","sahel-charnier-desert_12.jpg":"./assets/evidence/sahel-charnier-desert_12.jpg","sahel-puits-empoisonnes_12.jpg":"./assets/evidence/sahel-puits-empoisonnes_12.jpg","sahel-drones-bergers_12.jpg":"./assets/evidence/sahel-drones-bergers_12.jpg","sahel-auxiliaires-abandonnes_12.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_12.jpg","sahel-retour-terroristes_12.jpg":"./assets/evidence/sahel-retour-terroristes_12.jpg","recrutement-soldats-sacrifies_12.jpg":"./assets/evidence/recrutement-soldats-sacrifies_12.jpg","industrie-armes-civils_12.jpg":"./assets/evidence/industrie-armes-civils_12.jpg","outremer-militarisation_12.jpg":"./assets/evidence/outremer-militarisation_12.jpg","nrbc-cobayes_12.jpg":"./assets/evidence/nrbc-cobayes_12.jpg","otan-souverainete-washington_12.jpg":"./assets/evidence/otan-souverainete-washington_12.jpg","transversal-france-ment_12.jpg":"./assets/evidence/transversal-france-ment_12.jpg","espace-militarisation-civils_13.jpg":"./assets/evidence/espace-militarisation-civils_13.jpg","espace-incident-orbital_13.jpg":"./assets/evidence/espace-incident-orbital_13.jpg","espace-espionnage-afrique_13.jpg":"./assets/evidence/espace-espionnage-afrique_13.jpg","crise-quartiers-riches_13.jpg":"./assets/evidence/crise-quartiers-riches_13.jpg","crise-controle-militaire_13.jpg":"./assets/evidence/crise-controle-militaire_13.jpg","base-contamination-eau_13.jpg":"./assets/evidence/base-contamination-eau_13.jpg","opex-interets-economiques_13.jpg":"./assets/evidence/opex-interets-economiques_13.jpg","opex-soutien-groupe-arme_13.jpg":"./assets/evidence/opex-soutien-groupe-arme_13.jpg","opex-frappes-civils_13.jpg":"./assets/evidence/opex-frappes-civils_13.jpg","sahel-charnier-desert_13.jpg":"./assets/evidence/sahel-charnier-desert_13.jpg","sahel-puits-empoisonnes_13.jpg":"./assets/evidence/sahel-puits-empoisonnes_13.jpg","sahel-drones-bergers_13.jpg":"./assets/evidence/sahel-drones-bergers_13.jpg","sahel-auxiliaires-abandonnes_13.jpg":"./assets/evidence/sahel-auxiliaires-abandonnes_13.jpg","sahel-retour-terroristes_13.jpg":"./assets/evidence/sahel-retour-terroristes_13.jpg","recrutement-soldats-sacrifies_13.jpg":"./assets/evidence/recrutement-soldats-sacrifies_13.jpg","industrie-armes-civils_13.jpg":"./assets/evidence/industrie-armes-civils_13.jpg","outremer-militarisation_13.jpg":"./assets/evidence/outremer-militarisation_13.jpg","nrbc-cobayes_13.jpg":"./assets/evidence/nrbc-cobayes_13.jpg","otan-souverainete-washington_13.jpg":"./assets/evidence/otan-souverainete-washington_13.jpg","transversal-france-ment_13.jpg":"./assets/evidence/transversal-france-ment_13.jpg"};
const avatarAssets = {"avatar_org_canal_officiel_espace.jpg":"./assets/avatars/avatar_org_canal_officiel_espace.jpg","avatar_org_agence_horizon.jpg":"./assets/avatars/avatar_org_agence_horizon.jpg","avatar_org_verif_images.jpg":"./assets/avatars/avatar_org_verif_images.jpg","avatar_org_osint_methodes.jpg":"./assets/avatars/avatar_org_osint_methodes.jpg","avatar_human_temoin_espace_militarisat.jpg":"./assets/avatars/avatar_human_temoin_espace_militarisat.jpg","avatar_org_observatoire_civil_01.jpg":"./assets/avatars/avatar_org_observatoire_civil_01.jpg","avatar_human_alerte_espace_militarisat.jpg":"./assets/avatars/avatar_human_alerte_espace_militarisat.jpg","avatar_human_dossier_conf_01.jpg":"./assets/avatars/avatar_human_dossier_conf_01.jpg","avatar_human_leaks24_01.jpg":"./assets/avatars/avatar_human_leaks24_01.jpg","avatar_human_voixdupeuple_news.jpg":"./assets/avatars/avatar_human_voixdupeuple_news.jpg","avatar_org_globalintel_fr.jpg":"./assets/avatars/avatar_org_globalintel_fr.jpg","avatar_political_donald_tromp.jpg":"./assets/avatars/avatar_political_donald_tromp.jpg","avatar_political_vladmir_poutin.jpg":"./assets/avatars/avatar_political_vladmir_poutin.jpg","avatar_political_ilhan_aliyef.jpg":"./assets/avatars/avatar_political_ilhan_aliyef.jpg","avatar_political_ursula_von_der_lyen.jpg":"./assets/avatars/avatar_political_ursula_von_der_lyen.jpg","avatar_political_jordane_bardelle.jpg":"./assets/avatars/avatar_political_jordane_bardelle.jpg","avatar_human_temoin_espace_incident_or.jpg":"./assets/avatars/avatar_human_temoin_espace_incident_or.jpg","avatar_org_observatoire_civil_02.jpg":"./assets/avatars/avatar_org_observatoire_civil_02.jpg","avatar_human_alerte_espace_incident_or.jpg":"./assets/avatars/avatar_human_alerte_espace_incident_or.jpg","avatar_human_dossier_conf_02.jpg":"./assets/avatars/avatar_human_dossier_conf_02.jpg","avatar_human_leaks24_02.jpg":"./assets/avatars/avatar_human_leaks24_02.jpg","avatar_human_temoin_espace_espionnage.jpg":"./assets/avatars/avatar_human_temoin_espace_espionnage.jpg","avatar_org_observatoire_civil_03.jpg":"./assets/avatars/avatar_org_observatoire_civil_03.jpg","avatar_human_alerte_espace_espionnage.jpg":"./assets/avatars/avatar_human_alerte_espace_espionnage.jpg","avatar_human_dossier_conf_03.jpg":"./assets/avatars/avatar_human_dossier_conf_03.jpg","avatar_human_leaks24_03.jpg":"./assets/avatars/avatar_human_leaks24_03.jpg","avatar_org_canal_officiel_crise.jpg":"./assets/avatars/avatar_org_canal_officiel_crise.jpg","avatar_human_temoin_crise_quartiers_ri.jpg":"./assets/avatars/avatar_human_temoin_crise_quartiers_ri.jpg","avatar_org_observatoire_civil_04.jpg":"./assets/avatars/avatar_org_observatoire_civil_04.jpg","avatar_human_alerte_crise_quartiers_ri.jpg":"./assets/avatars/avatar_human_alerte_crise_quartiers_ri.jpg","avatar_human_dossier_conf_04.jpg":"./assets/avatars/avatar_human_dossier_conf_04.jpg","avatar_human_leaks24_04.jpg":"./assets/avatars/avatar_human_leaks24_04.jpg","avatar_human_temoin_crise_controle_mil.jpg":"./assets/avatars/avatar_human_temoin_crise_controle_mil.jpg","avatar_org_observatoire_civil_05.jpg":"./assets/avatars/avatar_org_observatoire_civil_05.jpg","avatar_human_alerte_crise_controle_mil.jpg":"./assets/avatars/avatar_human_alerte_crise_controle_mil.jpg","avatar_human_dossier_conf_05.jpg":"./assets/avatars/avatar_human_dossier_conf_05.jpg","avatar_human_leaks24_05.jpg":"./assets/avatars/avatar_human_leaks24_05.jpg","avatar_org_canal_officiel_base.jpg":"./assets/avatars/avatar_org_canal_officiel_base.jpg","avatar_human_temoin_base_contamination.jpg":"./assets/avatars/avatar_human_temoin_base_contamination.jpg","avatar_org_observatoire_civil_06.jpg":"./assets/avatars/avatar_org_observatoire_civil_06.jpg","avatar_human_alerte_base_contamination.jpg":"./assets/avatars/avatar_human_alerte_base_contamination.jpg","avatar_human_dossier_conf_06.jpg":"./assets/avatars/avatar_human_dossier_conf_06.jpg","avatar_human_leaks24_06.jpg":"./assets/avatars/avatar_human_leaks24_06.jpg","avatar_org_canal_officiel_opex.jpg":"./assets/avatars/avatar_org_canal_officiel_opex.jpg","avatar_human_temoin_opex_interets_econ.jpg":"./assets/avatars/avatar_human_temoin_opex_interets_econ.jpg","avatar_org_observatoire_civil_07.jpg":"./assets/avatars/avatar_org_observatoire_civil_07.jpg","avatar_human_alerte_opex_interets_econ.jpg":"./assets/avatars/avatar_human_alerte_opex_interets_econ.jpg","avatar_human_dossier_conf_07.jpg":"./assets/avatars/avatar_human_dossier_conf_07.jpg","avatar_human_leaks24_07.jpg":"./assets/avatars/avatar_human_leaks24_07.jpg","avatar_human_temoin_opex_soutien_group.jpg":"./assets/avatars/avatar_human_temoin_opex_soutien_group.jpg","avatar_org_observatoire_civil_08.jpg":"./assets/avatars/avatar_org_observatoire_civil_08.jpg","avatar_human_alerte_opex_soutien_group.jpg":"./assets/avatars/avatar_human_alerte_opex_soutien_group.jpg","avatar_human_dossier_conf_08.jpg":"./assets/avatars/avatar_human_dossier_conf_08.jpg","avatar_human_leaks24_08.jpg":"./assets/avatars/avatar_human_leaks24_08.jpg","avatar_human_temoin_opex_frappes_civil.jpg":"./assets/avatars/avatar_human_temoin_opex_frappes_civil.jpg","avatar_org_observatoire_civil_09.jpg":"./assets/avatars/avatar_org_observatoire_civil_09.jpg","avatar_human_alerte_opex_frappes_civil.jpg":"./assets/avatars/avatar_human_alerte_opex_frappes_civil.jpg","avatar_human_dossier_conf_09.jpg":"./assets/avatars/avatar_human_dossier_conf_09.jpg","avatar_human_leaks24_09.jpg":"./assets/avatars/avatar_human_leaks24_09.jpg","avatar_org_canal_officiel_sahel.jpg":"./assets/avatars/avatar_org_canal_officiel_sahel.jpg","avatar_human_temoin_sahel_charnier_des.jpg":"./assets/avatars/avatar_human_temoin_sahel_charnier_des.jpg","avatar_org_observatoire_civil_10.jpg":"./assets/avatars/avatar_org_observatoire_civil_10.jpg","avatar_human_alerte_sahel_charnier_des.jpg":"./assets/avatars/avatar_human_alerte_sahel_charnier_des.jpg","avatar_human_dossier_conf_10.jpg":"./assets/avatars/avatar_human_dossier_conf_10.jpg","avatar_human_leaks24_10.jpg":"./assets/avatars/avatar_human_leaks24_10.jpg","avatar_human_temoin_sahel_puits_empois.jpg":"./assets/avatars/avatar_human_temoin_sahel_puits_empois.jpg","avatar_org_observatoire_civil_11.jpg":"./assets/avatars/avatar_org_observatoire_civil_11.jpg","avatar_human_alerte_sahel_puits_empois.jpg":"./assets/avatars/avatar_human_alerte_sahel_puits_empois.jpg","avatar_human_dossier_conf_11.jpg":"./assets/avatars/avatar_human_dossier_conf_11.jpg","avatar_human_leaks24_11.jpg":"./assets/avatars/avatar_human_leaks24_11.jpg","avatar_human_temoin_sahel_drones_berge.jpg":"./assets/avatars/avatar_human_temoin_sahel_drones_berge.jpg","avatar_org_observatoire_civil_12.jpg":"./assets/avatars/avatar_org_observatoire_civil_12.jpg","avatar_human_alerte_sahel_drones_berge.jpg":"./assets/avatars/avatar_human_alerte_sahel_drones_berge.jpg","avatar_human_dossier_conf_12.jpg":"./assets/avatars/avatar_human_dossier_conf_12.jpg","avatar_human_leaks24_12.jpg":"./assets/avatars/avatar_human_leaks24_12.jpg","avatar_human_temoin_sahel_auxiliaires.jpg":"./assets/avatars/avatar_human_temoin_sahel_auxiliaires.jpg","avatar_org_observatoire_civil_13.jpg":"./assets/avatars/avatar_org_observatoire_civil_13.jpg","avatar_human_alerte_sahel_auxiliaires.jpg":"./assets/avatars/avatar_human_alerte_sahel_auxiliaires.jpg","avatar_human_dossier_conf_13.jpg":"./assets/avatars/avatar_human_dossier_conf_13.jpg","avatar_human_leaks24_13.jpg":"./assets/avatars/avatar_human_leaks24_13.jpg","avatar_human_temoin_sahel_retour_terro.jpg":"./assets/avatars/avatar_human_temoin_sahel_retour_terro.jpg","avatar_org_observatoire_civil_14.jpg":"./assets/avatars/avatar_org_observatoire_civil_14.jpg","avatar_human_alerte_sahel_retour_terro.jpg":"./assets/avatars/avatar_human_alerte_sahel_retour_terro.jpg","avatar_human_dossier_conf_14.jpg":"./assets/avatars/avatar_human_dossier_conf_14.jpg","avatar_human_leaks24_14.jpg":"./assets/avatars/avatar_human_leaks24_14.jpg","avatar_org_canal_officiel_recrutement.jpg":"./assets/avatars/avatar_org_canal_officiel_recrutement.jpg","avatar_human_temoin_recrutement_soldat.jpg":"./assets/avatars/avatar_human_temoin_recrutement_soldat.jpg","avatar_org_observatoire_civil_15.jpg":"./assets/avatars/avatar_org_observatoire_civil_15.jpg","avatar_human_alerte_recrutement_soldat.jpg":"./assets/avatars/avatar_human_alerte_recrutement_soldat.jpg","avatar_human_dossier_conf_15.jpg":"./assets/avatars/avatar_human_dossier_conf_15.jpg","avatar_human_leaks24_15.jpg":"./assets/avatars/avatar_human_leaks24_15.jpg","avatar_org_canal_officiel_industrie.jpg":"./assets/avatars/avatar_org_canal_officiel_industrie.jpg","avatar_human_temoin_industrie_armes_ci.jpg":"./assets/avatars/avatar_human_temoin_industrie_armes_ci.jpg","avatar_org_observatoire_civil_16.jpg":"./assets/avatars/avatar_org_observatoire_civil_16.jpg","avatar_human_alerte_industrie_armes_ci.jpg":"./assets/avatars/avatar_human_alerte_industrie_armes_ci.jpg","avatar_human_dossier_conf_16.jpg":"./assets/avatars/avatar_human_dossier_conf_16.jpg","avatar_human_leaks24_16.jpg":"./assets/avatars/avatar_human_leaks24_16.jpg","avatar_org_canal_officiel_outremer.jpg":"./assets/avatars/avatar_org_canal_officiel_outremer.jpg","avatar_human_temoin_outremer_militaris.jpg":"./assets/avatars/avatar_human_temoin_outremer_militaris.jpg","avatar_org_observatoire_civil_17.jpg":"./assets/avatars/avatar_org_observatoire_civil_17.jpg","avatar_human_alerte_outremer_militaris.jpg":"./assets/avatars/avatar_human_alerte_outremer_militaris.jpg","avatar_human_dossier_conf_17.jpg":"./assets/avatars/avatar_human_dossier_conf_17.jpg","avatar_human_leaks24_17.jpg":"./assets/avatars/avatar_human_leaks24_17.jpg","avatar_org_canal_officiel_nrbc.jpg":"./assets/avatars/avatar_org_canal_officiel_nrbc.jpg","avatar_human_temoin_nrbc_cobayes.jpg":"./assets/avatars/avatar_human_temoin_nrbc_cobayes.jpg","avatar_org_observatoire_civil_18.jpg":"./assets/avatars/avatar_org_observatoire_civil_18.jpg","avatar_human_alerte_nrbc_cobayes.jpg":"./assets/avatars/avatar_human_alerte_nrbc_cobayes.jpg","avatar_human_dossier_conf_18.jpg":"./assets/avatars/avatar_human_dossier_conf_18.jpg","avatar_human_leaks24_18.jpg":"./assets/avatars/avatar_human_leaks24_18.jpg","avatar_org_canal_officiel_otan.jpg":"./assets/avatars/avatar_org_canal_officiel_otan.jpg","avatar_human_temoin_otan_souverainete.jpg":"./assets/avatars/avatar_human_temoin_otan_souverainete.jpg","avatar_org_observatoire_civil_19.jpg":"./assets/avatars/avatar_org_observatoire_civil_19.jpg","avatar_human_alerte_otan_souverainete.jpg":"./assets/avatars/avatar_human_alerte_otan_souverainete.jpg","avatar_human_dossier_conf_19.jpg":"./assets/avatars/avatar_human_dossier_conf_19.jpg","avatar_human_leaks24_19.jpg":"./assets/avatars/avatar_human_leaks24_19.jpg","avatar_org_canal_officiel_transversal.jpg":"./assets/avatars/avatar_org_canal_officiel_transversal.jpg","avatar_human_temoin_transversal_france.jpg":"./assets/avatars/avatar_human_temoin_transversal_france.jpg","avatar_org_observatoire_civil_20.jpg":"./assets/avatars/avatar_org_observatoire_civil_20.jpg","avatar_human_alerte_transversal_france.jpg":"./assets/avatars/avatar_human_alerte_transversal_france.jpg","avatar_human_dossier_conf_20.jpg":"./assets/avatars/avatar_human_dossier_conf_20.jpg","avatar_human_leaks24_20.jpg":"./assets/avatars/avatar_human_leaks24_20.jpg"};
const appLogo = "./assets/branding/hawk-logo.png";

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
  const volume = Math.max(340, Number(scenario.volume) || 380);
  const fixedPosts = scenario.fixedPosts || [];
  const generated = [];

  for (let i = 0; i < volume - fixedPosts.length; i += 1) {
    const suspectChance = 0.48 + (i > volume * 0.28 ? 0.12 : 0) + (i > volume * 0.65 ? 0.08 : 0);
    const suspect = random() < suspectChance;
    const candidates = scenario.actors.filter((actor) => suspect ? actor.trust === "low" : actor.trust !== "low");
    const actor = pick(candidates.length ? candidates : scenario.actors, random);
    const templates = suspect ? scenario.suspectTemplates : scenario.normalTemplates;
    const minute = Math.floor(random() * duration);
    const trend = pick(scenario.trends, random).tag;
    const hasMedia = random() > (suspect ? 0.10 : 0.48);
    const spike = suspect ? 18 + random() * 26 : actor.trust === "high" ? 0.55 + random() * 0.9 : 1.2 + random() * 2.4;
    const likes = Math.floor((20 + random() * 560) * spike);
    const reposts = Math.floor((6 + random() * 260) * spike);
    const replies = Math.floor((4 + random() * 140) * (suspect ? 12 + random() * 8 : 1.4));

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
  const key = actor?.avatar || "";
  if (key && avatarAssets[key]) return { key, src: avatarAssets[key] };
  const fallback = Object.keys(avatarAssets)[hashSeed(actor?.handle || "avatar") % Math.max(1, Object.keys(avatarAssets).length)];
  return fallback ? { key: fallback, src: avatarAssets[fallback] } : null;
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
  const labels = state.scenario?.mediaLabels || [];
  const sameKind = labels.filter((item) => item.asset && (!media.kind || item.kind === media.kind));
  const pool = sameKind.length ? sameKind : labels.filter((item) => item.asset);
  if (pool.length) return chooseEvidenceAsset(pool.map((item) => item.asset), media, post);
  const allAssets = Object.keys(evidenceAssets);
  return allAssets.length ? chooseEvidenceAsset(allAssets, media, post) : "";
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
        <span>indices EXIF</span>
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
  const profile = state.scenario?.traceProfile || ["ru", "az", "unknown", "fr"];
  const trace = media.trace || (suspect ? profile[seed % profile.length] : "fr");
  const data = {
    ru: { file: "пересылка_0742.jpg", locale: "ru_RU", tz: "UTC+3", gps: "55.7558, 37.6173", lang: "russe", operator: "Mikhail Orlov", chain: "export Telegram compressé" },
    az: { file: "subut_export_041.jpg", locale: "az_AZ", tz: "UTC+4", gps: "40.4093, 49.8671", lang: "azéri", operator: "Rashad Mammadov", chain: "copie depuis canal relais" },
    unknown: { file: `forwarded_${media.kind || "media"}_${String(seed).slice(0, 5)}.jpg`, locale: "inconnue", tz: "supprimé", gps: "41.0082, 28.9784", lang: "indéterminée", operator: "compte relais", chain: "capture recadrée" },
    fr: { file: `${media.kind || "media"}_${String(seed).slice(0, 5)}.jpg`, locale: "fr_FR", tz: "Europe/Paris", gps: "48.8566, 2.3522", lang: "français", operator: "source identifiée", chain: "source citée" }
  }[trace] || {};

  return [
    { label: "Fichier", value: data.file },
    { label: "Langue appareil", value: data.lang },
    { label: "Locale", value: data.locale },
    { label: "Fuseau", value: data.tz },
    { label: "GPS EXIF", value: data.gps },
    { label: "Nom opérateur", value: data.operator },
    { label: "Chaîne", value: data.chain },
    { label: "Cohérence", value: suspect ? "indice fort à recouper" : "éléments recoupables" }
  ];
}

function renderScenarioOptions() {
  if (!els.scenarioSelect) return;
  if (!els.scenarioSelect) return;
  if (!els.scenarioSelect) return;
  if (!els.scenarioSelect) return;
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

function buildComments(post) {
  const seed = hashSeed(`${post.id}:comments`);
  const random = mulberry32(seed);
  const lowActors = state.scenario.actors.filter((actor) => actor.trust === "low" && actor.handle !== post.actor.handle);
  const carefulActors = state.scenario.actors.filter((actor) => actor.trust !== "low" && actor.handle !== post.actor.handle);
  const pool = post.suspect ? lowActors.concat(carefulActors) : carefulActors.concat(lowActors);
  const suspectComments = [
    "Enfin quelqu'un le dit. Les médias vont encore appeler ça une rumeur.",
    "Je viens de voir la même capture sur trois comptes différents, ça explose.",
    "Si c'est faux, pourquoi personne ne dément clairement ?",
    "Partagé dans mon groupe. Tout le monde doit voir ça avant suppression.",
    "Les fact-checkers protègent toujours les mêmes.",
    "On sent que les autorités paniquent, les chiffres montent trop vite."
  ];
  const carefulComments = [
    "Source originale ? Je ne trouve pas la première publication.",
    "Attention, l'image ne donne ni date ni lieu vérifiable.",
    "Le volume de relais n'est pas une preuve.",
    "Il faudrait comparer les métadonnées et les ombres.",
    "Quelqu'un a un communiqué primaire ou seulement des captures ?",
    "Ça peut être grave, justement il faut vérifier proprement."
  ];
  const templates = post.suspect ? suspectComments.concat(carefulComments) : carefulComments.concat(suspectComments.slice(0, 2));
  const count = post.suspect ? 5 + Math.floor(random() * 3) : 3 + Math.floor(random() * 2);
  return Array.from({ length: count }, (_, index) => {
    const actor = pool.length ? pool[Math.floor(random() * pool.length)] : post.actor;
    return {
      id: `${post.id}-comment-${index}`,
      actor,
      content: templates[Math.floor(random() * templates.length)],
      likes: Math.floor((post.suspect ? 40 : 8) + random() * (post.suspect ? 1800 : 240))
    };
  });
}

function renderComments(post) {
  const comments = post.comments || buildComments(post);
  return `
    <div class="comment-thread">
      ${comments.map((comment) => `
        <article class="comment">
          ${renderAvatarButton(comment.actor, "avatar-comment")}
          <div>
            <div class="comment-head">
              <button class="profile-name" data-action="profile" data-handle="${escapeHtml(comment.actor.handle)}">${escapeHtml(comment.actor.name)}</button>
              <span class="handle">${escapeHtml(comment.actor.handle)}</span>
            </div>
            <p>${escapeHtml(comment.content)}</p>
            <span class="comment-stat">${formatNumber(comment.likes)} réactions</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function buildComments(post) {
  const seed = hashSeed(`${post.id}:comments`);
  const random = mulberry32(seed);
  const lowActors = state.scenario.actors.filter((actor) => actor.trust === "low" && actor.handle !== post.actor.handle);
  const carefulActors = state.scenario.actors.filter((actor) => actor.trust !== "low" && actor.handle !== post.actor.handle);
  const pool = post.suspect ? lowActors.concat(carefulActors) : carefulActors.concat(lowActors);
  const suspectComments = [
    "Enfin quelqu'un le dit. Les médias vont encore appeler ça une rumeur.",
    "Je viens de voir la même capture sur trois comptes différents, ça explose.",
    "Si c'est faux, pourquoi personne ne dément clairement ?",
    "Partagé dans mon groupe. Tout le monde doit voir ça avant suppression.",
    "Les fact-checkers protègent toujours les mêmes.",
    "On sent que les autorités paniquent, les chiffres montent trop vite."
  ];
  const carefulComments = [
    "Source originale ? Je ne trouve pas la première publication.",
    "Attention, l'image ne donne ni date ni lieu vérifiable.",
    "Le volume de relais n'est pas une preuve.",
    "Il faudrait comparer les métadonnées et les ombres.",
    "Quelqu'un a un communiqué primaire ou seulement des captures ?",
    "Ça peut être grave, justement il faut vérifier proprement."
  ];
  const templates = post.suspect ? suspectComments.concat(carefulComments) : carefulComments.concat(suspectComments.slice(0, 2));
  const count = post.suspect ? 5 + Math.floor(random() * 3) : 3 + Math.floor(random() * 2);
  return Array.from({ length: count }, (_, index) => {
    const actor = pool.length ? pool[Math.floor(random() * pool.length)] : post.actor;
    return {
      id: `${post.id}-comment-${index}`,
      actor,
      content: templates[Math.floor(random() * templates.length)],
      likes: Math.floor((post.suspect ? 40 : 8) + random() * (post.suspect ? 1800 : 240))
    };
  });
}

function renderComments(post) {
  const comments = post.comments || buildComments(post);
  return `
    <div class="comment-thread">
      ${comments.map((comment) => `
        <article class="comment">
          ${renderAvatarButton(comment.actor, "avatar-comment")}
          <div>
            <div class="comment-head">
              <button class="profile-name" data-action="profile" data-handle="${escapeHtml(comment.actor.handle)}">${escapeHtml(comment.actor.name)}</button>
              <span class="handle">${escapeHtml(comment.actor.handle)}</span>
            </div>
            <p>${escapeHtml(comment.content)}</p>
            <span class="comment-stat">${formatNumber(comment.likes)} réactions</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function buildComments(post) {
  const seed = hashSeed(`${post.id}:comments`);
  const random = mulberry32(seed);
  const lowActors = state.scenario.actors.filter((actor) => actor.trust === "low" && actor.handle !== post.actor.handle);
  const carefulActors = state.scenario.actors.filter((actor) => actor.trust !== "low" && actor.handle !== post.actor.handle);
  const pool = post.suspect ? lowActors.concat(carefulActors) : carefulActors.concat(lowActors);
  const suspectComments = [
    "Enfin quelqu'un le dit. Les médias vont encore appeler ça une rumeur.",
    "Je viens de voir la même capture sur trois comptes différents, ça explose.",
    "Si c'est faux, pourquoi personne ne dément clairement ?",
    "Partagé dans mon groupe. Tout le monde doit voir ça avant suppression.",
    "Les fact-checkers protègent toujours les mêmes.",
    "On sent que les autorités paniquent, les chiffres montent trop vite."
  ];
  const carefulComments = [
    "Source originale ? Je ne trouve pas la première publication.",
    "Attention, l'image ne donne ni date ni lieu vérifiable.",
    "Le volume de relais n'est pas une preuve.",
    "Il faudrait comparer les métadonnées et les ombres.",
    "Quelqu'un a un communiqué primaire ou seulement des captures ?",
    "Ça peut être grave, justement il faut vérifier proprement."
  ];
  const templates = post.suspect ? suspectComments.concat(carefulComments) : carefulComments.concat(suspectComments.slice(0, 2));
  const count = post.suspect ? 5 + Math.floor(random() * 3) : 3 + Math.floor(random() * 2);
  return Array.from({ length: count }, (_, index) => {
    const actor = pool.length ? pool[Math.floor(random() * pool.length)] : post.actor;
    return {
      id: `${post.id}-comment-${index}`,
      actor,
      content: templates[Math.floor(random() * templates.length)],
      likes: Math.floor((post.suspect ? 40 : 8) + random() * (post.suspect ? 1800 : 240))
    };
  });
}

function renderComments(post) {
  const comments = post.comments || buildComments(post);
  return `
    <div class="comment-thread">
      ${comments.map((comment) => `
        <article class="comment">
          ${renderAvatarButton(comment.actor, "avatar-comment")}
          <div>
            <div class="comment-head">
              <button class="profile-name" data-action="profile" data-handle="${escapeHtml(comment.actor.handle)}">${escapeHtml(comment.actor.name)}</button>
              <span class="handle">${escapeHtml(comment.actor.handle)}</span>
            </div>
            <p>${escapeHtml(comment.content)}</p>
            <span class="comment-stat">${formatNumber(comment.likes)} réactions</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function buildComments(post) {
  const seed = hashSeed(`${post.id}:comments`);
  const random = mulberry32(seed);
  const lowActors = state.scenario.actors.filter((actor) => actor.trust === "low" && actor.handle !== post.actor.handle);
  const carefulActors = state.scenario.actors.filter((actor) => actor.trust !== "low" && actor.handle !== post.actor.handle);
  const pool = post.suspect ? lowActors.concat(carefulActors) : carefulActors.concat(lowActors);
  const suspectComments = [
    "Enfin quelqu'un le dit. Les médias vont encore appeler ça une rumeur.",
    "Je viens de voir la même capture sur trois comptes différents, ça explose.",
    "Si c'est faux, pourquoi personne ne dément clairement ?",
    "Partagé dans mon groupe. Tout le monde doit voir ça avant suppression.",
    "Les fact-checkers protègent toujours les mêmes.",
    "On sent que les autorités paniquent, les chiffres montent trop vite."
  ];
  const carefulComments = [
    "Source originale ? Je ne trouve pas la première publication.",
    "Attention, l'image ne donne ni date ni lieu vérifiable.",
    "Le volume de relais n'est pas une preuve.",
    "Il faudrait comparer les métadonnées et les ombres.",
    "Quelqu'un a un communiqué primaire ou seulement des captures ?",
    "Ça peut être grave, justement il faut vérifier proprement."
  ];
  const templates = post.suspect ? suspectComments.concat(carefulComments) : carefulComments.concat(suspectComments.slice(0, 2));
  const count = post.suspect ? 5 + Math.floor(random() * 3) : 3 + Math.floor(random() * 2);
  return Array.from({ length: count }, (_, index) => {
    const actor = pool.length ? pool[Math.floor(random() * pool.length)] : post.actor;
    return {
      id: `${post.id}-comment-${index}`,
      actor,
      content: templates[Math.floor(random() * templates.length)],
      likes: Math.floor((post.suspect ? 40 : 8) + random() * (post.suspect ? 1800 : 240))
    };
  });
}

function renderComments(post) {
  const comments = post.comments || buildComments(post);
  return `
    <div class="comment-thread">
      ${comments.map((comment) => `
        <article class="comment">
          ${renderAvatarButton(comment.actor, "avatar-comment")}
          <div>
            <div class="comment-head">
              <button class="profile-name" data-action="profile" data-handle="${escapeHtml(comment.actor.handle)}">${escapeHtml(comment.actor.name)}</button>
              <span class="handle">${escapeHtml(comment.actor.handle)}</span>
            </div>
            <p>${escapeHtml(comment.content)}</p>
            <span class="comment-stat">${formatNumber(comment.likes)} réactions</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderPost(post) {
  const flagged = state.flags.get(post.id);
  return `
    <article class="post ${flagged ? "is-flagged" : ""} ${post.suspect ? "post-viral" : ""}" data-post-id="${escapeHtml(post.id)}">
      ${renderAvatarButton(post.actor, "avatar-feed")}
      <div class="post-body">
        <div class="post-head">
          <button class="profile-name" data-action="profile" data-handle="${escapeHtml(post.actor.handle)}">${escapeHtml(post.actor.name)}</button>
          ${post.actor.verified ? `<span class="badge" title="Compte vérifié">&#10003;</span>` : ""}
          <span class="handle">${escapeHtml(post.actor.handle)}</span>
          <span class="time">· ${escapeHtml(post.relativeTime)} · ${escapeHtml(post.time)}</span>
        </div>
        <p class="post-content">${linkify(escapeHtml(post.content))}</p>
        ${renderMedia(post.media, post)}
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
        ${renderComments(post)}
      </div>
    </article>
  `;
}
function createLivePost() {
  if (!state.scenario) return;
  const seed = hashSeed(`${state.scenario.id}:live:${Date.now()}:${state.posts.length}`);
  const random = mulberry32(seed);
  const suspect = random() < 0.72;
  const candidates = state.scenario.actors.filter((actor) => suspect ? actor.trust === "low" : actor.trust !== "low");
  const actor = pick(candidates.length ? candidates : state.scenario.actors, random);
  const templates = suspect ? state.scenario.suspectTemplates : state.scenario.normalTemplates;
  const mediaPool = state.scenario.mediaLabels || [];
  const liveDate = parisNow();
  const trend = pick(state.scenario.trends, random).tag;
  const post = {
    id: `${state.scenario.id}-live-${Date.now()}-${Math.floor(random() * 9999)}`,
    minute: scenarioDurationMinutes(state.scenario),
    actor,
    content: `${pick(templates, random)} ${random() > 0.36 ? trend : ""}`.trim(),
    suspect,
    reason: suspect ? inferReason(actor, true) : "",
    likes: suspect ? Math.floor(18000 + random() * 160000) : Math.floor(120 + random() * 2400),
    reposts: suspect ? Math.floor(9000 + random() * 88000) : Math.floor(40 + random() * 1000),
    replies: suspect ? Math.floor(2400 + random() * 24000) : Math.floor(12 + random() * 500),
    media: mediaPool.length && random() > (suspect ? 0.12 : 0.55) ? structuredClone(pick(mediaPool, random)) : null,
    liveDate,
    time: formatTime(liveDate),
    relativeTime: "à l'instant"
  };
  post.comments = buildComments(post);
  state.posts = [post, ...state.posts].slice(0, 640);
  renderScenarioInfo();
  renderFeed();
  renderFlags();
}

function startLiveStream() {
  if (state.liveTimer) clearInterval(state.liveTimer);
  state.liveTimer = setInterval(createLivePost, 8500);
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
  if (!els.answerKey) return;
  if (!els.answerKey) return;
  if (!els.answerKey) return;
  if (!els.answerKey) return;
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
  if (els.searchInput) if (els.searchInput) if (els.searchInput) if (els.searchInput) els.searchInput.value = "";
  renderScenarioInfo();
  renderFeed();
  renderFlags();
  renderAnswerKey();
  if (els.scenarioEditor) if (els.scenarioEditor) if (els.scenarioEditor) if (els.scenarioEditor) if (els.scenarioEditor) els.scenarioEditor.value = JSON.stringify(state.scenario, null, 2);
  startLiveStream();
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
  if (els.scenarioSelect) if (els.scenarioSelect) if (els.scenarioSelect) if (els.scenarioSelect) els.scenarioSelect.value = scenarios[0].id;
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
    if (els.scenarioSelect) if (els.scenarioSelect) if (els.scenarioSelect) if (els.scenarioSelect) els.scenarioSelect.value = scenario.id;
    loadScenario(scenario.id);
    if (els.teacherDialog) if (els.teacherDialog) if (els.teacherDialog) if (els.teacherDialog) els.teacherDialog.close();
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
  if (els.scenarioSelect) if (els.scenarioSelect) if (els.scenarioSelect) if (els.scenarioSelect) els.scenarioSelect.addEventListener("change", (event) => loadScenario(event.target.value));
  if (els.searchInput) if (els.searchInput) if (els.searchInput) if (els.searchInput) els.searchInput.addEventListener("input", (event) => {
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
  if (els.feed) if (els.feed) if (els.feed) if (els.feed) els.feed.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const post = event.target.closest(".post");
    if (!post) return;
    if (button.dataset.action === "profile") openProfile(button.dataset.handle);
    if (button.dataset.action === "flag") toggleFlag(post.dataset.postId);
    if (button.dataset.action === "annotate") openAnnotation(post.dataset.postId);
  });
  if (els.clearFlags) if (els.clearFlags) if (els.clearFlags) if (els.clearFlags) els.clearFlags.addEventListener("click", () => {
    state.flags.clear();
    renderFeed();
    renderFlags();
  });
  if (els.saveAnnotation) if (els.saveAnnotation) if (els.saveAnnotation) if (els.saveAnnotation) els.saveAnnotation.addEventListener("click", saveAnnotation);
  if (els.importBtn) if (els.importBtn) if (els.importBtn) if (els.importBtn) els.importBtn.addEventListener("click", () => els.fileInput.click());
  if (els.fileInput) if (els.fileInput) if (els.fileInput) if (els.fileInput) els.fileInput.addEventListener("change", async (event) => {
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
  if (els.exportBtn) if (els.exportBtn) if (els.exportBtn) if (els.exportBtn) els.exportBtn.addEventListener("click", exportScenario);
  if (els.teacherToggle) if (els.teacherToggle) if (els.teacherToggle) if (els.teacherToggle) els.teacherToggle.addEventListener("click", () => {
    if (els.scenarioEditor) if (els.scenarioEditor) if (els.scenarioEditor) if (els.scenarioEditor) els.scenarioEditor.value = JSON.stringify(state.scenario, null, 2);
    renderAnswerKey();
    els.teacherDialog.showModal();
  });
  if (els.applyScenario) if (els.applyScenario) if (els.applyScenario) if (els.applyScenario) els.applyScenario.addEventListener("click", applyScenarioJson);
  if (els.copyTemplate) if (els.copyTemplate) if (els.copyTemplate) if (els.copyTemplate) els.copyTemplate.addEventListener("click", () => {
    els.scenarioEditor.value = JSON.stringify(emptyTemplate(), null, 2);
  });
}

renderScenarioOptions();
bindEvents();
loadScenario(builtInScenarios[0].id);
setInterval(refreshLiveTimes, 30000);
