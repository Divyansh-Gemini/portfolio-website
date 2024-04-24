import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection/ProjectsSection";
import SkillsSection from "../components/Sections/SkillsSection/SkillsSection";
import CertificationsSection from "../components/Sections/CertificationsSection/CertificationsSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import AchievementsSection from "../components/Sections/AchievementsSection/AchievementsSection";

const HomePage = () => {
  animateScroll.scrollToTop();

  useEffect(() => {
    document.title = "Divyansh Gemini | Home";
  }, []);

  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
