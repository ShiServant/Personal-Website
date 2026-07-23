import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { EssayCard } from "@/components/essays/EssayCard";
import { essays } from "@/data/essays";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

interface EssaysPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: EssaysPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dictionary = getDictionary(raw);
  return {
    title: dictionary.essays.title,
    description: dictionary.essays.metaDescription,
  };
}

export default async function EssaysPage({ params }: EssaysPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dictionary = getDictionary(locale);

  if (essays.length === 0) {
    return (
      <Container className="py-16">
        <p className="text-muted">{dictionary.essays.empty}</p>
      </Container>
    );
  }

  return (
    <Container className="animate-fade-in-up py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {dictionary.essays.title}
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
          {dictionary.essays.intro}
        </p>
      </header>

      <ul className="flex flex-col gap-10">
        {essays.map((essay) => (
          <li key={essay.slug}>
            <EssayCard
              essay={essay}
              locale={locale}
              tagsLabel={dictionary.essays.tags}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
