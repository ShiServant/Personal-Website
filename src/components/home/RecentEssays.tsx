import Link from "next/link";
import type { Essay } from "@/types/content";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { EssayCard } from "@/components/essays/EssayCard";

interface RecentEssaysProps {
  essays: Essay[];
}

export function RecentEssays({ essays }: RecentEssaysProps) {
  return (
    <Section className="animate-fade-in-up">
      <Container>
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            最近随笔
          </h2>
          <Link
            href="/essays"
            className="shrink-0 text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-background"
          >
            查看全部
          </Link>
        </div>
        <ul className="flex flex-col gap-6">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <EssayCard essay={essay} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
