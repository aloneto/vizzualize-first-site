import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Client = {
  name: string;
  logoSrc?: string;
};

type ClientBarProps = {
  heading?: string;
  clients?: Client[];
};

export function ClientBar({
  heading = "EMPRESAS QUE CONFIAM NA ESI EXATA",
  clients = [],
}: ClientBarProps) {
  return (
    <section className="py-14 bg-[var(--color-gray-50)] border-b border-[var(--color-gray-200)]" aria-label="Clientes">
      <Container>
        {heading && (
          <p className="text-center text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--color-gray-400)] mb-10">
            {heading}
          </p>
        )}
        {clients.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className="text-[var(--color-gray-400)] text-sm font-medium hover:text-[var(--color-gray-700)] transition-colors"
                title={client.name}
              >
                {client.logoSrc ? (
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all"
                  />
                ) : (
                  <span className="font-mono text-xs tracking-wider">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder row when no client data */
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E", "Cliente F"].map((name) => (
              <div
                key={name}
                className="h-6 w-24 rounded bg-[var(--color-gray-200)] animate-pulse"
                aria-hidden="true"
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
