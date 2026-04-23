import { ArrowRight, Link2, Search, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-[0.08] bg-grid pointer-events-none" />
      <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent-soft)/0.45),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-soft/40 to-transparent animate-pulse-soft pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-accent-soft/90 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            47-point audit · Results in &lt; 60s
          </span>

          {/* HEADLINE — What is it? */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            We guarantee your emails{" "}
            <span className="text-gradient-sun italic">land in main</span>,
            not in Spam.
          </h1>

          {/* SUB — Why it matters */}
          <p
            className="font-body text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            A real-time technical audit of your DNS records, IP reputation and content
            fingerprints. <span className="text-primary-foreground font-medium">99.9% delivery rate</span>,
            +40% open rates.
          </p>

          {/* CTA — How to get it */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-xl animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            <label htmlFor="hero-email" className="sr-only">Your work email</label>
            <input
              id="hero-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 font-mono text-sm px-4 py-3.5 rounded-sm bg-primary-foreground/[0.06] border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 backdrop-blur-sm focus:outline-none focus:border-accent focus:bg-primary-foreground/10 transition"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 bg-sun-gradient text-primary-foreground font-ui font-semibold text-sm tracking-wide px-6 py-3.5 rounded-sm shadow-md hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Start Free Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary-foreground/45 animate-fade-up"
            style={{ animationDelay: "340ms" }}
          >
            No credit card required · Results in under 60 seconds
          </p>

          <div
            className="pt-6 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            {[
              { n: "1", icon: Link2, label: "Connect" },
              { n: "2", icon: Search, label: "Analyze" },
              { n: "3", icon: CheckCircle2, label: "Inbox" },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-primary-foreground/70">
                  <span className="text-accent-soft font-bold">{s.n}.</span>
                  <s.icon className="w-3.5 h-3.5" />
                  <span className="tracking-wider uppercase">{s.label}</span>
                </div>
                {i < 2 && <span className="hidden sm:block w-10 h-px bg-primary-foreground/20" />}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[420px] lg:h-[520px] hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 rounded-sm bg-primary-foreground/[0.06] border border-primary-foreground/15 backdrop-blur-md p-5 shadow-glow animate-float">
            <div className="flex items-center justify-between pb-3 border-b border-primary-foreground/10">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-soft">
                Inbox · Primary
              </span>
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--success))] animate-pulse-soft shadow-[0_0_8px_hsl(var(--success))]" />
            </div>
            <p className="font-display text-lg mt-3 leading-tight">
              ✓ Delivered to Primary
            </p>
            <p className="font-mono text-[10px] text-primary-foreground/50 mt-2">
              SPF · DKIM · DMARC — all green
            </p>
          </div>

          <div className="absolute top-6 right-2 flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary-foreground/[0.08] border border-primary-foreground/15 backdrop-blur-md animate-float" style={{ animationDelay: "0.5s" }}>
            <TrendingUp className="w-3.5 h-3.5 text-[hsl(var(--success))]" />
            <span className="font-ui text-xs font-semibold">+40% Open Rate</span>
          </div>

          <div className="absolute bottom-16 left-0 flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary-foreground/[0.08] border border-primary-foreground/15 backdrop-blur-md animate-float" style={{ animationDelay: "1s" }}>
            <ShieldCheck className="w-3.5 h-3.5 text-accent-soft" />
            <span className="font-ui text-xs font-semibold">IP Reputation Protected</span>
          </div>

          <div className="absolute bottom-2 right-8 flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary-foreground/[0.08] border border-primary-foreground/15 backdrop-blur-md animate-float" style={{ animationDelay: "1.5s" }}>
            <Zap className="w-3.5 h-3.5 text-[hsl(var(--success))]" />
            <span className="font-ui text-xs font-semibold">Zero Spam</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-primary-foreground/10 bg-[hsl(var(--hero-from)/0.6)] backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3 flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] tracking-[0.18em] uppercase text-primary-foreground/55">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--success))] animate-pulse-soft" /> SPF · OK</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--success))] animate-pulse-soft" /> DKIM · OK</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--warning))] animate-pulse-soft" /> DMARC · Monitor</span>
          <span className="flex items-center gap-2"><span className="text-accent-soft font-bold">99.9%</span> Delivery Rate</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
