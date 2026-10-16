import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Stethoscope, Pill, Activity, RefreshCw, Cross, ShieldAlert, HeartPulse } from "lucide-react";
import cna from "@/assets/p-cna.jpg";
import med from "@/assets/p-medtech.jpg";
import ekg from "@/assets/p-ekg.jpg";
import ren from "@/assets/p-renewal.jpg";
import fa from "@/assets/p-firstaid.jpg";
import bbp from "@/assets/p-bbp.jpg";
import cpr from "@/assets/p-cpr.jpg";
import { CtaLink, IconBadge, Reveal } from "./primitives";

const programs = [
  { img: cna, Icon: Stethoscope, title: "CNA Prep Course", price: 119, desc: "Build foundational knowledge for nursing assistant training and prepare for your next step in healthcare." },
  { img: med, Icon: Pill, title: "Medication Technician", price: 75, desc: "Explore medication safety, administration principles, and essential healthcare responsibilities." },
  { img: ekg, Icon: Activity, title: "EKG Technician Prep Course", price: 130, desc: "Learn the fundamentals of electrocardiography and explore essential cardiac monitoring concepts." },
  { img: ren, Icon: RefreshCw, title: "2-Hour Med Tech Renewal", price: 49, desc: "Refresh your medication technician knowledge through focused continuing education designed to support your professional development." },
  { img: fa, Icon: Cross, title: "First Aid Certification", price: 60, desc: "Develop practical knowledge of first aid principles and learn how to respond to common emergencies." },
  { img: bbp, Icon: ShieldAlert, title: "Bloodborne Pathogens / HIV", price: 30, desc: "Learn about bloodborne pathogen exposure, HIV awareness, infection prevention, and essential workplace safety practices." },
  { img: cpr, Icon: HeartPulse, title: "Basic Life Support, CPR & AED Certification", price: 45, desc: "Explore lifesaving techniques, CPR fundamentals, and AED use to build confidence in responding to cardiac emergencies." },
];

function ProgramCard({ p }: { p: (typeof programs)[number] }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-[var(--shadow-soft)] transition-all duration-400 hover:-translate-y-1.5 hover:border-primary hover:shadow-glow focus-within:border-primary">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.img} alt="" loading="lazy" width={944} height={704} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-sm font-bold text-primary backdrop-blur">${p.price}</span>
      </div>
      <IconBadge className="relative z-10 -mt-6 ml-5 h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <p.Icon className="h-5 w-5" strokeWidth={1.6} />
      </IconBadge>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
        <h3 className="text-lg font-bold uppercase leading-snug tracking-wide">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <a href="#faq" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary after:absolute after:inset-0 focus-visible:outline-none">
          Learn More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="sr-only">about {p.title}</span>
        </a>
      </div>
    </article>
  );
}

export function Programs() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.85, behavior: "smooth" });

  return (
    <section id="programs" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <Reveal className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow">Our Programs</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            Get Certified.
            <span className="block font-script text-5xl font-normal text-primary md:text-6xl">Build Your Career.</span>
          </h2>
        </div>
        <div className="space-y-5">
          <p className="text-muted-foreground">Explore flexible healthcare training programs designed to help you develop knowledge and prepare for your next opportunity.</p>
          <CtaLink href="#programs-grid" variant="outline">View All Programs</CtaLink>
        </div>
      </Reveal>

      <div id="programs-grid" className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
        {programs.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 90} className="h-full">
            <ProgramCard p={p} />
          </Reveal>
        ))}
      </div>

      <div className="md:hidden" role="region" aria-roledescription="carousel" aria-label="Programs">
        <div ref={track} className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
          {programs.map((p, i) => (
            <div key={p.title} className="w-[82%] shrink-0 snap-center" aria-label={`${i + 1} of ${programs.length}`}>
              <ProgramCard p={p} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-3">
          <button onClick={() => scroll(-1)} aria-label="Previous program" className="rounded-full border border-primary/50 p-3 text-primary active:scale-95"><ChevronLeft className="h-5 w-5" /></button>
          <button onClick={() => scroll(1)} aria-label="Next program" className="rounded-full border border-primary/50 p-3 text-primary active:scale-95"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}
