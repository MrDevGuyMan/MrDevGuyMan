"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/container";

export function SupportDeveloperBanner() {
  const pathname = usePathname();

  if (pathname === "/support") {
    return null;
  }

  return (
    <section className="mt-20 md:mt-24">
      <Container>
        <Link
          href="/support"
          className="group gold-trim gold-trim-flat block rounded-[1.9rem] rounded-tl-none border border-line bg-[linear-gradient(180deg,rgba(24,20,14,0.92),rgba(10,8,6,0.96))] p-8 [--trim-left:82%] [--trim-top:68%] transition-colors duration-200 hover:bg-[linear-gradient(180deg,rgba(30,24,17,0.95),rgba(13,10,7,0.98))] md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker text-gold-300">Support the developer</p>
              <h2 className="mt-5 text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-ink-50 md:text-[3.4rem]">
                Help fund more games, tools, and updates.
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-ink-200 md:text-[1.06rem]">
                Tap here for support options including Buy Me a Coffee and crypto wallet addresses.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-gold-300 transition-opacity group-hover:opacity-75">
              <span>Open support page</span>
              <span>&rarr;</span>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
