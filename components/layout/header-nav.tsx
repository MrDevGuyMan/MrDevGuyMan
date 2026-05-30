"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/data/navigation";
import { AccountNav } from "@/components/layout/account-nav";
import { SurpriseMeLink } from "@/components/ui/surprise-me-link";

type HeaderNavProps = {
  items: NavItem[];
  user: {
    displayName: string;
  } | null;
};

export function HeaderNav({ items, user }: HeaderNavProps) {
  const pathname = usePathname() ?? "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuId = useId();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const renderNavItem = (item: NavItem, mode: "desktop" | "mobile") => {
    const isActive =
      item.href === "/"
        ? pathname === "/"
        : pathname === item.href || pathname.startsWith(`${item.href}/`);
    const className =
      mode === "desktop"
        ? `inline-flex items-center rounded-full px-2 py-2 whitespace-nowrap text-[0.86rem] font-medium tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080705] lg:text-[0.92rem] ${
            isActive ? "text-gold-100" : "text-ink-400 hover:text-gold-300"
          }`
        : `rounded-xl border px-4 py-3 text-sm font-medium tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080705] ${
            isActive
              ? "border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.14)] text-gold-100"
              : "border-transparent text-ink-50 hover:border-line hover:bg-[rgba(255,255,255,0.04)] hover:text-gold-300"
          }`;

    return item.href === "/surprise-me" ? (
      <SurpriseMeLink key={`${mode}-${item.href}`} className={className}>
        {item.label}
      </SurpriseMeLink>
    ) : (
      <Link
        key={`${mode}-${item.href}`}
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={className}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav ref={navRef} aria-label="Primary navigation" className="relative z-[2] flex shrink-0 items-center pointer-events-auto">
      <div className="hidden items-center gap-4 md:flex xl:gap-6">
        {items.map((item) => renderNavItem(item, "desktop"))}
        <AccountNav user={user} />
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <AccountNav user={user} mobile />
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-haspopup="true"
          aria-label={isMenuOpen ? "Close primary navigation menu" : "Open primary navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[rgba(14,12,9,0.92)] text-[#eadfbe] transition hover:border-[rgba(212,175,55,0.45)] hover:text-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080705] md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isMenuOpen ? (
              <path d="M6 6L18 18M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen ? (
        <div
          id={menuId}
          className="absolute right-0 top-full z-[3] mt-3 flex w-[min(18rem,calc(100vw-2.5rem))] flex-col gap-1 rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(8,7,5,0.98)] p-2 shadow-[0_18px_48px_rgba(0,0,0,0.42)] md:hidden"
        >
          <Link
            href={user ? "/account" : "/login"}
            className="rounded-xl border border-[rgba(212,175,55,0.18)] bg-[rgba(212,175,55,0.08)] px-4 py-3 text-sm font-medium tracking-[-0.01em] text-gold-100 transition hover:bg-[rgba(212,175,55,0.12)]"
          >
            {user ? `Account: ${user.displayName}` : "Login / Create account"}
          </Link>
          {items.map((item) => renderNavItem(item, "mobile"))}
        </div>
      ) : null}
    </nav>
  );
}
