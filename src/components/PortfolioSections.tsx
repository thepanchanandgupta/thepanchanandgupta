import { useState } from "react";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { achievements } from "@/data/achievements";
import { certifications, education } from "@/data/education";
import { experience } from "@/data/experience";
import { poems } from "@/data/poems";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import type { ProjectCategory } from "@/data/types";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PoemCard } from "./PoemCard";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const work = experience.filter((x) => x.type === "work");
  const internships = experience.filter((x) => x.type === "internship");
  return (
    <section id="experience" className="section section-contrast">
      <div className="container">
        <SectionHeading index="02" eyebrow="Experience" title={profile.sectionTitles.experience} intro="Selected responsibilities and contributions, focused on outcomes and business impact." />
        <ExperienceTimeline title="Work Experience" entries={work} />
        <ExperienceTimeline title="Internships" entries={internships} />
      </div>
    </section>
  );
}

const categories: ("All" | ProjectCategory)[] = ["All", "Finance", "Analytics", "FinTech", "Consulting", "Automation", "Risk"];

export function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading index="03" eyebrow="Projects" title={profile.sectionTitles.projects} intro="Selected work connecting financial thinking, data analysis, and better business decisions." />
        <div className="project-filters" role="group" aria-label="Filter projects">
          {categories.map((cat) => (
            <button type="button" key={cat} className={filter === cat ? "active" : ""} onClick={() => setFilter(cat)} aria-pressed={filter === cat}>{cat}</button>
          ))}
        </div>
        <div className="projects-grid">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <ProjectCard project={project} index={projects.indexOf(project)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section section-contrast">
      <div className="container">
        <SectionHeading index="04" eyebrow="Education" title={profile.sectionTitles.education} intro="Academic background and selected professional learning." />
        <div className="education-layout education-layout-compact">
          <div className="education-list">
            {education.map((item) => (
              <article key={item.id}>
                <div className="education-icon"><GraduationCap /></div>
                <div>
                  <div className="timeline-meta"><span>{item.type}</span><span>{item.duration}</span></div>
                  <h3>{item.degree}</h3>
                  <p className="timeline-org">{item.institution}</p>
                  <div className="education-summary">
                    <span>{item.specialization}</span>
                    <strong>{item.grade}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="certifications certifications-compact">
            <div className="aside-title"><Award /><h3>Certifications</h3></div>
            {certifications.map((cert) => (
              <article key={cert.title}>
                <span>{cert.year}</span>
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index="05" eyebrow="Key Skills" title="Skills, Tools & Business Capabilities" intro="A focused overview of the capabilities I bring to finance, analytics, and business problem-solving." />
        <div className="skills-grid skills-grid-compact">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 45}>
              <article>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{group.category}</h3>
                <div>{group.skills.map((skill) => <p key={skill}>{skill}</p>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section section-contrast">
      <div className="container">
        <SectionHeading index="06" eyebrow="Recognition" title={profile.sectionTitles.achievements} />
        <div className="achievement-grid">{achievements.map((item, i) => <article key={i}><div><Award/><span>{item.year}</span></div><h3>{item.title}</h3><p className="timeline-org">{item.organization}</p><p>{item.description}</p></article>)}</div>
      </div>
    </section>
  );
}

export function BeyondWork() {
  return (
    <section id="beyond-work" className="section">
      <div className="container">
        <SectionHeading index="07" eyebrow="Personal" title="Outside Work" intro="Poetry, reading, swimming, cycling, and a couple of half marathons." />
        <div className="personal-interests">
          {["Writing poetry & shayari", "Swimming", "Reading", "Cycling", "Half marathon finisher × 2"].map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Writing() {
  return (
    <section id="writing" className="section writing-section">
      <div className="container">
        <div className="writing-intro">
          <span>08 / Writing & poetry</span>
          <BookOpen />
          <h2>{profile.writingTitle}</h2>
          <p>Poetry and shayari on psychology, emotion, and perspective.</p>
        </div>
        <div className="poem-list">{poems.map((poem, i) => <PoemCard key={poem.slug} poem={poem} index={i} />)}</div>
      </div>
    </section>
  );
}
