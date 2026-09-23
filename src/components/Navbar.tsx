import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Button } from "./Button";

const safeHref = (value: string) => value.startsWith("[") ? "#" : value;
export function Navbar() {
  const [open, setOpen] = useState(false); const [active, setActive] = useState("home");
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { document.body.classList.toggle("menu-open", open); return () => document.body.classList.remove("menu-open"); }, [open]);
  useEffect(() => { if (pathname !== "/") return; const sections = navigation.map(n => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]; const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-30% 0px -60%" }); sections.forEach(section => observer.observe(section)); return () => observer.disconnect(); }, [pathname]);
  const destination = (id: string) => pathname === "/" ? `#${id}` : `/#${id}`;
  return <header className="site-header"><nav className="navbar" aria-label="Primary navigation">
    <a className="brand" href={destination("home")} onClick={() => setOpen(false)} aria-label="Home"><span>{profile.monogram}</span><strong>{profile.name}</strong></a>
    <div className="desktop-nav">{navigation.map(item => <a key={item.id} href={destination(item.id)} className={active === item.id ? "active" : ""}>{item.label}</a>)}</div>
    <div className="nav-actions"><a className="icon-link" href={safeHref(profile.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn professional profile"><Linkedin /></a><a className="icon-link technical-link" href={safeHref(profile.github)} target="_blank" rel="noreferrer" aria-label="GitHub technical work"><Github /></a><a className="resume-link" href={profile.resume}>Resume</a><Button variant="icon" className="menu-trigger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
    {open && <div className="mobile-menu">{navigation.map((item, i) => <a key={item.id} href={destination(item.id)} onClick={() => setOpen(false)}><span>{String(i + 1).padStart(2, "0")}</span>{item.label}</a>)}<div className="mobile-social"><a href={safeHref(profile.linkedin)} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href={safeHref(profile.github)} target="_blank" rel="noreferrer"><Github /> GitHub</a><a href={profile.resume}>Resume</a></div></div>}
  </nav></header>;
}
