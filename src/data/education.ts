import type { Certification, EducationEntry } from "./types";

export const education: EducationEntry[] = [
  {
    id: "mba",
    type: "PGDM / MBA",
    institution: "Great Lakes Institute of Management, Gurgaon",
    degree: "Post Graduate Diploma in Management (PGDM)",
    specialization: "Dual Major: Finance & Analytics",
    duration: "2025 — 2027",
    grade: "3.1 / 4.0 GPA (latest shared)",
    coursework: [
      "Financial Statement Analysis",
      "Corporate Finance",
      "Data Science & Analytics",
      "Operations Management",
      "Strategic Management",
    ],
    highlights: ["[ADD VERIFIED ACADEMIC HIGHLIGHTS]"],
  },
  {
    id: "undergrad",
    type: "Undergraduate Degree",
    institution: "[UNDERGRADUATE INSTITUTION]",
    degree: "B.Tech",
    specialization: "Information Technology",
    duration: "Completed 2022",
    grade: "8.71 / 10 CGPA",
    coursework: ["Software Development", "Programming", "Data Structures"],
    highlights: ["[ADD VERIFIED ACADEMIC HIGHLIGHTS]"],
  },
];
export const certifications: Certification[] = [
  { title: "[CERTIFICATION]", issuer: "[ISSUER]", year: "[YEAR]" },
];
