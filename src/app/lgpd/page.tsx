import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "LGPD — Proteção de Dados",
  description:
    "Como o escritório Danyelle Freitas Advocacia aplica a Lei Geral de Proteção de Dados (LGPD). Conheça seus direitos e como exercê-los.",
  robots: { index: true, follow: true },
};

const rights = [
  {
    title: "Confirmação e Acesso",
    description: "Saber se tratamos seus dados e obter uma cópia deles.",
  },
  {
    title: "Correção",
    description: "Solicitar a atualização de dados incompletos ou desatualizados.",
  },
  {
    title: "Anonimização ou Eliminação",
    description: "Pedir que dados desnecessários sejam anonimizados ou excluídos.",
  },
  {
    title: "Portabilidade",
    description: "Receber seus dados em formato estruturado para transferência a outro fornecedor.",
  },
  {
    title: "Revogação do Consentimento",
    description: "Retirar seu consentimento a qualquer momento, sem custos.",
  },
  {
    title: "Oposição",
    description: "Opor-se ao tratamento realizado com base em interesse legítimo.",
  },
];

const commitments = [
  "Coletamos apenas os dados estritamente necessários para cada finalidade",
  "Não vendemos, alugamos nem cedemos seus dados a terceiros para fins comerciais",
  "Armazenamos dados pelo menor prazo possível",
  "Utilizamos criptografia HTTPS em todas as comunicações do site",
  "Treinamos nossa equipe sobre boas práticas de proteção de dados",
  "Notificamos titulares e a ANPD em caso de incidentes de segurança relevantes",
];

export default function Page() {
  return (
    <main className="flex flex-col">
      <BreadcrumbJsonLd items={[{ name: "LGPD", href: "/lgpd" }]} />

      <PageHero
        label="Proteção de Dados"
        title="Nossa postura sobre a LGPD"
        description="A Lei Geral de Proteção de Dados (Lei n.º 13.709/2018) reforça seu direito de controlar como suas informações são usadas. Veja como a aplicamos."
        breadcrumbs={[{ label: "LGPD" }]}
        size="sm"
      />

      <section className="section-py bg-white">
        <div className="container-site flex flex-col gap-16 max-w-4xl">

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                <Shield className="w-7 h-7 text-navy-900" />
              </div>
              <h2 className="font-serif font-bold text-display-md text-navy-900 leading-tight">
                O que é a LGPD?
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                A LGPD é a lei brasileira que regulamenta o tratamento de dados pessoais por empresas
                e organizações, garantindo transparência, segurança e controle ao titular dos dados.
              </p>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                Como escritório de advocacia, recebemos dados de clientes e visitantes. Levamos a
                sério nossa responsabilidade de tratar essas informações com ética e segurança.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-navy-900 text-white">
              <p className="text-label-md uppercase tracking-widest text-gold-400">
                Nossos compromissos
              </p>
              <ul className="flex flex-col gap-3">
                {commitments.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                    <span className="text-body-sm text-slate-200 leading-snug">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rights */}
          <div className="flex flex-col gap-8">
            <div className="text-center flex flex-col gap-2">
              <p className="text-label-md uppercase tracking-widest text-gold-500">LGPD — Art. 18</p>
              <h2 className="font-serif font-bold text-display-md text-navy-900">
                Seus direitos como titular
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
                Você tem controle sobre seus dados. Veja o que pode solicitar a qualquer momento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rights.map((r) => (
                <div
                  key={r.title}
                  className="flex flex-col gap-2 p-5 rounded-2xl border border-border hover:border-navy-200 hover:bg-navy-50/40 transition-all duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  <p className="font-semibold text-body-md text-navy-900">{r.title}</p>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to exercise */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl bg-navy-50 border border-navy-100">
            <h2 className="font-serif font-bold text-display-sm text-navy-900">
              Como exercer seus direitos
            </h2>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Para exercer qualquer dos direitos previstos na LGPD, envie uma solicitação para{" "}
              <a
                href="mailto:contato@danyellefreitasadvogada.com.br"
                className="text-gold-600 hover:text-gold-700 font-semibold"
              >
                contato@danyellefreitasadvogada.com.br
              </a>{" "}
              ou use nosso formulário de contato. Responderemos em até <strong>15 dias úteis</strong>.
            </p>
            <p className="text-body-md text-muted-foreground">
              Caso não fique satisfeito com nossa resposta, você pode registrar uma reclamação na
              Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="primary" size="md" rounded="full">
                <Link href="/contato">
                  Exercer meus direitos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="md" rounded="full">
                <Link href="/privacidade">
                  Ver Política de Privacidade
                </Link>
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <p className="text-label-md uppercase tracking-widest text-muted-foreground">
              Documentos relacionados
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacidade"
                className="flex items-center gap-1.5 text-body-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors duration-200"
              >
                Política de Privacidade <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/termos"
                className="flex items-center gap-1.5 text-body-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors duration-200"
              >
                Termos de Uso <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
