import React from "react";
import Heading from "../Heading";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div>
      <Heading text="projects" width="1/2" viewAll />

      <div className="flex justify-between">
        <ProjectCard
          imgSrc="/src/assets/images/project-img-1.png"
          title="Portfolio Website"
          techStack={["React.js", "TailwindCSS"]}
          description="The website you are currently on."
          codeURL="https://github.com/Divyansh-Gemini/portfolio-website"
          liveURL=""
        />

        <ProjectCard
          imgSrc="/src/assets/images/project-img-3.png"
          title="Pre-Import & Export Inspection Services"
          techStack={["Android", "Java", "Python", "SQLite"]}
          description="Android app for CIC Labs India."
          codeURL="https://github.com/Divyansh-Gemini/pre-import-and-export-inspection-services"
          liveURL=""
        />

        <ProjectCard
          imgSrc="/src/assets/images/project-img-2.png"
          title="CarePlus"
          techStack={["Android", "Java", "Firebase"]}
          description="Medication tracker & reminder Android app."
          codeURL="https://github.com/Divyansh-Gemini/CarePlus"
          liveURL=""
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
