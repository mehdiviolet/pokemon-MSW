// src/mocks/mockData.js
import type { PokemonDetail, PokemonListItem } from "../types/Pokemon";

// 1. Dati per la LISTA (Array)
export const mockItems: PokemonListItem[] = [
  {
    id: "psyduck",
    name: "Psyduck",
    short_description: "Usare i suoi poteri gli causa mal di testa...",
    image_url: "/assets/images/source1.png",
  },
  {
    id: "sprigatito",
    name: "Sprigatito",
    short_description: "Sprigatito è un germoglio con le fusa...",
    image_url: "/assets/images/source2.png",
  },
  {
    id: "snorlax",
    name: "Snorlax",
    short_description: "Il gigante pigro del Pokémon...",
    image_url: "/assets/images/source4.png",
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
      "<p>Usare i suoi poteri gli causa mal di testa...testa...testa...</p>",
    long_description:
      "<p>Psyduck vive in uno stato di confusione perenne...</p><ul><li>Il suo superpotere? L'emicrania.</li><li>Il dramma: si dimentica tutto.</li></ul>",
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
    extra_details: "/assets/extra_details.png",
    image_url: "/assets/images/source1.png",
  },
];
