import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ImpactStrip } from "@/components/ImpactStrip";
import { Experience, Projects } from "@/components/PortfolioSections";

export function HomePage() {
  return (
    <main id="main-content" className="portfolio-shell">
      <Hero />
      <ImpactStrip />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
