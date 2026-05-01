import { Container } from "@/components/ui/Container";

const BLOCKS = [
  { t: "Câmeras",      d: "IP, analógicas, térmicas — qualquer marca" },
  { t: "DVR/NVR + IA", d: "Inferência na borda, on-prem" },
  { t: "VMS / ERP",    d: "Integração com seu software de gestão" },
  { t: "Alertas",      d: "WhatsApp, e-mail, SCADA, painel ESI" },
];

export function ArchitectureIA() {
  return (
    <section className="py-24 px-10 bg-white text-[var(--color-ink)]">
      <Container>
        <div className="text-[11px] tracking-[0.22em] text-[var(--color-tech)] font-bold uppercase mb-4">
          Arquitetura
        </div>
        <h2 className="font-heading font-bold text-[54px] leading-[1.04] tracking-[-0.03em] max-w-[920px] mb-14">
          Tudo on-premise. Sem nuvem. Sem dependência.
        </h2>

        <div className="grid grid-cols-4 gap-4 relative">
          {BLOCKS.map((b, i) => (
            <div
              key={i}
              className="relative px-7 py-8 bg-[var(--color-cream)] border border-[var(--color-line)]"
            >
              <div className="font-mono text-[11px] text-[var(--color-tech)] mb-3.5 tracking-[0.16em]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-heading font-bold text-xl mb-2">{b.t}</div>
              <div className="text-[13.5px] text-[var(--color-mute)] leading-[1.5]">
                {b.d}
              </div>
              {i < 3 && (
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-tech)] text-2xl font-light z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-7 px-6 py-4 bg-[var(--color-cream)] border-l-[3px] border-[var(--color-tech)] text-[14px]">
          <strong>LGPD-friendly por design:</strong> nenhuma imagem de pessoa
          sai do site do cliente. Inferência local; só evento (texto) trafega.
        </div>
      </Container>
    </section>
  );
}
