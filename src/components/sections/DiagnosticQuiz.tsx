"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Shield,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/typography";
import { siteConfig } from "@/data/site";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Option {
  id: string;
  label: string;
  next?: string;
  result?: string;
}

interface Question {
  id: string;
  question: string;
  hint?: string;
  options: Option[];
}

interface Result {
  area: "trabalhista" | "previdenciario" | "ambos" | "consulta";
  title: string;
  description: string;
  action: string;
  icon: React.ElementType;
  color: string;
  whatsappMessage: string;
}

// ─── Quiz Data ────────────────────────────────────────────────────────────────

const questions: Record<string, Question> = {
  start: {
    id: "start",
    question: "Qual é a sua situação atual?",
    hint: "Selecione a opção que melhor descreve o que você está enfrentando",
    options: [
      { id: "trabalho", label: "Tenho um problema com meu emprego ou ex-emprego", next: "trabalho_tipo" },
      { id: "inss", label: "Preciso de um benefício do INSS ou ele foi negado/cortado", next: "inss_tipo" },
      { id: "ambos", label: "Tenho problemas com emprego E com o INSS", result: "ambos" },
      { id: "duvida", label: "Não sei ao certo — preciso de orientação", result: "consulta" },
    ],
  },
  trabalho_tipo: {
    id: "trabalho_tipo",
    question: "O que aconteceu com seu vínculo de trabalho?",
    options: [
      { id: "demitido", label: "Fui demitido e acredito que não recebi tudo corretamente", result: "trabalhista" },
      { id: "pediu", label: "Pedi demissão mas me sinto lesado de alguma forma", result: "trabalhista" },
      { id: "ainda_trabalhando", label: "Ainda estou empregado, mas sofro assédio ou irregularidades", result: "trabalhista" },
      { id: "acidente", label: "Sofri acidente ou doença relacionada ao trabalho", result: "trabalhista" },
    ],
  },
  inss_tipo: {
    id: "inss_tipo",
    question: "Qual é a sua situação com o INSS?",
    options: [
      { id: "aposentadoria", label: "Quero me aposentar ou verificar se já tenho direito", result: "previdenciario" },
      { id: "negado", label: "Meu benefício foi negado ou cancelado", result: "previdenciario" },
      { id: "auxilio", label: "Preciso de auxílio-doença ou afastamento médico", result: "previdenciario" },
      { id: "pensao", label: "Perdi um familiar e preciso de pensão por morte", result: "previdenciario" },
    ],
  },
};

const results: Record<string, Result> = {
  trabalhista: {
    area: "trabalhista",
    title: "Direito Trabalhista",
    description:
      "Seu caso se enquadra no Direito Trabalhista. Você pode ter direito a verbas rescisórias, indenizações ou outros benefícios que não foram respeitados pelo empregador.",
    action: "Analisar meu caso trabalhista",
    icon: Briefcase,
    color: "text-gold-400",
    whatsappMessage: "Olá! Fiz o diagnóstico jurídico e meu caso é de Direito Trabalhista. Gostaria de agendar uma consultoria.",
  },
  previdenciario: {
    area: "previdenciario",
    title: "Direito Previdenciário",
    description:
      "Seu caso se enquadra no Direito Previdenciário. Há caminhos jurídicos para garantir ou recuperar seus benefícios junto ao INSS, mesmo após negativas.",
    action: "Analisar meu caso previdenciário",
    icon: Shield,
    color: "text-gold-400",
    whatsappMessage: "Olá! Fiz o diagnóstico jurídico e meu caso é de Direito Previdenciário. Gostaria de agendar uma consultoria.",
  },
  ambos: {
    area: "ambos",
    title: "Trabalhista + Previdenciário",
    description:
      "Você possui questões em ambas as áreas. Isso é muito comum — um acidente de trabalho, por exemplo, pode envolver tanto direitos trabalhistas quanto previdenciários.",
    action: "Falar sobre meu caso completo",
    icon: AlertCircle,
    color: "text-gold-400",
    whatsappMessage: "Olá! Fiz o diagnóstico jurídico e tenho questões em Direito Trabalhista e Previdenciário. Preciso de orientação.",
  },
  consulta: {
    area: "consulta",
    title: "Consultoria Jurídica",
    description:
      "Sem problemas! Uma breve conversa já é suficiente para identificar seus direitos. Muitos clientes descobrem que tinham direitos que nem sabiam existir.",
    action: "Agendar consultoria gratuita",
    icon: CheckCircle2,
    color: "text-green-400",
    whatsappMessage: "Olá! Fiz o diagnóstico jurídico e gostaria de uma consultoria para entender melhor meus direitos.",
  },
};

// ─── Slide variants ───────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
  }),
};

// ─── Component ───────────────────────────────────────────────────────────────

export function DiagnosticQuiz() {
  const [currentId, setCurrentId] = useState<string>("start");
  const [resultKey, setResultKey] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [direction, setDirection] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);

  const current = questions[currentId];
  const result = resultKey ? results[resultKey] : null;
  const progress = resultKey
    ? 100
    : history.length === 0
    ? 0
    : Math.min((history.length / 2) * 100, 90);

  const handleOption = (option: Option) => {
    setSelected(option.id);
    setTimeout(() => {
      setSelected(null);
      if (option.result) {
        setDirection(1);
        setResultKey(option.result);
        setHistory((h) => [...h, currentId]);
      } else if (option.next) {
        setDirection(1);
        setHistory((h) => [...h, currentId]);
        setCurrentId(option.next);
      }
    }, 220);
  };

  const handleBack = () => {
    if (resultKey) {
      setDirection(-1);
      setResultKey(null);
    } else if (history.length > 0) {
      const prev = history[history.length - 1];
      setDirection(-1);
      setCurrentId(prev);
      setHistory((h) => h.slice(0, -1));
    }
  };

  const handleReset = () => {
    setDirection(-1);
    setTimeout(() => {
      setCurrentId("start");
      setResultKey(null);
      setHistory([]);
      setDirection(1);
    }, 50);
  };

  const ResultIcon = result?.icon ?? CheckCircle2;

  return (
    <section id="diagnostico" className="section-py bg-white relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-navy-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-navy-900) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-site relative z-10">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <SectionHeader
              label="Diagnóstico Jurídico"
              title={
                <>
                  Descubra seus{" "}
                  <span className="text-gradient-gold">direitos em 1 minuto</span>
                </>
              }
              description="Responda algumas perguntas simples e saiba exatamente qual área jurídica se aplica ao seu caso — de forma gratuita e sem compromisso."
              align="center"
            />
          </motion.div>

          {/* Quiz card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
            className="mx-auto w-full max-w-2xl"
          >
            <div className="rounded-3xl border border-border bg-white shadow-2xl overflow-hidden">
              {/* Progress bar */}
              <div className="h-1.5 bg-slate-100">
                <motion.div
                  className="h-full bg-gradient-to-r from-navy-900 to-gold-400 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                />
              </div>

              {/* Inner */}
              <div className="p-8 sm:p-10 min-h-[400px] flex flex-col">
                <AnimatePresence mode="wait" custom={direction}>
                  {result ? (
                    /* Result screen */
                    <motion.div
                      key="result"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                      className="flex flex-col gap-6 flex-1"
                    >
                      <div className="flex flex-col items-center text-center gap-5">
                        <div className="w-20 h-20 rounded-2xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                          <ResultIcon className={`w-10 h-10 ${result.color}`} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-label-lg uppercase tracking-widest text-gold-500">
                            Área identificada
                          </span>
                          <h3 className="font-serif font-bold text-display-md text-navy-900">
                            {result.title}
                          </h3>
                          <p className="text-body-md text-muted-foreground leading-relaxed max-w-md mx-auto">
                            {result.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                        <Button
                          asChild
                          variant="gold"
                          size="md"
                          rounded="full"
                          className="shine-hover flex-1"
                        >
                          <a
                            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(result.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4" />
                            {result.action}
                          </a>
                        </Button>
                        <button
                          onClick={handleReset}
                          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border text-body-sm text-muted-foreground hover:text-navy-900 hover:border-navy-300 transition-all duration-200"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          Refazer
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* Question screen */
                    <motion.div
                      key={currentId}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                      className="flex flex-col gap-6 flex-1"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="font-serif font-bold text-display-sm text-navy-900 leading-tight text-balance">
                          {current.question}
                        </h3>
                        {current.hint && (
                          <p className="text-body-sm text-muted-foreground">
                            {current.hint}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-3 flex-1">
                        {current.options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleOption(option)}
                            className={`group relative flex items-center justify-between gap-4 text-left px-5 py-4 rounded-xl border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold-400 ${
                              selected === option.id
                                ? "border-gold-400 bg-gold-50 text-navy-900"
                                : "border-border hover:border-navy-300 hover:bg-navy-50/50"
                            }`}
                          >
                            <span className="text-body-md text-navy-800 group-hover:text-navy-900 transition-colors duration-200">
                              {option.label}
                            </span>
                            <ArrowRight
                              className={`w-4 h-4 shrink-0 transition-all duration-200 ${
                                selected === option.id
                                  ? "text-gold-500 translate-x-1"
                                  : "text-slate-300 group-hover:text-gold-400 group-hover:translate-x-1"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Back button */}
                {(history.length > 0 || resultKey) && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 mt-6 text-body-sm text-muted-foreground hover:text-navy-900 transition-colors duration-200 self-start"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Voltar
                  </button>
                )}
              </div>
            </div>

            {/* Trust note */}
            <p className="text-center text-body-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              Diagnóstico gratuito e sem compromisso — suas informações são sigilosas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
