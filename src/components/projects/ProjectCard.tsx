import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";
interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-base font-medium text-foreground">{project.title}</h3>
        <span className="text-xs text-muted">{project.year}</span>
        <span className="rounded-md bg-accent-light px-2 py-0.5 text-xs text-muted">
          {project.category}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      {project.href && (
        <span className="mt-3 inline-block text-sm text-accent">查看详情 →</span>
      )}
    </>
  );

  return (
    <article className="group rounded-lg border border-border bg-surface p-5 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {project.image && (
        <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-accent-light">
          <Image
            src={project.image}
            alt={project.title}
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
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {content}
          </a>
        ) : (
          <Link
            href={project.href}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
