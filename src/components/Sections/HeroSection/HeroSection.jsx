import React from "react";
import Button from "../../Button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex gap-8 above-fold:gap-20 justify-center h-screen -mt-10 max-xl:flex-col xl:items-center"
    >
      {/* text div */}
      <div className="flex flex-col gap-5 items-start">
        {/* <span className="text-base md:text-3xl font-medium">
          I'm an
          <span className="text-[var(--primary)]"> Android App Developer </span>
        </span> */}
        <span className="above-fold:text-xl md:text-3xl font-medium">
          I'm
          <span className="text-[var(--primary)]"> Divyansh Gemini</span>,
          <br />
          an
          <span className="text-[var(--primary)]"> Android App Developer </span>
        </span>

        <span className="text-sm md:text-xl text-[var(--gray)]">
          I craft responsive applications where technology meets creativity.
        </span>

        <div className="flex gap-3 md:gap-8 justify-start flex-col-reverse sm:flex-row">
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

      {/* image div */}
      <div className="flex flex-col">
        <img
          width={400}
          src="/assets/images/profile.png"
          alt="Divyansh Gemini"
          className="w-3/4 self-center"
        />
        <div className="flex gap-2 md:w-3/4 self-center items-center border border-[var(--gray)] px-3 py-2">
          <div className="h-2 w-2 md:h-4 md:w-4 bg-[var(--primary)]"></div>
          <span className="text-xs md:text-lg text-[var(--gray)] font-medium">
            Currently working on
            <span className="text-white"> Portfolio</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
