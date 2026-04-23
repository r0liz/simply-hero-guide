import { Mail, Server, FileSearch } from "lucide-react";

const WhatIsIt = () => {
  return (
    <section id="what" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 pb-8 border-b-2 border-primary/90">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent-deep">
              01 · What it is
            </span>
            <p className="font-display text-6xl lg:text-7xl text-muted-foreground/40 mt-3 leading-none">
              What.
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              A technical deliverability auditor for cold and marketing emails.
            </h2>
            <p className="font-body italic text-xl text-muted-foreground mt-4 max-w-2xl">
              We scan 47 signals across your infrastructure and content to pinpoint
              exactly why your emails end up in Spam — and how to fix it.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Server,
              title: "DNS infrastructure",
              body: "SPF, DKIM, DMARC, BIMI, MX, PTR. We validate every record against the real providers (Google, Microsoft, Yahoo).",
            },
            {
              icon: Mail,
              title: "IP & domain reputation",
              body: "We cross-check 30+ blacklists, Sender Score, domain age and sending patterns to predict inbox placement.",
            },
            {
              icon: FileSearch,
              title: "Content fingerprint",
              body: "HTML analysis, text-to-image ratio, suspicious links, trigger words and headers — exactly like a spam filter does.",
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
