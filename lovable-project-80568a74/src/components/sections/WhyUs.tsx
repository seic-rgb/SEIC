import { Clock, HardHat, Search, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "Tiempos y Presupuesto",
    text: "Eficiencia y rapidez sin sacrificar la calidad estructural. Respetamos su presupuesto de principio a fin, sin costos ocultos.",
  },
  {
    icon: HardHat,
    title: "Calidad y Profesionalismo",
    text: "Atención al detalle en cada acabado. Un equipo serio, comprometido y con los más altos estándares de la industria.",
  },
  {
    icon: Search,
    title: "Control y Seguridad",
    text: "Supervisión constante y rigurosa en el sitio. Entregamos informes detallados de cada fase para que siempre tenga el control.",
  },
  {
    icon: Handshake,
    title: "Comunicación Transparente",
    text: "Un socio de confianza. Siempre dispuestos a resolver dudas, proponer soluciones y brindarle total tranquilidad.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--brand) 1px, transparent 1px), linear-gradient(90deg, var(--brand) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Por qué elegirnos
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Su Tranquilidad es Nuestra Mayor Obra.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand text-brand-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
