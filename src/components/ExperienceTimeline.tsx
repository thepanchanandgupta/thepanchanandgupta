import type { ExperienceEntry } from "@/data/types";
import { TimelineItem } from "./TimelineItem";
export function ExperienceTimeline({ title, entries }: { title: string; entries: ExperienceEntry[] }) {
  return <div className="timeline-group"><h3>{title}</h3><div>{entries.map((item, index) => <TimelineItem key={item.id} item={item} index={index} />)}</div></div>;
}
