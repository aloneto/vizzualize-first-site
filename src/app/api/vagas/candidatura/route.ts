import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { writeFile, mkdir } from "fs/promises";
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

  // Save submission to /tmp
  const curriculoBuffer = Buffer.from(await curriculo.arrayBuffer());
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const safeName = nome.replace(/[^a-zA-Z0-9À-ú]/g, "_").slice(0, 50);
  const submissionDir = path.join("/tmp", "candidaturas", `${timestamp}_${safeName}`);

  try {
    await mkdir(submissionDir, { recursive: true });

    const submissionData = {
      timestamp: new Date().toISOString(),
      nome,
      email,
      telefone,
      cidadeEstado,
      linkedin,
      cursoTecnico,
      experienciaOrcamentacao,
      pretensaoSalarial,
      mensagem,
      curriculoFileName: curriculo.name,
      curriculoSize: curriculo.size,
    };

    await writeFile(
      path.join(submissionDir, "dados.json"),
      JSON.stringify(submissionData, null, 2)
    );
    await writeFile(
      path.join(submissionDir, curriculo.name),
      curriculoBuffer
    );

    console.log(`[candidatura] Salvo em ${submissionDir}:`, JSON.stringify(submissionData));
  } catch (err) {
    console.error("[candidatura] Erro ao salvar em /tmp:", err);
  }

  // Send email to RH
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const rhEmail = process.env.RH_EMAIL ?? "rh@esiexata.com.br";

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"ESI Exata - Vagas" <${smtpUser}>`,
        to: rhEmail,
        replyTo: email,
        subject: `Nova candidatura: Orçamentista Júnior — ${nome}`,
        html: `
          <h2>Nova candidatura recebida</h2>
          <p><strong>Vaga:</strong> Orçamentista Júnior (CFTV/CA)</p>
          <hr/>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Cidade/Estado:</strong> ${cidadeEstado}</p>
          ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ""}
          <p><strong>Curso técnico:</strong> ${cursoTecnico}</p>
          <p><strong>Experiência em orçamentação:</strong> ${experienciaOrcamentacao}</p>
          ${pretensaoSalarial ? `<p><strong>Pretensão salarial:</strong> ${pretensaoSalarial}</p>` : ""}
          ${mensagem ? `<p><strong>Mensagem:</strong> ${mensagem}</p>` : ""}
          <hr/>
          <p><em>Currículo em anexo.</em></p>
        `,
        attachments: [
          {
            filename: curriculo.name,
            content: curriculoBuffer,
          },
        ],
      });

      console.log(`[candidatura] Email enviado para ${rhEmail}: ${new Date().toISOString()}`);
    } catch (err) {
      console.error("[candidatura] Erro ao enviar email:", err);
      // Don't fail the submission if email fails — log and continue
    }
  } else {
    console.log(`[candidatura] SMTP não configurado — candidatura registrada sem envio de email: ${new Date().toISOString()}`);
  }

  return NextResponse.json({ success: true });
}
