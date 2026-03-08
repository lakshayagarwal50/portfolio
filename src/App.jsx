import { useState, useEffect } from "react";
import {
  userData,
  experienceData,
  educationData,
  skills,
  skillCategories,
  projects,
  awardsData,
} from "./data/data.js"; // Updated path

// Layout Components
import BackgroundEffects from "./components/Layout/BackgroundEffects";
import FloatingSymbols from "./components/Layout/FloatingSymbols";

// Page Section Components
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("programming");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {/* Layout components live outside the main content flow */}
      <BackgroundEffects />
      <FloatingSymbols />

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero userData={userData} isLoaded={isLoaded} />
        <About userData={userData} isLoaded={isLoaded} />
        <Experience experienceData={experienceData} isLoaded={isLoaded} />
        <Education educationData={educationData} isLoaded={isLoaded} />
        <Skills
          skills={skills}
          skillCategories={skillCategories}
          isLoaded={isLoaded}
          activeSkillCategory={activeSkillCategory}
          setActiveSkillCategory={setActiveSkillCategory}
        />
        <Projects
          projects={projects}
          githubUrl={userData.social.github}
          isLoaded={isLoaded}
        />
        <Awards awardsData={awardsData} isLoaded={isLoaded} />
        <Contact userData={userData} isLoaded={isLoaded} />
      </div>
    </div>
  );
}

export default App;






