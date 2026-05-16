import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import construccion from "@/assets/service-construccion.jpg";
import supervision from "@/assets/service-supervision.jpg";
import consultoria from "@/assets/service-consultoria.jpg";

const services = [
  {
    icon: "🏗️",
    title: "Construcción",
    img: construccion,
    text: "Materializamos sus proyectos con materiales de primera y mano de obra altamente calificada. Construimos espacios seguros, funcionales y con acabados de excelencia.",
  },
  {
    icon: "🔍",
    title: "Supervisión",
    img: supervision,
    text: "Ojo clínico en su obra. Ejercemos un control riguroso de seguridad, orden y calidad en cada fase del proyecto, evitando errores costosos en la estructura.",
  },
  {
    icon: "📊",
    title: "Consultoría",
    img: consultoria,
    text: "Auditorías técnicas y planificación estratégica. Nos aseguramos de que su inversión esté protegida y optimizada desde los planos hasta la entrega final.",
  },
];

export function Services({ withCta = true }: { withCta?: boolean }) {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Nuestros Servicios
          </p>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            Tres pilares, un solo compromiso.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-background/95 text-2xl shadow-md">
                  {s.icon}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl text-primary">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                  {s.text}
                </p>
                {withCta && (
                  <Link
                    to="/contacto"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:gap-2 transition-all"
                  >
                    Solicitar información <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
