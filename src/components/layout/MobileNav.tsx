"use client";

import Link from "next/link";
import { navItems } from "@/data/navigation";

interface MobileNavProps {
  id: string;
  open: boolean;
  pathname: string;
  onNavigate: () => void;
}

export function MobileNav({ id, open, pathname, onNavigate }: MobileNavProps) {
  if (!open) return null;

  return (
    <nav
      id={id}
      className="border-t border-border bg-surface px-5 py-3 md:hidden"
      aria-label="移动端导航"
    >
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
                className={`block rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-accent-light text-foreground"
                    : "text-muted hover:bg-accent-light/60 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
