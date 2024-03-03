import React from "react";
import { mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="mt-20">
      <hr className="w-full border-t-2 border-[var(--gray)]" />
      <div className="w-3/4 mx-auto my-10 text-justify">
        <div>
          <div className="flex justify-between">
            {/* left */}
            <div>
              <div className="flex gap-10">
                <span>Divyansh Gemini</span>
                <a
                  className="text-[var(--gray)] cursor-[var(--cursor-pointer)]"
                  href="mailto:divyanshgemini3232@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  divyanshgemini3232@gmail.com
                </a>
              </div>
              <p className="mt-2">Android App Developer</p>
            </div>

            {/* right */}
            <div>
              <span style={{ fontSize: "1.5rem" }}>Socials</span>
              <div className="flex gap-3 mt-2">
                <SocialIcon
                  social={mdiGithub}
                  url="https://github.com/Divyansh-Gemini"
                />
                <SocialIcon
                  social={mdiLinkedin}
                  url="https://www.linkedin.com/in/divyansh-gemini/"
                />
                <SocialIcon
                  social={mdiTwitter}
                  url="https://twitter.com/DivyanshGemini"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-[var(--gray)]">
          Made by Divyansh Gemini
        </p>
      </div>
    </footer>
  );
};

export default Footer;
