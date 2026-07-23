import type { Locale } from "@/i18n/config";

export type Dictionary = {
  meta: {
    titleDefault: string;
    titleTemplate: string;
    description: string;
  };
  nav: {
    home: string;
    timeline: string;
    essays: string;
    music: string;
    mainNav: string;
    mobileNav: string;
    homeAria: string;
  };
  header: {
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    tagline: string;
  };
  language: {
    switchToZh: string;
    switchToEn: string;
    label: string;
  };
  home: {
    featuredProjects: string;
    featuredProjectsDesc: string;
    recentEssays: string;
    viewAll: string;
    contact: string;
    contactDesc: string;
  };
  timeline: {
    title: string;
    metaDescription: string;
    intro: string;
    empty: string;
  };
  essays: {
    title: string;
    metaDescription: string;
    intro: string;
    empty: string;
    backToList: string;
    tags: string;
    downloadOriginal: string;
    notFound: string;
    originalLanguageNote: string;
  };
  music: {
    title: string;
    metaDescription: string;
    intro: string;
    empty: string;
    compositions: string;
    compositionsDesc: string;
    favorites: string;
  };
  project: {
    viewDetails: string;
  };
  timelineItem: {
    learnMore: string;
  };
  musicItem: {
    song: string;
    album: string;
    playlist: string;
    listen: string;
    coverAlt: string;
  };
  composition: {
    original: string;
    playAria: string;
    unsupported: string;
  };
  externalLink: {
    newWindow: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
};

const zh: Dictionary = {
  meta: {
    titleDefault: "Kevin · 个人网站",
    titleTemplate: "%s · Kevin",
    description: "Kevin 的个人网站，记录作品、人生轨迹、随笔与喜欢的音乐。",
  },
  nav: {
    home: "主页",
    timeline: "人生轨迹",
    essays: "随笔",
    music: "音乐",
    mainNav: "主导航",
    mobileNav: "移动端导航",
    homeAria: "主页",
  },
  header: {
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },
  footer: {
    tagline: "安静记录，慢慢生长",
  },
  language: {
    switchToZh: "中文",
    switchToEn: "EN",
    label: "切换语言",
  },
  home: {
    featuredProjects: "精选作品",
    featuredProjectsDesc: "一些正在做或已完成的项目。",
    recentEssays: "最近随笔",
    viewAll: "查看全部",
    contact: "联系方式",
    contactDesc: "如果想聊聊，欢迎通过这些方式联系我。",
  },
  timeline: {
    title: "人生轨迹",
    metaDescription: "记录人生中的重要时刻与经历。",
    intro: "一些值得记住的时刻，按时间顺序排列。",
    empty: "暂无轨迹记录。",
  },
  essays: {
    title: "随笔",
    metaDescription: "文字记录与日常思考。",
    intro: "一些文字记录，关于生活、学习与思考。",
    empty: "暂无随笔。",
    backToList: "← 返回随笔列表",
    tags: "标签",
    downloadOriginal: "下载 Word 原文",
    notFound: "文章未找到",
    originalLanguageNote: "本文以中文写就；以下为原文。",
  },
  music: {
    title: "音乐",
    metaDescription: "原创作曲与喜欢的音乐。",
    intro: "一些原创作曲，以及陪伴我阅读、写作和独处的音乐。",
    empty: "暂无音乐内容。",
    compositions: "我的作曲",
    compositionsDesc: "点击播放按钮即可在线试听，不会自动播放。",
    favorites: "喜欢的音乐",
  },
  project: {
    viewDetails: "查看详情 →",
  },
  timelineItem: {
    learnMore: "了解更多",
  },
  musicItem: {
    song: "歌曲",
    album: "专辑",
    playlist: "歌单",
    listen: "前往收听",
    coverAlt: "封面",
  },
  composition: {
    original: "原创",
    playAria: "播放",
    unsupported: "你的浏览器不支持音频播放。",
  },
  externalLink: {
    newWindow: "（在新窗口打开）",
  },
  notFound: {
    title: "页面未找到",
    description: "你访问的页面不存在。",
    backHome: "返回主页",
  },
};

const en: Dictionary = {
  meta: {
    titleDefault: "Kevin · Personal Site",
    titleTemplate: "%s · Kevin",
    description:
      "Kevin's personal site — projects, life timeline, essays, and music.",
  },
  nav: {
    home: "Home",
    timeline: "Timeline",
    essays: "Essays",
    music: "Music",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    homeAria: "Home",
  },
  header: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    tagline: "Quiet notes, growing slowly",
  },
  language: {
    switchToZh: "中文",
    switchToEn: "EN",
    label: "Switch language",
  },
  home: {
    featuredProjects: "Featured Projects",
    featuredProjectsDesc: "A few projects I am working on or have finished.",
    recentEssays: "Recent Essays",
    viewAll: "View all",
    contact: "Contact",
    contactDesc: "Feel free to reach out if you would like to talk.",
  },
  timeline: {
    title: "Timeline",
    metaDescription: "Moments and milestones along the way.",
    intro: "A few moments worth remembering, in chronological order.",
    empty: "No timeline entries yet.",
  },
  essays: {
    title: "Essays",
    metaDescription: "Writing and everyday reflections.",
    intro: "Notes on life, learning, and thinking.",
    empty: "No essays yet.",
    backToList: "← Back to essays",
    tags: "Tags",
    downloadOriginal: "Download Word original",
    notFound: "Essay not found",
    originalLanguageNote:
      "This piece was written in Chinese. The original text follows.",
  },
  music: {
    title: "Music",
    metaDescription: "Original compositions and favorite music.",
    intro: "Original compositions, and music that keeps me company.",
    empty: "No music yet.",
    compositions: "My Compositions",
    compositionsDesc: "Press play to listen. Nothing autoplays.",
    favorites: "Favorites",
  },
  project: {
    viewDetails: "View details →",
  },
  timelineItem: {
    learnMore: "Learn more",
  },
  musicItem: {
    song: "Song",
    album: "Album",
    playlist: "Playlist",
    listen: "Listen",
    coverAlt: "cover",
  },
  composition: {
    original: "Original",
    playAria: "Play",
    unsupported: "Your browser does not support audio playback.",
  },
  externalLink: {
    newWindow: " (opens in a new window)",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist.",
    backHome: "Back to home",
  },
};

const dictionaries: Record<Locale, Dictionary> = { zh, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const navPaths = [
  { key: "home" as const, href: "/" },
  { key: "timeline" as const, href: "/timeline" },
  { key: "essays" as const, href: "/essays" },
  { key: "music" as const, href: "/music" },
];

export function localizedHref(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function switchLocalePath(
  pathname: string,
  nextLocale: Locale,
): string {
  const segments = pathname.split("/");
  if (segments.length >= 2 && (segments[1] === "zh" || segments[1] === "en")) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }
  return localizedHref(nextLocale, pathname);
}
