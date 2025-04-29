import React from "react";
import SocialIcon from "./SocialIcon";
import { siGithub, siLinkedin, siStackoverflow, siX } from "simple-icons";
import data from "../../data/data.json";

const Footer = () => {
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
    {
      social: siStackoverflow,
      url: data.socials.stackoverflow,
    },
  ];

  return (
    // footer
    <footer className="mt-14 border-t-2 border-[var(--gray)] py-8">
      {/* parent div (of right & left div) */}
      <div className="flex flex-col gap-6 md:flex-row justify-between w-3/4 mx-auto">
        {/* div: about */}
        <div className="flex flex-col gap-1">
          <span className="text-base sm:text-xl">{data.general.name}</span>
          <a
            className="text-sm sm:text-base text-[var(--gray)] cursor-[var(--cursor-pointer)] hover:underline"
            href={`mailto:${data.socials.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.socials.email}
          </a>
        </div>

        {/* div: socials */}
        <div>
          <span className="text-base sm:text-xl">Socials</span>
          <div className="flex gap-3 mt-2">
            {socials.map((social) => (
              <SocialIcon
                key={social.url}
                social={social.social}
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>

      {/* bottom txt */}
      <span className="flex justify-center text-sm sm:text-base mx-auto mt-10 text-[var(--gray)]">
        Made by Divyansh Gemini
      </span>
    </footer>
  );
};

export default Footer;
