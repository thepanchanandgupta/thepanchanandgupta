export type SectionKey = "home" | "about" | "experience" | "projects" | "education" | "skills" | "achievements" | "beyond-work" | "writing" | "contact";

export interface SeoConfig { title: string; description: string; ogTitle: string; ogDescription: string; ogImage?: string; twitterCard: "summary" | "summary_large_image"; }
export interface Highlight { value: string; label: string; note?: string; }
export interface ExploreItem { label: string; value: string; }
export interface Profile { name: string; monogram: string; photo?: string; tagline: string; eyebrow: string; intro: string; availability: string; targetRoles: string[]; email: string; academicEmail: string; linkedin: string; github: string; resume: string; highlights: Highlight[]; about: { professionalIdentity: string; academicBackground: string; careerInterests: string; enjoysWorkingOn: string; personalInterests: string; }; exploring: ExploreItem[]; sectionTitles: Record<SectionKey, string>; writingTitle: string; footerLine: string; seo: SeoConfig; }
export interface NavItem { label: string; id: SectionKey; }
export interface ExperienceEntry { id: string; type: "work" | "internship"; organization: string; role: string; location: string; startDate: string; endDate: string; description: string; contributions: string[]; tools: string[]; achievements: string[]; metrics: string[]; }
export type ProjectCategory = "Finance" | "Analytics" | "FinTech" | "Consulting" | "Data Science" | "Automation" | "Risk";
export interface Project { slug: string; title: string; description: string; category: ProjectCategory; context: string; problem: string; approach: string; analysis: string; insights: string[]; impact: string; tools: string[]; github: string; liveDemo: string; image?: string; featured: boolean; }
export interface EducationEntry { id: string; type: "PGDM / MBA" | "Undergraduate Degree" | "School"; institution: string; degree: string; specialization: string; duration: string; grade: string; coursework: string[]; highlights: string[]; }
export interface Certification { title: string; issuer: string; year: string; }
export interface SkillGroup { category: "Finance" | "Analytics" | "Technology" | "Business" | "Consulting" | "Risk"; skills: string[]; }
export interface Achievement { title: string; organization: string; year: string; description: string; }
export interface BeyondWorkItem { category: string; title: string; description: string; image?: string; size: "small" | "wide" | "tall"; }
export interface Poem { slug: string; title: string; excerpt: string; date: string; body: string; hindi?: string; urdu?: string; translation?: string; }
