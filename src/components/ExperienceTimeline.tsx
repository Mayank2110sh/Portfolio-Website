import { experienceData } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";

export function ExperienceTimeline() {
  return (
    <section className="section experience" id="experience">
      <DirectionalReveal>
        <p className="section__label">04 — Career Milestones</p>
        <h2 className="section__title">
          Commercial <span>Experience</span>
        </h2>
        <p className="section__subtitle">
          Proven track record leading gameplay teams, meeting liveops deadlines, and shipping titles with commercial polish.
        </p>
      </DirectionalReveal>

      <div className="timeline">
        {experienceData.map((item, index) => (
          <DirectionalReveal key={item.company} delay={index * 0.1}>
            <div className={`timeline__card ${item.type === "work" ? "timeline__card--work" : "timeline__card--edu"}`}>
              <div className="timeline__header">
                <div className="timeline__role-group">
                  <div className="timeline__badge-row">
                    <span className="timeline__type-badge">
                      {item.type === "work" ? "COMMERCIAL ROLE" : "EDUCATION"}
                    </span>
                    <span className="timeline__period">{item.period}</span>
                  </div>
                  <h3 className="timeline__role">{item.role}</h3>
                  <h4 className="timeline__company">{item.company}</h4>
                </div>
              </div>

              {item.description && (
                <p className="timeline__description">{item.description}</p>
              )}

              <ul className="timeline__highlights">
                {item.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="timeline__highlight-item">
                    <span className="timeline__bullet">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </DirectionalReveal>
        ))}
      </div>
    </section>
  );
}
