import React from "react";
import Heading from "../../Heading";
import ProjectCard from "../../ProjectCard.jsx";

const ProjectsSection = () => {
  return (
    <section>
      <Heading text="projects" width="1/2" viewAll />

      <div className="grid gap-10 2xl:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center above-fold:w-5/6 sm:w-full xl:w-11/12 m-auto xl:mb-40">
        {/* Portfolio Website */}
        <ProjectCard
          imgSrc="/assets/images/project-banners/project-portfolio.png"
          title="Portfolio Website"
          techStack={["React.js", "TailwindCSS"]}
          description="The website you are currently on."
          codeURL="https://github.com/Divyansh-Gemini/portfolio-website"
          liveURL="https://www.divyanshgemini.dev/"
        />

        {/* CIC Labs */}
        <ProjectCard
          imgSrc="/assets/images/project-banners/project-cic.png"
          title="Pre-Import & Export Inspection Services"
          techStack={["Android", "Java", "Python", "SQLite"]}
          // description="Android app for CIC Labs India."
          description="Android app to digitize making of inspection certifcate by fetching data from Invoice PDF."
          codeURL="https://github.com/Divyansh-Gemini/pre-import-and-export-inspection-services"
          liveURL="https://github.com/Divyansh-Gemini/pre-import-and-export-inspection-services"
        />

        {/* CarePlus */}
        <ProjectCard
          imgSrc="/assets/images/project-banners/project-careplus.png"
          title="CarePlus"
          techStack={["Android", "Java", "Firebase"]}
          description="Medication tracker & reminder app for old-age home."
          codeURL="https://github.com/Divyansh-Gemini/CarePlus"
          liveURL="https://github.com/Divyansh-Gemini/CarePlus"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
