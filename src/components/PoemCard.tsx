import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Poem } from "@/data/types";
export function PoemCard({ poem, index }: { poem: Poem; index: number }) {
  return <article className="poem-card"><div className="poem-index">{String(index + 1).padStart(2, "0")}</div><div><p className="poem-date">{poem.date}</p><h3>{poem.title}</h3><p className="poem-excerpt">{poem.excerpt}</p><Link to="/writing/$slug" params={{ slug: poem.slug }}>Read poem <ArrowRight aria-hidden="true" /></Link></div></article>;
}
