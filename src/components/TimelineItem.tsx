import type { ExperienceEntry } from "@/data/types";
export function TimelineItem({ item, index }: { item: ExperienceEntry; index: number }) {
  return <article className="timeline-item">
    <div className="timeline-rail"><span>{String(index + 1).padStart(2, "0")}</span></div>
    <div className="timeline-content">
      <div className="timeline-meta"><span>{item.startDate} — {item.endDate}</span><span>{item.location}</span></div>
      <h4>{item.role}</h4><p className="timeline-org">{item.organization}</p><p>{item.description}</p>
      <ul className="contribution-list">{item.contributions.map((x, i) => <li key={i}>{x}</li>)}</ul>
      <div className="tag-row">{item.tools.map(x => <span key={x}>{x}</span>)}</div>
      {(item.achievements.length > 0 || item.metrics.length > 0) && <div className="result-row"><strong>Selected result</strong><span>{[...item.achievements, ...item.metrics].join(" · ")}</span></div>}
    </div>
  </article>;
}
