import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { RecentEssays } from "@/components/home/RecentEssays";
import { ContactSection } from "@/components/home/ContactSection";
import { projects } from "@/data/projects";
import { essays } from "@/data/essays";
import { socialLinks } from "@/data/profile";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const recentEssays = essays.filter((e) => e.featured).slice(0, 3);

  return (
    <>
      <Hero />

      {featuredProjects.length > 0 && (
        <FeaturedProjects projects={featuredProjects} />
      )}

      {recentEssays.length > 0 && <RecentEssays essays={recentEssays} />}

      {socialLinks.length > 0 && <ContactSection />}
    </>
  );
}
