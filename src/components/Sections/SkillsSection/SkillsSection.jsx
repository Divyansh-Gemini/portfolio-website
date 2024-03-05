import React from "react";
import Heading from "../../Heading";
import LogoImg from "./LogoImg";

const SkillsSection = () => {
  return (
    <div>
      <Heading text="skills" width="1/4" />

      <div className="grid grid-cols-6 gap-y-14 justify-items-center">
        <LogoImg tech="HTML" />
        <LogoImg tech="CSS" />
        <LogoImg tech="JavaScript" />
        <LogoImg tech="React" />
        <LogoImg tech="TailwindCSS" />
        <LogoImg tech="NodeJS" />
        <LogoImg tech="Android" />
        <LogoImg tech="Java" />
        <LogoImg tech="Python" />
        <LogoImg tech="Git" />
        <LogoImg tech="GitHub" />
        <LogoImg tech="Firebase" />
      </div>
    </div>
  );
};

export default SkillsSection;
