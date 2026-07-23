"use client";

import { useId } from "react";
import type { Composition } from "@/types/content";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { t } from "@/i18n/localized";

interface CompositionCardProps {
  item: Composition;
  locale: Locale;
  dictionary: Dictionary;
}

export function CompositionCard({
  item,
  locale,
  dictionary,
}: CompositionCardProps) {
  const audioId = useId();

  return (
    <article className="rounded-lg border border-border bg-surface p-4 backdrop-blur-sm sm:p-5">
      <div className="mb-4">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h2 className="text-base font-medium text-foreground">{item.title}</h2>
          {item.year && (
            <span className="text-xs text-muted">{item.year}</span>
          )}
          <span className="rounded-md bg-accent-light px-2 py-0.5 text-xs text-muted">
            {dictionary.composition.original}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {t(item.description, locale)}
        </p>
      </div>

      <audio
        id={audioId}
        controls
        preload="metadata"
        className="h-10 w-full accent-accent"
        aria-label={`${dictionary.composition.playAria} ${item.title}`}
      >
        <source src={item.audioSrc} type="audio/mpeg" />
        {dictionary.composition.unsupported}
      </audio>
    </article>
  );
}
