"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const PURPLE = "#6463E0";
const CARD = "#12121F";
const BORDER = "#1E1E35";
const TEXT = "#ECEDF6";
const MUTED = "#9294A6";

const MAP: Record<string, string[]> = {
  A1: ["B1", "B2", "B3", "B5"],
  A2: ["B1", "B2", "B4", "B5"],
  A3: ["B1", "B2", "B5"],
  A4: ["B1", "B2", "B3", "B5"],
  A5: ["B4"],
};

const INPUTS = [
  { id: "A1", label: "Temperatura", meta: "temp / variacao" },
  { id: "A2", label: "Porta", meta: "abertura / tempo" },
  { id: "A3", label: "Energia", meta: "queda de luz" },
  { id: "A4", label: "Motor", meta: "compressor parou" },
  { id: "A5", label: "Camera", meta: "foto sob comando" },
];

const OUTPUTS = [
  { id: "B1", label: "WhatsApp imediato", meta: "no segundo" },
  { id: "B2", label: "WhatsApp resumo", meta: "2x ao dia" },
  { id: "B3", label: "Beep local", meta: "critico / offline" },
  { id: "B4", label: "Foto registrada", meta: "cada abertura" },
  { id: "B5", label: "Dashboard central", meta: "tempo real" },
];

function Node({
  id,
  label,
  meta,
  side,
  active,
  lit,
  onHover,
  onLeave,
  onClick,
}: {
  id: string;
  label: string;
  meta: string;
  side: "in" | "out";
  active: boolean;
  lit: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: (e: React.MouseEvent) => void;
}) {
  const opacity = active ? (lit ? 1 : 0.2) : 1;
  const borderColor = lit ? PURPLE : BORDER;
  return (
    <div
      data-node={id}
      className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200"
      style={{
        background: CARD,
        borderColor,
        opacity,
        boxShadow: lit ? `0 0 12px ${PURPLE}33` : "none",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {side === "in" && (
        <>
          <span
            className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0"
            style={{ background: `${PURPLE}22`, color: PURPLE }}
          >
            {id}
          </span>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate" style={{ color: TEXT }}>{label}</div>
            <div className="text-[11px] truncate" style={{ color: MUTED }}>{meta}</div>
          </div>
        </>
      )}
      {side === "out" && (
        <>
          <div className="min-w-0 text-right flex-1">
            <div className="text-sm font-semibold truncate" style={{ color: TEXT }}>{label}</div>
            <div className="text-[11px] truncate" style={{ color: MUTED }}>{meta}</div>
          </div>
          <span
            className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0"
            style={{ background: `${PURPLE}22`, color: PURPLE }}
          >
            {id}
          </span>
        </>
      )}
    </div>
  );
}

export function LinkDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<{ side: "in" | "out"; id: string } | null>(null);
  const [clicked, setClicked] = useState<{ side: "in" | "out"; id: string } | null>(null);

  const active = clicked || hover;

  const litNodes = new Set<string>();
  const litPairs = new Set<string>();

  if (active) {
    litNodes.add(active.id);
    if (active.side === "in") {
      const targets = MAP[active.id] || [];
      targets.forEach((t) => {
        litNodes.add(t);
        litPairs.add(`${active.id}-${t}`);
      });
    } else {
      Object.entries(MAP).forEach(([src, targets]) => {
        if (targets.includes(active.id)) {
          litNodes.add(src);
          litPairs.add(`${src}-${active.id}`);
        }
      });
    }
  }

  const drawPaths = useCallback(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const box = container.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    svg.style.width = `${box.width}px`;
    svg.style.height = `${box.height}px`;

    const allPairs: { src: string; dst: string }[] = [];
    Object.entries(MAP).forEach(([src, targets]) => {
      targets.forEach((dst) => allPairs.push({ src, dst }));
    });

    const paths = allPairs.map(({ src, dst }) => {
      const srcEl = container.querySelector(`[data-node="${src}"]`);
      const dstEl = container.querySelector(`[data-node="${dst}"]`);
      if (!srcEl || !dstEl) return null;

      const sr = srcEl.getBoundingClientRect();
      const dr = dstEl.getBoundingClientRect();

      const x1 = sr.right - box.left;
      const y1 = sr.top + sr.height / 2 - box.top;
      const x2 = dr.left - box.left;
      const y2 = dr.top + dr.height / 2 - box.top;
      const dx = Math.max(40, (x2 - x1) * 0.45);

      const isLit = litPairs.has(`${src}-${dst}`);
      const isActive = !!active;

      return `<path d="M ${x1} ${y1} C ${x1 + dx} ${y1} ${x2 - dx} ${y2} ${x2} ${y2}"
        fill="none"
        stroke="${isLit ? PURPLE : BORDER}"
        stroke-width="${isLit ? 2.5 : 1}"
        opacity="${isActive ? (isLit ? 1 : 0.1) : 0.3}"
        ${isLit ? `filter="url(#glow)"` : ""}
      />`;
    });

    svg.innerHTML = `<defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>` + paths.filter(Boolean).join("");
  }, [active, litPairs]);

  useEffect(() => {
    drawPaths();
    const onResize = () => drawPaths();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawPaths]);

  useEffect(() => {
    const timer = setTimeout(drawPaths, 50);
    return () => clearTimeout(timer);
  }, [drawPaths]);

  function handleClear() {
    setClicked(null);
  }

  return (
    <div
      className="rounded-xl border p-4 sm:p-6"
      style={{ background: CARD, borderColor: BORDER }}
      onClick={handleClear}
    >
      <div className="flex items-center justify-between mb-4 text-[11px] font-semibold uppercase tracking-wider" style={{ color: MUTED }}>
        <span>A &middot; Sensores</span>
        <span className="hidden sm:inline" style={{ color: `${PURPLE}88` }}>&#9656; aciona</span>
        <span>B &middot; Avisos</span>
      </div>

      <div ref={containerRef} className="relative grid grid-cols-[1fr_1fr] gap-x-12 sm:gap-x-24 lg:gap-x-32">
        <svg ref={svgRef} className="absolute inset-0 pointer-events-none" preserveAspectRatio="none" />

        <div className="space-y-2 relative z-10">
          {INPUTS.map((n) => (
            <Node
              key={n.id}
              {...n}
              side="in"
              active={!!active}
              lit={litNodes.has(n.id)}
              onHover={() => setHover({ side: "in", id: n.id })}
              onLeave={() => setHover(null)}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setClicked(clicked?.id === n.id ? null : { side: "in", id: n.id });
              }}
            />
          ))}
        </div>

        <div className="space-y-2 relative z-10">
          {OUTPUTS.map((n) => (
            <Node
              key={n.id}
              {...n}
              side="out"
              active={!!active}
              lit={litNodes.has(n.id)}
              onHover={() => setHover({ side: "out", id: n.id })}
              onLeave={() => setHover(null)}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setClicked(clicked?.id === n.id ? null : { side: "out", id: n.id });
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: MUTED }}>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        <span>Passe o cursor (ou toque) num bloco para acender as ligacoes</span>
      </div>
    </div>
  );
}
