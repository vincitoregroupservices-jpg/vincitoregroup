import React from "react";
import Button from "../ui/Button/Button";
import Link from "next/link";
import Image from "next/image";
import Section from "../ui/Section/Section";

const LocationCTA = ({ project }) => {
  return (
    <div
      className="relative flex flex-col gap-5 items-center justify-center text-center py-20 mt-10"
      style={{
        backgroundImage: `url(/${project.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <section>
        <Image
          src={"/icons/location3.svg"}
          height={500}
          width={500}
          className="h-10 w-auto  z-1"
          alt="Location Icon"
        />
        <h1 className="text-2xl md:text-3xl z-1 text-white md:max-w-[60%]">
          {project.location}
        </h1>
        <Link href={project.locationLink} target="_blank">
          <Button text="Get Google Location" />
        </Link>
      </section>
    </div>
  );
};

export default LocationCTA;
