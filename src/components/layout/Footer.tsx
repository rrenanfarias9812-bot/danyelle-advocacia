import Link from "next/link";
import { ExternalLink, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { siteConfig, navigation } from "@/data/site";
import { LogoDf } from "@/components/shared/LogoDf";

const footerAreas = [
  { label: "Direito Trabalhista", href: "/areas/trabalhista" },
  { label: "Direito Previdenciário", href: "/areas/previdenciario" },
];

const footerLinks = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Áreas de Atuação", href: "/areas" },
  { label: "Diagnóstico Jurídico", href: "/diagnostico" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Contato", href: "/contato" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos de Uso", href: "/termos" },
  { label: "LGPD", href: "/lgpd" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="container-site py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <LogoDf size={42} className="group-hover:opacity-90 transition-opacity duration-250" />
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-white text-body-lg">
                  Danyelle Freitas
                </span>
                <span className="text-label-sm uppercase tracking-widest text-gold-400/80">
                  Advocacia
                </span>
              </div>
            </Link>

            <p className="text-body-sm text-slate-400 leading-relaxed">
              Escritório especializado em Direito Trabalhista e Previdenciário.
              Defendendo seus direitos com estratégia, ética e resultados.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Danyelle Freitas Advocacia"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Danyelle Freitas Advocacia"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="E-mail de Danyelle Freitas Advocacia"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-white text-body-sm uppercase tracking-widest">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-body-sm text-slate-400 hover:text-white transition-colors duration-200 group/link"
                  >
                    <ArrowRight className="w-3 h-3 text-gold-400/0 group-hover/link:text-gold-400 transition-all duration-200 -translate-x-2 group-hover/link:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-white text-body-sm uppercase tracking-widest">
              Áreas de Atuação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="flex items-center gap-1.5 text-body-sm text-slate-400 hover:text-white transition-colors duration-200 group/link"
                  >
                    <ArrowRight className="w-3 h-3 text-gold-400/0 group-hover/link:text-gold-400 transition-all duration-200 -translate-x-2 group-hover/link:translate-x-0" />
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-1">
              <p className="text-label-md uppercase tracking-widest text-slate-500">
                Registro Profissional
              </p>
              <p className="text-body-sm text-slate-400">{siteConfig.oab}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-white text-body-sm uppercase tracking-widest">
              Contato
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-body-xs text-slate-500 uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    Fale diretamente
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-body-xs text-slate-500 uppercase tracking-wider">
                    E-mail
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-body-sm text-slate-300 hover:text-white transition-colors duration-200 break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-body-xs text-slate-500 uppercase tracking-wider">
                    Atendimento
                  </span>
                  <span className="text-body-sm text-slate-400">
                    Online • Todo o Brasil
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-xs text-slate-500 text-center sm:text-left">
            © {year} Danyelle Freitas Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
