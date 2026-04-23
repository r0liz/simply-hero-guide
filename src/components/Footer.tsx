import { Sun } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/70 border-t border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-7 h-7 rounded-sm bg-sun-gradient">
            <Sun className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-ui font-bold text-xs tracking-[0.18em] uppercase text-primary-foreground/90">
            Land in Main
          </span>
        </div>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase">
          © {new Date().getFullYear()} · Email Deliverability Auditor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
