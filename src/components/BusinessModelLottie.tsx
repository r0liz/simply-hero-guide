import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";
import animationData from "@/assets/lottie-flow";

const BusinessModelLottie = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-grid pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.2),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent-soft">
            How it works
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 max-w-3xl mx-auto leading-tight">
            From sender to <span className="text-gradient-sun italic">primary inbox</span> —
            in real time.
          </h2>
          <p className="font-body italic text-lg lg:text-xl text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            We sit between your sender and your recipient, scanning every signal that
            decides whether your email lands in Primary, Promotions, or Spam.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <div className="bg-primary-foreground/[0.04] border border-primary-foreground/15 rounded-sm backdrop-blur-sm p-6 lg:p-10">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{ width: "100%", height: "auto", maxWidth: 560, margin: "0 auto" }}
              />
              <div className="mt-6 grid grid-cols-3 text-center font-mono text-[10px] tracking-[0.18em] uppercase text-primary-foreground/55">
                <span>① Sender</span>
                <span className="text-accent-soft">② 47-pt Audit</span>
                <span>③ Primary Inbox</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {[
              {
                title: "We scan, you send",
                body: "Connect your domain in 10 seconds. We continuously monitor SPF, DKIM, DMARC, IP reputation and content fingerprints — no proxy, no detours.",
              },
              {
                title: "Pay only when you land",
                body: "Subscription tied to verified inbox placement. If your delivery rate drops below 97%, your next month is on us.",
              },
              {
                title: "Built for sales & marketing",
                body: "From cold outreach to product newsletters — one dashboard, every mailbox provider (Google, Microsoft, Yahoo, Apple).",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="border-l-2 border-accent pl-5 py-1 transition-all hover:border-accent-soft hover:translate-x-1"
              >
                <h3 className="font-display text-xl text-accent-soft">{b.title}</h3>
                <p className="font-body text-base text-primary-foreground/75 mt-1.5 leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelLottie;
