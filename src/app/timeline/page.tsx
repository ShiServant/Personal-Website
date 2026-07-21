import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { timelineEntries } from "@/data/timeline";

export const metadata: Metadata = {
  title: "人生轨迹",
  description: "记录人生中的重要时刻与经历。",
};

export default function TimelinePage() {
  if (timelineEntries.length === 0) {
    return (
      <Container className="py-16">
        <p className="text-muted">暂无轨迹记录。</p>
      </Container>
    );
  }

  return (
    <Container className="animate-fade-in-up py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          人生轨迹
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
          一些值得记住的时刻，按时间顺序排列。
        </p>
      </header>

      <ol className="list-none">
        {timelineEntries.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            isLast={index === timelineEntries.length - 1}
          />
        ))}
      </ol>
    </Container>
  );
}
