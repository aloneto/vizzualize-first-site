export function AgroCTA() {
  return (
    <section
      id="contato-agro"
      className="relative py-20 px-6 sm:px-12 overflow-hidden"
      style={{ background: "var(--color-agro-yellow)", color: "var(--color-agro-green-deep)" }}
    >
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(115deg, var(--color-agro-green) 0px, var(--color-agro-green) 1px, transparent 1px, transparent 40px)",
          opacity: 0.07,
        }}
      />

      <div className="relative max-w-[var(--max-width)] mx-auto grid lg:grid-cols-[1fr_380px] gap-10 items-center">
        {/* Left */}
        <div>
          <div
            className="text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-agro-mono), monospace", opacity: 0.7 }}
          >
            ESI AGRO &middot; SINOP &middot; MT
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-[72px] leading-tight mb-6"
            style={{ fontFamily: "var(--font-agro-heading), serif" }}
          >
            Da porteira ao silo,
            <br />
            <em>a ESI fica no campo.</em>
          </h2>
          <p
            className="text-base sm:text-lg max-w-[560px]"
            style={{ fontFamily: "var(--font-agro-body), sans-serif", opacity: 0.85 }}
          >
            Marque uma visita técnica. Nossos engenheiros vão até a sua
            fazenda — sem custo, sem compromisso.
          </p>
        </div>

        {/* Right card */}
        <div
          className="rounded-xl p-8 text-white"
          style={{ background: "var(--color-agro-green-deep)" }}
        >
          <div
            className="text-xs tracking-widest uppercase mb-2 opacity-60"
            style={{ fontFamily: "var(--font-agro-mono), monospace" }}
          >
            FILIAL AGRO
          </div>
          <div
            className="text-2xl sm:text-[28px] mb-4"
            style={{ fontFamily: "var(--font-agro-heading), serif" }}
          >
            Sinop &middot; MT
          </div>
          <div
            className="text-sm leading-relaxed mb-6 opacity-80 space-y-1"
            style={{ fontFamily: "var(--font-agro-body), sans-serif" }}
          >
            <p>Av. das Itaúbas &middot; Centro</p>{/* TODO: confirmar com cliente */}
            <p>Atendimento: MT &middot; GO &middot; MS &middot; BA &middot; TO</p>
            <p>(66) 0000-0000</p>{/* TODO: confirmar com cliente */}
          </div>
          <a
            href="#contato-agro"
            className="block w-full text-center px-6 py-3 rounded-md text-base font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-agro-yellow)",
              color: "var(--color-agro-green-deep)",
              fontFamily: "var(--font-agro-body), sans-serif",
            }}
          >
            Agendar visita técnica &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
