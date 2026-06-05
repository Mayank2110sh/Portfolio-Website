import { games } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { GameCard } from "./GameCard";

export function GamesSection() {
  return (
    <section className="section" id="games">
      <DirectionalReveal>
        <p className="section__label">
          02 — Portfolio
        </p>
        <h2 className="section__title">
          Games I&apos;ve <span>Worked On</span>
        </h2>
      </DirectionalReveal>
      <div className="games__grid">
        {games.map((game, index) => (
          <GameCard key={game.title} game={game} index={index} />
        ))}
      </div>
    </section>
  );
}
