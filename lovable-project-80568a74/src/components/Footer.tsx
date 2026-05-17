import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Servicios Especializados en Ingeniería Civil S. de R.L. de C.V.
            Construcción, supervisión y consultoría con excelencia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand" />
              <span>Siguatepeque, Comayagua, Honduras</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-brand" />
              <a href="tel:+50433928987" className="hover:text-white">
                +504 3392-8987
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brand" />
              <a href="mailto:seic@seic-hn.com" className="hover:text-white">
                seic@seic-hn.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Enlaces rápidos
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li><Link to="/servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link to="/por-que-elegirnos" className="hover:text-white">Por qué elegirnos</Link></li>
            <li><Link to="/resenas" className="hover:text-white">Reseñas</Link></li>
            <li><Link to="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 md:flex-row">
          <p>© 2026 Servicios Especializados en Ingeniería Civil S. de R.L. de C.V. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
