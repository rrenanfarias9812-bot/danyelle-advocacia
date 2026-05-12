import type { Metadata } from "next";
import { SobrePage } from "./SobrePage";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a trajetória e os valores da Dra. Danyelle Freitas, advogada especializada em Direito Trabalhista e Previdenciário.",
};

export default function Page() {
  return <SobrePage />;
}
