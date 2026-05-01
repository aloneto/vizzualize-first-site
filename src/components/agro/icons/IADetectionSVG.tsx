export function IADetectionSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 180" className={className} aria-hidden="true">
      {/* Monitor frame */}
      <rect x="20" y="10" width="200" height="130" rx="8" fill="var(--color-agro-earth)" opacity={0.3} />
      <rect x="28" y="18" width="184" height="114" rx="4" fill="var(--color-agro-ink)" opacity={0.15} />
      {/* Monitor stand */}
      <rect x="100" y="140" width="40" height="12" rx="2" fill="var(--color-agro-earth)" opacity={0.4} />
      <rect x="80" y="150" width="80" height="6" rx="3" fill="var(--color-agro-earth)" opacity={0.3} />
      {/* Bounding box 1 - cow */}
      <rect x="40" y="40" width="60" height="50" rx="2" fill="none" stroke="var(--color-agro-yellow)" strokeWidth="2" />
      <text x="44" y="36" fontFamily="monospace" fontSize="8" fill="var(--color-agro-yellow)">BOI · 0.94</text>
      {/* Bounding box 2 - cow */}
      <rect x="120" y="50" width="55" height="45" rx="2" fill="none" stroke="var(--color-agro-yellow)" strokeWidth="2" />
      <text x="124" y="46" fontFamily="monospace" fontSize="8" fill="var(--color-agro-yellow)">BOI · 0.91</text>
      {/* Cow silhouettes */}
      <ellipse cx="70" cy="70" rx="22" ry="14" fill="var(--color-agro-green-light)" opacity={0.4} />
      <ellipse cx="147" cy="76" rx="20" ry="12" fill="var(--color-agro-green-light)" opacity={0.4} />
    </svg>
  );
}
