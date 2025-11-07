import Image from "next/image";
import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="relative group h-[230px] md:w-[300px] md:h-[350px] overflow-hidden rounded-lg cursor-pointer bg-black-">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay (dark gradient) */}
      <div className="absolute w-full h-full top-0 left-0 bg-gold-darker opacity-80" />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="p-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white relative">
          {title}
          <span className="block w-12 h-[2px] bg-gold mx-auto mt-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
        </h3>
      </div>

      

      {/* Description (hidden until hover) */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xl sm:text-2xl md:text-2xl text-gold-lighter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
