import { motion } from "framer-motion";
import { site, socialLinks } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { SocialIcon } from "./SocialIcon";
import { playClickSound } from "../utils/audio";

export function SocialLinks() {
  return (
    <section className="section connect" id="connect">
      <DirectionalReveal>
        <p className="section__label">05 — Direct Inquiries</p>
        <h2 className="section__title">
          Let&apos;s Build <span>Together</span>
        </h2>
        <p className="section__subtitle">
          Open to senior game engineering roles, lead technical challenges, and live multiplayer platform development.
        </p>

        <div className="connect__grid">
          {socialLinks.map((link, index) => (
            <DirectionalReveal key={link.label} delay={index * 0.08}>
              <motion.a
                href={link.url}
                className="connect__card"
                target={link.icon === "linkedin" ? "_blank" : undefined}
                rel={link.icon === "linkedin" ? "noopener noreferrer" : undefined}
                onClick={() => playClickSound(750, 0.03)}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="connect__icon-wrap">
                  <SocialIcon icon={link.icon} />
                </div>
                <div className="connect__info">
                  <span className="connect__label">{link.label}</span>
                  <span className="connect__value">
                    {link.icon === "email" ? site.email : "Mayank Sharma"}
                  </span>
                </div>
                <span className="connect__arrow">↗</span>
              </motion.a>
            </DirectionalReveal>
          ))}
        </div>

        <div className="connect__resume-box">
          <div className="connect__resume-text">
            <h4>Looking for a verified copy of my experience?</h4>
            <p>Download the latest official CV with verified delivery milestones & tech stack.</p>
          </div>
          <a
            href="/Mayank_Sharma_Resume.pdf"
            download="Mayank_Sharma_Resume.pdf"
            className="connect__resume-cta"
            onClick={() => playClickSound(850, 0.04)}
          >
            <svg
              className="connect__download-icon"
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
            <span>Download Official Resume</span>
          </a>
        </div>
      </DirectionalReveal>
    </section>
  );
}
