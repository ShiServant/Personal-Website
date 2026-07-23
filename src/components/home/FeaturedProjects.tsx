import type { Project } from "@/types/content";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface FeaturedProjectsProps {
  projects: Project[];
  locale: Locale;
  dictionary: Dictionary;
}

export function FeaturedProjects({
  projects,
  locale,
  dictionary,
}: FeaturedProjectsProps) {
  return (
    <Section className="animate-fade-in-up">
      <Container>
        <SectionHeading
          title={dictionary.home.featuredProjects}
          description={dictionary.home.featuredProjectsDesc}
        />
        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                project={project}
                locale={locale}
                viewDetailsLabel={dictionary.project.viewDetails}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
