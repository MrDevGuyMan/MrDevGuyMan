"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/navigation";
import { SurpriseMeLink } from "@/components/ui/surprise-me-link";

type HeaderNavProps = {
  items: NavItem[];
};

export function HeaderNav({ items }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-5 md:gap-6">
      {items.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          item.href === "/surprise-me" ? (
            <SurpriseMeLink
              key={item.href}
              className={`text-[0.92rem] font-medium tracking-[-0.01em] transition-colors ${
                isActive ? "text-gold-100" : "text-ink-400 hover:text-gold-300"
              }`}
            >
              {item.label}
            </SurpriseMeLink>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`text-[0.92rem] font-medium tracking-[-0.01em] transition-colors ${
                isActive ? "text-gold-100" : "text-ink-400 hover:text-gold-300"
              }`}
            >
              {item.label}
            </Link>
          )
        );
      })}
    </nav>
  );
}
