import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  User,
  Share2,
  Tag,
  BookOpen,
} from "lucide-react";
import { articles } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/shared/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

const categoryLabels: Record<string, string> = {
  trabalhista:    "Trabalhista",
  previdenciario: "Previdenciário",
  alertas:        "Alertas",
  insights:       "Insights",
  podcast:        "Podcast",
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  const allArticles = articles.filter((a) => a.id !== article.id).slice(0, 2);
  const suggestions = relatedArticles.length >= 2 ? relatedArticles : allArticles;

  return (
    <main className="flex flex-col">
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        slug={article.slug}
        publishedAt={article.publishedAt}
        author={article.author}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Conteúdo", href: "/conteudo" },
          { name: article.title, href: `/conteudo/${article.slug}` },
        ]}
      />

      {/* Article hero */}
      <header className="bg-navy-section pt-28 pb-14 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-400) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-site relative z-10 max-w-3xl flex flex-col gap-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap text-body-xs text-slate-400">
              <li><Link href="/" className="hover:text-slate-200 transition-colors duration-200">Início</Link></li>
              <li className="text-slate-600">/</li>
              <li><Link href="/conteudo" className="hover:text-slate-200 transition-colors duration-200">Conteúdo</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-slate-300" aria-current="page">{article.title}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3">
            <Badge variant="gold" size="sm">
              {categoryLabels[article.category] ?? article.category}
            </Badge>
          </div>

          <h1 className="font-serif font-bold text-display-lg text-white leading-tight text-balance">
            {article.title}
          </h1>

          <p className="text-body-xl text-slate-300 leading-relaxed">{article.excerpt}</p>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <div className="flex items-center gap-2 text-body-sm text-slate-400">
              <User className="w-4 h-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-2 text-body-sm text-slate-400">
              <Clock className="w-4 h-4" />
              {article.readTime} min de leitura
            </div>
            <time
              dateTime={article.publishedAt}
              className="text-body-sm text-slate-400"
            >
              {new Date(article.publishedAt).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="section-py bg-white">
        <div className="container-site max-w-3xl">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Content */}
            <div className="flex flex-col gap-8">
              {/* Placeholder content — replaced when real articles are added */}
              <div className="prose-premium flex flex-col gap-4">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center mb-6">
                  <BookOpen className="w-16 h-16 text-gold-400/30" />
                </div>
                <p>
                  {article.excerpt} Este é o conteúdo completo do artigo. Aqui você encontrará
                  informações detalhadas, fundamentação jurídica e orientações práticas sobre{" "}
                  <strong>{article.title.toLowerCase()}</strong>.
                </p>
                <p>
                  O Direito está em constante evolução e é fundamental que você esteja
                  atualizado sobre seus direitos. Este artigo foi elaborado para que você
                  compreenda com clareza quais são suas garantias legais e como exercê-las.
                </p>
                <h2>O que diz a legislação</h2>
                <p>
                  A Consolidação das Leis do Trabalho (CLT) e a legislação previdenciária
                  estabelecem uma série de proteções ao trabalhador e ao segurado do INSS.
                  Conhecer essas normas é o primeiro passo para defender seus direitos.
                </p>
                <h2>Como agir na prática</h2>
                <p>
                  Se você se identifica com a situação descrita neste artigo, o passo mais
                  importante é buscar orientação jurídica especializada antes de tomar qualquer
                  decisão. Um advogado especialista pode avaliar as particularidades do seu caso
                  e indicar a melhor estratégia.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-label-md uppercase tracking-wider text-slate-500 bg-slate-100 rounded-full px-3 py-1.5"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-slate-50 border border-border">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-body-sm text-navy-900">
                    Este conteúdo foi útil?
                  </p>
                  <p className="text-body-xs text-muted-foreground">
                    Compartilhe com quem precisa conhecer seus direitos.
                  </p>
                </div>
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button asChild variant="ghost" size="sm" rounded="full">
                  <Link href="/conteudo">
                    <ArrowLeft className="w-4 h-4" />
                    Todos os artigos
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-6">
              {/* Author card */}
              <div className="rounded-2xl border border-border p-6 flex flex-col gap-4 sticky top-24">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
                    <span className="font-serif font-bold text-white">D</span>
                  </div>
                  <div>
                    <p className="font-semibold text-body-sm text-navy-900">Dra. Danyelle Freitas</p>
                    <p className="text-body-xs text-muted-foreground">Advogada Especialista</p>
                  </div>
                </div>
                <p className="text-body-xs text-muted-foreground leading-relaxed">
                  Especializada em Direito Trabalhista e Previdenciário, com mais de 10 anos de atuação.
                </p>
                <Button asChild variant="outline" size="sm" rounded="full" className="w-full">
                  <Link href="/contato">
                    Falar comigo
                  </Link>
                </Button>
              </div>

              {/* Related articles */}
              {suggestions.length > 0 && (
                <div className="flex flex-col gap-4">
                  <p className="text-label-md uppercase tracking-widest text-muted-foreground">
                    Leia também
                  </p>
                  {suggestions.map((s) => (
                    <Link
                      key={s.id}
                      href={`/conteudo/${s.slug}`}
                      className="group flex flex-col gap-2 p-4 rounded-xl border border-border hover:border-navy-200 hover:bg-navy-50/40 transition-all duration-200"
                    >
                      <p className="text-body-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-200 line-clamp-2 leading-snug">
                        {s.title}
                      </p>
                      <div className="flex items-center gap-1.5 text-body-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {s.readTime} min
                        <ArrowRight className="w-3 h-3 ml-auto text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>

      <CtaFinal />
    </main>
  );
}
