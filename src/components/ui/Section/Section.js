"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = ({ children, id, label, className = "" }) => {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   const el = sectionRef.current;

  //   gsap.from(el.children, {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     stagger: 0.2,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: el,
  //       start: "top 80%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   // cleanup
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-label={label}
      className={`flex flex-col gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
