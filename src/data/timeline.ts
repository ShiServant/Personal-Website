/**
 * 人生轨迹数据
 *
 * 每个文案字段包含 zh / en。页面按数组顺序渲染。
 */

import type { TimelineEntry } from "@/types/content";

export const timelineEntries: TimelineEntry[] = [
  {
    id: "timeline-1",
    date: "2025",
    title: {
      zh: "开始搭建个人网站",
      en: "Started building this personal site",
    },
    description: {
      zh: "希望有一个安静的地方，记录学习、创作与生活的片段。",
      en: "Wanted a quiet place to keep fragments of learning, making, and living.",
    },
  },
  {
    id: "timeline-2",
    date: "2024",
    title: {
      zh: "第一次独立完成完整项目",
      en: "Finished a full project on my own for the first time",
    },
    description: {
      zh: "从构思到上线，完整经历了一个小型 Web 应用的开发过程。",
      en: "From idea to launch — a complete small web app, end to end.",
    },
    location: { zh: "学校", en: "School" },
  },
  {
    id: "timeline-3",
    date: "2023",
    title: {
      zh: "开始系统学习编程",
      en: "Began learning programming seriously",
    },
    description: {
      zh: "从基础语法到小型项目，慢慢建立起对技术的兴趣。",
      en: "From basics to small projects, interest in technology grew steadily.",
    },
    location: { zh: "家乡", en: "Hometown" },
  },
];
