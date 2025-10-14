import Image from "next/image";
import React from "react";

const Button = ({
  text,
  className = "",
  downloadBtn = false,
  loading = false,
  outline = false, // outline style
  type = "button", // button type
  noArrow = false, // new prop: hides arrow/download icon
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`group relative flex items-center justify-center gap-2 w-fit px-4 py-2 md:px-6 md:py-2
        rounded-md cursor-pointer transition-all duration-[0.3s] active:scale-95 h-fit
        ${outline
          ? "border border-gold text-gold bg-transparent hover:bg-gold hover:text-black-2"
          : "bg-gradient-to-r from-gold to-gold-light text-black-2 hover:opacity-90"
        }
        ${className}`}
    >
      <span className="font-medium transition-transform duration-300 group-hover:translate-x-1">
        {loading ? "Loading" : text}
      </span>

      {/* Conditionally show loader / icons / nothing */}
      {!noArrow && (
        <>
          {loading ? (
            <div className="h-4 w-4 ml-2 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          ) : downloadBtn ? (
            <Image
              src="/icons/download.svg"
              width={24}
              height={24}
              alt="download"
              className="h-6 w-auto transition-transform duration-300 group-hover:translate-x-1"
            />
          ) : (
            <Image
              src="/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow"
              className="h-6 w-auto transition-transform duration-300 group-hover:translate-x-1 text-gold"
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
