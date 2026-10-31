import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "finvista",
    title: "FINVISTA — Finance & Investment Intelligence",
    description:
      "An AI-assisted finance platform combining company diagnostics, valuation, investor risk profiling and portfolio analytics.",
    category: "FinTech",
    context:
      "Financial analysis often requires moving between company fundamentals, valuation, risk measures, and portfolio context.",
    problem:
      "Bring multiple dimensions of financial and investment analysis into one coherent decision-support experience.",
    approach:
      "Build a modular application that brings together company-level financial diagnostics, valuation-oriented analysis, risk profiling, and portfolio analytics.",
    analysis:
      "The project explores financial statement analysis, financial health diagnostics, valuation inputs, risk measures, and ways to present findings in an accessible interface.",
    insights: [
      "Company-level diagnostics and portfolio-level risk answer different but complementary questions.",
      "Analytical outputs become more useful when the assumptions, methodology, and limitations are visible.",
      "A clear interface can help connect quantitative evidence with a financial decision.",
    ],
    impact:
      "Portfolio project and working demo; no unverified business outcomes or performance metrics are claimed.",
    tools: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Gemini API"],
    github: "https://github.com/thepanchanandgupta/FINVISTA",
    liveDemo: "https://finvista-demo.onrender.com/",
    image: "/picture/finvista-cover.jpeg",
    featured: true,
  },
  {
    slug: "procurement-supply-chain-intelligence",
    title: "Procurement & Supply Chain Performance Intelligence",
    description:
      "An n8n-powered workflow that interprets validated procurement, inventory and supplier findings with AI and delivers management alerts through Telegram.",
    category: "Automation",
    context:
      "Procurement and supply chain data can contain signals about spend, inventory health, supplier performance, and operational inefficiencies.",
    problem:
      "Translate validated operational findings into understandable business implications and timely alerts.",
    approach:
      "Combine analytical checks with an n8n workflow, use Claude to interpret validated findings into recommendations, and deliver alerts through Telegram.",
    analysis:
      "The workflow is designed around procurement, inventory, and supplier performance indicators, with AI used to interpret findings rather than replace validation of the underlying analysis.",
    insights: [
      "Recommendations are more trustworthy when generated from validated analytical findings.",
      "Automation can shorten the path from an operational signal to a management review.",
      "Financial impact should be tied to transparent assumptions rather than asserted without evidence.",
    ],
    impact:
      "Designed to identify performance-improvement opportunities; quantified savings should be added only when measured and verified.",
    tools: ["n8n", "API Integration", "JavaScript", "Telegram"],
    github: "",
    liveDemo: "",
    image: "/picture/procurement-intelligence.jpeg",
    featured: true,
  },
  {
    slug: "portfolio-risk-comparison",
    title: "High-Risk vs Low-Risk Portfolio Analysis",
    description:
      "A portfolio-analysis project comparing two ten-stock portfolios across different market regimes.",
    category: "Finance",
    context:
      "Portfolio risk is multidimensional and can look different during crisis, calm, and current-market periods.",
    problem:
      "Compare high-risk and low-risk portfolio behaviour using a consistent set of risk and return measures.",
    approach:
      "Manage a hypothetical ₹15 lakh allocation across two non-overlapping ten-stock portfolios and compare their behaviour across selected market regimes.",
    analysis:
      "The project uses portfolio dashboards, return/risk measures, and regime-based comparisons covering the COVID crisis, the 2017–2018 calm period, and a current-market view.",
    insights: [
      "Risk should be evaluated using multiple measures rather than a single headline number.",
      "A portfolio's behaviour can vary materially across market regimes.",
      "Comparing risk profiles helps clarify the trade-off between potential return and downside exposure.",
    ],
    impact:
      "Academic/personal analytical project; add specific metric values only from the final verified dashboard.",
    tools: ["Excel", "Portfolio Analytics", "Risk Analysis", "Dashboarding"],
    github: "https://github.com/thepanchanandgupta/Academics-FRA-1",
    liveDemo: "https://thepanchanandgupta.github.io/Academics-FRA-1/",
    image: "/picture/portfolio-risk-comparison.png",
    featured: true,
  },
];
