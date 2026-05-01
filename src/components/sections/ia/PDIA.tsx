import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function PDIA() {
  return (
    <section className="py-24 px-10 bg-[var(--color-ink-deep)] text-white">
      <Container>
        <div className="text-[11px] tracking-[0.22em] text-[var(--color-pd)] font-bold uppercase mb-4">
          esi · p&d
        </div>
        <h2 className="font-heading font-bold text-[54px] leading-[1.04] tracking-[-0.03em] max-w-[1100px] mb-7">
          Não tem detector pronto pro seu objeto?
          <br />
          <span className="text-[var(--color-pd)]">A gente desenvolve.</span>
        </h2>
        <p className="text-lg opacity-80 max-w-[740px] leading-[1.55] mb-10">
          Detectar uma peça específica em uma esteira. Reconhecer um padrão de
          avaria em contêiner. Identificar um SKU específico no carrinho. Casos
          que nenhum catálogo cobre. Aí entra a equipe de P&D.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Button variant="pd" asChild>
            <Link href="/contato?tema=pd-ia">Traga o seu desafio →</Link>
          </Button>
          <Button variant="ghost-light" asChild>
            <Link href="/p-e-d">Ver projetos P&D</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
