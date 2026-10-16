import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Programs } from "@/components/site/Programs";
import { Hero, Benefits, Learning, Faq, FinalCta, Footer } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NextGen Medical Academy — Online Healthcare Training" },
      { name: "description", content: "Flexible online healthcare education: CNA prep, Med Tech, EKG, CPR, First Aid and more." },
      { property: "og:title", content: "NextGen Medical Academy — Online Healthcare Training" },
      { property: "og:description", content: "Flexible online healthcare education: CNA prep, Med Tech, EKG, CPR, First Aid and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Benefits />
        <Learning />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
