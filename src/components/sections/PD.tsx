import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Pillar = {
  t: string;
  d: string;
};

type PDProps = {
  kicker?: string;
  heading?: string;
  highlight?: string;
  subheading?: string;
  ctaPrimary?: string;
  ctaPrimaryHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  pillars?: Pillar[];
};

export function PD({
  kicker,
  heading,
  highlight,
  subheading,
  ctaPrimary,
  ctaPrimaryHref = "#contato",
  ctaSecondary,
  ctaSecondaryHref = "#pd",
  pillars = [],
}: PDProps) {
  const renderHeading = () => {
    if (!heading) return null;
    if (!highlight) return heading;
    const idx = heading.indexOf(highlight);
    if (idx === -1) return heading;
    return (
      <>
        {heading.slice(0, idx)}
        <span className="text-[var(--color-pd)]">{highlight}</span>
        {heading.slice(idx + highlight.length)}
      </>
    );
  };

  return (
    <section
      id="pd"
      className="py-20 bg-[var(--color-ink)] text-white relative overflow-hidden"
      aria-label="Pesquisa e Desenvolvimento"
    >
      {/* P&D accent */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--color-pd)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {kicker && (
          <span className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-pd)] mb-4">
            {kicker}
          </span>
        )}
        {heading && (
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">{renderHeading()}</h2>
        )}
        {subheading && (
          <p className="text-[var(--color-gray-400)] text-lg max-w-2xl mb-12 leading-relaxed">{subheading}</p>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.t}
              className="rounded-xl border border-[var(--color-gray-800)] p-6 bg-[var(--color-ink-deep)] hover:border-[var(--color-pd)]/40 transition-colors group"
            >
              <div
                className="text-[10px] font-mono uppercase tracking-widest mb-4"
                style={{ color: "var(--color-pd)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-[var(--color-pd)] transition-colors">
                {pillar.t}
              </h3>
              <p className="text-sm text-[var(--color-gray-400)] leading-relaxed">{pillar.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {ctaPrimary && (
            <Link href={ctaPrimaryHref}>
              <Button variant="primary" size="lg">
                {ctaPrimary}
              </Button>
            </Link>
          )}
          {ctaSecondary && (
            <Link href={ctaSecondaryHref}>
              <Button variant="outline" size="lg">
                {ctaSecondary}
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
