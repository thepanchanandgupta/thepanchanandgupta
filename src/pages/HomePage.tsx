import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ImpactStrip } from "@/components/ImpactStrip";
import { Achievements, BeyondWork, Education, Experience, Projects, Skills, Writing } from "@/components/PortfolioSections";
export function HomePage() { return <main id="main-content"><Hero/><ImpactStrip/><About/><Experience/><Projects/><Education/><Skills/><Achievements/><BeyondWork/><Writing/><Contact/></main>; }
