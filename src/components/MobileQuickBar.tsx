import { useEffect, useState } from "react";
import { socialLinks } from "../data/portfolio";
import { playClickSound } from "../utils/audio";

export function MobileQuickBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 380);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const linkedIn = socialLinks.find((l) => l.icon === "linkedin");
  const email = socialLinks.find((l) => l.icon === "email");

  return (
    <aside className="mobile-quick-bar hide-desktop" aria-label="Quick Mobile Actions">
      <a
        href="/Mayank_Sharma_Resume.pdf"
        download="Mayank_Sharma_Resume.pdf"
        className="mobile-quick-bar__btn mobile-quick-bar__btn--primary"
        onClick={() => playClickSound(850, 0.04)}
        aria-label="Download Resume"
      >
        <svg className="mobile-quick-bar__icon" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span>Resume</span>
      </a>

      {linkedIn && (
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-quick-bar__btn"
          onClick={() => playClickSound(750, 0.03)}
          aria-label="LinkedIn Profile"
        >
          <span>LinkedIn</span>
        </a>
      )}

      {email && (
        <a
          href={email.url}
          className="mobile-quick-bar__btn"
          onClick={() => playClickSound(750, 0.03)}
          aria-label="Email Mayank Sharma"
        >
          <span>Email</span>
        </a>
      )}
    </aside>
  );
}
