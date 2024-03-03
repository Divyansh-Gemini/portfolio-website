import React from "react";
import { Link } from "react-scroll";

const NavItem = ({ text = "heading" }) => {
  return (
    <li className="mx-4 cursor-[var(--cursor-pointer)] text-lg">
      <Link
        activeClass=""
        to={text}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={{ cursor: "var(--cursor-pointer)" }}
      >
        <span className="text-[var(--primary)]">#</span>
        <span className="text-[var(--gray)] hover:text-white transition duration-200">
          {text}
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
