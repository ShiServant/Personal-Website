import { profile } from "@/data/profile";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <p className="text-center text-sm text-muted">
          © {year} {profile.name} · 安静记录，慢慢生长
        </p>
      </Container>
    </footer>
  );
}
