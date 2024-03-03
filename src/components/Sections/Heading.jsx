import React from "react";
import Icon from "@mdi/react";
import { mdiRayStartArrow } from "@mdi/js";

const Heading = ({ text = "heading", width = "1/4", viewAll = false }) => {
  return (
    <div className="flex items-center">
      <a href={`#${text}`} id={`#${text}`}>
        <h1 style={{ cursor: "var(--cursor-pointer)" }}>
          <span className="text-[var(--primary)] text-2xl">#</span>
          <span className="text-white text-2xl">{text}</span>
        </h1>
      </a>

      <hr
        className={`border-t-2 border-[var(--primary)] flex-shrink-0 ms-4 w-${width}`}
      />

      {viewAll && (
        <div
          className="flex gap-5 ms-auto"
          style={{ cursor: "var(--cursor-pointer)" }}
        >
          <span>view all</span>
          <Icon path={mdiRayStartArrow} size={1} color="white" />
        </div>
      )}
    </div>
  );
};

export default Heading;
