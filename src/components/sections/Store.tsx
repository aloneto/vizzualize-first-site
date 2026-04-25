import { Container } from "@/components/ui/Container";
import Link from "next/link";

type Category = {
  name: string;
  href?: string;
};

type StoreProps = {
  kicker?: string;
  heading?: string;
  subheading?: string;
  categories?: Category[];
  cta?: string;
  ctaHref?: string;
  note?: string;
};

export function Store({ kicker, heading, subheading, categories = [], cta, ctaHref, note }: StoreProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden" aria-label="ESI Store">
      {/* Store accent */}
      <div
        className="absolute bottom-0 right-0 w-96 h-64 opacity-[0.04] blur-3xl"
        style={{ background: "var(--color-store)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {kicker && (
          <span className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-store)] mb-4">
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

        {categories.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-[var(--color-gray-200)] p-5 text-center hover:border-[var(--color-store)]/40 hover:shadow-md transition-all group cursor-default"
              >
                <span className="text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-store)] transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {cta && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white transition-colors"
              style={{ background: "var(--color-store)" }}
            >
              {cta}
            </Link>
          )}
          {note && (
            <p className="text-sm text-[var(--color-gray-500)] italic max-w-md">{note}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
