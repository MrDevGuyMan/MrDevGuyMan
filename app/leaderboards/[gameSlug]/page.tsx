import Link from "next/link";
import { asc, desc, eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { getDb } from "@/lib/db";
import { games, scoreSubmissions, users } from "@/lib/db/schema";
import { findRegisteredGameRecord } from "@/lib/game-registry";
import { getRegisteredGame } from "@/lib/games";
import { ScoreMetadataDisplay } from "@/lib/score-metadata";

export const dynamic = "force-dynamic";

function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export default async function GameLeaderboardPage({
  params,
}: {
  params: Promise<{ gameSlug: string }>;
}) {
  const { gameSlug } = await params;
  const game = await findRegisteredGameRecord(gameSlug);
  const registeredGame = getRegisteredGame(gameSlug);

  if (!game || !game.supportsPublicLeaderboard || !registeredGame) {
    notFound();
  }

  const db = getDb();
  const scores = await db
    .select({
      id: scoreSubmissions.id,
      score: scoreSubmissions.score,
      metadata: scoreSubmissions.metadata,
      createdAt: scoreSubmissions.createdAt,
      displayName: users.displayName,
      gameName: games.name,
    })
    .from(scoreSubmissions)
    .innerJoin(users, eq(scoreSubmissions.userId, users.id))
    .innerJoin(games, eq(scoreSubmissions.gameId, games.id))
    .where(eq(games.slug, gameSlug))
    .orderBy(desc(scoreSubmissions.score), asc(scoreSubmissions.createdAt))
    .limit(100);

  return (
    <Container className="space-y-10 pb-4 md:space-y-12">
      <PageHero
        eyebrow="Leaderboard"
        title={game.name}
        description="Only public-safe profile data is shown here. Email addresses stay private."
      >
        <div className="flex flex-wrap gap-3">
          <Link href={registeredGame.href} className="btn-secondary">
            Open game
          </Link>
          <Link href="/leaderboards" className="btn-primary">
            All leaderboards
          </Link>
        </div>
      </PageHero>

      <section className="gold-trim section-shell rounded-[2rem] p-7 [--trim-left:84%] [--trim-top:72%] md:p-8">
        <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow-label text-[11px]">Top scores</p>
            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.04em] text-foreground">
              Public ranking
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            Create a free account to save scores and compete on leaderboards.
          </p>
        </div>

        {scores.length === 0 ? (
          <div className="mt-6 rounded-[1.5rem] border border-dashed border-line bg-[rgba(255,255,255,0.02)] px-5 py-6 text-sm leading-7 text-muted">
            No saved scores yet. The first signed-in run will appear here.
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-ink-400">
                <tr>
                  <th className="px-3 py-2 font-medium">Rank</th>
                  <th className="px-3 py-2 font-medium">Player</th>
                  <th className="px-3 py-2 font-medium">Score</th>
                  <th className="px-3 py-2 font-medium">Date</th>
                  <th className="px-3 py-2 font-medium">Metadata</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((row, index) => (
                  <tr key={row.id} className="border-t border-[rgba(255,255,255,0.06)]">
                    <td className="px-3 py-3 font-semibold text-foreground">#{index + 1}</td>
                    <td className="px-3 py-3 text-foreground">{row.displayName}</td>
                    <td className="px-3 py-3 font-semibold text-foreground">{row.score.toLocaleString()}</td>
                    <td className="px-3 py-3 text-muted">{formatDate(row.createdAt)}</td>
                    <td className="px-3 py-3 text-muted">
                      <ScoreMetadataDisplay gameSlug={gameSlug} metadata={row.metadata ?? undefined} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </Container>
  );
}
