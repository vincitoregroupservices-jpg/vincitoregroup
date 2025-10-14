"use client";
import Button from "@/components/ui/Button/Button";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import projectData from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LocationSection = ({ title, CTABtn }) => {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <Section>
      <SectionTitle text={title} />

      {/* Page Container */}
      <div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* Column 1 - Locations */}
          <div
            className="flex flex-col gap-4 w-full md:w-1/2 h-[500px] overflow-y-auto pr-2 
                snap-y snap-mandatory"
          >
            {projectData.map((loc, index) => (
              <div
                key={index}
                onClick={() => setCurrentLocation(loc.locationEmbed)}
                className="flex gap-5 bg-gold-lighter p-3.5 rounded-lg cursor-pointer 
                 snap-start"
              >
                <Image
                  src={`${loc.thumbnail}`}
                  alt={loc.title}
                  height={2000}
                  width={2000}
                  className="h-[80px] w-[80px] object-cover rounded-md"
                />

                <div className="flex flex-col text-black-2">
                  <h3 className="text-xl font-semibold">{loc.name}</h3>
                  <div className="text-sm text-gray-700 leading-snug">
                    <p>{loc.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Column 2 - Map */}
          <div className="w-full md:w-1/2 flex border border-gold-dark rounded-lg flex-col">
            <iframe
              src={
                currentLocation ||
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7623603978586!2d72.67779847477154!3d23.06917231458857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87ff196f3299%3A0x2d473d0c76111f6e!2sVincitore%20Sky!5e0!3m2!1sen!2sin!4v1756989179642!5m2!1sen!2sin"
              }
              className="w-full rounded-lg flex-1 aspect-square md:aspect-auto"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex sm:hidden flex-wrap justify-center py-5 gap-3">
              {projectData.map((loc, index) => (
                <div
                  key={index}
                  className="px-3 py-2 text-lg bg-gold-lighter-2 rounded"
                  onClick={() => {
                    setCurrentLocation(loc.locationEmbed);
                  }}
                >
                  {loc.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {CTABtn ? (
        <Link href={"/territory"} className="flex justify-center">
          <Button text="Explore All Locations" />
        </Link>
      ) : null}
    </Section>
  );
};

export default LocationSection;
