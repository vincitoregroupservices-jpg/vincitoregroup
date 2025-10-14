"use client";
import React, { useState } from "react";
import Section from "../ui/Section/Section";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Gallery = ({ project }) => {
  const [current, setCurrent] = useState(0);
  return (
    <Section className="items-center">
      <SectionTitle text="Your Dream Home in Pictures" />
      <div className="bg-gold-light relative rounded-full flex text-center text-xl font-medium cursor-pointer w-full md:w-[600px]">
        <h1
          onClick={() => setCurrent(0)}
          className="w-[50%] py-3 rounded-full z-1"
        >
          Photos
        </h1>
        <h1
          onClick={() => setCurrent(1)}
          className="w-[50%] py-3 rounded-full z-1"
        >
          Videos
        </h1>
        <span
          className={`absolute top-0 left-0 w-[50%] h-full bg-gold rounded-full transition-transform duration-300 ease-in-out`}
          style={{
            transform: current === 0 ? "translateX(0%)" : "translateX(100%)",
          }}
        />
      </div>
      {current === 0 ? (
        <Carousel className="w-full flex flex-col md:block">
          <CarouselContent className={"flex md:w-[600px] gap-5 items-start justify-start"}>
            {project.gallery.map((ele, index) => (
              <CarouselItem key={index} className="relative w-full h-auto aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={ele.src}
                  alt={project.name}
                  fill
                  className="object-cover object-center cursor-pointer"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
            <CarouselPrevious
              className={
                "cursor-pointer bg-gold-lighter hover:bg-gold-light hidden md:flex"
              }
            />
            <CarouselNext
              className={
                "cursor-pointer bg-gold-lighter hover:bg-gold-light hidden md:flex"
              }
            />
          </div>
        </Carousel>
      ) : (
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`${project.video}?autoplay=1&mute=1`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
