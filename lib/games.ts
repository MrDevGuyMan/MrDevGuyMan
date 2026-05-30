export type RegisteredGame = {
  slug: string;
  name: string;
  href: string;
  supportsScoreSubmissions: boolean;
  supportsPublicLeaderboard: boolean;
};

export const registeredGames: RegisteredGame[] = [
  {
    slug: "missile-strike",
    name: "Missile Strike",
    href: "/games/missile-strike",
    supportsScoreSubmissions: true,
    supportsPublicLeaderboard: true,
  },
  {
    slug: "arena-zero",
    name: "Arena Zero",
    href: "/games/arena-zero",
    supportsScoreSubmissions: false,
    supportsPublicLeaderboard: false,
  },
  {
    slug: "dungeon-loop",
    name: "Dungeon Loop",
    href: "/games/dungeon-loop",
    supportsScoreSubmissions: false,
    supportsPublicLeaderboard: false,
  },
  {
    slug: "war-of-realms",
    name: "War of Realms",
    href: "/games/war-of-realms",
    supportsScoreSubmissions: false,
    supportsPublicLeaderboard: false,
  },
];

export const leaderboardEnabledGameSlugs = new Set(
  registeredGames
    .filter((game) => game.supportsPublicLeaderboard)
    .map((game) => game.slug),
);

export function getRegisteredGame(gameSlug: string) {
  return registeredGames.find((game) => game.slug === gameSlug) ?? null;
}
