import { GamePlaceholderPage } from "@/components/games/game-placeholder-page";

export default function ArenaZeroPage() {
  return (
    <GamePlaceholderPage
      eyebrow="Future Game"
      title="Arena Zero"
      description="A compact combat route held for a future browser arena prototype built around readable patterns and repeat runs."
      status="In Progress"
      tags={["Arena", "Combat", "Prototype"]}
    />
  );
}

