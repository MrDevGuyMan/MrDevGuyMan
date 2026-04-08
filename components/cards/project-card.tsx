import Image from "next/image";
import Link from "next/link";

import type { ProjectCardItem } from "@/data/projects";

type ProjectCardProps = {
  item: ProjectCardItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Link
      id={item.anchorId}
      href={item.href}
      className="interactive-card gold-trim group block section-shell scroll-mt-28 rounded-[1.75rem] p-6 [--trim-left:82%] [--trim-top:70%]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(236,198,160,0.4),transparent)] opacity-0 transition duration-200 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow-label text-[11px]">
            {item.status}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
            {item.title}
          </h2>
        </div>
      </div>
      {item.thumbnailSrc ? (
        <div
          className={`relative mt-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090704] ${
            item.thumbnailFit === "contain" ? "aspect-[3/2]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={item.thumbnailSrc}
            alt={item.thumbnailAlt ?? `${item.title} thumbnail`}
            fill
            className={item.thumbnailFit === "contain" ? "object-contain" : "object-cover"}
            sizes="(max-width: 768px) 100vw, 520px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.02),rgba(7,5,3,0.28))]" />
        </div>
      ) : null}
      <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="surface-tag rounded-full px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="btn-link mt-6">
        Explore
      </span>
    </Link>
  );
}
