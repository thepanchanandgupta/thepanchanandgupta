import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { profile } from "@/data/profile";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: profile.seo.title }, { name: "description", content: profile.seo.description }, { property: "og:title", content: profile.seo.ogTitle }, { property: "og:description", content: profile.seo.ogDescription }, { property: "og:type", content: "website" }, { name: "twitter:card", content: profile.seo.twitterCard }], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});
