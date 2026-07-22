import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CompositionCard } from "@/components/music/CompositionCard";
import { MusicCard } from "@/components/music/MusicCard";
import { compositions } from "@/data/compositions";
import { musicItems } from "@/data/music";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "音乐",
  description: "原创作曲与喜欢的音乐。",
};

export default function MusicPage() {
  const hasCompositions = compositions.length > 0;
  const hasFavorites = musicItems.length > 0;

  if (!hasCompositions && !hasFavorites) {
    return (
      <Container className="py-16">
        <p className="text-muted">暂无音乐内容。</p>
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
          一些原创作曲，以及陪伴我阅读、写作和独处的音乐。
        </p>
      </header>

      {hasCompositions && (
        <section className="mb-14">
          <SectionHeading
            title="我的作曲"
            description="点击播放按钮即可在线试听，不会自动播放。"
          />
          <ul className="flex flex-col gap-4">
            {compositions.map((item) => (
              <li key={item.id}>
                <CompositionCard item={item} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasFavorites && (
        <section>
          <SectionHeading title="喜欢的音乐" />
          <ul className="flex flex-col gap-4">
            {musicItems.map((item) => (
              <li key={item.id}>
                <MusicCard item={item} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
