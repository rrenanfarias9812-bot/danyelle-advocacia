import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";
import { LawFirmJsonLd } from "@/components/shared/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://danyellefreitasadvogada.com.br"),
  title: {
    default: "Danyelle Freitas Advocacia | Direito Trabalhista e Previdenciário",
    template: "%s | Danyelle Freitas Advocacia",
  },
  description:
    "Escritório especializado em Direito Trabalhista e Previdenciário. Defenda seus direitos com estratégia, ética e resultados comprovados. Agende sua consultoria.",
  keywords: [
    "advogada trabalhista",
    "advogada previdenciária",
    "direito trabalhista",
    "direito previdenciário",
    "INSS",
    "aposentadoria",
    "rescisão trabalhista",
    "advocacia",
    "consultoria jurídica",
    "Danyelle Freitas",
  ],
  authors: [{ name: "Danyelle Freitas Advocacia" }],
  creator: "Danyelle Freitas Advocacia",
  publisher: "Danyelle Freitas Advocacia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://danyellefreitasadvogada.com.br",
    siteName: "Danyelle Freitas Advocacia",
    title: "Danyelle Freitas Advocacia | Direito Trabalhista e Previdenciário",
    description:
      "Escritório especializado em Direito Trabalhista e Previdenciário. Defenda seus direitos com estratégia, ética e resultados comprovados.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Danyelle Freitas Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danyelle Freitas Advocacia | Direito Trabalhista e Previdenciário",
    description:
      "Escritório especializado em Direito Trabalhista e Previdenciário. Defenda seus direitos.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://danyellefreitasadvogada.com.br",
  },
  category: "legal services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <head>
        <LawFirmJsonLd />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
