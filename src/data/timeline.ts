/**
 * 人生轨迹数据
 *
 * 修改方式：
 * - 新增节点：在数组中添加对象，设置唯一 id
 * - 删除节点：从数组中移除对应对象
 * - 调整顺序：按时间先后排列（页面会按数组顺序渲染）
 * - 暂时隐藏：从数组中移除即可
 *
 * 可选字段 location、image、href 不存在时，组件会自动省略
 */

import type { TimelineEntry } from "@/types/content";

export const timelineEntries: TimelineEntry[] = [
  {
    id: "timeline-1",
    date: "2025",
    title: "开始搭建个人网站",
    description: "希望有一个安静的地方，记录学习、创作与生活的片段。",
  },
  {
    id: "timeline-2",
    date: "2024",
    title: "第一次独立完成完整项目",
    description: "从构思到上线，完整经历了一个小型 Web 应用的开发过程。",
    location: "学校",
  },
  {
    id: "timeline-3",
    date: "2023",
    title: "开始系统学习编程",
    description: "从基础语法到小型项目，慢慢建立起对技术的兴趣。",
    location: "家乡",
  },
];
