import React from "react";
import NavItem from "./NavItem";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header
      className="sticky top-0 z-10 flex items-center justify-between w-3/4 mx-auto py-8 bg-[var(--background)]"
      style={{ height: "70px" }}
    >
      {location.pathname === "/" ? (
        <ScrollLink
          activeClass=""
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "var(--cursor-pointer)" }}
        >
          <span className="text-white cursor-[var(--cursor-pointer)] text-xl font-medium">
            {"{Divyansh Gemini}"}
          </span>
        </ScrollLink>
      ) : (
        <RouterLink to={"/"}>
          <span className="text-white cursor-[var(--cursor-pointer)] text-xl font-medium">
            {"{Divyansh Gemini}"}
          </span>
        </RouterLink>
      )}

      <nav>
        <ul className="flex">
          <NavItem text="home" />
          {location.pathname === "/" ? (
            <>
              <NavItem text="projects" />
              <NavItem text="skills" />
              <NavItem text="contact" />
            </>
          ) : (
            <>
              <NavItem text="complete-apps" />
              <NavItem text="small-projects" />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
