import { Container } from "@/components/ui/Container";

type EditorialItem = {
  imageSrc?: string;
  quote: string;
  attribution?: string;
  accentColor?: string;
};

type EditorialProps = {
  kicker?: string;
  heading?: string;
  items?: EditorialItem[];
};

const defaultGradients = [
  "from-[#0d1117] to-[#1a1f2e]",
  "from-[#0a1628] to-[#0d1117]",
  "from-[#0f1923] to-[#0d1117]",
  "from-[#130d1a] to-[#0d1117]",
  "from-[#0d1a13] to-[#0d1117]",
  "from-[#1a0d0d] to-[#0d1117]",
];

export function Editorial({ kicker, heading, items = [] }: EditorialProps) {
  return (
    <section className="py-20 bg-white" aria-label="Editorial">
      <Container>
        {kicker && (
          <span className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-tech)] mb-4">
            {kicker}
          </span>
        )}
        {heading && (
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-12">
            {heading}
          </h2>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              {item.imageSrc ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.imageSrc})` }}
                  role="img"
                  aria-label={item.attribution ?? item.quote}
                />
              ) : (
                /* Gradient placeholder */
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${defaultGradients[i % defaultGradients.length]}`}
                  aria-hidden="true"
                >
                  {/* Circuit pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: "url(/patterns/circuit-pattern.svg)",
                      backgroundRepeat: "repeat",
                      backgroundSize: "80px 80px",
                    }}
                  />
                </div>
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: item.accentColor ?? "var(--color-tech)" }}
                aria-hidden="true"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-heading font-semibold leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>
                {item.attribution && (
                  <p className="mt-2 text-xs font-mono uppercase tracking-wider text-[var(--color-gray-400)]">
                    {item.attribution}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
