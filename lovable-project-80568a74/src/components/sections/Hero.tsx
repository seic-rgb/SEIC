import { Link } from "@tanstack/react-router";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Equipo de ingenieros civiles SEIC en obra"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container-page py-24 md:py-36">
        <div className="max-w-3xl text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Constructora · Consultora · Supervisora
          </p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Construimos y Supervisamos con{" "}
            <span className="text-brand">Precisión.</span>{" "}
            Entregamos con Excelencia.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            Desde 2024, en SEIC transformamos su visión en realidad. Calidad
            estructural, transparencia absoluta en el presupuesto y entregas
            puntuales para su total tranquilidad.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="btn-brand inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold"
            >
              Hablemos de su Obra <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver nuestros servicios
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <span>Proyectos entregados a tiempo y dentro del presupuesto</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" />
              Calidad estructural certificada
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand" />
              Entregas puntuales
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
