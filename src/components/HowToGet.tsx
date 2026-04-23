import { ArrowRight, Link2, Search, Inbox } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Link2,
    title: "Connect your domain",
    body: "Paste your domain or connect your provider (Google Workspace, Microsoft 365, SendGrid, Mailgun). Read-only — no sending permissions.",
    time: "10 seconds",
  },
  {
    n: "02",
    icon: Search,
    title: "Get your audit",
    body: "We run 47 checks across DNS, reputation, content and sending patterns. You'll see exactly what's broken and why.",
    time: "< 60 seconds",
  },
  {
    n: "03",
    icon: Inbox,
    title: "Apply the fixes",
    body: "Each finding ships with a step-by-step guide (or copy-paste DNS records). Re-audit and verify you're in the green.",
    time: "5 minutes",
  },
];

const HowToGet = () => {
  return (
    <section id="how" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 pb-8 border-b-2 border-primary/90">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent-deep">
              03 · How to get it
            </span>
            <p className="font-display text-6xl lg:text-7xl text-muted-foreground/40 mt-3 leading-none">
              How.
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              Three steps. Nothing to install. Free to start.
            </h2>
            <p className="font-body italic text-xl text-muted-foreground mt-4 max-w-2xl">
              Audit your domain right now and receive a prioritized report in your
              inbox in under a minute.
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

        <div className="relative bg-primary text-primary-foreground p-10 lg:p-16 overflow-hidden">
          <div className="absolute inset-2 border border-accent-soft/10 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl lg:text-4xl text-accent-soft leading-tight">
                Ready to land in the primary inbox.
              </h3>
              <p className="font-body text-lg text-primary-foreground/75 mt-3 max-w-md">
                Your first audit is free. No card. No commitment.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 lg:justify-end"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 sm:max-w-xs font-mono text-sm px-4 py-3.5 rounded-sm bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-sun-gradient text-primary-foreground font-ui font-semibold text-sm tracking-wide px-6 py-3.5 rounded-sm shadow-md hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Start Free Audit
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
