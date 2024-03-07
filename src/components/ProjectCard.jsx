import React from "react";
import Button from "./Button";

const ProjectCard = ({
  title,
  imgSrc,
  techStack,
  description,
  codeURL,
  liveURL,
}) => {
  return (
    <div
      className="flex flex-col rounded-2xl border border-[var(--gray)] commented-max-w-80 text-start
        duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-900 w-full"
    >
      {/* project banner image */}
      <img className="rounded-t-2xl" src={imgSrc} alt={title} />

      {/* tech stack */}
      <div className="flex flex-wrap gap-y-1 gap-x-2 p-2 text-xs above-fold:text-sm md:text-base border-y border-[var(--gray)]">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className={`${
              index !== techStack.length - 1
                ? "border-e-2 border-[var(--gray)]"
                : ""
            } pe-2 text-[var(--gray)]`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="p-2 flex-grow flex flex-col justify-between">
        <div>
          {/* project title */}
          <h2 className="text-sm above-fold:text-base md:text-lg">{title}</h2>

          {/* project description */}
          <p className="py-3 text-xs above-fold:text-sm md:text-base text-[var(--gray)]">
            {description}
          </p>
        </div>

        {/* buttons */}
        <div className="flex gap-5 mt-2">
          <Button text="Code" type="anchor" styling="filled" src={codeURL} />
          <Button text="View" type="anchor" styling="outlined" src={liveURL} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
