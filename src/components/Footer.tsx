import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  Soluções: [
    { label: "Monitoramento por Vídeo", href: "#solucoes" },
    { label: "Rádio Corporativo", href: "#solucoes" },
    { label: "Inteligência Artificial", href: "#solucoes" },
    { label: "Detecção de Gás", href: "#solucoes" },
    { label: "Bodycam", href: "#solucoes" },
    { label: "Integra", href: "#solucoes" },
  ],
  Setores: [
    { label: "Varejo", href: "#setores" },
    { label: "Portos", href: "#setores" },
    { label: "Energia", href: "#setores" },
    { label: "Agronegócio", href: "#setores" },
    { label: "Healthcare", href: "#setores" },
  ],
  Empresa: [
    { label: "Sobre a ESI Exata", href: "#contato" },
    { label: "Cases", href: "#cases" },
    { label: "P&D", href: "#pd" },
    { label: "ESI Store", href: "#store" },
  ],
  Contato: [
    { label: "contato@esiexata.com.br", href: "mailto:contato@esiexata.com.br" },
    { label: "(41) 3527 7007", href: "tel:+554135277007" },
    { label: "R. Jorge B. Crocetti, 231\nCuritiba – PR", href: null },
  ],
} as const satisfies Record<string, { label: string; href: string | null }[]>;

type FooterProps = {
  siteName?: string;
};

export function Footer({ siteName = "ESI Exata" }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-gray-800)] bg-[var(--color-ink)] text-white">
      <Container className="pt-16 pb-8">
        {/* Top: Logo + tagline + columns */}
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" aria-label={siteName}>
              <Image
                src="/logos/esi-exata-logo-light.svg"
                alt={siteName}
                width={110}
                height={26}
                className="h-6 w-auto mb-4"
              />
            </Link>
            <p className="text-xs text-[var(--color-gray-500)] leading-relaxed max-w-[180px]">
              Soluções de segurança inteligente para os setores mais exigentes do Brasil.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-gray-500)] mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href !== null ? (
                      <Link
                        href={link.href}
                        className="text-xs text-[var(--color-gray-400)] hover:text-white transition-colors leading-relaxed whitespace-pre-line"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-xs text-[var(--color-gray-400)] leading-relaxed whitespace-pre-line">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--color-gray-800)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-gray-600)]">
            © {year} {siteName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[var(--color-gray-600)]">
              Política de Privacidade
            </span>
            <span className="text-xs text-[var(--color-gray-600)]">
              Termos de Uso
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
