import { Container } from "@/components/ui/Container";

const DETECTORS = [
  {
    cat: "PORTUÁRIO",
    color: "var(--color-tech)",
    headline: "Pátio, navio, contêiner — vistos do alto, lidos em tempo real.",
    items: [
      { t: "Leitura de placas e contêineres",   d: "OCR de chassis, BIC code e placas em ângulos extremos, com chuva ou sol contra" },
      { t: "Identificação de carga atípica",    d: "Detecta cargas fora do padrão (volume, formato, vazamento aparente)" },
      { t: "Tracking de equipamento",            d: "Reach stackers, RTGs e empilhadeiras geolocalizados por câmera" },
      { t: "Perimetria inteligente",             d: "Distinção entre pessoa, animal e objeto — zero falso alarme noturno" },
    ],
  },
  {
    cat: "VAREJO & COMÉRCIO",
    color: "var(--color-red)",
    headline: "O que sai pela porta. O que fica no estoque. O que muda no comportamento.",
    items: [
      { t: "Detecção de produto específico",       d: "Treinado para reconhecer SKUs críticos (perfumaria, eletrônicos, cosméticos)" },
      { t: "Comportamento suspeito em corredor",   d: "Trocas de embalagem, ocultação, demora atípica em prateleira" },
      { t: "Contagem e mapa de calor",              d: "Fluxo por hora, conversão por área, ociosidade de loja" },
      { t: "Reconhecimento facial em blacklist",    d: "Alerta de reincidentes — uso restrito conforme LGPD" },
    ],
  },
  {
    cat: "INDUSTRIAL",
    color: "var(--color-pd)",
    headline: "Onde a NR exige olhos, a IA não pisca.",
    items: [
      { t: "EPI e NR-12",                       d: "Capacete, luva, óculos, cinto — alerta no instante da omissão" },
      { t: "Detecção de vazamento e fumaça",    d: "Visão térmica + IA para gases invisíveis e princípio de incêndio" },
      { t: "Aproximação a zona perigosa",       d: "Zonas virtuais ao redor de prensas, esteiras e robôs colaborativos" },
      { t: "Postura ergonômica e queda",        d: "Detecção de quedas em altura e posturas de risco para ginástica laboral" },
    ],
  },
];

export function DetectorsIA() {
  return (
    <section className="py-24 px-10 bg-[var(--color-cream)] text-[var(--color-ink)]">
      <Container>
        <div className="text-[11px] tracking-[0.22em] text-[var(--color-tech)] font-bold uppercase mb-4">
          O que detectamos · por setor
        </div>
        <h2 className="font-heading font-bold text-[54px] leading-[1.04] tracking-[-0.03em] max-w-[980px] mb-14">
          Cada operação tem o seu objeto crítico. A gente treina para o seu.
        </h2>

        <div className="grid gap-9">
          {DETECTORS.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--color-line)] py-10 px-11 grid grid-cols-[320px_1fr] gap-12"
            >
              <div>
                <div
                  className="font-mono text-[11px] tracking-[0.2em] font-bold mb-4"
                  style={{ color: s.color }}
                >
                  {s.cat}
                </div>
                <h3 className="font-heading font-semibold text-[26px] leading-[1.15] tracking-[-0.02em]">
                  {s.headline}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {s.items.map((it, j) => (
                  <div
                    key={j}
                    className="border-t-2 pt-3.5"
                    style={{ borderColor: s.color }}
                  >
                    <div className="font-heading text-base font-bold mb-1.5">
                      {it.t}
                    </div>
                    <div className="text-[13.5px] text-[var(--color-mute)] leading-[1.55]">
                      {it.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
