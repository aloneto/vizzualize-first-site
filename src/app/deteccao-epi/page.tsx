import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Nav } from "@/components/sections/Nav";
import { LeadFormEPI } from "@/components/sections/epi/LeadFormEPI";

export const metadata: Metadata = {
  title: "Detecção de Capacetes e EPIs com IA · ESI Exata",
  description:
    "Sistema de visão computacional para detecção automática de capacetes e EPIs em tempo real. Reduza acidentes e garanta conformidade com NRs.",
  openGraph: {
    title: "IA que detecta quem está sem capacete — antes do acidente.",
    description:
      "Visão computacional treinada para reconhecer EPIs em tempo real. Alertas instantâneos, conformidade com NR-6 e NR-12.",
    images: ["/photos/ia-hero.jpg"],
  },
};

const BENEFITS = [
  {
    icon: "🎯",
    title: "Detecção em tempo real",
    description:
      "Identifica automaticamente a presença ou ausência de capacetes, luvas, óculos e coletes em menos de 1 segundo.",
  },
  {
    icon: "⚡",
    title: "Alertas instantâneos",
    description:
      "Notificação imediata para supervisores via painel, e-mail ou integração com sistemas de segurança existentes.",
  },
  {
    icon: "📋",
    title: "Conformidade com NRs",
    description:
      "Relatórios automáticos de conformidade com NR-6, NR-12 e NR-35. Evidências visuais para auditorias.",
  },
  {
    icon: "🔌",
    title: "Integração com câmeras existentes",
    description:
      "Funciona com o seu parque de câmeras atual — CFTV analógico ou IP. Sem necessidade de trocar equipamentos.*",
  },
  {
    icon: "📊",
    title: "Dashboard analítico",
    description:
      "Painel com métricas de conformidade por área, turno e colaborador. Histórico completo para gestão de SST.",
  },
  {
    icon: "🏭",
    title: "Treinado para sua operação",
    description:
      "Modelo de IA calibrado com imagens do seu ambiente real — não com bancos de imagem genéricos.",
  },
];

const STATS = [
  { value: "<1s", label: "Tempo de detecção" },
  { value: "92,2%", label: "Precisão média" },
  { value: "24/7", label: "Monitoramento contínuo" },
  { value: "0", label: "Hardware adicional" },
];

export default function DeteccaoEPIPage() {
  return (
    <>
      <Nav activeBrand="p&d" />

      {/* Hero */}
      <section className="relative bg-[var(--color-ink)] text-white pt-20 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url(/patterns/circuit-pattern.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-tech)] mb-6">
              Inteligência Artificial · Segurança do Trabalho
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[64px] leading-[1.06] tracking-[-0.03em] mb-6">
              IA que detecta quem está sem capacete
              <span className="text-[var(--color-tech)]"> — antes do acidente.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-gray-400)] leading-relaxed max-w-2xl mb-10">
              Visão computacional treinada para reconhecer EPIs em tempo real.
              Alertas instantâneos para supervisores. Conformidade automática com
              NR-6, NR-12 e NR-35.
            </p>
            <Button variant="tech" size="lg" asChild>
              <a href="#cadastro">Solicitar demonstração →</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-heading font-bold text-3xl sm:text-4xl text-[var(--color-tech)]">
                  {s.value}
                </div>
                <div className="text-sm text-[var(--color-gray-400)] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-white text-[var(--color-ink)]">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-tech)] mb-4">
              Como funciona
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-0.02em]">
              Da câmera ao alerta em 3 passos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Conectamos suas câmeras",
                desc: "Integração com CFTV existente — IP ou analógico. Sem trocar equipamento, sem obra.*",
              },
              {
                step: "02",
                title: "Treinamos o modelo",
                desc: "IA calibrada com imagens reais da sua operação: capacetes, coletes, óculos, luvas e mais.",
              },
              {
                step: "03",
                title: "Monitoramento 24/7",
                desc: "Detecção contínua com alertas instantâneos e relatórios de conformidade automáticos.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border border-[var(--color-gray-100)] rounded-xl p-8 hover:border-[var(--color-tech)] transition-colors"
              >
                <div className="font-mono text-[var(--color-tech)] text-sm font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-gray-500)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-[var(--color-gray-50)] text-[var(--color-ink)]">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-tech)] mb-4">
              Benefícios
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-0.02em] max-w-2xl mx-auto">
              Segurança inteligente para sua operação industrial
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl p-8 border border-[var(--color-gray-100)]"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-[var(--color-gray-500)] leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* EPIs detectados */}
      <section className="py-20 bg-white text-[var(--color-ink)]">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-tech)] mb-4">
              EPIs detectados
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-0.02em]">
              O que nossa IA reconhece
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Capacete", icon: "🪖" },
              { name: "Óculos", icon: "🥽" },
              { name: "Luvas", icon: "🧤" },
              { name: "Colete", icon: "🦺" },
              { name: "Cinto (NR-35)", icon: "🪢" },
              { name: "Máscara", icon: "😷" },
            ].map((epi) => (
              <div
                key={epi.name}
                className="text-center p-6 rounded-xl border border-[var(--color-gray-100)] hover:border-[var(--color-tech)] transition-colors"
              >
                <div className="text-4xl mb-3">{epi.icon}</div>
                <div className="font-heading font-semibold text-sm">
                  {epi.name}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Formulário de cadastro */}
      <section
        id="cadastro"
        className="py-20 bg-[var(--color-ink)] text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url(/patterns/circuit-pattern.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
            <div>
              <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-tech)] mb-4">
                Demonstração gratuita
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Veja a IA funcionando no seu ambiente.
              </h2>
              <p className="text-[var(--color-gray-400)] text-lg mb-8 leading-relaxed">
                Preencha o formulário e nossa equipe de engenharia entrará em
                contato para agendar uma reuniao.
              </p>

              <div className="space-y-6 mt-10">
                {[
                  "Diagnóstico técnico em até 5 dias útil",
                  "Demonstração com imagens do seu ambiente",
                  "Proposta sob medida para sua operação",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-tech)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-tech)]" />
                    </div>
                    <span className="text-[var(--color-gray-300)] text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <LeadFormEPI />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
