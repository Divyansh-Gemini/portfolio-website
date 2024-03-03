import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="">
      <hr className="w-full border-t-2 border-[var(--gray)]" />
      <div className="w-3/4 mx-auto my-10 text-justify">
        <div>
          <div className="flex justify-between">
            {/* left */}
            <div>
              <div className="flex gap-10">
                <span>Divyansh Gemini</span>
                <a
                  className="text-[var(--gray)]"
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
                <Icon
                  social="GitHub"
                  url="https://github.com/Divyansh-Gemini"
                />
                <Icon
                  social="LinkedIn"
                  url="https://www.linkedin.com/in/divyansh-gemini/"
                />
                <Icon
                  social="Twitter"
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
