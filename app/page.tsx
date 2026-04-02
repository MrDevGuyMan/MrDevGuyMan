import { FeaturedGrid } from "@/components/home/featured-grid";
import { HomeHero } from "@/components/home/home-hero";
import { LatestUpdates } from "@/components/home/latest-updates";
import { SectionPreview } from "@/components/home/section-preview";
import { Container } from "@/components/ui/container";
import {
  experiments,
  featuredShowcase,
  games,
  latestUpdates,
  tools,
} from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="bg-variant-hero">
        <Container className="pb-8 pt-4 md:pb-10 md:pt-6">
          <HomeHero items={featuredShowcase} />
          <FeaturedGrid items={featuredShowcase} />
        </Container>
      </section>

      <section className="bg-variant-band mt-16 border-t border-line md:mt-20">
        <Container>
          <SectionPreview
            eyebrow="Games"
            title="Small games and prototypes in active development."
            description="Compact arcade ideas are taking shape here as browser-first releases and playable concepts."
            href="/games"
            actionLabel="View all games"
            items={games.slice(0, 3)}
          />
        </Container>
      </section>

      <section className="bg-variant-deep">
        <Container>
          <SectionPreview
            eyebrow="Tools"
            title="Tools for game development, workflows, and repeated tasks."
            description="Practical browser utilities for shaping maps, testing ideas, and removing the setup work that slows everything else down."
            href="/tools"
            actionLabel="View all tools"
            items={tools.slice(0, 3)}
          />
        </Container>
      </section>

      <section className="bg-variant-surface">
        <Container>
          <SectionPreview
            eyebrow="Experiments"
            title="Rendering tests, UI ideas, and smaller technical work."
            description="This is the looser side of the site: mechanics, interaction tests, and visual experiments that may turn into proper projects later."
            href="/experiments"
            actionLabel="View all experiments"
            items={experiments.slice(0, 3)}
          />
        </Container>
      </section>

      <section className="bg-variant-grid">
        <Container className="pb-20 md:pb-32">
          <div className="pt-24 md:pt-32">
            <LatestUpdates items={latestUpdates} />
          </div>
        </Container>
      </section>
    </>
  );
}
