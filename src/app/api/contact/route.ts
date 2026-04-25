import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter: max 5 requests per IP per 60 seconds
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()\-+]{7,20}$/;

export async function POST(request: NextRequest) {
  // Rate limiting by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown";
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

  const name = sanitize(raw.name, 100);
  const email = sanitize(raw.email, 254);
  const message = sanitize(raw.message, 2000);
  const phone = sanitize(raw.phone, 20);
  const company = sanitize(raw.company, 150);
  const sector = sanitize(raw.sector, 100);

  // Required fields
  if (!name) {
    return NextResponse.json({ error: "Nome é obrigatório." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Mensagem é obrigatória." }, { status: 400 });
  }

  // Optional field format validation when provided
  if (phone && !PHONE_RE.test(phone)) {
    return NextResponse.json({ error: "Telefone inválido." }, { status: 400 });
  }

  const payload = { name, email, message, phone, company, sector };

  // Option 1: Formspree (set FORMSPREE_FORM_ID in env)
  const formspreeId = process.env.FORMSPREE_FORM_ID;
  if (formspreeId) {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Falha ao enviar mensagem." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  // Option 2: Resend (set RESEND_API_KEY and CONTACT_TO_EMAIL in env)
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (resendKey && toEmail) {
    const lines = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      company ? `Empresa: ${company}` : null,
      sector ? `Setor: ${sector}` : null,
      `\n${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "contact@resend.dev",
        to: toEmail,
        subject: `Contato: ${name}`,
        text: lines,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Falha ao enviar mensagem." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  // No email service configured — acknowledge receipt without logging PII
  return NextResponse.json({ success: true });
}
