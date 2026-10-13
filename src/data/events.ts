import { img } from "./images";
import type { AacEvent } from "./types";

export const events: AacEvent[] = [
  {
    slug: "first-years-orientation",
    title: "First Years' Orientation",
    category: "Outreach",
    status: "upcoming",
    date: "2026-10-17",
    displayDate: "17th October 2026 (Saturday)",
    time: "6:30 PM onwards",
    venue: "CRC 6-1",
    organizedBy: "Ashlesha Astronomy Club",
    excerpt:
      "Join Ashlesha Astronomy Club for the First Years' Orientation and begin an exciting journey beyond the ordinary!",
    description: [
      "“That's one small step for a man, one giant leap for mankind.” ✨",
      "Curious about the cosmos? Join Ashlesha Astronomy Club for the First Years' Orientation and begin your journey beyond the ordinary! 🌠",
      "🔭 Telescope Showcase\n🛸 Drone Display\n🌌 Stellarium\n🔬 Research Projects",
      "📅 17th October 2026 (Saturday)\n⏰ 6:30 PM onwards\n📍 CRC 6-1",
      "Stay updated by joining our WhatsApp group:\nhttps://chat.whatsapp.com/I4XIwmUhjfk398Zct8LzBi?s=cl&p=a&mlu=4&ilr=4",
      "Come curious, leave inspired. The cosmos awaits! 🌙✨",
    ],
    registrationUrl:
      "https://chat.whatsapp.com/I4XIwmUhjfk398Zct8LzBi?s=cl&p=a&mlu=4&ilr=4",
    image: img.firstYearsOrientation,
    placeholder: false,
  },
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
