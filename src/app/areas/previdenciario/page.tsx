import type { Metadata } from "next";
import { AreaPage } from "@/components/shared/AreaPage";

export const metadata: Metadata = {
  title: "Direito Previdenciário",
  description:
    "Especialista em Direito Previdenciário. Aposentadoria, auxílio-doença, pensão por morte, revisão de benefícios INSS. Não deixe o INSS negar o que é seu.",
};

const highlights = [
  "Aposentadoria por tempo de contribuição",
  "Aposentadoria por invalidez",
  "Benefício de Prestação Continuada (BPC/LOAS)",
  "Auxílio-doença e pente-fino",
  "Pensão por morte",
  "Salário-maternidade",
  "Revisão de benefícios",
  "Recursos administrativos no INSS",
];

const rights = [
  {
    title: "Aposentadoria",
    description: "Há diversas modalidades: por tempo de contribuição, por idade, por pontos ou especial. Identificamos a mais vantajosa para o seu perfil.",
  },
  {
    title: "Auxílio por incapacidade",
    description: "Se você está incapaz de trabalhar por doença ou acidente, tem direito ao benefício — mesmo que o INSS tenha negado.",
  },
  {
    title: "BPC / LOAS",
    description: "Benefício para idosos e pessoas com deficiência de baixa renda, mesmo sem contribuição ao INSS.",
  },
  {
    title: "Pensão por morte",
    description: "Dependentes do segurado falecido têm direito à pensão. Apoiamos todo o processo, inclusive recursos.",
  },
  {
    title: "Revisão de benefícios",
    description: "Muitos benefícios são calculados incorretamente. A revisão pode aumentar significativamente o valor recebido.",
  },
  {
    title: "Salário-maternidade",
    description: "Gestantes têm direito ao benefício independentemente do vínculo empregatício — inclusive MEIs e contribuintes individuais.",
  },
];

const process = [
  {
    step: 1,
    title: "Avaliação do histórico",
    description: "Analisamos seu CNIS, contribuições e documentação para identificar o melhor benefício.",
  },
  {
    step: 2,
    title: "Planejamento",
    description: "Definimos a estratégia: pedido administrativo ao INSS ou ação judicial direta.",
  },
  {
    step: 3,
    title: "Pedido ou recurso",
    description: "Preparamos e protocolamos o pedido ou recurso com toda a documentação necessária.",
  },
  {
    step: 4,
    title: "Benefício garantido",
    description: "Acompanhamos até a concessão definitiva e orientamos sobre manutenção do benefício.",
  },
];

const faqs = [
  {
    question: "O INSS negou meu benefício. Tenho como recorrer?",
    answer:
      "Sim, e as chances de reverter a decisão judicialmente são significativas. O INSS nega muitos pedidos por ausência de documentação ou divergências cadastrais que podem ser corrigidas. Um advogado especialista identifica o motivo exato da negativa e a melhor estratégia de recurso.",
  },
  {
    question: "Posso pedir aposentadoria sem ajuda de advogado?",
    answer:
      "Você pode, mas corre riscos. Um advogado especialista identifica a modalidade mais vantajosa, verifica inconsistências no CNIS (que podem reduzir o valor) e garante que você não perca direitos por desconhecimento. O custo do serviço geralmente se paga com os ganhos obtidos.",
  },
  {
    question: "O que é o pente-fino do INSS e como me defender?",
    answer:
      "É a revisão periódica de benefícios por incapacidade ou assistenciais. Se convocado, você deve comparecer e apresentar documentação atualizada. Se o benefício for cortado indevidamente, é possível recorrer administrativamente e judicialmente. Não ignore a convocação.",
  },
  {
    question: "Tenho direito ao BPC se nunca contribuí ao INSS?",
    answer:
      "Sim. O BPC/LOAS não exige contribuição — é um benefício assistencial para idosos com 65 anos ou mais e pessoas com deficiência com renda familiar per capita de até 1/4 do salário mínimo. Existem ainda decisões que flexibilizam esse critério.",
  },
  {
    question: "A aposentadoria especial vale para que profissões?",
    answer:
      "A aposentadoria especial é devida a trabalhadores expostos a agentes nocivos (ruído, calor, produtos químicos) por 15, 20 ou 25 anos. Inclui diversas profissões, como vigilantes, trabalhadores de mineração, motoristas, servidores de saúde e outros. A comprovação exige laudos técnicos específicos.",
  },
];

export default function Page() {
  return (
    <AreaPage
      slug="previdenciario"
      iconKey="previdenciario"
      title="Direito Previdenciário"
      subtitle="Área de atuação"
      heroDescription="Não deixe o INSS negar o que é seu por direito. Aposentadoria, auxílio-doença, pensão — com orientação especializada para cada caso."
      breadcrumbLabel="Direito Previdenciário"
      intro="O Direito Previdenciário regula os benefícios concedidos pelo INSS a trabalhadores e seus dependentes. É uma área técnica e complexa — erros no processo podem significar anos de espera ou valores menores do que o devido. Com orientação especializada, você maximiza o que tem direito a receber."
      highlights={highlights}
      rights={rights}
      process={process}
      faqs={faqs}
      ctaLabel="Analisar meu caso previdenciário"
      ctaWhatsappMessage="Olá! Preciso de ajuda com uma questão de Direito Previdenciário / INSS. Pode me orientar?"
    />
  );
}
