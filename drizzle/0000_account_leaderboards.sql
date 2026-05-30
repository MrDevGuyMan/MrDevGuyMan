CREATE TABLE IF NOT EXISTS "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" varchar(320) NOT NULL UNIQUE,
  "display_name" varchar(32) NOT NULL,
  "password_hash" text NOT NULL,
  "marketing_opt_in" boolean NOT NULL DEFAULT false,
  "created_at" timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "games" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "slug" varchar(64) NOT NULL UNIQUE,
  "name" varchar(80) NOT NULL,
  "supports_score_submissions" boolean NOT NULL DEFAULT false,
  "supports_public_leaderboard" boolean NOT NULL DEFAULT false,
  "created_at" timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "score_submissions" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "game_id" uuid NOT NULL REFERENCES "games"("id") ON DELETE cascade,
  "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE cascade,
  "score" integer NOT NULL,
  "metadata" jsonb,
  "created_at" timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "score_submissions_game_created_at_idx" ON "score_submissions" ("game_id", "created_at");
CREATE INDEX IF NOT EXISTS "score_submissions_game_score_idx" ON "score_submissions" ("game_id", "score");
CREATE INDEX IF NOT EXISTS "score_submissions_user_created_at_idx" ON "score_submissions" ("user_id", "created_at");
