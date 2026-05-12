"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, BookOpen, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/typography";
import { articles } from "@/data/site";
import type { ArticleCategory } from "@/types";

// ─── Category labels ──────────────────────────────────────────────────────────

const categoryLabels: Record<ArticleCategory, string> = {
  trabalhista:    "Trabalhista",
  previdenciario: "Previdenciário",
  alertas:        "Alertas",
  insights:       "Insights",
  podcast:        "Podcast",
};

const categoryVariant: Record<ArticleCategory, "default" | "gold" | "muted"> = {
  trabalhista:    "default",
  previdenciario: "gold",
  alertas:        "muted",
  insights:       "muted",
  podcast:        "muted",
};

// ─── Filter tabs ──────────────────────────────────────────────────────────────

type FilterKey = "todos" | ArticleCategory;

const filters: { key: FilterKey; label: string }[] = [
  { key: "todos",          label: "Todos" },
  { key: "trabalhista",    label: "Trabalhista" },
  { key: "previdenciario", label: "Previdenciário" },
  { key: "alertas",        label: "Alertas" },
];

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <article className="group flex flex-col gap-4 h-full">
      {/* Thumbnail placeholder */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
        <BookOpen className="w-10 h-10 text-gold-400/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <Badge variant={categoryVariant[article.category]} size="sm">
            {categoryLabels[article.category]}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-3 text-body-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime} min de leitura
          </span>
          <span>•</span>
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>

        <Link href={`/conteudo/${article.slug}`} className="group/link">
          <h3 className="font-serif font-bold text-body-xl text-navy-900 leading-snug group-hover/link:text-gold-600 transition-colors duration-200 line-clamp-2">
            {article.title}
          </h3>
        </Link>

        <p className="text-body-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-label-sm uppercase tracking-wider text-slate-400 bg-slate-100 rounded-full px-2.5 py-1"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/conteudo/${article.slug}`}
          className="flex items-center gap-1.5 text-body-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors duration-200 group/read mt-1"
        >
          Ler artigo completo
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/read:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function ContentHub() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("todos");

  const filtered =
    activeFilter === "todos"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <section id="conteudo" className="section-py bg-white relative overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
            >
              <SectionHeader
                label="Hub de Inteligência Jurídica"
                title={
                  <>
                    Conteúdo que{" "}
                    <span className="text-gradient-gold">educa e protege</span>
                  </>
                }
                description="Artigos, alertas e insights jurídicos para que você conheça e defenda seus direitos."
              />
            </motion.div>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
              className="flex flex-wrap gap-2 shrink-0"
              role="tablist"
              aria-label="Filtrar conteúdo por categoria"
            >
              {filters.map((f) => (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={activeFilter === f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 rounded-full text-body-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold-400 ${
                    activeFilter === f.key
                      ? "bg-navy-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Articles grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.length > 0 ? (
                filtered.map((article, i) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.4, 0, 0.2, 1] as const,
                      delay: i * 0.07,
                    }}
                  >
                    <ArticleCard article={article} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-16 text-muted-foreground">
                  Nenhum conteúdo encontrado nessa categoria.
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Button asChild variant="outline" size="md" rounded="full">
              <Link href="/conteudo">
                Ver todo o conteúdo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
