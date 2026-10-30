import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Experience, Projects } from "@/components/PortfolioSections";

export function HomePage() {
  return <main id="main-content" className="portfolio-shell"><Hero /><Projects /><Experience /><About /><Contact /></main>;
}
