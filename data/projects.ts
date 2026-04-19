export type ProjectCardItem = {
  title: string;
  description: string;
  href: string;
  status: string;
  tags: string[];
  anchorId?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  thumbnailFit?: "cover" | "contain";
};

export type FeaturedShowcaseItem = {
  title: string;
  description: string;
  href: string;
  status: string;
  ctaLabel: string;
  eyebrow: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  thumbnailFit?: "cover" | "contain";
};

export type LatestUpdateItem = {
  title: string;
  description: string;
  href: string;
  section: string;
  timeLabel: string;
  descriptionLinkLabel?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  thumbnailFit?: "cover" | "contain";
};

export type GameCatalogItem = {
  title: string;
  description: string;
  href: string;
  status: "Playable" | "In Progress" | "Prototype" | "Concept";
  tags: string[];
  ctaLabel: string;
  summary: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  thumbnailFit?: "cover" | "contain";
};

export type DevelopmentTrackItem = {
  title: string;
  description: string;
  status: string;
};

const bubbleBashThumbnailSrc = "/games/bubble-bash/thumbnail.png";
const bubbleBashThumbnailAlt =
  "BubbleBash thumbnail with orange and purple bubbles colliding behind the game logo.";
const bubbleBashDescription =
  "BubbleBash is a survival-style arena game. Grow in size by consuming everything smaller than you and avoid the larger bubbles hunting you down. It’s simple to pick up, but quickly turns into a tense, strategic fight for dominance where every move matters and one mistake can cost everything.";
const missileStrikeThumbnailSrc = "/games/missile-strike/missile_strike_thumbnail.png";
const missileStrikeThumbnailAlt =
  "Missile Strike thumbnail showing a missile launch scene for the arcade game.";
const missileStrikeDescription =
  "Missile Strike is a fast paced arcade game. Defend your city from the constant bombardment of incoming missiles and save your people from disaster!";
const heightmapGeneratorThumbnailSrc = "/tools/heightmap-generator/thumbnail.png";
const heightmapGeneratorThumbnailAlt =
  "Heightmap Generator thumbnail showing snowy mountain peaks under a bright sky.";

export const games: ProjectCardItem[] = [
  {
    title: "BubbleBash",
    description: bubbleBashDescription,
    href: "/games/bubble-bash",
    status: "Playable",
    tags: ["Godot", "Browser Game", "Arcade"],
    thumbnailSrc: bubbleBashThumbnailSrc,
    thumbnailAlt: bubbleBashThumbnailAlt,
  },
  {
    title: "Missile Strike",
    description: missileStrikeDescription,
    href: "/games/missile-strike",
    status: "Playable",
    tags: ["Godot", "Browser Game", "Arcade"],
    thumbnailSrc: missileStrikeThumbnailSrc,
    thumbnailAlt: missileStrikeThumbnailAlt,
    thumbnailFit: "contain",
  },
  {
    title: "Arena Zero",
    description:
      "A compact combat prototype for quick rounds, enemy pattern tests, and upgrade ideas that might actually stick.",
    href: "/games/arena-zero",
    status: "Prototype",
    tags: ["Arena", "Combat", "Prototype"],
  },
];

export const gameCatalog: GameCatalogItem[] = [
  {
    title: "BubbleBash",
    description: bubbleBashDescription,
    href: "/games/bubble-bash",
    status: "Playable",
    tags: ["Godot", "Browser Game", "Featured"],
    ctaLabel: "Play BubbleBash",
    summary: bubbleBashDescription,
    thumbnailSrc: bubbleBashThumbnailSrc,
    thumbnailAlt: bubbleBashThumbnailAlt,
  },
  {
    title: "Missile Strike",
    description: missileStrikeDescription,
    href: "/games/missile-strike",
    status: "Playable",
    tags: ["Godot", "Browser Game", "Arcade"],
    ctaLabel: "Play Missile Strike",
    summary: missileStrikeDescription,
    thumbnailSrc: missileStrikeThumbnailSrc,
    thumbnailAlt: missileStrikeThumbnailAlt,
    thumbnailFit: "contain",
  },
  {
    title: "Road Rage Crash",
    description:
      "A future browser racer centered on responsive handling, short laps, and a clean arcade feel.",
    href: "/games/racing-game",
    status: "Prototype",
    tags: ["Racing", "Arcade", "Browser"],
    ctaLabel: "View concept",
    summary:
      "This slot is for an arcade racing project built around quick retries, readable tracks, and chasing better lap times.",
  },
  {
    title: "Temple Run-style Game",
    description:
      "An endless runner slot aimed at momentum, obstacle flow, and fast restart scoring.",
    href: "/games/temple-run-style-game",
    status: "Prototype",
    tags: ["Runner", "Endless", "Score Chase"],
    ctaLabel: "View concept",
    summary:
      "This page is reserved for a browser-first runner with readable routes, quick failures, and runs that feel worth retrying.",
  },
  {
    title: "Skyline Striker",
    description:
      "A short-session aerial dodging idea with score pressure and a lot of near-miss moments.",
    href: "/games/skyline-striker",
    status: "Concept",
    tags: ["Arcade", "Aerial", "High Score"],
    ctaLabel: "Open placeholder",
    summary:
      "Skyline Striker is the slot for a pure score-attack game: short runs, escalating pressure, and a reason to hit retry fast.",
  },
  {
    title: "Arena Zero",
    description:
      "A compact combat prototype for quick rounds, enemy pattern tests, and upgrade ideas that might actually stick.",
    href: "/games/arena-zero",
    status: "In Progress",
    tags: ["Arena", "Combat", "Prototype"],
    ctaLabel: "Open placeholder",
    summary:
      "Arena Zero is where a tighter combat game could live if the loop proves fun enough to keep pushing.",
  },
  {
    title: "Dungeon Loop",
    description:
      "A run-based crawler idea mixing short loops, procedural rooms, and browser-friendly session length.",
    href: "/games/dungeon-loop",
    status: "Prototype",
    tags: ["Dungeon", "Run-Based", "Adventure"],
    ctaLabel: "Open placeholder",
    summary:
      "Dungeon Loop keeps a space open for a browser crawler that is easy to restart but still has some long-term progression to chase.",
  },
];

export const gameDevelopmentTracks: DevelopmentTrackItem[] = [
  {
    title: "More browser-first releases",
    description:
      "The goal is to keep adding browser games that are actually playable, not just concept art with a route attached.",
    status: "Active direction",
  },
  {
    title: "Prototype routes already reserved",
    description:
      "The routes are already there, so ideas can grow into proper pages without rebuilding the whole section every time.",
    status: "Ready to expand",
  },
  {
    title: "Arcade-friendly pacing",
    description:
      "I keep drifting toward arcade loops that start fast, read clearly, and make retrying feel natural.",
    status: "Core goal",
  },
];

export const tools: ProjectCardItem[] = [
  {
    title: "Heightmap Generator",
    description:
      "A terrain tool for generating PNG files. Use in your browser, preview quickly, and export a useful heightmap for game development",
    href: "/tools/heightmap-generator/index.html",
    status: "Live",
    tags: ["Tooling", "Terrain", "Game Dev"],
    anchorId: "heightmap-generator",
    thumbnailSrc: heightmapGeneratorThumbnailSrc,
    thumbnailAlt: heightmapGeneratorThumbnailAlt,
    thumbnailFit: "contain",
  },
  {
    title: "Utility Lab",
    description:
      "A shelf for the little helpers I end up building when a workflow gets annoying enough.",
    href: "/tools",
    status: "Planned",
    tags: ["Utilities", "Workflow", "Browser"],
  },
  {
    title: "Level Setup Helper",
    description:
      "A browser helper for roughing in values, presets, and repetitive scene setup without clicking through the same steps all day.",
    href: "/tools",
    status: "Backlog",
    tags: ["Tooling", "Workflow", "Game Dev"],
  },
];

export const experiments: ProjectCardItem[] = [
  {
    title: "Interaction Sandbox",
    description:
      "Where I test UI bits, controls, and tiny mechanics before deciding whether they deserve a full project.",
    href: "/experiments",
    status: "Active concept",
    tags: ["R&D", "Interaction", "Frontend"],
  },
  {
    title: "Rendering Tests",
    description:
      "Small browser rendering tests for shaders, particles, animation, and performance weirdness.",
    href: "/experiments",
    status: "Planned",
    tags: ["Graphics", "Performance", "Web"],
  },
  {
    title: "Random Experiment",
    description:
      "A rotating slot for the odd ideas that do not fit anywhere else yet.",
    href: "/experiments",
    status: "Rotating slot",
    tags: ["Wildcard", "Prototype", "Lab"],
    anchorId: "random-experiment",
  },
];

export const featuredShowcase: FeaturedShowcaseItem[] = [
  {
    title: "Missile Strike",
    description: missileStrikeDescription,
    href: "/games/missile-strike",
    status: "Playable",
    ctaLabel: "Play Missile Strike",
    eyebrow: "Featured game",
    thumbnailSrc: missileStrikeThumbnailSrc,
    thumbnailAlt: missileStrikeThumbnailAlt,
  },
  {
    title: "Heightmap Generator",
    description:
      "A terrain tool for generating landforms, poking at erosion shapes, and exporting a heightmap useful for game development",
    href: "/tools/heightmap-generator/index.html",
    status: "Live",
    ctaLabel: "Open Heightmap Generator",
    eyebrow: "Featured tool",
    thumbnailSrc: heightmapGeneratorThumbnailSrc,
    thumbnailAlt: heightmapGeneratorThumbnailAlt,
    thumbnailFit: "contain",
  },
  {
    title: "Random Experiment",
    description:
      "The catch-all slot for the ideas that do not fit a lane yet, from rendering tests to tiny interactive jokes.",
    href: "/experiments#random-experiment",
    status: "Rotating concept",
    ctaLabel: "Open Random Experiment",
    eyebrow: "Featured experiment",
  },
];

export const latestUpdates: LatestUpdateItem[] = [
  {
    title: "Missile Strike is now live and ready to play!",
    description: "",
    href: "/games/missile-strike",
    section: "Games",
    timeLabel: "Current focus",
    descriptionLinkLabel: "Click here to play now!",
    thumbnailSrc: missileStrikeThumbnailSrc,
    thumbnailAlt: missileStrikeThumbnailAlt,
    thumbnailFit: "contain",
  },
  {
    title: "The heightmap generator is live in the tools section",
    description:
      "It now has a proper thumbnail, a direct route, and a clearer place on the site as the first real utility in the tools lineup.",
    href: "/tools/heightmap-generator/index.html",
    section: "Tools",
    timeLabel: "Now live",
    thumbnailSrc: heightmapGeneratorThumbnailSrc,
    thumbnailAlt: heightmapGeneratorThumbnailAlt,
    thumbnailFit: "contain",
  },
  {
    title: "Experiments stay loose on purpose",
    description:
      "That section is where rendering tests, UI ideas, and the weirder one-off builds land first.",
    href: "/experiments",
    section: "Experiments",
    timeLabel: "Still messy",
  },
];

export const surpriseDestinations = [
  "/games",
  "/games/missile-strike",
  "/games/bubble-bash",
  "/tools",
  "/experiments",
  "/support",
  "/about",
  "/useful-tools",
];
