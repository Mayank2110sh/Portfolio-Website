import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COUNT = 72;
const LINK_DISTANCE = 140;
const CURSOR_INFLUENCE = 180;

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const initParticles = (width: number, height: number) => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1 + Math.random() * 1.5,
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
      if (particlesRef.current.length === 0) {
        initParticles(width, height);
      }
    };

    const center = () => {
      mouseRef.current.targetX = window.innerWidth / 2;
      mouseRef.current.targetY = window.innerHeight / 2;
      mouseRef.current.x = mouseRef.current.targetX;
      mouseRef.current.y = mouseRef.current.targetY;
    };

    const onMove = (event: MouseEvent) => {
      mouseRef.current.targetX = event.clientX;
      mouseRef.current.targetY = event.clientY;
    };

    const onLeave = () => center();

    const draw = () => {
      const { width, height } = container.getBoundingClientRect();
      const mouse = mouseRef.current;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const mx = mouse.x;
      const my = mouse.y;
      const nx = mx / Math.max(width, 1);
      const ny = my / Math.max(height, 1);

      container.style.setProperty("--mouse-x", `${mx}px`);
      container.style.setProperty("--mouse-y", `${my}px`);
      container.style.setProperty("--mouse-nx", String(nx));
      container.style.setProperty("--mouse-ny", String(ny));
      container.style.setProperty(
        "--parallax-x",
        `${(nx - 0.5) * (prefersReduced ? 0 : 28)}px`,
      );
      container.style.setProperty(
        "--parallax-y",
        `${(ny - 0.5) * (prefersReduced ? 0 : 22)}px`,
      );

      ctx.clearRect(0, 0, width, height);

      if (!prefersReduced) {
        const particles = particlesRef.current;

        for (const p of particles) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < CURSOR_INFLUENCE) {
            const force = (CURSOR_INFLUENCE - dist) / CURSOR_INFLUENCE;
            p.vx += (dx / dist) * force * 0.12;
            p.vy += (dy / dist) * force * 0.12;
          }

          p.vx *= 0.98;
          p.vy *= 0.98;
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const a = particles[i];
            const b = particles[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist > LINK_DISTANCE) {
              continue;
            }
            const alpha = (1 - dist / LINK_DISTANCE) * 0.35;
            const midDist = Math.hypot((a.x + b.x) / 2 - mx, (a.y + b.y) / 2 - my);
            const boost = midDist < CURSOR_INFLUENCE ? 1.4 : 1;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * boost})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        for (const p of particles) {
          const dist = Math.hypot(p.x - mx, p.y - my);
          const near = dist < CURSOR_INFLUENCE;
          ctx.fillStyle = near
            ? `rgba(0, 240, 255, ${0.5 + (1 - dist / CURSOR_INFLUENCE) * 0.5})`
            : "rgba(139, 155, 180, 0.35)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, near ? p.radius * 1.6 : p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, CURSOR_INFLUENCE * 1.2);
        glow.addColorStop(0, "rgba(0, 240, 255, 0.08)");
        glow.addColorStop(0.5, "rgba(255, 70, 85, 0.04)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      rafRef.current = window.requestAnimationFrame(draw);
    };

    center();
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    rafRef.current = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="animated-bg" ref={containerRef} aria-hidden="true">
      <div className="animated-bg__spotlight" />
      <div className="animated-bg__grid-shift" />
      <canvas className="animated-bg__canvas" ref={canvasRef} />
      <svg
        className="animated-bg__svg"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="none"
      >
        <g className="animated-bg__paths">
          <path
            className="animated-bg__line animated-bg__line--cyan"
            d="M-40 160 C 220 80, 360 320, 640 260 S 1080 120, 1480 240"
          />
          <path
            className="animated-bg__line animated-bg__line--red"
            d="M-60 440 C 220 360, 420 560, 700 500 S 1080 360, 1500 540"
          />
          <path
            className="animated-bg__line animated-bg__line--cyan slow"
            d="M-30 760 C 240 680, 460 880, 760 820 S 1120 680, 1490 860"
          />
          <path
            className="animated-bg__line animated-bg__line--red slow"
            d="M-20 920 C 280 840, 520 1020, 810 940 S 1180 840, 1500 980"
          />
        </g>
      </svg>
      <div className="animated-bg__vignette" />
    </div>
  );
}
