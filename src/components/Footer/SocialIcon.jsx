import React from "react";

const SocialIcon = ({ social, url = "#", size = 4 }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <svg
        className={`w-${size} h-${size} md:w-5 md:h-5 hover:brightness-0 hover:invert cursor-[var(--cursor-pointer)]`}
        viewBox="0 0 24 24"
      >
        <path d={social.path} className="fill-[var(--gray)]" />
      </svg>
    </a>
  );
};

export default SocialIcon;
