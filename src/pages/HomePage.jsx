import React from "react";
import HeroSection from "../components/Sections/HeroSection";
import ExperienceSection from "../components/Sections/ExperienceSection";
import EducationSection from "../components/Sections/EducationSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import AboutMeSection from "../components/Sections/AboutMeSection";
import SkillsSection from "../components/Sections/SkillsSection";
import ContactSection from "../components/Sections/ContactSection";

const HomePage = () => {
  return (
    <main className="text-justify w-3/4 mx-auto">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
