import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { registeredGames } from "@/lib/games";

export default function LeaderboardsPage() {
  const activeGames = registeredGames.filter((game) => game.supportsPublicLeaderboard);
  const futureGames = registeredGames.filter((game) => !game.supportsPublicLeaderboard);

  return (
    <Container className="space-y-10 pb-4 md:space-y-12">
      <PageHero
        eyebrow="Leaderboards"
        title="Track the best runs across supported games."
        description="Create a free account to save scores and compete on leaderboards."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="gold-trim section-shell rounded-[1.8rem] p-6 [--trim-left:80%] [--trim-top:66%]">
          <p className="eyebrow-label text-[11px]">Live now</p>
          <div className="mt-5 space-y-4">
            {activeGames.map((game) => (
              <article key={game.slug} className="rounded-[1.4rem] border border-line bg-[rgba(255,255,255,0.02)] p-5">
                <h2 className="text-xl font-semibold text-foreground">{game.name}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Public scores are live for this game.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href={game.href} className="btn-secondary !px-5 !py-2.5 !text-sm">
                    Open game
                  </Link>
                  <Link href={`/leaderboards/${game.slug}`} className="btn-primary !px-5 !py-2.5 !text-sm">
                    View leaderboard
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="gold-trim section-shell rounded-[1.8rem] p-6 [--trim-left:80%] [--trim-top:66%]">
          <p className="eyebrow-label text-[11px]">Future support</p>
          <div className="mt-5 space-y-4">
            {futureGames.map((game) => (
              <article key={game.slug} className="rounded-[1.4rem] border border-line bg-[rgba(255,255,255,0.02)] p-5">
                <h2 className="text-xl font-semibold text-foreground">{game.name}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  This game is registered for future account/stat support, but public scoring is not live yet.
                </p>
                <Link href={game.href} className="btn-secondary mt-4 !px-5 !py-2.5 !text-sm">
                  Open game page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
