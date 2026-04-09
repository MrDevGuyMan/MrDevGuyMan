import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { usefulTools } from "@/data/useful-tools";

export const metadata: Metadata = {
  title: "Useful Tools",
  description: "A curated list of tools I personally use and recommend.",
};

export default function UsefulToolsPage() {
  return (
    <Container className="space-y-10">
      <PageHero
        eyebrow="Useful Tools"
        title="Useful Tools"
        description="A curated list of tools I personally use and recommend."
      />

      <section className="mx-auto max-w-5xl">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {usefulTools.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.href}
              className="interactive-card gold-trim block rounded-3xl border border-border bg-surface/70 p-6 [--trim-left:82%] [--trim-top:70%] sm:p-7"
            >
              <div className="flex min-h-[17rem] flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow-label pt-1 text-[11px]">Recommended Tool</p>
                  <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-[0.95rem] border border-[rgba(212,175,55,0.2)] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_58%),linear-gradient(180deg,rgba(22,18,13,0.92),rgba(8,7,5,0.96))] p-[0.2rem] shadow-[0_10px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,240,196,0.04)] sm:h-[3.35rem] sm:w-[4.3rem]">
                    <span className="relative block h-full w-full overflow-hidden rounded-[0.82rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                      <Image
                        src={tool.thumbnailSrc}
                        alt={tool.thumbnailAlt}
                        fill
                        sizes="(max-width: 640px) 64px, 69px"
                        className="object-contain p-1.5"
                      />
                    </span>
                  </span>
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
                    {tool.title}
                  </h2>
                  <p className="max-w-[32ch] text-sm leading-7 text-muted">
                    {tool.shortDescription}
                  </p>
                </div>
                <span className="btn-link mt-auto">View tool page</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
