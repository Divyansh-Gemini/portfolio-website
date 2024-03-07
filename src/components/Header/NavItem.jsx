import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const NavItem = ({ text = "heading", onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (location.pathname !== "/" && text === "home") navigate("/");
  };

  return (
    <Link
      to={text}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={handleClick}
    >
      <li className="max-md:m-4 cursor-[var(--cursor-pointer)] text-2xl py-3 md:max-lg:text-base md:text-lg max-md:border-b-2 border-[var(--gray)]">
        <span className="text-[var(--primary)]">#</span>
        <span className="text-[var(--gray)] hover:text-white transition duration-200">
          {text}
        </span>
      </li>
    </Link>
  );
};

export default NavItem;
