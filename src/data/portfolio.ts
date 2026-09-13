export interface GameLink {
  label: string;
  url: string;
}

export interface Game {
  id: string;
  title: string;
  role: string;
  badge: string;
  category: "all" | "multiplayer" | "google-play" | "hackathon";
  description: string;
  image: string;
  tags: string[];
  links: GameLink[];
  highlights: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "itch" | "discord" | "steam" | "youtube" | "twitter" | "email" | "phone";
}

export interface ArchitecturePillar {
  title: string;
  iconTag: string;
  tech: string[];
  summary: string;
  details: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: "work" | "education";
  description?: string;
  highlights: string[];
}

export const site = {
  name: "Mayank Sharma",
  role: "SDE-2, Unity Developer",
  seniority: "Senior Game Developer",
  tagline: "SDE-2 Unity Developer • Mobile & Multiplayer Game Architect",
  about:
    "SDE-2 Unity Developer with 4+ years of experience engineering and shipping commercial mobile and multiplayer games across Android, iOS, and WebGL. Currently leading gameplay development and platform integration for Citta Lite (a live multiplayer platform hosting 20+ games). Shipped 25+ games overall with 3+ published on Google Play Store, solo-built and shipped Perfect Landing in a 1-week AI-assisted hackathon, and experienced in mentoring engineering teams while upholding a 95%+ on-time delivery record.",
  location: "Palanpur, Gujarat, India",
  email: "mayank2110sh@gmail.com",
  portfolioUrl: "https://mayank-sharma-gamedev.vercel.app/",
  resumeUrl: "/Mayank_Sharma_Resume.pdf",
  stats: [
    { value: "25+", label: "Games Delivered" },
    { value: "3+", label: "Google Play Store Titles" },
    { value: "4+", label: "Years Commercial Exp." },
    { value: "95%+", label: "On-Time Shipping" },
    { value: "4", label: "Devs Mentored" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Connect", href: "#connect" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mayank-sharma-730404234/",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: "mailto:mayank2110sh@gmail.com",
    icon: "email",
  },
];

export const games: Game[] = [
  {
    id: "perfect-landing",
    title: "Perfect Landing",
    role: "Solo Game Developer",
    badge: "Google Play • Hackathon Solo",
    category: "hackathon",
    description:
      "Solo-built and published a complete mobile title within a 1-week internal hackathon utilizing AI-assisted development workflows. Implemented tight physics-driven mechanics, full Firebase SDK integration (Analytics, Crashlytics, Remote Config), and compliant ad-monetization.",
    image: "/games/perfect-landing.png",
    tags: ["Unity 3D", "C#", "Firebase SDK", "AdMob / Ads", "Physics", "AI-Assisted"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.futureoath.perfectlanding",
      },
    ],
    highlights: "Solo-built in 7 days • Firebase SDK & Ad-monetization • Google Play release",
  },
  {
    id: "citta-lite",
    title: "Citta Lite",
    role: "SDE-2, Unity Developer",
    badge: "Live Multiplayer • 20+ Games Platform",
    category: "multiplayer",
    description:
      "Live multiplayer gaming platform featuring 20+ games across diverse genres including Tic-Tac-Toe, Ludo, Snake & Ladders, Carrom, Pool, Football, Breezy Blocks, Block Party, and Blackjack. Designed and integrated 10+ new games, engineered real-time multiplayer via Socket.io & REST APIs, and improved monetization while maintaining strict ad policy compliance.",
    image: "/games/citta-lite.png",
    tags: ["Unity 2D/3D", "C#", "Socket.io", "Real-Time Multiplayer", "REST APIs", "LiveOps"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.cittagames.lite&hl=en_IN",
      },
    ],
    highlights: "20+ games ecosystem • Real-time Socket.io state sync • Mentored 4 devs",
  },
  {
    id: "aevin",
    title: "AEVIN",
    role: "Game Developer",
    badge: "Multiplayer Puzzle Adventure",
    category: "multiplayer",
    description:
      "Multiplayer isometric puzzle adventure game built from scratch using Unity, C#, and Photon PUN. Engineered synchronized multi-room game state, custom transition animations, interactive isometric grid mechanics, and dynamic level traversal.",
    image: "/games/aevin.svg",
    tags: ["Unity 3D", "C#", "Photon PUN", "Multiplayer", "Custom Shaders", "Puzzle"],
    links: [],
    highlights: "Built from scratch with Photon PUN • Custom transition animations",
  },
  {
    id: "dino-chase",
    title: "Dino Chase",
    role: "Game Developer",
    badge: "Google Play • Action Runner",
    category: "google-play",
    description:
      "High-speed endless runner where a baby dinosaur flees a relentless T-Rex across 4 prehistoric worlds. Features procedural obstacle generation, object pooling, dinosaur customization skins, collectible mystery boxes, and dynamic coin economy.",
    image: "/games/dino-chase.png",
    tags: ["Unity", "C#", "Endless Runner", "Object Pooling", "Progression"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.arrenmarketing.dinochase&hl=en",
      },
    ],
    highlights: "Procedural infinite runner • Customization & shop economy",
  },
  {
    id: "capybara-game",
    title: "Find Out Capybara Game",
    role: "Game Developer",
    badge: "Google Play • Cozy Puzzle",
    category: "google-play",
    description:
      "Cozy hidden-object puzzle game with aesthetic illustrated worlds and relaxing ASMR audio. Features smooth pinch-and-zoom camera controls, offline save progression, brain-boosting object detection logic, and responsive level-based unlocks.",
    image: "/games/capybara.png",
    tags: ["Unity", "C#", "Hidden Object", "Offline Mode", "UI/UX", "Casual"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.auragames.detective.spot.capybara&hl=pt",
      },
    ],
    highlights: "Offline progression • Camera zoom gestures • Polished UI/UX",
  },
  {
    id: "tapshot",
    title: "TapShot",
    role: "Unity Developer",
    badge: "Google Play • Physics Arcade",
    category: "google-play",
    description:
      "Physics-driven arcade sports game. Overhauled ad placement strategy to boost retention and monetization, introduced an engaging new game mode with checkpoints and tiered reward mechanics, and added dynamic interactive obstacles.",
    image: "/games/tapshot.png",
    tags: ["Unity 2D", "C#", "Physics", "Ad Strategy", "Checkpoints & Rewards"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.tapshot.android&hl=en_IN",
      },
    ],
    highlights: "Optimized ad placement strategy • New checkpoint game mode",
  },
];

export const architecturePillars: ArchitecturePillar[] = [
  {
    title: "Multiplayer & Real-Time Netcode",
    iconTag: "NET",
    tech: ["Socket.io", "Photon PUN", "REST APIs", "WebSockets"],
    summary:
      "Synchronized state architecture for live multiplayer games, room matchmaking, authoritative state sync, and low-latency payload serialization.",
    details: [
      "Engineered real-time multiplayer for 20+ games on Citta Lite using Socket.io and REST APIs.",
      "Built multi-client room sync and state arbitration in AEVIN from scratch with Photon PUN.",
      "Implemented robust disconnect handling, reconnect queues, and tick-based event interpolation.",
    ],
  },
  {
    title: "Monetization & SDK Pipelines",
    iconTag: "SDK",
    tech: ["Firebase", "AdMob", "Unity Ads", "Unity IAP", "Google Play Services"],
    summary:
      "End-to-end integration of ad mediation, in-app purchases, live telemetry, and regulatory ad-policy compliance.",
    details: [
      "Deep expertise resolving Google Play ad policy violations and optimizing ad placement strategies across multiple titles.",
      "Full Firebase suite integration: Crashlytics bug diagnosis, Remote Config A/B testing, and Analytics telemetry.",
      "Secure client-side and server-validated In-App Purchases (IAP) with receipt validation.",
    ],
  },
  {
    title: "Performance, ANRs & Profiling",
    iconTag: "OPT",
    tech: ["Unity Profiler", "Memory Profiler", "Addressables", "ScriptableObjects"],
    summary:
      "Hands-on diagnosis and elimination of ANRs, memory bloat, GC spikes, and draw-call bottlenecks on mobile hardware.",
    details: [
      "Monitored and resolved critical ANRs, memory leaks, and native crashes across live production games.",
      "Leveraged Addressables and ScriptableObjects to modularize game assets, cutting build sizes and memory footprint.",
      "Designed zero-allocation object pools and sprite batching to ensure stable 60 FPS mobile performance.",
    ],
  },
  {
    title: "AI-Assisted Game Production",
    iconTag: "AI+",
    tech: ["AI Integration (MCP)", "LLM Workflows", "Custom Editor Scripting", "Rapid Prototyping"],
    summary:
      "Pioneering AI-assisted development workflows to rapidly prototype, build, and ship complete commercial titles.",
    details: [
      "Solo-built and published Perfect Landing on Google Play Store in just 7 days during an internal hackathon.",
      "Integrated AI-assisted tools across engineering workflows, drastically accelerating feature delivery cycles.",
      "Developed custom Unity Editor scripts and internal utility packages for streamlined team workflows.",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Sharpenminds Technologies Pvt. Ltd.",
    role: "SDE-2, Unity Developer",
    period: "Aug 2025 - Present",
    type: "work",
    description:
      "Leading game development and platform integration for Citta Lite, a live multiplayer gaming platform featuring 20+ games.",
    highlights: [
      "Develop and maintain Citta Lite, featuring 20+ games across genres (Ludo, Carrom, Pool, Football, Snake & Ladders, Tic-Tac-Toe, Breezy Blocks, Block Party, Blackjack).",
      "Designed, built, and integrated 10+ new games into the platform, ensuring polished gameplay and stable releases.",
      "Implement and maintain multiplayer functionality using Socket.io and REST API integrations.",
      "Lead and mentor a team of 4 developers, providing technical guidance, code reviews, and debugging support.",
      "Monitor and resolve ANRs, crashes, and performance issues to improve overall platform stability.",
      "Worked across multiple games beyond Citta Lite to improve ad placements and resolve ad policy violations, boosting monetization while maintaining compliance.",
      "Solo-built and published Perfect Landing in a 1-week hackathon using AI-assisted workflows with full Firebase & ad SDK integration.",
      "Maintain a 95%+ on-time project delivery rate.",
    ],
  },
  {
    company: "Gamecrio Studios Pvt. Ltd.",
    role: "Game Developer",
    period: "Jan 2023 - Jul 2025",
    type: "work",
    description:
      "Delivered 15+ games across mobile platforms, including 3 titles published directly on the Google Play Store.",
    highlights: [
      "Developed and shipped 15+ games across multiple platforms, including 3 titles published on Google Play Store.",
      "Built AEVIN, a multiplayer puzzle game, from scratch using Unity, C#, and Photon PUN with custom transition animations.",
      "Developed Dino Chase, an endless runner featuring procedural terrain, collectible mystery boxes, and dino skins.",
      "Developed Find Out Capybara Game, a hidden-object title with offline mode and level-based progression.",
      "Collaborated with cross-functional teams (design, 3D art, audio, QA) to ship market-ready experiences.",
    ],
  },
  {
    company: "Government Engineering College, Modasa",
    role: "B.E. in Computer Engineering",
    period: "2019 - 2023",
    type: "education",
    description: "Bachelor of Engineering in Computer Engineering. Graduated with 8.5 CGPA.",
    highlights: [
      "Strong foundation in algorithms, computer graphics, data structures, and software engineering.",
      "Academic CGPA: 8.5 / 10.",
    ],
  },
];

export const skillsClusters = [
  {
    category: "Languages & Engines",
    skills: ["C#", "Unity (2D & 3D)", "Construct 3"],
  },
  {
    category: "Unity Architecture",
    skills: [
      "UI/UX & Canvas",
      "Animation & Mechanim",
      "2D/3D Physics",
      "Addressables",
      "ScriptableObjects",
      "Custom Packages",
      "Editor Scripting",
      "Playable Ads",
    ],
  },
  {
    category: "Multiplayer & Network",
    skills: ["Socket.io", "Photon PUN", "REST APIs", "Real-Time State Sync", "WebSockets"],
  },
  {
    category: "SDKs & Monetization",
    skills: [
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Remote Config",
      "Firestore",
      "AdMob",
      "Unity Ads",
      "Ad Policy Compliance",
      "Unity IAP",
      "Google Play Services",
    ],
  },
  {
    category: "Tools & AI Workflows",
    skills: [
      "AI Integration (MCP)",
      "Git / GitHub / GitLab",
      "Visual Studio",
      "Blender",
      "Photopea",
      "Memory Profiler",
    ],
  },
];
