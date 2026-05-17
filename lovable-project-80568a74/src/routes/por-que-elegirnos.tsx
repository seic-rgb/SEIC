import { createFileRoute } from "@tanstack/react-router";
import { WhyUs } from "@/components/sections/WhyUs";
import { About } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/por-que-elegirnos")({
  head: () => ({
    meta: [
      { title: "Por qué elegirnos | SEIC" },
      {
        name: "description",
        content:
          "Tiempos cumplidos, presupuestos respetados, calidad rigurosa y comunicación transparente. Conozca por qué SEIC es su socio estratégico.",
      },
      { property: "og:title", content: "Por qué elegirnos — SEIC" },
      { property: "og:description", content: "Su tranquilidad es nuestra mayor obra." },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <>
      <WhyUs />
      <About />
      <ContactSection />
    </>
  );
}
