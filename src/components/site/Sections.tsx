import { BookOpen, ClipboardList, FileQuestion, FolderOpen, Award, LayoutGrid, MonitorSmartphone, GraduationCap, LineChart, Laptop, Headset, Clock, Briefcase, PlayCircle } from "lucide-react";
import heroAsset from "@/assets/hero-clean.png.asset.json";
import desk from "@/assets/desk.jpg";
import { CtaLink, IconBadge, PulseIcon, Reveal } from "./primitives";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Hero() {
  const features = [
    { Icon: MonitorSmartphone, label: "Flexible Online Learning" },
    { Icon: GraduationCap, label: "Expert Instruction" },
    { Icon: Briefcase, label: "Career-Focused Training" },
    { Icon: Clock, label: "Learn at Your Own Pace" },
  ];
  return (
    <section id="home" className="relative overflow-hidden border-b border-primary/20">
      <div className="relative md:absolute md:inset-0">
        <img src={heroAsset.url} alt="Healthcare professional in navy scrubs with stethoscope, tablet and course books" className="h-[300px] w-full object-cover object-[72%_center] sm:h-[380px] md:h-full" width={1400} height={788} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent md:h-1/3" />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background via-background/70 to-transparent md:block" />
      </div>
      <div className="relative mx-auto -mt-20 max-w-7xl px-5 pb-14 md:mt-0 md:pb-16 md:pt-36 lg:px-8 lg:pt-44">
        <Reveal className="max-w-xl">
          <h1 className="text-[2.1rem] font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your Future in <span className="text-primary">Healthcare</span>
            <span className="mt-1 block font-lovely text-[3.2rem] font-normal normal-case leading-none tracking-normal text-primary sm:text-7xl lg:text-8xl">Starts Here</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/90 md:text-lg">
            Flexible online healthcare education designed to help you build knowledge, develop practical skills, and prepare for your next step in healthcare.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <CtaLink href="#programs">Explore Programs</CtaLink>
            <CtaLink href="#portal" variant="outline" arrow={false}>Student Portal</CtaLink>
          </div>
        </Reveal>
        <Reveal delay={150} className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {features.map(({ Icon, label }) => (
            <div key={label} className="group flex items-center gap-3">
              <IconBadge className="transition-transform duration-300 group-hover:scale-110"><Icon className="h-5 w-5" strokeWidth={1.6} /></IconBadge>
              <span className="text-sm font-medium leading-tight">{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Benefits() {
  const items = [
    { Icon: LayoutGrid, label: "Flexible Learning" },
    { Icon: GraduationCap, label: "Expert-Led Instruction" },
    { Icon: LineChart, label: "Progress Tracking" },
    { Icon: Laptop, label: "Online Access" },
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <Reveal className="glass grid items-center gap-8 rounded-3xl px-6 py-8 md:px-10 lg:grid-cols-[1.1fr_3fr]">
        <p className="font-script text-4xl leading-tight text-primary md:text-5xl">Real Skills.<br />Real Opportunities.</p>
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-primary/25">
          {items.map(({ Icon, label }) => (
            <div key={label} className="group flex flex-col items-center gap-3 px-4 text-center">
              <Icon className="h-9 w-9 text-primary transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.4} />
              <span className="text-xs font-bold uppercase tracking-[0.14em]">{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function DashboardMock() {
  const nav = [
    { Icon: BookOpen, l: "My Courses", a: true },
    { Icon: PlayCircle, l: "Lessons" },
    { Icon: ClipboardList, l: "Assignments" },
    { Icon: FileQuestion, l: "Quizzes" },
    { Icon: FolderOpen, l: "Learning Resources" },
    { Icon: Award, l: "Certificates" },
  ];
  return (
    <div aria-label="Illustrative preview of a student dashboard" role="img">
      <div className="rounded-t-2xl border-[10px] border-b-0 border-secondary bg-navy-deep p-0 shadow-glow">
        <div className="grid min-h-[260px] grid-cols-[38%_1fr] text-[0.7rem] sm:text-xs">
          <aside className="space-y-1 border-r border-primary/20 bg-navy p-3">
            <div className="mb-3 flex items-center gap-1.5"><PulseIcon className="h-4 w-8 text-primary" /><span className="font-bold tracking-wider">NEXTGEN</span></div>
            {nav.map(({ Icon, l, a }) => (
              <div key={l} className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${a ? "bg-accent text-primary" : "text-muted-foreground"}`}>
                <Icon className="h-3.5 w-3.5" /> {l}
              </div>
            ))}
          </aside>
          <div className="space-y-3 p-4">
            <p className="font-semibold">Course Progress</p>
            <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[72%] rounded-full bg-cta" /></div>
            <p className="text-right text-primary">72%</p>
            {["Patient Care Basics", "Medication Safety"].map((c, i) => (
              <div key={c} className="rounded-lg border border-primary/20 bg-card p-3">
                <p className="text-muted-foreground">Module {i + 3}</p>
                <p className="font-semibold">{c}</p>
                <span className="mt-2 inline-block rounded-full bg-cta px-2 py-0.5 text-[0.6rem] font-semibold text-primary-foreground">Continue</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-[-6%] h-4 rounded-b-xl bg-gradient-to-b from-secondary to-navy" />
      <p className="mt-3 text-center text-xs text-muted-foreground">Illustrative preview only</p>
    </div>
  );
}

export function Learning() {
  return (
    <section id="portal" className="relative overflow-hidden py-24">
      <img src={desk} alt="" loading="lazy" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/80 to-background" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal><DashboardMock /></Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Learn on your schedule</p>
          <h2 className="mt-4 text-4xl font-extrabold uppercase leading-tight md:text-5xl">Your Learning.<br /><span className="text-primary">Your Future.</span></h2>
          <p className="mt-5 max-w-md text-muted-foreground">Access your learning materials, stay organized, and work toward your educational goals with a flexible online learning experience.</p>
          <CtaLink href="#programs" className="mt-8">Explore Learning Options</CtaLink>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const qs = [
    { q: "Are the programs fully online?", a: "Our programs are designed for flexible online learning so you can study from anywhere at a pace that suits your schedule." },
    { q: "How do I choose the right program?", a: "Review the program descriptions above and pick the one that matches your goals. If you're unsure, contact admissions for guidance." },
    { q: "When will the student portal be available?", a: "The dashboard shown on this page is an illustrative preview. Portal access details will be shared with enrolled students." },
    { q: "Do these courses guarantee certification or employment?", a: "Our courses help you build knowledge and prepare. Certification requirements and job outcomes depend on your state, employer, and exam bodies." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <Reveal className="text-center">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 text-4xl font-extrabold">Questions, <span className="font-script font-normal text-primary">answered.</span></h2>
      </Reveal>
      <Reveal delay={100} className="mt-10">
        <Accordion type="single" collapsible className="glass rounded-2xl px-6">
          {qs.map((x, i) => (
            <AccordionItem key={x.q} value={`q${i}`} className="border-primary/20">
              <AccordionTrigger className="text-left text-base hover:text-primary hover:no-underline">{x.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{x.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

export function FinalCta() {
  const items = [
    { Icon: Headset, l: "Student Support" },
    { Icon: LayoutGrid, l: "Flexible Learning" },
    { Icon: Briefcase, l: "Career-Focused Education" },
  ];
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
      <Reveal className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <h2 className="relative text-3xl font-extrabold uppercase md:text-5xl">Your Next Chapter <span className="text-primary">Starts Here.</span></h2>
        <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">Take the next step toward your healthcare education. Explore available programs and find the learning path that fits your goals.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <CtaLink href="#programs">Explore Programs</CtaLink>
          <CtaLink href="#faq" variant="outline" arrow={false}>Contact Admissions</CtaLink>
        </div>
        <div className="relative mt-10 flex flex-wrap justify-center gap-8">
          {items.map(({ Icon, l }) => (
            <div key={l} className="flex items-center gap-3"><IconBadge><Icon className="h-5 w-5" strokeWidth={1.6} /></IconBadge><span className="text-sm font-medium">{l}</span></div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-primary/15 py-10 text-center">
      <p className="flex items-center justify-center gap-4 text-xs font-semibold tracking-[0.4em] text-foreground/80">
        <span className="hidden h-px w-24 bg-primary/40 sm:block" />TRAIN <span className="text-primary">/</span> CERTIFY <span className="text-primary">/</span> ADVANCE<span className="hidden h-px w-24 bg-primary/40 sm:block" />
      </p>
      <p className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} NextGen Medical Academy</p>
    </footer>
  );
}
