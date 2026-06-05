import "../styles/glitch.css";

interface GlitchLogoProps {
  text: string;
}

export function GlitchLogo({ text }: GlitchLogoProps) {
  return (
    <div className="glitch" data-text={text} aria-label={text}>
      <span className="glitch__layer glitch__red" aria-hidden="true">
        {text}
      </span>
      <span className="glitch__layer glitch__cyan" aria-hidden="true">
        {text}
      </span>
      <span className="glitch__layer glitch__main">{text}</span>
    </div>
  );
}
