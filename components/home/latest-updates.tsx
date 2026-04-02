import Image from "next/image";
import Link from "next/link";
import type { LatestUpdateItem } from "@/data/projects";

type LatestUpdatesProps = {
  items: LatestUpdateItem[];
};

export function LatestUpdates({ items }: LatestUpdatesProps) {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow-label">Notes</p>
        <h2 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] text-white md:text-[4.4rem]">
          Current notes.
        </h2>
        <p className="mt-6 text-[1.02rem] leading-8 text-muted md:text-[1.08rem]">
          What is changing, what has a clear direction, and what is still loose on purpose.
        </p>
      </div>
      <div className="mt-14 border-t border-white/10">
        {items.map((item) => (
          <article
            key={item.title}
            className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[160px_minmax(0,1fr)_auto] md:items-start md:gap-8"
          >
            <div className="space-y-2">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white">
                {item.timeLabel}
              </p>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-muted">
                {item.section}
              </p>
            </div>
            <div>
              {item.thumbnailSrc ? (
                <div className="relative mb-5 aspect-[16/9] w-full max-w-xl overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#090704]">
                  <Image
                    src={item.thumbnailSrc}
                    alt={item.thumbnailAlt ?? `${item.title} thumbnail`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 640px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.02),rgba(7,5,3,0.3))]" />
                </div>
              ) : null}
              <h3 className="text-[1.8rem] font-semibold leading-tight text-white md:text-[2.2rem]">
                {item.title}
              </h3>
              {item.descriptionLinkLabel ? (
                <Link
                  href={item.href}
                  className="mt-4 inline-flex text-[1rem] leading-8 text-gold-300 transition-opacity hover:opacity-70"
                >
                  {item.descriptionLinkLabel}
                </Link>
              ) : (
                <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-muted">
                  {item.description}
                </p>
              )}
            </div>
            <Link
              href={item.href}
              className="self-start text-sm font-semibold tracking-[0.01em] text-white transition-opacity hover:opacity-70"
            >
              Open
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
