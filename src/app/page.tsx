import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ClientBar } from "@/components/sections/ClientBar";
import { Editorial } from "@/components/sections/Editorial";
import { Sectors } from "@/components/sections/Sectors";
import { Solutions } from "@/components/sections/Solutions";
import { Cases } from "@/components/sections/Cases";
import { PD } from "@/components/sections/PD";
import { Store } from "@/components/sections/Store";
import { CTAFooter } from "@/components/sections/CTAFooter";

export default function Home() {
  return (
    <>
      {/* 1. Nav — Sub-brands bar */}
      <Nav
        subBrands={[
          { name: "ESI Exata", href: "/", logoSrc: "/logos/sub-brand-esi-exata.svg" },
          { name: "ESI P&D", href: "#pd", logoSrc: "/logos/sub-brand-esi-pd.svg" },
          { name: "ESI Store", href: "#store", logoSrc: "/logos/sub-brand-esi-store.svg" },
        ]}
      />

      {/* 2. Hero — Headline, stats, CTAs */}
      <Hero
        kicker="TECNOLOGIA APLICADA À SEGURANÇA"
        heading="Precisão onde o risco não tem margem para erro."
        subheading="20 anos integrando hardware, software e inteligência artificial para eliminar perdas e proteger operações nos setores mais exigentes do Brasil."
        ctaText="Conheça nossas soluções"
        ctaLink="#solucoes"
        secondaryCtaText="Fale com um especialista"
        secondaryCtaLink="#contato"
        imageSrc="/photos/hero.jpg"
        stats={[
          { value: "20", label: "anos de mercado" },
          { value: "+500", label: "projetos entregues" },
          { value: "15+", label: "estados atendidos" },
          { value: "5", label: "setores de atuação" },
        ]}
      />

      {/* 3. ClientBar — Clientes */}
      <ClientBar
        heading="EMPRESAS QUE CONFIAM NA ESI EXATA"
        clients={[
          { name: "Riachuelo", logoSrc: "/logos/clients/riachuelo.svg" },
          { name: "Supermercado Supremo", logoSrc: "/logos/clients/supremo.jpg" },
          { name: "Carrefour", logoSrc: "/logos/clients/carrefour.jpg" },
          { name: "Cargill", logoSrc: "/logos/clients/cargill.jpg" },
          { name: "Telhanorte", logoSrc: "/logos/clients/telhanorte.jpg" },
          { name: "Madrin", logoSrc: "/logos/clients/madrin.png" },
          { name: "Armond", logoSrc: "/logos/clients/armond.png" },
        ]}
      />

      {/* 4. Editorial — Grid Instagram-style */}
      <Editorial
        kicker="ESI EXATA EM CAMPO"
        heading="Tecnologia que opera onde outros não chegam."
        items={[
          {
            imageSrc: "/photos/editorial-comunicacao-campo.jpg",
            quote: "Não vendemos câmeras. Entregamos controle.",
            attribution: "Comunicação em Campo",
            accentColor: "var(--color-red)",
          },
          {
            imageSrc: "/photos/editorial-monitoramento.jpg",
            quote: "Da portaria ao back office — visibilidade total da operação.",
            attribution: "Monitoramento de Infraestrutura",
            accentColor: "var(--color-tech)",
          },
          {
            imageSrc: "/photos/editorial-instalacao-altura.jpg",
            quote: "IA que aprende, alerta e age.",
            attribution: "Instalação em Altura",
            accentColor: "var(--color-pd)",
          },
          {
            quote: "20 anos. Cada projeto sob medida.",
            accentColor: "var(--color-red)",
          },
          {
            quote: "Prevenção de perdas não é custo. É estratégia.",
            accentColor: "var(--color-agro)",
          },
          {
            quote: "Do porto ao ponto de venda — mesma excelência.",
            accentColor: "var(--color-tech)",
          },
        ]}
      />

      {/* 5. Sectors — Featured + grid */}
      <Sectors
        kicker="SETORES"
        heading="Soluções específicas para os desafios de cada setor."
        subheading="Cada mercado tem sua complexidade. Nossos sistemas foram desenvolvidos para cada realidade operacional."
        featured={{
          name: "Varejo",
          kicker: "SETOR EM DESTAQUE",
          description:
            "Monitoramento comportamental, prevenção de perdas e inteligência de piso de loja. Proteja margens, reduza furtos e ganhe visibilidade sobre cada ponto da operação — da entrada ao caixa.",
          iconSrc: "/icons/sectors/icon-varejo.svg",
          photoSrc: "/photos/varejo.jpg",
          color: "var(--color-red)",
          href: "#contato",
          cta: "Ver soluções para varejo →",
        }}
        items={[
          {
            name: "Portos",
            description:
              "Segurança perimetral, controle de acesso e comunicação crítica para ambientes portuários. Operações 24/7 com confiabilidade de nível industrial.",
            iconSrc: "/icons/sectors/icon-portos.svg",
            photoSrc: "/photos/portos.jpg",
            color: "var(--color-tech)",
            href: "#contato",
            cta: "Saiba mais →",
          },
          {
            name: "Energia",
            description:
              "Detecção de gás, monitoramento de ativos e comunicação de missão crítica para plantas industriais e distribuidoras. Conformidade com NR e proteção integral de ativos.",
            iconSrc: "/icons/sectors/icon-energia.svg",
            photoSrc: "/photos/energia.jpg",
            color: "var(--color-store)",
            href: "#contato",
            cta: "Saiba mais →",
          },
          {
            name: "Agronegócio",
            description:
              "Rastreabilidade, segurança de perímetro e monitoramento de operações em grandes extensões. Tecnologia pensada para o campo — robusta, confiável e de longo alcance.",
            iconSrc: "/icons/sectors/icon-agro.svg",
            photoSrc: "/photos/agro.jpg",
            color: "var(--color-agro)",
            href: "#contato",
            cta: "Saiba mais →",
          },
          {
            name: "Healthcare",
            description:
              "Proteção de patrimônio, controle de acesso e segurança de pacientes em ambientes hospitalares e clínicas. Conformidade com normas sanitárias e operação contínua.",
            iconSrc: "/icons/sectors/icon-healthcare.svg",
            photoSrc: "/photos/healthcare.jpg",
            color: "var(--color-pd)",
            href: "#contato",
            cta: "Saiba mais →",
          },
        ]}
      />

      {/* 6. Solutions — 2-col cards */}
      <Solutions
        kicker="SOLUÇÕES"
        heading="Tecnologia integrada do sensor ao dashboard."
        subheading="Hardware de ponta, software proprietário e IA embarcada — tudo sob uma arquitetura unificada de segurança e gestão operacional."
        items={[
          {
            kicker: "VÍDEO",
            title: "Monitoramento por Vídeo",
            description:
              "Câmeras analíticas de alta resolução com IA embarcada. Detecção de comportamentos suspeitos, contagem de pessoas, análise de fluxo e alertas automáticos em tempo real.",
            iconSrc: "/icons/solutions/icon-cftv.svg",
            features: [
              "Câmeras IP e analógicas HD/4K",
              "Análise comportamental por IA",
              "Alertas em tempo real",
              "Integração com alarmes e ERP",
            ],
          },
          {
            kicker: "COMUNICAÇÃO",
            title: "Rádio Corporativo",
            description:
              "Redes de rádio digital (DMR) para comunicação de missão crítica. Cobertura total do perímetro, criptografia e integração com plataformas de despacho e PTT.",
            iconSrc: "/icons/solutions/icon-radio-hytera.svg",
            features: [
              "Tecnologia DMR digital",
              "Cobertura multi-site",
              "Criptografia AES-256",
              "Integração com PTT e despacho",
            ],
          },
          {
            kicker: "IA",
            title: "Inteligência Artificial",
            description:
              "Algoritmos de visão computacional treinados para os padrões comportamentais de cada setor. Análise contínua sem intervenção humana — da detecção de irregularidades ao reconhecimento de padrões de risco.",
            iconSrc: "/icons/solutions/icon-ia-embarcada.svg",
            features: [
              "Visão computacional embarcada",
              "Detecção de anomalias",
              "Reconhecimento de padrões de risco",
              "Dashboards preditivos",
            ],
          },
          {
            kicker: "SEGURANÇA INDUSTRIAL",
            title: "Detecção de Gás",
            description:
              "Sistemas fixos e portáteis para monitoramento de gases tóxicos e explosivos em ambientes industriais. Alertas em tempo real, conformidade NR-20 e integração com sistemas de emergência.",
            iconSrc: "/icons/solutions/icon-deteccao-gas.svg",
            features: [
              "Sensores fixos e portáteis",
              "Detecção multi-gás e ponto único",
              "Conformidade NR-20 / NR-33",
              "Integração com SCADA e alarmes",
            ],
          },
        ]}
      />

      {/* 7. Cases — 3-col articles + KPIs */}
      <Cases
        kicker="CASES"
        heading="Resultados que se medem em números."
        subheading="Cada projeto é único. Cada resultado é auditável."
        items={[
          {
            title: "Rede varejista reduz perdas com monitoramento comportamental",
            excerpt:
              "Implementação de CFTV com IA em lojas distribuídas pelo país. Correlação de eventos com ERP e alertas comportamentais em tempo real.",
            imageSrc: "/photos/case-varejo.jpg",
            sector: "Varejo",
            sectorColor: "var(--color-red)",
            kpis: [
              { value: "-40%", label: "Perdas operacionais" },
              { value: "12m", label: "Projeto" },
            ],
          },
          {
            title: "Porto amplia cobertura de segurança com rádio digital",
            excerpt:
              "Upgrade de comunicação analógica para DMR com cobertura integral do pátio e píer. Eliminação de pontos cegos e redução do tempo de resposta a incidentes.",
            imageSrc: "/photos/case-porto.jpg",
            sector: "Portos",
            sectorColor: "var(--color-tech)",
            kpis: [
              { value: "100%", label: "Cobertura de área" },
              { value: "0", label: "Pontos cegos" },
            ],
          },
          {
            title: "Planta industrial elimina falsos alarmes com detecção de gás inteligente",
            excerpt:
              "Substituição de sistema legado por solução integrada com sensores multi-gás e IA de filtragem. Conformidade NR-20 atingida no prazo.",
            imageSrc: "/photos/case-energia.jpg",
            sector: "Energia",
            sectorColor: "var(--color-store)",
            kpis: [
              { value: "0", label: "Falsos alarmes" },
              { value: "NR-20", label: "Certificada" },
            ],
          },
        ]}
      />

      {/* 8. P&D — Capabilities grid */}
      <PD
        kicker="PESQUISA & DESENVOLVIMENTO"
        heading="Inovação como prática, não como promessa."
        subheading="Nosso laboratório de P&D desenvolve soluções proprietárias para desafios que o mercado ainda não resolveu."
        cta="Conheça nosso laboratório →"
        ctaHref="#contato"
        capabilities={[
          {
            title: "Visão Computacional",
            description:
              "Algoritmos de detecção e classificação treinados com dados reais de operações brasileiras.",
          },
          {
            title: "IA Embarcada",
            description:
              "Modelos otimizados para rodar diretamente no hardware — sem dependência de nuvem, com latência zero.",
          },
          {
            title: "Integração de Sistemas",
            description:
              "APIs e conectores para integrar soluções ESI Exata com ERPs, SCADAs e plataformas de gestão.",
          },
          {
            title: "Sensores Proprietários",
            description:
              "Hardware desenvolvido para condições operacionais brasileiras — temperatura, umidade e ambientes agressivos.",
          },
        ]}
      />

      {/* 9. Store — Categories (v1 placeholder) */}
      <Store
        kicker="ESI STORE"
        heading="Tecnologia de ponta. Disponível agora."
        subheading="Câmeras, rádios, sensores e acessórios — com suporte técnico ESI Exata."
        categories={[
          { name: "Câmeras IP & Analógicas" },
          { name: "Rádios Digitais DMR" },
          { name: "Detectores de Gás" },
          { name: "Bodycams" },
          { name: "Acessórios e Insumos" },
        ]}
        cta="Ver catálogo completo →"
        ctaHref="#contato"
        note="Soluções corporativas e projetos customizados: consulte nossa equipe comercial."
      />

      {/* 10. CTA / Footer — Contact form + offices */}
      <CTAFooter
        kicker="VAMOS CONVERSAR"
        heading="Qual é o desafio da sua operação?"
        body="Nossa equipe técnica analisa o seu cenário e propõe a solução mais eficiente — sem custo e sem compromisso."
        phone="(41) 3527 7007"
        offices={[
          {
            city: "Curitiba — PR (Sede)",
            address: "R. Jorge B. Crocetti, 231\nCapão da Imbuia\nCEP 82800-080",
            phone: "(41) 3527 7007",
            email: "contato@esiexata.com.br",
          },
        ]}
      />
    </>
  );
}
