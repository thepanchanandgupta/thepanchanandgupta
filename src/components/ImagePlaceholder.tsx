import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  src?: string | undefined;
  alt: string;
  label?: string;
  monogram?: string;
  className?: string;
}

export function ImagePlaceholder({ src, alt, label = "Image unavailable", monogram, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn("image-cover", className)}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className={cn("image-placeholder", className)} role="img" aria-label={alt}>
      <span className="placeholder-mark">{monogram || <ImageIcon aria-hidden="true" />}</span>
      <span>{label}</span>
    </div>
  );
}
