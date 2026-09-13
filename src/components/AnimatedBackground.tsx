import { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  size: number;
  speedY: number;
  alpha: number;
}

const SPARK_COUNT = 36;

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initSparks = (w: number, h: number) => {
      sparksRef.current = Array.from({ length: SPARK_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: 1 + Math.random() * 1.5,
        speedY: 0.15 + Math.random() * 0.35,
        alpha: 0.15 + Math.random() * 0.45,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (sparksRef.current.length === 0) {
        initSparks(width, height);
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const draw = () => {
      const { width, height } = container.getBoundingClientRect();
      const mouse = mouseRef.current;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      container.style.setProperty("--mouse-x", `${mouse.x}px`);
      container.style.setProperty("--mouse-y", `${mouse.y}px`);

      ctx.clearRect(0, 0, width, height);

      if (!prefersReduced) {
        // Subtle ambient dust sparks
        const sparks = sparksRef.current;
        for (const s of sparks) {
          s.y -= s.speedY;
          if (s.y < 0) {
            s.y = height;
            s.x = Math.random() * width;
          }

          // Subtle attraction toward mouse
          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180 && dist > 10) {
            s.x += (dx / dist) * 0.4;
          }

          ctx.fillStyle = `rgba(245, 158, 11, ${s.alpha})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="animated-bg" ref={containerRef} aria-hidden="true">
      <div className="animated-bg__grid-engine" />
      <div className="animated-bg__spotlight-amber" />
      <canvas className="animated-bg__canvas" ref={canvasRef} />
      <div className="animated-bg__vignette-tactical" />
    </div>
  );
}
