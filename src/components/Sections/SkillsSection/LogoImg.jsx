import React from "react";

const LogoImg = ({ tech }) => {
  return (
    <div className="group flex flex-col items-center justify-center">
      <img
        width="100px"
        src={`/assets/images/logos/logo-${tech.toLowerCase()}.svg`}
        alt={tech}
        className="rounded-md h-10 w-10 above-fold:h-12 above-fold:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 duration-200 ease-in-out transform group-hover:-translate-y-1"
      />
      <span className="text-xs above-fold:text-sm text-center invisible group-hover:visible transition duration-500 ease-in-out">
        {tech}
      </span>
    </div>
  );
};

export default LogoImg;
