import { site } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";

export function About() {
  return (
    <section className="section" id="about">
      <DirectionalReveal>
        <p className="section__label">
        01 — Profile
        </p>
        <h2 className="section__title">
        About <span>Me</span>
        </h2>
        <p className="about__text">
        {site.about}
        </p>
      </DirectionalReveal>
    </section>
  );
}
