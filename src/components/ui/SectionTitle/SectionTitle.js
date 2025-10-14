import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="w-full flex flex-col items-center mb-3">
      {/* Desktop / Tablet */}
      <div className="hidden sm:flex items-center justify-center gap-3">
        <span className="h-[4px] w-[50px] bg-gold rounded"></span>
        <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold text-black-2">
          {text}
        </h2>
        <span className="h-[4px] w-[50px] bg-gold rounded"></span>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col items-center justify-center text-center">
        <h2 className="px-10 text-3xl font-bold text-primary">{text}</h2>
        <span className="h-[4px] w-[80px] bg-gold rounded mt-2"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
