import type { Metadata } from "next";
import { ContatoPage } from "./ContatoPage";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Agende sua consultoria jurídica em Direito Trabalhista ou Previdenciário. Atendimento online para todo o Brasil.",
};

export default function Page() {
  return <ContatoPage />;
}
