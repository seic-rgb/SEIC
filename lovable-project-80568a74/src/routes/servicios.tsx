import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | SEIC Ingeniería Civil" },
      {
        name: "description",
        content:
          "Construcción, supervisión y consultoría: tres líneas de servicio especializadas para proyectos de ingeniería civil.",
      },
      { property: "og:title", content: "Servicios — SEIC" },
      { property: "og:description", content: "Construcción, supervisión y consultoría de ingeniería civil." },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Servicios</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Soluciones integrales en ingeniería civil.
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Cubrimos el ciclo completo de su proyecto: desde la planificación
            estratégica hasta la entrega final.
          </p>
        </div>
      </section>
      <Services withCta={false} />
      <ContactSection />
    </>
  );
}
