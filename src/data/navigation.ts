/**
 * 站点导航
 *
 * 修改方式：
 * - 增删导航项：编辑 navItems 数组
 * - 调整顺序：移动数组中的对象位置
 */

import type { NavItem } from "@/types/content";

export const navItems: NavItem[] = [
  { label: "主页", href: "/" },
  { label: "人生轨迹", href: "/timeline" },
  { label: "随笔", href: "/essays" },
  { label: "音乐", href: "/music" },
];
