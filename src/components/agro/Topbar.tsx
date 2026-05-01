const brands = [
  { name: "esi|exata", href: "/", active: false },
  { name: "esi|agro", href: "/agro", active: true },
  { name: "esi|p&d", href: "#", active: false },
  { name: "esi|store", href: "#", active: false },
];

export function AgroTopbar() {
  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-2"
      style={{ background: "var(--color-agro-green-deep)", color: "#fff" }}
    >
      <span
        className="text-[11px] tracking-wider opacity-60 hidden sm:block"
        style={{ fontFamily: "var(--font-agro-mono), monospace" }}
      >
        GRUPO ESI &middot; FILIAL AGRO &middot; SINOP MT &middot; ATENDIMENTO MT GO MS BA TO
      </span>
      <div className="flex items-center gap-4 text-[12px] tracking-wide" style={{ fontFamily: "var(--font-agro-mono), monospace" }}>
        {brands.map((b) => (
          <a
            key={b.name}
            href={b.href}
            className="transition-opacity hover:opacity-100"
            style={{
              color: b.active ? "var(--color-agro-yellow)" : "#fff",
              opacity: b.active ? 1 : 0.6,
            }}
          >
            {b.name}
          </a>
        ))}
      </div>
    </div>
  );
}
