import React from "react";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header>
      <div
        className="flex items-center justify-between w-3/4 mx-auto py-8"
        style={{ height: "70px" }}
      >
        <span className="text-white cursor-pointer">Divyansh Gemini</span>
        <nav>
          <ul className="flex">
            <NavItem text="home" />
            <NavItem text="about-me" />
            <NavItem text="projects" />
            <NavItem text="contact" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
