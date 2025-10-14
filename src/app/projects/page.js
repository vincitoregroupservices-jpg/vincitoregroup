"use client";
import React, { useState } from "react";
import styles from "./projects.module.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Section from "@/components/ui/Section/Section";
import ProjectCard from "@/components/cards/ProjectCard/ProjectCard";
import Image from "next/image";
import { FilterLabel } from "@/components/ui/FilterLabel/FilterLabel";
import Line from "@/components/ui/Line/Line";
import QuestionSection from "@/components/sections/QuestionSection/QuestionSection";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import { projectData } from "@/lib/projectsData";

const Page = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: ["all"],
    interest: ["all"],
    type: ["all"],
    location: ["all"],
    status: ["all"],
  });

  // toggle select changes (multi-select support)
  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => {
      if (value === "all") {
        return { ...prev, [filterName]: ["all"] };
      }

      const current = prev[filterName];
      // remove "all" if user selects a specific filter
      const updated = current.includes("all")
        ? [value]
        : current.includes(value)
        ? current.filter((v) => v !== value) // deselect
        : [...current, value]; // add new

      return { ...prev, [filterName]: updated.length ? updated : ["all"] };
    });
  };

  // filtered projects
  const filteredProjects = projectData.filter((project) => {
    const matchSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      filters.category.includes("all") ||
      filters.category.some((c) => project.category?.includes(c));

    const matchInterest =
      filters.interest.includes("all") ||
      filters.interest.some((i) => project.interest?.includes(i));

    const matchType =
      filters.type.includes("all") ||
      filters.type.some((t) => project.type?.includes(t));

    const matchLocation =
      filters.location.includes("all") ||
      filters.location.includes(project.location);

    const matchStatus =
      filters.status.includes("all") ||
      filters.status.some(
        (s) => project.status.toLowerCase() === s.toLowerCase()
      );

    return (
      matchSearch &&
      matchCategory &&
      matchLocation &&
      matchStatus &&
      matchInterest &&
      matchType
    );
  });

  const clearAllFilters = () => {
    setFilters({
      category: ["all"],
      interest: ["all"],
      type: ["all"],
      location: ["all"],
      status: ["all"],
    });
    setSearch("");
  };

  return (
    <main>
      <HeroSection
        title={["Crafting Dreams,", "Defining Lifestyles"]}
        decription={[
          "At Vincitore, we don’t just build structures,",
          "we create timeless spaces where elegance meets trust.",
        ]}
        image="/images/craftsmanship.png"
      />

      {/* Search + Filters */}
      <Section className="px-2 sm:px-6 md:px-14 lg:px-20 xl:px-24 -mt-5">
        <div className="flex flex-col gap-3">
          {/* Search bar */}
          <div className="relative w-full">
            <Image
              src={"/icons/search.svg"}
              height={20}
              width={20}
              className="h-5 w-5 absolute left-5 top-[50%] -translate-y-[50%]"
              alt="search"
            />
            <input
              placeholder="Search by property name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-6 py-3 pl-14 rounded-lg w-full bg-gold-lighter outline-none text-gold-dark"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Category */}
            <Select
              onValueChange={(val) => handleFilterChange("category", val)}
            >
              <SelectTrigger className="border-none shadow-none w-fit bg-gold-lighter text-gold-dark">
                Category
              </SelectTrigger>
              <SelectContent className="bg-gold-lighter text-gold-dark">
                <SelectItem className="focus:bg-gold-light" value="all">
                  All
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="residential">
                  Residential
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="commercial">
                  Commercial
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Interest */}
            <Select
              onValueChange={(val) => handleFilterChange("interest", val)}
            >
              <SelectTrigger className="border-none shadow-none w-fit bg-gold-lighter text-gold-dark">
                Interest
              </SelectTrigger>
              <SelectContent className="bg-gold-lighter text-gold-dark">
                <SelectItem className="focus:bg-gold-light" value="all">
                  All
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="Buy">
                  Buy
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="Invest">
                  Invest
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="Lease">
                  Lease
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Types */}
            <Select onValueChange={(val) => handleFilterChange("type", val)}>
              <SelectTrigger className="border-none shadow-none w-fit bg-gold-lighter text-gold-dark">
                Types
              </SelectTrigger>
              <SelectContent className="bg-gold-lighter text-gold-dark">
                <SelectItem className="focus:bg-gold-light" value="all">
                  All
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="2bhk">
                  2BHK
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="3bhk">
                  3BHK
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="4bhk">
                  4BHK
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="5bhk">
                  5BHK
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="showrooms">
                  Showrooms
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="shop">
                  Shop
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Location */}
            <Select
              onValueChange={(val) => handleFilterChange("location", val)}
            >
              <SelectTrigger className="border-none shadow-none w-fit bg-gold-lighter text-gold-dark">
                Location
              </SelectTrigger>
              <SelectContent className="bg-gold-lighter text-gold-dark">
                <SelectItem className="focus:bg-gold-light" value="all">
                  All
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="Hanspura">
                  Hanspura
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="New Vastral">
                  New Vastral
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="Hathijan">
                  Hathijan
                </SelectItem>
                <SelectItem className="focus:bg-gold-light" value="New Vatva">
                  New Vatva
                </SelectItem>
                <SelectItem
                  className="focus:bg-gold-light"
                  value="Naroda Dehgam Highway, Raipur"
                >
                  Raipur, Dhaboda
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Status */}
            <Select onValueChange={(val) => handleFilterChange("status", val)}>
              <SelectTrigger className="outline-none border-none shadow-none w-fit bg-gold-lighter text-gold-dark">
                Status
              </SelectTrigger>
              <SelectContent className="bg-gold-lighter text-gold-dark">
                <SelectItem className="focus:bg-gold-light" value="all">
                  All
                </SelectItem>
                <SelectItem
                  className="focus:bg-gold-light"
                  value="Newly Launch"
                >
                  Newly Launch
                </SelectItem>
                <SelectItem
                  className="focus:bg-gold-light"
                  value="Ready To Move"
                >
                  Ready to Move
                </SelectItem>
                <SelectItem
                  className="focus:bg-gold-light"
                  value="Under Construction"
                >
                  Under Construction
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full h-[1px] bg-gold-light"></div>

          {/* Active Filters */}
          <div className="flex gap-2 flex-wrap mb-3">
            {Object.values(filters).some((arr) => !arr.includes("all")) && (
              <button
                onClick={clearAllFilters}
                className="bg-black-2 text-white px-4 py-2 rounded hover:bg-black-3 transition"
              >
                Clear All
              </button>
            )}
            {Object.entries(filters).map(([key, values]) =>
              values.map(
                (value) =>
                  value !== "all" && (
                    <FilterLabel
                      key={`${key}-${value}`}
                      label={value}
                      onClear={() => handleFilterChange(key, value)}
                    />
                  )
              )
            )}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section className="sm:px-6 md:px-14 lg:px-20 xl:px-24 mb-5">
        {filteredProjects.length > 0 ? (
          <div className="w-full md:w-fit m-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3">
            {filteredProjects.map((data, index) => (
              <ProjectCard
                className={styles.projectCard}
                key={index}
                title={data.title}
                location={data.location}
                category_title_1={data.category_title_1}
                category_price_1={data.category_price_1}
                category_size_1={data.category_size_1}
                category_title_2={data.category_title_2}
                category_price_2={data.category_price_2}
                category_size_2={data.category_size_2}
                imageUrl={data.imageUrl}
                review={data.review}
                status={data.status}
                slug={data.slug}
              />
            ))}
          </div>
        ) : (
          <div className="w-full my-12 flex flex-col items-center justify-center gap-1 mix-blend-multiply">
            <Image
              src="/images/no-projects.gif"
              width={1000}
              height={1000}
              alt="No projects"
              className="h-[20vh] md:h-[30vh] w-auto object-contain bg-blend-multiply"
            />
            <h2 className="text-3xl font-bold text-gold-dark text-center">
              Oops! No Projects Found
            </h2>
            <p className="text-gold-dark text-lg text-center max-w-xs">
              Looks like we don’t have any projects matching your filters. Try
              changing the search or filters above.
            </p>
          </div>
        )}
      </Section>

      <Line />

      <QuestionSection />
    </main>
  );
};

export default Page;
