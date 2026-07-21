import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { MusicCard } from "@/components/music/MusicCard";
import { musicItems } from "@/data/music";

export const metadata: Metadata = {
  title: "音乐",
  description: "喜欢的歌曲、专辑与歌单。",
};

export default function MusicPage() {
  if (musicItems.length === 0) {
    return (
      <Container className="py-16">
        <p className="text-muted">暂无音乐推荐。</p>
      </Container>
    );
  }

  return (
    <Container className="animate-fade-in-up py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          音乐
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
          一些陪伴我阅读、写作和独处的音乐。
        </p>
      </header>

      <ul className="flex flex-col gap-4">
        {musicItems.map((item) => (
          <li key={item.id}>
            <MusicCard item={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
