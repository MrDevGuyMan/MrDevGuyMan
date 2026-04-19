import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

const gamePath = "/games/bubble-bash/index.html";
const thumbnailPath = "/games/bubble-bash/thumbnail.png";
const bubbleBashDescription =
  "BubbleBash is a survival-style arena game. Grow in size by consuming everything smaller than you and avoid the larger bubbles hunting you down. It’s simple to pick up, but quickly turns into a tense, strategic fight for dominance where every move matters and one mistake can cost everything.";

export default function BubbleBashPage() {
  return (
    <Container className="space-y-10 pb-4 md:space-y-12">
      <PageHero
        eyebrow="Featured Game"
        title="BubbleBash"
        description={bubbleBashDescription}
      >
        <div className="flex flex-wrap gap-3">
          <a href={gamePath} target="_blank" className="btn-primary">
            Launch in new tab
          </a>
          <Link href="/games" className="btn-secondary">
            Back to games
          </Link>
        </div>
      </PageHero>

      <section className="gold-trim section-shell rounded-[2rem] [--trim-left:84%] [--trim-top:74%]">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <p className="eyebrow-label text-[11px]">Game preview</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Use the launch button above to open the playable build.
            </p>
          </div>
          <span className="surface-tag rounded-full px-3 py-1 text-xs">Browser / Godot</span>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-[2rem] bg-black">
          <Image
            src={thumbnailPath}
            alt="BubbleBash thumbnail preview"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.02),rgba(4,4,4,0.34))]" />
        </div>
      </section>
    </Container>
  );
}
