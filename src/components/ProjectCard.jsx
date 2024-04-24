import React from "react";
import Button from "./Button";
import ProjectModal from "./ProjectModal";
import ReactDOM from "react-dom";
import LazyImage from "./LazyImage";

const ProjectCard = ({
  title,
  imgSrc,
  techStack,
  description,
  codeURL,
  viewContentType,
  viewContent,
  isMultipleViewContent = false,
}) => {
  const [selectedContentMeta, setSelectedContentMeta] = React.useState([]);

  const openModal = (viewContentType, viewContent, isMultipleViewContent) => {
    setSelectedContentMeta([
      viewContentType,
      viewContent,
      isMultipleViewContent,
    ]);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedContentMeta([]);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className="flex flex-col rounded-2xl border border-[var(--gray)] text-start
        duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-900 w-full"
    >
      {/* project banner image */}
      <LazyImage
        src={imgSrc}
        alt={title}
        height={250}
        width={400}
        className="rounded-t-2xl w-full"
      />

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
          {viewContentType && (
            <Button
              text="View"
              styling="outlined"
              type={viewContentType === "URL" ? "anchor" : undefined}
              src={viewContentType === "URL" ? viewContent : undefined}
              onClick={() =>
                openModal([viewContentType, viewContent, isMultipleViewContent])
              }
            />
          )}
        </div>
      </div>

      {/* calling Modal */}
      {selectedContentMeta.length > 0 &&
        ReactDOM.createPortal(
          <ProjectModal
            viewContentType={viewContentType}
            viewContent={viewContent}
            isMultipleViewContent={isMultipleViewContent}
            onClose={closeModal}
          />,
          document.body
        )}
    </div>
  );
};

export default ProjectCard;
