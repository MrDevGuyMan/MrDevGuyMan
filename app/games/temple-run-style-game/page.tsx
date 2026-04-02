import { GamePlaceholderPage } from "@/components/games/game-placeholder-page";

export default function TempleRunStyleGamePage() {
  return (
    <GamePlaceholderPage
      eyebrow="Game Route"
      title="Temple Run-style Game"
      description="An endless runner concept reserved for obstacle flow, readable routes, and quick replayable sessions in the browser."
      status="Prototype"
      tags={["Runner", "Endless", "Score Chase"]}
    />
  );
}

