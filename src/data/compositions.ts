/**
 * 作曲作品
 *
 * 修改方式：
 * - 新增作品：在数组中添加对象，并将 mp3 放入 public/compositions/
 * - 删除作品：从数组中移除，并删除对应音频文件
 * - 调整顺序：移动数组中的对象位置
 * - 描述文字：直接编辑 description 字段
 *
 * audioSrc 填写 public/compositions/ 下的路径，例如 /compositions/example.mp3
 */

import type { Composition } from "@/types/content";

export const compositions: Composition[] = [
  {
    id: "lamentation-et-triomphe",
    title: "Lamentation et triomphe",
    description:
      "当时本人迷上了原神，发现原神音乐颇为好听的一首战斗曲，遂花了 4 个月的时间把它改编成了弦乐四重奏。",
    audioSrc: "/compositions/lamentation-et-triomphe.mp3",
  },
  {
    id: "trifles-in-yunnan",
    title: "Trifles in Yunnan",
    description:
      "作者在上 IB Music 的时候写的曲子，是当时最满意的一首曲子了。作为一个非音乐专业的学生来说，真的很高兴能在 IB Music 学到这么多好玩的作曲内容。在高中的时候，我最喜欢的就是 Music HL，因为我觉得我碰到了一生中难得的好老师 Alex。我真的很喜欢这位老师，从他的课堂里我真的能看到他在音乐教育上的热情和对学生的耐心。虽然毕业以后再也没见过他，他去别的学校教书了，但我真的很想念这位老师。",
    audioSrc: "/compositions/trifles-in-yunnan.mp3",
  },
  {
    id: "ewm-final",
    title: "EWM Final",
    description:
      "也是作者在上 IB Music 时写的曲子，请听前半段就好了（前四分钟）。课上要求用三种音乐类型对一首曲子进行改编，我就选了 Ed Sheeran 的 Shivers。我感觉我写这种乐队编制的 genre 写的要比那些钢琴好多了哈哈哈哈哈哈哈。",
    audioSrc: "/compositions/ewm-final.mp3",
  },
];
