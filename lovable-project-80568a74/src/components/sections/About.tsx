export function About() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Sobre Nosotros
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-primary md:text-5xl">
            Solidez y Compromiso desde el Primer Día.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/80">
            En <strong className="text-primary">Servicios Especializados en
            Ingeniería Civil S. de R.L. de C.V.</strong>, somos más que
            contratistas; somos su socio estratégico. Fundada en 2024, nuestra
            firma nació con una misión clara: elevar los estándares de la
            ingeniería civil a través de una ejecución impecable, supervisión
            rigurosa y honestidad financiera.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat value="2024" label="Año de fundación" />
            <Stat value="100%" label="Transparencia financiera" />
            <Stat value="24/7" label="Comunicación con el cliente" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary md:text-4xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
