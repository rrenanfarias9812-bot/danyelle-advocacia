"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PageHero({
  label,
  title,
  description,
  breadcrumbs,
  size = "md",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative bg-navy-section overflow-hidden",
        size === "sm" && "pt-28 pb-14",
        size === "md" && "pt-32 pb-20",
        size === "lg" && "pt-36 pb-24",
        className
      )}
    >
      {/* Decorative */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--color-gold-400) 0%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-400) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </div>

      <div className="container-site relative z-10 flex flex-col gap-6">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 text-body-xs text-slate-400 hover:text-slate-200 transition-colors duration-200"
                  aria-label="Início"
                >
                  <Home className="w-3 h-3" />
                  Início
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="text-body-xs text-slate-400 hover:text-slate-200 transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className="text-body-xs text-slate-300"
                      aria-current="page"
                    >
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Content */}
        <div className="flex flex-col gap-4 max-w-3xl">
          {label && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 text-label-lg uppercase tracking-[0.18em] text-gold-400"
            >
              <span className="block h-px w-6 bg-gold-400" />
              {label}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
            className="font-serif font-bold text-display-xl text-white leading-tight text-balance"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.4, 0, 0.2, 1] as const }}
              className="text-body-xl text-slate-300 leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
