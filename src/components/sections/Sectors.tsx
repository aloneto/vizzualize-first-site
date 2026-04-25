import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type Sector = {
  name: string;
  description: string;
  iconSrc: string;
  color: string;
  href?: string;
  cta?: string;
};

type FeaturedSector = {
  name: string;
  kicker?: string;
  description: string;
  iconSrc: string;
  color: string;
  href?: string;
  cta?: string;
};

type SectorsProps = {
  kicker?: string;
  heading?: string;
  subheading?: string;
  featured?: FeaturedSector;
  items?: Sector[];
};

export function Sectors({ kicker, heading, subheading, featured, items = [] }: SectorsProps) {
  return (
    <section id="setores" className="py-20 bg-[var(--color-ink)] text-white" aria-label="Setores">
      <Container>
        {kicker && (
          <span className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-tech)] mb-4">
            {kicker}
          </span>
        )}
        {heading && (
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
        )}
        {subheading && (
          <p className="text-[var(--color-gray-400)] text-lg max-w-2xl mb-12">{subheading}</p>
        )}

        {featured && (
          <div className="mb-8 rounded-2xl overflow-hidden bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] hover:border-[var(--color-gray-700)] transition-colors">
            <div className="p-8 lg:p-12 flex flex-col sm:flex-row sm:items-start gap-8">
              <div className="shrink-0">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: `${featured.color}18`, border: `1px solid ${featured.color}30` }}
                >
                  <Image
                    src={featured.iconSrc}
                    alt={featured.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <span
                  className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] mb-3"
                  style={{ color: featured.color }}
                >
                  {featured.kicker ?? "Setor em destaque"}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
                  {featured.name}
                </h3>
                <p className="text-[var(--color-gray-400)] max-w-xl leading-relaxed">{featured.description}</p>
                {featured.cta && featured.href && (
                  <Link
                    href={featured.href}
                    className="inline-block mt-6 text-sm font-medium transition-colors"
                    style={{ color: featured.color }}
                  >
                    {featured.cta}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((sector) => (
            <div
              key={sector.name}
              className="rounded-xl bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] p-6 hover:border-[var(--color-gray-600)] transition-colors group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${sector.color}15`, border: `1px solid ${sector.color}25` }}
              >
                <Image
                  src={sector.iconSrc}
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  style={{ filter: "brightness(0) invert(1)" }}
                  aria-hidden="true"
                />
              </div>
              <span
                className="text-[10px] font-mono uppercase tracking-widest"
                style={{ color: sector.color }}
              >
                Setor
              </span>
              <h4 className="font-heading text-lg font-semibold mt-1 mb-2">{sector.name}</h4>
              <p className="text-sm text-[var(--color-gray-400)] leading-relaxed">{sector.description}</p>
              {sector.cta && sector.href && (
                <Link
                  href={sector.href}
                  className="inline-block mt-4 text-xs font-medium transition-opacity opacity-0 group-hover:opacity-100"
                  style={{ color: sector.color }}
                >
                  {sector.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
