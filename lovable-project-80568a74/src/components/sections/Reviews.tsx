import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Entregaron la obra justo en la fecha acordada. El proyecto se completó a tiempo, sin costos ocultos y respetaron el presupuesto inicial de principio a fin. Gran capacidad de gestión.",
    author: "Cliente de Construcción Comercial",
  },
  {
    quote:
      "La supervisión en el sitio fue constante y muy rigurosa. Su auditoría técnica evitó errores costosos en la estructura. Tienen un ojo clínico para detectar detalles y corregirlos de inmediato.",
    author: "Desarrollador Inmobiliario",
  },
  {
    quote:
      "Excelente calidad en los acabados y gran atención al detalle. Materiales de primera y mano de obra altamente calificada. Superaron nuestras expectativas en la construcción de nuestra oficina.",
    author: "Cliente Corporativo",
  },
  {
    quote:
      "La comunicación con los ingenieros fue fluida y transparente. Siempre dispuestos a resolver dudas y proponer soluciones. Nos dieron total tranquilidad. Un socio de confianza.",
    author: "Cliente Residencial",
  },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  return (
    <section className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Reseñas
        </p>
        <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
          Proyectos que Hablan por Sí Solos.
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] md:p-14">
          <Quote className="h-10 w-10 text-brand" />
          <blockquote className="mt-5 font-display text-2xl leading-snug text-primary md:text-3xl">
            “{t.quote}”
          </blockquote>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold text-foreground">— {t.author}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Siguiente"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Reseña ${k + 1}`}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-8 bg-brand" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
