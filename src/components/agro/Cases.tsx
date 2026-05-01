// TODO: confirmar com cliente — cases são ilustrativos
const cases = [
  {
    location: "SORRISO · MT",
    type: "Soja & milho",
    headline: "Cobertura de rádio DMR em 42 mil hectares",
    desc: "2 repetidoras Hytera DMR III · 380 terminais · safras 22/23, 23/24, 24/25.",
    kpis: [
      { value: "42k ha", label: "cobertos" },
      { value: "380", label: "rádios" },
      { value: "60km", label: "alcance" },
    ],
  },
  {
    location: "SINOP · MT",
    type: "Pecuária + grãos",
    headline: "6 totens autônomos em fazenda mista",
    desc: "Monitoramento de balança, currais e portaria 24h sem operador local.",
    kpis: [
      { value: "6", label: "totens" },
      { value: "1 dia", label: "instalação cada" },
      { value: "0", label: "furtos pós-instalação" },
    ],
  },
  {
    location: "LUCAS DO RIO VERDE · MT",
    type: "Algodão",
    headline: "IA conta caminhões e lê placas na balança",
    desc: "Integração com ERP da usina · auditoria automática de pesagem.",
    kpis: [
      { value: "+98%", label: "acertos OCR" },
      { value: "~3s", label: "por veículo" },
      { value: "24/7", label: "operação" },
    ],
  },
];

export function AgroCases() {
  return (
    <section
      id="cases-agro"
      className="py-20 px-6 sm:px-12"
      style={{ background: "var(--color-agro-green)", color: "#fff" }}
    >
      <div className="max-w-[var(--max-width)] mx-auto">
        <div
          className="text-xs tracking-widest uppercase mb-4"
          style={{
            fontFamily: "var(--font-agro-mono), monospace",
            color: "var(--color-agro-yellow)",
          }}
        >
          ONDE ESTAMOS &middot; CASES REAIS
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-[60px] leading-tight mb-16"
          style={{ fontFamily: "var(--font-agro-heading), serif" }}
        >
          Já estamos em centenas de milhares de hectares.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="rounded-xl p-6 flex flex-col"
              style={{
                background: "var(--color-agro-green-deep)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Location tag */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs tracking-widest uppercase font-semibold"
                  style={{ fontFamily: "var(--font-agro-mono), monospace", color: "var(--color-agro-yellow)" }}
                >
                  {c.location}
                </span>
                <span
                  className="text-xs opacity-60"
                  style={{ fontFamily: "var(--font-agro-mono), monospace" }}
                >
                  | {c.type}
                </span>
              </div>

              <h3
                className="text-xl sm:text-2xl leading-snug mb-3"
                style={{ fontFamily: "var(--font-agro-heading), serif" }}
              >
                {c.headline}
              </h3>
              <p
                className="text-sm opacity-80 mb-6 flex-1"
                style={{ fontFamily: "var(--font-agro-body), sans-serif" }}
              >
                {c.desc}
              </p>

              {/* KPIs */}
              <div className="flex gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                {c.kpis.map((k, j) => (
                  <div key={j} className="text-center flex-1">
                    <div
                      className="text-lg sm:text-xl font-bold"
                      style={{
                        fontFamily: "var(--font-agro-heading), serif",
                        color: "var(--color-agro-yellow)",
                      }}
                    >
                      {k.value}
                    </div>
                    <div
                      className="text-[10px] tracking-wider uppercase opacity-60"
                      style={{ fontFamily: "var(--font-agro-mono), monospace" }}
                    >
                      {k.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
