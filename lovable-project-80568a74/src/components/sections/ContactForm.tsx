import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingrese su nombre completo").max(100),
  empresa: z.string().trim().max(100).optional().or(z.literal("")),
  telefono: z.string().trim().min(7, "Ingrese un teléfono válido").max(20),
  email: z.string().trim().email("Correo no válido").max(160),
  servicio: z.enum(["Construcción", "Consultoría", "Supervisión"], {
    message: "Seleccione un servicio",
  }),
  descripcion: z.string().trim().min(10, "Cuéntenos un poco más").max(1000),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      nombre: fd.get("nombre"),
      empresa: fd.get("empresa") ?? "",
      telefono: fd.get("telefono"),
      email: fd.get("email"),
      servicio: fd.get("servicio"),
      descripcion: fd.get("descripcion"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setLoading(true);
    const d = parsed.data;
    const msg =
      `*Nueva solicitud de cotización*%0A` +
      `Nombre: ${d.nombre}%0A` +
      (d.empresa ? `Empresa: ${d.empresa}%0A` : "") +
      `Teléfono: ${d.telefono}%0A` +
      `Email: ${d.email}%0A` +
      `Servicio: ${d.servicio}%0A` +
      `Proyecto: ${d.descripcion}`;

    setTimeout(() => {
      window.open(
        `https://wa.me/50433928987?text=${encodeURI(msg).replace(/%2520/g, "%20")}`,
        "_blank",
      );
      toast.success("¡Solicitud enviada! Lo contactaremos pronto.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 400);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre completo *" name="nombre" required maxLength={100} />
        <Field label="Empresa (opcional)" name="empresa" maxLength={100} />
        <Field label="Teléfono / WhatsApp *" name="telefono" required type="tel" maxLength={20} />
        <Field label="Correo electrónico *" name="email" required type="email" maxLength={160} />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Servicio de interés *
        </label>
        <select
          name="servicio"
          required
          defaultValue=""
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30"
        >
          <option value="" disabled>Seleccione un servicio</option>
          <option>Construcción</option>
          <option>Consultoría</option>
          <option>Supervisión</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Breve descripción del proyecto *
        </label>
        <textarea
          name="descripcion"
          required
          rows={5}
          maxLength={1000}
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30"
          placeholder="Cuéntenos sobre su proyecto, ubicación, alcance estimado..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-brand inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-semibold disabled:opacity-60"
      >
        {loading ? "Enviando..." : (
          <>
            Solicitar Cotización Sin Compromiso
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
