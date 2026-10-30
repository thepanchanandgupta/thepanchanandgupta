import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/types";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function ProjectDetail({ project, previous, next }: { project: Project; previous?: Project | undefined; next?: Project | undefined }) {
  if (project.slug === "finvista") {
    return <FinvistaDetail project={project} previous={previous} next={next} />;
  }

  const safeHref = (v: string) => v.startsWith("[") || !v ? "#" : v;
  return <main id="main-content" className="detail-page"><header className={`case-hero ${project.featured ? "featured" : ""}`}><div className="container"><Link to="/" hash="projects" className="back-link"><ArrowLeft/> All projects</Link><div className="case-heading"><div><div className="project-meta"><span>{project.category}</span>{project.featured && <span>Featured case study</span>}</div><h1>{project.title}</h1><p>{project.description}</p></div><ImagePlaceholder src={project.image} alt={`${project.title} cover`} label="[ADD PROJECT IMAGE]" monogram="CS"/></div></div></header><article className="container case-body"><aside><p>Case study</p>{["Context", "Problem", "Approach", "Analysis", "Key Insights", "Business Impact", "Tools & Links"].map((x, i)=><a href={`#case-${i}`} key={x}>{String(i+1).padStart(2,"0")} {x}</a>)}</aside><div className="case-content"><CaseSection id="case-0" number="01" label="Context" text={project.context}/><CaseSection id="case-1" number="02" label="Problem" text={project.problem}/><CaseSection id="case-2" number="03" label="Approach" text={project.approach}/><CaseSection id="case-3" number="04" label="Analysis / Methodology" text={project.analysis}/><section id="case-4"><span>05 / Key insights</span><h2>What the analysis revealed</h2><ol>{project.insights.map((x,i)=><li key={i}><strong>{String(i+1).padStart(2,"0")}</strong><p>{x}</p></li>)}</ol></section><CaseSection id="case-5" number="06" label="Business impact" title="Why it mattered" text={project.impact}/><section id="case-6"><span>07 / Tools & links</span><h2>Working toolkit</h2><div className="tag-row">{project.tools.map((x, i)=><span key={`${x}-${i}`}>{x}</span>)}</div><div className="case-links"><a href={safeHref(project.github)}><Github/> GitHub</a><a href={safeHref(project.liveDemo)}><ExternalLink/> Live demo</a></div></section></div></article><nav className="container detail-pagination" aria-label="Project navigation">{previous ? <Link to="/projects/$slug" params={{slug:previous.slug}}><span><ArrowLeft/> Previous project</span><strong>{previous.title}</strong></Link>:<span/>}{next && <Link to="/projects/$slug" params={{slug:next.slug}}><span>Next project <ArrowRight/></span><strong>{next.title}</strong></Link>}</nav></main>;
}

function FinvistaDetail({ project, previous, next }: { project: Project; previous?: Project | undefined; next?: Project | undefined }) {
  return (
    <main id="main-content" className="detail-page finvista-detail">
      <header className="finvista-case-hero">
        <div className="container">
          <Link to="/" hash="projects" className="back-link"><ArrowLeft /> All projects</Link>
          <div className="project-meta"><span>FinTech · Personal project</span><span>Academic prototype</span></div>
          <h1>FINVISTA</h1>
          <p className="finvista-subtitle">Wealth & Investment Intelligence</p>
          <p className="finvista-lede">An AI-assisted finance platform bringing company diagnostics, valuation, investor risk profiling and portfolio analytics into one decision-support workspace.</p>
          <div className="finvista-actions">
            <a className="finvista-primary-link" href="https://finvista-demo.onrender.com/" target="_blank" rel="noreferrer"><ExternalLink /> Open live demo <ArrowUpRight /></a>
            <a className="finvista-secondary-link" href={project.github} target="_blank" rel="noreferrer"><Github /> Source code <ArrowUpRight /></a>
          </div>
        </div>
      </header>

      <section className="container finvista-case-content">
        <div className="finvista-capabilities">
          <div className="finvista-section-label">WHAT IT BRINGS TOGETHER</div>
          <div className="finvista-module-grid">
            <article><h2>Financial diagnostics</h2><p>Financial statement analysis and business-health indicators, including Altman Z-score and Beneish M-score frameworks.</p></article>
            <article><h2>Valuation</h2><p>DCF / FCFF modelling, valuation bridges, relative multiples and sensitivity analysis.</p></article>
            <article><h2>Risk profiling</h2><p>Investor risk assessment, goal-based planning and strategic asset-allocation views.</p></article>
            <article><h2>Portfolio analytics</h2><p>Portfolio construction, allocation, expected return and risk measures in one view.</p></article>
          </div>
        </div>

        <div className="finvista-build-row">
          <div>
            <div className="finvista-section-label">BUILT WITH</div>
            <div className="finvista-stack">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
          <p className="finvista-disclaimer">An academic decision-support prototype — not investment advice.</p>
        </div>
      </section>

      <nav className="container detail-pagination" aria-label="Project navigation">
        {previous ? <Link to="/projects/$slug" params={{slug:previous.slug}}><span><ArrowLeft /> Previous project</span><strong>{previous.title}</strong></Link> : <span />}
        {next && <Link to="/projects/$slug" params={{slug:next.slug}}><span>Next project <ArrowRight /></span><strong>{next.title}</strong></Link>}
      </nav>
    </main>
  );
}

function CaseSection({ id, number, label, text, title }: {id:string;number:string;label:string;text:string;title?:string}) {
  return <section id={id}><span>{number} / {label}</span><h2>{title || label}</h2><p>{text}</p></section>;
}
