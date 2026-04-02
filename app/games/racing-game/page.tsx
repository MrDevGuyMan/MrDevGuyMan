import { GamePlaceholderPage } from "@/components/games/game-placeholder-page";

export default function RacingGamePage() {
  return (
    <GamePlaceholderPage
      eyebrow="Game Route"
      title="Road Rage Crash"
      description="A future browser racing project built around quick restarts, clean handling, and arcade-style momentum."
      status="Prototype"
      tags={["Racing", "Arcade", "Browser"]}
    />
  );
}
