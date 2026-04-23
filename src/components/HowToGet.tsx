import { ArrowRight, Link2, Search, Inbox } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Link2,
    title: "Conecta tu dominio",
    body: "Pega tu dominio o conecta tu proveedor (Google Workspace, Microsoft 365, SendGrid, Mailgun). Lectura solo, sin permisos de envío.",
    time: "10 segundos",
  },
  {
    n: "02",
    icon: Search,
    title: "Recibe tu auditoría",
    body: "Corremos 47 chequeos sobre DNS, reputación, contenido y patrón de envío. Verás exactamente qué falla y por qué.",
    time: "< 60 segundos",
  },
  {
    n: "03",
    icon: Inbox,
    title: "Aplica las correcciones",
    body: "Cada hallazgo viene con una guía paso a paso (o copy-paste de registros DNS). Re-audita y verifica que estás en verde.",
    time: "5 minutos",
  },
];

const HowToGet = () => {
  return (
    <section id="como" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 pb-8 border-b-2 border-primary/90">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent-deep">
              03 · Cómo obtenerlo
            </span>
            <p className="font-display text-6xl lg:text-7xl text-muted-foreground/40 mt-3 leading-none">
              Cómo.
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              Tres pasos. Sin instalar nada. Gratis para empezar.
            </h2>
            <p className="font-body italic text-xl text-muted-foreground mt-4 max-w-2xl">
              Audita tu dominio ahora mismo y recibe un reporte priorizado en tu inbox
              en menos de un minuto.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <article className="h-full bg-card border border-border p-8 transition-all hover:border-accent hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-5xl text-accent-deep leading-none">{s.n}</span>
                  <s.icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-2xl text-primary mb-3">{s.title}</h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                  {s.body}
                </p>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  ⏱ {s.time}
                </span>
              </article>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-5 h-5 text-accent z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="relative bg-primary text-primary-foreground p-10 lg:p-16 overflow-hidden">
          <div className="absolute inset-2 border border-accent-soft/10 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl lg:text-4xl text-accent-soft leading-tight">
                Listo para llegar a la bandeja principal.
              </h3>
              <p className="font-body text-lg text-primary-foreground/75 mt-3 max-w-md">
                Tu primera auditoría es gratis. Sin tarjeta. Sin compromiso.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 lg:justify-end"
            >
              <input
                type="email"
                required
                placeholder="tu@empresa.com"
                className="flex-1 sm:max-w-xs font-mono text-sm px-4 py-3.5 rounded-sm bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-sun-gradient text-primary-foreground font-ui font-semibold text-sm tracking-wide px-6 py-3.5 rounded-sm shadow-md hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Auditar Gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGet;
