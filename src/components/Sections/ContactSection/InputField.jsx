import React from "react";

const InputField = ({ type = "text", name }) => {
  return (
    <input
      type={type}
      name={`user_${name}`}
      id={name}
      required
      placeholder={`enter your ${name}...`}
      className="p-2 bg-gray-300 focus:outline-none rounded-lg font-medium text-[var(--background)] 
      placeholder-gray-500 focus:placeholder-gray-400 
      focus:ring-4 focus:ring-purple-600 focus:ring-opacity-30 transition duration-200"
      style={{ caretColor: "var(--background)" }}
    />
  );
};

export default InputField;
