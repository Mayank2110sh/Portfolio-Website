import { site } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";

const skills = [
  { label: "Unity", icon: "U" },
  { label: "C#", icon: "C#" },
  { label: "Firebase Firestore", icon: "Fb" },
  { label: "Construct 3", icon: "C3" },
  { label: "Photon PUN", icon: "Pn" },
  { label: "Socket.io", icon: "Io" },
  { label: "Ads", icon: "Ad" },
  { label: "In-App Purchases", icon: "IAP" },
];

export function About() {
  return (
    <section className="section about" id="about">
      <DirectionalReveal>
        <p className="section__label">01 - Profile</p>
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__layout">
          <p className="about__text">{site.about}</p>
          <div className="about__skills" aria-label="Skills">
            {skills.map((skill) => (
              <span className="about__skill" key={skill.label}>
                <span className="about__skill-icon" aria-hidden="true">
                  {skill.icon}
                </span>
                <span>{skill.label}</span>
              </span>
            ))}
          </div>
        </div>
      </DirectionalReveal>
    </section>
  );
}
