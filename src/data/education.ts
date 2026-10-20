import type { Certification, EducationEntry } from "./types";

export const education: EducationEntry[] = [
  {
    id: "mba",
    type: "PGDM",
    institution: "Great Lakes Institute of Management, Gurgaon",
    degree: "Post Graduate Diploma in Management",
    specialization: "Finance & Analytics",
    duration: "2025 — 2027",
    grade: "3.10 / 4.00",
    coursework: [],
    highlights: [],
  },
  {
    id: "undergrad",
    type: "B.Tech",
    institution: "Calcutta Institute of Engineering and Management, Kolkata",
    degree: "B.Tech in Information Technology",
    specialization: "Information Technology",
    duration: "2018 — 2022",
    grade: "8.71 / 10 CGPA",
    coursework: [],
    highlights: [],
  },
  {
    id: "higher-secondary",
    type: "School",
    institution: "National High School, Kolkata",
    degree: "Class XII",
    specialization: "Higher Secondary",
    duration: "2018",
    grade: "75.60%",
    coursework: [],
    highlights: [],
  },
  {
    id: "secondary",
    type: "School",
    institution: "Alipore Girls’ and Boys’ High School, Kolkata",
    degree: "Class X",
    specialization: "Secondary",
    duration: "2016",
    grade: "77.43%",
    coursework: [],
    highlights: [],
  },
];

export const certifications: Certification[] = [
  { title: "McKinsey Forward Program", issuer: "McKinsey", year: "2025" },
  { title: "Strategy Consulting", issuer: "BCG | Forage", year: "2026" },
  { title: "Risk", issuer: "Goldman Sachs | Forage", year: "2026" },
];
