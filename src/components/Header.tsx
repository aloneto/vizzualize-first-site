"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type NavLink = { label: string; href: string };

type HeaderProps = {
  siteName?: string;
  navigation?: NavLink[];
};

export function Header({ siteName = "ESI Exata", navigation = [] }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Nav — desktop */}
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

        {/* CTA — desktop */}
        <Link
          href="#contato"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors shrink-0"
          style={{ background: "var(--color-red)" }}
        >
          Fale com um especialista
        </Link>

        {/* Hamburger — mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1 shrink-0"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 bg-white transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-white transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[var(--color-gray-800)] bg-[var(--color-ink)]"
        >
          <nav aria-label="Navegação mobile">
            <ul className="px-4 py-3 space-y-1">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-sm font-medium text-[var(--color-gray-300)] hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#contato"
                  className="block py-2.5 px-4 rounded-lg text-center text-sm font-semibold text-white"
                  style={{ background: "var(--color-red)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Fale com um especialista
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
