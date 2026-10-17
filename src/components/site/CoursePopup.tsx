import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { courseDetails, courseRules, enrollmentEnabled } from "./course-details";

const headings = new Set(["What the Online CNA Prep Program Includes", "Additional Video Details"]);

export function CoursePopup({ id, title, price, description, actionLabel, children }: {
  id: string; title: string; price: number; description: string; actionLabel: string; children: ReactNode;
}) {
  const lines = (courseDetails[id] ?? description).split("\n").map((line) => line.trim()).filter(Boolean);
  const skills = lines.filter((line) => line.startsWith("⦁"));
  return (
    <Dialog>
      {children}
      <DialogTrigger asChild>
        <Button variant="link" className="mt-4 h-auto justify-start self-start p-0 text-sm font-semibold after:absolute after:inset-0 hover:no-underline" aria-label={`${actionLabel} about ${title}`}>
          {actionLabel}<ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-3xl flex-col gap-0 overflow-hidden rounded-lg border-primary/40 p-0 shadow-glow">
        <header className="shrink-0 border-b border-primary/20 px-6 pb-5 pt-6 pr-12 text-left">
          <p className="eyebrow mb-3">Program Details</p>
          <DialogTitle className="text-2xl leading-snug tracking-normal">{title}</DialogTitle>
          <DialogDescription className="mt-2 text-base font-semibold text-primary">${price}</DialogDescription>
        </header>
        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain px-6 py-6 text-sm leading-relaxed text-muted-foreground">
          {lines.map((line, i) => {
            if (line.startsWith("⦁")) {
              if (i > 0 && lines[i - 1]?.startsWith("⦁")) return null;
              return <ul key={i} className="grid list-disc gap-x-8 gap-y-2 pl-5 sm:grid-cols-2">{skills.map((skill) => <li key={skill}>{skill.replace(/^⦁\s*/, "")}</li>)}</ul>;
            }
            if (headings.has(line)) return <h3 key={i} className="text-lg font-bold text-foreground">{line}</h3>;
            if (id === "cna" && i === 0) return <p key={i} className="border-l-2 border-primary pl-4 font-semibold text-primary">This Prep Course is for {courseRules.cna.eligibleState} Only</p>;
            if (id === "ekg" && line.startsWith("NPS CET National testing fee")) return <p key={i} className="font-semibold text-primary">{courseRules.ekg.examBody} National testing fee is ${courseRules.ekg.externalExamFee}</p>;
            return <p key={i}>{line}</p>;
          })}
        </div>
        <footer className="flex shrink-0 items-center justify-end border-t border-primary/20 px-6 py-4">
          <Button disabled={!enrollmentEnabled} size="lg" className="rounded-full bg-cta" aria-label={`Enroll Now in ${title}`}>Enroll Now<ArrowRight /></Button>
        </footer>
      </DialogContent>
    </Dialog>
  );
}