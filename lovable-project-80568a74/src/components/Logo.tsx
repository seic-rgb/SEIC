import logoSrc from "@/assets/seic-logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-md ${light ? "bg-white" : "bg-white shadow-sm ring-1 ring-border"}`}
      >
        <img
          src={logoSrc}
          alt="SEIC"
          className="h-9 w-9 object-contain"
          loading="eager"
        />
      </div>
      <div className="leading-tight">
        <div
          className={`font-display text-xl font-bold tracking-tight ${light ? "text-white" : "text-primary"}`}
        >
          SEIC
        </div>
        <div
          className={`text-[10px] uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}
        >
          Ingeniería de Innovación
        </div>
      </div>
    </div>
  );
}
