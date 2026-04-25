import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

type Office = {
  city: string;
  address: string;
  phone?: string;
  email?: string;
};

type CTAFooterProps = {
  kicker?: string;
  heading?: string;
  body?: string;
  phone?: string;
  offices?: Office[];
};

export function CTAFooter({ kicker, heading, body, phone, offices = [] }: CTAFooterProps) {
  return (
    <section
      id="contato"
      className="py-20 bg-[var(--color-ink)] text-white relative overflow-hidden"
      aria-label="Contato"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/patterns/circuit-pattern.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left: Form */}
          <div>
            {kicker && (
              <span className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-tech)] mb-4">
                {kicker}
              </span>
            )}
            {heading && (
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
            )}
            {body && (
              <p className="text-[var(--color-gray-400)] text-lg mb-8 leading-relaxed">{body}</p>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 font-mono text-[var(--color-tech)] text-sm mb-10 hover:opacity-80 transition-opacity"
              >
                {phone}
              </a>
            )}
            <ContactForm
              heading="Fale com nossa equipe"
              description="Preencha o formulário e retornaremos em até 1 dia útil."
            />
          </div>

          {/* Right: Offices */}
          {offices.length > 0 && (
            <div className="lg:pt-4">
              <h3 className="font-heading text-xl font-semibold mb-8 text-[var(--color-gray-300)]">
                Nossas Sedes
              </h3>
              <div className="space-y-8">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="border-l-2 border-[var(--color-gray-800)] pl-6"
                  >
                    <h4 className="font-heading font-semibold text-white mb-2">{office.city}</h4>
                    <p className="text-sm text-[var(--color-gray-400)] leading-relaxed whitespace-pre-line">
                      {office.address}
                    </p>
                    {office.phone && (
                      <a
                        href={`tel:${office.phone.replace(/\D/g, "")}`}
                        className="block text-sm text-[var(--color-gray-400)] mt-1 hover:text-[var(--color-tech)] transition-colors"
                      >
                        {office.phone}
                      </a>
                    )}
                    {office.email && (
                      <a
                        href={`mailto:${office.email}`}
                        className="block text-sm text-[var(--color-gray-400)] mt-1 hover:text-[var(--color-tech)] transition-colors"
                      >
                        {office.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
