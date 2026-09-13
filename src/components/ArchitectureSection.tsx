import { useState } from "react";
import { architecturePillars } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { playClickSound } from "../utils/audio";

export function ArchitectureSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activePillar = architecturePillars[activeIdx];

  return (
    <section className="section architecture" id="architecture">
      <DirectionalReveal>
        <p className="section__label">03 — Engineering Standards</p>
        <h2 className="section__title">
          Game Systems & <span>Architecture</span>
        </h2>
        <p className="section__subtitle">
          Commercial games require rock-solid netcode, memory discipline, crash-free stability, and strict monetization compliance. Here is how I architect scalable game systems.
        </p>
      </DirectionalReveal>

      <div className="architecture__layout">
        <div className="architecture__tabs">
          {architecturePillars.map((pillar, idx) => (
            <button
              key={pillar.title}
              type="button"
              className={`architecture__tab ${activeIdx === idx ? "is-active" : ""}`}
              onClick={() => {
                setActiveIdx(idx);
                playClickSound(700, 0.03);
              }}
            >
              <span className="architecture__tab-tag">{pillar.iconTag}</span>
              <span className="architecture__tab-title">{pillar.title}</span>
              <span className="architecture__tab-arrow">→</span>
            </button>
          ))}
        </div>

        <div className="architecture__card">
          <div className="architecture__card-header">
            <div className="architecture__card-title-group">
              <span className="architecture__card-tag">{activePillar.iconTag}</span>
              <h3 className="architecture__card-title">{activePillar.title}</h3>
            </div>
            <div className="architecture__card-tech">
              {activePillar.tech.map((t) => (
                <span key={t} className="architecture__tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="architecture__card-summary">{activePillar.summary}</p>

          <div className="architecture__card-details">
            <h4 className="architecture__details-heading">Key Implementation Standards:</h4>
            <ul className="architecture__details-list">
              {activePillar.details.map((detail, dIdx) => (
                <li key={dIdx} className="architecture__details-item">
                  <span className="architecture__check-icon">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
