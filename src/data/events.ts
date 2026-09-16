import { img } from "./images";
import type { AacEvent } from "./types";

export const events: AacEvent[] = [
  {
    slug: "sophomore-2nd-years-orientation",
    title: "Sophomore 2nd Years' Orientation",
    category: "Outreach",
    status: "upcoming",
    date: "2026-09-18",
    displayDate: "18th September 2026 (Friday)",
    time: "6:30 PM onwards",
    venue: "CRC 6-1",
    organizedBy: "Ashlesha Astronomy Club",
    excerpt:
      "Join Ashlesha Astronomy Club for the Sophomore 2nd Years' Orientation and begin an exciting journey beyond the stars!",
    description: [
      "Ready to explore the cosmos? ✨",
      "Join Ashlesha Astronomy Club for the Sophomore 2nd Years' Orientation and begin an exciting journey beyond the stars! 🌠",
      "🔭 Telescope & Drone Display\n🌌 Meet fellow astronomy enthusiasts\n🚀 Discover what’s waiting for you in the universe",
      "📅 18th September 2026 (Friday)\n⏰ 6:30 PM onwards\n📍 CRC 6-1",
      "Stay updated by joining our WhatsApp group:\nhttps://chat.whatsapp.com/Edppl7d6B364MBYQ5k6k2a?s=cl&p=a&mlu=4&ilr=4",
      "Come curious, leave inspired. The cosmos awaits! 🌙✨",
    ],
    registrationUrl:
      "https://chat.whatsapp.com/Edppl7d6B364MBYQ5k6k2a?s=cl&p=a&mlu=4&ilr=4",
    image: img.orientationEvent,
    placeholder: false,
  },
];

export const eventCategories = [
  "Outreach",
  "Stargazing",
  "Workshop",
  "Talk",
  "Competition",
  "Astrophotography",
  "Space Technology",
  "Other",
] as const;

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
