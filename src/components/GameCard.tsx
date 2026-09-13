import type { Game } from "../data/portfolio";
import { DirectionalReveal } from "./DirectionalReveal";
import { playClickSound } from "../utils/audio";

interface GameCardProps {
  game: Game;
  index: number;
}

export function GameCard({ game, index }: GameCardProps) {
  return (
    <DirectionalReveal className="game-card__reveal" delay={index * 0.05}>
      <article className="game-card">
        <div className="game-card__media-box">
          <img
            className="game-card__image"
            src={game.image}
            alt={`${game.title} screenshot`}
            loading="lazy"
          />
          <div className="game-card__media-overlay" />
          <span className="game-card__badge-pill">{game.badge}</span>
        </div>

        <div className="game-card__body">
          <div className="game-card__meta">
            <span className="game-card__role">{game.role}</span>
          </div>

          <h3 className="game-card__title">{game.title}</h3>

          <p className="game-card__desc">{game.description}</p>

          <div className="game-card__highlight-box">
            <span className="game-card__highlight-dot" />
            <span className="game-card__highlight-text">{game.highlights}</span>
          </div>

          <ul className="game-card__tags" aria-label="Technologies used">
            {game.tags.map((tag) => (
              <li key={tag} className="game-card__tag">
                {tag}
              </li>
            ))}
          </ul>

          <div className="game-card__footer">
            {game.links.length > 0 ? (
              game.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="game-card__btn game-card__btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound(750, 0.03)}
                >
                  <svg
                    className="game-card__btn-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 01-.61-1.42V3.234c0-.53.22-1.04.609-1.42zm11.603 11.603l2.253-2.253a1.995 1.995 0 000-2.828l-2.253-2.253-2.121 2.121 2.121 2.121 2.121 2.121-2.121 2.121 2.121 2.121zM5.03 23.606l10.18-10.18-2.12-2.12L2.91 21.486c.47.47 1.13.73 1.81.73.11 0 .21-.01.31-.03v-.58zm0-23.212c-.1 0-.2.01-.31.03-.68 0-1.34.26-1.81.73l10.18 10.18 2.12-2.12L5.03.394z" />
                  </svg>
                  <span>{link.label}</span>
                  <span className="game-card__arrow">↗</span>
                </a>
              ))
            ) : (
              <span className="game-card__status-tag">Engine Architecture Demo</span>
            )}
          </div>
        </div>
      </article>
    </DirectionalReveal>
  );
}
