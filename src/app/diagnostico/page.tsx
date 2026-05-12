import type { Metadata } from "next";
import { DiagnosticoPage } from "./DiagnosticoPage";

export const metadata: Metadata = {
  title: "Diagnóstico Jurídico",
  description:
    "Descubra seus direitos em 1 minuto. Diagnóstico jurídico gratuito para entender se seu caso é Trabalhista, Previdenciário ou ambos.",
};

export default function Page() {
  return <DiagnosticoPage />;
}
