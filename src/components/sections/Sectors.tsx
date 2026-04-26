import Image from "next/image";
import { Container } from "@/components/ui/Container";

type SectorItem = {
  id: string;
  featured?: boolean;
  name: string;
  kicker?: string;
  headline: string;
  desc: string;
  clients: string[];
  image: string;
};

type SectorsProps = {
  kicker?: string;
  heading?: string;
  subheading?: string;
  items?: SectorItem[];
};

export function Sectors({ kicker, heading, subheading, items = [] }: SectorsProps) {
  const featured = items.find((s) => s.featured);
  const rest = items.filter((s) => !s.featured);

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
          <div className="mb-8 rounded-2xl overflow-hidden bg-[var(--color-ink-deep)] border border-[var(--color-gray-800)] hover:border-[var(--color-gray-700)] transition-colors">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-ink-deep)] hidden lg:block" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {featured.kicker && (
                  <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
                    {featured.kicker}
                  </span>
                )}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
                  {featured.headline}
                </h3>
                <p className="text-[var(--color-gray-400)] leading-relaxed mb-4">{featured.desc}</p>
                <p className="text-xs font-mono text-[var(--color-mute)]">
                  {featured.clients.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((sector) => (
            <div
              key={sector.id}
              className="rounded-xl overflow-hidden bg-[var(--color-ink-deep)] border border-[var(--color-gray-800)] hover:border-[var(--color-gray-600)] transition-colors group"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={sector.image}
                  alt={sector.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-deep)] to-transparent" />
              </div>
              <div className="p-6">
                {sector.kicker && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-tech)]">
                    {sector.kicker}
                  </span>
                )}
                <h4 className="font-heading text-lg font-semibold mt-1 mb-2">{sector.headline}</h4>
                <p className="text-sm text-[var(--color-gray-400)] leading-relaxed mb-3">{sector.desc}</p>
                <p className="text-[10px] font-mono text-[var(--color-mute)]">
                  {sector.clients.join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
