import { Hero } from "@/components/sections/Hero";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Metrics } from "@/components/sections/Metrics";
import { DiagnosticQuiz } from "@/components/sections/DiagnosticQuiz";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContentHub } from "@/components/sections/ContentHub";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <PracticeAreas />
      <Metrics />
      <DiagnosticQuiz />
      <Testimonials />
      <ContentHub />
      <CtaFinal />
    </main>
  );
}
