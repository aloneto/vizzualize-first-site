import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type NavLink = { label: string; href: string };

type HeaderProps = {
  siteName?: string;
  navigation?: NavLink[];
};

export function Header({ siteName = "ESI Exata", navigation = [] }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-gray-800)] bg-[var(--color-ink)]/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={siteName}>
          <Image
            src="/logos/esi-exata-logo-light.svg"
            alt={siteName}
            width={120}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Nav */}
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigation.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-gray-400)] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link
          href="#contato"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors shrink-0"
          style={{ background: "var(--color-red)" }}
        >
          Fale com um especialista
        </Link>
      </Container>
    </header>
  );
}
