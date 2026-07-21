import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { EssayCard } from "@/components/essays/EssayCard";
import { essays } from "@/data/essays";

export const metadata: Metadata = {
  title: "随笔",
  description: "文字记录与日常思考。",
};

export default function EssaysPage() {
  if (essays.length === 0) {
    return (
      <Container className="py-16">
        <p className="text-muted">暂无随笔。</p>
      </Container>
    );
  }

  return (
    <Container className="animate-fade-in-up py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          随笔
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
          一些文字记录，关于生活、学习与思考。
        </p>
      </header>

      <ul className="flex flex-col gap-10">
        {essays.map((essay) => (
          <li key={essay.slug}>
            <EssayCard essay={essay} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
