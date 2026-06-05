import { About } from "./components/About";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CursorFx } from "./components/CursorFx";
import { Footer } from "./components/Footer";
import { GamesSection } from "./components/GamesSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollProgressHud } from "./components/ScrollProgressHud";
import { SocialLinks } from "./components/SocialLinks";
import "./styles/globals.css";

function App() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgressHud />
      <CursorFx />
      <Navbar />
      <main>
        <Hero />
        <About />
        <GamesSection />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}

export default App;
