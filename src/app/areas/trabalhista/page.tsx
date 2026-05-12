import type { Metadata } from "next";
import { AreaPage } from "@/components/shared/AreaPage";

export const metadata: Metadata = {
  title: "Direito Trabalhista",
  description:
    "Especialista em Direito Trabalhista. Rescisões, horas extras, assédio moral, FGTS e muito mais. Defenda seus direitos trabalhistas com quem entende.",
};

const highlights = [
  "Rescisão indireta",
  "Horas extras e adicional noturno",
  "Assédio moral e sexual",
  "Equiparação salarial",
  "FGTS e verbas rescisórias",
  "Acidente de trabalho",
  "Doenças ocupacionais",
  "Negociações coletivas",
];

const rights = [
  {
    title: "Verbas rescisórias",
    description: "Aviso prévio, 13º salário, férias proporcionais, FGTS + 40% — tudo que a lei garante na demissão.",
  },
  {
    title: "Horas extras não pagas",
    description: "Jornada além das 8h diárias ou 44h semanais gera direito a adicional de no mínimo 50%.",
  },
  {
    title: "Assédio moral ou sexual",
    description: "Condutas abusivas no ambiente de trabalho geram direito a indenização por danos morais.",
  },
  {
    title: "Equiparação salarial",
    description: "Quando você exerce a mesma função que outro colega mas recebe menos sem justificativa legal.",
  },
  {
    title: "Acidente de trabalho",
    description: "Acidentes no ambiente laboral ou doenças ocupacionais garantem direitos previdenciários e indenizatórios.",
  },
  {
    title: "Rescisão indireta",
    description: "Quando o empregador descumpre o contrato de forma grave, você pode rescindi-lo com todos os direitos da demissão sem justa causa.",
  },
];

const process = [
  {
    step: 1,
    title: "Análise gratuita",
    description: "Avaliamos seu caso sem compromisso e identificamos os direitos violados.",
  },
  {
    step: 2,
    title: "Estratégia jurídica",
    description: "Definimos o melhor caminho: negociação extrajudicial ou ação trabalhista.",
  },
  {
    step: 3,
    title: "Ação ou negociação",
    description: "Representamos você na Justiça do Trabalho ou nas negociações com o empregador.",
  },
  {
    step: 4,
    title: "Resultado",
    description: "Acompanhamos até a resolução final e o recebimento dos valores devidos.",
  },
];

const faqs = [
  {
    question: "Posso entrar com ação trabalhista mesmo tendo assinado a rescisão?",
    answer:
      "Sim. A assinatura da rescisão não impede a ação trabalhista. Você tem prazo de 2 anos após o fim do contrato para entrar com reclamação na Justiça do Trabalho, e pode questionar valores incorretos mesmo com documentos assinados.",
  },
  {
    question: "Quanto tempo dura uma ação trabalhista?",
    answer:
      "O tempo médio varia entre 1 e 3 anos, dependendo da complexidade e da comarca. Contudo, muitos casos se resolvem em audiência de conciliação, bem antes disso. Buscamos sempre a solução mais rápida e favorável para você.",
  },
  {
    question: "Preciso ter prova para entrar com ação?",
    answer:
      "Não necessariamente. A Justiça do Trabalho tem mecanismos próprios de produção de provas, incluindo depoimentos e inversão do ônus da prova em certos casos. A análise prévia do seu caso é fundamental para entender o que temos disponível.",
  },
  {
    question: "O que é rescisão indireta?",
    answer:
      "É quando o empregador descumpre obrigações graves do contrato — como não pagar salários, impor condições humilhantes ou descumprir normas de segurança. Nesse caso, você pode rescindir o contrato e ter todos os direitos da demissão sem justa causa.",
  },
  {
    question: "Fui demitido por justa causa mas acredito ser injusto. O que fazer?",
    answer:
      "A justa causa tem requisitos legais rígidos. Se eles não foram cumpridos, a demissão pode ser revertida judicialmente, garantindo todos os direitos da dispensa sem justa causa. Analise seu caso com um advogado antes de qualquer decisão.",
  },
];

export default function Page() {
  return (
    <AreaPage
      slug="trabalhista"
      iconKey="trabalhista"
      title="Direito Trabalhista"
      subtitle="Área de atuação"
      heroDescription="Defenda seus direitos nas relações de trabalho. Rescisões, horas extras, assédio e muito mais — com estratégia e resultado comprovado."
      breadcrumbLabel="Direito Trabalhista"
      intro="O Direito do Trabalho protege o trabalhador nas relações com o empregador, garantindo condições dignas de trabalho, remuneração justa e indenizações em casos de irregularidades. Muitas pessoas não sabem que têm direitos a receber — e uma análise profissional pode mudar isso."
      highlights={highlights}
      rights={rights}
      process={process}
      faqs={faqs}
      ctaLabel="Analisar meu caso trabalhista"
      ctaWhatsappMessage="Olá! Preciso de ajuda com uma questão de Direito Trabalhista. Pode me orientar?"
    />
  );
}
