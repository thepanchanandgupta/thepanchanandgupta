import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { ProjectDetail } from "@/pages/ProjectDetail";
export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => { const index = projects.findIndex(p => p.slug === params.slug); if (index < 0) throw notFound(); return { project: projects[index], previous: projects[index - 1], next: projects[index + 1] }; },
  head: ({ loaderData, params }) => ({ meta: [{ title: `${loaderData?.project.title ?? "Project unavailable"} — ${profile.name}` }, { name: "description", content: loaderData?.project.description ?? "Project case study unavailable." }, { property: "og:title", content: loaderData?.project.title ?? "Project unavailable" }, { property: "og:description", content: loaderData?.project.description ?? "Project case study unavailable." }, { property: "og:type", content: "article" }, { name: "twitter:card", content: profile.seo.twitterCard }], links: [{ rel: "canonical", href: `/projects/${params.slug}` }] }),
  component: ProjectRoute,
});
function ProjectRoute() { const data = Route.useLoaderData(); return <ProjectDetail {...data}/>; }
