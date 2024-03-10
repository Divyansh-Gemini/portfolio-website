import React from "react";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection/ProjectsSection";
import SkillsSection from "../components/Sections/SkillsSection/SkillsSection";
import CertificationsSection from "../components/Sections/CertificationsSection/CertificationsSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import { animateScroll } from "react-scroll";
import AchievementsSection from "../components/Sections/AchievementsSection/AchievementsSection";

const HomePage = () => {
  animateScroll.scrollToTop();

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
