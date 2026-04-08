import Image from "next/image";
import Link from "next/link";
import type { FeaturedShowcaseItem } from "@/data/projects";

type FeaturedGridProps = {
  items: FeaturedShowcaseItem[];
};

export function FeaturedGrid({ items }: FeaturedGridProps) {
  const [lead, ...rest] = items;

  if (!lead) return null;

  return (
    <section className="page-shell border-t border-line py-20 md:py-24 lg:py-28">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:items-start lg:gap-20">
        <div className="gold-trim gold-trim-flat max-w-md pl-6 pt-6 [--trim-left:82%] [--trim-top:70%] md:pl-8 md:pt-8">
          <p className="section-kicker text-gold-300">Featured products</p>
          <h2 className="mt-5 text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.05em] text-ink-50 md:text-[4.6rem]">
            Test our three top featured products right here.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <Link
            href={lead.href}
            className="group gold-trim gold-trim-flat flex min-h-[25rem] flex-col justify-between border border-line bg-[#120f0b] px-7 py-8 [--trim-left:86%] [--trim-top:72%] transition-colors duration-200 hover:bg-[#1a1510] md:px-8 md:py-9"
          >
            <div>
              <p className="section-kicker text-gold-300">{lead.eyebrow}</p>
              <h3 className="mt-6 max-w-full text-[2.15rem] font-semibold leading-[1] tracking-[-0.05em] text-ink-50 transition-colors group-hover:text-ink-200 md:text-[2.7rem]">
                {lead.title}
              </h3>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-ink-200">
                {lead.description}
              </p>
              {lead.thumbnailSrc ? (
                <div
                  className={`relative mt-8 overflow-hidden rounded-[1.5rem] border border-line bg-[#090704] ${
                    lead.thumbnailFit === "contain" ? "aspect-[3/2]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={lead.thumbnailSrc}
                    alt={lead.thumbnailAlt ?? `${lead.title} thumbnail`}
                    fill
                    className={lead.thumbnailFit === "contain" ? "object-contain" : "object-cover"}
                    sizes="(max-width: 1024px) 100vw, 720px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.02),rgba(7,5,3,0.28))]" />
                </div>
              ) : null}
            </div>
            <div className="mt-12 border-t border-line pt-5">
              <span className="text-sm font-semibold tracking-[0.01em] text-gold-300">
                {lead.ctaLabel}
              </span>
            </div>
          </Link>

          <div className="grid gap-8">
            {rest.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group gold-trim gold-trim-flat flex min-h-[13.5rem] flex-col justify-between border border-line bg-[#120f0b] px-6 py-5 [--trim-left:84%] [--trim-top:68%] transition-colors duration-200 hover:bg-[#1a1510] md:px-7 md:py-6"
              >
                <div>
                  <p className="section-kicker text-gold-300">{item.eyebrow}</p>
                  <h3 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.045em] text-ink-50 transition-colors group-hover:text-ink-200 md:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.98rem] leading-7 text-ink-200">
                    {item.description}
                  </p>
                  {item.thumbnailSrc ? (
                    <div
                      className={`relative mt-5 overflow-hidden rounded-[1.25rem] border border-line bg-[#090704] ${
                        item.thumbnailFit === "contain" ? "aspect-[3/2]" : "aspect-[16/9]"
                      }`}
                    >
                      <Image
                        src={item.thumbnailSrc}
                        alt={item.thumbnailAlt ?? `${item.title} thumbnail`}
                        fill
                        className={item.thumbnailFit === "contain" ? "object-contain" : "object-cover"}
                        sizes="(max-width: 1024px) 100vw, 520px"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.02),rgba(7,5,3,0.28))]" />
                    </div>
                  ) : null}
                </div>
                <div className="mt-6 border-t border-line pt-3">
                  <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-gold-300 transition-opacity group-hover:opacity-75">
                    <span>{item.ctaLabel}</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
