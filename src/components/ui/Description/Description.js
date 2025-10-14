import React from "react";

const Description = ({ text, className = "" }) => {
  return (
    <p
      className={`
        text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl
        
        text-black-2 text-center ${className}
      `}
    >
      {text}
    </p>
  );
};

export default Description;
