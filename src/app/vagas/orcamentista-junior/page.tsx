import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CandidaturaForm } from "@/components/vagas/CandidaturaForm";

export const metadata: Metadata = {
  title: "Vaga: Orçamentista Júnior (CFTV/CA) — ESI Exata Curitiba",
  description:
    "A ESI Exata está contratando Orçamentista Júnior para projetos de CFTV e Controle de Acesso em Curitiba/PR. CLT, presencial. Candidate-se.",
  keywords:
    "vaga, orçamentista, CFTV, controle de acesso, segurança eletrônica, Curitiba, CLT, ESI Exata",
  openGraph: {
    title: "Vaga: Orçamentista Júnior (CFTV/CA) — ESI Exata Curitiba",
    description:
      "A ESI Exata está contratando Orçamentista Júnior para projetos de CFTV e Controle de Acesso em Curitiba/PR. CLT, presencial. Candidate-se.",
    type: "website",
    locale: "pt_BR",
  },
};

const BADGES = [
  { label: "Curitiba / PR", icon: "📍" },
  { label: "CLT", icon: "📋" },
  { label: "Presencial", icon: "🏢" },
  { label: "Júnior", icon: "🎯" },
];

const SOBRE_CARDS = [
  { icon: "📷", title: "CFTV", desc: "Câmeras, gravadores e analíticos de vídeo para monitoramento inteligente." },
  { icon: "🔐", title: "Controle de Acesso", desc: "Controladoras, leitoras, catracas e fechaduras para segurança física." },
  { icon: "🛡️", title: "Perímetro e Alarmes", desc: "Sensores, cercas virtuais e sistemas de alarme para proteção perimetral." },
];

const RESPONSABILIDADES = [
  "Analisar projetos, plantas e memoriais descritivos.",
  "Elaborar listas de materiais (BOM) para CFTV e controle de acesso.",
  "Sugerir valor de mão de obra para composição do orçamento.",
  "Lançar vendas no ERP.",
  "Apoiar o time comercial em revisões de proposta.",
  "Trabalhar em conjunto com Compras/Logística no fluxo de cotação.",
];

const REQUISITOS = [
  "Ensino médio completo.",
  "Conhecimento básico em CFTV (câmeras IP/analógicas, gravadores, switches PoE).",
  "Conhecimento básico em controle de acesso (controladoras, leitoras, fechaduras, catracas).",
  "Leitura e interpretação de projetos e datasheets.",
  "Organização e atenção a detalhes numéricos.",
  "Boa comunicação escrita.",
];

const DIFERENCIAIS = [
  "Curso técnico em Eletrônica, Eletrotécnica, Automação, Redes ou Telecom.",
  "Experiência prévia em orçamentação, compras ou cotação no setor.",
  "Leitura de plantas em AutoCAD.",
  "Conhecimento dos principais fabricantes do mercado de segurança eletrônica.",
];

const BENEFICIOS = [
  { icon: "💰", title: "Salário compatível", desc: "Remuneração alinhada com o mercado." },
  { icon: "🚌", title: "Vale-transporte", desc: "Cobertura integral do deslocamento." },
  { icon: "🍽️", title: "Vale-refeição", desc: "Vale-refeição / alimentação." },
  { icon: "📈", title: "Plano de carreira", desc: "Empresa em expansão nacional." },
  { icon: "🎓", title: "Treinamento técnico", desc: "Capacitação interna contínua." },
  { icon: "🤝", title: "Ambiente colaborativo", desc: "Proximidade com a diretoria." },
];

const WHATSAPP_NUMBER = "5541999330552";
const WHATSAPP_MSG = encodeURIComponent("Olá! Vi a vaga de Orçamentista Júnior e gostaria de mais informações.");

export default function VagaOrcamentistaJunior() {
  return (
    <div className="vagas-standalone">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, var(--color-ink-deep) 0%, var(--color-ink) 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "url('/patterns/circuit-pattern.svg')", backgroundSize: "600px" }}
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-red)" }}>
              Vagas abertas
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Estamos contratando:{" "}
              <span style={{ color: "var(--color-tech)" }}>Orçamentista Júnior</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl">
              Junte-se ao time da ESI Exata e atue com sistemas de CFTV e Controle de Acesso em projetos de todo o Brasil.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {BADGES.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-white/90 border border-white/15 bg-white/5"
                >
                  <span>{b.icon}</span> {b.label}
                </span>
              ))}
            </div>
            <a
              href="#candidatura"
              className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-semibold text-white transition-colors"
              style={{ background: "var(--color-red)" }}
            >
              Quero me candidatar
            </a>
          </div>
        </Container>
      </section>

      {/* Quem somos */}
      <section className="py-16 md:py-20 bg-[var(--color-gray-50)]">
        <Container>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-ink)] text-center mb-4">
            Quem somos
          </h2>
          <p className="text-center text-[var(--color-mute)] max-w-3xl mx-auto mb-12 leading-relaxed">
            A ESI Exata é uma empresa de tecnologia em segurança eletrônica com sede em Curitiba e atuação nacional.
            Projetamos, instalamos e mantemos soluções de CFTV, controle de acesso, perímetro e alarmes para clientes
            corporativos, industriais e do agronegócio. Desenvolvemos tecnologia própria — a suíte Integra-Hub — e
            trabalhamos com parcerias estratégicas com fabricantes reconhecidos do mercado.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {SOBRE_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[var(--color-line)] bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-[var(--color-ink)] mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--color-mute)]">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Responsabilidades */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-8">
            Suas responsabilidades
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {RESPONSABILIDADES.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-[var(--color-line)] bg-[var(--color-gray-50)] p-4">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: "var(--color-red)" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Requisitos */}
      <section className="py-16 md:py-20 bg-[var(--color-gray-50)]">
        <Container>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-8">
            Requisitos
          </h2>
          <ul className="space-y-3">
            {REQUISITOS.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0" style={{ color: "var(--color-tech)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-2">
            Vai te colocar à frente
          </h2>
          <p className="text-sm text-[var(--color-mute)] mb-8">Não eliminatório</p>
          <ul className="space-y-3">
            {DIFERENCIAIS.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0" style={{ color: "var(--color-pd)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-[var(--color-ink)] text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20 bg-[var(--color-gray-50)]">
        <Container>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-ink)] text-center mb-12">
            Nosso pacote
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFICIOS.map((b) => (
              <div key={b.title} className="rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
                <div className="text-2xl mb-3">{b.icon}</div>
                <h3 className="font-heading text-base font-semibold text-[var(--color-ink)] mb-1">{b.title}</h3>
                <p className="text-sm text-[var(--color-mute)]">{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Formulário de candidatura */}
      <section id="candidatura" className="py-16 md:py-20 scroll-mt-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-ink)] text-center mb-2">
              Candidate-se agora
            </h2>
            <p className="text-center text-[var(--color-mute)] mb-10">
              Preencha os dados abaixo e anexe seu currículo. Retornaremos em breve.
            </p>
            <CandidaturaForm />
          </div>
        </Container>
      </section>

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7 fill-white">
          <path d="M16.004 2.003C8.27 2.003 2.008 8.264 2.008 15.997c0 2.467.648 4.876 1.88 6.998L2 30l7.213-1.846a13.934 13.934 0 006.79 1.75c7.734 0 13.997-6.262 13.997-13.996S23.738 2.003 16.004 2.003zm0 25.594a11.546 11.546 0 01-5.897-1.614l-.424-.252-4.38 1.123 1.14-4.278-.275-.44A11.56 11.56 0 014.41 15.997c0-6.394 5.2-11.594 11.594-11.594s11.594 5.2 11.594 11.594-5.2 11.6-11.594 11.6zm6.348-8.676c-.348-.174-2.06-1.017-2.38-1.133-.318-.117-.55-.174-.782.174-.233.348-.9 1.133-1.103 1.365-.204.233-.406.26-.754.087-.348-.174-1.47-.542-2.8-1.727-1.035-.922-1.733-2.06-1.936-2.408-.204-.348-.022-.536.153-.71.157-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.435-.03-.61-.087-.173-.782-1.884-1.07-2.58-.283-.68-.57-.588-.782-.598l-.666-.012c-.232 0-.61.087-.93.435-.318.348-1.218 1.19-1.218 2.902 0 1.712 1.247 3.366 1.42 3.598.174.232 2.454 3.748 5.946 5.256.83.36 1.48.574 1.987.735.835.266 1.594.228 2.195.138.67-.1 2.06-.842 2.35-1.655.29-.814.29-1.51.204-1.655-.087-.146-.32-.233-.667-.406z" />
        </svg>
      </a>

      {/* Footer simplificado */}
      <footer className="border-t border-[var(--color-gray-800)] bg-[var(--color-ink)] text-white py-10">
        <div className="max-w-[var(--max-width)] mx-auto px-4 flex flex-col items-center gap-6 text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ background: "var(--color-red)" }}
          >
            Conheça mais sobre a empresa
          </a>
          <p className="text-xs text-[var(--color-gray-500)]">
            ESI Exata — R. Jorge B. Crocetti, 231, Curitiba – PR
          </p>
          <p className="text-xs text-[var(--color-gray-600)]">
            © {new Date().getFullYear()} ESI Exata. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
