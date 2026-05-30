import { boolean, index, jsonb, pgTable, text, timestamp, uuid, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  displayName: varchar("display_name", { length: 32 }).notNull(),
  passwordHash: text("password_hash").notNull(),
  marketingOptIn: boolean("marketing_opt_in").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const games = pgTable("games", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 64 }).notNull().unique(),
  name: varchar("name", { length: 80 }).notNull(),
  supportsScoreSubmissions: boolean("supports_score_submissions").notNull().default(false),
  supportsPublicLeaderboard: boolean("supports_public_leaderboard").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const scoreSubmissions = pgTable(
  "score_submissions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    gameId: uuid("game_id")
      .notNull()
      .references(() => games.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    score: integer("score").notNull(),
    metadata: jsonb("metadata").$type<Record<string, string | number | boolean>>(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    gameCreatedAtIdx: index("score_submissions_game_created_at_idx").on(table.gameId, table.createdAt),
    gameScoreIdx: index("score_submissions_game_score_idx").on(table.gameId, table.score),
    userCreatedAtIdx: index("score_submissions_user_created_at_idx").on(table.userId, table.createdAt),
  }),
);

export type UserRecord = typeof users.$inferSelect;
export type GameRecord = typeof games.$inferSelect;
export type ScoreSubmissionRecord = typeof scoreSubmissions.$inferSelect;
