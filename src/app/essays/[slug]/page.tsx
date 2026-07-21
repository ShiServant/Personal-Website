import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { essays } from "@/data/essays";

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);

  if (!essay) {
    return { title: "文章未找到" };
  }

  return {
    title: essay.title,
    description: essay.summary,
  };
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);

  if (!essay) {
    notFound();
  }

  const formattedDate = new Date(essay.date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const paragraphs = essay.content.split("\n\n").filter(Boolean);

  return (
    <Container narrow className="animate-fade-in-up py-12 sm:py-16">
      <nav className="mb-8">
        <Link
          href="/essays"
          className="text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          ← 返回随笔列表
        </Link>
      </nav>

      <article>
        <header className="mb-8 border-b border-border pb-8">
          <time className="text-sm text-muted">{formattedDate}</time>
          <h1 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {essay.title}
          </h1>
          {essay.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="标签">
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
        </header>

        <div className="prose-spacing">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-foreground [&+&]:mt-5"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Container>
  );
}
