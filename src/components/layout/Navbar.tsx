"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Shield,
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowRight,
  Scale,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/useScrolled";
import { siteConfig } from "@/data/site";
import { LogoDf } from "@/components/shared/LogoDf";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavArea {
  label: string;
  description: string;
  href: string;
  icon: React.ElementType;
  highlights: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const navAreas: NavArea[] = [
  {
    label: "Direito Trabalhista",
    description: "Defesa dos seus direitos nas relações de trabalho.",
    href: "/areas/trabalhista",
    icon: Briefcase,
    highlights: ["Rescisão indireta", "Horas extras", "Assédio moral", "FGTS"],
  },
  {
    label: "Direito Previdenciário",
    description: "Benefícios e aposentadoria junto ao INSS.",
    href: "/areas/previdenciario",
    icon: Shield,
    highlights: ["Aposentadoria", "Auxílio-doença", "Pensão por morte", "Revisão de benefícios"],
  },
];

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Contato", href: "/contato" },
];

// ─── Mega Menu ────────────────────────────────────────────────────────────────

function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] rounded-2xl border border-border bg-white shadow-2xl overflow-hidden"
      onMouseLeave={onClose}
      role="region"
      aria-label="Áreas de atuação"
    >
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-navy-900 via-gold-400 to-navy-700" />

      <div className="p-6 grid grid-cols-2 gap-4">
        {navAreas.map((area) => {
          const Icon = area.icon;
          return (
            <Link
              key={area.href}
              href={area.href}
              onClick={onClose}
              className="group relative flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-navy-100 hover:bg-navy-50/50 transition-all duration-250 focus-visible:outline-2 focus-visible:outline-gold-400"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center shrink-0 group-hover:bg-gold-400 transition-colors duration-250">
                  <Icon className="w-5 h-5 text-white group-hover:text-navy-900 transition-colors duration-250" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-body-md group-hover:text-gold-600 transition-colors duration-250">
                    {area.label}
                  </p>
                  <p className="text-body-xs text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>

              <ul className="flex flex-col gap-1 pl-1">
                {area.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-body-xs text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-gold-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1 text-gold-500 text-body-xs font-semibold mt-auto">
                Saiba mais
                <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA strip */}
      <div className="border-t border-border bg-slate-50/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
          <Scale className="w-4 h-4 text-gold-400" />
          <span>Não sabe qual área se aplica ao seu caso?</span>
        </div>
        <Link
          href="/diagnostico"
          onClick={onClose}
          className="flex items-center gap-1.5 text-body-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors duration-200"
        >
          Fazer diagnóstico
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[min(360px,100vw)] bg-white z-50 flex flex-col shadow-3xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-2.5">
                <LogoDf size={32} />
                <span className="font-serif font-bold text-navy-900 text-body-lg">
                  Danyelle Freitas
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-navy-900 transition-colors duration-200"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center px-4 py-3 rounded-xl text-body-md font-medium text-navy-800 hover:bg-navy-50 hover:text-navy-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Areas accordion */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="px-4 pt-5 pb-2 text-label-md text-muted-foreground uppercase tracking-widest">
                  Áreas de Atuação
                </p>
                {navAreas.map((area, i) => {
                  const Icon = area.icon;
                  return (
                    <motion.div
                      key={area.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.15 }}
                    >
                      <Link
                        href={area.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-body-md font-medium text-navy-800 hover:bg-navy-50 hover:text-navy-900 transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4 text-gold-400 shrink-0" />
                        {area.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </nav>

            {/* Footer CTAs */}
            <div className="p-4 border-t border-border flex flex-col gap-3">
              <Button asChild variant="gold" size="md" rounded="full" className="w-full">
                <Link href="/contato" onClick={onClose}>
                  <Phone className="w-4 h-4" />
                  Agendar Consultoria
                </Link>
              </Button>
              <Button asChild variant="outline" size="md" rounded="full" className="w-full">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const { scrolled, direction } = useScrolled(24);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const areasRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const closeAreas = useCallback(() => setAreasOpen(false), []);

  // Close mega menu on route change
  useEffect(() => {
    setAreasOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        animate={{
          y: scrolled && direction === "down" ? -80 : 0,
          opacity: scrolled && direction === "down" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-350",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container-site">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-350",
              scrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-gold-400 rounded-lg"
              aria-label="Danyelle Freitas Advocacia — Ir para a página inicial"
            >
              <LogoDf
                size={scrolled ? 36 : 42}
                className="transition-all duration-350"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className={cn(
                    "font-serif font-bold tracking-tight transition-colors duration-350",
                    scrolled ? "text-navy-900 text-body-lg" : "text-white text-body-xl"
                  )}
                >
                  Danyelle Freitas
                </span>
                <span
                  className={cn(
                    "text-label-sm uppercase tracking-widest transition-colors duration-350",
                    scrolled ? "text-gold-500" : "text-gold-300"
                  )}
                >
                  Advocacia
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-body-sm font-medium transition-all duration-250",
                    "focus-visible:outline-2 focus-visible:outline-gold-400",
                    isActive(link.href)
                      ? scrolled
                        ? "text-navy-900 bg-navy-50"
                        : "text-white bg-white/10"
                      : scrolled
                      ? "text-slate-600 hover:text-navy-900 hover:bg-navy-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400"
                    />
                  )}
                </Link>
              ))}

              {/* Áreas dropdown trigger */}
              <div ref={areasRef} className="relative">
                <button
                  onMouseEnter={() => setAreasOpen(true)}
                  onClick={() => setAreasOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={areasOpen}
                  aria-controls="mega-menu-areas"
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg text-body-sm font-medium transition-all duration-250",
                    "focus-visible:outline-2 focus-visible:outline-gold-400",
                    areasOpen || isActive("/areas")
                      ? scrolled
                        ? "text-navy-900 bg-navy-50"
                        : "text-white bg-white/10"
                      : scrolled
                      ? "text-slate-600 hover:text-navy-900 hover:bg-navy-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  Áreas de Atuação
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-250",
                      areasOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {areasOpen && (
                    <div id="mega-menu-areas">
                      <MegaMenu onClose={closeAreas} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-250",
                  scrolled
                    ? "text-slate-500 hover:text-green-600 hover:bg-green-50"
                    : "text-white/70 hover:text-green-400 hover:bg-white/10"
                )}
              >
                <MessageCircle className="w-4.5 h-4.5" />
              </a>

              <Button
                asChild
                variant={scrolled ? "gold" : "outline-gold"}
                size="sm"
                rounded="full"
                className="shine-hover"
              >
                <Link href="/contato">
                  <Phone className="w-3.5 h-3.5" />
                  Agendar Consultoria
                </Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-250",
                scrolled
                  ? "text-navy-900 hover:bg-navy-50"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
