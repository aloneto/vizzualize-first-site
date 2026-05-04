import { NextRequest, NextResponse } from "next/server";
import { appendFile, access, writeFile } from "fs/promises";
import { constants } from "fs";
import path from "path";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeCsv(value: string): string {
  if (value.includes('"') || value.includes(",") || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CNPJ_RE = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$|^\d{14}$/;
const PHONE_RE = /^[\d\s()\-+]{8,20}$/;

const CSV_HEADERS = [
  "data_hora",
  "nome_empresa",
  "cnpj",
  "responsavel",
  "email",
  "telefone",
  "area_atuacao",
  "cidade_estado",
  "site",
  "instagram",
  "descricao_servicos",
  "como_conheceu",
];

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em 1 minuto." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  const nomeEmpresa = sanitize(raw.nomeEmpresa, 200);
  const cnpj = sanitize(raw.cnpj, 20);
  const responsavel = sanitize(raw.responsavel, 150);
  const email = sanitize(raw.email, 254);
  const telefone = sanitize(raw.telefone, 25);
  const areaAtuacao = sanitize(raw.areaAtuacao, 200);
  const cidadeEstado = sanitize(raw.cidadeEstado, 150);
  const site = sanitize(raw.site, 200);
  const instagram = sanitize(raw.instagram, 100);
  const descricaoServicos = sanitize(raw.descricaoServicos, 1000);
  const comoConheceu = sanitize(raw.comoConheceu, 100);

  if (!nomeEmpresa) {
    return NextResponse.json({ error: "Este campo é obrigatório.", field: "nomeEmpresa" }, { status: 400 });
  }
  if (!cnpj || !CNPJ_RE.test(cnpj)) {
    return NextResponse.json({ error: "Informe um CNPJ válido.", field: "cnpj" }, { status: 400 });
  }
  if (!responsavel) {
    return NextResponse.json({ error: "Este campo é obrigatório.", field: "responsavel" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido.", field: "email" }, { status: 400 });
  }
  if (!telefone || !PHONE_RE.test(telefone)) {
    return NextResponse.json({ error: "Informe um telefone válido com DDD.", field: "telefone" }, { status: 400 });
  }
  if (!areaAtuacao) {
    return NextResponse.json({ error: "Este campo é obrigatório.", field: "areaAtuacao" }, { status: 400 });
  }
  if (!cidadeEstado) {
    return NextResponse.json({ error: "Este campo é obrigatório.", field: "cidadeEstado" }, { status: 400 });
  }

  const csvPath =
    process.env.PARCEIROS_CSV_PATH ??
    path.join(process.env.TMPDIR ?? "/tmp", "parceiros.csv");

  const dataHora = new Date().toISOString();
  const row = [
    dataHora,
    nomeEmpresa,
    cnpj,
    responsavel,
    email,
    telefone,
    areaAtuacao,
    cidadeEstado,
    site,
    instagram,
    descricaoServicos,
    comoConheceu,
  ]
    .map(escapeCsv)
    .join(",");

  try {
    let fileExists = false;
    try {
      await access(csvPath, constants.F_OK);
      fileExists = true;
    } catch {
      fileExists = false;
    }

    if (!fileExists) {
      await writeFile(csvPath, CSV_HEADERS.join(",") + "\n" + row + "\n", "utf8");
    } else {
      await appendFile(csvPath, row + "\n", "utf8");
    }
  } catch {
    // Log failure but don't expose internal error to client
    console.error("[parceiros] Falha ao salvar CSV");
  }

  return NextResponse.json({ success: true });
}
