import React from "react";

const LogoImg = ({ tech }) => {
  return (
    <img
      width="100px"
      src={`/src/assets/images/logo-${tech.toLowerCase()}.svg`}
      alt={tech}
      className="rounded-md h-20 w-20 duration-200 ease-in-out transform hover:-translate-y-1"
    />
  );
};

export default LogoImg;
