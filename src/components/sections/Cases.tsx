import { Container } from "@/components/ui/Container";

type KPI = {
  value: string;
  label: string;
};

type CaseItem = {
  title: string;
  excerpt: string;
  imageSrc?: string;
  sector?: string;
  sectorColor?: string;
  kpis?: KPI[];
  href?: string;
};

type CasesProps = {
  kicker?: string;
  heading?: string;
  subheading?: string;
  items?: CaseItem[];
};

export function Cases({ kicker, heading, subheading, items = [] }: CasesProps) {
  return (
    <section id="cases" className="py-20 bg-[var(--color-gray-50)]" aria-label="Cases de sucesso">
      <Container>
        {kicker && (
          <span className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-tech)] mb-4">
            {kicker}
          </span>
        )}
        {heading && (
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-4">
            {heading}
          </h2>
        )}
        {subheading && (
          <p className="text-[var(--color-gray-600)] text-lg max-w-2xl mb-12">{subheading}</p>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white border border-[var(--color-gray-200)] overflow-hidden hover:shadow-xl hover:border-[var(--color-gray-300)] transition-all"
            >
              {/* Image or gradient placeholder */}
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-gray-900)] relative">
                {item.imageSrc ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.imageSrc})` }}
                    role="img"
                    aria-label={item.title}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-ink)]" />
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: "url(/patterns/circuit-pattern.svg)",
                        backgroundRepeat: "repeat",
                        backgroundSize: "80px 80px",
                      }}
                      aria-hidden="true"
                    />
                  </>
                )}
                {item.sector && (
                  <span
                    className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                    style={{ background: item.sectorColor ?? "var(--color-tech)", opacity: 0.9 }}
                  >
                    {item.sector}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-[var(--color-ink)] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-gray-600)] mt-2 leading-relaxed">{item.excerpt}</p>
                {item.kpis && item.kpis.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[var(--color-gray-100)] flex gap-6">
                    {item.kpis.map((kpi) => (
                      <div key={kpi.label}>
                        <div className="font-heading text-xl font-bold text-[var(--color-red)]">
                          {kpi.value}
                        </div>
                        <div className="text-xs text-[var(--color-gray-500)] mt-0.5">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
