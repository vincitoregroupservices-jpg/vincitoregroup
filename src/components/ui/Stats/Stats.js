"use client";
import React, { useEffect, useRef } from "react";
import { NumberTicker } from "../number-ticker";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = ({ stats }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".label-gsap");

    gsap.from(elements, {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // When 80% of the section is visible
        toggleActions: "play none none reverse", // replay on scroll up/down
      },
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex">
              <NumberTicker
                value={stat.value}
                decimalPlaces={stat.decimalPlaces}
                className="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-gold-dark"
              />
              <p className="text-8xl font-bold tracking-tighter whitespace-pre-wrap text-gold-dark">
                {stat.punch}
              </p>
            </div>
            <p
              className="text-base sm:text-lg md:text-xl text-black-2"
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
