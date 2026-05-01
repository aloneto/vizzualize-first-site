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
          { id: "exata", label: "esi|exata", color: "var(--color-red)" },
          { id: "agro",  label: "esi|agro",  color: "var(--color-agro)" },
          { id: "pd",    label: "esi|p&d",   color: "var(--color-pd)" },
          { id: "store", label: "esi|store", color: "var(--color-store)" },
        ]}
      />

      {/* 2. Hero — Headline, stats, CTAs */}
      <Hero
        badge="C&A · Riachuelo · Atacadão · Assaí · Porto de Santos · Porto de Chibatão · Edge Gas · IMPASA · ILS Agro"
        heading="Segurança evita problemas antes deles acontecerem."
        highlightWord="antes"
        subheading="A engenharia de imagem, comunicação crítica e prevenção de perdas por trás das maiores operações de varejo, porto, energia e agro do Brasil. Há 21 anos."
        ctaPrimary="Quero um diagnóstico"
        ctaPrimaryLink="#contato"
        ctaSecondary="Comprar na ESI Store"
        ctaSecondaryLink="#store"
        imageSrc="/photos/hero.jpg"
        stats={[
          { value: "21", suffix: "+", label: "anos de operação", sub: "Desde 2004" },
          { value: "1.170", suffix: "+", label: "unidades varejo", sub: "Grandes redes nacionais" },
          { value: "5", label: "centros logísticos", sub: "Distribuição nacional" },
          { value: "2", label: "portos atendidos", sub: "Santos · Chibatão" },
        ]}
      />

      {/* 3. ClientBar — Clientes reais */}
      <ClientBar
        heading="EMPRESAS QUE CONFIAM NA ESI EXATA"
        clients={[
          { name: "Carrefour",          sector: "Varejo",      logoSrc: "/logos/clients/carrefour.png" },
          { name: "Atacadão",           sector: "Varejo",      logoSrc: "/logos/clients/atacadao.png" },
          { name: "Assaí",              sector: "Varejo",      logoSrc: "/logos/clients/assai.png" },
          { name: "Porto de Santos",    sector: "Portuário",   logoSrc: "/logos/clients/porto-santos.png" },
          { name: "Porto de Chibatão",  sector: "Portuário",   logoSrc: "/logos/clients/porto-chibatao.png" },
          { name: "Edge Gas",           sector: "Energia",     logoSrc: "/logos/clients/edge-gas.svg" },
          { name: "Inpasa",             sector: "Agronegócio", logoSrc: "/logos/clients/inpasa.png" },
          { name: "C&A",                sector: "Varejo",      logoSrc: "/logos/clients/cea.png" },
        ]}
      />

      {/* 4. Editorial — Frases do Instagram @esi_exata */}
      <Editorial
        kicker="@ESI_EXATA"
        heading="Tecnologia que opera onde outros não chegam."
        items={[
          { imageSrc: "/photos/editorial-comunicacao-campo.jpg", quote: "Segurança evita problemas antes deles acontecerem.", attribution: "Comunicação em Campo", accentColor: "var(--color-red)" },
          { imageSrc: "/photos/editorial-monitoramento.jpg", quote: "Prevenir é melhor que remediar.", attribution: "Monitoramento de Infraestrutura", accentColor: "var(--color-tech)" },
          { imageSrc: "/photos/editorial-instalacao-altura.jpg", quote: "Não é luxo. É proteção.", attribution: "Instalação em Altura", accentColor: "var(--color-pd)" },
          { imageSrc: "/photos/editorial-incidentes.jpg", quote: "Incidentes mancham reputações.", accentColor: "var(--color-red)" },
          { imageSrc: "/photos/editorial-seguranca-inteligente.jpg", quote: "Segurança inteligente age antes.", accentColor: "var(--color-agro)" },
          { imageSrc: "/photos/editorial-controle-total.jpg", quote: "Veja tudo. Controle tudo.", accentColor: "var(--color-tech)" },
        ]}
      />

      {/* 5. Sectors — 5 itens, Varejo featured */}
      <Sectors
        kicker="SETORES"
        heading="Soluções específicas para os desafios de cada setor."
        subheading="Cada mercado tem sua complexidade. Nossos sistemas foram desenvolvidos para cada realidade operacional."
        items={[
          {
            id: "varejo",
            featured: true,
            name: "Varejo",
            kicker: "Eixo principal · Grandes redes",
            headline: "Prevenção de perdas em escala nacional.",
            desc: "CFTV integrado com analítico, controle de acesso e rádio digital em centenas de lojas. Operação padronizada, centralizada e auditável — do hipermercado ao centro de distribuição.",
            clients: ["Assaí", "Atacadão", "C&A", "Riachuelo"],
            image: "/photos/varejo.jpg",
          },
          {
            id: "porto",
            name: "Portuário",
            kicker: "Ambientes de missão crítica",
            headline: "Quando parar não é opção.",
            desc: "Imagem em ambiente salino, controle de pátio e rádio digital para os principais portos do Brasil. Operação ininterrupta certificada, cobertura 24/7.",
            clients: ["Porto de Santos", "Porto de Chibatão"],
            image: "/photos/porto.jpg",
          },
          {
            id: "energia",
            name: "Energia & Gás",
            kicker: "Detecção precoce",
            headline: "Ver o invisível antes que ele vaze.",
            desc: "Câmeras de detecção óptica de gás (OGI), perimetragem e rádio intrinsecamente seguro para distribuição de GLP e ambientes classificados.",
            clients: ["Edge Gas"],
            image: "/photos/energia.jpg",
          },
          {
            id: "agro",
            name: "Agronegócio",
            kicker: "Filial ESI Agro · Sinop MT",
            headline: "Engenharia no coração do campo.",
            desc: "Rádio de longo alcance para safra, vigilância de silos e cerealistas, IA embarcada em áreas abertas. Time dedicado instalado em Sinop.",
            clients: ["IMPASA", "ILS Agro"],
            image: "/photos/agro.jpg",
          },
          {
            id: "healthcare",
            name: "Healthcare",
            kicker: "Linha nova · 2025",
            headline: "Cuidado que respeita a dignidade.",
            desc: "Sensores de detecção de queda para ILPI e home care. Monitoramento não-invasivo de quartos — alerta em segundos, sem câmera no ambiente privado.",
            clients: ["Em expansão"],
            image: "/photos/healthcare.jpg",
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

      {/* 8. P&D — Pillars + CTAs */}
      <PD
        kicker="esi | p&d · engenharia customizada"
        heading="Quando o catálogo não resolve, a gente desenvolve."
        highlight="a gente desenvolve"
        subheading="Hardware, firmware, integração SCADA, analítico de borda, adaptação para ambientes classificados. Se o que você precisa não existe, nós projetamos."
        ctaPrimary="Traga o seu desafio"
        ctaPrimaryHref="#contato"
        ctaSecondary="Ver projetos P&D"
        ctaSecondaryHref="#pd"
        pillars={[
          { t: "Integração SCADA",     d: "de sistemas proprietários que nenhum integrador quis tocar" },
          { t: "Hardware sob medida",  d: "placas, gateways e suportes para ambientes atípicos" },
          { t: "Firmware customizado", d: "comportamentos específicos da sua operação, não do fabricante" },
          { t: "Analítico de borda",   d: "modelos de IA treinados com o seu dado, na sua realidade" },
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
