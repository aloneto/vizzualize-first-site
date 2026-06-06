type EsiExataLogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Inline SVG logo for ESI Exata.
 * - "dark" variant: white text, for dark backgrounds (header/footer)
 * - "light" variant: dark text, for light backgrounds
 */
export function EsiExataLogo({ variant = "dark", className = "" }: EsiExataLogoProps) {
  const textFill = variant === "dark" ? "#FFFFFF" : "#0d1117";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 48"
      fill="none"
      aria-label="ESI Exata"
      className={className}
    >
      {/* Icon mark: stylized E circuit node */}
      <g transform="translate(0,4)">
        <rect x="0" y="0" width="4" height="40" fill="#E21219" />
        <rect x="0" y="0" width="24" height="4" fill="#E21219" />
        <rect x="0" y="18" width="18" height="4" fill="#E21219" />
        <rect x="0" y="36" width="24" height="4" fill="#E21219" />
        <circle cx="24" cy="2" r="3" fill="#E21219" />
        <circle cx="18" cy="20" r="3" fill="#1FA9E6" />
        <circle cx="24" cy="38" r="3" fill="#E21219" />
        <circle cx="31" cy="20" r="2" fill="#1FA9E6" opacity="0.6" />
        <line x1="24" y1="20" x2="35" y2="20" stroke="#1FA9E6" strokeWidth="1.5" opacity="0.4" />
      </g>
      {/* Wordmark: ESI */}
      <text
        x="44"
        y="32"
        fontFamily="var(--font-sora), Sora, system-ui, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={textFill}
        letterSpacing="-0.5"
      >
        ESI
      </text>
      {/* Separator pipe */}
      <rect x="95" y="10" width="2" height="28" fill="#E21219" rx="1" />
      {/* Wordmark: exata */}
      <text
        x="103"
        y="32"
        fontFamily="var(--font-sora), Sora, system-ui, sans-serif"
        fontWeight="300"
        fontSize="22"
        fill={textFill}
        letterSpacing="1"
      >
        exata
      </text>
    </svg>
  );
}
