import { useState } from "react";
import { games, type Game } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { GameCard } from "./GameCard";
import { CountUp } from "./CountUp";
import { playClickSound } from "../utils/audio";

type FilterType = "all" | "google-play" | "multiplayer" | "hackathon";

const FILTERS: { label: string; key: FilterType }[] = [
  { label: "All Titles", key: "all" },
  { label: "Google Play Store", key: "google-play" },
  { label: "Real-Time Multiplayer", key: "multiplayer" },
  { label: "Hackathon Solo Build", key: "hackathon" },
];

export function GamesSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredGames = games.filter((game) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "google-play") {
      return (
        game.category === "google-play" ||
        game.links.some((l) => l.url.includes("play.google.com"))
      );
    }
    if (activeFilter === "multiplayer") {
      return (
        game.category === "multiplayer" ||
        game.tags.some((t) => t.toLowerCase().includes("multiplayer"))
      );
    }
    if (activeFilter === "hackathon") {
      return game.category === "hackathon" || game.id === "perfect-landing";
    }
    return true;
  });

  const handleFilterClick = (key: FilterType) => {
    setActiveFilter(key);
    playClickSound(680, 0.02);
  };

  return (
    <section className="section games" id="games">
      <DirectionalReveal>
        <p className="section__label">02 — Commercial Portfolio</p>
        <div className="games__header-wrap">
          <div>
            <h2 className="section__title">
              Featured <span>Games & Releases</span>
            </h2>
            <p className="section__subtitle">
              Shipped titles spanning live multiplayer platforms, procedural action runners, hidden object adventures, and rapid-prototyped hackathon winners.
            </p>
          </div>

          <div className="games__stats-pill">
            <span className="games__stats-badge">
              <CountUp value="25+" /> SHIPPED
            </span>
            <span className="games__stats-badge">
              <CountUp value="3+" /> STORE APPS
            </span>
            <span className="games__stats-badge">
              <CountUp value="20+" /> CITTA LITE
            </span>
          </div>
        </div>

        <div className="games__filter-bar" role="tablist" aria-label="Game categories">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={activeFilter === f.key}
              className={`games__filter-btn ${activeFilter === f.key ? "is-active" : ""}`}
              onClick={() => handleFilterClick(f.key)}
            >
              {f.label}
              {f.key === "all" && <span className="games__filter-count">({games.length})</span>}
            </button>
          ))}
        </div>
      </DirectionalReveal>

      <div className="games__swipe-hint hide-desktop">
        <span>◀ SWIPE TITLES HORIZONTALLY ▶</span>
      </div>

      <div className="games__grid">
        {filteredGames.map((game: Game, index: number) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </section>
  );
}
