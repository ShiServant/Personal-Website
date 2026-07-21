import { socialLinks } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function ContactSection() {
  return (
    <Section className="animate-fade-in-up">
      <Container>
        <SectionHeading
          title="联系方式"
          description="如果想聊聊，欢迎通过这些方式联系我。"
        />
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
