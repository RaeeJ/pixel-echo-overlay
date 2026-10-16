import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PulseIcon } from "./primitives";

const links = [
  { id: "home", label: "Home" },
  { id: "programs", label: "Programs" },
  { id: "about", label: "About" },
  { id: "portal", label: "Student Portal" },
  { id: "faq", label: "FAQ" },
];

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="NextGen Medical Academy home">
      <PulseIcon className="h-7 w-14 text-primary" />
      <span className="leading-none">
        <span className="block text-xl font-bold tracking-[0.12em] text-foreground">NEXTGEN</span>
        <span className="mt-1 block text-[0.6rem] font-semibold tracking-[0.32em] text-primary">MEDICAL ACADEMY</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-500",
        scrolled ? "glass border-x-0 border-t-0 border-b-primary/30" : "border-b-primary/15 bg-background/40 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 lg:px-8" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors duration-300 hover:text-primary",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-300",
                  active === l.id ? "text-primary after:scale-x-100" : "text-foreground/90 after:scale-x-0",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#programs"
          className="group hidden items-center gap-2 rounded-full border border-primary/70 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-accent hover:shadow-glow lg:inline-flex"
        >
          Enroll Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <button
          className="rounded-lg border border-primary/40 p-2 text-primary lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden transition-all duration-400 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-5 pb-5">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={cn("block rounded-lg px-3 py-3 text-base", active === l.id ? "bg-accent text-primary" : "text-foreground")}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#programs" onClick={() => setOpen(false)} className="block rounded-full bg-cta px-5 py-3 text-center font-semibold text-primary-foreground">
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
