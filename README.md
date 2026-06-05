# Gaming Portfolio

A responsive, gaming-themed portfolio site built with **Vite**, **React**, and **TypeScript**. Features a Valorant-inspired glitch name reveal, game showcase cards, and social links.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize your content

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts):

| Field | What to change |
|-------|----------------|
| `site.name` | Your display name (shown in glitch hero) |
| `site.tagline` | Subtitle under your name |
| `site.about` | Bio paragraph |
| `site.email` | Contact email in footer |
| `socialLinks` | LinkedIn, GitHub, itch.io, etc. |
| `games` | Titles, roles, descriptions, tags, and links |

### Add a new game

1. Add a cover image to [`public/games/`](public/games/) (16:9, ~800×450px).
2. Append an entry to the `games` array in `portfolio.ts`:

```ts
{
  title: "My Game",
  role: "Gameplay Programmer",
  description: "One-line pitch.",
  image: "/games/my-game.jpg",
  tags: ["Unity", "C#"],
  links: [
    { label: "Play", url: "https://itch.io/your-game" },
  ],
},
```

See [`public/games/README.md`](public/games/README.md) for image guidelines.

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Deploy to Vercel

1. Push this project to a **GitHub** repository.
2. Sign in at [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel detects Vite automatically:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. Every push to `main` updates production.

### First-time Git setup

```bash
git init
git add .
git commit -m "Add gaming portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gaming-portfolio.git
git push -u origin main
```

Then connect the repo in the Vercel dashboard.

### Custom domain (optional)

Vercel → Project → **Settings** → **Domains** → add your domain and follow DNS instructions.

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Framer Motion](https://www.framer.com/motion/) for scroll animations
- CSS glitch effect (no video assets)
- Hosted on [Vercel](https://vercel.com)

## Project structure

```
src/
  components/     UI sections
  data/           portfolio.ts — edit your content here
  styles/         globals.css, glitch.css
public/
  games/          Game cover images
```

## License

MIT — use freely for your personal portfolio.
