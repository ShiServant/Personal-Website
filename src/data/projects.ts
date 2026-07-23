/**
 * 作品数据
 *
 * 每个文案字段包含 zh / en。主页精选：设置 featured: true
 */

import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "project-1",
    title: { zh: "个人笔记应用", en: "Personal Notes App" },
    description: {
      zh: "一个简洁的本地笔记工具，专注于写作体验与快速记录。",
      en: "A simple local notes tool focused on writing feel and quick capture.",
    },
    year: 2025,
    category: { zh: "工具", en: "Tool" },
    featured: true,
  },
  {
    id: "project-2",
    title: { zh: "校园摄影集", en: "Campus Photo Series" },
    description: {
      zh: "记录校园日常的光影瞬间，以网页相册形式呈现。",
      en: "Everyday campus light and shadow, presented as a web gallery.",
    },
    year: 2024,
    category: { zh: "摄影", en: "Photography" },
    href: "https://example.com",
    featured: true,
  },
  {
    id: "project-3",
    title: {
      zh: "课程项目：数据可视化",
      en: "Course Project: Data Visualization",
    },
    description: {
      zh: "将公开数据集转化为可交互图表，探索信息呈现方式。",
      en: "Turning public datasets into interactive charts to explore presentation.",
    },
    year: 2024,
    category: { zh: "学术", en: "Academic" },
    featured: false,
  },
];
