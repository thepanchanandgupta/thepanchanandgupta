import { ArrowUpRight, Mail } from "lucide-react";
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

        <div className="contact-horizontal">
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

          <div className="contact-action">
            <span className="contact-kicker">Have something in mind?</span>
            <h3>Let’s start a conversation.</h3>
            <p>
              Have a role, a project, or an interesting problem to discuss?
              Send me an email directly.
            </p>
            <a className="button button-primary" href={emailLink}>
              <Mail aria-hidden="true" />
              Send me an email
              <ArrowUpRight aria-hidden="true" />
            </a>
            <span className="contact-note">
              Opens your default email application. No form submission or
              backend required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
