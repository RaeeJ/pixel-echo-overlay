import { useEffect, useRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "outline"; className?: string; arrow?: boolean };
export function CtaLink({ href, children, variant = "primary", className, arrow = true }: BtnProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "bg-cta text-primary-foreground hover:shadow-glow hover:brightness-110"
          : "border border-primary/60 text-foreground hover:border-primary hover:bg-accent",
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </a>
  );
}

export function IconBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-navy/80 text-primary", className)}>
      {children}
    </span>
  );
}

export function PulseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M0 12h16l4-8 6 16 6-20 6 18 4-6h22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse-line"
      />
    </svg>
  );
}
