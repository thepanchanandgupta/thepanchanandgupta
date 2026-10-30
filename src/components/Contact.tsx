import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const subject = encodeURIComponent("Professional enquiry — Panchanand Gupta");
  const emailLink = `mailto:${profile.email}?subject=${subject}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={profile.sectionTitles.contact}
          intro="For opportunities, collaborations, thoughtful conversations, or a shared interest in the work."
        />

        <div className="contact-email-list">
          <div className="contact-email-item">
            <span>Primary</span>
            <a href={emailLink}>{profile.email}</a>
          </div>
          <div className="contact-email-item">
            <span>Academic</span>
            <a href={`mailto:${profile.academicEmail}`}>{profile.academicEmail}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
