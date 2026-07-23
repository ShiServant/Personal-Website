import Image from "next/image";
import type { TimelineEntry } from "@/types/content";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";

interface TimelineItemProps {
  entry: TimelineEntry;
  isLast: boolean;
  locale: Locale;
  learnMoreLabel: string;
  newWindowLabel: string;
}

export function TimelineItem({
  entry,
  isLast,
  locale,
  learnMoreLabel,
  newWindowLabel,
}: TimelineItemProps) {
  return (
    <li className="relative flex gap-5 pb-10 sm:gap-8">
      <div className="flex flex-col items-center">
        <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>

      <div className="min-w-0 flex-1 pb-2">
        <time className="text-sm font-medium text-accent">{entry.date}</time>
        <h2 className="mt-1 text-lg font-medium text-foreground">
          {t(entry.title, locale)}
        </h2>
        {entry.location && (
          <p className="mt-0.5 text-xs text-muted">
            {t(entry.location, locale)}
          </p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {t(entry.description, locale)}
        </p>

        {entry.image && (
          <div className="relative mt-4 aspect-video max-w-md overflow-hidden rounded-lg bg-accent-light">
            <Image
              src={entry.image}
              alt={t(entry.title, locale)}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>
        )}

        {entry.href && (
          <p className="mt-3">
            <ExternalLink href={entry.href} newWindowLabel={newWindowLabel}>
              {learnMoreLabel}
            </ExternalLink>
          </p>
        )}
      </div>
    </li>
  );
}
