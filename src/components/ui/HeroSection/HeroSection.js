"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../Button/Button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = ({ title, decription, btnText, btnHref, image, video }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef([]);
  const descRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
        .from(
          descRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          buttonRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[60vh] md:h-[100vh] flex items-center justify-center text-center mb-15 gap-14 pt-20 overflow-hidden"
    >
      {video ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image
          src={image}
          height={500}
          width={500}
          className="h-full w-full absolute top-0 left-0 -z-1 object-cover"
          alt="Background"
        />
      )}
      <div className="w-full absolute inset-0 bg-black opacity-80"></div>
      <div className="w-[90%] relative z-10 px-5 max-w-3xl flex flex-col gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-light text-gold">
            {title.map((text, index) => (
              <div key={index} ref={(el) => (titleRef.current[index] = el)}>
                {text}
              </div>
            ))}
          </h1>
        </div>
        <div className="text-md md:text-xl text-white max-w-2xl mx-auto">
          {decription.map((text, index) => (
            <div key={index} ref={(el) => (descRef.current[index] = el)}>
              {text}
            </div>
          ))}
        </div>
        {btnHref && (
          <div className="flex justify-center" ref={buttonRef}>
            <Link href={btnHref}>
              <Button text={btnText} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;