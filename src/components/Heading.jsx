import React from "react";
import Icon from "@mdi/react";
import { mdiRayStartArrow } from "@mdi/js";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Heading = ({ text = "heading", width, viewAll = false }) => {
  return (
    <div id={`${text}`} className="flex items-center mt-20 mb-10">
      {/* main heading text */}
      <Link
        activeClass="active"
        to={text}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-[var(--cursor-pointer)]"
      >
        <h1>
          <span className="text-[var(--primary)] text-2xl">#</span>
          <span className="text-white text-2xl">{text}</span>
        </h1>
      </Link>

      {/* horizontal line */}
      <hr
        className={`border-t-2 border-[var(--primary)] flex-shrink ms-4 w-${width} h-0`}
      />

      {/* view all */}
      {viewAll && (
        <NavLink
          to={`/${text}`}
          className="flex gap-5 ms-auto cursor-[var(--cursor-pointer)]"
        >
          <span>view all</span>
          <Icon path={mdiRayStartArrow} size={1} color="white" />
        </NavLink>
      )}
    </div>
  );
};

export default Heading;
