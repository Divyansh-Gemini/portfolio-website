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
      className="inline-block rounded-2xl border border-[var(--gray)] max-w-80 text-start
        duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-900"
    >
      {/* project banner image */}
      <img className="rounded-t-2xl" src={imgSrc} alt={title} />

      {/* tech stack */}
      <div className="p-2 text-sm border-y border-[var(--gray)]">
        {techStack.map((tech, index) => (
          <span key={index} className="text-[var(--gray)]">
            {` ${tech} |`}
          </span>
        ))}
      </div>

      <div className="p-2">
        {/* project title */}
        <h2 className="text-xl">{title}</h2>

        {/* project description */}
        <p className="py-3 text-[var(--gray)]">{description}</p>

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
