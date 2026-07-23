/**
 * 作曲作品
 *
 * 描述字段包含 zh / en。音频放在 public/compositions/
 */

import type { Composition } from "@/types/content";

export const compositions: Composition[] = [
  {
    id: "lamentation-et-triomphe",
    title: "Lamentation et triomphe",
    description: {
      zh: "当时本人迷上了原神，发现原神音乐颇为好听的一首战斗曲，遂花了 4 个月的时间把它改编成了弦乐四重奏。",
      en: "I was deep into Genshin Impact and loved one of its battle tracks, so I spent four months arranging it for string quartet.",
    },
    audioSrc: "/compositions/lamentation-et-triomphe.mp3",
  },
  {
    id: "trifles-in-yunnan",
    title: "Trifles in Yunnan",
    description: {
      zh: "作者在上 IB Music 的时候写的曲子，是当时最满意的一首曲子了。作为一个非音乐专业的学生来说，真的很高兴能在 IB Music 学到这么多好玩的作曲内容。在高中的时候，我最喜欢的就是 Music HL，因为我觉得我碰到了一生中难得的好老师 Alex。我真的很喜欢这位老师，从他的课堂里我真的能看到他在音乐教育上的热情和对学生的耐心。虽然毕业以后再也没见过他，他去别的学校教书了，但我真的很想念这位老师。",
      en: "Written during IB Music — my favorite piece from that time. As a non-music major, I loved how much playful composition the course opened up. Music HL was my favorite class in high school, largely because of Alex, a rare kind of teacher: passionate about music education and endlessly patient. I have not seen him since graduation — he moved to another school — but I still miss him.",
    },
    audioSrc: "/compositions/trifles-in-yunnan.mp3",
  },
  {
    id: "ewm-final",
    title: "EWM Final",
    description: {
      zh: "也是作者在上 IB Music 时写的曲子，请听前半段就好了（前四分钟）。课上要求用三种音乐类型对一首曲子进行改编，我就选了 Ed Sheeran 的 Shivers。我感觉我写这种乐队编制的 genre 写的要比那些钢琴好多了哈哈哈哈哈哈哈。",
      en: "Also from IB Music — the first half is enough (about four minutes). The assignment was to rework one song in three styles; I chose Ed Sheeran's Shivers. I think I write better in this band-oriented genre than for piano, honestly.",
    },
    audioSrc: "/compositions/ewm-final.mp3",
  },
];
