import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { ImagePlaceholder } from "./ImagePlaceholder";
const safeHref = (value: string) => value.startsWith("[") ? "#" : value;
export function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-title"><div className="analytical-grid" aria-hidden="true"><svg viewBox="0 0 600 260"><path d="M0 220 C90 210 105 150 180 166 S300 80 380 112 S500 30 600 52"/><g><circle cx="180" cy="166" r="4"/><circle cx="380" cy="112" r="4"/><circle cx="600" cy="52" r="4"/></g></svg></div><div className="container hero-grid">
    <div className="hero-copy"><p className="eyebrow">{profile.eyebrow}</p><h1 id="hero-title">{profile.name}</h1><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a className="cta primary" href="#projects">Explore My Work <ArrowDownRight /></a><a className="cta secondary" href="#contact">Connect With Me</a><a className="icon-link" href={safeHref(profile.linkedin)} aria-label="LinkedIn"><Linkedin /></a><a className="icon-link" href={safeHref(profile.github)} aria-label="GitHub"><Github /></a></div><div className="status-line"><div><span>Open to</span><strong>{profile.targetRoles.join(" · ")}</strong></div><div><span>Availability</span><strong>{profile.availability}</strong></div></div></div>
    <div className="hero-portrait"><div className="portrait-frame"><ImagePlaceholder src={profile.photo} alt="[YOUR PHOTO]" label="[YOUR PHOTO]" monogram={profile.monogram}/></div><span className="portrait-caption">Profile / 2026</span></div>
  </div></section>;
}
