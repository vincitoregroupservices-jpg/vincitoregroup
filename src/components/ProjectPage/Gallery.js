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
import { Skeleton } from "../ui/skeleton";

const Gallery = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({}); // ✅ Track which images are loaded

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const hasVideos = Array.isArray(project.video) && project.video.length > 0;

  return (
    <Section className="items-center">
      <SectionTitle text="Your Dream Home in Pictures" />

      {/* Tabs Switch */}
      <div className="bg-gold-light relative rounded-full flex text-center text-xl font-medium cursor-pointer w-full md:w-[600px]">
        <h1
          onClick={() => setCurrent(0)}
          className={`w-[50%] py-3 rounded-full z-10 transition-colors duration-200 ${
            current === 0 ? "text-black1" : "text-black1"
          }`}
        >
          Photos
        </h1>
        <h1
          onClick={() => setCurrent(1)}
          className={`w-[50%] py-3 rounded-full z-10 transition-colors duration-200 ${
            current === 1 ? "text-black1" : "text-black1"
          }`}
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

      {/* Photos Section */}
      {current === 0 ? (
        <Carousel className="w-full flex flex-col md:block mt-6">
          <CarouselContent
            className={"flex md:w-[600px] gap-5 items-start justify-start"}
          >
            {project.gallery.map((ele, index) => (
              <CarouselItem
                key={index}
                className="relative w-full h-auto aspect-[16/9] overflow-hidden rounded-lg"
              >
                {!loadedImages[index] && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
                )}

                <Image
                  src={ele.src}
                  alt={project.name}
                  fill
                  className={`object-cover object-center cursor-pointer transition-opacity duration-500 ${
                    loadedImages[index] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadingComplete={() => handleImageLoad(index)}
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
        /* 🎥 Iframe Video Section */
        <div className="w-full flex justify-center mt-6">
          {hasVideos ? (
            <Carousel className="w-full flex flex-col md:block">
              <CarouselContent
                className={"flex md:w-[600px] gap-5 items-start justify-start"}
              >
                {project.video.map((url, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full aspect-video overflow-hidden rounded-lg"
                  >
                    <iframe
                      src={url}
                      title={`${project.name} Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
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
            <div className="text-center text-gray-500 text-lg font-medium py-10">
              No Videos Available!
            </div>
          )}
        </div>
      )}
    </Section>
  );
};

export default Gallery;
