"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-accent-light text-foreground"
                    : "text-muted hover:bg-accent-light/60 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "关闭菜单" : "打开菜单"}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <MobileNav
        id="mobile-nav"
        open={mobileOpen}
        pathname={pathname}
        onNavigate={() => setMobileOpen(false)}
      />
    </header>
  );
}
