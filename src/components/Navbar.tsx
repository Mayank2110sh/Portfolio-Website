import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, site } from "../data/portfolio";

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
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <motion.a
        href="#home"
        className={`navbar__brand ${scrolled ? "navbar__brand--charged" : ""}`}
        whileHover={{ scale: 1.05, rotate: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="navbar__brand-core">{site.name.split(" ")[0]}</span>
        <span className="navbar__brand-pulse" aria-hidden="true" />
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

      <nav>
        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
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
      </nav>
    </header>
  );
}
