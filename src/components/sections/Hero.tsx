"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Briefcase, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EASE = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay },
  }),
};

const stats = [
  { value: "10+", label: "Anos de experiência" },
  { value: "500+", label: "Clientes atendidos" },
  { value: "95%", label: "Taxa de êxito" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-section">
      {/* Background decorative elements */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Large radial gradient — teal accent subtle */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold-400) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, var(--color-teal-500) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-400) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-site relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="flex flex-col gap-8">
            {/* Label badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Badge variant="gold-outline" size="lg" className="w-fit">
                <Shield className="w-3.5 h-3.5" />
                Advocacia Especializada
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="flex flex-col gap-4"
            >
              <h1 className="text-display-xl lg:text-display-2xl font-serif font-bold text-white leading-[1.08] tracking-tight text-balance">
                Seus direitos merecem{" "}
                <span className="text-gradient-gold">defesa de excelência</span>
              </h1>
              <p className="text-body-xl text-slate-300 leading-relaxed max-w-lg">
                Especializada em{" "}
                <span className="text-gold-300 font-semibold">Direito Trabalhista</span>{" "}
                e{" "}
                <span className="text-gold-300 font-semibold">Direito Previdenciário</span>
                , com estratégia, ética e resultados comprovados.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                variant="gold"
                size="lg"
                rounded="full"
                className="shine-hover group"
              >
                <Link href="/contato">
                  <Phone className="w-4 h-4" />
                  Agendar Consultoria Estratégica
                  <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="outline-gold" size="lg" rounded="full">
                <Link href="/areas">
                  <Briefcase className="w-4 h-4" />
                  Áreas de Atuação
                </Link>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
              className="flex flex-wrap gap-8 pt-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-3xl text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-body-sm text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Danyelle photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="hidden lg:flex justify-center items-end"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Gold corner accent */}
              <div
                className="absolute -top-3 -left-3 w-24 h-24 rounded-tl-2xl border-t-2 border-l-2 z-10 pointer-events-none"
                style={{ borderColor: "var(--color-gold-400)" }}
                aria-hidden
              />
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-br-2xl border-b-2 border-r-2 z-10 pointer-events-none"
                style={{ borderColor: "var(--color-gold-400)" }}
                aria-hidden
              />

              {/* Photo frame */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 24px 60px rgb(10 25 47 / 0.6), 0 0 0 1px rgb(201 169 97 / 0.2)",
                }}
              >
                <Image
                  src="/danyelle-hero.jpg"
                  alt="Dra. Danyelle Freitas — Advogada Especialista em Direito Trabalhista e Previdenciário"
                  width={420}
                  height={560}
                  className="w-full h-auto object-cover object-top"
                  priority
                />
                {/* Gradient overlay bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, transparent 100%)",
                  }}
                />
                {/* Name caption */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-serif font-bold text-white text-body-lg leading-tight">
                      Dra. Danyelle Freitas
                    </p>
                    <p className="text-gold-300 text-body-sm">Advogada • OAB</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[0,1,2,3,4].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge — atendimento */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-dark rounded-2xl px-4 py-2.5 flex items-center gap-2 border border-white/10 z-20"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-white text-body-xs font-semibold whitespace-nowrap">
                  Atendimento disponível
                </span>
              </motion.div>

              {/* Floating badge — especialista */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-dark rounded-2xl px-4 py-2.5 flex items-center gap-2.5 border border-white/10 z-20"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,169,97,0.15)" }}
                >
                  <Shield className="w-4 h-4 text-gold-400" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-body-xs font-semibold">Especialista INSS</span>
                  <span className="text-slate-400 text-label-sm">Previdenciário</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-body-xs uppercase tracking-widest">
          Role para baixo
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
