import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="animate-fade-in-up flex min-h-[68vh] items-center py-16 sm:min-h-[72vh] sm:py-24">
      <Container className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
          {profile.name}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-foreground/90 sm:text-xl">
          {profile.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-muted">
          {profile.description}
        </p>
      </Container>
    </section>
  );
}
