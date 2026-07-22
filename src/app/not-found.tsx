import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-2xl font-medium text-foreground">页面未找到</h1>
      <p className="mt-3 text-muted">你访问的页面不存在。</p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-background"
      >
        返回主页
      </Link>
    </Container>
  );
}
