"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-20 flex-col bg-sidebar md:flex">
      <Link
        href="/"
        className="border-b border-white/10 px-2 py-5 text-center text-xs font-medium tracking-wide text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
        aria-label={`${profile.name} 主页`}
      >
        {profile.name.slice(0, 1)}
      </Link>

      <nav
        className="flex flex-1 flex-col items-center gap-5 px-2 py-8"
        aria-label="主导航"
      >
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
              className={`px-1 py-1 text-center text-xs leading-snug tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
                isActive
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
              style={{ writingMode: "vertical-rl" }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
