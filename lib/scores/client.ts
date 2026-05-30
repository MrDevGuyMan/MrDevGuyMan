"use client";

import type { ScoreMetadata } from "@/lib/auth/validation";

export type SubmitGameScoreInput = {
  gameSlug: string;
  score: number;
  metadata?: ScoreMetadata;
};

export type SubmitGameScoreResponse =
  | { ok: true; scoreId: string }
  | { ok: false; code: "login_required" | "invalid_score" | "invalid_game" | "server_error"; message: string };

/**
 * Browser games can call this helper after a run ends.
 * If the player is not signed in, it returns `login_required`
 * so the game can show: "Sign in to save this score."
 */
export async function submitGameScore(input: SubmitGameScoreInput): Promise<SubmitGameScoreResponse> {
  const response = await fetch("/api/scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const payload = (await response.json()) as SubmitGameScoreResponse;

  if (response.status === 401) {
    return {
      ok: false,
      code: "login_required",
      message: "Sign in to save this score.",
    };
  }

  return payload;
}
