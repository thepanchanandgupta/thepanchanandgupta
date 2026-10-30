import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/types";
import { ImagePlaceholder } from "./ImagePlaceholder";
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card ${project.featured ? "featured" : ""}`}>
    {project.slug === "portfolio-risk-comparison" ? <div className="project-image-link project-image-static"><ImagePlaceholder src={project.image} alt={`${project.title} cover`} label="[ADD PROJECT IMAGE]" monogram={String(index + 1).padStart(2, "0")} /></div> : <Link to="/projects/$slug" params={{ slug: project.slug }} aria-label={`View ${project.title}`} className="project-image-link"><ImagePlaceholder src={project.image} alt={`${project.title} cover`} label="[ADD PROJECT IMAGE]" monogram={String(index + 1).padStart(2, "0")} /></Link>}
    <div className="project-card-body"><div className="project-meta"><span>{project.category}</span><span className="project-code">PROJECT_{String(index + 1).padStart(3, "0")}</span>{project.featured && <span>Featured case study</span>}</div><h3><Link to="/projects/$slug" params={{ slug: project.slug }}>{project.title}</Link></h3><p>{project.description}</p><div className="project-flow" aria-label="Case study structure"><span>Problem</span><i>→</i><span>Analysis</span><i>→</i><span>Insight</span><i>→</i><span>Impact</span></div><div className="project-bottom"><div className="tag-row">{project.tools.slice(0, 3).map((tool, i) => <span key={`${tool}-${i}`}>{tool}</span>)}</div><Link className="round-link" to="/projects/$slug" params={{ slug: project.slug }} aria-label={`Open ${project.title}`}><ArrowUpRight aria-hidden="true" /></Link></div></div>
  </article>;
}
