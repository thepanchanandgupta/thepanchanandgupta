import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ImpactStrip } from "@/components/ImpactStrip";
import { Experience, Projects } from "@/components/PortfolioSections";

/**
 * Each section is a "plate" in a stack (see src/styles/motion.css). Section
 * transitions are driven entirely by CSS scroll-driven animation, so nothing
 * here needs to observe scrolling.
 */
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
