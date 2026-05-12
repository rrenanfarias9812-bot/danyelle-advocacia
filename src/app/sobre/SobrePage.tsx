"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  BookOpen,
  Heart,
  Shield,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Scale,
  MessageCircle,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/typography";
import { siteConfig } from "@/data/site";

const timeline = [
  {
    year: "2013",
    title: "Graduação em Direito",
    description: "Formação com ênfase em Direito do Trabalho e Seguridade Social.",
    icon: GraduationCap,
  },
  {
    year: "2014",
    title: "Início da carreira",
    description: "Primeiros anos atuando em escritórios referência nas áreas trabalhista e previdenciária.",
    icon: Briefcase,
  },
  {
    year: "2017",
    title: "Escritório próprio",
    description: "Fundação do escritório com foco exclusivo em Direito Trabalhista e Previdenciário.",
    icon: Scale,
  },
  {
    year: "2020",
    title: "Expansão digital",
    description: "Atendimento 100% online para clientes em todo o Brasil, ampliando o acesso à justiça.",
    icon: Users,
  },
  {
    year: "2024+",
    title: "Referência na área",
    description: "Mais de 500 clientes atendidos e 95% de taxa de êxito em causas trabalhistas e previdenciárias.",
    icon: Award,
  },
];

const values = [
  {
    icon: Heart,
    title: "Humanidade",
    description:
      "Cada caso carrega uma história de vida. Atendo com empatia, escuta genuína e respeito pela situação única de cada cliente.",
  },
  {
    icon: Shield,
    title: "Ética",
    description:
      "Transparência total em cada etapa. Sem promessas vazias — apenas orientação honesta sobre possibilidades e riscos reais.",
  },
  {
    icon: BookOpen,
    title: "Excelência técnica",
    description:
      "Atualização constante em jurisprudência e legislação para oferecer sempre a estratégia jurídica mais atual e eficaz.",
  },
  {
    icon: Users,
    title: "Acesso à justiça",
    description:
      "Acredito que todos merecem defesa de qualidade. Por isso atuo com honorários justos e atendimento 100% online.",
  },
];

const credentials = [
  "OAB/SP inscrita e ativa",
  "Especialização em Direito do Trabalho",
  "Especialização em Direito Previdenciário",
  "Membro da Comissão de Direito do Trabalho",
  "Atendimento em todo o Brasil",
  "Mais de 10 anos de experiência",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const, delay },
  }),
};

export function SobrePage() {
  return (
    <main className="flex flex-col">
      <PageHero
        label="Quem Somos"
        title={
          <>
            Advogada com{" "}
            <span className="text-gradient-gold">propósito e resultado</span>
          </>
        }
        description="Conheça a trajetória, os valores e a missão que guiam cada causa que assumo."
        breadcrumbs={[{ label: "Quem Somos" }]}
      />

      {/* Profile section */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                {/* Main avatar card */}
                <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 flex flex-col items-center gap-6 shadow-2xl">
                  <div className="w-32 h-32 rounded-2xl bg-gold-400/20 border-2 border-gold-400/30 flex items-center justify-center">
                    <span className="font-serif font-bold text-6xl text-gold-400">D</span>
                  </div>
                  <div className="text-center flex flex-col gap-1">
                    <p className="font-serif font-bold text-display-sm text-white">
                      Dra. Danyelle Freitas
                    </p>
                    <p className="text-body-sm text-gold-300 uppercase tracking-wider">
                      Advogada Especialista
                    </p>
                    <p className="text-body-xs text-slate-400 mt-1">{siteConfig.oab}</p>
                  </div>

                  <div className="h-px w-full bg-white/10" />

                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[
                      { label: "Trabalhista", icon: Briefcase },
                      { label: "Previdenciário", icon: Shield },
                    ].map(({ label, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/8"
                      >
                        <Icon className="w-5 h-5 text-gold-400" />
                        <span className="text-body-xs text-slate-300 text-center">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instagram link badge */}
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-lg border border-border hover:border-navy-300 transition-all duration-200 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-gold-500" />
                  <span className="text-body-sm font-semibold text-navy-900">
                    @danyelleadvogada
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 text-label-lg uppercase tracking-[0.18em] text-gold-500">
                  <span className="block h-px w-6 bg-gold-400" />
                  Minha história
                </span>
                <h2 className="font-serif font-bold text-display-md text-navy-900 leading-tight">
                  Advogada por vocação, estrategista por necessidade
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-body-md text-slate-600 leading-relaxed">
                <p>
                  Minha jornada no Direito começou com uma convicção simples: todo trabalhador e toda
                  pessoa que contribuiu para a Previdência merece ter seus direitos respeitados — e
                  muitos não sabem sequer que os possuem.
                </p>
                <p>
                  Ao longo de mais de <strong className="text-navy-900">10 anos de atuação</strong>,
                  me especializei nas duas frentes que mais impactam a vida das pessoas: as relações de
                  trabalho e os benefícios previdenciários. Cada caso que assumo é tratado com a mesma
                  dedicação — seja uma rescisão trabalhista ou uma aposentadoria negada pelo INSS.
                </p>
                <p>
                  Acredito que advocacia de excelência não é privilégio de grandes corporações. Com
                  atendimento 100% online, levo suporte jurídico estratégico a clientes em todo o Brasil.
                </p>
              </div>

              {/* Credentials */}
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {credentials.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-body-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 pt-2">
                <Button asChild variant="primary" size="md" rounded="full">
                  <Link href="/contato">
                    Falar comigo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="md" rounded="full">
                  <Link href="/areas">Ver áreas de atuação</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-slate-50">
        <div className="container-site flex flex-col gap-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Valores"
              title={
                <>
                  O que guia cada{" "}
                  <span className="text-gradient-gold">decisão jurídica</span>
                </>
              }
              align="center"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i * 0.08}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-350"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif font-bold text-body-xl text-navy-900">{v.title}</h3>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-navy-section">
        <div className="container-site flex flex-col gap-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Trajetória"
              title={
                <>
                  Uma carreira construída com{" "}
                  <span className="text-gradient-gold">dedicação</span>
                </>
              }
              align="center"
              titleSize="xl"
            />
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/60 via-gold-400/20 to-transparent lg:left-1/2" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                const isRight = i % 2 !== 0;
                return (
                  <motion.div
                    key={item.year}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={i * 0.08}
                    viewport={{ once: true }}
                    className={`relative flex gap-6 lg:gap-0 ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                  >
                    {/* Icon node */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-navy-800 border-2 border-gold-400/40 flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 lg:w-[calc(50%-3rem)] ${
                        isRight ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"
                      }`}
                    >
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors duration-250">
                        <span className="text-label-lg uppercase tracking-widest text-gold-400">
                          {item.year}
                        </span>
                        <h3 className="font-serif font-bold text-body-xl text-white mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-body-sm text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
