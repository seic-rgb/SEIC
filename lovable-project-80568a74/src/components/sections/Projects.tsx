import tanqueUmasg1 from "@/assets/proyecto-tanque-umasg-1.jpg";
import tanqueUmasg2 from "@/assets/proyecto-tanque-umasg-2.jpg";
import cruceRio from "@/assets/proyecto-cruce-rio.jpg";
import solarisDiprova from "@/assets/proyecto-solaris-diprova.jpg";
import sotoCano from "@/assets/proyecto-soto-cano.jpg";
import inpremaSps from "@/assets/proyecto-inprema-sps.jpg";

const projects = [
  {
    img: tanqueUmasg1,
    title: "Tanque de almacenamiento UMASG",
    location: "Gracias, Lempira",
    description:
      "Tanque elevado de agua potable construido y entregado a World Vision Honduras como parte del donativo UMASG — Sistema de Agua Potable.",
  },
  {
    img: tanqueUmasg2,
    title: "Construcción de tanque de distribución",
    location: "Gracias, Lempira",
    description:
      "Construcción nueva y entrega del tanque de distribución para World Vision Honduras (UMASG / WASH), garantizando agua potable a la comunidad.",
  },
  {
    img: cruceRio,
    title: "Cruce de río — tubería HG 4\"",
    location: "Honduras",
    description:
      "Estructura de cruce aéreo de río con tubería de hierro galvanizado de 4\" sobre torres de concreto y cables de acero, para conducción segura de agua potable.",
  },
  {
    img: solarisDiprova,
    title: "Cimentación planta solar — SOLARIS",
    location: "Supermercado Diprova",
    description:
      "Cimentación y bases de concreto para la estructura de la planta de energía solar instalada por la empresa SOLARIS en el parqueo del Supermercado Diprova.",
  },
  {
    img: sotoCano,
    title: "Supervisión Installation Warehouse — Soto Cano",
    location: "Base Aérea Soto Cano, Comayagua",
    description:
      "Supervisión técnica de la construcción del Installation Warehouse para Constructora ETERNA S.A. de C.V., proyecto del U.S. Army Corps of Engineers (USACE) en la Base Aérea Soto Cano.",
  },
  {
    img: inpremaSps,
    title: "Cambio de techos — INPREMA",
    location: "San Pedro Sula, Cortés",
    description:
      "Sustitución y montaje de cubierta metálica en edificio de INPREMA, incluyendo estructura y láminas nuevas para garantizar hermeticidad y vida útil prolongada.",
  },
];

export function Projects() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Proyectos Reales
        </p>
        <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
          Obras entregadas por SEIC.
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Algunas de nuestras obras ejecutadas en sistemas de agua potable,
          infraestructura y obras civiles en Honduras.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                {p.location}
              </p>
              <h3 className="mt-2 font-display text-xl text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
