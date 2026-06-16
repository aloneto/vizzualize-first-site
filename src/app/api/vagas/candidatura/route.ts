import { NextRequest, NextResponse } from "next/server";

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()\-+]{7,20}$/;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em 1 minuto." },
      { status: 429 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const nome = (formData.get("nome") as string)?.trim().slice(0, 100) ?? "";
  const email = (formData.get("email") as string)?.trim().slice(0, 254) ?? "";
  const telefone = (formData.get("telefone") as string)?.trim().slice(0, 20) ?? "";
  const cidadeEstado = (formData.get("cidadeEstado") as string)?.trim().slice(0, 100) ?? "";
  const linkedin = (formData.get("linkedin") as string)?.trim().slice(0, 500) ?? "";
  const cursoTecnico = (formData.get("cursoTecnico") as string)?.trim().slice(0, 20) ?? "";
  const experienciaOrcamentacao = (formData.get("experienciaOrcamentacao") as string)?.trim().slice(0, 10) ?? "";
  const pretensaoSalarial = (formData.get("pretensaoSalarial") as string)?.trim().slice(0, 50) ?? "";
  const mensagem = (formData.get("mensagem") as string)?.trim().slice(0, 2000) ?? "";
  const lgpdConsent = formData.get("lgpdConsent") === "true";
  const curriculo = formData.get("curriculo") as File | null;

  // Validation
  if (!nome) return NextResponse.json({ error: "Nome é obrigatório." }, { status: 400 });
  if (!email || !EMAIL_RE.test(email)) return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  if (!telefone || !PHONE_RE.test(telefone)) return NextResponse.json({ error: "Telefone inválido." }, { status: 400 });
  if (!cidadeEstado) return NextResponse.json({ error: "Cidade/Estado é obrigatório." }, { status: 400 });
  if (!cursoTecnico) return NextResponse.json({ error: "Selecione se possui curso técnico." }, { status: 400 });
  if (!experienciaOrcamentacao) return NextResponse.json({ error: "Selecione se tem experiência." }, { status: 400 });
  if (!lgpdConsent) return NextResponse.json({ error: "É necessário aceitar o termo LGPD." }, { status: 400 });

  if (!curriculo || curriculo.size === 0) {
    return NextResponse.json({ error: "Currículo é obrigatório." }, { status: 400 });
  }

  const fileName = curriculo.name.toLowerCase();
  const hasValidExt = ALLOWED_EXTENSIONS.some((ext) => fileName.endsWith(ext));
  if (!hasValidExt) {
    return NextResponse.json({ error: "Formato de arquivo inválido. Aceitos: PDF, DOC, DOCX." }, { status: 400 });
  }

  if (curriculo.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: "Arquivo excede o limite de 5MB." }, { status: 400 });
  }

  // Log submission (no PII in production logs — just confirmation)
  console.log(`[candidatura] Nova candidatura recebida: ${new Date().toISOString()}`);

  return NextResponse.json({ success: true });
}
