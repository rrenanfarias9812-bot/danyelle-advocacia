import { cn } from "@/lib/utils";

interface LogoDfProps {
  size?: number;
  /** Força tema claro (fundo escuro → letras douradas) — padrão */
  theme?: "dark" | "light";
  className?: string;
}

/**
 * Monograma "DF" — Danyelle Freitas Advocacia.
 * Reproduz o logotipo da marca: fundo navy, borda dourada fina,
 * duas letras geométricas sobrepostas em ouro.
 */
export function LogoDf({ size = 40, theme = "dark", className }: LogoDfProps) {
  const bg   = theme === "dark" ? "#0A192F" : "#FFFFFF";
  const gold = "#C9A961";
  const stroke = theme === "dark" ? gold : "#0A192F";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      {/* Outer frame */}
      <rect x="1" y="1" width="62" height="62" rx="5" fill={bg} stroke={gold} strokeWidth="1.5" />

      {/* ── D letterform ── */}
      {/* Vertical stem */}
      <line x1="14" y1="15" x2="14" y2="49" stroke={stroke} strokeWidth="2.8" strokeLinecap="round" />
      {/* Top horizontal */}
      <line x1="14" y1="15" x2="22" y2="15" stroke={stroke} strokeWidth="2.8" strokeLinecap="round" />
      {/* Bottom horizontal */}
      <line x1="14" y1="49" x2="22" y2="49" stroke={stroke} strokeWidth="2.8" strokeLinecap="round" />
      {/* Arc of D */}
      <path
        d="M22 15 C40 15 40 49 22 49"
        stroke={stroke}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── F letterform (shares visual space, offset right) ── */}
      {/* Vertical stem F */}
      <line x1="34" y1="15" x2="34" y2="49" stroke={gold} strokeWidth="2.8" strokeLinecap="round" />
      {/* Top bar */}
      <line x1="34" y1="15" x2="51" y2="15" stroke={gold} strokeWidth="2.8" strokeLinecap="round" />
      {/* Middle bar */}
      <line x1="34" y1="32" x2="47" y2="32" stroke={gold} strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

/** Versão sem fundo (apenas as letras + borda) — para uso sobre fundos coloridos */
export function LogoDfMark({ size = 40, className }: { size?: number; className?: string }) {
  return <LogoDf size={size} theme="dark" className={className} />;
}
