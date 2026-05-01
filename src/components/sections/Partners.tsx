import Image from "next/image";
import { Container } from "@/components/ui/Container";

const partners = [
  { name: 'Hikvision', category: 'CFTV', logo: '/logos/partners/hikvision.png' },
  { name: 'Intelbras', category: 'CFTV', logo: '/logos/partners/intelbras.png' },
  { name: 'Bosch', category: 'CFTV', logo: '/logos/partners/bosch.png' },
  { name: 'Hanwha Techwin', category: 'CFTV', logo: '/logos/partners/hanwha.png' },
  { name: 'Pelco', category: 'CFTV', logo: '/logos/partners/pelco.png' },
  { name: 'Axis', category: 'CFTV', logo: '/logos/partners/axis.png' },
  { name: 'Control-ID', category: 'Controle de Acesso', logo: '/logos/partners/control-id.png' },
  { name: 'Nexans', category: 'Cabeamento', logo: '/logos/partners/nexans.png' },
  { name: 'Furukawa', category: 'Cabeamento', logo: '/logos/partners/furukawa.png' },
  { name: 'Conscope', category: 'Infraestrutura', logo: '/logos/partners/conscope.png' },
  { name: 'Pirelli', category: 'Cabeamento', logo: '/logos/partners/pirelli.png' },
  { name: 'ISS', category: 'Software VMS', logo: '/logos/partners/iss.png' },
  { name: 'Axxon', category: 'Software VMS', logo: '/logos/partners/axxon.png' },
  { name: 'Digifort', category: 'Software VMS', logo: '/logos/partners/digifort.png' },
  { name: 'Seventh', category: 'Software', logo: '/logos/partners/seventh.png' },
];

export function PartnersSection() {
  return (
    <section className="bg-white py-16" aria-label="Parceiros de Tecnologia da ESI Exata">
      <Container>
        <h2 className="text-center text-2xl font-bold text-secondary-900 md:text-3xl">
          Parceiros de Tecnologia
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-secondary-500">
          Fabricantes e fornecedores de soluções líderes de mercado que integram nosso portfólio.
        </p>
      </Container>

      <div className="marquee-container mt-10 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex gap-10">
          {/* First set */}
          {partners.map((partner) => (
            <div
              key={`a-${partner.name}`}
              className="marquee-item flex flex-shrink-0 flex-col items-center gap-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={60}
                className="h-[60px] w-[160px] object-contain transition-all duration-300"
              />
              <span className="text-xs font-medium text-secondary-400">{partner.category}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner) => (
            <div
              key={`b-${partner.name}`}
              className="marquee-item flex flex-shrink-0 flex-col items-center gap-2"
            >
              <Image
                src={partner.logo}
                alt=""
                width={160}
                height={60}
                className="h-[60px] w-[160px] object-contain transition-all duration-300"
              />
              <span className="text-xs font-medium text-secondary-400">{partner.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
