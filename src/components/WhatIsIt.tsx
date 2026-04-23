import { Mail, Server, FileSearch } from "lucide-react";

const WhatIsIt = () => {
  return (
    <section id="que-es" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 pb-8 border-b-2 border-primary/90">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent-deep">
              01 · Qué es
            </span>
            <p className="font-display text-6xl lg:text-7xl text-muted-foreground/40 mt-3 leading-none">
              Qué.
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              Un auditor técnico de entregabilidad para emails fríos y de marketing.
            </h2>
            <p className="font-body italic text-xl text-muted-foreground mt-4 max-w-2xl">
              Escaneamos 47 puntos de tu infraestructura y contenido para detectar exactamente
              por qué tus correos terminan en Spam — y cómo arreglarlo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Server,
              title: "Infraestructura DNS",
              body: "SPF, DKIM, DMARC, BIMI, MX, PTR. Validamos cada registro con los proveedores reales (Google, Microsoft, Yahoo).",
            },
            {
              icon: Mail,
              title: "Reputación de IP & dominio",
              body: "Cruzamos +30 blacklists, score de Sender Score, edad del dominio y patrón de envío para predecir el inbox placement.",
            },
            {
              icon: FileSearch,
              title: "Huella de contenido",
              body: "Análisis de HTML, ratio texto/imagen, links sospechosos, palabras gatillo y headers. Igual que lo hace un filtro anti-spam.",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="group bg-card border border-border p-8 transition-all hover:border-accent hover:shadow-md hover:-translate-y-1"
            >
              <c.icon className="w-7 h-7 text-accent-deep mb-6" strokeWidth={1.75} />
              <h3 className="font-display text-2xl text-primary mb-3">{c.title}</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsIt;
