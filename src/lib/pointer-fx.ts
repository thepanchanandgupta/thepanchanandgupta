/**
 * Pointer-responsive light and depth.
 *
 * One delegated, event-driven handler (no animation loop). It only writes CSS
 * custom properties; all smoothing is done by registered-property transitions
 * in motion.css. Disabled for touch, coarse pointers and reduced motion.
 *
 *   [data-tilt]    surface tilts a few degrees and catches the light
 *   [data-light]   ambient highlight follows the cursor across the scope
 *   [data-magnet]  control leans slightly toward a nearby cursor
 */
const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const REDUCED = "(prefers-reduced-motion: reduce)";
const MAGNET_RADIUS = 72;
const MAGNET_PULL = 0.2;
const MAGNET_MAX = 7;

const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));

export function initPointerFx(): () => void {
  if (typeof window === "undefined") return () => {};
  if (!window.matchMedia(FINE_POINTER).matches || window.matchMedia(REDUCED).matches) return () => {};

  const magnets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnet]"));
  let tilt: HTMLElement | null = null;
  let light: HTMLElement | null = null;
  let frame = 0;
  let last: PointerEvent | null = null;

  const clearTilt = (el: HTMLElement) => {
    el.removeAttribute("data-hot");
    for (const p of ["--mx", "--my", "--mxn", "--myn", "--rx", "--ry", "--lit"]) el.style.removeProperty(p);
  };
  const clearLight = (el: HTMLElement) => {
    for (const p of ["--hx", "--hy"]) el.style.removeProperty(p);
  };
  const clearMagnet = (el: HTMLElement) => {
    el.style.removeProperty("--tx");
    el.style.removeProperty("--ty");
  };

  const paint = () => {
    frame = 0;
    const e = last;
    if (!e) return;

    if (tilt) {
      const r = tilt.getBoundingClientRect();
      const x = clamp((e.clientX - r.left) / r.width);
      const y = clamp((e.clientY - r.top) / r.height);
      const max = Number(tilt.dataset["tiltMax"] ?? 4);
      tilt.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      tilt.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      tilt.style.setProperty("--mxn", x.toFixed(3));
      tilt.style.setProperty("--myn", y.toFixed(3));
      tilt.style.setProperty("--rx", `${((0.5 - y) * 2 * max).toFixed(2)}deg`);
      tilt.style.setProperty("--ry", `${((x - 0.5) * 2 * max).toFixed(2)}deg`);
      tilt.style.setProperty("--lit", "1");
    }

    if (light) {
      const r = light.getBoundingClientRect();
      light.style.setProperty("--hx", `${(clamp((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
      light.style.setProperty("--hy", `${(clamp((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
    }

    for (const m of magnets) {
      const r = m.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const near = Math.hypot(dx, dy) < MAGNET_RADIUS + Math.max(r.width, r.height) / 2;
      if (near) {
        m.style.setProperty("--tx", `${(Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, dx * MAGNET_PULL))).toFixed(1)}px`);
        m.style.setProperty("--ty", `${(Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, dy * MAGNET_PULL))).toFixed(1)}px`);
      } else clearMagnet(m);
    }
  };

  const onMove = (e: PointerEvent) => {
    if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== "pen") return;
    const target = e.target instanceof Element ? e.target : null;
    const nextTilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
    const nextLight = target?.closest<HTMLElement>("[data-light]") ?? null;
    if (nextTilt !== tilt) {
      if (tilt) clearTilt(tilt);
      tilt = nextTilt;
      tilt?.setAttribute("data-hot", "");
    }
    if (nextLight !== light) {
      if (light) clearLight(light);
      light = nextLight;
    }
    last = e;
    if (!frame) frame = requestAnimationFrame(paint);
  };

  const onLeave = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    last = null;
    if (tilt) clearTilt(tilt);
    if (light) clearLight(light);
    tilt = null;
    light = null;
    magnets.forEach(clearMagnet);
  };

  document.addEventListener("pointermove", onMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  window.addEventListener("blur", onLeave);
  return () => {
    document.removeEventListener("pointermove", onMove);
    document.documentElement.removeEventListener("pointerleave", onLeave);
    window.removeEventListener("blur", onLeave);
    onLeave();
  };
}
