import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

type GamePlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
};

export function GamePlaceholderPage({
  eyebrow,
  title,
  description,
  status,
  tags,
}: GamePlaceholderPageProps) {
  return (
    <Container className="space-y-10">
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <div className="gold-trim section-shell rounded-[1.6rem] p-6 text-sm leading-7 text-muted [--trim-left:80%] [--trim-top:66%]">
          This route is reserved so the project can grow into a full game page
          later with screenshots, playable builds, controls, and release notes
          without changing the site structure.
        </div>
      </PageHero>

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="gold-trim section-shell rounded-[1.6rem] p-6 [--trim-left:82%] [--trim-top:68%]">
          <p className="eyebrow-label text-[11px]">Current status</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
            {status}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            The route is live and ready for real game content as the project
            direction becomes more defined.
          </p>
        </div>
        <div className="gold-trim section-shell rounded-[1.6rem] p-6 [--trim-left:82%] [--trim-top:68%]">
          <p className="eyebrow-label text-[11px]">Tags</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="surface-tag rounded-full px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Link href="/games" className="btn-secondary">
        Back to games
      </Link>
    </Container>
  );
}
