import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/types";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function ProjectDetail({ project, previous, next }: { project: Project; previous?: Project | undefined; next?: Project | undefined }) {
  if (project.slug === "finvista") {
    return <FinvistaDetail project={project} previous={previous} next={next} />;
  }
  if (project.slug === "procurement-supply-chain-intelligence") {
    return <ProcurementDetail project={project} previous={previous} next={next} />;
  }
  if (project.slug === "portfolio-risk-comparison") {
    return <PortfolioRiskDetail project={project} previous={previous} next={next} />;
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

function ProcurementDetail({ project, previous, next }: { project: Project; previous?: Project | undefined; next?: Project | undefined }) {
  return (
    <main id="main-content" className="detail-page finvista-detail procurement-detail">
      <header className="finvista-case-hero">
        <div className="container">
          <Link to="/" hash="projects" className="back-link"><ArrowLeft /> All projects</Link>
          <div className="project-meta"><span>Operations · Analytics & Automation</span><span>Workflow prototype</span></div>
          <h1>Procurement & Supply Chain</h1>
          <p className="finvista-subtitle">Performance Intelligence</p>
          <p className="finvista-lede">An AI-assisted workflow designed to surface procurement, inventory and supplier-performance opportunities, then translate validated findings into management recommendations and financial implications.</p>
          <p className="procurement-demo-note"><strong>No live demo available.</strong> This project was built as an n8n workflow rather than a standalone web application.</p>
        </div>
      </header>

      <section className="container finvista-case-content">
        <div className="finvista-capabilities">
          <div className="finvista-section-label">HOW THE WORKFLOW WORKS</div>
          <div className="finvista-module-grid">
            <article><h2>Operational signals</h2><p>Examines procurement, inventory and supplier-performance indicators to surface inefficiencies and improvement opportunities.</p></article>
            <article><h2>Analytical validation</h2><p>Uses structured checks to establish the underlying findings before any AI-generated interpretation is produced.</p></article>
            <article><h2>AI interpretation</h2><p>Claude interprets validated findings and turns them into concise, context-aware management recommendations.</p></article>
            <article><h2>Automated alerts</h2><p>n8n orchestrates the workflow and delivers actionable summaries through Telegram for timely review.</p></article>
          </div>
        </div>

        <section className="procurement-evidence" aria-labelledby="procurement-evidence-title">
          <div className="procurement-evidence-heading">
            <div>
              <div className="finvista-section-label">PROOF OF WORK</div>
              <h2 id="procurement-evidence-title">From workflow to delivered alerts</h2>
            </div>
            <p>Architecture, analytical outputs and real delivery touchpoints from the workflow.</p>
          </div>

          <figure className="procurement-architecture procurement-architecture-zoom">
            <a className="procurement-image-zoom" href="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/docs/architecture.png" target="_blank" rel="noreferrer" aria-label="Open full-size n8n workflow architecture image in a new tab">
              <img src="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/docs/architecture.png" alt="n8n workflow architecture showing connected automation touchpoints" loading="lazy" />
            </a>
            <figcaption><span>Workflow architecture · n8n orchestration and connected services</span><span className="procurement-zoom-hint">Hover to enlarge · Click to open full size <span aria-hidden="true">↗</span></span></figcaption>
          </figure>

          <div className="procurement-evidence-grid">
            <figure className="procurement-evidence-card procurement-evidence-card-wide">
              <a className="procurement-image-zoom" href="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/action-created.png" target="_blank" rel="noreferrer" aria-label="Open full-size workflow execution screenshot in a new tab"><img src="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/action-created.png" alt="Screenshot showing an action generated by the procurement workflow" loading="lazy" /></a>
              <figcaption><strong>Workflow execution</strong><span>Action created from an identified opportunity · Hover to enlarge / click for full size ↗</span></figcaption>
            </figure>
            <figure className="procurement-evidence-card">
              <a className="procurement-image-zoom" href="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/flowiq-email-alerts.png" target="_blank" rel="noreferrer" aria-label="Open full-size email alerts screenshot in a new tab"><img src="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/flowiq-email-alerts.png" alt="Email alerts generated by the workflow" loading="lazy" /></a>
              <figcaption><strong>Email delivery</strong><span>Automated email notifications · Hover to enlarge / click for full size ↗</span></figcaption>
            </figure>
            <figure className="procurement-evidence-card">
              <a className="procurement-image-zoom" href="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/management-summary.png" target="_blank" rel="noreferrer" aria-label="Open full-size management summary screenshot in a new tab"><img src="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/management-summary.png" alt="Management summary produced by the workflow" loading="lazy" /></a>
              <figcaption><strong>Management summary</strong><span>Condensed findings for review · Hover to enlarge / click for full size ↗</span></figcaption>
            </figure>
            <figure className="procurement-evidence-card">
              <a className="procurement-image-zoom" href="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/opportunities.png" target="_blank" rel="noreferrer" aria-label="Open full-size opportunity view screenshot in a new tab"><img src="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/opportunities.png" alt="Procurement and supply chain opportunities identified by the workflow" loading="lazy" /></a>
              <figcaption><strong>Opportunity view</strong><span>Operational improvement opportunities · Hover to enlarge / click for full size ↗</span></figcaption>
            </figure>
            <figure className="procurement-evidence-card">
              <a className="procurement-image-zoom" href="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/supplier-risk.png" target="_blank" rel="noreferrer" aria-label="Open full-size supplier risk screenshot in a new tab"><img src="https://raw.githubusercontent.com/thepanchanandgupta/procurement-supply-chain-performance-intelligence/main/screenshots/supplier-risk.png" alt="Supplier risk output from the workflow" loading="lazy" /></a>
              <figcaption><strong>Supplier risk</strong><span>Supplier performance and risk signals · Hover to enlarge / click for full size ↗</span></figcaption>
            </figure>
          </div>
          <p className="procurement-evidence-footnote">Delivery proof includes email and Telegram notifications. The n8n workflow is orchestrated rather than hosted as a standalone application, so no public live demo is available.</p>
        </section>

        <div className="finvista-build-row">
          <div>
            <div className="finvista-section-label">BUILT WITH</div>
            <div className="finvista-stack">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
          <p className="finvista-disclaimer">Designed to connect operational performance with potential financial impact; savings are not claimed without measured results.</p>
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

function PortfolioRiskDetail({ project, previous, next }: { project: Project; previous?: Project | undefined; next?: Project | undefined }) {
  const dashboard = "https://thepanchanandgupta.github.io/Academics-FRA-1/";
  const repo = "https://github.com/thepanchanandgupta/Academics-FRA-1";
  return (
    <main id="main-content" className="detail-page finvista-detail portfolio-risk-detail">
      <header className="finvista-case-hero">
        <div className="container">
          <Link to="/" hash="projects" className="back-link"><ArrowLeft /> All projects</Link>
          <div className="project-meta"><span>Finance · Portfolio Risk Analytics</span><span>Academic project</span></div>
          <h1>High-Risk vs Low-Risk</h1>
          <p className="finvista-subtitle">Portfolio Analysis</p>
          <p className="finvista-lede">A comparative risk study of two non-overlapping ten-stock portfolios, tracking how risk and return behave across crisis, calm and current-market regimes. The dashboard supports interactive exploration of the results and underlying calculations.</p>
          <div className="finvista-actions">
            <a className="finvista-primary-link" href={dashboard} target="_blank" rel="noreferrer">Open live dashboard <ArrowUpRight /></a>
          </div>
        </div>
      </header>

      <section className="container finvista-case-content">
        <div className="finvista-capabilities">
          <div className="finvista-section-label">WHAT THE ANALYSIS TESTS</div>
          <div className="finvista-module-grid">
            <article><h2>Risk behaviour</h2><p>Compare a high-volatility and a low-volatility ten-stock portfolio using consistent risk and return measures.</p></article>
            <article><h2>Market regimes</h2><p>Examine performance across the COVID crisis, the 2017–18 calm period and the latest market period.</p></article>
            <article><h2>Downside assessment</h2><p>Bring together VaR, Expected Shortfall, drawdowns, Kupiec backtesting, correlations and stress tests.</p></article>
            <article><h2>Allocation stability</h2><p>Compare equal-weight allocations with regime-specific efficient-frontier outputs and optimiser weights.</p></article>
          </div>
        </div>

        <section className="portfolio-risk-evidence" aria-labelledby="portfolio-risk-evidence-title">
          <div className="procurement-evidence-heading">
            <div>
              <div className="finvista-section-label">DASHBOARD PREVIEW</div>
              <h2 id="portfolio-risk-evidence-title">Explore the analysis in detail</h2>
            </div>
            <p>Dashboard preview images are illustrative. Open the interactive version to change portfolios, regimes and assumptions.</p>
          </div>
          <figure className="portfolio-risk-preview">
            <a className="portfolio-risk-image-zoom" href={dashboard} target="_blank" rel="noreferrer" aria-label="Open the interactive portfolio risk dashboard in a new tab">
              <img src="/picture/portfolio-risk-comparison.jpeg" alt="Preview of the High-Risk versus Low-Risk Portfolio Analysis dashboard" loading="lazy" />
            </a>
            <figcaption>Portfolio dashboard overview · Hover to enlarge · Click to open the interactive dashboard ↗</figcaption>
          </figure>
          <div className="portfolio-risk-links">
            <a href={dashboard} target="_blank" rel="noreferrer">Open interactive dashboard <ArrowUpRight /></a>
            <a href={repo} target="_blank" rel="noreferrer">View source repository <ArrowUpRight /></a>
          </div>
        </section>

        <div className="finvista-build-row">
          <div>
            <div className="finvista-section-label">BUILT WITH</div>
            <div className="finvista-stack">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
          <p className="finvista-disclaimer">Academic financial-risk analysis for learning and comparison; not investment advice. Portfolio figures and findings are those documented in the project dashboard.</p>
        </div>
      </section>

      <nav className="container detail-pagination" aria-label="Project navigation">
        {previous ? <Link to="/projects/$slug" params={{slug:previous.slug}}><span><ArrowLeft /> Previous project</span><strong>{previous.title}</strong></Link> : <span />}
        {next && <Link to="/projects/$slug" params={{slug:next.slug}}><span>Next project <ArrowRight /></span><strong>{next.title}</strong></Link>}
      </nav>
    </main>
  );
}
