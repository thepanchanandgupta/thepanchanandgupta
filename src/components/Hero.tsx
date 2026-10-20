import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { ImagePlaceholder } from "./ImagePlaceholder";

const safeHref = (value: string) => (value.startsWith("[") ? "#" : value);

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="analytical-grid" aria-hidden="true">
        <svg viewBox="0 0 600 260">
          <path d="M0 220 C90 210 105 150 180 166 S300 80 380 112 S500 30 600 52" />
          <path className="chart-secondary" d="M0 235 L80 205 L145 214 L230 140 L310 170 L405 92 L480 118 L600 38" />
          <g>
            <circle cx="180" cy="166" r="4" />
            <circle cx="380" cy="112" r="4" />
            <circle cx="600" cy="52" r="4" />
          </g>
        </svg>
        <span className="data-label data-a">BUSINESS / ANALYTICS</span>
        <span className="data-label data-b">FINANCE × DATA</span>
        <span className="data-label data-c">INSIGHT → DECISIONS</span>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="cta primary" href="#projects">
              Explore My Work <ArrowDownRight />
            </a>
            <a className="cta secondary" href="#contact">Connect With Me</a>
            <a className="icon-link" href={safeHref(profile.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a className="icon-link" href={safeHref(profile.github)} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          </div>
          <div className="status-line status-line-compact">
            <div>
              <span>Focus</span>
              <strong>Finance · Analytics · Business Transformation</strong>
            </div>
            <div>
              <span>Availability</span>
              <strong>{profile.availability}</strong>
            </div>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <span className="frame-code">PROFILE_001</span>
            <ImagePlaceholder src={profile.photo} alt={`${profile.name}, professional portrait`} label="Professional portrait" monogram={profile.monogram} />
            <span className="frame-axis">FINANCE / ANALYTICS</span>
          </div>
          <span className="portrait-caption">Business perspective / analytical thinking</span>
        </div>
      </div>
    </section>
  );
}
