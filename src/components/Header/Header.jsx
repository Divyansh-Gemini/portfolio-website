import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-10 flex items-center justify-between w-3/4 mx-auto py-8 bg-[var(--background)]"
      style={{ height: "70px" }}
    >
      <Link
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
      </Link>
      <nav>
        <ul className="flex">
          <NavItem text="home" />
          <NavItem text="projects" />
          <NavItem text="skills" />
          <NavItem text="contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
