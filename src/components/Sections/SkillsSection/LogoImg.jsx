import React from "react";

const LogoImg = ({ tech }) => {
  return (
    <div className="group flex flex-col items-center justify-center">
      <img
        width="100px"
        src={`/src/assets/images/logos/logo-${tech.toLowerCase()}.svg`}
        alt={tech}
        className="rounded-md h-14 w-14 duration-200 ease-in-out transform group-hover:-translate-y-1"
      />
      <span className="text-sm text-center invisible group-hover:visible transition duration-500 ease-in-out">
        {tech}
      </span>
    </div>
  );
};

export default LogoImg;
