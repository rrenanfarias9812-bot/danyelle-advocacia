"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Shield,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/typography";
import { practiceAreas } from "@/data/site";

const areaIcons: Record<string, React.ElementType> = {
  trabalhista:   Briefcase,
  previdenciario: Shield,
};

const areaProcessSteps: Record<string, { icon: React.ElementType; label: string }[]> = {
  trabalhista: [
    { icon: FileText, label: "Análise do seu caso" },
    { icon: Users, label: "Estratégia jurídica" },
    { icon: TrendingUp, label: "Negociação ou ação" },
    { icon: CheckCircle2, label: "Resultado conquistado" },
  ],
  previdenciario: [
    { icon: FileText, label: "Avaliação do histórico" },
    { icon: Clock, label: "Documentação completa" },
    { icon: TrendingUp, label: "Pedido ao INSS ou recurso" },
    { icon: CheckCircle2, label: "Benefício garantido" },
  ],
};

const cardColors = [
  {
    gradient: "from-navy-900 to-navy-800",
    badge: "bg-gold-400/15 text-gold-300 border-gold-400/20",
    highlight: "text-gold-400",
    divider: "bg-gold-400/20",
    stepDot: "bg-gold-400",
    cta: "gold" as const,
  },
  {
    gradient: "from-slate-800 to-slate-900",
    badge: "bg-gold-400/15 text-gold-300 border-gold-400/20",
    highlight: "text-gold-400",
    divider: "bg-gold-400/20",
    stepDot: "bg-gold-400",
    cta: "gold" as const,
  },
];

export function PracticeAreas() {
  return (
    <section id="areas" className="section-py bg-slate-50 relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
      />

      <div className="container-site">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <SectionHeader
              label="Áreas de Atuação"
              title={
                <>
                  Direito especializado para{" "}
                  <span className="text-gradient-gold">cada situação</span>
                </>
              }
              description="Atuo em duas frentes estratégicas do direito, garantindo que você tenha suporte jurídico qualificado exatamente onde precisa."
              align="center"
              titleSize="xl"
            />
          </motion.div>

          {/* Cards grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, i) => {
              const Icon = areaIcons[area.id] ?? Briefcase;
              const colors = cardColors[i];
              const steps = areaProcessSteps[area.id] ?? [];

              return (
                <motion.article
                  key={area.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: i * 0.12 }}
                >
                  <div
                    className={`bg-gradient-to-br ${colors.gradient} rounded-3xl overflow-hidden flex flex-col h-full group`}
                  >
                    {/* Card Header */}
                    <div className="p-8 pb-6 flex flex-col gap-5">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/20 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-gold-400" />
                        </div>
                        <span
                          className={`text-label-md uppercase tracking-widest px-3 py-1.5 rounded-full border ${colors.badge}`}
                        >
                          Especialidade
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="font-serif font-bold text-display-sm text-white leading-tight">
                          {area.title}
                        </h3>
                        <p className="text-body-md text-slate-300 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`mx-8 h-px ${colors.divider}`} />

                    {/* Highlights */}
                    <div className="p-8 pt-6 flex flex-col gap-6 flex-1">
                      <div className="flex flex-col gap-2.5">
                        <p className="text-label-lg uppercase tracking-widest text-slate-400">
                          O que abrange
                        </p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                          {area.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2">
                              <CheckCircle2
                                className={`w-4 h-4 mt-0.5 shrink-0 ${colors.highlight}`}
                              />
                              <span className="text-body-sm text-slate-200">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process steps */}
                      <div className="flex flex-col gap-2.5">
                        <p className="text-label-lg uppercase tracking-widest text-slate-400">
                          Como funciona
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {steps.map((step, si) => {
                            const StepIcon = step.icon;
                            return (
                              <div key={si} className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/8 border border-white/10">
                                  <StepIcon className="w-3.5 h-3.5 text-gold-400" />
                                  <span className="text-body-xs text-slate-200 whitespace-nowrap">
                                    {step.label}
                                  </span>
                                </div>
                                {si < steps.length - 1 && (
                                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto pt-2">
                        <Button
                          asChild
                          variant={colors.cta}
                          size="md"
                          rounded="full"
                          className="shine-hover group/btn w-full sm:w-auto"
                        >
                          <Link href={`/areas/${area.slug}`}>
                            Saiba mais sobre {area.title}
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Bottom CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          >
            <p className="text-body-md text-muted-foreground">
              Não sabe qual área se aplica ao seu caso?
            </p>
            <Button asChild variant="outline" size="md" rounded="full">
              <Link href="/diagnostico">
                Fazer diagnóstico jurídico gratuito
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
