import React from "react";
import SocialIcon from "./SocialIcon";
import { siGithub, siLinkedin, siStackoverflow, siX } from "simple-icons";

const Footer = () => {
  return (
    // footer
    <footer className="mt-14 border-t-2 border-[var(--gray)] py-8">
      {/* parent div (of right & left div) */}
      <div className="flex flex-col gap-6 md:flex-row justify-between w-3/4 mx-auto">
        {/* div: about */}
        <div className="flex flex-col gap-1">
          <span className="text-base sm:text-xl">Divyansh Gemini</span>
          <a
            className="text-sm sm:text-base text-[var(--gray)] cursor-[var(--cursor-pointer)] hover:underline"
            href="mailto:divyanshgemini3232@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            divyanshgemini3232@gmail.com
          </a>
        </div>

        {/* div: socials */}
        <div>
          <span className="text-base sm:text-xl">Socials</span>
          <div className="flex gap-3 mt-2">
            <SocialIcon
              social={siGithub}
              url="https://github.com/Divyansh-Gemini"
            />
            <SocialIcon
              social={siLinkedin}
              url="https://www.linkedin.com/in/divyansh-gemini/"
            />
            <SocialIcon social={siX} url="https://twitter.com/DivyanshGemini" />
            <SocialIcon
              social={siStackoverflow}
              url="https://stackoverflow.com/users/19415431/divyansh-gemini"
            />
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
