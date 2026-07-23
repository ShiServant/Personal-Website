/**
 * 随笔数据
 *
 * 每个文案字段包含 zh / en。读书笔记见 book-essays.ts
 */

import type { Essay } from "@/types/content";
import { bookEssays } from "@/data/book-essays";

const otherEssays: Essay[] = [
  {
    slug: "first-essay",
    title: {
      zh: "关于开始记录这件事",
      en: "On Beginning to Keep Notes",
    },
    date: "2025-06-15",
    summary: {
      zh: "写下第一段文字时，往往比想象中更难，但也更值得。",
      en: "The first paragraph is harder than it looks — and more worth it.",
    },
    tags: [
      { zh: "思考", en: "Thought" },
      { zh: "生活", en: "Life" },
    ],
    featured: true,
    content: {
      zh: `开始记录，并不是因为生活突然变得精彩，而是因为我想留住那些容易被遗忘的瞬间。

有时候是一句话，有时候是一个画面，有时候只是一种模糊的感受。把它们写下来，就像给时间留了一个小小的锚点。

这大概就是我写随笔的原因。`,
      en: `I did not start writing because life suddenly became exciting. I started because I wanted to keep the moments that slip away.

Sometimes it is a sentence, sometimes an image, sometimes only a blurry feeling. Writing it down is a small anchor in time.

That is roughly why I keep these notes.`,
    },
  },
  {
    slug: "quiet-morning",
    title: { zh: "安静的早晨", en: "A Quiet Morning" },
    date: "2025-05-02",
    summary: {
      zh: "清晨的光线、杯中的热饮，以及不着急开始的某一天。",
      en: "Morning light, a warm drink, and a day that does not rush.",
    },
    tags: [{ zh: "日常", en: "Everyday" }],
    featured: true,
    content: {
      zh: `有些早晨不需要计划。阳光慢慢铺满桌面，世界好像也放慢了节奏。

这样的时刻不多，但每次遇到，都会提醒自己：生活不只有效率和目标，还有这些安静而真实的片段。`,
      en: `Some mornings need no plan. Light fills the desk, and the world seems to slow.

Moments like this are rare, but they remind me: life is not only efficiency and goals. It also has these quiet, real fragments.`,
    },
  },
  {
    slug: "learning-by-doing",
    title: { zh: "在做中学", en: "Learning by Doing" },
    date: "2025-03-20",
    summary: {
      zh: "比起等待完美的准备，我更相信从一个小项目开始。",
      en: "Rather than waiting for perfect preparation, I trust starting small.",
    },
    tags: [
      { zh: "学习", en: "Learning" },
      { zh: "创作", en: "Making" },
    ],
    featured: false,
    content: {
      zh: `学习的过程中，我越来越相信"做中学"的力量。

不必等到一切就绪，先动手，再调整。每一个不完美的尝试，都是下一步的基础。`,
      en: `The more I learn, the more I trust learning by doing.

You do not have to wait until everything is ready. Start, then adjust. Every imperfect try becomes the ground for the next step.`,
    },
  },
];

export const essays: Essay[] = [...bookEssays, ...otherEssays];
