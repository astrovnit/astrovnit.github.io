/**
 * Content models. Local data today; the same shapes can be served
 * from a CMS or database later without changing any UI component.
 */

export type EventCategory =
  | "Stargazing"
  | "Workshop"
  | "Talk"
  | "Competition"
  | "Outreach"
  | "Astrophotography"
  | "Space Technology"
  | "Other";

export type EventStatus = "upcoming" | "ongoing" | "past";

export interface AacEvent {
  slug: string;
  title: string;
  category: EventCategory;
  status: EventStatus;
  date: string; // ISO date
  time: string;
  venue: string;
  excerpt: string;
  description: string[];
  speakers?: { name: string; affiliation: string }[];
  registrationUrl?: string;
  report?: string;
  gallery?: string[];
  related?: { label: string; to: string }[];
  image: string;
  placeholder: boolean;
}

export type ProjectCategory =
  | "Computational"
  | "Astrophysics"
  | "Cosmology"
  | "Observational"
  | "Astrophotography"
  | "Rocketry"
  | "Space Technology";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  excerpt: string;
  objective: string;
  methodology: string[];
  results: string;
  tools: string[];
  members?: string[];
  mentor?: string;
  githubUrl?: string;
  reportUrl?: string;
  image: string;
  placeholder: boolean;
}

export type BlogCategory =
  | "Astronomy"
  | "Astrophysics"
  | "Cosmology"
  | "Space Science"
  | "Observational Astronomy"
  | "Astrophotography"
  | "Space Technology"
  | "Research"
  | "Beginner's Guide"
  | "Club Updates";

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  author: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: { heading?: string; paragraphs: string[] }[];
  image: string;
  placeholder: boolean;
}

export type TeamGroup = "core" | "domain" | "alumni";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: TeamGroup;
  domain?: string;
  batch: string;
  department: string;
  bio: string;
  links?: { label: string; href: string }[];
  placeholder: boolean;
}

export type GalleryCategory = "Astrophotography" | "Events" | "Stargazing" | "Projects" | "Team";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  photographer: string;
  date: string;
  description: string;
  image: string;
  placeholder: boolean;
  event?: string;
  location?: string;
}
