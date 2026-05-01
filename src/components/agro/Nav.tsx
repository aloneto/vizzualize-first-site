"use client";

import { useState } from "react";
import { EsiAgroLogo } from "./icons/EsiAgroLogo";

const links = [
  { label: "Soluções", href: "#solucoes-agro" },
  { label: "Totem", href: "#totem" },
  { label: "Unidade Móvel", href: "#umm" },
  { label: "IA Agro", href: "#ia-agro" },
  { label: "Cases", href: "#cases-agro" },
  { label: "Contato", href: "#contato-agro" },
];

export function AgroNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-[36px] z-40 flex items-center justify-between px-6 py-3 border-b"
      style={{
        background: "var(--color-agro-paper)",
        borderColor: "var(--color-agro-line)",
      }}
    >
      <a href="/agro" aria-label="ESI Agro home">
        <EsiAgroLogo variant="dark" className="h-8 w-auto" />
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm transition-colors hover:opacity-80"
            style={{
              fontFamily: "var(--font-agro-body), sans-serif",
              color: "var(--color-agro-ink)",
            }}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA + Mobile toggle */}
      <div className="flex items-center gap-3">
        <a
          href="#contato-agro"
          className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-transform hover:-translate-y-0.5"
          style={{
            background: "var(--color-agro-green)",
            color: "#fff",
            fontFamily: "var(--font-agro-body), sans-serif",
          }}
        >
          Falar com engenheiro Sinop &rarr;
        </a>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          style={{ color: "var(--color-agro-ink)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-2 p-4 border-b md:hidden"
          style={{
            background: "var(--color-agro-paper)",
            borderColor: "var(--color-agro-line)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm py-2"
              style={{ color: "var(--color-agro-ink)", fontFamily: "var(--font-agro-body), sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato-agro"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-2 rounded-md text-sm font-medium"
            style={{ background: "var(--color-agro-green)", color: "#fff" }}
          >
            Falar com engenheiro Sinop &rarr;
          </a>
        </div>
      )}
    </nav>
  );
}
