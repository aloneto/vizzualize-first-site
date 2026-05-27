import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "VHD 3120 Intelbras — R$300 | ESI Exata",
  description:
    "Camera VHD 3120 Intelbras Multi HD 720p com infravermelho. Ideal para residencias e comercios. Preco promocional R$300. Instalacao e suporte ESI Exata.",
  openGraph: {
    title: "VHD 3120 Intelbras — Promo R$300 | ESI Exata",
    description:
      "Camera Multi HD 720p com infravermelho 20m. Preco promocional por tempo limitado.",
    images: ["/produtos/vhd3120-foto.png"],
  },
};

const WHATSAPP_NUMBER = "5541352770007";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Oi! Vi a promo da VHD 3120 por R$300 e quero saber mais."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const SPECS = [
  { label: "Resolucao", value: "HD 720p" },
  { label: "Infravermelho", value: "20 metros" },
  { label: "Tecnologia", value: "Multi HD 4 em 1" },
  { label: "Protecao", value: "IP67" },
  { label: "Garantia", value: "1 ano Intelbras" },
  { label: "Instalacao", value: "Inclusa*" },
];

const BENEFITS = [
  {
    icon: "\uD83C\uDFE0",
    title: "Ideal para residencias",
    desc: "Proteja sua casa, sitio ou chacara com imagem nitida dia e noite.",
  },
  {
    icon: "\uD83C\uDF19",
    title: "Visao noturna 20m",
    desc: "Infravermelho inteligente que garante imagens claras mesmo no escuro total.",
  },
  {
    icon: "\uD83D\uDCA7",
    title: "Resistente a chuva",
    desc: "Protecao IP67 — funciona perfeitamente em ambientes externos.",
  },
  {
    icon: "\u26A1",
    title: "Facil instalacao",
    desc: "Compativel com DVRs Intelbras e outras marcas. Multi HD 4 em 1.",
  },
];

export default function PromoVHD3120Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-ink)] via-[var(--color-ink-deep)] to-[#0a1030] text-white pt-16 pb-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url(/patterns/circuit-pattern.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
        {/* Glow accent */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "var(--color-tech)" }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-tech)] mb-4">
                Oferta especial
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.03em] mb-4">
                VHD 3120
                <br />
                <span className="text-[var(--color-tech)]">Intelbras</span>
              </h1>

              <p className="text-lg text-[var(--color-gray-400)] leading-relaxed max-w-md mb-8">
                Camera Multi HD 720p com infravermelho 20m.
                Protecao IP67 para ambientes internos e externos.
                Qualidade Intelbras com suporte ESI Exata.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-heading font-bold text-5xl sm:text-6xl text-white">
                  R$300
                </span>
                <span className="text-[var(--color-gray-400)] text-lg">
                  /unidade
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="tech" size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Comprar pelo WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#detalhes">Ver detalhes</a>
                </Button>
              </div>
            </div>

            {/* Right — Product image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">
                <div
                  className="absolute inset-0 rounded-full opacity-20 blur-[60px]"
                  style={{ background: "var(--color-tech)" }}
                  aria-hidden="true"
                />
                <Image
                  src="/produtos/vhd3120-foto.png"
                  alt="Camera VHD 3120 Intelbras"
                  fill
                  className="object-contain drop-shadow-2xl relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specs strip */}
      <section className="bg-[var(--color-tech)] text-white py-6">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {SPECS.map((s) => (
              <div key={s.label}>
                <div className="font-heading font-bold text-lg">{s.value}</div>
                <div className="text-white/70 text-xs uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section id="detalhes" className="py-20 bg-white text-[var(--color-ink)]">
        <Container>
          <div className="text-center mb-14">
            <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-tech)] mb-4">
              Por que escolher a VHD 3120
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-0.02em]">
              Seguranca acessivel e confiavel
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="text-center p-6 rounded-xl border border-[var(--color-gray-100)] hover:border-[var(--color-tech)] transition-colors"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-[var(--color-gray-500)] text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use case — Country house */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-tech)] mb-4">
              Aplicacao
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-0.02em] mb-6">
              Perfeita para casas, sitios e comercios
            </h2>
            <p className="text-[var(--color-gray-600)] text-lg leading-relaxed mb-10">
              A VHD 3120 e a escolha certa para quem precisa de seguranca com
              custo acessivel. Imagem HD de dia, visao noturna de noite, e
              resistencia a intemperies para instalacao externa. Ideal para
              monitorar entradas, garagens, perimetros e areas comuns.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Residencias",
                  desc: "Monitore portoes, garagens e areas externas 24h com imagem HD.",
                },
                {
                  title: "Sitios e chacaras",
                  desc: "Visao noturna de 20m para proteger propriedades rurais mesmo sem iluminacao.",
                },
                {
                  title: "Comercios",
                  desc: "Registre movimentacao em lojas, depositos e estacionamentos.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-[var(--color-gray-100)]"
                >
                  <h3 className="font-heading font-semibold text-base mb-2 text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-gray-500)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-[var(--color-ink)] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
              Garanta a sua por{" "}
              <span className="text-[var(--color-tech)]">R$300</span>
            </h2>
            <p className="text-[var(--color-gray-400)] text-lg mb-8">
              Oferta por tempo limitado. Fale com a ESI Exata pelo WhatsApp e
              feche seu pedido agora.
            </p>

            <Button variant="tech" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>

            <p className="text-[var(--color-gray-600)] text-xs mt-6">
              *Instalacao inclusa para Curitiba e regiao metropolitana. Consulte
              condicoes para outras localidades.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
