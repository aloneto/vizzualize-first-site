export function AgroHero() {
  const stats = [
    { value: "~140k ha", label: "sob monitoramento", sub: "clientes ativos em MT" }, // TODO: confirmar com cliente
    { value: "60 km", label: "alcance rádio DMR", sub: "com repetidora Hytera" }, // TODO: confirmar com cliente
    { value: "24/7", label: "operação remota", sub: "no NOC de Curitiba" }, // TODO: confirmar com cliente
    { value: "Sinop", label: "base operacional", sub: "no coração do agro" },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--color-agro-green-deep)",
        borderBottom: "8px solid var(--color-agro-yellow)",
        padding: "104px 56px 88px",
      }}
    >
      {/* Planting pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(115deg, var(--color-agro-yellow) 0px, var(--color-agro-yellow) 1px, transparent 1px, transparent 40px)",
          opacity: 0.08,
        }}
      />
      {/* Sun glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, var(--color-agro-yellow), transparent 60%)",
          opacity: 0.13,
        }}
      />

      <div className="relative max-w-[var(--max-width)] mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 text-xs tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-agro-mono), monospace",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span
            className="agro-pulse inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--color-agro-yellow)" }}
          />
          esi &middot; agronegócio
        </div>

        {/* H1 */}
        <h1
          className="text-5xl sm:text-7xl lg:text-[104px] leading-[0.96] text-white mb-8"
          style={{ fontFamily: "var(--font-agro-heading), serif" }}
        >
          A tecnologia da ESI
          <br />
          <em style={{ color: "var(--color-agro-yellow)" }}>chega no campo</em> —
          <br />
          de Sinop pro Brasil agro.
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl max-w-[760px] mb-10"
          style={{
            fontFamily: "var(--font-agro-body), sans-serif",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Filial dedicada ao agronegócio, instalada em Sinop/MT, com
          engenheiros que falam a língua do produtor. Totens autônomos,
          unidades móveis de monitoramento e IA treinada para o cenário
          rural — fazenda, silo, balança, portaria.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#contato-agro"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-base font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-agro-yellow)",
              color: "var(--color-agro-green-deep)",
              fontFamily: "var(--font-agro-body), sans-serif",
            }}
          >
            Agendar visita à fazenda &rarr;
          </a>
          <a
            href="#solucoes-agro"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-base font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: "transparent",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.5)",
              fontFamily: "var(--font-agro-body), sans-serif",
            }}
          >
            Ver soluções
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative pl-6"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}
            >
              <div
                className="text-3xl sm:text-[46px] leading-tight"
                style={{
                  fontFamily: "var(--font-agro-heading), serif",
                  color: "var(--color-agro-yellow)",
                }}
              >
                {s.value}
              </div>
              <div className="text-sm text-white opacity-80 mt-1" style={{ fontFamily: "var(--font-agro-body), sans-serif" }}>
                {s.label}
              </div>
              <div className="text-xs text-white opacity-50 mt-0.5" style={{ fontFamily: "var(--font-agro-mono), monospace" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
