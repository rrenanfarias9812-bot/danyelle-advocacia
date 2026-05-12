"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Briefcase, Phone } from "lucide-react";
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
        {/* Large radial gradient */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold-400) 0%, transparent 70%)",
          }}
        />
        {/* Bottom left accent */}
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, #ffffff 0%, transparent 70%)",
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="flex flex-col gap-8">
            {/* Label badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Badge
                variant="gold-outline"
                size="lg"
                className="w-fit"
              >
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
                <span className="text-gold-300 font-semibold">
                  Direito Trabalhista
                </span>{" "}
                e{" "}
                <span className="text-gold-300 font-semibold">
                  Direito Previdenciário
                </span>
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

              <Button
                asChild
                variant="outline-gold"
                size="lg"
                rounded="full"
              >
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

          {/* Right — Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="glass-dark rounded-3xl p-8 flex flex-col gap-6 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "var(--color-gold-400)" }}
                  >
                    <Shield className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-body-lg">
                      Dra. Danyelle Freitas
                    </p>
                    <p className="text-slate-400 text-body-sm">
                      Advogada • OAB/SP
                    </p>
                  </div>
                </div>

                <div
                  className="h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(212,168,50,0.3), transparent)",
                  }}
                />

                {/* Practice areas */}
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Briefcase, label: "Direito Trabalhista", desc: "Rescisões, assédio, horas extras" },
                    { icon: Shield, label: "Direito Previdenciário", desc: "INSS, aposentadoria, benefícios" },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors duration-250"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(212,168,50,0.15)" }}
                      >
                        <Icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <p className="text-white text-body-sm font-semibold">{label}</p>
                        <p className="text-slate-400 text-body-xs">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA in card */}
                <Button
                  asChild
                  variant="gold"
                  size="md"
                  rounded="full"
                  className="w-full shine-hover"
                >
                  <Link href="/contato">
                    Fale comigo agora
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-dark rounded-2xl px-4 py-2 flex items-center gap-2 border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-body-xs font-semibold">
                  Atendimento disponível
                </span>
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
