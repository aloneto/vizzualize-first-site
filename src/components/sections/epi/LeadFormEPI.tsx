"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const SETORES = [
  "Indústria",
  "Construção Civil",
  "Mineração",
  "Portos e Logística",
  "Energia",
  "Outro",
];

const inputClass =
  "mt-1 block w-full rounded-lg border border-[var(--color-gray-700)] bg-[var(--color-gray-900)] px-4 py-2.5 text-white placeholder-[var(--color-gray-600)] focus:border-[var(--color-tech)] focus:outline-none focus:ring-1 focus:ring-[var(--color-tech)] text-sm";

const labelClass = "block text-sm font-medium text-[var(--color-gray-400)]";

export function LeadFormEPI() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

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
          company: data.get("empresa"),
          sector: data.get("setor"),
          message: `[Lead Detecção EPI] Quantidade de câmeras: ${data.get("cameras") || "Não informado"}. Interesse em detecção de capacetes/EPIs com IA.`,
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
        <div className="w-12 h-12 rounded-full bg-[var(--color-tech)]/15 mx-auto mb-4 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[var(--color-tech)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-heading text-lg font-semibold text-white">
          Cadastro recebido!
        </p>
        <p className="mt-2 text-sm text-[var(--color-gray-400)]">
          Nossa equipe de engenharia entrará em contato em até 3 dias útil.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-heading text-xl font-semibold text-white mb-1">
        Solicite uma demonstração
      </h3>
      <p className="text-sm text-[var(--color-gray-400)] mb-6">
        Preencha os dados e retornaremos em até 3 dias útil.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="epi-name" className={labelClass}>
              Nome completo *
            </label>
            <input
              type="text"
              id="epi-name"
              name="name"
              required
              autoComplete="name"
              className={inputClass}
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="epi-email" className={labelClass}>
              E-mail corporativo *
            </label>
            <input
              type="email"
              id="epi-email"
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
            <label htmlFor="epi-phone" className={labelClass}>
              Telefone / WhatsApp *
            </label>
            <input
              type="tel"
              id="epi-phone"
              name="phone"
              required
              autoComplete="tel"
              className={inputClass}
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label htmlFor="epi-empresa" className={labelClass}>
              Empresa *
            </label>
            <input
              type="text"
              id="epi-empresa"
              name="empresa"
              required
              autoComplete="organization"
              className={inputClass}
              placeholder="Nome da empresa"
            />
          </div>
        </div>

        <div>
          <label htmlFor="epi-setor" className={labelClass}>
            Setor de atuação *
          </label>
          <select
            id="epi-setor"
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
          <label htmlFor="epi-cameras" className={labelClass}>
            Quantidade aproximada de câmeras
          </label>
          <select
            id="epi-cameras"
            name="cameras"
            className={`${inputClass} cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="1-10">1 a 10 câmeras</option>
            <option value="11-50">11 a 50 câmeras</option>
            <option value="51-200">51 a 200 câmeras</option>
            <option value="200+">Mais de 200 câmeras</option>
          </select>
        </div>

        <Button
          type="submit"
          variant="tech"
          size="lg"
          disabled={status === "sending"}
          className="w-full"
        >
          {status === "sending"
            ? "Enviando..."
            : "Solicitar demonstração gratuita →"}
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
