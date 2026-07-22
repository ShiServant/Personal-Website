export interface Profile {
  name: string;
  tagline: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  category: string;
  image?: string;
  href?: string;
  featured?: boolean;
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  location?: string;
  image?: string;
  href?: string;
}

export interface Essay {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  content: string;
  downloadHref?: string;
}

export interface Composition {
  id: string;
  title: string;
  description: string;
  audioSrc: string;
  year?: number;
}

export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  type: "song" | "album" | "playlist";
  cover?: string;
  note?: string;
  year?: number;
  href?: string;
}
