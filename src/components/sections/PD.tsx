import { Container } from "@/components/ui/Container";

type Capability = {
  title: string;
  description: string;
  number?: string;
};

type PDProps = {
  kicker?: string;
  heading?: string;
  subheading?: string;
  cta?: string;
  ctaHref?: string;
  capabilities?: Capability[];
};

export function PD({ kicker, heading, subheading, cta, ctaHref, capabilities = [] }: PDProps) {
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
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
        )}
        {subheading && (
          <p className="text-[var(--color-gray-400)] text-lg max-w-2xl mb-12 leading-relaxed">{subheading}</p>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="rounded-xl border border-[var(--color-gray-800)] p-6 bg-[var(--color-gray-900)] hover:border-[var(--color-pd)]/40 transition-colors group"
            >
              <div
                className="text-[10px] font-mono uppercase tracking-widest mb-4"
                style={{ color: "var(--color-pd)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-[var(--color-pd)] transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm text-[var(--color-gray-400)] leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
        {cta && ctaHref && (
          <div className="mt-10">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "var(--color-pd)" }}
            >
              {cta}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
