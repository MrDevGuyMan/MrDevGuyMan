import Link from "next/link";
import { redirect } from "next/navigation";
import { asc, desc, eq } from "drizzle-orm";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { auth } from "@/lib/auth/session";
import { getDb } from "@/lib/db";
import { games, scoreSubmissions, users } from "@/lib/db/schema";
import { ensureGamesSeeded } from "@/lib/game-registry";
import { ScoreMetadataDisplay } from "@/lib/score-metadata";

export const dynamic = "force-dynamic";

function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  await ensureGamesSeeded();
  const db = getDb();

  const profile = await db.query.users.findFirst({
    where: eq(users.id, session.user.id),
  });

  if (!profile) {
    redirect("/login");
  }

  const scoreRows = await db
    .select({
      scoreId: scoreSubmissions.id,
      score: scoreSubmissions.score,
      metadata: scoreSubmissions.metadata,
      createdAt: scoreSubmissions.createdAt,
      gameSlug: games.slug,
      gameName: games.name,
    })
    .from(scoreSubmissions)
    .innerJoin(games, eq(scoreSubmissions.gameId, games.id))
    .where(eq(scoreSubmissions.userId, session.user.id))
    .orderBy(asc(games.name), desc(scoreSubmissions.score), desc(scoreSubmissions.createdAt));

  const groupedScores = scoreRows.reduce<Record<string, typeof scoreRows>>((groups, row) => {
    groups[row.gameSlug] ??= [];
    groups[row.gameSlug].push(row);
    return groups;
  }, {});

  return (
    <Container className="space-y-10 pb-4 md:space-y-12">
      <PageHero
        eyebrow="My account"
        title={profile.displayName}
        description="Your saved profile and score history live here. Public leaderboards only show your display name."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/leaderboards" className="btn-secondary">
            Browse leaderboards
          </Link>
          <SignOutButton />
        </div>
      </PageHero>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="gold-trim section-shell rounded-[1.6rem] p-6 [--trim-left:82%] [--trim-top:68%]">
          <p className="eyebrow-label text-[11px]">Email</p>
          <p className="mt-3 text-lg font-semibold text-foreground">{profile.email}</p>
        </div>
        <div className="gold-trim section-shell rounded-[1.6rem] p-6 [--trim-left:82%] [--trim-top:68%]">
          <p className="eyebrow-label text-[11px]">Member since</p>
          <p className="mt-3 text-lg font-semibold text-foreground">{formatDate(profile.createdAt)}</p>
        </div>
        <div className="gold-trim section-shell rounded-[1.6rem] p-6 [--trim-left:82%] [--trim-top:68%]">
          <p className="eyebrow-label text-[11px]">Marketing updates</p>
          <p className="mt-3 text-lg font-semibold text-foreground">
            {profile.marketingOptIn ? "Opted in" : "Not subscribed"}
          </p>
        </div>
      </section>

      <section className="gold-trim section-shell rounded-[2rem] p-7 [--trim-left:84%] [--trim-top:72%] md:p-8">
        <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow-label text-[11px]">My scores</p>
            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.04em] text-foreground">
              Saved runs by game
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            TODO: add profile editing and explicit newsletter preference management before expanding account features.
          </p>
        </div>

        {scoreRows.length === 0 ? (
          <div className="mt-6 rounded-[1.5rem] border border-dashed border-line bg-[rgba(255,255,255,0.02)] px-5 py-6 text-sm leading-7 text-muted">
            No saved scores yet. When a supported game submits a run through <code>submitGameScore</code>, it will show up here automatically.
          </div>
        ) : (
          <div className="mt-6 space-y-5">
            {Object.entries(groupedScores).map(([gameSlug, rows]) => (
              <article key={gameSlug} className="rounded-[1.5rem] border border-line bg-[rgba(255,255,255,0.02)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{rows[0]?.gameName}</h3>
                    <p className="mt-1 text-sm text-muted">{rows.length} saved {rows.length === 1 ? "score" : "scores"}</p>
                  </div>
                  <Link href={`/leaderboards/${gameSlug}`} className="btn-secondary !px-5 !py-2.5 !text-sm">
                    View leaderboard
                  </Link>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="text-ink-400">
                      <tr>
                        <th className="px-3 py-2 font-medium">Score</th>
                        <th className="px-3 py-2 font-medium">Date</th>
                        <th className="px-3 py-2 font-medium">Metadata</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.scoreId} className="border-t border-[rgba(255,255,255,0.06)]">
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
              </article>
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}
