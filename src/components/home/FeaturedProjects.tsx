import type { Project } from "@/types/content";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Section className="animate-fade-in-up">
      <Container>
        <SectionHeading title="精选作品" description="一些正在做或已完成的项目。" />
        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
