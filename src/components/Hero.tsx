import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { GlitchLogo } from "./GlitchLogo";

const dockPosition = {
  top: 124,
  left: 20,
  scale: 0.34,
};

const dockScrollY = 50;
const undockScrollY = 32;

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const logoSlotRef = useRef<HTMLDivElement | null>(null);
  const [logoOrigin, setLogoOrigin] = useState({ top: 0, left: 0, ready: false });
  const [isLogoDocked, setIsLogoDocked] = useState(false);
  const [canAnimateLogo, setCanAnimateLogo] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.38], [1, 0]);

  useLayoutEffect(() => {
    const updateLogoOrigin = () => {
      const rect = logoSlotRef.current?.getBoundingClientRect();

      if (!rect) {
        return;
      }

      setLogoOrigin({
        top: rect.top + window.scrollY,
        left: rect.left,
        ready: true,
      });
    };

    updateLogoOrigin();
    void document.fonts?.ready.then(updateLogoOrigin);
    window.addEventListener("resize", updateLogoOrigin);

    return () => {
      window.removeEventListener("resize", updateLogoOrigin);
    };
  }, []);

  useEffect(() => {
    if (!logoOrigin.ready) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setCanAnimateLogo(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [logoOrigin.ready]);

  useEffect(() => {
    const updateDockedState = () => {
      setIsLogoDocked((isDocked) => {
        if (isDocked) {
          return window.scrollY > undockScrollY;
        }

        return window.scrollY > dockScrollY;
      });
    };

    updateDockedState();
    window.addEventListener("scroll", updateDockedState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateDockedState);
    };
  }, []);

  const scrollToGames = () => {
    document.getElementById("games")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__scanlines" aria-hidden="true" />
      <motion.div
        className="hero__moving-logo"
        animate={
          isLogoDocked
            ? dockPosition
            : {
                top: logoOrigin.top,
                left: logoOrigin.left,
                scale: 1,
              }
        }
        initial={false}
        transition={{
          duration: canAnimateLogo ? 0.42 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ visibility: logoOrigin.ready ? "visible" : "hidden" }}
      >
        <GlitchLogo text={site.name} />
      </motion.div>
      <div className="hero__content">
        <div className="hero__logo-slot" ref={logoSlotRef} aria-hidden="true">
          <GlitchLogo text={site.name} />
        </div>
        <DirectionalReveal>
          <motion.div className="hero__intro" style={{ opacity: heroContentOpacity }}>
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
              <span aria-hidden="true">v</span>
            </motion.button>
          </motion.div>
        </DirectionalReveal>
      </div>
    </section>
  );
}
