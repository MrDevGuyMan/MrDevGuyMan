import { GamePlaceholderPage } from "@/components/games/game-placeholder-page";

export default function DungeonLoopPage() {
  return (
    <GamePlaceholderPage
      eyebrow="Future Game"
      title="Dungeon Loop"
      description="A placeholder route for a future run-based browser crawler with short loops, modular rooms, and layered progression."
      status="Prototype"
      tags={["Dungeon", "Run-Based", "Adventure"]}
    />
  );
}
