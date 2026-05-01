import { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { HeroIA } from "@/components/sections/ia/HeroIA";
import { ApproachIA } from "@/components/sections/ia/ApproachIA";
import { DetectorsIA } from "@/components/sections/ia/DetectorsIA";
import { CatalogIA } from "@/components/sections/ia/CatalogIA";
import { ArchitectureIA } from "@/components/sections/ia/ArchitectureIA";
import { PDIA } from "@/components/sections/ia/PDIA";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Inteligência Artificial · ESI Exata",
  description: "Visão computacional treinada para reconhecer objetos, comportamentos e anomalias específicos da sua operação. Portos, varejo, indústria.",
  openGraph: {
    title: "Toda câmera grava. A nossa solução pensa.",
    description: "IA treinada com o seu vídeo, na sua realidade — não com banco de imagens estrangeiro.",
    images: ["/photos/ia-hero.jpg"],
  },
};

export default function IAPage() {
  return (
    <>
      <Nav activeBrand="p&d" />
      <HeroIA />
      <ApproachIA />
      <DetectorsIA />
      <CatalogIA />
      <ArchitectureIA />
      <PDIA />
      <CTA
        heading="Mande seu cenário."
        sub="Devolvemos um diagnóstico técnico em até 1 dia útil."
      />
    </>
  );
}
