import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Stat = {
  value: string;
  label: string;
};

type HeroProps = {
  kicker?: string;
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  stats?: Stat[];
  imageSrc?: string;
};

export function Hero({
  kicker,
  heading,
  subheading,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  stats = [],
  imageSrc,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[88vh] flex items-center bg-[var(--color-ink)] text-white overflow-hidden"
      aria-label="Hero"
    >
      {/* Hero background photo */}
      {imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${imageSrc})` }}
          aria-hidden="true"
        />
      )}

      {/* Circuit pattern background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url(/patterns/circuit-pattern.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlays for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-ink)] via-transparent to-[var(--color-gray-900)]/60"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-ink)] to-transparent"
        aria-hidden="true"
      />

      {/* Tech accent glow */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "var(--color-tech)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl"
        style={{ background: "var(--color-red)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-24 lg:py-40">
        {kicker && (
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-tech)] mb-8 border border-[var(--color-tech)]/30 bg-[var(--color-tech)]/5 px-4 py-1.5 rounded-full">
            {kicker}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.05] tracking-tight max-w-4xl">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-6 text-lg sm:text-xl text-[var(--color-gray-400)] max-w-2xl leading-relaxed">
            {subheading}
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-4">
          {ctaText && ctaLink && (
            <Link href={ctaLink}>
              <Button variant="primary" size="lg">
                {ctaText}
              </Button>
            </Link>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Link href={secondaryCtaLink}>
              <Button variant="outline" size="lg">
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>
        {stats.length > 0 && (
          <div className="mt-20 pt-10 border-t border-[var(--color-gray-800)] grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-red)]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-[var(--color-gray-500)] leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
