import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-9 h-9 rounded-sm bg-sun-gradient shadow-sm group-hover:shadow-glow transition-[box-shadow] duration-300">
            <Sun className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-ui font-bold text-sm tracking-[0.18em] text-primary-foreground/95 uppercase">
            Land in Main
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60">
          <a href="#que-es" className="hover:text-primary-foreground transition-colors">¿Qué es?</a>
          <a href="#por-que" className="hover:text-primary-foreground transition-colors">¿Por qué?</a>
          <a href="#como" className="hover:text-primary-foreground transition-colors">¿Cómo?</a>
        </nav>
        <span className="hidden sm:block font-mono text-[10px] tracking-[0.2em] uppercase text-primary-foreground/55">
          Email Deliverability Auditor
        </span>
      </div>
    </header>
  );
};

export default Navbar;
