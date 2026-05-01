import { TotemSVG } from "./icons/TotemSVG";
import { UMMSVG } from "./icons/UMMSVG";
import { IADetectionSVG } from "./icons/IADetectionSVG";

const solutions = [
  {
    id: "totem",
    kicker: "VIGILÂNCIA AUTÔNOMA, SEM OBRA CIVIL",
    kickerColor: "var(--color-agro-green)",
    title: "Totem ESI Agro",
    desc: "Torre solar de 4,5m com câmeras IA, alto-falante, gravação local e 4G/satélite. Você posiciona em qualquer lugar da fazenda em 1 dia — porteira, balança, silo, currais.",
    features: [
      "Câmeras PTZ + bullet IA, visão 360°",
      "Painel solar 400W + bateria 48h",
      "Gravação local + sync com NOC",
      "Áudio bidirecional pra abordagem remota",
    ],
    metric: "→ Instala em 1 dia · move quando precisar",
    gradient: "var(--color-agro-green-deep)",
    Icon: TotemSVG,
  },
  {
    id: "umm",
    kicker: "NOC SOBRE RODAS — CHEGA NA FAZENDA",
    kickerColor: "var(--color-agro-yellow)",
    title: "Unidade Móvel de Monitoramento",
    desc: "Veículo equipado com torre telescópica, banco de câmeras, mesa de operação e link satelital. Cobre eventos de safra, embarque de gado, plantio noturno, abertura de pasto.",
    features: [
      "Torre 8m com câmeras térmicas e PTZ",
      "Operador embarcado + link Starlink",
      "Conecta ao NOC de Curitiba ao vivo",
      "Bivolt + grupo gerador silencioso",
    ],
    metric: "→ Mobilizável em 24h pra qualquer fazenda do Brasil",
    gradient: "var(--color-agro-yellow)",
    Icon: UMMSVG,
  },
  {
    id: "ia-agro",
    kicker: "VISÃO COMPUTACIONAL TREINADA PRO CENÁRIO RURAL",
    kickerColor: "var(--color-agro-earth)",
    title: "IA Agro + Integra",
    desc: "Detectores específicos: gado fora de cerca, invasão de pasto, leitura de placa de caminhão na portaria, contagem de carga em balança, perímetro de silo. Tudo dentro do Integra — uma tela só.",
    features: [
      "Reconhecimento de gado (cabeça/quartel)",
      "OCR de placa em poeira e contraluz",
      "Cerca virtual com alerta no celular do gerente",
      "Integração com balança, ERP rural e WhatsApp",
    ],
    metric: "→ Modelos treinados com vídeo real de fazenda no MT",
    gradient: "var(--color-agro-earth)",
    Icon: IADetectionSVG,
  },
];

export function AgroSolutions() {
  return (
    <section
      id="solucoes-agro"
      className="py-20 px-6 sm:px-12"
      style={{ background: "var(--color-agro-paper)" }}
    >
      <div className="max-w-[var(--max-width)] mx-auto">
        {/* Header */}
        <div
          className="text-xs tracking-widest uppercase mb-4"
          style={{
            fontFamily: "var(--font-agro-mono), monospace",
            color: "var(--color-agro-mute)",
          }}
        >
          TRÊS SOLUÇÕES &middot; FEITAS PRA FAZENDA
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-[64px] leading-tight mb-16"
          style={{
            fontFamily: "var(--font-agro-heading), serif",
            color: "var(--color-agro-ink)",
          }}
        >
          Você escolhe pelo problema.
          <br />
          A gente entrega rodando.
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-12">
          {solutions.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="grid lg:grid-cols-[380px_1fr] gap-8 rounded-2xl overflow-hidden transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-agro-paper)",
                border: "1px solid var(--color-agro-line)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* Visual */}
              <div
                className="flex items-center justify-center p-8 min-h-[280px]"
                style={{
                  background: `linear-gradient(135deg, ${s.gradient}, ${s.gradient}dd)`,
                }}
              >
                <s.Icon className="w-48 h-auto opacity-90" />
              </div>

              {/* Text */}
              <div className="p-8 flex flex-col justify-center">
                <div
                  className="text-xs tracking-widest uppercase mb-2 font-semibold"
                  style={{
                    fontFamily: "var(--font-agro-mono), monospace",
                    color: s.kickerColor,
                  }}
                >
                  {s.kicker}
                </div>
                <h3
                  className="text-2xl sm:text-[38px] leading-tight mb-4"
                  style={{
                    fontFamily: "var(--font-agro-heading), serif",
                    color: "var(--color-agro-ink)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-base mb-6 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-agro-body), sans-serif",
                    color: "var(--color-agro-mute)",
                  }}
                >
                  {s.desc}
                </p>

                {/* Features 2x2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-agro-ink)" }}>
                      <span style={{ color: "var(--color-agro-green)" }}>&#10003;</span>
                      <span style={{ fontFamily: "var(--font-agro-body), sans-serif" }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Metric */}
                <p
                  className="text-sm italic"
                  style={{
                    fontFamily: "var(--font-agro-body), sans-serif",
                    color: "var(--color-agro-mute)",
                  }}
                >
                  {s.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
