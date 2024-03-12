import React from "react";
import { Link } from "react-scroll";

const Button = ({
  text = "Click Me",
  type = undefined,
  styling = "outlined",
  src = "",
  isDownloadable = false,
  onClick,
}) => {
  // styling for btn
  const btnStyling = (styling) => {
    switch (styling) {
      case "outlined":
        return "border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] hover:font-semibold ";
      case "filled":
        return "border-[var(--background)] bg-[var(--primary)] text-[var(--background)] font-semibold hover:font-normal hover:border-[var(--primary)] hover:bg-[var(--background)] hover:text-[var(--white)]";
    }
  };

  // actual btn component
  const btn = () => {
    return (
      <button
        className={`border text-sm md:text-lg rounded-xl inline-block px-4 py-1.5 md:x-6 md:py-2 ${
          type === "scroll" ? "w-full" : "w-auto"
        } transition duration-200 cursor-[var(--cursor-pointer)] ${btnStyling(
          styling
        )} ${type == null ? "w-auto" : ""}`}
        onClick={type === undefined ? onClick : undefined}
      >
        {text}
      </button>
    );
  };

  // return btn based on type (anchor / scroll)
  switch (type) {
    // open in new tab
    case "anchor":
      return (
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          {...(isDownloadable && { download: "Divyansh_Gemini_Resume.pdf" })}
        >
          {btn()}
        </a>
      );

    // scroll to section
    case "scroll":
      return (
        <Link
          activeClass="active"
          to={src}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "var(--cursor-pointer)" }}
        >
          {btn()}
        </Link>
      );
    default:
      return btn();
  }
};

export default Button;
