import { useEffect, useMemo, useState } from "react";

const SECTION_IDS = ["home", "about", "games", "connect"];
const CHECKPOINTS = [8, 34, 64, 90];

export function ScrollProgressHud() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const ratio = total > 0 ? window.scrollY / total : 0;
      setProgress(Math.min(Math.max(ratio, 0), 1));

      let current = "home";
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const percent = useMemo(() => Math.round(progress * 100), [progress]);

  return (
    <aside className="progress-hud" aria-label="Scroll progress">
      <div className="progress-hud__track">
        <div className="progress-hud__fill" style={{ transform: `scaleY(${progress})` }} />
        <div className="progress-hud__racer" style={{ top: `calc(${progress * 100}% - 12px)` }} />
        {SECTION_IDS.map((id) => (
          <div
            key={id}
            className={`progress-hud__checkpoint ${activeSection === id ? "is-active" : ""}`}
            style={{ top: `${CHECKPOINTS[SECTION_IDS.indexOf(id)]}%` }}
          />
        ))}
      </div>
      <p className="progress-hud__label">{percent}%</p>
    </aside>
  );
}
