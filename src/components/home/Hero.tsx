import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  return (
    <section className="animate-fade-in-up flex min-h-[68vh] items-center py-16 sm:min-h-[72vh] sm:py-24">
      <Container className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
          {profile.name}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-foreground/90 sm:text-xl">
          {t(profile.tagline, locale)}
        </p>
        <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-muted">
          {t(profile.description, locale)}
        </p>
      </Container>
    </section>
  );
}
