import Image from "next/image";
import React from "react";
import Section from "./Section/Section";

const VisionMissionCards = () => {
  return (
    <Section className="flex-row items-center justify-center flex-wrap">
      <div className="relative group  w-[300px] h-[350px] overflow-hidden rounded-lg cursor-pointer bg-black-100 flex items-center justify-center flex-col">
        {/* Background Image */}
        <Image
          src={"/images/ontime.jpeg"}
          alt={"Vission"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 -z-2"
        />

        {/* Overlay (dark gradient) */}
        <div className="absolute -z-1 w-full h-full top-0 left-0 bg-gold-darker opacity-80" />

        {/* Title */}
        <div className="flex items-center justify-center text-center px-4 transition-opacity duration-300">
          <h3 className="p-4 text-4xl font-semibold text-white relative">
            Vision
            <span className="block w-12 h-[2px] bg-gold mx-auto mt-2 transition-opacity duration-300"></span>
          </h3>
        </div>

        {/* Description (hidden until hover) */}
        <div className="flex items-center justify-center text-center px-6">
          <p className="text-xl sm:text-2xl md:text-2xl text-gold-lighter">
            Affordable luxury for every family, positioned as a brand that
            balances luxury with affordability.
          </p>
        </div>
      </div>
      <div className="relative group  w-[300px] h-[350px] overflow-hidden rounded-lg cursor-pointer bg-black-100 flex items-center justify-center flex-col">
        {/* Background Image */}
        <Image
          src={"/images/craftsmanship.png"}
          alt={"Vission"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 -z-2"
        />

        {/* Overlay (dark gradient) */}
        <div className="absolute -z-1 w-full h-full top-0 left-0 bg-gold-darker opacity-80" />

        {/* Title */}
        <div className="flex items-center justify-center text-center px-4 transition-opacity duration-300">
          <h3 className="p-4 text-4xl font-semibold text-white relative">
            Mission
            <span className="block w-12 h-[2px] bg-gold mx-auto mt-2 transition-opacity duration-300"></span>
          </h3>
        </div>

        {/* Description (hidden until hover) */}
        <div className="flex items-center justify-center text-center px-6">
          <p className="text-xl sm:text-2xl md:text-2xl text-gold-lighter">
            To build quality homes and spaces that bring happiness, comfort, and
            trust to every customer.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default VisionMissionCards;
