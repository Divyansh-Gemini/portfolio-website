import React from "react";

const Label = ({ forValue }) => {
  return (
    <label htmlFor={forValue} className="mb-1 text-base md:text-lg">
      {`_${forValue}:`}
    </label>
  );
};

export default Label;
