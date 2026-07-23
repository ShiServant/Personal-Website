"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import {
  localizedHref,
  navPaths,
  type Dictionary,
} from "@/i18n/dictionary";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface SidebarProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Sidebar({ locale, dictionary }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-20 flex-col bg-sidebar md:flex">
      <Link
        href={localizedHref(locale, "/")}
        className="border-b border-white/10 px-2 py-5 text-center text-xs font-medium tracking-wide text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
        aria-label={`${profile.name} ${dictionary.nav.homeAria}`}
      >
        {profile.name.slice(0, 1)}
      </Link>

      <nav
        className="flex flex-1 flex-col items-center gap-5 px-2 py-8"
        aria-label={dictionary.nav.mainNav}
      >
        {navPaths.map((item) => {
          const href = localizedHref(locale, item.href);
          const isActive =
            item.href === "/"
              ? pathname === href
              : pathname.startsWith(href);

          return (
            <Link
              key={item.href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`px-1 py-1 text-center text-xs leading-snug tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
                isActive
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
              style={{ writingMode: "vertical-rl" }}
            >
              {dictionary.nav[item.key]}
            </Link>
          );
        })}
      </nav>

      <LanguageSwitcher
        locale={locale}
        label={dictionary.language.label}
        variant="sidebar"
      />
    </aside>
  );
}
