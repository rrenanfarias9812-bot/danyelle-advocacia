"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Star, TrendingUp, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/typography";
import { useCountUp } from "@/hooks/useCountUp";

// ─── Individual stat with count-up ───────────────────────────────────────────

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  start: boolean;
}

function AnimatedStat({ value, suffix, label, description, icon: Icon, delay, start }: StatProps) {
  const count = useCountUp(value, 1800, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const, delay }}
      className="group flex flex-col gap-4 p-8 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 hover:border-gold-400/20 transition-all duration-350"
    >
      <div className="w-12 h-12 rounded-xl bg-gold-400/15 border border-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/25 transition-colors duration-350">
        <Icon className="w-6 h-6 text-gold-400" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-1 leading-none">
          <span className="font-serif font-bold text-5xl text-white tabular-nums">
            {count}
          </span>
          <span className="font-serif font-bold text-3xl text-gold-400">{suffix}</span>
        </div>
        <p className="font-semibold text-body-lg text-white mt-1">{label}</p>
        <p className="text-body-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// ─── Stats data ───────────────────────────────────────────────────────────────

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Anos de experiência",
    description: "Atuando nas mais complexas causas trabalhistas e previdenciárias",
    icon: Award,
  },
  {
    value: 500,
    suffix: "+",
    label: "Clientes atendidos",
    description: "Cada caso tratado com atenção personalizada e estratégia dedicada",
    icon: Users,
  },
  {
    value: 95,
    suffix: "%",
    label: "Taxa de êxito",
    description: "Resultados comprovados nas principais instâncias judiciais",
    icon: TrendingUp,
  },
  {
    value: 2000,
    suffix: "+",
    label: "Processos encerrados",
    description: "Com resoluções favoráveis para nossos clientes em todo o Brasil",
    icon: Star,
  },
];

// ─── Why choose us ────────────────────────────────────────────────────────────

const differentials = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada cliente recebe atenção individual. Nunca será apenas um número — seu caso é único e merece dedicação total.",
  },
  {
    title: "Transparência total",
    description:
      "Você acompanha cada etapa do processo em tempo real. Sem surpresas, sem termos complicados — clareza em tudo.",
  },
  {
    title: "Estratégia antes de ação",
    description:
      "Análise criteriosa antes de qualquer movimento jurídico. Reduzindo riscos e maximizando chances de êxito.",
  },
  {
    title: "Especialização profunda",
    description:
      "Não atuo em tudo — atuo com excelência nas áreas que domino. Isso faz toda a diferença nos resultados.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-py bg-navy-section relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.035]"
          style={{ background: "radial-gradient(circle, var(--color-gold-400) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.025]"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 65%)" }}
        />
      </div>

      <div className="container-site relative z-10">
        <div className="flex flex-col gap-16" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <SectionHeader
              label="Autoridade e Resultados"
              title={
                <>
                  Números que comprovam{" "}
                  <span className="text-gradient-gold">nossa excelência</span>
                </>
              }
              description="Uma trajetória construída com dedicação, ética e resultados reais para cada cliente que nos confiou sua causa."
              align="center"
              titleSize="xl"
            />
          </motion.div>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <AnimatedStat
                key={stat.label}
                {...stat}
                delay={i * 0.1}
                start={inView}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

          {/* Differentials */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
              className="flex flex-col justify-center gap-4"
            >
              <span className="text-label-lg uppercase tracking-[0.18em] text-gold-400 flex items-center gap-2">
                <span className="block h-px w-6 bg-gold-400" />
                Por que nos escolher
              </span>
              <h3 className="font-serif font-bold text-display-md text-white leading-tight text-balance">
                Advocacia que realmente{" "}
                <span className="text-gradient-gold">se importa</span>{" "}
                com você
              </h3>
              <p className="text-body-lg text-slate-300 leading-relaxed">
                Minha missão vai além do processo jurídico. É sobre garantir que
                você entenda seus direitos e tenha ao seu lado quem vai lutar de
                verdade pela sua causa.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1] as const,
                    delay: i * 0.08,
                  }}
                  className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors duration-250"
                >
                  <div className="w-2 h-2 rounded-full bg-gold-400" />
                  <p className="font-semibold text-body-md text-white">{d.title}</p>
                  <p className="text-body-sm text-slate-400 leading-relaxed">
                    {d.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
