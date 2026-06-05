import { motion } from "framer-motion";
import { site } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { GlitchLogo } from "./GlitchLogo";

export function Hero() {
  const scrollToGames = () => {
    document.getElementById("games")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__scanlines" aria-hidden="true" />
      <DirectionalReveal className="hero__content">
        <GlitchLogo text={site.name} />
        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          {site.tagline}
        </motion.p>
        <motion.button
          type="button"
          className="hero__cta"
          onClick={scrollToGames}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          View my work
          <span aria-hidden="true">↓</span>
        </motion.button>
      </DirectionalReveal>
    </section>
  );
}
