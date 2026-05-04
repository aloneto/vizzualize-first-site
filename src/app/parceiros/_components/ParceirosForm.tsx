"use client";

import { useState, FormEvent } from "react";

type FormData = {
  nomeEmpresa: string;
  cnpj: string;
  responsavel: string;
  email: string;
  telefone: string;
  areaAtuacao: string;
  cidadeEstado: string;
  site: string;
  instagram: string;
  descricaoServicos: string;
  comoConheceu: string;
};

type FieldErrors = Partial<Record<keyof FormData | "global", string>>;

const INITIAL: FormData = {
  nomeEmpresa: "",
  cnpj: "",
  responsavel: "",
  email: "",
  telefone: "",
  areaAtuacao: "",
  cidadeEstado: "",
  site: "",
  instagram: "",
  descricaoServicos: "",
  comoConheceu: "",
};

const inputClass =
  "w-full rounded-lg border border-[var(--color-gray-700)] bg-[var(--color-gray-900)] px-4 py-2.5 text-white placeholder:text-[var(--color-gray-600)] focus:border-[var(--color-tech)] focus:outline-none focus:ring-1 focus:ring-[var(--color-tech)] transition-colors text-sm";

const labelClass = "block text-sm font-medium text-[var(--color-gray-400)] mb-1.5";

export function ParceirosForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newErrors: FieldErrors = {};
    if (!form.nomeEmpresa.trim()) newErrors.nomeEmpresa = "Este campo é obrigatório.";
    if (!form.cnpj.trim()) newErrors.cnpj = "Este campo é obrigatório.";
    if (!form.responsavel.trim()) newErrors.responsavel = "Este campo é obrigatório.";
    if (!form.email.trim()) newErrors.email = "Este campo é obrigatório.";
    if (!form.telefone.trim()) newErrors.telefone = "Este campo é obrigatório.";
    if (!form.areaAtuacao.trim()) newErrors.areaAtuacao = "Este campo é obrigatório.";
    if (!form.cidadeEstado.trim()) newErrors.cidadeEstado = "Este campo é obrigatório.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/parceiros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { success?: boolean; error?: string; field?: string };

      if (data.success) {
        setSuccess(true);
      } else if (data.field) {
        setErrors({ [data.field]: data.error ?? "Erro de validação." });
      } else {
        setErrors({ global: data.error ?? "Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp." });
      }
    } catch {
      setErrors({ global: "Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp." });
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center text-center py-8 gap-4">
        <div className="w-16 h-16 rounded-full bg-[var(--color-tech)]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--color-tech)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
          Cadastro recebido!
        </h3>
        <p className="text-[var(--color-mute)] max-w-sm leading-relaxed">
          Obrigado pelo interesse em ser parceiro ESI Exata. Nossa equipe comercial analisará seu cadastro e entrará em contato em até 2 dias úteis.
        </p>
        <a
          href="#topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-2 text-sm text-[var(--color-tech)] hover:underline"
        >
          Voltar ao início
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {/* Nome da empresa */}
        <div>
          <label className={labelClass}>Nome da empresa <span className="text-[var(--color-red)]">*</span></label>
          <input
            type="text"
            className={inputClass}
            placeholder="Ex: Empresa XPTO Ltda"
            value={form.nomeEmpresa}
            onChange={(e) => set("nomeEmpresa", e.target.value)}
            aria-required="true"
          />
          {errors.nomeEmpresa && <p className="mt-1 text-xs text-red-400">{errors.nomeEmpresa}</p>}
        </div>

        {/* CNPJ */}
        <div>
          <label className={labelClass}>CNPJ <span className="text-[var(--color-red)]">*</span></label>
          <input
            type="text"
            className={inputClass}
            placeholder="00.000.000/0001-00"
            value={form.cnpj}
            onChange={(e) => set("cnpj", e.target.value)}
            aria-required="true"
          />
          {errors.cnpj && <p className="mt-1 text-xs text-red-400">{errors.cnpj}</p>}
        </div>

        {/* Nome do responsável */}
        <div>
          <label className={labelClass}>Nome do responsável <span className="text-[var(--color-red)]">*</span></label>
          <input
            type="text"
            className={inputClass}
            placeholder="Seu nome completo"
            value={form.responsavel}
            onChange={(e) => set("responsavel", e.target.value)}
            aria-required="true"
          />
          {errors.responsavel && <p className="mt-1 text-xs text-red-400">{errors.responsavel}</p>}
        </div>

        {/* E-mail */}
        <div>
          <label className={labelClass}>E-mail corporativo <span className="text-[var(--color-red)]">*</span></label>
          <input
            type="email"
            className={inputClass}
            placeholder="contato@suaempresa.com.br"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            aria-required="true"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>

        {/* Telefone */}
        <div>
          <label className={labelClass}>Telefone / WhatsApp <span className="text-[var(--color-red)]">*</span></label>
          <input
            type="tel"
            className={inputClass}
            placeholder="(00) 00000-0000"
            value={form.telefone}
            onChange={(e) => set("telefone", e.target.value)}
            aria-required="true"
          />
          {errors.telefone && <p className="mt-1 text-xs text-red-400">{errors.telefone}</p>}
        </div>

        {/* Área de atuação */}
        <div>
          <label className={labelClass}>Área de atuação <span className="text-[var(--color-red)]">*</span></label>
          <input
            type="text"
            className={inputClass}
            placeholder="Ex: Instalação elétrica, CFTV..."
            value={form.areaAtuacao}
            onChange={(e) => set("areaAtuacao", e.target.value)}
            aria-required="true"
          />
          {errors.areaAtuacao && <p className="mt-1 text-xs text-red-400">{errors.areaAtuacao}</p>}
        </div>

        {/* Cidade / Estado */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Cidade / Estado <span className="text-[var(--color-red)]">*</span></label>
          <input
            type="text"
            className={inputClass}
            placeholder="Ex: Curitiba, PR"
            value={form.cidadeEstado}
            onChange={(e) => set("cidadeEstado", e.target.value)}
            aria-required="true"
          />
          {errors.cidadeEstado && <p className="mt-1 text-xs text-red-400">{errors.cidadeEstado}</p>}
        </div>
      </div>

      {/* Optional fields divider */}
      <div className="flex items-center gap-3 my-6 border-t border-[var(--color-gray-800)] pt-6">
        <span className="text-xs uppercase tracking-widest text-[var(--color-gray-500)]" style={{ fontFamily: "var(--font-mono)" }}>
          Campos opcionais
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Site */}
        <div>
          <label className={labelClass}>Site da empresa (opcional)</label>
          <input
            type="url"
            className={inputClass}
            placeholder="www.suaempresa.com.br"
            value={form.site}
            onChange={(e) => set("site", e.target.value)}
          />
        </div>

        {/* Instagram */}
        <div>
          <label className={labelClass}>Instagram da empresa (opcional)</label>
          <input
            type="text"
            className={inputClass}
            placeholder="@suaempresa"
            value={form.instagram}
            onChange={(e) => set("instagram", e.target.value)}
          />
        </div>

        {/* Descrição dos serviços */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Descreva brevemente seus serviços (opcional)</label>
          <textarea
            className={inputClass}
            rows={4}
            placeholder="Conte um pouco sobre o que sua empresa faz..."
            value={form.descricaoServicos}
            onChange={(e) => set("descricaoServicos", e.target.value)}
          />
        </div>

        {/* Como conheceu */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Como conheceu a ESI Exata? (opcional)</label>
          <select
            className={inputClass}
            value={form.comoConheceu}
            onChange={(e) => set("comoConheceu", e.target.value)}
          >
            <option value="">Selecione uma opção</option>
            <option value="Indicação de parceiro">Indicação de parceiro</option>
            <option value="Redes sociais">Redes sociais</option>
            <option value="Google / internet">Google / internet</option>
            <option value="Evento ou feira">Evento ou feira</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>

      {errors.global && (
        <p className="mt-4 text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-3">{errors.global}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 bg-[var(--color-red)] hover:bg-[#c9101a] text-white font-semibold py-3.5 rounded-lg transition-colors text-base disabled:opacity-60 disabled:pointer-events-none"
      >
        {loading ? "Enviando..." : "Enviar Cadastro"}
      </button>
    </form>
  );
}
