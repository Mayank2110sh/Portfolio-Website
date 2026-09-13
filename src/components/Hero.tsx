import { motion } from "framer-motion";
import { site } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { GlitchLogo } from "./GlitchLogo";
import { CountUp } from "./CountUp";
import { playClickSound } from "../utils/audio";

export function Hero() {
  const scrollToSection = (id: string) => {
    playClickSound(650, 0.03);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__background-glow" aria-hidden="true" />

      <div className="hero__container">
        <DirectionalReveal>
          <div className="hero__status-badge">
            <span className="hero__status-dot" />
            <span className="hero__status-text">
              SDE-2 UNITY DEVELOPER • 4+ YEARS COMMERCIAL XP
            </span>
          </div>

          <div className="hero__name-box">
            <GlitchLogo text={site.name} />
          </div>

          <p className="hero__role-tagline">
            {site.tagline}
          </p>

          <p className="hero__summary">
            Leading gameplay development and real-time multiplayer platform integration on{" "}
            <strong>Citta Lite (20+ games)</strong> at Sharpenminds Technologies. Shipped <strong>25+ games</strong> across Android, iOS & WebGL, with <strong>3+ published on Google Play</strong>, and solo-built <em>Perfect Landing</em> in 1 week.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="hero__btn hero__btn--primary"
              onClick={() => scrollToSection("games")}
            >
              <span>Explore Games</span>
              <span className="hero__btn-arrow">↓</span>
            </button>

            <button
              type="button"
              className="hero__btn hero__btn--secondary"
              onClick={() => scrollToSection("architecture")}
            >
              <span>Game Architecture</span>
              <span className="hero__btn-arrow">→</span>
            </button>

            <a
              href="/Mayank_Sharma_Resume.pdf"
              download="Mayank_Sharma_Resume.pdf"
              className="hero__btn hero__btn--resume"
              onClick={() => playClickSound(800, 0.04)}
            >
              <svg
                className="hero__resume-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>

          <motion.div
            className="hero__stats-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {site.stats.map((stat) => (
              <div key={stat.label} className="hero__stat-card">
                <span className="hero__stat-val">
                  <CountUp value={stat.value} />
                </span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </DirectionalReveal>
      </div>
    </section>
  );
}
