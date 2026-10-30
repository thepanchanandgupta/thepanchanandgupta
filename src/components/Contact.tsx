import { profile } from "@/data/profile";

export function Contact() {
  const subject = encodeURIComponent("Professional enquiry — Panchanand Gupta");
  const emailLink = `mailto:${profile.email}?subject=${subject}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-copy">
            <span className="contact-eyebrow">Contact</span>
            <h2>{profile.sectionTitles.contact}</h2>
            <p>For opportunities, collaborations, thoughtful conversations, or a shared interest in the work.</p>
          </div>

          <div className="contact-email-list" aria-label="Email contacts">
            <div className="contact-email-item">
              <a href={emailLink}>{profile.email}</a>
              <span>(Primary)</span>
            </div>
            <div className="contact-email-item">
              <a href={`mailto:${profile.academicEmail}`}>{profile.academicEmail}</a>
              <span>(Academic)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
