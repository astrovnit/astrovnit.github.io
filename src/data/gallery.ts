import { img } from "./images";
import type { GalleryItem } from "./types";

/**
 * PLACEHOLDER GALLERY.
 * These are illustrative visuals, not photographs taken by AAC members.
 * Replace image, title, photographer, date and description with real archive entries.
 */
export const gallery: GalleryItem[] = [
  {
    id: "g-pench",
    title: "Pench Tiger Reserve",
    category: "Astrophotography",
    photographer: "AAC",
    date: "2026-09-15",
    description: "Pench Tiger Reserve",
    image: img.penchTigerReserve,
    placeholder: false,
  },
  {
    id: "g-kartik-swami",
    title: "Kartik Swami Temple, Kanakchauri, Rudraprayag",
    category: "Astrophotography",
    photographer: "AAC",
    date: "2026-09-15",
    description: "Kartik Swami Temple, Kanakchauri, Rudraprayag",
    image: img.kartikSwamiTemple,
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
