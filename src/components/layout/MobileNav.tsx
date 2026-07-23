"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/config";
import {
  localizedHref,
  navPaths,
  type Dictionary,
} from "@/i18n/dictionary";

interface MobileNavProps {
  id: string;
  open: boolean;
  pathname: string;
  locale: Locale;
  dictionary: Dictionary;
  onNavigate: () => void;
}

export function MobileNav({
  id,
  open,
  pathname,
  locale,
  dictionary,
  onNavigate,
}: MobileNavProps) {
  if (!open) return null;

  return (
    <nav
      id={id}
      className="border-t border-border bg-sidebar px-5 py-3 md:hidden"
      aria-label={dictionary.nav.mobileNav}
    >
      <ul className="flex flex-col gap-1">
        {navPaths.map((item) => {
          const href = localizedHref(locale, item.href);
          const isActive =
            item.href === "/"
              ? pathname === href
              : pathname.startsWith(href);

          return (
            <li key={item.href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
                className={`block rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
                  isActive
                    ? "bg-accent-light text-foreground"
                    : "text-muted hover:bg-accent-light/60 hover:text-foreground"
                }`}
              >
                {dictionary.nav[item.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
