import Link from "next/link";
import { Container } from "@/components/ui/Container";

const SUB_BRANDS = [
  { id: "exata", label: "esi|exata", color: "var(--color-red)", href: "/" },
  { id: "agro", label: "esi|agro", color: "var(--color-agro)", href: "/" },
  { id: "p&d", label: "esi|p&d", color: "var(--color-pd)", href: "/" },
  { id: "store", label: "esi|store", color: "var(--color-store)", href: "/" },
];

type NavProps = {
  activeBrand?: "exata" | "agro" | "p&d" | "store";
};

export function Nav({ activeBrand }: NavProps) {
  return (
    <div
      className="border-b border-[var(--color-gray-800)] bg-[var(--color-ink-deep)]"
      aria-label="Sub-marcas ESI Exata"
    >
      <Container className="flex items-center gap-6 py-1.5 overflow-x-auto">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-gray-600)] whitespace-nowrap shrink-0">
          GRUPO ESI · MATRIZ CURITIBA PR · FILIAL AGRO SINOP MT
        </span>
        <div className="w-px h-3 bg-[var(--color-gray-700)] shrink-0" aria-hidden="true" />
        {SUB_BRANDS.map((brand) => {
          const isActive = brand.id === activeBrand;
          const [prefix, suffix] = brand.label.split("|");
          return (
            <Link
              key={brand.id}
              href={brand.href}
              className={`flex items-center gap-0 whitespace-nowrap group shrink-0 text-sm font-mono tracking-wider transition-opacity ${
                isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              aria-label={brand.label}
            >
              <span className="text-white">{prefix}</span>
              <span style={{ color: brand.color }}>|{suffix}</span>
              {isActive && (
                <span className="text-[var(--color-tech)] ml-1"> · IA</span>
              )}
            </Link>
          );
        })}
      </Container>
    </div>
  );
}
