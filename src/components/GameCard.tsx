import type { Game } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";

interface GameCardProps {
  game: Game;
  index: number;
}

export function GameCard({ game, index }: GameCardProps) {
  return (
    <DirectionalReveal className="game-card__reveal" delay={index * 0.06}>
      <article className="game-card">
        <div className="game-card__image-wrap">
          <img
            className="game-card__image"
            src={game.image}
            alt={`${game.title} cover`}
            loading="lazy"
          />
        </div>
        <div className="game-card__body">
          <p className="game-card__role">{game.role}</p>
          <h3 className="game-card__title">{game.title}</h3>
          <p className="game-card__desc">{game.description}</p>
          <ul className="game-card__tags">
            {game.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="game-card__links">
            {game.links.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                className={`game-card__link ${i > 0 ? "game-card__link--secondary" : ""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </article>
    </DirectionalReveal>
  );
}
