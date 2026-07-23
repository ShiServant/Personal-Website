import type { LocalizedString } from "@/i18n/localized";

export interface Profile {
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
}

export interface SocialLink {
  label: LocalizedString;
  href: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  year: number;
  category: LocalizedString;
  image?: string;
  href?: string;
  featured?: boolean;
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: LocalizedString;
  description: LocalizedString;
  location?: LocalizedString;
  image?: string;
  href?: string;
}

export interface Essay {
  slug: string;
  title: LocalizedString;
  date: string;
  summary: LocalizedString;
  tags: LocalizedString[];
  featured?: boolean;
  /** 若缺少 en，英文站显示中文原文并提示 */
  content: LocalizedString;
  downloadHref?: string;
}

export interface Composition {
  id: string;
  title: string;
  description: LocalizedString;
  audioSrc: string;
  year?: number;
}

export interface MusicItem {
  id: string;
  title: LocalizedString;
  artist: LocalizedString;
  type: "song" | "album" | "playlist";
  cover?: string;
  note?: LocalizedString;
  year?: number;
  href?: string;
}
