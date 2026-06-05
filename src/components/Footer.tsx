import { site } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {site.name}. Built with React + Vite.
      </p>
      <p style={{ marginTop: "0.5rem" }}>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </footer>
  );
}
