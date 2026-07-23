/**
 * 个人介绍与联系方式
 *
 * 修改方式：
 * - 直接编辑下方字段即可更新主页 Hero 与联系方式
 * - 每个文案字段包含 zh / en 两种语言
 * - 修改 socialLinks 数组来增删社交链接
 */

import type { Profile, SocialLink } from "@/types/content";

export const profile: Profile = {
  name: "Kevin",
  tagline: {
    zh: "一名正在学习、创造和记录生活的学生。",
    en: "A student who is learning, creating, and keeping notes on life.",
  },
  description: {
    zh: "这里会分享我的作品、人生经历、文字和喜欢的音乐。",
    en: "Here I share projects, life stories, writing, and music I love.",
  },
};

export const socialLinks: SocialLink[] = [
  {
    label: { zh: "GitHub", en: "GitHub" },
    href: "https://github.com",
  },
  {
    label: { zh: "邮箱", en: "Email" },
    href: "mailto:hello@example.com",
  },
];
