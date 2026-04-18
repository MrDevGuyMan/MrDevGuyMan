import Image from "next/image";
import Link from "next/link";

import { GameBrowseCard } from "@/components/games/game-browse-card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurpriseMeLink } from "@/components/ui/surprise-me-link";
import { gameCatalog, gameDevelopmentTracks } from "@/data/projects";

export default function GamesPage() {
  const featuredGame =
    gameCatalog.find((game) => game.title === "Missile Strike") ?? gameCatalog[0];

  if (!featuredGame) {
    return null;
  }

  return (
    <Container className="space-y-14 pb-4 md:space-y-16">
      <PageHero
        eyebrow="Games"
        title="A browser arcade shelf built for replayable projects and future launches."
        description="This is the games side of the hub: a place for playable releases, prototype lanes, and browser-first arcade ideas. Missile Strike leads the lineup now, with more projects ready to slot in behind it."
      >
        <div className="flex flex-wrap gap-2">
          <span className="surface-tag rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]">
            Browser-first focus
          </span>
          <span className="surface-tag rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]">
            Replayable sessions
          </span>
          <span className="surface-tag rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]">
            Future game routes live
          </span>
        </div>
      </PageHero>

      <section className="gold-trim section-shell relative rounded-[2rem] p-7 [--trim-left:86%] [--trim-top:72%] md:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(236,198,160,0.46),transparent)]" />
        <SectionHeading
          eyebrow="Featured now"
          title="Missile Strike is the lead arcade destination."
          description="Play Missile Strike free in your browser right now!"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="gold-trim glass-panel-strong rounded-[1.8rem] p-7 [--trim-left:82%] [--trim-top:68%]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow-label text-[11px]">Featured game</p>
                <h2 className="mt-3 text-[2.35rem] font-semibold tracking-[-0.05em] text-foreground md:text-[2.9rem]">
                  {featuredGame.title}
                </h2>
              </div>
            </div>
            {featuredGame.thumbnailSrc ? (
              <div
                className={`relative mt-6 overflow-hidden rounded-[1.5rem] border border-border bg-[#090704] ${
                  featuredGame.thumbnailFit === "contain" ? "aspect-[3/2]" : "aspect-[16/9]"
                }`}
              >
                <Image
                  src={featuredGame.thumbnailSrc}
                  alt={featuredGame.thumbnailAlt ?? `${featuredGame.title} thumbnail`}
                  fill
                  className={featuredGame.thumbnailFit === "contain" ? "object-contain" : "object-cover"}
                  sizes="(max-width: 1024px) 100vw, 760px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,3,0.02),rgba(7,5,3,0.32))]" />
              </div>
            ) : null}
            <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-muted">
              {featuredGame.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {featuredGame.tags.map((tag) => (
                <span key={tag} className="surface-tag rounded-full px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={featuredGame.href} className="btn-primary">
                {featuredGame.ctaLabel}
              </Link>
              <SurpriseMeLink className="btn-secondary">
                Surprise Me
              </SurpriseMeLink>
            </div>
          </article>

          <div className="grid gap-4">
            <div className="gold-trim section-shell rounded-[1.6rem] p-6 [--trim-left:78%] [--trim-top:64%]">
              <p className="eyebrow-label text-[11px]">About</p>
              <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-foreground">
                Missile Strike is a browser based game made in the Godot engine and here, free to play for your arcade gaming experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="gold-trim section-shell rounded-[1.6rem] p-5 [--trim-left:72%] [--trim-top:58%]">
                <p className="eyebrow-label text-[11px]">Platform</p>
                <p className="mt-3 text-lg font-semibold text-foreground">Browser</p>
              </div>
              <div className="gold-trim section-shell rounded-[1.6rem] p-5 [--trim-left:72%] [--trim-top:58%]">
                <p className="eyebrow-label text-[11px]">Engine</p>
                <p className="mt-3 text-lg font-semibold text-foreground">Godot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider space-y-8">
        <SectionHeading
          eyebrow="Browse games"
          title="Current leads, prototype lanes, and future playable routes."
          description="These cards are meant to feel like an arcade browse surface, with Missile Strike up front and room for multiple game directions to mature over time."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gameCatalog.map((item) => (
            <GameBrowseCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section-divider space-y-8">
        <SectionHeading
          eyebrow="In development"
          title="More games are already accounted for."
          description="The games area is built to stay active as new concepts move from idea to prototype to full playable release."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {gameDevelopmentTracks.map((item) => (
            <article key={item.title} className="interactive-card gold-trim section-shell rounded-[1.6rem] p-6 [--trim-left:80%] [--trim-top:66%]">
              <p className="eyebrow-label text-[11px]">{item.status}</p>
              <h2 className="mt-3 text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
