import Image from "next/image";
import Link from "next/link";
import type { ProjectCardItem } from "@/data/projects";

type SectionPreviewProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  items: ProjectCardItem[];
};

export function SectionPreview({
  eyebrow,
  title,
  description,
  href,
  actionLabel,
  items,
}: SectionPreviewProps) {
  return (
    <section className="page-shell py-24 md:py-28 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
        <div className="gold-trim gold-trim-flat max-w-md pl-6 pt-6 [--trim-left:82%] [--trim-top:70%] md:pl-8 md:pt-8">
          <p className="section-kicker text-gold-300">{eyebrow}</p>
          <h2 className="mt-5 text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.05em] text-ink-50 lg:text-[4.6rem]">
            {title}
          </h2>
          <p className="mt-6 text-[1.02rem] leading-8 text-ink-200 md:text-[1.08rem]">
            {description}
          </p>
          <Link
            href={href}
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-gold-300 transition-opacity hover:opacity-70"
          >
            <span>{actionLabel}</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="border-t border-line">
          {items.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group grid gap-6 border-b border-line bg-[#120f0b]/70 px-5 py-8 transition-colors duration-200 hover:bg-[#17130d] md:grid-cols-[minmax(0,1fr)_220px] md:gap-8 md:px-6 ${
                index === 0 ? "gold-trim gold-trim-flat [--trim-left:84%] [--trim-top:62%]" : ""
              }`}
            >
              <div>
                {item.status !== "In Progress" ? (
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-ink-400">
                    {item.status}
                  </p>
                ) : null}
                <h3 className="mt-4 text-[2.15rem] font-semibold leading-[0.98] tracking-[-0.045em] text-ink-50 transition-colors group-hover:text-ink-200 md:text-[2.9rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-ink-200">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-col gap-6 md:items-end md:text-right">
                {item.thumbnailSrc ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.2rem] border border-line bg-[#090704] md:max-w-[220px]">
                    <Image
                      src={item.thumbnailSrc}
                      alt={item.thumbnailAlt ?? `${item.title} thumbnail`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 220px"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.02),rgba(7,5,3,0.28))]" />
                  </div>
                ) : null}
                <p className="text-sm leading-7 text-ink-400">
                  {item.tags.join(" / ")}
                </p>
                <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-gold-300 transition-opacity group-hover:opacity-80">
                  <span>Open project</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
