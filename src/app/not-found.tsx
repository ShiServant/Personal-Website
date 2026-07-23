import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { defaultLocale } from "@/i18n/config";
import { getDictionary, localizedHref } from "@/i18n/dictionary";

export default function NotFound() {
  const dictionary = getDictionary(defaultLocale);

  return (
    <Container className="py-24 text-center">
      <h1 className="text-2xl font-medium text-foreground">
        {dictionary.notFound.title}
      </h1>
      <p className="mt-3 text-muted">{dictionary.notFound.description}</p>
      <Link
        href={localizedHref(defaultLocale, "/")}
        className="mt-6 inline-block text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-background"
      >
        {dictionary.notFound.backHome}
      </Link>
    </Container>
  );
}
