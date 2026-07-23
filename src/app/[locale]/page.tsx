import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { RecentEssays } from "@/components/home/RecentEssays";
import { ContactSection } from "@/components/home/ContactSection";
import { projects } from "@/data/projects";
import { essays } from "@/data/essays";
import { socialLinks } from "@/data/profile";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { notFound } from "next/navigation";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dictionary = getDictionary(locale);

  const featuredProjects = projects.filter((p) => p.featured);
  const recentEssays = essays.filter((e) => e.featured).slice(0, 3);

  return (
    <>
      <Hero locale={locale} />

      {featuredProjects.length > 0 && (
        <FeaturedProjects
          projects={featuredProjects}
          locale={locale}
          dictionary={dictionary}
        />
      )}

      {recentEssays.length > 0 && (
        <RecentEssays
          essays={recentEssays}
          locale={locale}
          dictionary={dictionary}
        />
      )}

      {socialLinks.length > 0 && (
        <ContactSection locale={locale} dictionary={dictionary} />
      )}
    </>
  );
}
