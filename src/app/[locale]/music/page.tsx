import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { CompositionCard } from "@/components/music/CompositionCard";
import { MusicCard } from "@/components/music/MusicCard";
import { compositions } from "@/data/compositions";
import { musicItems } from "@/data/music";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

interface MusicPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: MusicPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dictionary = getDictionary(raw);
  return {
    title: dictionary.music.title,
    description: dictionary.music.metaDescription,
  };
}

export default async function MusicPage({ params }: MusicPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dictionary = getDictionary(locale);

  const hasCompositions = compositions.length > 0;
  const hasFavorites = musicItems.length > 0;

  if (!hasCompositions && !hasFavorites) {
    return (
      <Container className="py-16">
        <p className="text-muted">{dictionary.music.empty}</p>
      </Container>
    );
  }

  return (
    <Container className="animate-fade-in-up py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {dictionary.music.title}
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
          {dictionary.music.intro}
        </p>
      </header>

      {hasCompositions && (
        <section className="mb-14">
          <SectionHeading
            title={dictionary.music.compositions}
            description={dictionary.music.compositionsDesc}
          />
          <ul className="flex flex-col gap-4">
            {compositions.map((item) => (
              <li key={item.id}>
                <CompositionCard
                  item={item}
                  locale={locale}
                  dictionary={dictionary}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasFavorites && (
        <section>
          <SectionHeading title={dictionary.music.favorites} />
          <ul className="flex flex-col gap-4">
            {musicItems.map((item) => (
              <li key={item.id}>
                <MusicCard
                  item={item}
                  locale={locale}
                  dictionary={dictionary}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
