import { profile } from "@/data/profile";

export function ImpactStrip() {
  return (
    <section className="impact-strip" aria-label="Professional foundation">
      <div className="container impact-grid">
        {profile.highlights.map((item, i) => (
          <article key={item.value}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div className="impact-copy">
              <strong>{item.value}</strong>
              <p>
                {item.label}
                <small>{item.note}</small>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
