"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Section from "../ui/Section/Section";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import styles from "./Amenities.module.css"; // make sure file name matches

const Amenities = ({ project }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <SectionTitle text={`World-Class Amenities at ${project.name}`} />

      <div className="relative mt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div ref={scrollRef} className={styles.amenitiesCarousel}>
          {project.amenities.map((item, index) => (
            <div key={index} className={styles.amenityCard}>
              <div className="h-14 w-14 md:h-20 md:w-20 rounded-full flex items-center justify-center bg-gold">
                <span className="material-symbols-outlined text-3xl w-auto text-[#111]">
                  {item.icon}
                </span>
              </div>
              <p className="mt-2 text-xs md:text-lg font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
