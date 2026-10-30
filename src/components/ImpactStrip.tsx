import { profile } from "@/data/profile";

export function ImpactStrip() {
  return (
    <section className="impact-strip" aria-label="Professional foundation">
      <div className="container impact-grid">
        {profile.highlights.map((item) => (
          <article key={item.value}>
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
