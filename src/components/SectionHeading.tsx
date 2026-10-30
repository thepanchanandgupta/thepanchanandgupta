interface Props { index?: string; eyebrow: string; title: string; intro?: string; }

export function SectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <header className="section-heading">
      <div className="section-kicker">
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  );
}
