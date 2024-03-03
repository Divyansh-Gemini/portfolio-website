import React from "react";
import Icon from "@mdi/react";

const SocialIcon = ({ social = "", url = "#" }) => {
  const iconSrc = `src/assets/icons/${social}.svg`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ cursor: "var(--cursor-pointer)" }}
    >
      <Icon
        path={social}
        size={1}
        color="#abb2bf"
        className="hover:brightness-0 hover:invert"
      />
    </a>
  );
};

export default SocialIcon;
