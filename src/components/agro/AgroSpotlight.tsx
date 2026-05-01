import { AgroSpotlightIcon } from "./icons/AgroSpotlightIcon";

export function AgroSpotlight() {
  return (
    <section className="px-6 sm:px-12 py-12">
      <div
        className="relative max-w-[var(--max-width)] mx-auto rounded-2xl overflow-hidden p-10 sm:p-14"
        style={{
          background: "var(--color-agro-green-deep)",
          border: "6px solid var(--color-agro-yellow)",
        }}
      >
        {/* Yellow glow */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(circle at 90% 10%, var(--color-agro-yellow), transparent 60%)",
            opacity: 0.12,
          }}
        />

        <div className="relative grid lg:grid-cols-[1fr_220px] gap-8 items-center">
          {/* Left */}
          <div>
            <div
              className="text-xs tracking-widest uppercase mb-4"
              style={{
                fontFamily: "var(--font-agro-mono), monospace",
                color: "var(--color-agro-yellow)",
              }}
            >
              &#11088; FILIAL ESPECIALIZADA
            </div>
            <h3
              className="text-3xl sm:text-[54px] leading-tight text-white mb-4"
              style={{ fontFamily: "var(--font-agro-heading), serif" }}
            >
              É do agro?
              <br />
              <em style={{ color: "var(--color-agro-yellow)" }}>Vai direto pra ESI Agro.</em>
            </h3>
            <p
              className="text-base text-white opacity-80 max-w-[480px] mb-6"
              style={{ fontFamily: "var(--font-agro-body), sans-serif" }}
            >
              Filial em Sinop/MT com soluções dedicadas: totem autônomo,
              unidade móvel, IA treinada pro campo.
            </p>
            <a
              href="/agro"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-base font-semibold transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-agro-yellow)",
                color: "var(--color-agro-green-deep)",
                fontFamily: "var(--font-agro-body), sans-serif",
              }}
            >
              Conhecer ESI Agro &rarr;
            </a>
          </div>

          {/* Right icon */}
          <div className="hidden lg:flex items-center justify-center">
            <AgroSpotlightIcon className="w-[180px] h-[180px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
