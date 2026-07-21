/**
 * 音乐数据
 *
 * 修改方式：
 * - 新增条目：在数组中添加对象，设置唯一 id
 * - 删除条目：从数组中移除对应对象
 * - 调整顺序：移动数组中的对象位置
 * - 暂时隐藏：从数组中移除即可
 *
 * type 可选值：song | album | playlist
 * 可选字段 cover、note、year、href 不存在时，组件会自动省略
 */

import type { MusicItem } from "@/types/content";

export const musicItems: MusicItem[] = [
  {
    id: "music-1",
    title: "Mystery of Love",
    artist: "Sufjan Stevens",
    type: "song",
    note: "温柔而克制的旋律，适合安静阅读时聆听。",
    year: 2017,
    href: "https://open.spotify.com",
  },
  {
    id: "music-2",
    title: "Blonde",
    artist: "Frank Ocean",
    type: "album",
    note: "一张需要慢慢品味的专辑，每次听都有不同感受。",
    year: 2016,
    href: "https://open.spotify.com",
  },
  {
    id: "music-3",
    title: "深夜阅读歌单",
    artist: "自建歌单",
    type: "playlist",
    note: "收录了一些适合深夜独处的曲目。",
  },
];
