// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Practice Area ───────────────────────────────────────────────────────────
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  highlights: string[];
}

// ─── Team Member ─────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
  oab: string;
  linkedin?: string;
  instagram?: string;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  area: string;
  avatar?: string;
}

// ─── Article / Insight ───────────────────────────────────────────────────────
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  category: ArticleCategory;
  publishedAt: string;
  readTime: number;
  author: string;
  coverImage?: string;
  tags: string[];
}

export type ArticleCategory =
  | "trabalhista"
  | "previdenciario"
  | "alertas"
  | "insights"
  | "podcast";

// ─── Metric / Stat ───────────────────────────────────────────────────────────
export interface Metric {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
}

// ─── Diagnostic Quiz ─────────────────────────────────────────────────────────
export interface DiagnosticQuestion {
  id: string;
  question: string;
  options: DiagnosticOption[];
}

export interface DiagnosticOption {
  id: string;
  label: string;
  area?: string;
  nextQuestion?: string;
}

export interface DiagnosticResult {
  area: string;
  title: string;
  description: string;
  cta: string;
}
