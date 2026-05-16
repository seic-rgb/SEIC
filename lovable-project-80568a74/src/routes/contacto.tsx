import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | SEIC — Cotice su proyecto" },
      {
        name: "description",
        content:
          "Solicite una cotización sin compromiso. Nuestros ingenieros le contactarán para una evaluación inicial.",
      },
      { property: "og:title", content: "Contacto — SEIC" },
      { property: "og:description", content: "Cotice su proyecto sin compromiso." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Contacto</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Hablemos de su próxima obra.
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Complete el formulario y un ingeniero especializado se pondrá en
            contacto con usted.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
