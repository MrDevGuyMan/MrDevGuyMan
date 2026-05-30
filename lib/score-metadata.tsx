export type ScoreMetadata = Record<string, string | number | boolean>;

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
