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
      <section className="grid gap-10 2xl:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center above-fold:w-5/6 sm:w-full xl:w-11/12 m-auto">
        {/* Portfolio Website */}
        <ProjectCard
          imgSrc="/src/assets/images/project-banners/project-portfolio.png"
          title="Portfolio Website"
          techStack={["React.js", "TailwindCSS"]}
          description="The website you are currently on."
          codeURL="https://github.com/Divyansh-Gemini/portfolio-website"
          liveURL="https://github.com/Divyansh-Gemini/portfolio-website"
        />

        {/* CIC Labs */}
        <ProjectCard
          imgSrc="/src/assets/images/project-banners/project-cic.png"
          title="Pre-Import & Export Inspection Services"
          techStack={["Android", "Java", "Python", "SQLite"]}
          description="Android app for CIC Labs India."
          codeURL="https://github.com/Divyansh-Gemini/pre-import-and-export-inspection-services"
          liveURL="https://github.com/Divyansh-Gemini/pre-import-and-export-inspection-services"
        />

        {/* CarePlus */}
        <ProjectCard
          imgSrc="/src/assets/images/project-banners/project-careplus.png"
          title="CarePlus"
          techStack={["Android", "Java", "Firebase"]}
          description="Medication tracker & reminder app for old-age home."
          codeURL="https://github.com/Divyansh-Gemini/CarePlus"
          liveURL="https://github.com/Divyansh-Gemini/CarePlus"
        />
      </section>

      {/* Small Projects */}
      <Heading text="small-projects" />
      <section className="grid gap-10 2xl:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center above-fold:w-5/6 sm:w-full xl:w-11/12 m-auto">
        {/* Ease My WhatsApp */}
        <ProjectCard
          imgSrc="/src/assets/images/project-banners/project-ease-my-whatsapp.png"
          title="Ease My WhatsApp"
          techStack={["Android", "Java"]}
          description="The user can send WhatsApp message from the app without saving the contact number."
          codeURL="https://github.com/Divyansh-Gemini/Ease-My-WhatsApp"
          liveURL="https://github.com/Divyansh-Gemini/Ease-My-WhatsApp"
        />
      </section>
    </>
  );
};

export default ProjectsPage;
