import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
const safeHref = (value: string) => value.startsWith("[") ? "#" : value;
export function Footer() { return <footer><div className="container footer-grid"><div><strong>{profile.name}</strong><p>{profile.tagline}</p></div><nav aria-label="Footer navigation"><a href={safeHref(profile.linkedin)}><Linkedin/> LinkedIn</a><a href={safeHref(profile.github)}><Github/> GitHub</a><a href={safeHref(`mailto:${profile.email}`)}><Mail/> Email</a></nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.footerLine}</span></div></footer>; }
