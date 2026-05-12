"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const WA_MSG = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar uma consultoria jurídica."
);

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after 3s or on scroll
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const onScroll = () => {
      if (window.scrollY > 300) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 260, delay: 0.1 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip card */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }}
                className="w-72 rounded-2xl bg-white border border-border shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-[#25D366] p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="font-serif font-bold text-white text-body-md">D</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-body-sm">Dra. Danyelle Freitas</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                      <span className="text-white/80 text-body-xs">Online agora</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col gap-4">
                  <div className="bg-slate-50 rounded-xl rounded-tl-sm p-3">
                    <p className="text-body-sm text-slate-700 leading-relaxed">
                      Olá! 👋 Como posso ajudar você hoje? Consulte seus direitos trabalhistas ou previdenciários.
                    </p>
                    <span className="text-body-xs text-muted-foreground mt-1 block">Agora</span>
                  </div>

                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${WA_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-body-sm hover:bg-[#1da855] transition-colors duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Iniciar conversa
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="flex items-center gap-2 justify-center">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-body-xs text-muted-foreground">ou</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <a
                    href="/contato"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-border text-body-sm text-navy-800 hover:bg-slate-50 transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    Agendar consultoria
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB button */}
          <div className="relative">
            {/* Pulse ring */}
            {!open && (
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            )}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar chat do WhatsApp" : "Abrir chat do WhatsApp"}
              aria-expanded={open}
              className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1da855] transition-all duration-250 flex items-center justify-center hover:scale-105 active:scale-95"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
