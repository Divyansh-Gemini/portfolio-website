import React from "react";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import { animateScroll } from "react-scroll";

const ProjectsPage = () => {
  animateScroll.scrollToTop();

  return (
    <>
      {/* Major Projects */}
      <Heading text="major-projects" />
      <section className="flex justify-between">
        <ProjectCard
          imgSrc="/src/assets/images/project-banners/project-portfolio.png"
          title="Portfolio Website"
          techStack={["React.js", "TailwindCSS"]}
          description="The website you are currently on."
          codeURL="https://github.com/Divyansh-Gemini/portfolio-website"
          liveURL=""
        />

        <ProjectCard
          imgSrc="/src/assets/images/project-banners/project-img-3.png"
          title="Pre-Import & Export Inspection Services"
          techStack={["Android", "Java", "Python", "SQLite"]}
          description="Android app for CIC Labs India."
          codeURL="https://github.com/Divyansh-Gemini/pre-import-and-export-inspection-services"
          liveURL=""
        />

        <ProjectCard
          imgSrc="/src/assets/images/project-banners/project-img-2.png"
          title="CarePlus"
          techStack={["Android", "Java", "Firebase"]}
          description="Medication tracker & reminder Android app."
          codeURL="https://github.com/Divyansh-Gemini/CarePlus"
          liveURL=""
        />
      </section>

      {/* Small Projects */}
      <Heading text="small-projects" />
      <section className="flex justify-between">
        <ProjectCard
          imgSrc="/src/assets/images/project-banners/project-img-2.png"
          title="Ease My WhatsApp"
          techStack={["Android", "Java"]}
          description="The user can send WhatsApp message from the app without saving the contact number."
          codeURL="https://github.com/Divyansh-Gemini/Ease-My-WhatsApp"
          liveURL=""
        />
      </section>
    </>
  );
};

export default ProjectsPage;
