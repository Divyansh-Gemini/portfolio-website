import React from "react";
import Heading from "../../Heading";
import LogoImg from "./LogoImg";

const SkillsSection = () => {
  const techs = [
    "Android",
    "Kotlin",
    "Java",
    "Python",
    "Git",
    "GitHub",
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "NodeJS",
    "Appwrite",
    "Firebase",
  ];

  return (
    <section className="xl:mb-40">
      <Heading text="tech-stack" className="w-1/4" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 justify-items-center">
        {techs.map((tech) => (
          <LogoImg key={tech} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
