"use client";

import { useId } from "react";
import type { Composition } from "@/types/content";

interface CompositionCardProps {
  item: Composition;
}

export function CompositionCard({ item }: CompositionCardProps) {
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
            原创
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
      </div>

      <audio
        id={audioId}
        controls
        preload="metadata"
        className="h-10 w-full accent-accent"
        aria-label={`播放 ${item.title}`}
      >
        <source src={item.audioSrc} type="audio/mpeg" />
        你的浏览器不支持音频播放。
      </audio>
    </article>
  );
}
