import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

export function CursorFx() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarse) return;

    document.body.classList.add("custom-cursor-enabled");

    const mouse: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring: Point = { ...mouse };
    let hoveringInteractive = false;
    let rafId = 0;

    const setHoverState = (target: EventTarget | null) => {
      const element = target as HTMLElement | null;
      hoveringInteractive = Boolean(
        element?.closest("a,button,.game-card,.connect__card,.game-playground__canvas"),
      );
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setHoverState(e.target);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => setHoverState(e.target);

    const render = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.width = hoveringInteractive ? "44px" : "26px";
        ringRef.current.style.height = hoveringInteractive ? "44px" : "26px";
        ringRef.current.style.borderColor = hoveringInteractive
          ? "rgba(245, 158, 11, 0.95)"
          : "rgba(245, 158, 11, 0.45)";
        ringRef.current.style.backgroundColor = hoveringInteractive
          ? "rgba(245, 158, 11, 0.08)"
          : "transparent";
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    rafId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="cursor-fx" ref={rootRef} aria-hidden="true">
      <div className="cursor-fx__ring" ref={ringRef} />
      <div className="cursor-fx__dot" ref={dotRef} />
    </div>
  );
}
