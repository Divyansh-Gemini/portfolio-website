import React, { useEffect } from "react";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import { animateScroll } from "react-scroll";
import data from "../data/data.json";

const ProjectsPage = () => {
  animateScroll.scrollToTop();

  useEffect(() => {
    document.title = "Divyansh Gemini | Projects";
  }, []);

  const majorProjects = data.projects.majorProjects;
  const smallProjects = data.projects.smallProjects;

  return (
    <>
      {/* Major Projects */}
      <Heading text="major-projects" />

      <section className="grid gap-10 2xl:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center above-fold:w-5/6 sm:w-full xl:w-11/12 m-auto">
        {majorProjects.map((project) => (
          <ProjectCard
            key={project.title}
            imgSrc={project.imgSrc}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            codeURL={project.codeURL}
            viewContentType={project.viewContentType}
            viewContent={project.viewContent}
          />
        ))}
      </section>

      {/* Small Projects */}
      <Heading text="small-projects" />

      <section className="grid gap-10 2xl:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center above-fold:w-5/6 sm:w-full xl:w-11/12 m-auto">
        {smallProjects.map((project) => (
          <ProjectCard
            key={project.title}
            imgSrc={project.imgSrc}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            codeURL={project.codeURL}
            viewContentType={project.viewContentType}
            viewContent={project.viewContent}
          />
        ))}
      </section>
    </>
  );
};

export default ProjectsPage;
