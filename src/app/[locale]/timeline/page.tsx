import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { timelineEntries } from "@/data/timeline";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

interface TimelinePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TimelinePageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dictionary = getDictionary(raw);
  return {
    title: dictionary.timeline.title,
    description: dictionary.timeline.metaDescription,
  };
}

export default async function TimelinePage({ params }: TimelinePageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dictionary = getDictionary(locale);

  if (timelineEntries.length === 0) {
    return (
      <Container className="py-16">
        <p className="text-muted">{dictionary.timeline.empty}</p>
      </Container>
    );
  }

  return (
    <Container className="animate-fade-in-up py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {dictionary.timeline.title}
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
          {dictionary.timeline.intro}
        </p>
      </header>

      <ol className="list-none">
        {timelineEntries.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            isLast={index === timelineEntries.length - 1}
            locale={locale}
            learnMoreLabel={dictionary.timelineItem.learnMore}
            newWindowLabel={dictionary.externalLink.newWindow}
          />
        ))}
      </ol>
    </Container>
  );
}
