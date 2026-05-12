import Link from "next/link";
import { Scale, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-navy-section min-h-screen">
      {/* Decorative */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--color-gold-400) 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6 py-20">
        <div className="w-20 h-20 rounded-2xl bg-gold-400/15 border border-gold-400/20 flex items-center justify-center">
          <Scale className="w-10 h-10 text-gold-400" />
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-serif font-bold text-8xl text-gold-400/30 leading-none select-none">
            404
          </span>
          <h1 className="font-serif font-bold text-display-lg text-white leading-tight">
            Página não encontrada
          </h1>
          <p className="text-body-lg text-slate-300 max-w-md">
            A página que você está procurando não existe ou foi movida.
            Mas seus direitos ainda estão aqui — navegue pelo site.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="gold" size="md" rounded="full" className="shine-hover">
            <Link href="/">
              <Home className="w-4 h-4" />
              Ir para o início
            </Link>
          </Button>
          <Button asChild variant="outline-gold" size="md" rounded="full">
            <Link href="/contato">
              <ArrowLeft className="w-4 h-4" />
              Falar com a advogada
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
