import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  viewDetailsLabel: string;
}

export function ProjectCard({
  project,
  locale,
  viewDetailsLabel,
}: ProjectCardProps) {
  const content = (
    <>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-base font-medium text-foreground">
          {t(project.title, locale)}
        </h3>
        <span className="text-xs text-muted">{project.year}</span>
        <span className="rounded-md bg-accent-light px-2 py-0.5 text-xs text-muted">
          {t(project.category, locale)}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {t(project.description, locale)}
      </p>
      {project.href && (
        <span className="mt-3 inline-block text-sm text-accent">
          {viewDetailsLabel}
        </span>
      )}
    </>
  );

  return (
    <article className="group rounded-lg border border-border bg-surface p-5 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {project.image && (
        <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-accent-light">
          <Image
            src={project.image}
            alt={t(project.title, locale)}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      )}
      {project.href ? (
        project.href.startsWith("http") ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {content}
          </a>
        ) : (
          <Link
            href={project.href}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {content}
          </Link>
        )
      ) : (
        content
      )}
    </article>
  );
}
