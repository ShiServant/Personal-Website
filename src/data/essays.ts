/**
 * 随笔数据
 *
 * 修改方式：
 * - 新增文章：在数组开头添加对象，设置唯一 slug
 * - 删除文章：从数组中移除对应对象
 * - 调整顺序：移动数组中的对象（列表按数组顺序显示）
 * - 主页展示：设置 featured: true
 * - 暂时隐藏：从数组中移除即可
 *
 * content 字段支持简单段落，用空行分隔段落
 * 读书笔记见 book-essays.ts
 */

import type { Essay } from "@/types/content";
import { bookEssays } from "@/data/book-essays";

const otherEssays: Essay[] = [
  {
    slug: "first-essay",
    title: "关于开始记录这件事",
    date: "2025-06-15",
    summary: "写下第一段文字时，往往比想象中更难，但也更值得。",
    tags: ["思考", "生活"],
    featured: true,
    content: `开始记录，并不是因为生活突然变得精彩，而是因为我想留住那些容易被遗忘的瞬间。

有时候是一句话，有时候是一个画面，有时候只是一种模糊的感受。把它们写下来，就像给时间留了一个小小的锚点。

这大概就是我写随笔的原因。`,
  },
  {
    slug: "quiet-morning",
    title: "安静的早晨",
    date: "2025-05-02",
    summary: "清晨的光线、杯中的热饮，以及不着急开始的某一天。",
    tags: ["日常"],
    featured: true,
    content: `有些早晨不需要计划。阳光慢慢铺满桌面，世界好像也放慢了节奏。

这样的时刻不多，但每次遇到，都会提醒自己：生活不只有效率和目标，还有这些安静而真实的片段。`,
  },
  {
    slug: "learning-by-doing",
    title: "在做中学",
    date: "2025-03-20",
    summary: "比起等待完美的准备，我更相信从一个小项目开始。",
    tags: ["学习", "创作"],
    featured: false,
    content: `学习的过程中，我越来越相信"做中学"的力量。

不必等到一切就绪，先动手，再调整。每一个不完美的尝试，都是下一步的基础。`,
  },
];

export const essays: Essay[] = [...bookEssays, ...otherEssays];
