import React from "react";

const NavItem = (props) => {
  return (
    <li className="mx-4 cursor-pointer">
      <span className="text-[var(--primary)]">#</span>
      <span className="text-[var(--gray)] hover:text-white">{props.text}</span>
    </li>
  );
};

export default NavItem;
