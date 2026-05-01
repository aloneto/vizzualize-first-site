export function TotemSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 320" className={className} aria-hidden="true">
      {/* Base */}
      <rect x="90" y="40" width="20" height="260" rx="4" fill="var(--color-agro-green-light)" opacity={0.6} />
      {/* Solar panel top */}
      <rect x="60" y="20" width="80" height="8" rx="2" fill="var(--color-agro-yellow)" />
      <rect x="70" y="12" width="60" height="8" rx="2" fill="var(--color-agro-yellow-soft)" />
      {/* Camera mounts */}
      <circle cx="75" cy="60" r="10" fill="var(--color-agro-green)" />
      <circle cx="125" cy="60" r="10" fill="var(--color-agro-green)" />
      <circle cx="75" cy="60" r="4" fill="#fff" opacity={0.8} />
      <circle cx="125" cy="60" r="4" fill="#fff" opacity={0.8} />
      {/* Middle panel */}
      <rect x="78" y="100" width="44" height="60" rx="4" fill="var(--color-agro-green)" opacity={0.4} />
      <rect x="82" y="104" width="36" height="24" rx="2" fill="var(--color-agro-yellow)" opacity={0.3} />
      {/* Speaker */}
      <circle cx="100" cy="180" r="12" fill="var(--color-agro-green)" opacity={0.5} />
      <circle cx="100" cy="180" r="6" fill="var(--color-agro-green-light)" opacity={0.4} />
      {/* Ground base */}
      <rect x="70" y="290" width="60" height="16" rx="4" fill="var(--color-agro-earth)" opacity={0.5} />
    </svg>
  );
}
