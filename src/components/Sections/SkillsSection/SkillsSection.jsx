import React from "react";
import Heading from "../../Heading";
import LogoImg from "./LogoImg";
import data from "../../../data/data.json";

const SkillsSection = () => {

  return (
    <section className="xl:mb-40">
      <Heading text="tech-stack" className="w-1/4" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 justify-items-center">
        {data.skills.map((tech) => (
          <LogoImg key={tech} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
