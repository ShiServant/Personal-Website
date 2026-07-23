/**
 * 音乐数据（喜欢的音乐）
 *
 * 每个文案字段包含 zh / en。type: song | album | playlist
 */

import type { MusicItem } from "@/types/content";

export const musicItems: MusicItem[] = [
  {
    id: "music-1",
    title: { zh: "Mystery of Love", en: "Mystery of Love" },
    artist: { zh: "Sufjan Stevens", en: "Sufjan Stevens" },
    type: "song",
    note: {
      zh: "温柔而克制的旋律，适合安静阅读时聆听。",
      en: "Gentle and restrained — good company for quiet reading.",
    },
    year: 2017,
    href: "https://open.spotify.com",
  },
  {
    id: "music-2",
    title: { zh: "Blonde", en: "Blonde" },
    artist: { zh: "Frank Ocean", en: "Frank Ocean" },
    type: "album",
    note: {
      zh: "一张需要慢慢品味的专辑，每次听都有不同感受。",
      en: "An album to sit with — it lands differently each listen.",
    },
    year: 2016,
    href: "https://open.spotify.com",
  },
  {
    id: "music-3",
    title: { zh: "深夜阅读歌单", en: "Late-Night Reading Playlist" },
    artist: { zh: "自建歌单", en: "Personal playlist" },
    type: "playlist",
    note: {
      zh: "收录了一些适合深夜独处的曲目。",
      en: "A handful of tracks for late-night solitude.",
    },
  },
];
