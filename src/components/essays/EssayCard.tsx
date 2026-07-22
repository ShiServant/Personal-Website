import Link from "next/link";
import type { Essay } from "@/types/content";

interface EssayCardProps {
  essay: Essay;
  showTags?: boolean;
}

export function EssayCard({ essay, showTags = true }: EssayCardProps) {
  const formattedDate = new Date(essay.date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group">
      <Link
        href={`/essays/${essay.slug}`}
        className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-background"
      >
        <time className="text-xs text-muted">{formattedDate}</time>
        <h3 className="mt-1 text-base font-medium text-foreground transition-colors group-hover:text-accent">
          {essay.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{essay.summary}</p>
      </Link>

      {showTags && essay.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="标签">
          {essay.tags.map((tag) => (
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
