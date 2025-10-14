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

      <div className="relative">
        <div ref={scrollRef} className={styles.amenitiesCarousel}>
          {project.amenities.map((item, index) => (
            <div key={index} className={styles.amenityCard}>
              <div className="h-14 w-14 md:h-20 md:w-20 rounded-full flex items-center justify-center bg-gold p-3 md:p-5">
                {/* <Image
                  src={`/amenities/gym.svg`}
                  width={40}
                  height={40}
                  className="h-full w-auto"
                  alt={item.name}
                /> */}
                <span className="material-symbols-outlined h-full w-auto bg-red-200 text-[#111]">fitness_center</span>
              </div>
              <p className="mt-2 text-xs md:text-lg font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
