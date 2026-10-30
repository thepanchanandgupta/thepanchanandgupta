import { Award, GraduationCap } from "lucide-react";
import { achievements } from "@/data/achievements";
import { certifications, education } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const interests = ["Poetry", "Swimming", "Reading", "Cycling"];

  return (
    <section id="profile" className="section profile-section">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="The person behind the work"
          title="A technical foundation. A business lens."
          intro="I like turning ambiguous problems into structured analysis, useful products and decisions people can act on."
        />

        <div className="profile-overview-grid">
          <div className="profile-academic-column">
            <Reveal className="profile-glass-card education-compact">
              <div className="profile-card-heading">
                <GraduationCap />
                <span>1.1 / EDUCATION</span>
              </div>
              {education.map((item) => (
                <article key={item.id}>
                  <div><strong>{item.degree}</strong><span>{item.duration}</span></div>
                  <p>{item.institution}</p>
                  <small>{item.specialization} <b>{item.grade}</b></small>
                </article>
              ))}
            </Reveal>

            <Reveal className="profile-glass-card certifications-compact profile-certifications" delay={70}>
              <div className="profile-card-heading">
                <Award />
                <span>1.2 / CERTIFICATIONS</span>
              </div>
              {certifications.map((cert) => (
                <article key={cert.title}>
                  <div><strong>{cert.title}</strong><span>{cert.year}</span></div>
                  <p>{cert.issuer}</p>
                </article>
              ))}
            </Reveal>
          </div>

          <Reveal className="profile-glass-card capability-compact profile-capabilities" delay={110}>
            <div className="profile-card-heading">
              <span className="profile-dot" />
              <span>2.1 / CAPABILITIES</span>
            </div>
            <div className="capability-list">
              {skillGroups.slice(0, 5).map((group) => (
                <div key={group.category}>
                  <strong>{group.category}</strong>
                  <p>{group.skills.join(" · ")}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="profile-beyond">
          <div>
            <span className="profile-beyond-index">03 / BEYOND THE SPREADSHEETS & VS CODE</span>
            <h3>Outside the work</h3>
          </div>
          <div className="profile-interest-list">
            {interests.map((interest) => <span key={interest}>{interest}</span>)}
          </div>
        </div>

        <div className="recognition-line">
          <div><Award /><span>SELECTED RECOGNITION</span></div>
          {achievements.slice(0, 2).map((item) => (
            <p key={item.title}><strong>{item.title}</strong><span>{item.year}</span></p>
          ))}
        </div>
      </div>
    </section>
  );
}
