import { Container } from "@/components/ui/Container";

const APPROACH = [
  {
    n: "01",
    t: "Diagnóstico técnico",
    d: "Engenheiros visitam a operação, mapeiam câmeras, ângulos, iluminação e o objeto/comportamento alvo. Sem visita, não há projeto.",
  },
  {
    n: "02",
    t: "Treino dirigido",
    d: "Coletamos amostras do seu vídeo real, anotamos manualmente e treinamos um modelo dedicado. Em 4–8 semanas, está em produção.",
  },
  {
    n: "03",
    t: "Operação on-premise",
    d: "Inferência roda no DVR/servidor local. Sem upload de imagem para nuvem, sem dependência de banda. LGPD-friendly por design.",
  },
];

export function ApproachIA() {
  return (
    <section className="py-24 px-10 bg-white text-[var(--color-ink)]">
      <Container>
        <div className="text-[11px] tracking-[0.22em] text-[var(--color-tech)] font-bold uppercase mb-4">
          Como trabalhamos
        </div>
        <h2 className="font-heading font-bold text-[54px] leading-[1.04] tracking-[-0.03em] max-w-[920px] mb-16">
          IA treinada com o seu vídeo, na sua realidade — não com banco de
          imagens estrangeiro.
        </h2>

        <div className="grid grid-cols-3 border-t border-[var(--color-line)]">
          {APPROACH.map((p) => (
            <div
              key={p.n}
              className="py-10 pr-9 first:pl-0 [&:not(:first-child)]:pl-0 border-r border-[var(--color-line)] last:border-r-0"
            >
              <div className="font-mono text-[var(--color-tech)] text-xs tracking-[0.2em] mb-6">
                {p.n}
              </div>
              <h3 className="font-heading font-bold text-2xl leading-[1.15] tracking-[-0.02em] mb-3.5">
                {p.t}
              </h3>
              <p className="text-[15px] text-[var(--color-mute)] leading-[1.6]">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
