import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, site } from "../data/portfolio";
import { playClickSound } from "../utils/audio";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    playClickSound(700, 0.03);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <motion.a
        href="#home"
        className="navbar__brand"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="navbar__brand-name">{site.name}</span>
        <span className="navbar__brand-badge">SDE-2</span>
        <span className="navbar__live-chip hide-desktop">🟢 60 FPS • PUN</span>
      </motion.a>

      <button
        type="button"
        className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Mayank_Sharma_Resume.pdf"
          download="Mayank_Sharma_Resume.pdf"
          className="navbar__resume-btn"
          onClick={() => playClickSound(800, 0.04)}
        >
          <svg
            className="navbar__resume-icon"
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
          <span>Resume</span>
        </a>
      </nav>
    </header>
  );
}
