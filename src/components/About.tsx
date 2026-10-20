import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const labels = {
  professionalIdentity: "Professional identity",
  academicBackground: "Academic background",
  enjoysWorkingOn: "What I enjoy working on",
  personalInterests: "Personal interests",
};

export function About() {
  const aboutEntries = Object.entries(profile.about).filter(
    ([key]) => key !== "careerInterests",
  );

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={profile.sectionTitles.about}
          intro="The connecting thread between my academic interests, professional direction, and the questions I care about."
        />
        <div className="about-copy about-copy-horizontal">
          {aboutEntries.map(([key, value], i) => (
            <Reveal key={key} delay={i * 35}>
              <article className="about-block">
                <span>{labels[key as keyof typeof labels]}</span>
                <p>{value}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="about-extras about-extras-compact">
          <div>
            <h3>Currently exploring</h3>
            <div className="explore-grid">
              {profile.exploring.map((item) => (
                <article key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                  <ArrowUpRight />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
