import type { Certification, EducationEntry } from "./types";
export const education: EducationEntry[] = [
  { id: "mba", type: "PGDM / MBA", institution: "[YOUR UNIVERSITY]", degree: "[YOUR DEGREE]", specialization: "[YOUR SPECIALIZATION]", duration: "[START DATE] — [END DATE]", grade: "[CGPA / GRADE]", coursework: ["[RELEVANT COURSE]", "[RELEVANT COURSE]"], highlights: ["[ACADEMIC HIGHLIGHT]"] },
  { id: "undergrad", type: "Undergraduate Degree", institution: "[YOUR UNIVERSITY]", degree: "[YOUR DEGREE]", specialization: "[YOUR SPECIALIZATION]", duration: "[START DATE] — [END DATE]", grade: "[CGPA / GRADE]", coursework: ["[RELEVANT COURSE]", "[RELEVANT COURSE]"], highlights: ["[ACADEMIC HIGHLIGHT]"] },
  { id: "school", type: "School", institution: "[YOUR SCHOOL]", degree: "[QUALIFICATION]", specialization: "[SUBJECTS / STREAM]", duration: "[START DATE] — [END DATE]", grade: "[GRADE]", coursework: [], highlights: ["[ACADEMIC HIGHLIGHT]"] },
];
export const certifications: Certification[] = [
  { title: "[CERTIFICATION]", issuer: "[ISSUER]", year: "[YEAR]" },
  { title: "[CERTIFICATION]", issuer: "[ISSUER]", year: "[YEAR]" },
];
