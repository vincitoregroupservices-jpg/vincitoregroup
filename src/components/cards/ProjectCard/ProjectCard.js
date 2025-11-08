import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title,
  location,
  category_title_1,
  category_price_1,
  category_size_1,
  category_title_2,
  category_price_2,
  category_size_2,
  imageUrl,
  className,
  status,
  slug,
  review
}) => {
  return (
    <div
      className={`projectCard rounded-2xl overflow-hidden flex flex-col w-[100%] sm:w-[400px] bg-gold-lighter cursor-pointer ${className}`}
    >
      <Link href={`/project/${slug}`}>
        {/* Image Section */}
        <div className="relative">
          <Image
            src={`${imageUrl}`}
            alt={title}
            width={2000}
            height={2000}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 left-3 bg-gold text-black-2 px-3 py-1 rounded-md font-medium text-sm">
            {status}
          </div>
          <div className="absolute bottom-3 left-3 flex gap-2">
            <p className="bg-gold-light text-black-2 px-3 py-1 rounded-lg text-sm font-medium">
              Invest
            </p>
            <button className="bg-gold-light text-black-2 px-3 py-1 rounded-lg text-sm font-medium">
              Buy
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:gap-0">
            <div>
              <h2 className="text-2xl font-bold text-black-2 uppercase">
                {title}
              </h2>
              <p className="text-gold-dark flex items-center gap-1">
                <span>
                  <Image
                    src={"/icons/location.svg"}
                    width={1000}
                    height={1000}
                    className="h-4 w-auto"
                    alt="Project Card Image"
                  />
                </span>
                {location}
              </p>
            </div>

            <div className="">
              <p className="text-xs md:text-right">Google Review</p>

              <div className="flex md:justify-end items-center gap-1 text-gold-dark text-md">
                {review}
                <Image
                  src={"/icons/review_star_fill.svg"}
                  height={1000}
                  width={1000}
                  className="h-5 w-auto"
                  alt="start-of-review"
                />
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-black-2 text-[10px] md:text-xs">
                {category_title_1} Price Starts from
              </p>
              <p className="md:text-2xl xs:text-3xl text-[25px] font-semibold text-gold-dark">
                {category_price_1}
              </p>
              <p className="text-black-3 text-xs">
                {category_title_1} Size starts from
              </p>
              <button className="mt-1 bg-gold-light px-2 py-1 md:px-3 md:py-1 rounded-md font-medium text-black-3 text-[10px] md:text-sm ">
                {category_size_1}
              </button>
            </div>

            {/* Shop Info */}
            <div className={`flex flex-col justify-end text-right`}>
              <p
                className={`${
                  category_price_2 === null ? "hidden" : ""
                } text-black-2 text-[10px] md:text-xs`}
              >
                {category_title_2} Price Starts from
              </p>
              <p
                className={`md:text-2xl xs:text-3xl text-[25px] font-semibold text-gold-dark ${
                  category_price_2 === null ? "hidden" : ""
                }`}
              >
                {category_price_2}
              </p>
              <p
                className={`text-black-3 text-[10px] md:text-xs ${
                  category_title_2 === null ? "hidden" : ""
                } self-end`}
              >
                {category_title_2} Size starts from
              </p>
              <button
                className={`mt-1 bg-gold-light px-2 py-1 md:px-3 md:py-1 rounded-md font-medium text-black-3 text-[10px]  md:text-sm ${
                  category_title_2 === null ? "hidden" : ""
                } self-end`}
              >
                {category_size_2}
              </button>
            </div>
          </div>
          <Button className="w-full" text={"Explore Now"} />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
