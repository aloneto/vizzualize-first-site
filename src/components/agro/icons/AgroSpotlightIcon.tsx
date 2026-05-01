export function AgroSpotlightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className} aria-hidden="true">
      {/* Circle border dashed */}
      <circle cx="90" cy="90" r="85" fill="none" stroke="var(--color-agro-yellow)" strokeWidth="2" strokeDasharray="8 4" opacity={0.5} />
      {/* Background circle */}
      <circle cx="90" cy="90" r="72" fill="var(--color-agro-green-deep)" opacity={0.3} />
      {/* Leaf */}
      <path
        d="M60 130C60 80 90 50 130 50c0 0-15 12-25 35s-12 40-12 40"
        fill="var(--color-agro-green)"
        opacity={0.9}
      />
      {/* Yellow curve through leaf */}
      <path
        d="M72 120c12-30 30-48 55-60"
        fill="none"
        stroke="var(--color-agro-yellow)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Wifi waves */}
      <path
        d="M115 50c8-4 12-10 12-10"
        fill="none"
        stroke="var(--color-agro-yellow)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.8}
      />
      <path
        d="M120 42c6-3 9-8 9-8"
        fill="none"
        stroke="var(--color-agro-yellow)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
}
