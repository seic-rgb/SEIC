import { createFileRoute } from "@tanstack/react-router";
import { Reviews } from "@/components/sections/Reviews";
import { Projects } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/resenas")({
  head: () => ({
    meta: [
      { title: "Reseñas de Clientes | SEIC" },
      {
        name: "description",
        content:
          "Lo que dicen nuestros clientes sobre los proyectos de construcción, supervisión y consultoría de SEIC.",
      },
      { property: "og:title", content: "Reseñas — SEIC" },
      { property: "og:description", content: "Proyectos que hablan por sí solos." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Reseñas</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Lo que dicen nuestros clientes.
          </h1>
        </div>
      </section>
      <Projects />
      <Reviews />
      <ContactSection />
    </>
  );
}
