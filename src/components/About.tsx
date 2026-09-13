import { site, skillsClusters } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";

export function About() {
  return (
    <section className="section about" id="about">
      <DirectionalReveal>
        <p className="section__label">01 — Professional Profile</p>
        <h2 className="section__title">
          Engineered for <span>Gameplay & Scale</span>
        </h2>

        <div className="about__grid">
          <div className="about__text-col">
            <p className="about__lead-text">{site.about}</p>

            <div className="about__key-points">
              <div className="about__point">
                <span className="about__point-icon">⚡</span>
                <div>
                  <strong>Live Platform Ownership:</strong> Platform integration and multiplayer stability for Citta Lite&apos;s 20+ game ecosystem.
                </div>
              </div>

              <div className="about__point">
                <span className="about__point-icon">🎯</span>
                <div>
                  <strong>Rapid 7-Day Solo Prototyping:</strong> Built and shipped <em>Perfect Landing</em> solo in a 1-week hackathon with AI-assisted workflows and full SDK monetization.
                </div>
              </div>

              <div className="about__point">
                <span className="about__point-icon">🛡️</span>
                <div>
                  <strong>Monetization & Stability:</strong> Hands-on experience resolving critical ANRs, crashes, and ad policy violations while optimizing revenue.
                </div>
              </div>
            </div>
          </div>

          <div className="about__skills-col">
            <h3 className="about__skills-heading">Technical Stack & Core Domains</h3>
            <div className="about__clusters">
              {skillsClusters.map((cluster) => (
                <div key={cluster.category} className="about__cluster">
                  <h4 className="about__cluster-title">{cluster.category}</h4>
                  <div className="about__tags">
                    {cluster.skills.map((skill) => (
                      <span key={skill} className="about__tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DirectionalReveal>
    </section>
  );
}

