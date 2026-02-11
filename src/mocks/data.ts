// src/mocks/mockData.js
import type { PokemonDetail, PokemonListItem } from "../types/Pokemon";

// 1. Dati per la LISTA (Array)
export const mockItems: PokemonListItem[] = [
  {
    id: "psyduck",
    name: "Psyduck",
    short_description:
      "Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare.",
    image_url: "/assets/images/source1.png",
  },
  {
    id: "sprigatito",
    name: "Sprigatito",
    short_description: "Sprigatito vive per un solo scopo: essere adorato.",
    image_url: "/assets/images/source2.png",
  },
  {
    id: "snorlax",
    name: "Snorlax",
    short_description: "Il gigante pigro del Pokémon...",
    image_url: "/assets/images/source3.png",
  },
  {
    id: "fuecoco",
    name: "Fuecoco",
    short_description:
      "Coccodrillo pigro con scaglie rosse. Il suo carattere rilassato lo fa sembrare un po’ assente.",
    image_url: "/assets/images/source4.png",
  },
  {
    id: "magikarp",
    name: "Magikarp",
    short_description:
      "È universalmente noto come il Pokémon più inutile al mondo. È incapace di combattere.",
    image_url: "/assets/images/source5.png",
  },
  {
    id: "diglett",
    name: "Diglett",
    short_description:
      "Di lui emerge solo la testa tonda con il naso rosa; nessuno ha mai visto il resto del suo corpo.",
    image_url: "/assets/images/source6.jpg",
  },
];

// 2. DETTAGLIO (Array di oggetti)
export const mockItemDetails: PokemonDetail[] = [
  {
    id: "psyduck",
    name: "Psyduck",
    subtitle: "Il Re dello Stress 🦆💥",
    card_number: "054",
    level: 15,
    health_points: 100,
    rarity: "pokèmon_base",
    short_description:
      "<p>Usare i suoi poteri gli causa mal di testa, per questo passa il tempo cercando di non pensare. </p>",
    long_description:
      '<p>Psyduck vive in uno stato di confusione perenne. Praticamente è il simbolo universale del "non ho capito la domanda".</p><ul><li>Il suo superpotere? L\'emicrania. Più gli scoppia la testa, più diventa un dio dei poteri psichici.</li><li>Il dramma: Appena finisce di lanciare attacchi devastanti, si dimentica tutto e torna a fissare il vuoto come se non fosse successo nulla.</li></ul><p>In breve: vive con le mani sulle tempie, non sa dove si trova, ma se lo fai arrabbiare ti sposta le montagne con il pensiero. Un eroe moderno.</p>',
    typology: {
      name: "acqua",
      icon_url: "/icons/water_drop.svg",
      icon_name: "water_drop",
    },
    energy: {
      name: "stella",
      icon_url: "/icons/star.svg",
    },
    vulnerability: {
      icon_url: "/icons/electric.svg",
      value: -20,
    },
    extra_details: "/assets/images/extra_details.png",
    image_url: "/assets/images/source1.png",
  },

  {
    id: "sprigatito",
    name: "Sprigatito",
    subtitle: "La Divinità delle Coccole 🌿🐱",
    card_number: "906",
    level: 12,
    health_points: 90,
    rarity: "pokèmon_base",
    short_description:
      "<p>Sprigatito è un germoglio con le fusa che rilascia un profumo inebriante quando è felice.</p>",
    long_description:
      "<p>Sprigatito è letteralmente un gatto fatto d'erba che profuma di ammorbidente. È carino, soffice e assolutamente dispotico riguardo alle attenzioni.</p><ul><li>Il suo superpotere? L'aromaterapia coercitiva. Strofina le zampe e rilascia un profumo che ti ipnotizza, costringendoti a smettere di combattere.</li><li>Il dramma: La gelosia patologica. Se osi guardare un altro Pokémon per più di tre secondi, lui mette il broncio e smette di fotosintetizzare per ripicca.</li></ul><p>In breve: una pianta d'appartamento che miagola, esige gratificazioni costanti e ti giudica se non lo accarezzi abbastanza.</p>",
    typology: {
      name: "erba",
      icon_url: "/icons/eco.svg",
      icon_name: "grass",
    },
    energy: {
      name: "stella",
      icon_url: "/icons/star.svg",
    },
    vulnerability: {
      icon_url: "/icons/eco.svg",
      value: -20,
    },
    extra_details: "/assets/images/extra_details.png",
    image_url: "/assets/images/source2.png",
  },
  {
    id: "snorlax",
    name: "Snorlax",
    subtitle: "Il Sommo Dormiglione 💤🍕",
    card_number: "143",
    level: 40,
    health_points: 160,
    rarity: "pokèmon_base",
    short_description:
      "<p>Il gigante pigro del Pokémon che si sveglia solo per mangiare (tanto) e bloccare il traffico.</p>",
    long_description:
      "<p>Snorlax non è un semplice Pokémon, è uno stile di vita a cui tutti aspiriamo. La sua giornata tipo consiste nel mangiare 400 kg di cibo e poi svenire.</p><ul><li>Il suo superpotere? Diventare un blocco stradale inamovibile. Non importa quanto suoni il clacson, se non hai un flauto magico, stacci.</li><li>Il dramma: Il suo stomaco è così potente che può digerire cibo scaduto, muffa e veleno. Il vero problema è il conto della spesa.</li></ul><p>In breve: un cuscino gigante che russa come un trattore e possiede la massa critica di un piccolo pianeta.</p>",
    typology: {
      name: "neutro",
      icon_url: "/icons/star.svg",
      icon_name: "neutro",
    },
    energy: {
      name: "stella",
      icon_url: "/icons/star.svg",
    },
    vulnerability: {
      icon_url: "/icons/fighting.svg",
      value: -30,
    },
    extra_details: "/assets/images/extra_details.png",
    image_url: "/assets/images/source3.png",
  },
  {
    id: "fuecoco",
    name: "Fuecoco",
    subtitle: "Testa Vuota, Cuore Caldo 🌶️🐊",
    card_number: "909",
    level: 14,
    health_points: 80,
    rarity: "pokèmon_base",
    short_description:
      "<p>Coccodrillo pigro con scaglie rosse. Il suo carattere rilassato lo fa sembrare costantemente in buffering.</p>",
    long_description:
      "<p>Guardalo negli occhi: non c'è assolutamente nulla dietro. Fuecoco vive nel momento, specialmente se quel momento include del cibo piccante.</p><ul><li>Il suo superpotere? L'incoscienza beata. Potrebbe esserci l'apocalisse intorno a lui, ma se vede una mela, lui sorride e cammina verso la mela.</li><li>Il dramma: L'energia in eccesso gli esce sotto forma di fuoco dalla testa. Se si emoziona troppo, rischi di trovarti i capelli bruciacchiati.</li></ul><p>In breve: un tostapane a forma di coccodrillo con un unico neurone che rimbalza nella testa come il salvaschermo di un DVD.</p>",
    typology: {
      name: "fuoco",
      icon_url: "/icons/local_fire_department.svg",
      icon_name: "fire",
    },
    energy: {
      name: "stella",
      icon_url: "/icons/star.svg",
    },
    vulnerability: {
      icon_url: "/icons/water_drop.svg",
      value: -20,
    },
    extra_details: "/assets/images/extra_details.png",
    image_url: "/assets/images/source4.png",
  },
];
