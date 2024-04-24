import React from "react";
import Heading from "../../components/Heading";
import ProjectCard from "../../components/ProjectCard.jsx";
import projects from "../../data/projects";

const ProjectsSection = () => {
  const featuredProjects = projects.majorProjects.filter(
    (project) => project.isFeatured
  );

  return (
    <section>
      <Heading text="projects" className="w-1/2" viewAll />

      <div className="grid gap-10 2xl:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center above-fold:w-5/6 sm:w-full xl:w-11/12 m-auto xl:mb-40">
        {featuredProjects.map((project) => (
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
      </div>
    </section>
  );
};

export default ProjectsSection;
