import { Metadata } from "next";
import { LinkDiagram } from "./LinkDiagram";

export const metadata: Metadata = {
  title: "Integra — Folha de Produto | ESI Exata",
  description:
    "Monitor de geladeira de vacina Integra. Lê cinco sinais e responde com cinco tipos de aviso. Vigilância contínua 24/7 para manter vacinas na faixa segura.",
  openGraph: {
    title: "Integra — Monitor de Geladeira de Vacina | ESI Exata",
    description:
      "Cinco sensores, cinco avisos, vigilância contínua 24/7. Conheça como o Integra protege vacinas.",
  },
};

/* ── Color tokens ── */
const BG = "#08080F";
const CARD = "#12121F";
const BORDER = "#1E1E35";
const PURPLE = "#6463E0";
const RED = "#E21219";
const BLUE = "#3B82F6";
const ORANGE = "#F97316";
const GREEN = "#22C55E";
const CYAN = "#06B6D4";
const TEXT = "#ECEDF6";
const MUTED = "#9294A6";

/* ── Sensor data ── */
const SENSORS = [
  {
    id: "A1",
    title: "Sensor de temperatura",
    color: BLUE,
    meta: [
      { label: "Onde fica", value: "Dentro da geladeira, fixado no compartimento das vacinas." },
      { label: "O que le", value: "A temperatura em graus Celsius, a cada poucos segundos." },
      { label: "Para que serve", value: "Saber se a vacina esta na faixa segura e detectar variacoes bruscas." },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <defs>
          <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#E21219" />
          </linearGradient>
        </defs>
        <line x1="24" y1="6" x2="24" y2="34" stroke="url(#tempGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <line x1="20" y1="6" x2="28" y2="6" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="20" y1="12" x2="22" y2="12" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="20" y1="18" x2="22" y2="18" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="20" y1="24" x2="22" y2="24" stroke="#F97316" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="20" y1="30" x2="22" y2="30" stroke="#E21219" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="40" r="5" fill="#E21219" opacity="0.9" />
        <circle cx="24" cy="40" r="2.5" fill="#FF6B6B" />
      </svg>
    ),
  },
  {
    id: "A2",
    title: "Sensor da porta",
    color: CYAN,
    meta: [
      { label: "Onde fica", value: "Na porta — duas pecas pequenas, uma na porta e outra no batente." },
      { label: "O que le", value: "Se a porta esta aberta ou fechada, em tempo real." },
      { label: "Para que serve", value: "Contar e cronometrar cada abertura, e disparar a foto." },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <defs>
          <linearGradient id="doorGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect x="6" y="14" width="14" height="20" rx="2" fill="none" stroke="url(#doorGrad)" strokeWidth="2.5" />
        <rect x="28" y="14" width="14" height="20" rx="2" fill="none" stroke="url(#doorGrad)" strokeWidth="2.5" />
        <line x1="20" y1="24" x2="22" y2="24" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="26" y1="24" x2="28" y2="24" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="13" cy="24" r="2" fill="#06B6D4" />
        <circle cx="35" cy="24" r="2" fill="#8B5CF6" />
        <path d="M22 20 L26 20" stroke="#22D3EE" strokeWidth="1" strokeDasharray="1 2" opacity="0.5" />
        <path d="M22 28 L26 28" stroke="#22D3EE" strokeWidth="1" strokeDasharray="1 2" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "A3",
    title: "Sensor de energia da rede",
    color: ORANGE,
    meta: [
      { label: "Onde fica", value: "Pequena fonte plugada no mesmo circuito da geladeira." },
      { label: "O que le", value: "Se esta chegando energia da rede eletrica ou nao." },
      { label: "Para que serve", value: "Avisar no segundo em que cai a luz no estabelecimento." },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <defs>
          <linearGradient id="powerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <rect x="16" y="10" width="16" height="18" rx="3" fill="none" stroke="url(#powerGrad)" strokeWidth="2.5" />
        <line x1="21" y1="10" x2="21" y2="4" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="27" y1="10" x2="27" y2="4" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="28" x2="24" y2="36" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 36 Q30 38 32 44" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 32 L12 26 L10 30 L14 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="24" r="1.5" fill="#FBBF24" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "A4",
    title: "Sensor da corrente do motor",
    color: GREEN,
    meta: [
      { label: "Onde fica", value: "Pinca ao redor do cabo de forca (nao corta nem desliga nada)." },
      { label: "O que le", value: "Se o motor da geladeira esta consumindo energia neste momento." },
      { label: "Para que serve", value: "Detectar se o compressor parou — antes da temperatura subir." },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <defs>
          <linearGradient id="motorGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path d="M38 24 A14 14 0 1 0 38 24.5" fill="none" stroke="url(#motorGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="2" x2="24" y2="10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="38" x2="24" y2="46" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="#22C55E" opacity="0.3" stroke="#22C55E" strokeWidth="2" />
        <circle cx="24" cy="24" r="1.5" fill="#22C55E" />
        <line x1="40" y1="20" x2="40" y2="28" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "A5",
    title: "Camera",
    color: PURPLE,
    meta: [
      { label: "Onde fica", value: "Instalada na sala, apontada para a porta da geladeira." },
      { label: "O que le", value: "Tira uma foto sob comando do equipamento. Nao grava video continuo." },
      { label: "Para que serve", value: "Registrar o que acontecia na hora exata em que a porta foi aberta." },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <defs>
          <linearGradient id="camGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <rect x="6" y="14" width="36" height="22" rx="3" fill="none" stroke="url(#camGrad)" strokeWidth="2.5" />
        <circle cx="24" cy="25" r="7" fill="none" stroke="#8B5CF6" strokeWidth="2" />
        <circle cx="24" cy="25" r="3" fill="#EC4899" opacity="0.5" />
        <circle cx="24" cy="25" r="1.2" fill="#EC4899" />
        <rect x="10" y="10" width="6" height="4" rx="1" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="37" cy="19" r="1.5" fill="#EC4899" />
      </svg>
    ),
  },
];

/* ── Output data ── */
const OUTPUTS = [
  {
    id: "B1",
    title: "WhatsApp imediato",
    color: "#25D366",
    meta: [
      { label: "Quando dispara", value: "No segundo em que um problema e detectado." },
      { label: "Quem recebe", value: "Lista de responsaveis cadastrados — configuravel por unidade." },
      { label: "Conteudo", value: "Texto curto: o que aconteceu, em qual geladeira, a que horas." },
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="#25D366" stroke="none">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.582 0 11.94-5.359 11.944-11.893a11.821 11.821 0 00-3.487-8.413z" />
      </svg>
    ),
  },
  {
    id: "B2",
    title: "WhatsApp de resumo",
    color: "#25D366",
    meta: [
      { label: "Quando dispara", value: "Duas vezes ao dia, em horario fixo (manha e noite, configuraveis)." },
      { label: "Quem recebe", value: "Lista de destinatarios do resumo (pode diferir da lista de alertas)." },
      { label: "Conteudo", value: "Tudo o que aconteceu no periodo em uma unica mensagem." },
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="#25D366" stroke="none">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.582 0 11.94-5.359 11.944-11.893a11.821 11.821 0 00-3.487-8.413z" />
      </svg>
    ),
  },
  {
    id: "B3",
    title: "Beep no local",
    color: RED,
    meta: [
      { label: "Quando dispara", value: "Em situacoes criticas — temperatura critica, motor parado." },
      { label: "Quem ouve", value: "A equipe presente na farmacia. Aviso fisico, imediato." },
      { label: "Como funciona", value: "Acionada pelo proprio equipamento — dispara mesmo sem internet." },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <defs>
          <linearGradient id="beepGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E21219" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <circle cx="17" cy="24" r="9" fill="none" stroke="url(#beepGrad)" strokeWidth="2.5" />
        <circle cx="17" cy="24" r="2.6" fill="#E21219" />
        <path d="M31 15 Q37 24 31 33" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <path d="M36 10 Q45 24 36 38" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "B4",
    title: "Foto registrada",
    color: PURPLE,
    meta: [
      { label: "Quando dispara", value: "Cada vez que a porta da geladeira e aberta." },
      { label: "Quem acessa", value: "Pelo painel no navegador, com login. Nao e enviada por WhatsApp." },
      { label: "Como fica", value: "Guardada por um periodo definido, com data e hora." },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <defs>
          <linearGradient id="photoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="22" height="22" rx="2" fill="none" stroke="#8B5CF6" strokeWidth="2.5" opacity="0.5" />
        <rect x="16" y="16" width="22" height="22" rx="2" fill="none" stroke="url(#photoGrad)" strokeWidth="2.5" />
        <circle cx="22" cy="22" r="3.5" fill="#06B6D4" opacity="0.4" stroke="#06B6D4" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="1.5" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    id: "B5",
    title: "Dashboard central de monitoramento",
    color: BLUE,
    meta: [
      { label: "Quando atualiza", value: "Continuamente, em tempo real, a cada nova leitura recebida." },
      { label: "Quem acessa", value: "Pelo navegador, com login. Cada pessoa ve so o que tem permissao." },
      { label: "O que mostra", value: "Estado de todas as geladeiras, graficos, historico, fotos." },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <defs>
          <linearGradient id="dashGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect x="4" y="8" width="40" height="26" rx="2" fill="none" stroke="url(#dashGrad)" strokeWidth="2.5" />
        <line x1="16" y1="42" x2="32" y2="42" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="34" x2="24" y2="42" stroke="#8B5CF6" strokeWidth="2" />
        <polyline points="12,28 18,22 23,25 30,16 36,19" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="16" r="1.5" fill="#3B82F6" />
      </svg>
    ),
  },
];

/* ── Matrix data ── */
const EVENTS = [
  { id: "E1", label: "Temperatura passou do limite", cols: [2, 1, 2, 0, 1] },
  { id: "E2", label: "Mudanca brusca na temperatura", cols: [2, 1, 0, 0, 1] },
  { id: "E3", label: "Porta foi aberta", cols: [0, 1, 0, 2, 1] },
  { id: "E4", label: "Porta passou do tempo limite aberta", cols: [2, 1, 0, 1, 1] },
  { id: "E5", label: "Faltou energia", cols: [2, 1, 0, 0, 1] },
  { id: "E6", label: "O motor da geladeira parou", cols: [2, 1, 2, 0, 1] },
  { id: "E7", label: "O equipamento ficou sem conexao", cols: [2, 0, 0, 0, 1] },
];

const MATRIX_HEADERS = ["WhatsApp\nimediato", "WhatsApp\nresumo", "Beep\nlocal", "Foto\nregistrada", "Dashboard\ncentral"];

function SectionLabel({ tag, children }: { tag: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-bold"
        style={{ background: PURPLE, color: "#fff" }}
      >
        {tag}
      </span>
      <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: MUTED }}>
        {children}
      </span>
      <span className="flex-1 h-px" style={{ background: BORDER }} />
    </div>
  );
}

function SpecRow({
  id,
  title,
  color,
  meta,
  icon,
}: {
  id: string;
  title: string;
  color: string;
  meta: { label: string; value: string }[];
  icon: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-5 p-5 rounded-xl border transition-colors hover:border-opacity-60"
      style={{ background: CARD, borderColor: BORDER }}
    >
      <div className="flex-shrink-0 flex flex-col items-center gap-2">
        <span
          className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded"
          style={{ background: `${color}22`, color }}
        >
          {id}
        </span>
        <div className="w-14 h-14">{icon}</div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold mb-3" style={{ color: TEXT }}>
          {title}
        </h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {meta.map((m) => (
            <div key={m.label}>
              <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color }}>
                {m.label}
              </div>
              <div className="text-sm leading-relaxed" style={{ color: MUTED }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IntegraFrioPage() {
  return (
    <div style={{ background: BG, color: TEXT }} className="min-h-screen font-[var(--font-sora)]">
      {/* ── Header ── */}
      <header className="border-b px-6 py-4 flex flex-wrap items-center justify-between gap-4" style={{ borderColor: BORDER }}>
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-xs font-bold"
            style={{ background: `${PURPLE}22`, border: `2px solid ${PURPLE}`, color: PURPLE }}
          >
            ESI
          </span>
          <span className="w-px h-6" style={{ background: BORDER }} />
          <div>
            <span className="text-lg font-bold tracking-wide" style={{ color: TEXT }}>
              Integra
            </span>
            <span className="block text-xs" style={{ color: MUTED }}>
              Monitor de geladeira de vacina
            </span>
          </div>
        </div>
        <div className="text-xs" style={{ color: MUTED }}>
          Folha de produto &middot; <b className="font-semibold" style={{ color: TEXT }}>v01</b> — 2026
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* ── Hero ── */}
        <header className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: GREEN }} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: GREEN }} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: MUTED }}>
              Especificacao de funcionamento
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Como o equipamento{" "}
            <span style={{ color: PURPLE }}>funciona</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-3xl" style={{ color: MUTED }}>
            O Integra le <b style={{ color: BLUE }}>cinco sinais</b> diretamente da geladeira e do ambiente,
            e responde com <b style={{ color: ORANGE }}>cinco tipos de aviso</b>. Esta folha descreve o que ele
            mede, o que ele faz, e exatamente <b style={{ color: TEXT }}>quando cada aviso e disparado</b>.
          </p>

          {/* Badges */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Protege a vacina",
                desc: "Faixa segura vigiada 24/7",
                color: GREEN,
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.5 4 5.5v6c0 4.5 3.2 8 8 10 4.8-2 8-5.5 8-10v-6Z" />
                    <path d="m8.6 12 2.2 2.4 4.6-5" />
                  </svg>
                ),
              },
              {
                title: "Avisa na hora",
                desc: "Alerta no segundo do problema",
                color: ORANGE,
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0-6 6c0 5-2 6-2 7h16c0-1-2-2-2-7a6 6 0 0 0-6-6Z" />
                    <path d="M10.5 20a1.7 1.7 0 0 0 3 0" />
                  </svg>
                ),
              },
              {
                title: "Registra tudo",
                desc: "Historico, graficos e fotos",
                color: BLUE,
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7h16M4 7l1.4 12.2A1.6 1.6 0 0 0 7 20.6h10a1.6 1.6 0 0 0 1.6-1.4L20 7" />
                    <path d="M9 4.5h6M10 11v5M14 11v5" />
                  </svg>
                ),
              },
            ].map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 p-4 rounded-xl border"
                style={{ background: CARD, borderColor: BORDER }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${b.color}15` }}
                >
                  {b.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: TEXT }}>{b.title}</div>
                  <div className="text-xs mt-0.5" style={{ color: MUTED }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border"
            style={{ background: CARD, borderColor: BORDER }}
          >
            {[
              { n: "5", unit: "", k: "Sensores de entrada" },
              { n: "5", unit: "", k: "Avisos de saida" },
              { n: "7", unit: "", k: "Situacoes monitoradas" },
              { n: "24", unit: "/7", k: "Vigilancia continua" },
            ].map((s) => (
              <div key={s.k} className="text-center">
                <div className="text-3xl font-extrabold" style={{ color: PURPLE }}>
                  {s.n}
                  <span className="text-lg font-medium" style={{ color: MUTED }}>{s.unit}</span>
                </div>
                <div className="text-xs mt-1" style={{ color: MUTED }}>{s.k}</div>
              </div>
            ))}
          </div>
        </header>

        {/* ── Section A — Inputs ── */}
        <section>
          <SectionLabel tag="A">Entradas — o que o equipamento mede</SectionLabel>
          <p className="text-sm mb-6" style={{ color: MUTED }}>
            Cinco sensores, cada um respondendo uma <b style={{ color: TEXT }}>pergunta diferente</b> sobre a geladeira.
          </p>
          <div className="space-y-4">
            {SENSORS.map((s) => (
              <SpecRow key={s.id} {...s} />
            ))}
          </div>
        </section>

        {/* ── Section — Link Diagram ── */}
        <section>
          <SectionLabel tag="&#8596;">Ligacao — dos sensores aos avisos</SectionLabel>
          <p className="text-sm mb-6" style={{ color: MUTED }}>
            Cada sensor esta ligado aos avisos que ele pode acionar. <b style={{ color: TEXT }}>Passe o cursor</b> por um sensor
            — ou por um aviso — para acender o caminho entre eles.
          </p>
          <LinkDiagram />
        </section>

        {/* ── Section B — Outputs ── */}
        <section>
          <SectionLabel tag="B">Saidas — o que o equipamento produz</SectionLabel>
          <p className="text-sm mb-6" style={{ color: MUTED }}>
            Cinco formas distintas de aviso, cada uma para um <b style={{ color: TEXT }}>momento e um proposito</b>.
          </p>
          <div className="space-y-4">
            {OUTPUTS.map((o) => (
              <SpecRow key={o.id} {...o} />
            ))}
          </div>
        </section>

        {/* ── Section C — Matrix ── */}
        <section>
          <SectionLabel tag="C">Mapeamento — o que dispara o que</SectionLabel>
          <p className="text-sm mb-6" style={{ color: MUTED }}>
            Cada situacao detectada aciona um conjunto especifico de saidas.
            Esta tabela mostra <b style={{ color: TEXT }}>todas as combinacoes</b> em uma so vista.
          </p>

          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: BORDER }}>
            <table className="w-full text-sm" style={{ background: CARD }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                    Situacao detectada
                  </th>
                  {MATRIX_HEADERS.map((h) => (
                    <th key={h} className="p-3 text-center text-xs font-semibold uppercase tracking-wider whitespace-pre-line" style={{ color: MUTED }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EVENTS.map((ev, i) => (
                  <tr key={ev.id} style={{ borderBottom: i < EVENTS.length - 1 ? `1px solid ${BORDER}` : undefined }}>
                    <td className="p-3">
                      <span
                        className="inline-block text-[10px] font-mono font-bold mr-2 px-1.5 py-0.5 rounded"
                        style={{ background: `${PURPLE}22`, color: PURPLE }}
                      >
                        {ev.id}
                      </span>
                      <span style={{ color: TEXT }}>{ev.label}</span>
                    </td>
                    {ev.cols.map((val, ci) => (
                      <td key={ci} className="p-3 text-center">
                        {val === 2 && (
                          <span className="inline-block w-3 h-3 rounded-full" style={{ background: RED, boxShadow: `0 0 8px ${RED}66` }} />
                        )}
                        {val === 1 && (
                          <span className="inline-block w-3 h-3 rounded-full" style={{ background: PURPLE, opacity: 0.6 }} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-6 mt-3 text-xs" style={{ color: MUTED }}>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: RED }} />
              Dispara imediatamente
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: PURPLE, opacity: 0.6 }} />
              E registrado / aparece
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="border-t px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs"
        style={{ borderColor: BORDER, color: MUTED }}
      >
        <div>
          <strong style={{ color: TEXT }}>Integra</strong> — Folha de produto
          <br />
          Monitor para geladeiras de vacina
        </div>
        <div className="text-right">
          v01 — 2026
          <br />
          Especificacao de funcionamento
        </div>
      </footer>
    </div>
  );
}
