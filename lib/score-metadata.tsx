export type ScoreMetadata = Record<string, string | number | boolean>;

function formatOrdinal(value: number) {
  const mod100 = value % 100;

  if (mod100 >= 11 && mod100 <= 13) {
    return `${value}th`;
  }

  switch (value % 10) {
    case 1:
      return `${value}st`;
    case 2:
      return `${value}nd`;
    case 3:
      return `${value}rd`;
    default:
      return `${value}th`;
  }
}

function formatBubbleBashMetadata(metadata: ScoreMetadata) {
  const rows: string[] = [];

  if (typeof metadata.food === "number" && Number.isFinite(metadata.food)) {
    rows.push(`Food: ${metadata.food}`);
  }

  if (typeof metadata.ai === "number" && Number.isFinite(metadata.ai)) {
    rows.push(`AI: ${metadata.ai}`);
  }

  if (typeof metadata.survival === "number" && Number.isFinite(metadata.survival)) {
    rows.push(`Survival: ${metadata.survival}`);
  }

  if (typeof metadata.combo === "number" && Number.isFinite(metadata.combo)) {
    rows.push(`Combo: ${metadata.combo}`);
  }

  if (typeof metadata.winBonus === "number" && Number.isFinite(metadata.winBonus)) {
    rows.push(`Win bonus: ${metadata.winBonus}`);
  }

  if (typeof metadata.arenaCleared === "number" && Number.isFinite(metadata.arenaCleared)) {
    rows.push(`Arena cleared: ${metadata.arenaCleared}%`);
  }

  if (typeof metadata.finalSize === "number" && Number.isFinite(metadata.finalSize)) {
    rows.push(`Final size: ${metadata.finalSize.toFixed(2)}`);
  }

  if (typeof metadata.rank === "number" && Number.isFinite(metadata.rank)) {
    rows.push(`Rank: ${formatOrdinal(metadata.rank)}`);
  }

  return rows;
}

function formatMissileStrikeMetadata(metadata: ScoreMetadata) {
  const rows: string[] = [];

  if (typeof metadata.accuracy === "number" && Number.isFinite(metadata.accuracy)) {
    rows.push(`Accuracy: ${metadata.accuracy.toFixed(1)}%`);
  }

  if (typeof metadata.survivalTime === "number" && Number.isFinite(metadata.survivalTime)) {
    rows.push(`Survival: ${metadata.survivalTime.toFixed(2)}s`);
  }

  if (typeof metadata.wavesCleared === "number" && Number.isFinite(metadata.wavesCleared)) {
    rows.push(`Waves cleared: ${metadata.wavesCleared}`);
  }

  if (typeof metadata.missilesFired === "number" && Number.isFinite(metadata.missilesFired)) {
    rows.push(`Missiles fired: ${metadata.missilesFired}`);
  }

  if (typeof metadata.enemiesDestroyed === "number" && Number.isFinite(metadata.enemiesDestroyed)) {
    rows.push(`Enemies destroyed: ${metadata.enemiesDestroyed}`);
  }

  return rows;
}

function formatUnknownMetadata(metadata: ScoreMetadata) {
  return Object.entries(metadata)
    .filter(([, value]) => typeof value === "string" || typeof value === "number" || typeof value === "boolean")
    .map(([key, value]) => `${key}: ${String(value)}`);
}

export function getFormattedScoreMetadata(gameSlug: string, metadata: ScoreMetadata | null | undefined) {
  if (!metadata) {
    return [];
  }

  return gameSlug === "missile-strike"
    ? formatMissileStrikeMetadata(metadata)
    : gameSlug === "bubble-bash"
      ? formatBubbleBashMetadata(metadata)
      : formatUnknownMetadata(metadata);
}

export function ScoreMetadataDisplay({
  gameSlug,
  metadata,
}: {
  gameSlug: string;
  metadata: ScoreMetadata | null | undefined;
}) {
  const lines = getFormattedScoreMetadata(gameSlug, metadata);

  if (lines.length === 0) {
    return <span>-</span>;
  }

  return (
    <div className="space-y-1">
      {lines.map((line) => (
        <div key={line}>{line}</div>
      ))}
    </div>
  );
}
