# Game cover images

Add your game screenshots here (recommended **16:9**, ~800×450px).

## Steps

1. Export or capture a cover image for each game (`.jpg`, `.png`, or `.webp`).
2. Place files in this folder, e.g. `neon-drift.jpg`.
3. Update `image` paths in [`src/data/portfolio.ts`](../../src/data/portfolio.ts):

```ts
image: "/games/neon-drift.jpg",
```

4. Remove the placeholder `.svg` files when you add real images.

Placeholder SVGs are included so the site works before you add real assets.
