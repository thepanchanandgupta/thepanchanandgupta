import type { ExperienceEntry } from "@/data/types";

export function TimelineItem({ item }: { item: ExperienceEntry; index: number }) {
  const outcome = [...item.achievements, ...item.metrics].filter(Boolean);

  return (
    <article className="timeline-item">
      <aside className="timeline-aside">
        <span className="timeline-period">{item.startDate} — {item.endDate}</span>
        <span className="timeline-location">{item.location}</span>
      </aside>

      <div className="timeline-content">
        <h4>{item.role}</h4>
        <p className="timeline-org">{item.organization}</p>
        <p className="timeline-description">{item.description}</p>

        <ul className="contribution-list">
          {item.contributions.map((contribution, i) => (
            <li key={i}>{contribution}</li>
          ))}
        </ul>

        <p className="timeline-tools">
          {item.tools.map((tool, i) => (
            <span key={tool}>{tool}{i < item.tools.length - 1 ? " · " : ""}</span>
          ))}
        </p>

        {outcome.length > 0 && (
          <div className="result-row">
            <strong>{item.outcomeLabel ?? "Outcome"}</strong>
            <span>{outcome.join(" ")}</span>
          </div>
        )}
      </div>
    </article>
  );
}
