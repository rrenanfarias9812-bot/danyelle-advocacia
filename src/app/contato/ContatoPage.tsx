"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Clock,
  Shield,
  CheckCircle2,
  Send,
  Phone,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { siteConfig } from "@/data/site";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Resposta rápida, geralmente em poucas horas.",
    action: "Iniciar conversa",
    href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consultoria jurídica.")}`,
    external: true,
    highlight: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Para envio de documentos e casos mais detalhados.",
    action: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
    highlight: false,
  },
  {
    icon: Phone,
    title: "Agendamento online",
    description: "Escolha o melhor horário para sua consultoria.",
    action: "Agendar pelo formulário",
    href: "#formulario",
    external: false,
    highlight: false,
  },
];

const guarantees = [
  { icon: Shield, label: "Sigilo garantido" },
  { icon: Clock, label: "Retorno em até 24h" },
  { icon: CheckCircle2, label: "Primeira consulta gratuita" },
];

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

const AREAS = [
  { value: "", label: "Selecione a área..." },
  { value: "trabalhista", label: "Direito Trabalhista" },
  { value: "previdenciario", label: "Direito Previdenciário" },
  { value: "ambos", label: "Trabalhista + Previdenciário" },
  { value: "outro", label: "Não sei ainda" },
];

export function ContatoPage() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", area: "", message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const next: Partial<FormData> = {};
    if (!form.name.trim()) next.name = "Nome é obrigatório";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "E-mail inválido";
    }
    if (!form.message.trim()) next.message = "Descreva brevemente seu caso";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Simulate async — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  return (
    <main className="flex flex-col">
      <PageHero
        label="Entre em Contato"
        title={
          <>
            Vamos conversar sobre{" "}
            <span className="text-gradient-gold">o seu caso</span>
          </>
        }
        description="Atendimento 100% online, sigiloso e sem compromisso. Descubra seus direitos em uma conversa."
        breadcrumbs={[{ label: "Contato" }]}
        size="sm"
      />

      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-14 lg:gap-16">
            {/* Left — info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-label-lg uppercase tracking-[0.18em] text-gold-500 flex items-center gap-2">
                    <span className="block h-px w-6 bg-gold-400" />
                    Canais de atendimento
                  </span>
                  <h2 className="font-serif font-bold text-display-md text-navy-900 leading-tight">
                    Como prefere falar?
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  {contactMethods.map((m) => {
                    const Icon = m.icon;
                    return (
                      <a
                        key={m.title}
                        href={m.href}
                        target={m.external ? "_blank" : undefined}
                        rel={m.external ? "noopener noreferrer" : undefined}
                        className={`group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-250 ${
                          m.highlight
                            ? "border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/50"
                            : "border-border hover:border-navy-200 hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                            m.highlight
                              ? "bg-[#25D366]/15"
                              : "bg-navy-50 border border-navy-100"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${m.highlight ? "text-[#25D366]" : "text-navy-700"}`}
                          />
                        </div>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <p className="font-semibold text-body-md text-navy-900">{m.title}</p>
                          <p className="text-body-sm text-muted-foreground">{m.description}</p>
                          <span
                            className={`flex items-center gap-1 text-body-sm font-medium mt-1 transition-colors duration-200 ${
                              m.highlight
                                ? "text-[#25D366] group-hover:text-[#1da855]"
                                : "text-gold-500 group-hover:text-gold-600"
                            }`}
                          >
                            {m.action}
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Guarantees */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] as const }}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-navy-50 border border-navy-100"
              >
                <p className="text-label-md uppercase tracking-widest text-muted-foreground">
                  Nossos compromissos
                </p>
                {guarantees.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-body-sm text-navy-800">
                    <Icon className="w-4 h-4 text-gold-500 shrink-0" />
                    {label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              id="formulario"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl border border-border bg-white shadow-xl p-8 sm:p-10">
                {status === "success" ? (
                  <div className="flex flex-col items-center text-center gap-6 py-8">
                    <div className="w-20 h-20 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-serif font-bold text-display-sm text-navy-900">
                        Mensagem enviada!
                      </h3>
                      <p className="text-body-md text-muted-foreground max-w-sm">
                        Recebemos seu contato. Retornaremos em até 24 horas com a orientação adequada para o seu caso.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="md"
                      rounded="full"
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", email: "", phone: "", area: "", message: "" });
                      }}
                    >
                      Enviar outra mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif font-bold text-display-sm text-navy-900">
                        Formulário de contato
                      </h3>
                      <p className="text-body-sm text-muted-foreground">
                        Preencha e retornaremos em até 24h.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label="Nome completo"
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={update("name")}
                        error={errors.name}
                        autoComplete="name"
                        required
                      />
                      <Input
                        label="E-mail"
                        type="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={update("email")}
                        error={errors.email}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label="Telefone / WhatsApp"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={form.phone}
                        onChange={update("phone")}
                        autoComplete="tel"
                        icon={<Phone className="w-4 h-4" />}
                      />
                      <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-label-lg text-navy-900 uppercase tracking-widest">
                          Área de interesse
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <select
                            value={form.area}
                            onChange={update("area")}
                            className="w-full h-12 rounded-xl border border-border bg-white pl-10 pr-4 text-body-md text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 hover:border-slate-400 transition-all duration-250 appearance-none"
                          >
                            {AREAS.map((a) => (
                              <option key={a.value} value={a.value}>
                                {a.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <Textarea
                      label="Descreva seu caso"
                      placeholder="Conte brevemente sua situação para que eu possa orientar melhor..."
                      value={form.message}
                      onChange={update("message")}
                      error={errors.message}
                      rows={5}
                      required
                    />

                    <p className="text-body-xs text-muted-foreground">
                      Suas informações são sigilosas e protegidas pelo sigilo profissional. Ao enviar, você concorda com nossa{" "}
                      <a href="/privacidade" className="text-gold-500 hover:underline">
                        Política de Privacidade
                      </a>
                      .
                    </p>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      rounded="full"
                      loading={status === "loading"}
                      className="shine-hover w-full"
                    >
                      <Send className="w-4 h-4" />
                      {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
