import React from "react";
import SocialIcon from "./Footer/SocialIcon";
import { siGithub, siLinkedin, siX } from "simple-icons";
import data from "../data/data.json";

const HangingSocials = () => {
  const socials = [
    {
      social: siGithub,
      url: data.socials.gitHub,
    },
    {
      social: siLinkedin,
      url: data.socials.linkedIn,
    },
    {
      social: siX,
      url: data.socials.x,
    },
  ];

  return (
    <div className="hidden md:flex md:flex-col md:justify-center md:gap-5 md:fixed md:top-0 md:start-10 lg:start-14 md:animate-bounce-slow md:visible">
      {/* vertical line */}
      <div className="border-s-2 border-[var(--gray)] mx-auto h-32" />

      {socials.map((social) => (
        <SocialIcon key={social.url} social={social.social} url={social.url} />
      ))}
    </div>
  );
};

export default HangingSocials;
