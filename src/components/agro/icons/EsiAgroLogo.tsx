import Image from "next/image";

export function EsiAgroLogo({ className = "" }: { variant?: "light" | "dark"; className?: string }) {
  return (
    <Image
      src="/logos/esi-agro-logo.png"
      alt="ESI Agro"
      width={400}
      height={400}
      className={className}
    />
  );
}
