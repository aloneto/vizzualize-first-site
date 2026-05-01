export function AgroManifesto() {
  return (
    <section
      className="py-20 px-6 sm:px-12"
      style={{ background: "var(--color-agro-cream)", color: "var(--color-agro-green-deep)" }}
    >
      <div className="max-w-[var(--max-width)] mx-auto grid gap-8 lg:grid-cols-[320px_1fr] items-start">
        {/* Left kicker */}
        <div
          className="text-xs tracking-widest uppercase leading-relaxed"
          style={{ fontFamily: "var(--font-agro-mono), monospace", color: "var(--color-agro-mute)" }}
        >
          POR QUE UMA FILIAL &middot; SÓ PRO AGRO
        </div>

        {/* Right content */}
        <div>
          <h2
            className="text-3xl sm:text-[44px] leading-tight mb-6"
            style={{ fontFamily: "var(--font-agro-heading), serif" }}
          >
            Fazenda não é prédio com câmera. É terra, vento, poeira, rede instável e{" "}
            <em style={{ color: "var(--color-agro-green-light)" }}>gente prática.</em>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-[680px]"
            style={{
              fontFamily: "var(--font-agro-body), sans-serif",
              color: "var(--color-agro-mute)",
            }}
          >
            ESI Agro nasceu pra entender isso — em Sinop, no chão do produtor.
            Não é um escritório que vende solução de prateleira. É engenheiro de
            bota no barro que sabe a diferença entre porteira de gado e portaria de
            condomínio. A gente instala, configura e mantém onde a internet cai,
            onde a poeira entope, onde o sol derrete.
          </p>
        </div>
      </div>
    </section>
  );
}
