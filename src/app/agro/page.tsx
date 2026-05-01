import type { Metadata } from "next";
import { AgroTopbar } from "@/components/agro/Topbar";
import { AgroNav } from "@/components/agro/Nav";
import { AgroHero } from "@/components/agro/Hero";
import { AgroManifesto } from "@/components/agro/Manifesto";
import { AgroSolutions } from "@/components/agro/Solutions";
import { AgroCases } from "@/components/agro/Cases";
import { AgroCTA } from "@/components/agro/CTA";
import { AgroFooter } from "@/components/agro/Footer";

export const metadata: Metadata = {
  title: "ESI Agro — Tecnologia para o agronegócio | Grupo ESI",
  description:
    "Filial em Sinop/MT. Totens autônomos, unidades móveis de monitoramento e IA treinada para fazendas. Atendimento MT GO MS BA TO.",
  openGraph: {
    title: "ESI Agro — Tecnologia para o agronegócio | Grupo ESI",
    description:
      "Filial em Sinop/MT. Totens autônomos, unidades móveis de monitoramento e IA treinada para fazendas. Atendimento MT GO MS BA TO.",
    // TODO: gerar og:image 1200x630 com hero, fundo verde-deep, título DM Serif
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "ESI Agro — Tecnologia para o agronegócio" }],
  },
};

export default function AgroPage() {
  return (
    <div style={{ fontFamily: "var(--font-agro-body), sans-serif", color: "var(--color-agro-ink)" }}>
      <AgroTopbar />
      <AgroNav />
      <AgroHero />
      <AgroManifesto />
      <AgroSolutions />
      <AgroCases />
      <AgroCTA />
      <AgroFooter />
    </div>
  );
}
