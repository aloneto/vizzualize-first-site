import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type CTAProps = {
  heading: string;
  sub: string;
};

export function CTA({ heading, sub }: CTAProps) {
  return (
    <section className="py-24 px-10 bg-[var(--color-ink)] text-white text-center">
      <Container>
        <h2 className="font-heading font-bold text-[54px] leading-[1.04] tracking-[-0.03em] mb-4">
          {heading}
        </h2>
        <p className="text-lg opacity-75 max-w-[600px] mx-auto mb-10">
          {sub}
        </p>
        <Button variant="tech" size="lg" asChild>
          <Link href="/contato?tema=ia">Falar com engenheiro ESI →</Link>
        </Button>
      </Container>
    </section>
  );
}
