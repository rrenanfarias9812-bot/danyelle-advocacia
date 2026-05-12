import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do escritório Danyelle Freitas Advocacia. Saiba como coletamos, usamos e protegemos seus dados pessoais de acordo com a LGPD.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "01 de janeiro de 2025";

export default function Page() {
  return (
    <main className="flex flex-col">
      <BreadcrumbJsonLd items={[{ name: "Política de Privacidade", href: "/privacidade" }]} />

      <PageHero
        label="Transparência"
        title="Política de Privacidade"
        description={`Última atualização: ${LAST_UPDATED}`}
        breadcrumbs={[{ label: "Política de Privacidade" }]}
        size="sm"
      />

      <section className="section-py bg-white">
        <div className="container-site max-w-3xl">
          <div className="prose-premium flex flex-col gap-8">

            <div className="p-5 rounded-2xl bg-navy-50 border border-navy-100">
              <p className="text-body-sm text-navy-800 leading-relaxed">
                Este documento descreve como o escritório <strong>Danyelle Freitas Advocacia</strong> coleta,
                utiliza, armazena e protege os dados pessoais dos usuários deste site, em conformidade com a
                Lei Geral de Proteção de Dados (Lei n.º 13.709/2018 — LGPD).
              </p>
            </div>

            <Section title="1. Controlador dos Dados">
              <p>
                O controlador responsável pelo tratamento dos dados pessoais coletados neste site é:
              </p>
              <ul>
                <li><strong>Razão Social:</strong> Danyelle Freitas Advocacia</li>
                <li><strong>Responsável:</strong> Dra. Danyelle Freitas</li>
                <li><strong>Contato:</strong> contato@danyellefreitasadvogada.com.br</li>
                <li><strong>Site:</strong> danyellefreitasadvogada.com.br</li>
              </ul>
            </Section>

            <Section title="2. Dados Coletados">
              <p>Coletamos os seguintes tipos de dados pessoais:</p>
              <ul>
                <li>
                  <strong>Dados fornecidos voluntariamente:</strong> nome, e-mail, telefone e mensagem
                  enviados por meio do formulário de contato.
                </li>
                <li>
                  <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas
                  e tempo de permanência no site, coletados automaticamente via cookies de análise.
                </li>
                <li>
                  <strong>Dados via WhatsApp:</strong> quando você inicia uma conversa pelo botão de
                  contato, a comunicação está sujeita também à Política de Privacidade do WhatsApp/Meta.
                </li>
              </ul>
            </Section>

            <Section title="3. Finalidade do Tratamento">
              <p>Seus dados são utilizados para:</p>
              <ul>
                <li>Responder às solicitações de contato e consultas jurídicas;</li>
                <li>Fornecer informações sobre nossos serviços;</li>
                <li>Melhorar a experiência de navegação no site;</li>
                <li>Cumprir obrigações legais e regulatórias;</li>
                <li>Enviar comunicações sobre conteúdos jurídicos relevantes, somente com seu consentimento.</li>
              </ul>
            </Section>

            <Section title="4. Base Legal">
              <p>O tratamento de dados pessoais ocorre com base nas seguintes hipóteses previstas na LGPD:</p>
              <ul>
                <li><strong>Consentimento (art. 7º, I):</strong> para envio de comunicações e uso de cookies não essenciais.</li>
                <li><strong>Execução de contrato (art. 7º, V):</strong> quando necessário para prestação dos serviços jurídicos.</li>
                <li><strong>Interesse legítimo (art. 7º, IX):</strong> para análise de uso e melhoria do site.</li>
                <li><strong>Cumprimento de obrigação legal (art. 7º, II):</strong> quando exigido por lei ou regulação.</li>
              </ul>
            </Section>

            <Section title="5. Compartilhamento de Dados">
              <p>
                Não vendemos, alugamos ou cedemos seus dados pessoais a terceiros para fins comerciais.
                Podemos compartilhar dados somente quando:
              </p>
              <ul>
                <li>Necessário para prestação do serviço jurídico (ex.: peritos, órgãos judiciais);</li>
                <li>Exigido por ordem judicial ou obrigação legal;</li>
                <li>Com provedores de serviços tecnológicos (hospedagem, e-mail), sob obrigação de sigilo.</li>
              </ul>
            </Section>

            <Section title="6. Cookies">
              <p>
                Utilizamos cookies para melhorar a navegação. Você pode configurar seu navegador para
                recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
              <ul>
                <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
                <li><strong>Cookies analíticos:</strong> coletam informações anônimas sobre uso do site.</li>
              </ul>
            </Section>

            <Section title="7. Retenção de Dados">
              <p>
                Os dados coletados via formulário de contato são retidos pelo prazo necessário para
                atendimento da solicitação e por até 5 (cinco) anos após o encerramento do relacionamento,
                salvo obrigação legal que exija prazo maior.
              </p>
            </Section>

            <Section title="8. Seus Direitos (LGPD, art. 18)">
              <p>Como titular de dados, você tem o direito de:</p>
              <ul>
                <li>Confirmar a existência de tratamento de seus dados;</li>
                <li>Acessar os dados que possuímos sobre você;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Solicitar a portabilidade dos dados;</li>
                <li>Ser informado sobre o compartilhamento de dados.</li>
              </ul>
              <p>
                Para exercer seus direitos, entre em{" "}
                <Link href="/contato" className="text-gold-600 hover:text-gold-700 underline underline-offset-2">
                  contato conosco
                </Link>
                .
              </p>
            </Section>

            <Section title="9. Segurança">
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
                acesso não autorizado, alteração, divulgação ou destruição. O site utiliza protocolo
                HTTPS para criptografia das comunicações.
              </p>
            </Section>

            <Section title="10. Alterações nesta Política">
              <p>
                Esta política pode ser atualizada periodicamente. A data da última revisão está indicada
                no topo deste documento. Recomendamos a consulta periódica.
              </p>
            </Section>

            <Section title="11. Contato e Encarregado (DPO)">
              <p>
                Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais,
                entre em contato pelo e-mail{" "}
                <a href="mailto:contato@danyellefreitasadvogada.com.br" className="text-gold-600 hover:text-gold-700 underline underline-offset-2">
                  contato@danyellefreitasadvogada.com.br
                </a>{" "}
                ou acesse nossa{" "}
                <Link href="/contato" className="text-gold-600 hover:text-gold-700 underline underline-offset-2">
                  página de contato
                </Link>
                .
              </p>
              <p>
                Você também pode registrar reclamação perante a Autoridade Nacional de Proteção de Dados
                (ANPD) pelo site{" "}
                <span className="text-body-sm text-muted-foreground">gov.br/anpd</span>.
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
