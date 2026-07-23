import Link from "next/link";
import type { Essay } from "@/types/content";
import { dateLocale, type Locale } from "@/i18n/config";
import { localizedHref } from "@/i18n/dictionary";
import { t, tList } from "@/i18n/localized";

interface EssayCardProps {
  essay: Essay;
  locale: Locale;
  tagsLabel: string;
}

export function EssayCard({ essay, locale, tagsLabel }: EssayCardProps) {
  const formattedDate = new Date(essay.date).toLocaleDateString(
    dateLocale(locale),
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const tags = tList(essay.tags, locale);

  return (
    <article className="group">
      <Link
        href={localizedHref(locale, `/essays/${essay.slug}`)}
        className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-background"
      >
        <time className="text-xs text-muted">{formattedDate}</time>
        <h3 className="mt-1 text-base font-medium text-foreground transition-colors group-hover:text-accent">
          {t(essay.title, locale)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {t(essay.summary, locale)}
        </p>
      </Link>

      {tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2" aria-label={tagsLabel}>
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-accent-light px-2 py-0.5 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
