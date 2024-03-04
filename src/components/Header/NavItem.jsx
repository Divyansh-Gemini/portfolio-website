import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { scroller } from "react-scroll";

const NavItem = ({ text = "heading" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => location.pathname !== "/" && navigate("/");

  return (
    <li className="mx-4 cursor-[var(--cursor-pointer)] text-lg">
      <Link
        to={text}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={{ cursor: "var(--cursor-pointer)" }}
        onClick={handleClick}
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
