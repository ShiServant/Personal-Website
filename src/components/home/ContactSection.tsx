import { socialLinks } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { t } from "@/i18n/localized";

interface ContactSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function ContactSection({ locale, dictionary }: ContactSectionProps) {
  return (
    <Section className="animate-fade-in-up">
      <Container>
        <SectionHeading
          title={dictionary.home.contact}
          description={dictionary.home.contactDesc}
        />
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <ExternalLink
                href={link.href}
                newWindowLabel={dictionary.externalLink.newWindow}
              >
                {t(link.label, locale)}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
