"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { Button } from "@/components/ui/Button";

const inputClass =
  "mt-1 block w-full rounded-lg border border-[var(--color-line)] bg-white px-4 py-2.5 text-[var(--color-ink)] placeholder-[var(--color-mute)] focus:border-[var(--color-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-red)] text-sm";

const labelClass = "block text-sm font-medium text-[var(--color-ink)]";

function phoneMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function CandidaturaForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phone, setPhone] = useState("");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    setPhone(phoneMask(e.target.value));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const lgpdCheckbox = form.querySelector<HTMLInputElement>("#lgpd-consent");
    data.set("lgpdConsent", lgpdCheckbox?.checked ? "true" : "false");

    try {
      const res = await fetch("/api/vagas/candidatura", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({ error: "Erro ao enviar." }));
        throw new Error(json.error || "Erro ao enviar.");
      }

      setStatus("sent");

      // GA4 conversion event
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "candidatura_enviada", {
          event_category: "vagas",
          event_label: "orcamentista-junior",
        });
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar candidatura.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="text-4xl mb-3">&#10003;</div>
        <p className="font-heading text-lg font-semibold text-[var(--color-ink)]">
          Recebemos sua candidatura!
        </p>
        <p className="mt-2 text-sm text-[var(--color-mute)]">
          Em caso de match com a vaga, nosso time entrará em contato pelo e-mail informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Nome + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cand-nome" className={labelClass}>Nome completo *</label>
          <input type="text" id="cand-nome" name="nome" required autoComplete="name" className={inputClass} placeholder="Seu nome completo" />
        </div>
        <div>
          <label htmlFor="cand-email" className={labelClass}>E-mail *</label>
          <input type="email" id="cand-email" name="email" required autoComplete="email" className={inputClass} placeholder="seu@email.com" />
        </div>
      </div>

      {/* Telefone + Cidade */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cand-telefone" className={labelClass}>Telefone / WhatsApp *</label>
          <input type="tel" id="cand-telefone" name="telefone" required autoComplete="tel" className={inputClass} placeholder="(41) 99999-9999" value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
          <label htmlFor="cand-cidade" className={labelClass}>Cidade / Estado *</label>
          <input type="text" id="cand-cidade" name="cidadeEstado" required className={inputClass} placeholder="Ex: Curitiba / PR" />
        </div>
      </div>

      {/* LinkedIn */}
      <div>
        <label htmlFor="cand-linkedin" className={labelClass}>LinkedIn</label>
        <input type="url" id="cand-linkedin" name="linkedin" className={inputClass} placeholder="https://linkedin.com/in/seu-perfil" />
      </div>

      {/* Selects */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cand-curso" className={labelClass}>Possui curso técnico na área? *</label>
          <select id="cand-curso" name="cursoTecnico" required className={`${inputClass} cursor-pointer`} defaultValue="">
            <option value="" disabled>Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
            <option value="Cursando">Cursando</option>
          </select>
        </div>
        <div>
          <label htmlFor="cand-exp" className={labelClass}>Experiência com orçamentação? *</label>
          <select id="cand-exp" name="experienciaOrcamentacao" required className={`${inputClass} cursor-pointer`} defaultValue="">
            <option value="" disabled>Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>
      </div>

      {/* Pretensão salarial */}
      <div>
        <label htmlFor="cand-pretensao" className={labelClass}>Pretensão salarial</label>
        <input type="text" id="cand-pretensao" name="pretensaoSalarial" className={inputClass} placeholder="Ex: R$ 2.500" />
      </div>

      {/* Upload CV */}
      <div>
        <label htmlFor="cand-cv" className={labelClass}>Currículo (PDF, DOC ou DOCX — máx. 5MB) *</label>
        <div className="mt-1">
          <input type="file" id="cand-cv" name="curriculo" required accept=".pdf,.doc,.docx" ref={fileRef} onChange={handleFileChange} className="hidden" />
          <button type="button" onClick={() => fileRef.current?.click()} className={`${inputClass} text-left cursor-pointer flex items-center gap-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--color-mute)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
            <span className={fileName ? "text-[var(--color-ink)]" : "text-[var(--color-mute)]"}>
              {fileName || "Anexar currículo"}
            </span>
          </button>
        </div>
      </div>

      {/* Mensagem opcional */}
      <div>
        <label htmlFor="cand-msg" className={labelClass}>Mensagem (opcional)</label>
        <textarea id="cand-msg" name="mensagem" rows={3} className={inputClass} placeholder="Conte-nos algo mais sobre você..." />
      </div>

      {/* LGPD */}
      <div className="flex items-start gap-3">
        <input type="checkbox" id="lgpd-consent" name="lgpdConsent" required className="mt-1 h-4 w-4 rounded border-[var(--color-line)] text-[var(--color-red)] focus:ring-[var(--color-red)]" />
        <label htmlFor="lgpd-consent" className="text-xs text-[var(--color-mute)] leading-relaxed">
          Autorizo o tratamento dos meus dados pessoais para fins de processo seletivo, conforme a Lei n° 13.709/2018 (LGPD).
        </label>
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Enviando..." : "Enviar candidatura"}
      </Button>

      {status === "error" && (
        <p className="text-center text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
