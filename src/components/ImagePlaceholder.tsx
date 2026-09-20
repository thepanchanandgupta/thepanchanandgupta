import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface Props { src?: string; alt: string; label?: string; monogram?: string; className?: string; }
export function ImagePlaceholder({ src, alt, label = "[ADD IMAGE]", monogram, className }: Props) {
  if (src) return <img src={src} alt={alt} className={cn("image-cover", className)} />;
  return <div className={cn("image-placeholder", className)} role="img" aria-label={alt}><span className="placeholder-mark">{monogram || <ImageIcon aria-hidden="true" />}</span><span>{label}</span></div>;
}
