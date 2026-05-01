export function UMMSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 200" className={className} aria-hidden="true">
      {/* Van body */}
      <rect x="20" y="80" width="200" height="80" rx="8" fill="var(--color-agro-yellow)" opacity={0.7} />
      <rect x="180" y="60" width="60" height="100" rx="8" fill="var(--color-agro-yellow-soft)" opacity={0.6} />
      {/* Windshield */}
      <rect x="190" y="68" width="40" height="32" rx="4" fill="#fff" opacity={0.5} />
      {/* Telescopic tower */}
      <rect x="90" y="10" width="8" height="70" rx="2" fill="var(--color-agro-green-light)" opacity={0.8} />
      <rect x="86" y="6" width="16" height="8" rx="2" fill="var(--color-agro-green)" />
      {/* Cameras on tower */}
      <circle cx="80" cy="14" r="5" fill="var(--color-agro-green)" />
      <circle cx="108" cy="14" r="5" fill="var(--color-agro-green)" />
      {/* Wheels */}
      <circle cx="70" cy="164" r="16" fill="var(--color-agro-ink)" opacity={0.6} />
      <circle cx="70" cy="164" r="8" fill="var(--color-agro-mute)" opacity={0.5} />
      <circle cx="200" cy="164" r="16" fill="var(--color-agro-ink)" opacity={0.6} />
      <circle cx="200" cy="164" r="8" fill="var(--color-agro-mute)" opacity={0.5} />
      {/* Starlink dish */}
      <ellipse cx="140" cy="76" rx="20" ry="6" fill="#fff" opacity={0.4} />
    </svg>
  );
}
