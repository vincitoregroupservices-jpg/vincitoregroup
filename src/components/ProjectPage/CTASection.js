import React from "react";
import Section from "../ui/Section/Section";
import Button from "../ui/Button/Button";
import Link from "next/link";

const CTASection = ({ project }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center py-20"
      style={{
        backgroundImage: `url(${project.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold max-w-3xl">
          {project.tagline.quate}
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={`/contact`}>
            <Button text="Get in Touch" outline noArrow />
          </Link>
          <Link href={`tel:${project.contact[0]}`}>
            <Button text="Enquire Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
