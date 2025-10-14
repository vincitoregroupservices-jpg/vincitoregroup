import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
import Section from "../Section/Section";

const CTASection = ({ title, description, btnText, url }) => {
  return (
    <Section className="flex items-center justify-center flex-col gap-3">
      {/* Top Icons Row */}
      <div className="w-[90%] flex items-end justify-evenly border-b-2 border-black-2 mb-2">
        <div className="w-[40%] flex items-end justify-evenly">
          <Image
            src="/images/Vahical-1.svg"
            width={200}
            height={200}
            className="hidden md:flex md:w-15 h-auto"
            alt="Vehicle 1"
          />
          <Image
            src="/images/Vahical-2.svg"
            width={200}
            height={200}
            className="hidden md:flex md:w-15 h-auto"
            alt="Vehicle 2"
          />
          <Image
            src="/images/Vahical-3.svg"
            width={200}
            height={200}
            className="w-15 md:w-20 h-auto"
            alt="Vehicle 3"
          />
        </div>
        <Image
          src="/images/VincitoreLogoWithNameforCTA.svg"
          width={200}
          height={200}
          className="w-40 md:w-50 h-auto"
          alt="Vincitore Logo"
        />
        <div className="w-[40%] flex items-end justify-evenly">
          <Image
            src="/images/Bulding-1.svg"
            width={200}
            height={200}
            className="hidden md:flex md:w-14 h-auto mb-[-2px]"
            alt="Building 1"
          />
          <Image
            src="/images/Bulding-2.svg"
            width={200}
            height={200}
            className="hidden md:flex md:w-40 h-auto"
            alt="Building 2"
          />
          <Image
            src="/images/Bulding-3.svg"
            width={200}
            height={200}
            className="w-8 md:w-10 h-auto mb-[-1px]"
            alt="Building 3"
          />
        </div>
      </div>

      {/* Headings */}
      <div className="flex flex-col items-center gap-1">
        {Array.isArray(title) ? (
          title.map((text, index) => (
            <h2
              key={index}
              className="text-3xl md:text-4xl font-bold text-center text-black-2"
            >
              {text}
            </h2>
          ))
        ) : (
          <h2 className="w-[90%] text-3xl md:text-4xl font-bold text-center text-black-2">
            {title}
          </h2>
        )}
      </div>

      {/* Description */}
      <p className="w-[90%] max-w-2xl text-black-3 text-center">
        {description}
      </p>

      {/* Button */}
      <Link href={`${url}`}>
        <Button text={btnText} />
      </Link>
    </Section>
  );
};

export default CTASection;
