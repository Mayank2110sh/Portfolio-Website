export interface GameLink {
  label: string;
  url: string;
}

export interface Game {
  title: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
  links: GameLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "itch" | "discord" | "steam" | "youtube" | "twitter";
}

export const site = {
  name: "Mayank Sharma",
  tagline: "Game Developer",
  about:
    "Passionate and innovative game developer with 3+ years of experience in the gaming industry. Proficient in C#, Unity, Construct3, Multiplayer games and other Game Engines. Successfully delivered more than 15 games across various platforms and 2 Games on Google Play Store.",
  email: "mayank2110sh@gmail.com",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Connect", href: "#connect" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mayank-sharma-730404234/",
    icon: "linkedin",
  },
];

export const games: Game[] = [
  {
    title: "Dino Chase",
    role: "Game Developer",
    description:
      "Race through prehistoric landscapes as a baby dinosaur fleeing a relentless T-Rex. Collect dinosaur eggs, mystery boxes, and coins while evading obstacles like rocks, mud, and flying meteors. Customise your dino's appearance and unlock new species across four unique worlds.",
    image: "/games/dino-chase.png",
    tags: ["Unity", "C#", "Infinite runner"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.arrenmarketing.dinochase&hl=en" },
    ],
  },
  {
    title: "Find Out Capybara Game",
    role: "Game Developer",
    description:
      "The ultimate hidden object adventure! Explore cozy, aesthetic scenes, zoom in to spot hidden capybaras, and solve brain-boosting puzzles with a relaxing, cute ASMR game vibe.",
    image: "/games/capybara.png",
    tags: ["Unity", "C#", "Casual"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.auragames.detective.spot.capybara&hl=pt" },
    ],
  },
];

