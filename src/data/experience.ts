import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "hcltech",
    type: "work",
    organization: "HCLTech",
    role: "Graduate Engineer Trainee",
    location: "India",
    startDate: "September 2022",
    endDate: "July 2023",
    description:
      "Supported workflow automation, operational reporting, database integration, and API validation across .NET-based applications.",
    contributions: [
      "Improved KPI tracking through workflow automation, reducing turnaround time by 30%.",
      "Translated cross-functional requirements into SQL workflows, supporting operational reporting and database integration.",
      "Supported API validation using Postman and Agile delivery across .NET-based applications.",
    ],
    tools: ["SQL", "Postman", ".NET", "Workflow Automation", "Agile"],
    achievements: [],
    outcomeLabel: "Operational impact",
    metrics: ["Reduced KPI reporting turnaround time by 30% through workflow automation."],
  },
  {
    id: "blue-circle",
    type: "internship",
    organization: "Blue Circle Medi Services Pvt. Ltd.",
    role: "Founder’s Office Intern",
    location: "India",
    startDate: "April 2026",
    endDate: "June 2026",
    description:
      "Supported early-stage project feasibility through market research, stakeholder requirements, and financial modelling.",
    contributions: [
      "Gathered and documented stakeholder requirements through market research to assess project feasibility, demand, and key business needs.",
      "Engaged cross-functional stakeholders to validate assumptions and identify project requirements and constraints.",
      "Prepared a Detailed Project Report and financial model covering CapEx, EBITDA, IRR, payback, and project risks.",
    ],
    tools: ["Market Research", "Financial Modelling", "Requirements Analysis"],
    achievements: [
      "Developed the Detailed Project Report and financial model, presented them to the founders, and received their approval. The project was awaiting investor presentation when my internship concluded.",
    ],
    outcomeLabel: "Founder approval",
    metrics: [],
  },
  {
    id: "famian",
    type: "internship",
    organization: "FAMIAN",
    role: "Proofreader Intern",
    location: "India",
    startDate: "September 2019",
    endDate: "October 2019",
    description:
      "Worked across editorial quality, writing workshops, e-newspaper operations, and intern recruitment.",
    contributions: [
      "Reviewed editorial content for books and articles, ensuring accuracy, consistency, and adherence to client requirements.",
      "Led writing workshops and managed the e-newspaper unit’s operations.",
      "Coordinated editorial initiatives and intern recruitment.",
    ],
    tools: ["Editorial Review", "Writing", "Operations Coordination"],
    achievements: ["Converted the internship into a pre-placement offer through performance and execution."],
    outcomeLabel: "Career outcome",
    metrics: [],
  },
];
