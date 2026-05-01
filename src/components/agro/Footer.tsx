import { EsiAgroLogo } from "./icons/EsiAgroLogo";

export function AgroFooter() {
  return (
    <footer
      className="flex items-center justify-between px-6 py-6"
      style={{
        background: "var(--color-agro-green-deep)",
        color: "#fff",
      }}
    >
      <EsiAgroLogo variant="light" className="h-6 w-auto" />
      <span
        className="text-xs opacity-60"
        style={{ fontFamily: "var(--font-agro-mono), monospace" }}
      >
        &copy; Grupo ESI &middot; Filial Agro Sinop MT
      </span>
    </footer>
  );
}
