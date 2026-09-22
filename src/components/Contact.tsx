import { useState } from "react";
import { Check, Clipboard, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState<"personal" | "academic" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  async function copyEmail(value: string, kind: "personal" | "academic") { await navigator.clipboard.writeText(value); setCopied(kind); window.setTimeout(() => setCopied(null), 2000); }
  return <section id="contact" className="section contact-section"><div className="container"><SectionHeading index="09" eyebrow="Contact" title={profile.sectionTitles.contact} intro="For opportunities, collaborations, thoughtful conversations, or a shared interest in the work."/><div className="contact-grid"><div className="contact-options">
    <article><Mail/><span>Primary email</span><strong>{profile.email}</strong><Button variant="secondary" onClick={() => copyEmail(profile.email, "personal")}>{copied === "personal" ? <><Check/> Copied</> : <><Clipboard/> Copy email</>}</Button></article>
    <article><Mail/><span>Academic email</span><strong>{profile.academicEmail}</strong><Button variant="secondary" onClick={() => copyEmail(profile.academicEmail, "academic")}>{copied === "academic" ? <><Check/> Copied</> : <><Clipboard/> Copy email</>}</Button></article>
    <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span>Professional profile</span><strong>LinkedIn</strong></a><a className="technical-link" href={profile.github} target="_blank" rel="noreferrer"><Github/><span>Technical work / code</span><strong>GitHub</strong></a>
  </div><div className="contact-form-wrap">{submitted ? <div className="form-success" role="status"><Check/><h3>Message prepared</h3><p>This demo form is frontend-only. Connect a provider before publishing submissions.</p><Button variant="secondary" onClick={() => setSubmitted(false)}>Send another</Button></div> : <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}><div className="field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" required placeholder="Your name"/></div><div className="field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" required placeholder="you@example.com"/></div><div className="field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" required rows={6} placeholder="Write your message"/></div><Button type="submit">Prepare message</Button><p className="form-note">Frontend-only placeholder — no message is sent yet.</p></form>}</div></div></div></section>;
}
