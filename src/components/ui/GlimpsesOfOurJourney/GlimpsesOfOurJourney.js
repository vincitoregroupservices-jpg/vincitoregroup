import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import Stats from "../Stats/Stats";
import { Marquee } from "../marquee";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../scroll-based-velocity";

const GlimpsesOfOurJourney = () => {
  const images = [
    [
      "/Photos/gallery1.jpg",
      "/Photos/gallery2.jpg",
      "/Photos/gallery5.jpg",
      "/Photos/gallery3.jpg",
      "/Photos/gallery7.jpg",
      "/Photos/gallery4.jpg",
    ],
    [
      "/Photos/gallery9.jpg",
      "/Photos/gallery6.jpg",
      "/Photos/gallery8.jpg",
      "/Photos/gallery10.jpg",
      "/Photos/gallery11.jpg",
      "/Photos/gallery12.jpg",
    ],
  ];
  return (
    <Section className="flex items-center justify-center mb-10">
      <Image
        src={"/images/Glimpses.png"}
        width={1000}
        height={1000}
        alt="Glimpses"
        className="w-[80vw] h-[auto] object-cover"
      />
      <h1 className="text-4xl font-light text-black-3 text-center md:w-full w-[70%]">
        Turning Vision{" "}
        <span className="font-medium text-gold-dark">into Reality.</span>
      </h1>
      <p className="font-light text-black-3 text-2xl text-center">
        At Vincitore, every project tells a story of trust, excellence, and
        lasting value. Here are some of our milestones that define who we are.
      </p>
      <Stats
        stats={[
          {
            value: "7+",
            label: "Total Projects (still Continue)",
            punch: "+",
          },
          {
            value: "2.1",
            label: "Sq. Ft. Under Construction",
            punch: "M+",
            decimalPlaces: 1
          },
          {
            value: "90",
            label: "Client Retention",
            punch: "%",
          },
        ]}
      />
      <h1 className="text-4xl mt-5 font-light text-black-3 text-center md:w-full w-[70%]">
        Glimpses of{" "}
        <span className="font-medium text-gold-dark">Our Journey.</span>
      </h1>
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-1">
          {images[0].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              width={600}
              height={400}
              className="mx-1 inline-block h-40 w-60 rounded-sm object-cover shadow-sm"
            />
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1} className="">
          {images[1].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              width={600}
              height={400}
              className="mx-1 inline-block h-40 w-60 rounded-sm object-cover shadow-sm"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      {/* <div className="columns-3 sm:columns-2 md:columns-3 gap-2 space-y-2">
        {images.map((src, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-[10px] md:rounded-xl cursor-pointer"
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto rounded-[10px] md:rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div> */}
    </Section>
  );
};

export default GlimpsesOfOurJourney;
