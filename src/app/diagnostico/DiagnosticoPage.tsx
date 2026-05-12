"use client";

import { motion } from "framer-motion";
import { Clock, Shield, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { DiagnosticQuiz } from "@/components/sections/DiagnosticQuiz";

const benefits = [
  { icon: Clock, label: "Leva menos de 1 minuto" },
  { icon: Shield, label: "100% gratuito e sigiloso" },
  { icon: CheckCircle2, label: "Resultado imediato com orientação" },
];

export function DiagnosticoPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        label="Diagnóstico Jurídico"
        title={
          <>
            Seus direitos a{" "}
            <span className="text-gradient-gold">poucos cliques</span>
          </>
        }
        description="Responda algumas perguntas simples e descubra exatamente qual área do direito se aplica à sua situação — sem compromisso."
        breadcrumbs={[{ label: "Diagnóstico Jurídico" }]}
        size="sm"
      />

      {/* Benefits strip */}
      <div className="bg-white border-b border-border">
        <div className="container-site py-5">
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-body-sm text-slate-600"
              >
                <Icon className="w-4 h-4 text-gold-400 shrink-0" />
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz section — reuses the home section component */}
      <div className="flex-1">
        <DiagnosticQuiz />
      </div>
    </main>
  );
}
