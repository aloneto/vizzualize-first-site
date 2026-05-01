import { Container } from "@/components/ui/Container";

const CATALOG = [
  { n: "Inteligência perimetral",   g: "segurança" },
  { n: "Detecção de violência",     g: "segurança" },
  { n: "Detecção de queda",         g: "saúde" },
  { n: "Leitura de placas (LPR)",   g: "operação" },
  { n: "Proximidade entre pessoas", g: "operação" },
  { n: "Detecção de aglomerações",  g: "operação" },
  { n: "Atitudes suspeitas",        g: "segurança" },
  { n: "Reconhecimento facial",     g: "segurança" },
  { n: "Contagem de pessoas",       g: "operação" },
  { n: "Medição de temperatura",    g: "saúde" },
  { n: "Busca forense em vídeo",    g: "operação" },
  { n: "Detecção de objeto custom", g: "p&d" },
];

const GROUP_COLOR: Record<string, string> = {
  segurança: "var(--color-red)",
  operação:  "var(--color-tech)",
  saúde:     "#3b8a47",
  "p&d":     "var(--color-pd)",
};

export function CatalogIA() {
  return (
    <section
      id="catalogo"
      className="py-24 px-10 bg-[var(--color-ink)] text-white"
    >
      <Container>
        <div className="text-[11px] tracking-[0.22em] text-[var(--color-tech)] font-bold uppercase mb-4">
          Catálogo de algoritmos prontos
        </div>
        <h2 className="font-heading font-bold text-[54px] leading-[1.04] tracking-[-0.03em] max-w-[920px] mb-3">
          12 detectores de prateleira. Mais o seu, sob medida.
        </h2>
        <p className="text-[17px] opacity-70 max-w-[680px] mb-14">
          Comece com qualquer um deles em 1 semana. Combine. Plugue na sua
          câmera, no seu DVR, no seu VMS.
        </p>

        <div className="grid grid-cols-4 gap-3.5">
          {CATALOG.map((c, i) => (
            <div
              key={i}
              className="px-5 py-6 bg-[var(--color-ink-deep)] border border-white/10 hover:border-[var(--color-tech)]/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: GROUP_COLOR[c.g] }}
                />
                <span className="font-mono text-[9.5px] tracking-[0.2em] opacity-55 uppercase">
                  {c.g}
                </span>
              </div>
              <div className="font-heading font-semibold text-base leading-[1.25]">
                {c.n}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
