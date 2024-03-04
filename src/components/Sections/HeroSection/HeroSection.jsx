import React from "react";
import { Link } from "react-scroll";
import Button from "../../Button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex items-center gap-10 justify-between h-screen -mb-32"
    >
      {/* left */}
      <div className="flex flex-col justify-center gap-10 w-7/12 items-start text-start">
        <span className="text-3xl font-medium">
          I'm an
          <span className="text-[var(--primary)]"> Android App Developer </span>
          and
          <span className="text-[var(--primary)]"> Web Developer</span>
        </span>

        <span className="text-[var(--gray)]">
          I craft responsive apps & websites where technology meets creativity.
        </span>

        <div className="flex justify-start gap-10">
          {/* Download Resume Btn */}
          <Button
            text="Download Resume"
            type="anchor"
            styling="outlined"
            src="/resume.pdf"
            isDownloadable={true}
          />

          {/* Contact Btn */}
          <Button
            text="Contact me !!"
            type="scroll"
            styling="filled"
            src="contact"
          />
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col justify-center transform -translate-y-20">
        <img
          width={400}
          src="./src/assets/images/dp-purple-gradient.png"
          alt="Divyansh Gemini"
        />
        <div className="flex items-center border border-[var(--gray)] px-3 py-2">
          <div className="h-4 w-4 bg-[var(--primary)] me-2"></div>
          <span className="text-[var(--gray)] font-medium">
            Currently working on
            <span className="text-white"> Portfolio</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
