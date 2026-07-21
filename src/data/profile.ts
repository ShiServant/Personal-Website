/**
 * 个人介绍与联系方式
 *
 * 修改方式：
 * - 直接编辑下方字段即可更新主页 Hero 与联系方式
 * - 修改 socialLinks 数组来增删社交链接
 * - 删除某条链接：从 socialLinks 中移除对应对象
 */

import type { Profile, SocialLink } from "@/types/content";

export const profile: Profile = {
  name: "Kevin",
  tagline: "一名正在学习、创造和记录生活的学生。",
  description:
    "这里会分享我的作品、人生经历、文字和喜欢的音乐。",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
  },
  {
    label: "邮箱",
    href: "mailto:hello@example.com",
  },
];
