"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  MessageCircle,
  Phone,
  ChevronDown,
  Briefcase,
  Shield,
  type LucideProps,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type AreaIconKey = "trabalhista" | "previdenciario";

const AREA_ICONS: Record<AreaIconKey, React.FC<LucideProps>> = {
  trabalhista:    Briefcase,
  previdenciario: Shield,
};

export interface AreaPageProps {
  slug: string;
  iconKey: AreaIconKey;
  title: string;
  subtitle: string;
  heroDescription: string;
  breadcrumbLabel: string;
  intro: string;
  highlights: string[];
  rights: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaLabel: string;
  ctaWhatsappMessage: string;
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold-400"
        aria-expanded={open}
      >
        <span className="font-semibold text-body-md text-navy-900">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-250",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] as const }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-body-md text-muted-foreground leading-relaxed border-t border-border pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const, delay },
  }),
};

export function AreaPage({
  slug,
  iconKey,
  title,
  subtitle,
  heroDescription,
  breadcrumbLabel,
  intro,
  highlights,
  rights,
  process,
  faqs,
  ctaLabel,
  ctaWhatsappMessage,
}: AreaPageProps) {
  const Icon = AREA_ICONS[iconKey];
  return (
    <main className="flex flex-col">
      <PageHero
        label={subtitle}
        title={
          <>
            <span className="text-gradient-gold">{title}</span>
          </>
        }
        description={heroDescription}
        breadcrumbs={[
          { label: "Áreas de Atuação", href: "/areas" },
          { label: breadcrumbLabel },
        ]}
      />

      {/* Intro + highlights */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <span className="inline-flex items-center gap-2 text-label-lg uppercase tracking-[0.18em] text-gold-500">
                <span className="block h-px w-6 bg-gold-400" />
                Sobre esta área
              </span>
              <h2 className="font-serif font-bold text-display-md text-navy-900 leading-tight">
                O que é o {title}?
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">{intro}</p>
              <Button
                asChild
                variant="gold"
                size="md"
                rounded="full"
                className="shine-hover w-fit"
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(ctaWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <p className="text-label-lg uppercase tracking-widest text-muted-foreground mb-2">
                O que abrange
              </p>
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i * 0.04}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-navy-200 hover:bg-navy-50/50 transition-all duration-250 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-body-md text-navy-800 font-medium group-hover:text-navy-900 transition-colors duration-200">
                    {h}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rights cards */}
      <section className="section-py bg-slate-50">
        <div className="container-site flex flex-col gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-label-lg uppercase tracking-[0.18em] text-gold-500">
              <span className="block h-px w-6 bg-gold-400" />
              Seus direitos
            </span>
            <h2 className="font-serif font-bold text-display-md text-navy-900">
              O que você pode reivindicar
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Conheça os principais direitos que posso ajudar a garantir para você.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rights.map((r, i) => (
              <motion.div
                key={r.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.06}
                viewport={{ once: true }}
              >
                <Card
                  variant="gold-accent"
                  padding="lg"
                  className="h-full flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-350"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-gold-500" />
                  </div>
                  <h3 className="font-serif font-bold text-body-xl text-navy-900">{r.title}</h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-navy-section">
        <div className="container-site flex flex-col gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-label-lg uppercase tracking-[0.18em] text-gold-400 mb-3">
              <span className="block h-px w-6 bg-gold-400" />
              Como funciona
            </span>
            <h2 className="font-serif font-bold text-display-lg text-white leading-tight">
              Do primeiro contato ao{" "}
              <span className="text-gradient-gold">resultado</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.08}
                viewport={{ once: true }}
                className="relative flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors duration-250"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif font-bold text-4xl text-gold-400/30 leading-none select-none">
                    {String(p.step).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-body-lg text-white">{p.title}</h3>
                  <p className="text-body-sm text-slate-400 leading-relaxed">{p.description}</p>
                </div>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400/40 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-site flex flex-col gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-label-lg uppercase tracking-[0.18em] text-gold-500">
              <HelpCircle className="w-4 h-4" />
              Dúvidas frequentes
            </span>
            <h2 className="font-serif font-bold text-display-md text-navy-900">
              Perguntas sobre {title}
            </h2>
          </motion.div>

          <div className="max-w-3xl flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.05}
                viewport={{ once: true }}
              >
                <FaqItem {...faq} />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <p className="text-body-md text-muted-foreground">
              Não encontrou sua dúvida?
            </p>
            <Button asChild variant="outline" size="md" rounded="full">
              <Link href="/contato">
                <Phone className="w-4 h-4" />
                Falar com a advogada
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
