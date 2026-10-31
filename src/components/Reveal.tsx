import type { CSSProperties, ReactNode } from "react";

/**
 * Marks a surface that settles into place as it scrolls into view.
 * Purely declarative: the choreography lives in motion.css (CSS scroll-driven
 * animation), so there is no observer, no state and no hydration flash.
 * `delay` is kept for API compatibility and becomes a stagger index.
 */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`reveal ${className}`.trim()} data-m="plate" style={{ "--i": Math.round(delay / 60) } as CSSProperties}>
      {children}
    </div>
  );
}
