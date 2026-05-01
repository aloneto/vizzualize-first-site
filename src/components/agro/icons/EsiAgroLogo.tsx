export function EsiAgroLogo({ variant = "light", className = "" }: { variant?: "light" | "dark"; className?: string }) {
  const esi = variant === "light" ? "#fff" : "var(--color-agro-ink)";
  const pipe = "var(--color-agro-yellow)";
  const agro = variant === "light" ? "#fff" : "var(--color-agro-ink)";

  return (
    <svg viewBox="0 0 160 40" className={className} aria-label="ESI Agro" role="img">
      {/* Leaf mark */}
      <path
        d="M8 30C8 16 18 8 32 8c0 0-6 4-10 12s-4 14-4 14"
        fill="var(--color-agro-green)"
        opacity={0.9}
      />
      <path
        d="M14 28c4-10 10-16 18-20"
        fill="none"
        stroke={pipe}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="30" cy="10" r="2" fill={pipe} />
      {/* Text */}
      <text x="44" y="28" fontFamily="var(--font-agro-mono), monospace" fontSize="22" fontWeight="700" letterSpacing="-0.5">
        <tspan fill={esi}>esi</tspan>
        <tspan fill={pipe}>|</tspan>
        <tspan fill={agro}>agro</tspan>
      </text>
    </svg>
  );
}
