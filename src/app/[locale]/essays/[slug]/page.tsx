import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { essays } from "@/data/essays";
import { dateLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, localizedHref } from "@/i18n/dictionary";
import { t, tList } from "@/i18n/localized";

interface EssayPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    essays.map((essay) => ({ locale, slug: essay.slug })),
  );
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const dictionary = getDictionary(raw);
  const essay = essays.find((e) => e.slug === slug);

  if (!essay) {
    return { title: dictionary.essays.notFound };
  }

  return {
    title: t(essay.title, raw),
    description: t(essay.summary, raw),
  };
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dictionary = getDictionary(locale);
  const essay = essays.find((e) => e.slug === slug);

  if (!essay) {
    notFound();
  }

  const formattedDate = new Date(essay.date).toLocaleDateString(
    dateLocale(locale),
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const content = t(essay.content, locale);
  const paragraphs = content.split("\n\n").filter(Boolean);
  const tags = tList(essay.tags, locale);
  const showingOriginalChinese =
    locale === "en" && !essay.content.en?.trim();

  return (
    <Container narrow className="animate-fade-in-up py-12 sm:py-16">
      <nav className="mb-8">
        <Link
          href={localizedHref(locale, "/essays")}
          className="text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-background"
        >
          {dictionary.essays.backToList}
        </Link>
      </nav>

      <article>
        <header className="mb-8 border-b border-border pb-8">
          <time className="text-sm text-muted">{formattedDate}</time>
          <h1 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {t(essay.title, locale)}
          </h1>
          {tags.length > 0 && (
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label={dictionary.essays.tags}
            >
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
          {essay.downloadHref && (
            <p className="mt-4">
              <a
                href={essay.downloadHref}
                download
                className="inline-flex items-center gap-1 text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-background"
              >
                {dictionary.essays.downloadOriginal}
              </a>
            </p>
          )}
        </header>

        {showingOriginalChinese && (
          <p className="mb-6 text-sm text-muted">
            {dictionary.essays.originalLanguageNote}
          </p>
        )}

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
