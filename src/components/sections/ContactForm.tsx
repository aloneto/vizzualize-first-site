"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type ContactFormProps = {
  heading?: string;
  description?: string;
};

const SETORES = [
  "Varejo",
  "Portos",
  "Energia",
  "Agronegócio",
  "Healthcare",
  "Outro",
];

const inputClass =
  "mt-1 block w-full rounded-lg border border-[var(--color-gray-700)] bg-[var(--color-gray-900)] px-4 py-2.5 text-white placeholder-[var(--color-gray-600)] focus:border-[var(--color-tech)] focus:outline-none focus:ring-1 focus:ring-[var(--color-tech)] text-sm";

const labelClass = "block text-sm font-medium text-[var(--color-gray-400)]";

export function ContactForm({ heading, description }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          empresa: data.get("empresa"),
          setor: data.get("setor"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-[var(--color-gray-700)] bg-[var(--color-gray-900)] p-8 text-center">
        <div
          className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
          style={{ background: "var(--color-tech)", opacity: 0.15 }}
        />
        <p className="font-heading text-lg font-semibold text-white">Mensagem recebida.</p>
        <p className="mt-2 text-sm text-[var(--color-gray-400)]">
          Retornaremos em até 1 dia útil.
        </p>
      </div>
    );
  }

  return (
    <div>
      {heading && (
        <h3 className="font-heading text-xl font-semibold text-white mb-1">{heading}</h3>
      )}
      {description && (
        <p className="text-sm text-[var(--color-gray-400)] mb-6">{description}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Nome completo *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              className={inputClass}
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              E-mail corporativo *
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              autoComplete="email"
              className={inputClass}
              placeholder="voce@empresa.com.br"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Telefone / WhatsApp *
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              required
              autoComplete="tel"
              className={inputClass}
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label htmlFor="contact-empresa" className={labelClass}>
              Empresa *
            </label>
            <input
              type="text"
              id="contact-empresa"
              name="empresa"
              required
              autoComplete="organization"
              className={inputClass}
              placeholder="Nome da empresa"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-setor" className={labelClass}>
            Setor de atuação *
          </label>
          <select
            id="contact-setor"
            name="setor"
            required
            className={`${inputClass} cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione o setor
            </option>
            {SETORES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Descreva seu desafio ou necessidade
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={inputClass}
            placeholder="Conte-nos sobre sua operação e o que você precisa proteger ou melhorar..."
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "sending"}
          className="w-full"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensagem →"}
        </Button>

        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Erro ao enviar. Tente novamente ou ligue: (41) 3527 7007
          </p>
        )}
      </form>
    </div>
  );
}
