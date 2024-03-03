import React from "react";

const NavItem = ({ text = "heading" }) => {
  const hrefValue = text === "home" ? "/" : "#" + text;

  return (
    <li className="mx-4" style={{ cursor: "var(--cursor-pointer)" }}>
      <a href={hrefValue} style={{ cursor: "var(--cursor-pointer)" }}>
        <span className="text-[var(--primary)]">#</span>
        <span className="text-[var(--gray)] hover:text-white">{text}</span>
      </a>
    </li>
  );
};

export default NavItem;
