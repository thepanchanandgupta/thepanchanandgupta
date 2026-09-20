import { createFileRoute, notFound } from "@tanstack/react-router";
import { poems } from "@/data/poems";
import { profile } from "@/data/profile";
import { PoemReader } from "@/pages/PoemReader";
export const Route = createFileRoute("/writing/$slug")({
  loader: ({ params }) => { const index = poems.findIndex(p => p.slug === params.slug); if (index < 0) throw notFound(); return { poem: poems[index], previous: poems[index - 1], next: poems[index + 1] }; },
  head: ({ loaderData, params }) => ({ meta: [{ title: `${loaderData?.poem.title ?? "Writing unavailable"} — ${profile.name}` }, { name: "description", content: loaderData?.poem.excerpt ?? "Writing unavailable." }, { property: "og:title", content: loaderData?.poem.title ?? "Writing unavailable" }, { property: "og:description", content: loaderData?.poem.excerpt ?? "Writing unavailable." }, { property: "og:type", content: "article" }, { name: "twitter:card", content: profile.seo.twitterCard }], links: [{ rel: "canonical", href: `/writing/${params.slug}` }] }),
  component: PoemRoute,
});
function PoemRoute() { const data = Route.useLoaderData(); return <PoemReader {...data}/>; }
