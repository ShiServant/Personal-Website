"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/dictionary";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  variant?: "sidebar" | "header";
}

export function LanguageSwitcher({
  locale,
  label,
  variant = "sidebar",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const zhHref = switchLocalePath(pathname, "zh");
  const enHref = switchLocalePath(pathname, "en");

  const base =
    variant === "sidebar"
      ? "flex flex-col items-center gap-1 border-t border-white/10 px-2 py-4"
      : "flex items-center gap-0.5";

  const linkBase =
    "rounded px-1.5 py-0.5 text-xs tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar";

  return (
    <div className={base} role="group" aria-label={label}>
      <Link
        href={zhHref}
        hrefLang="zh-CN"
        aria-current={locale === "zh" ? "true" : undefined}
        className={`${linkBase} ${
          locale === "zh"
            ? "text-accent"
            : "text-muted hover:text-foreground"
        }`}
      >
        中文
      </Link>
      {variant === "header" && (
        <span className="text-muted/50" aria-hidden="true">
          /
        </span>
      )}
      <Link
        href={enHref}
        hrefLang="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={`${linkBase} ${
          locale === "en"
            ? "text-accent"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
