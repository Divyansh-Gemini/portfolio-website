import React from "react";
import Heading from "../../Heading";
import LogoImg from "./LogoImg";

const SkillsSection = () => {
  return (
    <section className="xl:mb-40">
      <Heading text="tech-stack" width="1/4" />

      <div className="grid grid-cols-4 md:grid-cols-6 gap-y-10 justify-items-center">
        <LogoImg tech="HTML" />
        <LogoImg tech="CSS" />
        <LogoImg tech="JavaScript" />
        <LogoImg tech="ReactJS" />
        <LogoImg tech="TailwindCSS" />
        <LogoImg tech="NodeJS" />
        <LogoImg tech="Android" />
        <LogoImg tech="Java" />
        <LogoImg tech="Python" />
        <LogoImg tech="Git" />
        <LogoImg tech="GitHub" />
        <LogoImg tech="Firebase" />
      </div>
    </section>
  );
};

export default SkillsSection;
