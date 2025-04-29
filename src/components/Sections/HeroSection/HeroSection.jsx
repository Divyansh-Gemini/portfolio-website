import React from "react";
import Button from "../../Button";
import LazyImage from "../../LazyImage";
import data from "../../../data/data.json";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex gap-14 above-fold:gap-32 md:max-lg:gap-40 lg:max-xl:gap-1 justify-center min-h-screen -mt-10 max-lg:flex-col lg:items-center"
    >
      {/* text div */}
      <div className="flex flex-col gap-5 items-start">
        <span className="flex flex-col gap-2 above-fold:text-xl md:text-3xl font-medium">
          <span>
            I&#39;m
            <span className="text-[var(--primary)]"> {data.general.name}</span>,
          </span>
          <span>
            an
            <span className="text-[var(--primary)]">
              {" "}
              {data.general.title}
            </span>
          </span>
        </span>

        <span className="text-sm md:text-xl text-[var(--gray)]">
          {data.general.description}
        </span>

        <div className="flex gap-3 md:gap-8 justify-start flex-col-reverse sm:flex-row lg:max-xl:flex-col-reverse">
          {/* Download Resume Btn */}
          <Button
            text="Download Resume"
            type="anchor"
            styling="outlined"
            src={data.general.resumeUrl}
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
        <LazyImage
          src="profile.png"
          alt={data.general.name}
          width={300}
          height={400}
          hashName="profile.png"
          className="sm:max-md:w-1/2 md:max-lg:w-1/2 w-4/5 self-center mx-auto rounded-t-3xl -m-5 border-2 border-[var(--gray)]"
        />

        <div className="flex gap-2 md:w-3/4 lg:w-[20rem] xl:w-96 self-center items-center border border-[var(--gray)] px-3 py-2 bg-[var(--background)] z-10">
          <div className="h-2 w-2 md:h-4 md:w-4 bg-[var(--primary)]"></div>
          <span className="text-xs md:text-base text-[var(--gray)] font-medium">
            {data.general.statusPart1}
            <span className="text-white"> {data.general.statusPart2}</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
