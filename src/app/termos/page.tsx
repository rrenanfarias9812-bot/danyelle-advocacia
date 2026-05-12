import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do site Danyelle Freitas Advocacia. Conheça as condições de uso, limitações e responsabilidades ao acessar nosso site.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "01 de janeiro de 2025";

export default function Page() {
  return (
    <main className="flex flex-col">
      <BreadcrumbJsonLd items={[{ name: "Termos de Uso", href: "/termos" }]} />

      <PageHero
        label="Transparência"
        title="Termos de Uso"
        description={`Última atualização: ${LAST_UPDATED}`}
        breadcrumbs={[{ label: "Termos de Uso" }]}
        size="sm"
      />

      <section className="section-py bg-white">
        <div className="container-site max-w-3xl">
          <div className="prose-premium flex flex-col gap-8">

            <div className="p-5 rounded-2xl bg-navy-50 border border-navy-100">
              <p className="text-body-sm text-navy-800 leading-relaxed">
                Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso.
                Caso não concorde com alguma condição, recomendamos que não utilize o site.
              </p>
            </div>

            <Section title="1. Sobre o Site">
              <p>
                Este site é de titularidade do escritório <strong>Danyelle Freitas Advocacia</strong>,
                inscrita na OAB, e tem como finalidade apresentar informações sobre os serviços jurídicos
                prestados, publicar conteúdos educativos sobre Direito Trabalhista e Previdenciário, e
                facilitar o contato com potenciais clientes.
              </p>
            </Section>

            <Section title="2. Natureza do Conteúdo">
              <p>
                Os conteúdos publicados neste site (artigos, textos, guias, orientações) têm caráter
                exclusivamente <strong>informativo e educativo</strong>, não constituindo parecer jurídico,
                consultoria legal ou relação advogado-cliente.
              </p>
              <p>
                Para análise do seu caso específico, é imprescindível a contratação formal de serviços
                jurídicos. Entre em{" "}
                <Link href="/contato" className="text-gold-600 hover:text-gold-700 underline underline-offset-2">
                  contato
                </Link>{" "}
                para agendar uma consulta.
              </p>
            </Section>

            <Section title="3. Propriedade Intelectual">
              <p>
                Todo o conteúdo deste site — incluindo textos, imagens, logotipos, identidade visual,
                estrutura e código-fonte — é de propriedade exclusiva de Danyelle Freitas Advocacia ou
                de seus respectivos licenciantes.
              </p>
              <p>
                É vedada a reprodução, distribuição, modificação ou uso comercial do conteúdo sem
                autorização prévia por escrito, salvo nos limites permitidos pela Lei de Direitos Autorais
                (Lei n.º 9.610/1998).
              </p>
            </Section>

            <Section title="4. Uso Permitido">
              <p>Ao utilizar este site, você se compromete a:</p>
              <ul>
                <li>Utilizar o conteúdo apenas para fins pessoais e não comerciais;</li>
                <li>Não reproduzir ou distribuir conteúdo sem autorização;</li>
                <li>Não praticar atos que possam prejudicar o funcionamento do site;</li>
                <li>Fornecer informações verdadeiras nos formulários de contato;</li>
                <li>Não utilizar o site para atividades ilícitas ou que violem direitos de terceiros.</li>
              </ul>
            </Section>

            <Section title="5. Links Externos">
              <p>
                Este site pode conter links para sites de terceiros. Esses links são fornecidos apenas
                como conveniência. Não temos controle sobre o conteúdo desses sites e não assumimos
                responsabilidade por seus conteúdos, políticas de privacidade ou práticas.
              </p>
            </Section>

            <Section title="6. Limitação de Responsabilidade">
              <p>
                As informações disponibilizadas neste site são fornecidas "no estado em que se encontram",
                sem garantias de qualquer natureza. Não nos responsabilizamos por:
              </p>
              <ul>
                <li>Decisões tomadas com base nas informações publicadas no site;</li>
                <li>Imprecisões ou desatualizações no conteúdo, dado o dinamismo da legislação;</li>
                <li>Indisponibilidade temporária do site por razões técnicas ou de manutenção;</li>
                <li>Danos causados por vírus ou outros elementos nocivos que possam afetar seu dispositivo.</li>
              </ul>
            </Section>

            <Section title="7. Formulário de Contato">
              <p>
                O envio de mensagens por meio do formulário de contato não estabelece,
                por si só, uma relação de representação legal ou contrato de prestação de serviços.
                A relação jurídica somente se estabelece mediante contrato escrito assinado pelas partes.
              </p>
            </Section>

            <Section title="8. Privacidade">
              <p>
                O tratamento dos dados pessoais coletados neste site é regido pela nossa{" "}
                <Link href="/privacidade" className="text-gold-600 hover:text-gold-700 underline underline-offset-2">
                  Política de Privacidade
                </Link>
                , elaborada em conformidade com a LGPD (Lei n.º 13.709/2018).
              </p>
            </Section>

            <Section title="9. Alterações">
              <p>
                Estes Termos podem ser modificados a qualquer tempo. As alterações entram em vigor
                imediatamente após a publicação no site. O uso continuado do site após as alterações
                constitui aceitação dos novos termos.
              </p>
            </Section>

            <Section title="10. Legislação Aplicável e Foro">
              <p>
                Estes Termos de Uso são regidos pela legislação brasileira. Qualquer controvérsia
                decorrente do uso deste site será submetida ao foro da comarca do escritório, com
                exclusão de qualquer outro, por mais privilegiado que seja.
              </p>
            </Section>

            <Section title="11. Contato">
              <p>
                Para esclarecimentos sobre estes Termos de Uso, entre em contato pelo e-mail{" "}
                <a
                  href="mailto:contato@danyellefreitasadvogada.com.br"
                  className="text-gold-600 hover:text-gold-700 underline underline-offset-2"
                >
                  contato@danyellefreitasadvogada.com.br
                </a>{" "}
                ou pela nossa{" "}
                <Link href="/contato" className="text-gold-600 hover:text-gold-700 underline underline-offset-2">
                  página de contato
                </Link>
                .
              </p>
            </Section>

          </div>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-serif font-bold text-display-sm text-navy-900">{title}</h2>
      <div className="flex flex-col gap-3 text-body-md text-slate-700 leading-relaxed [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_strong]:text-navy-900">
        {children}
      </div>
    </div>
  );
}
