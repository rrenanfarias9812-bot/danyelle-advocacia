"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-gold-400 text-gold-400" : "text-slate-200"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-white border border-border shadow-card h-full">
      <div className="flex items-start justify-between gap-4">
        <StarRating rating={testimonial.rating} />
        <Quote className="w-8 h-8 text-gold-200 shrink-0 rotate-180" />
      </div>

      <p className="text-body-md text-slate-700 leading-relaxed flex-1 italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
            <span className="font-serif font-bold text-white text-body-sm">
              {testimonial.author[0]}
            </span>
          </div>
          <div>
            <p className="font-semibold text-body-sm text-navy-900">{testimonial.author}</p>
            <p className="text-body-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        <Badge variant="gold" size="sm">{testimonial.area}</Badge>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setActiveIndex((i) => (i + 1) % testimonials.length);
  };

  // Visible on mobile: only active; on desktop: show all in grid
  return (
    <section className="section-py bg-slate-50 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
      />

      <div className="container-site">
        <div className="flex flex-col gap-14">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <SectionHeader
              label="Depoimentos"
              title={
                <>
                  O que nossos{" "}
                  <span className="text-gradient-gold">clientes dizem</span>
                </>
              }
              description="Cada depoimento representa uma vida que foi impactada positivamente. Esses resultados são o nosso maior orgulho."
              align="center"
            />
          </motion.div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const, delay: i * 0.1 }}
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden flex flex-col gap-5">
            <div className="relative overflow-hidden min-h-[280px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                >
                  <TestimonialCard testimonial={testimonials[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`rounded-full transition-all duration-250 ${
                      i === activeIndex
                        ? "w-6 h-2 bg-navy-900"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Depoimento anterior"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-500 hover:text-navy-900 hover:border-navy-300 transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Próximo depoimento"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-500 hover:text-navy-900 hover:border-navy-300 transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Trust note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-1">
              {["C", "A", "F"].map((letter) => (
                <div
                  key={letter}
                  className="w-8 h-8 rounded-full bg-navy-900 border-2 border-white flex items-center justify-center"
                >
                  <span className="text-white text-body-xs font-bold">{letter}</span>
                </div>
              ))}
            </div>
            <p className="text-body-sm text-muted-foreground">
              <span className="font-semibold text-navy-900">+500 clientes</span>{" "}
              já tiveram seus direitos defendidos
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
