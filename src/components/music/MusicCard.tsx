import Image from "next/image";
import type { MusicItem } from "@/types/content";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { t } from "@/i18n/localized";

interface MusicCardProps {
  item: MusicItem;
  locale: Locale;
  dictionary: Dictionary;
}

export function MusicCard({ item, locale, dictionary }: MusicCardProps) {
  const typeLabels: Record<MusicItem["type"], string> = {
    song: dictionary.musicItem.song,
    album: dictionary.musicItem.album,
    playlist: dictionary.musicItem.playlist,
  };

  const title = t(item.title, locale);

  return (
    <article className="flex gap-4 rounded-lg border border-border bg-surface p-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:gap-5 sm:p-5">
      {item.cover ? (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-accent-light sm:h-24 sm:w-24">
          <Image
            src={item.cover}
            alt={`${title} ${dictionary.musicItem.coverAlt}`}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      ) : (
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-accent-light sm:h-24 sm:w-24"
          aria-hidden="true"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-accent"
          >
            <path
              d="M9 18V5l12-2v13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h2 className="text-base font-medium text-foreground">{title}</h2>
          <span className="rounded-md bg-accent-light px-2 py-0.5 text-xs text-muted">
            {typeLabels[item.type]}
          </span>
          {item.year && (
            <span className="text-xs text-muted">{item.year}</span>
          )}
        </div>
        <p className="mt-0.5 text-sm text-muted">{t(item.artist, locale)}</p>
        {item.note && (
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {t(item.note, locale)}
          </p>
        )}
        {item.href && (
          <p className="mt-3">
            <ExternalLink
              href={item.href}
              newWindowLabel={dictionary.externalLink.newWindow}
            >
              {dictionary.musicItem.listen}
            </ExternalLink>
          </p>
        )}
      </div>
    </article>
  );
}
