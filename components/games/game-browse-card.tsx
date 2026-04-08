import Image from "next/image";
import Link from "next/link";

import type { GameCatalogItem } from "@/data/projects";

type GameBrowseCardProps = {
  item: GameCatalogItem;
};

export function GameBrowseCard({ item }: GameBrowseCardProps) {
  return (
    <article className="interactive-card gold-trim section-shell flex h-full flex-col rounded-[1.8rem] p-6 [--trim-left:82%] [--trim-top:70%]">
      {item.thumbnailSrc ? (
        <div
          className={`relative mb-6 overflow-hidden rounded-[1.25rem] border border-border bg-[#090704] ${
            item.thumbnailFit === "contain" ? "aspect-[3/2]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={item.thumbnailSrc}
            alt={item.thumbnailAlt ?? `${item.title} thumbnail`}
            fill
            className={item.thumbnailFit === "contain" ? "object-contain" : "object-cover"}
            sizes="(max-width: 1280px) 100vw, 360px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.02),rgba(7,5,3,0.28))]" />
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          {item.status !== "In Progress" ? (
            <p className="eyebrow-label text-[11px]">{item.status}</p>
          ) : null}
          <h2 className="mt-3 text-[1.7rem] font-semibold tracking-[-0.04em] text-foreground">
            {item.title}
          </h2>
        </div>
        <span className="surface-tag rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
          {item.tags[0]}
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted">
        {item.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.slice(1).map((tag) => (
          <span key={tag} className="surface-tag rounded-full px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>
      <Link href={item.href} className="btn-secondary mt-7">
        {item.ctaLabel}
      </Link>
    </article>
  );
}
