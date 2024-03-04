import React from "react";
import Icon from "@mdi/react";

const SocialIcon = ({ social = "", url = "#" }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon
        path={social}
        size={1}
        color="#abb2bf"
        className="hover:brightness-0 hover:invert cursor-[var(--cursor-pointer)]"
      />
    </a>
  );
};

export default SocialIcon;
