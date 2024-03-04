import React from "react";
import SocialIcon from "./Footer/SocialIcon";
import { mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";

const HangingSocials = () => {
  return (
    <div className="flex flex-col justify-center gap-5 fixed top-0 start-14 animate-bounce-slow">
      {/* vertical line */}
      <div className="border-s-2 border-[var(--gray)] mx-auto h-32" />

      <SocialIcon social={mdiGithub} url="https://github.com/Divyansh-Gemini" />

      <SocialIcon
        social={mdiLinkedin}
        url="https://www.linkedin.com/in/divyansh-gemini/"
      />

      <SocialIcon
        social={mdiTwitter}
        url="https://twitter.com/DivyanshGemini"
      />
    </div>
  );
};

export default HangingSocials;
