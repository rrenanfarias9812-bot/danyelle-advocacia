"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, CheckCircle2, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const reassurances = [
  { icon: CheckCircle2, label: "Primeira consulta gratuita" },
  { icon: Clock, label: "Retorno em até 24h" },
  { icon: Shield, label: "Sigilo garantido" },
];

export function CtaFinal() {
  return (
    <section className="section-py bg-navy-section relative overflow-hidden">
      {/* Decorative */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(ellipse, var(--color-gold-400) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-400) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
            className="inline-flex items-center gap-2 text-label-lg uppercase tracking-[0.18em] text-gold-400"
          >
            <span className="block h-px w-6 bg-gold-400" />
            Dê o primeiro passo
            <span className="block h-px w-6 bg-gold-400" />
          </motion.span>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.4, 0, 0.2, 1] as const }}
            className="flex flex-col gap-4"
          >
            <h2 className="font-serif font-bold text-display-xl text-white leading-tight text-balance">
              Seus direitos estão sendo{" "}
              <span className="text-gradient-gold">respeitados</span>?
            </h2>
            <p className="text-body-xl text-slate-300 leading-relaxed max-w-2xl">
              Muitas pessoas perdem direitos por não saberem que os têm.
              Uma conversa de 30 minutos pode mudar o rumo da sua situação
              trabalhista ou previdenciária.
            </p>
          </motion.div>

          {/* Reassurances */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
            className="flex flex-wrap justify-center gap-6"
          >
            {reassurances.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-body-sm text-slate-300">
                <Icon className="w-4 h-4 text-gold-400 shrink-0" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.4, 0, 0.2, 1] as const }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              variant="gold"
              size="xl"
              rounded="full"
              className="shine-hover group"
            >
              <Link href="/contato">
                <Phone className="w-5 h-5" />
                Agendar Consultoria Estratégica
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline-gold"
              size="xl"
              rounded="full"
            >
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consultoria jurídica.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-body-xs text-slate-500"
          >
            Atendimento 100% online disponível em todo o Brasil.
            Informações sigilosas protegidas pelo sigilo profissional.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
