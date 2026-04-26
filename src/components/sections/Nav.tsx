import Link from "next/link";
import { Container } from "@/components/ui/Container";

type SubBrand = {
  id: string;
  label: string;
  color: string;
  href?: string;
};

type NavProps = {
  subBrands?: SubBrand[];
};

export function Nav({ subBrands = [] }: NavProps) {
  return (
    <div
      className="border-b border-[var(--color-gray-800)] bg-[var(--color-ink)]"
      aria-label="Sub-marcas ESI Exata"
    >
      <Container className="flex items-center gap-6 py-1.5 overflow-x-auto">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-gray-600)] whitespace-nowrap shrink-0">
          Grupo ESI
        </span>
        <div className="w-px h-3 bg-[var(--color-gray-700)] shrink-0" aria-hidden="true" />
        {subBrands.map((brand) => (
          <Link
            key={brand.id}
            href={brand.href ?? `#${brand.id}`}
            className="flex items-center gap-0 whitespace-nowrap group shrink-0 text-sm font-mono tracking-wider opacity-60 hover:opacity-100 transition-opacity"
            aria-label={brand.label}
          >
            <span className="text-white">{brand.label.split("|")[0]}</span>
            <span style={{ color: brand.color }}>|{brand.label.split("|")[1]}</span>
          </Link>
        ))}
      </Container>
    </div>
  );
}
