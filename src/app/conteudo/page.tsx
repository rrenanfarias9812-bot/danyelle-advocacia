import type { Metadata } from "next";
import { ConteudoPage } from "./ConteudoPage";

export const metadata: Metadata = {
  title: "Conteúdo Jurídico",
  description:
    "Artigos, alertas e insights sobre Direito Trabalhista e Previdenciário para que você conheça e defenda seus direitos.",
};

export default function Page() {
  return <ConteudoPage />;
}
