import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type SubBrand = {
  name: string;
  href: string;
  logoSrc: string;
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
            key={brand.name}
            href={brand.href}
            className="flex items-center gap-1.5 whitespace-nowrap group shrink-0"
            aria-label={brand.name}
          >
            <Image
              src={brand.logoSrc}
              alt={brand.name}
              width={80}
              height={20}
              className="h-4 w-auto opacity-60 group-hover:opacity-100 transition-opacity"
            />
          </Link>
        ))}
      </Container>
    </div>
  );
}
