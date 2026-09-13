import { About } from "./components/About";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { CursorFx } from "./components/CursorFx";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Footer } from "./components/Footer";
import { GameEngineTelemetry } from "./components/GameEngineTelemetry";
import { GamesSection } from "./components/GamesSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollProgressHud } from "./components/ScrollProgressHud";
import { SocialLinks } from "./components/SocialLinks";
import { MobileQuickBar } from "./components/MobileQuickBar";
import "./styles/globals.css";

function App() {
  return (
    <>
      <AnimatedBackground />
      <GameEngineTelemetry />
      <ScrollProgressHud />
      <CursorFx />
      <Navbar />
      <main>
        <Hero />
        <About />
        <GamesSection />
        <ArchitectureSection />
        <ExperienceTimeline />
        <SocialLinks />
      </main>
      <Footer />
      <MobileQuickBar />
    </>
  );
}

export default App;
