import React, { useState } from "react";
import NavItem from "./NavItem";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import SocialIcon from "../Footer/SocialIcon";
import { siGithub, siLinkedin, siStackoverflow, siX } from "simple-icons";

const Header = () => {
  const location = useLocation();
  const [isNavVisible, setNavVisible] = useState(false);

  const showNavStopScroll = (navVisible) => {
    setNavVisible(navVisible);
    document.body.style.overflow = navVisible ? "hidden" : "auto";
  };

  const currentPage = location.pathname;
  const logoStyling =
    "text-white cursor-[var(--cursor-pointer)] font-medium text-base above-fold:text-xl md:max-lg:text-base";

  return (
    <header
      className="sticky top-0 z-20 h-14 lg:h-16 flex items-center justify-around md:justify-between md:w-3/4 mx-auto bg-[var(--background)]
      "
      // bg-red-700 above-fold:bg-orange-600 sm:bg-yellow-600 md:bg-green-700 lg:bg-blue-900 xl:bg-purple-900 2xl:bg-pink-950
    >
      {/* Logo */}
      {location.pathname === "/" ? (
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className={logoStyling}>{"{Divyansh Gemini}"}</span>
        </ScrollLink>
      ) : (
        <RouterLink to={"/"}>
          <span className={logoStyling}>{"{Divyansh Gemini}"}</span>
        </RouterLink>
      )}

      {/* hamburger menu icon */}
      <button
        onClick={() => showNavStopScroll(!isNavVisible)}
        className="md:hidden"
      >
        <Icon path={mdiMenu} size={1} />
      </button>

      {/* nav items */}
      <nav
        className={`${
          isNavVisible ? "flex" : "hidden"
        } md:flex max-md:absolute max-md:bg-[var(--background)] top-14 max-above-fold:w-screen max-md:w-11/12 max-md:h-screen`}
      >
        <ul className="flex flex-col gap-3 above-fold:gap-8 md:gap-5 lg:gap-10 md:flex-row max-md:w-screen md:justify-end">
          <NavItem text="home" onClick={() => showNavStopScroll(false)} />
          {currentPage === "/" && (
            <>
              <NavItem
                text="projects"
                onClick={() => showNavStopScroll(false)}
              />
              <NavItem
                text="tech-stack"
                onClick={() => showNavStopScroll(false)}
              />
              <NavItem
                text="contact"
                onClick={() => showNavStopScroll(false)}
              />
            </>
          )}
          {currentPage === "/projects" && (
            <>
              <NavItem
                text="major-projects"
                onClick={() => showNavStopScroll(false)}
              />
              <NavItem
                text="small-projects"
                onClick={() => showNavStopScroll(false)}
              />
            </>
          )}
        </ul>
      </nav>

      {/* div: socials icons for small screens */}
      <div
        className={`${
          isNavVisible ? "flex" : "hidden"
        } justify-around m-5 fixed bottom-0 w-3/4 md:hidden`}
      >
        <SocialIcon
          social={siGithub}
          url="https://github.com/Divyansh-Gemini"
        />
        <SocialIcon
          social={siLinkedin}
          url="https://www.linkedin.com/in/divyansh-gemini/"
        />
        <SocialIcon social={siX} url="https://twitter.com/DivyanshGemini" />
        <SocialIcon
          social={siStackoverflow}
          url="https://stackoverflow.com/users/19415431/divyansh-gemini"
        />
      </div>
    </header>
  );
};

export default Header;
