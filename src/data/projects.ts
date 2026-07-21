/**
 * 作品数据
 *
 * 修改方式：
 * - 新增作品：在数组末尾添加对象，设置唯一 id
 * - 删除作品：从数组中移除对应对象
 * - 调整顺序：移动数组中的对象位置
 * - 主页精选：设置 featured: true（主页只显示 featured 作品）
 * - 暂时隐藏：从数组中移除，或取消 featured
 *
 * 可选字段 image、href 不存在时，组件会自动省略对应元素
 */

import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "个人笔记应用",
    description: "一个简洁的本地笔记工具，专注于写作体验与快速记录。",
    year: 2025,
    category: "工具",
    featured: true,
  },
  {
    id: "project-2",
    title: "校园摄影集",
    description: "记录校园日常的光影瞬间，以网页相册形式呈现。",
    year: 2024,
    category: "摄影",
    href: "https://example.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "课程项目：数据可视化",
    description: "将公开数据集转化为可交互图表，探索信息呈现方式。",
    year: 2024,
    category: "学术",
    featured: false,
  },
];
