import React from "react";

const LogoImg = ({ tech }) => {
  return (
    <img
      width="100px"
      src={`/src/assets/images/logos/logo-${tech.toLowerCase()}.svg`}
      alt={tech}
      className="rounded-md h-14 w-14 duration-200 ease-in-out transform hover:-translate-y-1"
    />
  );
};

export default LogoImg;
