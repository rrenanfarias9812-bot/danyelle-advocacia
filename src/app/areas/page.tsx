import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Shield, ArrowRight, CheckCircle2, Scale } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Especialização em Direito Trabalhista e Previdenciário. Conheça como atuamos para garantir seus direitos trabalhistas e benefícios do INSS.",
};

const areaDetails = {
  trabalhista: {
    icon: Briefcase,
    color: "from-navy-900 to-navy-800",
    href: "/areas/trabalhista",
    cta: "Ver Direito Trabalhista",
  },
  previdenciario: {
    icon: Shield,
    color: "from-slate-800 to-slate-900",
    href: "/areas/previdenciario",
    cta: "Ver Direito Previdenciário",
  },
};

export default function Page() {
  return (
    <main className="flex flex-col">
      <BreadcrumbJsonLd items={[{ name: "Áreas de Atuação", href: "/areas" }]} />

      <PageHero
        label="Especialidades"
        title={
          <>
            Duas áreas,{" "}
            <span className="text-gradient-gold">um compromisso</span>
          </>
        }
        description="Foco absoluto em Direito Trabalhista e Previdenciário para oferecer o mais alto nível técnico em cada causa."
        breadcrumbs={[{ label: "Áreas de Atuação" }]}
        size="sm"
      />

      {/* Areas */}
      <section className="section-py bg-white">
        <div className="container-site flex flex-col gap-16">

          {/* Why specialize */}
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-navy-50 border border-navy-100 flex items-center justify-center mx-auto">
              <Scale className="w-7 h-7 text-navy-900" />
            </div>
            <h2 className="font-serif font-bold text-display-md text-navy-900 leading-tight">
              Por que especialização importa?
            </h2>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Advogados que atuam em tudo conhecem tudo superficialmente.
              A especialização significa jurisprudência atualizada, estratégias testadas e
              resultados consistentes nas áreas que mais impactam a vida das pessoas.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {practiceAreas.map((area) => {
              const detail = areaDetails[area.id as keyof typeof areaDetails];
              const Icon = detail.icon;

              return (
                <div
                  key={area.id}
                  className={`bg-gradient-to-br ${detail.color} rounded-3xl overflow-hidden flex flex-col`}
                >
                  <div className="p-10 flex flex-col gap-6 flex-1">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/20 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-gold-400" />
                      </div>
                      <h2 className="font-serif font-bold text-display-sm text-white leading-tight">
                        {area.title}
                      </h2>
                    </div>

                    <p className="text-body-lg text-slate-300 leading-relaxed">
                      {area.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {area.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                          <span className="text-body-sm text-slate-200">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="gold"
                      size="md"
                      rounded="full"
                      className="shine-hover group w-fit mt-auto"
                    >
                      <Link href={detail.href}>
                        {detail.cta}
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagnostic CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-navy-50 border border-navy-100">
            <div className="flex flex-col gap-1">
              <h3 className="font-serif font-bold text-display-sm text-navy-900">
                Não sabe qual área se aplica?
              </h3>
              <p className="text-body-md text-muted-foreground">
                Faça nosso diagnóstico gratuito e descubra em menos de 1 minuto.
              </p>
            </div>
            <Button asChild variant="primary" size="md" rounded="full" className="shrink-0">
              <Link href="/diagnostico">
                Fazer diagnóstico
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
