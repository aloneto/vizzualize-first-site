import type { Metadata } from "next";
import { ParceirosForm } from "./_components/ParceirosForm";

export const metadata: Metadata = {
  title: "Seja um Parceiro ESI Exata | Segurança Eletrônica para Redes Varejistas",
  description:
    "Cadastre-se como parceiro ESI Exata e faça parte da rede especializada em instalação de CFTV, alarmes e monitoramento para grandes redes varejistas.",
  alternates: { canonical: "/parceiros" },
  openGraph: {
    title: "Seja um Parceiro ESI Exata | Segurança Eletrônica para Redes Varejistas",
    description:
      "Cadastre-se como parceiro ESI Exata e faça parte da rede especializada em instalação de CFTV, alarmes e monitoramento para grandes redes varejistas.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "ESI Exata — Programa de Parceiros" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Programa de Parceiros — ESI Exata",
  description:
    "Cadastre-se como parceiro ESI Exata e faça parte da rede especializada em instalação de CFTV, alarmes e controle de acesso para grandes redes varejistas.",
  url: "https://www.esiexata.com.br/parceiros",
};

export default function ParceirosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        id="topo"
        aria-label="Hero — Programa de Parceiros"
        className="relative min-h-[88vh] flex items-center overflow-hidden bg-[var(--color-ink-deep)]"
      >
        {/* Background layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {/* Radial tech glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(31,169,230,0.12) 0%, transparent 60%)",
            }}
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 60%, var(--color-ink-deep) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Badge */}
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-tech)]/20 bg-[var(--color-tech)]/5 px-4 py-1.5 text-xs tracking-[0.15em] uppercase text-[var(--color-tech)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Programa de Parceiros
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-white leading-[1.08] max-w-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Seja um Parceiro{" "}
            <span className="text-[var(--color-red)]">ESI Exata</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-[var(--color-mute)] max-w-2xl leading-relaxed">
            Unimos especialistas em segurança eletrônica para atender grandes redes varejistas em todo o Brasil. Cadastre-se e faça parte da nossa rede de parceiros.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 bg-[var(--color-red)] hover:bg-[#c9101a] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
            >
              Quero me Cadastrar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 mt-12 border-t border-[var(--color-gray-800)]"
            aria-label="Números do programa"
          >
            {[
              { number: "200+", label: "Parceiros" },
              { number: "50+", label: "Cidades" },
              { number: "15+", label: "Estados" },
              { number: "98%", label: "Satisfação" },
            ].map(({ number, label }) => (
              <div key={label}>
                <p
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {number}
                </p>
                <p className="text-sm text-[var(--color-mute)] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSSAS ATIVIDADES ─────────────────────────────────────────── */}
      <section
        aria-label="Nossas Atividades"
        className="py-20 bg-[var(--color-ink-deep)]"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kicker */}
          <p
            className="text-xs tracking-[0.15em] uppercase text-[var(--color-tech)] mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Nossas Atividades
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Segurança Eletrônica de Alto Padrão
          </h2>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "CFTV",
                description:
                  "Instalação e manutenção de sistemas de câmeras de segurança de alta resolução.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
                  </svg>
                ),
              },
              {
                title: "Alarmes",
                description:
                  "Projetos e instalação de centrais de alarme perimetral e de detecção de intrusão.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Controle de Acesso",
                description:
                  "Soluções de controle de acesso físico com catracas, biometria e integração com sistemas de segurança.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                ),
              },
            ].map(({ title, description, icon }) => (
              <article
                key={title}
                className="bg-[var(--color-ink)] border border-[var(--color-gray-800)] rounded-xl p-8 hover:border-[var(--color-gray-700)] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-tech)]/10 flex items-center justify-center text-[var(--color-tech)]">
                  {icon}
                </div>
                <h3
                  className="text-xl font-semibold text-white mt-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-[var(--color-mute)] text-base mt-2 leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>

          {/* Institutional text */}
          <p className="max-w-3xl mx-auto text-center text-[var(--color-mute)] text-lg mt-12 leading-relaxed">
            A ESI Exata é especializada na instalação de sistemas de segurança eletrônica para grandes redes varejistas. Atuamos com contratos por atendimento, garantindo agilidade e qualidade em cada chamado — do diagnóstico à execução.
          </p>
        </div>
      </section>

      {/* ── FORMULÁRIO DE CADASTRO ───────────────────────────────────── */}
      <section
        id="formulario"
        aria-label="Formulário de Cadastro de Parceiros"
        className="py-24 bg-[var(--color-ink)]"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-[var(--color-ink-deep)] border border-[var(--color-gray-800)] rounded-2xl p-8 sm:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-white text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Cadastre-se como Parceiro
            </h2>
            <p className="text-[var(--color-mute)] text-center mt-2 text-sm leading-relaxed">
              Preencha o formulário abaixo. Nossa equipe comercial entrará em contato em até 2 dias úteis.
            </p>

            <ParceirosForm />
          </div>
        </div>
      </section>

      {/* ── CONTATO RÁPIDO ────────────────────────────────────────────── */}
      <section
        aria-label="Contato Rápido"
        className="py-16 bg-[var(--color-ink-deep)]"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Prefere falar direto com a gente?
          </h2>
          <p className="text-center text-[var(--color-mute)] mb-10">
            Estamos disponíveis pelo WhatsApp e Instagram. Escolha o canal de sua preferência.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5541935277008?text=Ol%C3%A1%2C+quero+me+cadastrar+como+parceiro+ESI+Exata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar mensagem no WhatsApp para a ESI Exata"
              className="flex items-center gap-4 bg-[var(--color-ink)] border border-[var(--color-gray-800)] rounded-xl p-6 hover:border-[#25D366]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  WhatsApp
                </p>
                <p className="text-sm text-[var(--color-mute)]">Quero me cadastrar como parceiro</p>
              </div>
              <svg className="w-5 h-5 text-[var(--color-gray-600)] group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/esiexata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil da ESI Exata no Instagram"
              className="flex items-center gap-4 bg-[var(--color-ink)] border border-[var(--color-gray-800)] rounded-xl p-6 hover:border-[#E4405F]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Instagram
                </p>
                <p className="text-sm text-[var(--color-mute)]">@esiexata</p>
              </div>
              <svg className="w-5 h-5 text-[var(--color-gray-600)] group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Perguntas Frequentes"
        className="py-20 bg-[var(--color-ink)]"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Perguntas Frequentes
          </h2>

          <div className="max-w-2xl mx-auto divide-y divide-[var(--color-gray-800)]">
            {[
              {
                question: "O que é necessário para se tornar parceiro ESI Exata?",
                answer:
                  "Para se tornar parceiro, sua empresa precisa atuar na área de instalação, manutenção ou serviços correlatos à segurança eletrônica. Basta preencher o formulário de cadastro nesta página com os dados da empresa e do responsável. Nossa equipe avaliará o perfil e entrará em contato para os próximos passos.",
              },
              {
                question: "Quais os benefícios da parceria com a ESI Exata?",
                answer:
                  "Parceiros ESI Exata têm acesso a oportunidades de atendimento em grandes redes varejistas, com contratos estruturados por chamados. A parceria oferece previsibilidade de demanda, suporte técnico da ESI Exata e integração a uma rede de empresas especializadas no setor.",
              },
              {
                question: "Como funciona o processo após o cadastro?",
                answer:
                  "Após o envio do formulário, nossa equipe comercial analisa o cadastro em até 2 dias úteis. Se houver compatibilidade de perfil, entraremos em contato por e-mail ou WhatsApp para apresentar as condições de parceria e dar início ao processo de credenciamento.",
              },
            ].map(({ question, answer }) => (
              <details
                key={question}
                className="group py-1"
              >
                <summary className="flex items-center justify-between py-4 cursor-pointer list-none select-none">
                  <h3
                    className="text-lg font-medium text-white group-hover:text-[var(--color-tech)] transition-colors pr-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {question}
                  </h3>
                  <span className="text-[var(--color-tech)] text-xl shrink-0 group-open:hidden">+</span>
                  <span className="text-[var(--color-tech)] text-xl shrink-0 hidden group-open:block">−</span>
                </summary>
                <p className="pb-5 text-[var(--color-mute)] text-base leading-relaxed">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section
        aria-label="CTA Final"
        className="py-24 bg-[var(--color-ink-deep)] text-center"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-[54px] font-bold text-white leading-[1.04]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pronto para crescer com a ESI Exata?
          </h2>
          <p className="text-lg text-white/75 mt-4">
            Cadastre sua empresa e faça parte da nossa rede de parceiros.
          </p>
          <div className="mt-8">
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 bg-[var(--color-red)] hover:bg-[#c9101a] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
            >
              Quero me Cadastrar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
