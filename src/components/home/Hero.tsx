import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="animate-fade-in-up py-16 sm:py-24">
      <Container>
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg text-foreground sm:text-xl">
          {profile.tagline}
        </p>
        <p className="mt-3 max-w-prose text-base leading-relaxed text-muted">
          {profile.description}
        </p>
      </Container>
    </section>
  );
}
