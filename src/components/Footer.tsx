import { site } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <span className="footer__brand">{site.name}</span>
          <span className="footer__role">SDE-2, Unity Developer</span>
        </div>
        <p className="footer__meta">
          © {year} {site.name} • Palanpur, Gujarat, India • Unity 2D/3D & Construct 3
        </p>
        <p className="footer__links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="footer__dot">•</span>
          <a href={site.resumeUrl} download="Mayank_Sharma_Resume.pdf">
            Download Resume (PDF)
          </a>
        </p>
      </div>
    </footer>
  );
}
