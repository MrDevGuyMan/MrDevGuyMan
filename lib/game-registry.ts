import "server-only";

import { eq, sql } from "drizzle-orm";

import { getDb } from "@/lib/db";
import { games } from "@/lib/db/schema";
import { getRegisteredGame, registeredGames } from "@/lib/games";

let seedAttempted = false;

export async function ensureGamesSeeded() {
  if (seedAttempted) {
    return;
  }

  const db = getDb();
  await db
    .insert(games)
    .values(
      registeredGames.map((game) => ({
        slug: game.slug,
        name: game.name,
        supportsScoreSubmissions: game.supportsScoreSubmissions,
        supportsPublicLeaderboard: game.supportsPublicLeaderboard,
      })),
    )
    .onConflictDoUpdate({
      target: games.slug,
      set: {
        name: sql`excluded.name`,
        supportsScoreSubmissions: sql`excluded.supports_score_submissions`,
        supportsPublicLeaderboard: sql`excluded.supports_public_leaderboard`,
      },
    });

  seedAttempted = true;
}

export async function findRegisteredGameRecord(gameSlug: string) {
  const registeredGame = getRegisteredGame(gameSlug);

  if (!registeredGame) {
    return null;
  }

  await ensureGamesSeeded();
  const db = getDb();

  return db.query.games.findFirst({
    where: eq(games.slug, gameSlug),
  });
}
