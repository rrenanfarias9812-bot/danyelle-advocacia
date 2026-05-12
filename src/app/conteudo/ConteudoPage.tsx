"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, ArrowRight, BookOpen, Tag, X } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { articles } from "@/data/site";
import type { ArticleCategory } from "@/types";

type FilterKey = "todos" | ArticleCategory;

const filters: { key: FilterKey; label: string }[] = [
  { key: "todos",          label: "Todos" },
  { key: "trabalhista",    label: "Trabalhista" },
  { key: "previdenciario", label: "Previdenciário" },
  { key: "alertas",        label: "Alertas" },
  { key: "insights",       label: "Insights" },
];

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

export function ConteudoPage() {
  const [filter, setFilter] = useState<FilterKey>("todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesFilter = filter === "todos" || a.category === filter;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <main className="flex flex-col">
      <PageHero
        label="Hub de Inteligência Jurídica"
        title={
          <>
            Conteúdo que{" "}
            <span className="text-gradient-gold">educa e protege</span>
          </>
        }
        description="Artigos, alertas e insights para que você conheça seus direitos trabalhistas e previdenciários."
        breadcrumbs={[{ label: "Conteúdo" }]}
        size="sm"
      />

      <section className="section-py bg-white">
        <div className="container-site flex flex-col gap-10">
          {/* Search + filters bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-full sm:max-w-xs">
              <Input
                placeholder="Buscar artigos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                icon={<Search className="w-4 h-4" />}
                iconRight={
                  query ? (
                    <button
                      onClick={() => setQuery("")}
                      className="hover:text-navy-900 transition-colors duration-200"
                      aria-label="Limpar busca"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : undefined
                }
                aria-label="Buscar artigos"
              />
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filtrar por categoria"
            >
              {filters.map((f) => (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={filter === f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 rounded-full text-body-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold-400 ${
                    filter === f.key
                      ? "bg-navy-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <span className="text-body-sm text-muted-foreground sm:ml-auto shrink-0">
              {filtered.length} {filtered.length === 1 ? "artigo" : "artigos"}
            </span>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${query}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((article, i) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex flex-col gap-4 group"
                    >
                      {/* Thumbnail */}
                      <Link href={`/conteudo/${article.slug}`} tabIndex={-1} aria-hidden>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-350">
                          <BookOpen className="w-10 h-10 text-gold-400/40" />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                          <div className="absolute bottom-3 left-3">
                            <Badge variant={categoryVariant[article.category]} size="sm">
                              {categoryLabels[article.category]}
                            </Badge>
                          </div>
                        </div>
                      </Link>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-body-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min
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

                      <Link href={`/conteudo/${article.slug}`}>
                        <h2 className="font-serif font-bold text-body-xl text-navy-900 leading-snug group-hover:text-gold-600 transition-colors duration-200 line-clamp-2">
                          {article.title}
                        </h2>
                      </Link>

                      <p className="text-body-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
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
                        className="flex items-center gap-1.5 text-body-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors duration-200 group/read mt-auto"
                      >
                        Ler artigo
                        <ArrowRight className="w-3.5 h-3.5 group-hover/read:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 py-20 text-center">
                  <Search className="w-12 h-12 text-slate-200" />
                  <p className="text-body-lg font-semibold text-navy-900">
                    Nenhum artigo encontrado
                  </p>
                  <p className="text-body-md text-muted-foreground">
                    Tente outro termo ou categoria.
                  </p>
                  <button
                    onClick={() => { setQuery(""); setFilter("todos"); }}
                    className="text-body-sm text-gold-500 hover:text-gold-600 transition-colors duration-200 font-medium"
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
