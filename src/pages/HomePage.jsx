import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection";
import SkillsSection from "../sections/SkillsSection/SkillsSection";
import CertificationsSection from "../sections/CertificationsSection/CertificationsSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import AchievementsSection from "../sections/AchievementsSection/AchievementsSection";

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
