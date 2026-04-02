import Image from "next/image";
import Link from "next/link";
import type { FeaturedShowcaseItem } from "@/data/projects";
import { SurpriseMeLink } from "@/components/ui/surprise-me-link";

type HomeHeroProps = {
  items: FeaturedShowcaseItem[];
};

export function HomeHero({ items }: HomeHeroProps) {
  const spotlight = items[0];

  if (!spotlight) return null;

  return (
    <section className="page-shell py-24 md:py-32 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] lg:items-end lg:gap-20">
        <div className="gold-trim gold-trim-flat max-w-5xl pl-7 pt-7 [--trim-left:88%] [--trim-top:74%] md:pl-9 md:pt-9 lg:pl-10 lg:pt-10">
          <h1 className="max-w-5xl text-[4.2rem] font-semibold leading-[0.93] tracking-[-0.055em] text-ink-50 md:text-[6.4rem] lg:text-[8rem]">
            Games and tools with a sharper point of view.
          </h1>
          <p className="mt-8 max-w-2xl text-[1.08rem] leading-8 text-ink-200 md:text-[1.18rem] md:leading-9">
            Here we publish playable games, practical tools, and smaller technical experiments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={spotlight.href} className="cta-primary border-gold-300 bg-gold-300 text-[#090806] shadow-none hover:bg-gold-100">
              {spotlight.ctaLabel}
            </Link>
            <Link href="/games" className="cta-secondary border-line bg-transparent text-ink-50 hover:border-gold-300 hover:bg-[#17130d]">
              Browse games
            </Link>
            <Link href="/tools" className="cta-secondary border-line bg-transparent text-ink-50 hover:border-gold-300 hover:bg-[#17130d]">
              Browse tools
            </Link>
            <SurpriseMeLink className="cta-secondary border-line bg-transparent text-ink-50 hover:border-gold-300 hover:bg-[#17130d]">
              Surprise me
            </SurpriseMeLink>
          </div>
        </div>

        <div className="gold-trim gold-trim-flat max-w-sm justify-self-start pl-5 pt-5 [--trim-left:80%] [--trim-top:68%] md:pl-6 md:pt-6 lg:justify-self-end">
          {spotlight.thumbnailSrc ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] border border-line bg-[#090704]">
              <Image
                src={spotlight.thumbnailSrc}
                alt={spotlight.thumbnailAlt ?? `${spotlight.title} thumbnail`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.02),rgba(7,5,3,0.24))]" />
            </div>
          ) : null}
          <p className={`section-kicker text-gold-300 ${spotlight.thumbnailSrc ? "mt-6" : ""}`}>Featured game</p>
          <h2 className="mt-5 text-[1.95rem] font-semibold leading-tight tracking-[-0.045em] text-ink-50 md:text-[2.3rem]">
            {spotlight.title}
          </h2>
          <p className="mt-5 max-w-sm text-[0.98rem] leading-8 text-ink-200">
            {spotlight.description}
          </p>
          <Link
            href={spotlight.href}
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-gold-300 transition-opacity hover:opacity-75"
          >
            <span>Open featured project</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
