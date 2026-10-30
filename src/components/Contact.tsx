import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const subject = encodeURIComponent("Professional enquiry — Panchanand Gupta");
  const emailLink = `mailto:${profile.email}?subject=${subject}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title={profile.sectionTitles.contact}
          intro="For opportunities, collaborations, thoughtful conversations, or a shared interest in the work."
        />

        <div className="contact-details">
          <article className="contact-email-card">
            <Mail aria-hidden="true" />
            <div>
              <span>Primary email</span>
              <a href={emailLink}>{profile.email}</a>
              <p>For professional opportunities and collaborations.</p>
            </div>
          </article>

          <article className="contact-email-card">
            <Mail aria-hidden="true" />
            <div>
              <span>Academic email</span>
              <a href={`mailto:${profile.academicEmail}`}>{profile.academicEmail}</a>
              <p>For academic and institutional correspondence.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
