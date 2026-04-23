const stats = [
  { v: "21%", l: "de los emails B2B legítimos terminan en Spam", color: "warning" },
  { v: "+40%", l: "de open rate al pasar de Promociones a Principal", color: "success" },
  { v: "$0.42", l: "ingreso promedio por email entregado correctamente", color: "accent" },
  { v: "99.9%", l: "objetivo de tasa de entrega tras la auditoría", color: "primary" },
];

const WhyMatters = () => {
  return (
    <section id="por-que" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 pb-8 border-b-2 border-primary/90">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent-deep">
              02 · Por qué importa
            </span>
            <p className="font-display text-6xl lg:text-7xl text-muted-foreground/40 mt-3 leading-none">
              Por qué.
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              Un email en Spam es un cliente que nunca existió.
            </h2>
            <p className="font-body italic text-xl text-muted-foreground mt-4 max-w-2xl">
              No importa cuán bueno sea tu copy si tu correo no llega. La entregabilidad
              es el multiplicador silencioso de cada campaña.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.l}
              className="relative bg-card border border-border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background:
                    s.color === "success"
                      ? "hsl(var(--success))"
                      : s.color === "warning"
                      ? "hsl(var(--warning))"
                      : s.color === "accent"
                      ? "hsl(var(--accent))"
                      : "hsl(var(--primary))",
                }}
              />
              <p className="font-display text-4xl lg:text-5xl text-primary leading-none">{s.v}</p>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-4 leading-relaxed">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-card border-l-[3px] border-l-destructive border border-border p-8">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-destructive font-bold">
              Sin Land in Main
            </span>
            <p className="font-body text-lg text-muted-foreground mt-3 leading-relaxed">
              Envías 10.000 emails. 2.100 caen en Spam. Pierdes leads, dañas tu reputación
              de IP y los próximos envíos rinden aún peor. Espiral descendente.
            </p>
          </div>
          <div className="bg-card border-l-[3px] border-l-[hsl(var(--success))] border border-border p-8">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[hsl(var(--success))] font-bold">
              Con Land in Main
            </span>
            <p className="font-body text-lg text-muted-foreground mt-3 leading-relaxed">
              Llegas al 99.9% de inboxes. Tu reputación crece con cada envío, los filtros
              te marcan como confiable y cada campaña rinde más que la anterior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
