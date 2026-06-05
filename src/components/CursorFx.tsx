import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

const TRAIL_COUNT = 8;

export function CursorFx() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarse) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    const mouse: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring: Point = { ...mouse };
    const trail: Point[] = Array.from({ length: TRAIL_COUNT }, () => ({ ...mouse }));
    let hoveringInteractive = false;
    let rafId = 0;

    const setHoverState = (target: EventTarget | null) => {
      const element = target as HTMLElement | null;
      hoveringInteractive = Boolean(
        element?.closest("a,button,.game-card,.social-link,.hero__cta,.navbar__brand"),
      );
    };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      setHoverState(event.target);
    };

    const onOver = (event: MouseEvent) => setHoverState(event.target);

    const render = () => {
      ring.x += (mouse.x - ring.x) * 0.2;
      ring.y += (mouse.y - ring.y) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.width = hoveringInteractive ? "42px" : "28px";
        ringRef.current.style.height = hoveringInteractive ? "42px" : "28px";
      }

      for (let i = 0; i < trail.length; i += 1) {
        const previous = i === 0 ? ring : trail[i - 1];
        trail[i].x += (previous.x - trail[i].x) * (0.22 - i * 0.015);
        trail[i].y += (previous.y - trail[i].y) * (0.22 - i * 0.015);

        const node = trailRefs.current[i];
        if (!node) {
          continue;
        }
        const scale = 1 - i * 0.09;
        node.style.transform = `translate3d(${trail[i].x}px, ${trail[i].y}px, 0) translate(-50%, -50%) scale(${scale})`;
        node.style.opacity = `${0.6 - i * 0.06}`;
      }

      rafId = window.requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    rafId = window.requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="cursor-fx" ref={rootRef} aria-hidden="true">
      <div className="cursor-fx__ring" ref={ringRef} />
      {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
        <div
          key={index}
          className="cursor-fx__dot"
          ref={(element) => {
            trailRefs.current[index] = element;
          }}
        />
      ))}
    </div>
  );
}
