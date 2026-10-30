import { Award, GraduationCap } from "lucide-react";
import { achievements } from "@/data/achievements";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const degrees = education.filter((item) => item.id === "mba" || item.id === "undergrad");
  return (
    <section id="profile" className="section profile-section">
      <div className="container">
        <SectionHeading index="04" eyebrow="The person behind the work" title="A technical foundation. A business lens." intro="I like turning ambiguous problems into structured analysis, useful products and decisions people can act on." />
        <div className="profile-layout">
          <Reveal className="profile-statement">
            <span className="profile-label">HOW I THINK</span>
            <p>{profile.about.professionalIdentity}</p>
            <p className="profile-secondary">{profile.about.enjoysWorkingOn}</p>
            <div className="profile-interests"><span>OUTSIDE THE SPREADSHEET</span><p>Poetry · Swimming · Reading · Cycling</p></div>
          </Reveal>
          <div className="profile-details">
            <Reveal className="profile-glass-card education-compact">
              <div className="profile-card-heading"><GraduationCap /><span>EDUCATION</span></div>
              {degrees.map((item) => <article key={item.id}><div><strong>{item.type}</strong><span>{item.duration}</span></div><p>{item.institution}</p><small>{item.specialization} <b>{item.grade}</b></small></article>)}
            </Reveal>
            <Reveal className="profile-glass-card capability-compact" delay={90}>
              <div className="profile-card-heading"><span className="profile-dot" /><span>CAPABILITIES</span></div>
              <div className="capability-list">{skillGroups.slice(0, 5).map((group) => <div key={group.category}><strong>{group.category}</strong><p>{group.skills.join(" · ")}</p></div>)}</div>
            </Reveal>
          </div>
        </div>
        <div className="recognition-line"><div><Award /><span>SELECTED RECOGNITION</span></div>{achievements.slice(0, 2).map((item) => <p key={item.title}><strong>{item.title}</strong><span>{item.year}</span></p>)}</div>
      </div>
    </section>
  );
}
