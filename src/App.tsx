import "./App.css";
import { useEffect } from "react";

import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { SkillsSection } from "./components/SkillsSection/SkillsSection";
import { Divider } from "./components/Divider/Divider";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";

function App() {
  useEffect(() => {
    document.body.className = "binay-bg";
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
