import React from "react";
import Icon from "@mdi/react";
import { mdiRayStartArrow } from "@mdi/js";
import { Link } from "react-scroll";

const Heading = ({ text = "heading", width, viewAll = false }) => {
  return (
    <div id={`${text}`} className="flex items-center mt-20 mb-10">
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

      <hr
        className={`border-t-2 border-[var(--primary)] flex-shrink ms-4 w-${width}`}
      />

      {viewAll && (
        <div className="flex gap-5 ms-auto cursor-[var(--cursor-pointer)]">
          <span>view all</span>
          <Icon path={mdiRayStartArrow} size={1} color="white" />
        </div>
      )}
    </div>
  );
};

export default Heading;
