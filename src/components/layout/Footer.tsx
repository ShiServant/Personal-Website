import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionary";
import { Container } from "./Container";

interface FooterProps {
  dictionary: Dictionary;
}

export function Footer({ dictionary }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <p className="text-center text-sm text-muted">
          © {year} {profile.name} · {dictionary.footer.tagline}
        </p>
      </Container>
    </footer>
  );
}
