import React, { useEffect } from "react";
import HeroSection from "../Sections/HeroSection/HeroSection";
import ProjectsSection from "../Sections/ProjectsSection/ProjectsSection";
import SkillsSection from "../Sections/SkillsSection/SkillsSection";
import CertificationsSection from "../Sections/CertificationsSection/CertificationsSection";
import ContactSection from "../Sections/ContactSection/ContactSection";
import { animateScroll } from "react-scroll";
import AchievementsSection from "../Sections/AchievementsSection/AchievementsSection";

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
