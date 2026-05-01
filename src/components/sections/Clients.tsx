import Image from "next/image";
import { Container } from "@/components/ui/Container";

const clients = [
  { name: 'Carrefour', category: 'Varejo', logo: '/logos/clients/carrefour.png' },
  { name: 'Atacadão', category: 'Varejo', logo: '/logos/clients/atacadao.png' },
  { name: 'Assaí', category: 'Varejo', logo: '/logos/clients/assai.png' },
  { name: 'Porto de Santos', category: 'Portuário', logo: '/logos/clients/porto-santos.png' },
  { name: 'Porto de Chibatão', category: 'Portuário', logo: '/logos/clients/porto-chibatao.png' },
  { name: 'Edge Gas', category: 'Energia', logo: '/logos/clients/edge-gas.png' },
  { name: 'Inpasa', category: 'Agronegócio', logo: '/logos/clients/inpasa.png' },
  { name: 'C&A', category: 'Varejo', logo: '/logos/clients/cea.png' },
];

export function ClientsSection() {
  return (
    <section className="bg-gray-50 py-16" aria-label="Empresas que confiam na ESI Exata">
      <Container>
        <h2 className="text-center text-2xl font-bold text-secondary-900 md:text-3xl">
          Empresas que confiam na ESI Exata
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-secondary-500">
          Grandes marcas de diferentes setores escolheram a ESI Exata como parceira tecnológica.
        </p>
      </Container>

      <div className="marquee-container mt-10 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex gap-10">
          {/* First set */}
          {clients.map((client) => (
            <div
              key={`a-${client.name}`}
              className="marquee-item flex flex-shrink-0 flex-col items-center gap-2"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={60}
                className="h-[60px] w-[160px] object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
              <span className="text-xs font-medium text-secondary-400">{client.category}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client) => (
            <div
              key={`b-${client.name}`}
              className="marquee-item flex flex-shrink-0 flex-col items-center gap-2"
            >
              <Image
                src={client.logo}
                alt=""
                width={160}
                height={60}
                className="h-[60px] w-[160px] object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
              <span className="text-xs font-medium text-secondary-400">{client.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
