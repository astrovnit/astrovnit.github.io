import { img } from "./images";
import type { GalleryItem } from "./types";

/**
 * PLACEHOLDER GALLERY.
 * These are illustrative visuals, not photographs taken by AAC members.
 * Replace image, title, photographer, date and description with real archive entries.
 */
export const gallery: GalleryItem[] = [
  // GROUP 1 — LEOBAN, AUSTRIA
  {
    id: "sarthak1",
    title: "Leoban, Austria",
    category: "Astrophotography",
    location: "Leoban, Austria",
    photographer: "Sarthak Bondre",
    date: "2026-09-15",
    description: "Leoban, Austria",
    image: img.gallery.sarthak1,
    placeholder: false,
  },
  {
    id: "sarthak2",
    title: "Leoban, Austria",
    category: "Astrophotography",
    location: "Leoban, Austria",
    photographer: "Sarthak Bondre",
    date: "2026-09-15",
    description: "Leoban, Austria",
    image: img.gallery.sarthak2,
    placeholder: false,
  },
  {
    id: "sarthak3",
    title: "Leoban, Austria",
    category: "Astrophotography",
    location: "Leoban, Austria",
    photographer: "Sarthak Bondre",
    date: "2026-09-15",
    description: "Leoban, Austria",
    image: img.gallery.sarthak3,
    placeholder: false,
  },

  // GROUP 2 — PENCH TIGER RESERVE
  {
    id: "pench1",
    title: "Pench Tiger Reserve",
    category: "Astrophotography",
    location: "Pench Tiger Reserve",
    photographer: "Sarthak Bondre",
    date: "2026-09-15",
    description: "Pench Tiger Reserve",
    image: img.gallery.pench1,
    placeholder: false,
  },
  {
    id: "pench2",
    title: "Pench Tiger Reserve",
    category: "Astrophotography",
    location: "Pench Tiger Reserve",
    photographer: "Sarthak Bondre",
    date: "2026-09-15",
    description: "Pench Tiger Reserve",
    image: img.gallery.pench2,
    placeholder: false,
  },

  // GROUP 3 — KARTIK SWAMI TEMPLE
  {
    id: "temple",
    title: "Kartik Swami Temple, Kanakchauri, Rudraprayag",
    category: "Astrophotography",
    location: "This was from Kartik Swami Temple, Kanakchauri, Rudraprayag",
    photographer: "Sarthak Bondre",
    date: "2026-09-15",
    description: "This was from Kartik Swami Temple, Kanakchauri, Rudraprayag",
    image: img.gallery.temple,
    placeholder: false,
  },

  // GROUP 4 — NANEGAHT, PUNE
  {
    id: "arnav",
    title: "Naneghat, Pune",
    category: "Astrophotography",
    location: "This was captured at Naneghat, Pune",
    photographer: "Arnav Meshram",
    date: "2026-09-15",
    description: "This was captured at Naneghat, Pune",
    image: img.gallery.arnav,
    placeholder: false,
  },

  // GROUP 5 — STARGAZING 26
  {
    id: "sg1",
    title: "Stargazing 26",
    event: "Stargazing 26",
    location: "VNIT Nagpur",
    photographer: "AAC",
    category: "Stargazing",
    date: "2026-09-15",
    description: "Stargazing 26 observation session at VNIT Nagpur",
    image: img.gallery.sg1,
    placeholder: false,
  },
  {
    id: "sg2",
    title: "Stargazing 26",
    event: "Stargazing 26",
    location: "VNIT Nagpur",
    photographer: "AAC",
    category: "Stargazing",
    date: "2026-09-15",
    description: "Stargazing 26 observation session at VNIT Nagpur",
    image: img.gallery.sg2,
    placeholder: false,
  },
  {
    id: "sg3",
    title: "Stargazing 26",
    event: "Stargazing 26",
    location: "VNIT Nagpur",
    photographer: "AAC",
    category: "Stargazing",
    date: "2026-09-15",
    description: "Stargazing 26 observation session at VNIT Nagpur",
    image: img.gallery.sg3,
    placeholder: false,
  },
  {
    id: "sg4",
    title: "Stargazing 26",
    event: "Stargazing 26",
    location: "VNIT Nagpur",
    photographer: "AAC",
    category: "Stargazing",
    date: "2026-09-15",
    description: "Stargazing 26 observation session at VNIT Nagpur",
    image: img.gallery.sg4,
    placeholder: false,
  },
];

export const galleryCategories = [
  "Astrophotography",
  "Events",
  "Stargazing",
  "Projects",
  "Team",
] as const;
