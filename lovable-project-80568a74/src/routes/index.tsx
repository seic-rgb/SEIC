import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Projects } from "@/components/sections/Projects";
import { Reviews } from "@/components/sections/Reviews";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEIC | Construcción, Supervisión y Consultoría en Honduras" },
      {
        name: "description",
        content:
          "SEIC: construcción, supervisión y consultoría de ingeniería civil en Honduras. Calidad estructural, presupuestos transparentes y entregas puntuales.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Projects />
      <Reviews />
      <ContactSection />
    </>
  );
}
