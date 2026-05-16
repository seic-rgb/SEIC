import { ContactForm } from "./ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import ubicacionMap from "@/assets/seic-ubicacion.png";

export function ContactSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Contacto
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-primary md:text-5xl">
            ¿Listo para iniciar su próximo proyecto con total seguridad?
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Déjenos sus datos y uno de nuestros ingenieros especializados se
            pondrá en contacto con usted para una evaluación inicial.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <ContactLine icon={Phone} label="Teléfono / WhatsApp" value="+504 3392-8987" href="tel:+50433928987" />
            <ContactLine icon={Mail} label="Correo" value="seic@seic-hn.com" href="mailto:seic@seic-hn.com" />
            <ContactLine icon={MapPin} label="Oficinas" value="Siguatepeque, Comayagua, Honduras" />
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
              <div>
                <div className="text-xs uppercase tracking-wider opacity-70">Ubicación</div>
                <div className="text-sm font-semibold">SEIC S. de R.L. de C.V. — Gabriela Núñez</div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=SEIC+S+DE+RL+DE+CV+Siguatepeque"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brand hover:underline"
              >
                Abrir en Maps →
              </a>
            </div>
            <img
              src={ubicacionMap}
              alt="Mapa de ubicación de las oficinas de SEIC en Siguatepeque, Comayagua, Honduras"
              className="block w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand/15 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="block hover:text-brand">{content}</a> : content}</li>;
}
