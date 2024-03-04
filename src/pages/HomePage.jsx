import React from "react";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import ExperienceSection from "../components/Sections/ExperienceSection/ExperienceSection";
import EducationSection from "../components/Sections/EducationSection/EducationSection";
import ProjectsSection from "../components/Sections/ProjectsSection/ProjectsSection";
import AboutMeSection from "../components/Sections/AboutMeSection/AboutMeSection";
import SkillsSection from "../components/Sections/SkillsSection/SkillsSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
