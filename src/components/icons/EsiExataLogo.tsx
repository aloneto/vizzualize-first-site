type EsiExataLogoProps = {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
};

/**
 * Inline SVG logo for ESI Exata — matches official brand identity.
 * - "dark" variant: white/red on dark backgrounds (header/footer)
 * - "light" variant: navy/red on light backgrounds
 */
export function EsiExataLogo({ variant = "dark", showTagline = false, className = "" }: EsiExataLogoProps) {
  const navy = variant === "dark" ? "#FFFFFF" : "#1B1F3B";
  const red = "#E21219";
  const taglineColor = variant === "dark" ? "#9CA3AF" : "#6B7280";
  const h = showTagline ? 52 : 40;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 220 ${h}`}
      fill="none"
      aria-label="ESI Exata"
      className={className}
    >
      {/* Geometric "e" mark — angular chevron with 3 horizontal prongs */}
      <g transform="translate(0,2)">
        {/* Top prong (navy) */}
        <polygon points="0,18 13,4 36,4 36,9 16,9 5,18" fill={navy} />
        {/* Middle prong (red) */}
        <polygon points="5,16 28,16 28,21 5,21" fill={red} />
        {/* Bottom prong (navy) */}
        <polygon points="0,19 13,33 36,33 36,28 16,28 5,19" fill={navy} />
      </g>

      {/* "si" text — regular weight, follows the geometric "e" */}
      <text
        x="40"
        y="30"
        fontFamily="var(--font-sora), Sora, system-ui, sans-serif"
        fontWeight="400"
        fontSize="22"
        fill={navy}
        letterSpacing="0"
      >
        si
      </text>

      {/* Red separator bar */}
      <rect x="68" y="8" width="2.5" height="24" fill={red} rx="1" />

      {/* "exata" text — bold */}
      <text
        x="78"
        y="30"
        fontFamily="var(--font-sora), Sora, system-ui, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={navy}
        letterSpacing="0.5"
      >
        exata
      </text>

      {/* Tagline */}
      {showTagline && (
        <text
          x="40"
          y="47"
          fontFamily="var(--font-sora), Sora, system-ui, sans-serif"
          fontWeight="400"
          fontSize="8"
          fill={taglineColor}
          letterSpacing="1.5"
        >
          Soluções Integradas
        </text>
      )}
    </svg>
  );
}
