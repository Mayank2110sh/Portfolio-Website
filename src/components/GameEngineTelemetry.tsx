import { useEffect, useState } from "react";
import { toggleSound, playClickSound } from "../utils/audio";

export function GameEngineTelemetry() {
  const [fps, setFps] = useState(60.0);
  const [ms, setMs] = useState(16.6);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    let lastTime = performance.now();
    let frameCount = 0;
    let animId: number;

    const measure = (now: number) => {
      frameCount++;
      if (now - lastTime >= 500) {
        const measuredFps = (frameCount * 1000) / (now - lastTime);
        const clampedFps = Math.min(Math.max(measuredFps, 58.5), 60.5);
        setFps(parseFloat(clampedFps.toFixed(1)));
        setMs(parseFloat((1000 / clampedFps).toFixed(1)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measure);
    };

    animId = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundActive(newState);
  };

  return (
    <aside className="telemetry-hud" aria-label="Game Engine Diagnostics HUD">
      <div className="telemetry-hud__container">
        <div className="telemetry-hud__item telemetry-hud__engine">
          <span className="telemetry-hud__indicator" />
          <span className="telemetry-hud__label">ENGINE:</span>
          <span className="telemetry-hud__val">UNITY 6 / LTS</span>
        </div>

        <div className="telemetry-hud__divider" />

        <div className="telemetry-hud__item telemetry-hud__netcode">
          <span className="telemetry-hud__dot is-live" />
          <span className="telemetry-hud__label">NETCODE:</span>
          <span className="telemetry-hud__val">SOCKET.IO & PUN</span>
        </div>

        <div className="telemetry-hud__divider" />

        <div className="telemetry-hud__item telemetry-hud__fps">
          <span className="telemetry-hud__label">FPS:</span>
          <span className="telemetry-hud__val telemetry-hud__val--amber">{fps}</span>
          <span className="telemetry-hud__sub">({ms}ms)</span>
        </div>

        <div className="telemetry-hud__divider hide-mobile" />

        <div className="telemetry-hud__item telemetry-hud__physics hide-mobile">
          <span className="telemetry-hud__label">PHYSICS:</span>
          <span className="telemetry-hud__val">60Hz TICK</span>
        </div>

        <div className="telemetry-hud__actions">
          <button
            type="button"
            className={`telemetry-hud__sound-btn ${soundActive ? "is-active" : ""}`}
            onClick={handleSoundToggle}
            title={soundActive ? "Mute UI Sound Effects" : "Enable UI Sound Effects"}
            aria-label="Toggle sound effects"
          >
            <span className="telemetry-hud__sound-icon" aria-hidden="true">
              {soundActive ? "🔊" : "🔈"}
            </span>
            <span className="telemetry-hud__sound-text">
              {soundActive ? "SFX ON" : "SFX OFF"}
            </span>
          </button>

          <a
            href="/Mayank_Sharma_Resume.pdf"
            download="Mayank_Sharma_Resume.pdf"
            className="telemetry-hud__resume-btn"
            onClick={() => playClickSound(750, 0.04)}
          >
            <svg
              className="telemetry-hud__download-icon"
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
            <span>RESUME</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
