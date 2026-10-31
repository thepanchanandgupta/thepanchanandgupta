import { useEffect } from "react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ImpactStrip } from "@/components/ImpactStrip";
import { Experience, Projects } from "@/components/PortfolioSections";

export function HomePage() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".portfolio-shell > section"));
    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("scroll-stage", "is-entered"));
      return;
    }
    sections.forEach((section) => section.classList.add("scroll-stage"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          section.classList.add("is-entered", "is-current");
          section.classList.remove("is-past");
        } else {
          section.classList.remove("is-current");
          if (entry.boundingClientRect.top < 0) section.classList.add("is-past");
          else section.classList.remove("is-past");
        }
      });
    }, { threshold: [0, 0.18, 0.42], rootMargin: "-8% 0px -12% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
