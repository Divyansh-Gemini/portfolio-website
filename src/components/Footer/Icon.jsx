import React from "react";

const Icon = (props) => {
  const iconSrc = `src/assets/icons/${props.social}.svg`;

  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <img
        className="cursor-pointer hover:brightness-0 hover:invert"
        src={iconSrc}
        alt={props.social}
      />
    </a>
  );
};

export default Icon;
