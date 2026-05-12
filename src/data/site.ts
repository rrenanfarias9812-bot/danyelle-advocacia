import type { NavItem, PracticeArea, TeamMember, Testimonial, Metric, Article } from "@/types";

export const siteConfig = {
  name: "Danyelle Freitas Advocacia",
  shortName: "Danyelle Freitas",
  description:
    "Escritório especializado em Direito Trabalhista e Previdenciário. Mais de 10 anos de experiência, dedicados à defesa dos seus direitos com estratégia, ética e resultados.",
  url: "https://danyellefreitasadvogada.com.br",
  instagram: "https://www.instagram.com/danyelleadvogada",
  whatsapp: "5511999999999",
  email: "contato@danyellefreitasadvogada.com.br",
  address: "Brasil",
  oab: "OAB/SP",
};

export const navigation: NavItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Áreas de Atuação",
    href: "/areas",
    children: [
      { label: "Direito Trabalhista", href: "/areas/trabalhista" },
      { label: "Direito Previdenciário", href: "/areas/previdenciario" },
    ],
  },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Contato", href: "/contato" },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "trabalhista",
    title: "Direito Trabalhista",
    description:
      "Defesa dos seus direitos nas relações de trabalho, desde rescisões até ações por assédio, horas extras, equiparação salarial e muito mais.",
    icon: "Briefcase",
    slug: "trabalhista",
    highlights: [
      "Rescisão indireta",
      "Horas extras e adicional noturno",
      "Assédio moral e sexual",
      "Equiparação salarial",
      "FGTS e verbas rescisórias",
      "Acidente de trabalho",
      "Doenças ocupacionais",
      "Negociações coletivas",
    ],
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    description:
      "Orientação completa para conquistar e manter seus benefícios junto ao INSS, com estratégia e conhecimento técnico especializado.",
    icon: "Shield",
    slug: "previdenciario",
    highlights: [
      "Aposentadoria por tempo de contribuição",
      "Aposentadoria por invalidez",
      "Benefício por incapacidade (BPC/LOAS)",
      "Auxílio-doença e pente-fino",
      "Pensão por morte",
      "Salário-maternidade",
      "Revisão de benefícios",
      "Recursos administrativos no INSS",
    ],
  },
];

export const metrics: Metric[] = [
  { value: "10", suffix: "+", label: "Anos de Experiência", description: "Atuando nas mais complexas causas trabalhistas e previdenciárias" },
  { value: "500", suffix: "+", label: "Clientes Atendidos", description: "Cada caso tratado com atenção personalizada e estratégia" },
  { value: "95", suffix: "%", label: "Taxa de Êxito", description: "Resultados comprovados nas principais instâncias judiciais" },
  { value: "2", suffix: "mil+", label: "Processos Encerrados", description: "Com resoluções favoráveis para nossos clientes" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Ana Paula S.",
    role: "Ex-funcionária CLT",
    content:
      "A Dra. Danyelle foi fundamental para garantir que eu recebesse todas as verbas rescisórias corretamente. Profissional excepcional, atenta e muito dedicada ao meu caso.",
    rating: 5,
    area: "Direito Trabalhista",
  },
  {
    id: "2",
    author: "Carlos M.",
    role: "Aposentado por Invalidez",
    content:
      "Depois de ter meu benefício negado pelo INSS, a Dra. Danyelle conseguiu reverter a situação em poucos meses. Gratidão enorme pelo trabalho dedicado.",
    rating: 5,
    area: "Direito Previdenciário",
  },
  {
    id: "3",
    author: "Fernanda L.",
    role: "Vítima de Assédio Moral",
    content:
      "Tive todo suporte emocional e jurídico necessário. A Dra. Danyelle lutou pelo meu caso com muito profissionalismo e conseguimos uma indenização justa.",
    rating: 5,
    area: "Direito Trabalhista",
  },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Demissão sem justa causa: tudo que você tem direito a receber",
    excerpt:
      "Saiba quais são as verbas rescisórias garantidas por lei e como garantir que você receba tudo corretamente.",
    content: "",
    slug: "demissao-sem-justa-causa-direitos",
    category: "trabalhista",
    publishedAt: "2025-05-01",
    readTime: 5,
    author: "Dra. Danyelle Freitas",
    tags: ["rescisão", "FGTS", "verbas rescisórias"],
  },
  {
    id: "2",
    title: "Pente-fino do INSS: quem pode ser afetado e como se defender",
    excerpt:
      "O governo intensificou as revisões de benefícios. Entenda seus direitos e como agir caso seja convocado.",
    content: "",
    slug: "pente-fino-inss-como-defender",
    category: "previdenciario",
    publishedAt: "2025-04-20",
    readTime: 6,
    author: "Dra. Danyelle Freitas",
    tags: ["INSS", "pente-fino", "benefícios"],
  },
  {
    id: "3",
    title: "Assédio moral no trabalho: como identificar e o que fazer",
    excerpt:
      "Aprenda a reconhecer condutas abusivas no ambiente de trabalho e conheça os caminhos legais disponíveis.",
    content: "",
    slug: "assedio-moral-como-identificar",
    category: "trabalhista",
    publishedAt: "2025-04-10",
    readTime: 7,
    author: "Dra. Danyelle Freitas",
    tags: ["assédio moral", "direitos do trabalhador"],
  },
];
