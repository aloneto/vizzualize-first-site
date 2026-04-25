import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Solution = {
  kicker?: string;
  title: string;
  description: string;
  iconSrc: string;
  features?: string[];
  href?: string;
  cta?: string;
};

type SolutionsProps = {
  kicker?: string;
  heading?: string;
  subheading?: string;
  items?: Solution[];
};

export function Solutions({ kicker, heading, subheading, items = [] }: SolutionsProps) {
  return (
    <section id="solucoes" className="py-20 bg-white" aria-label="Soluções">
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
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((solution) => (
            <div
              key={solution.title}
              className="rounded-2xl border border-[var(--color-gray-200)] p-8 hover:shadow-xl hover:border-[var(--color-gray-300)] transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--color-gray-100)] flex items-center justify-center">
                  <Image
                    src={solution.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  {solution.kicker && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-tech)]">
                      {solution.kicker}
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-[var(--color-ink)] mt-0.5">
                    {solution.title}
                  </h3>
                </div>
              </div>
              <p className="text-[var(--color-gray-600)] mt-4 leading-relaxed">{solution.description}</p>
              {solution.features && solution.features.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {solution.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-gray-500)]">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--color-tech)" }}
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
