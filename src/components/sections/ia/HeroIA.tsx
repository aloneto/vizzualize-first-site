import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const HERO_STATS = [
  { v: "12+",     l: "algoritmos prontos",     s: "Catálogo treinado e validado" },
  { v: "∞",       l: "objetos customizáveis",  s: "Treinamos para o seu cenário" },
  { v: "<200ms",  l: "latência média",         s: "Inferência on-prem, sem nuvem" },
  { v: "24/7",    l: "operação contínua",      s: "Sem fadiga, sem pausa" },
];

export function HeroIA() {
  return (
    <section className="relative bg-[var(--color-ink)] text-white overflow-hidden py-24 px-10">
      {/* Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 75% 35%, rgba(31,169,230,.18) 0, transparent 55%), radial-gradient(circle at 20% 80%, rgba(107,75,217,.12) 0, transparent 50%)",
        }}
      />
      {/* Grid sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container className="relative z-10">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-tech)] mb-9 border border-[var(--color-tech)]/40 bg-[var(--color-tech)]/10 px-4 py-2 rounded-full">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[var(--color-tech)] animate-pulse"
            aria-hidden="true"
          />
          esi · visão computacional
        </span>

        {/* Headline */}
        <h1 className="font-heading font-bold text-[96px] leading-[0.96] tracking-[-0.04em] max-w-[1180px] mb-7">
          Toda câmera grava.
          <br />
          A nossa solução{" "}
          <em className="text-[var(--color-tech)] not-italic">pensa</em>.
        </h1>

        <p className="text-xl leading-[1.5] opacity-85 max-w-[780px] mb-11">
          Visão computacional treinada para reconhecer{" "}
          <strong className="text-white">
            o objeto, o comportamento e a anomalia
          </strong>{" "}
          que importam para a sua operação. Do contêiner no pátio ao SKU na
          gôndola, do EPI na linha ao vazamento na válvula — a gente ensina a
          máquina a olhar pelo seu olho.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 mb-16 flex-wrap">
          <Button variant="tech" asChild>
            <Link href="/contato?tema=ia">Treinar para meu cenário →</Link>
          </Button>
          <Button variant="ghost-light" asChild>
            <Link href="#catalogo">Ver catálogo de algoritmos</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 border-t border-white/10">
          {HERO_STATS.map((s, i) => (
            <div
              key={i}
              className={`pt-6 pr-6 ${i < 3 ? "border-r border-white/10" : ""} ${i > 0 ? "pl-6" : ""}`}
            >
              <div className="font-heading font-bold text-[46px] tracking-[-0.03em] leading-none text-[var(--color-tech)]">
                {s.v}
              </div>
              <div className="text-[13px] mt-2.5 opacity-90">{s.l}</div>
              <div className="text-[11.5px] mt-1 opacity-55 tracking-[0.04em]">
                {s.s}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
