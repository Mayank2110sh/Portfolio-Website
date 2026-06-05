import { motion } from "framer-motion";
import { socialLinks } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { SocialIcon } from "./SocialIcon";

export function SocialLinks() {
  return (
    <section className="section connect" id="connect">
      <DirectionalReveal>
        <p className="section__label">
        03 — Connect
        </p>
        <h2 className="section__title">
        Find Me <span>Online</span>
        </h2>
      </DirectionalReveal>
      <div className="connect__icons">
        {socialLinks.map((link, index) => (
          <DirectionalReveal key={link.label} delay={index * 0.07}>
            <motion.a
            key={link.label}
            href={link.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <SocialIcon icon={link.icon} />
            <span className="social-link__label">{link.label}</span>
            </motion.a>
          </DirectionalReveal>
        ))}
      </div>
    </section>
  );
}
