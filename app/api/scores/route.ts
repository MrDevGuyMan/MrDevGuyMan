import { and, desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { submitScoreSchema } from "@/lib/auth/validation";
import { auth } from "@/lib/auth/session";
import { getDb } from "@/lib/db";
import { scoreSubmissions } from "@/lib/db/schema";
import { findRegisteredGameRecord } from "@/lib/game-registry";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json(
      {
        ok: false,
        code: "login_required",
        message: "Sign in to save this score.",
      },
      { status: 401 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsedBody = submitScoreSchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid_score",
        message: parsedBody.error.issues[0]?.message ?? "Invalid score submission.",
      },
      { status: 400 },
    );
  }

  const game = await findRegisteredGameRecord(parsedBody.data.gameSlug);

  if (!game || !game.supportsScoreSubmissions) {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid_game",
        message: "This game does not currently support saved scores.",
      },
      { status: 400 },
    );
  }

  const db = getDb();

  // TODO: Add durable per-user and per-IP rate limiting before launching public score submissions.
  const recentSubmission = await db.query.scoreSubmissions.findFirst({
    where: and(
      eq(scoreSubmissions.gameId, game.id),
      eq(scoreSubmissions.userId, session.user.id),
    ),
    orderBy: desc(scoreSubmissions.createdAt),
  });

  if (recentSubmission) {
    const lastSubmittedAt = new Date(recentSubmission.createdAt).getTime();
    const now = Date.now();

    if (Number.isFinite(lastSubmittedAt) && now - lastSubmittedAt < 5000) {
      return NextResponse.json(
        {
          ok: false,
          code: "invalid_score",
          message: "Please wait a moment before submitting another score.",
        },
        { status: 429 },
      );
    }
  }

  const [createdScore] = await db
    .insert(scoreSubmissions)
    .values({
      gameId: game.id,
      userId: session.user.id,
      score: Math.floor(parsedBody.data.score),
      metadata: parsedBody.data.metadata,
    })
    .returning({ id: scoreSubmissions.id });

  return NextResponse.json({
    ok: true,
    scoreId: createdScore.id,
  });
}
