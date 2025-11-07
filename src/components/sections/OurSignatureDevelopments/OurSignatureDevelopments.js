"use client";
import ProjectCard from "@/components/cards/ProjectCard/ProjectCard";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import React, { useRef, useEffect } from "react";
import styles from "./OurSignatureDevelopments.module.css";
import CTASection from "@/components/ui/CTASection/CTASection";
import { projectData } from "@/lib/projectsData";

const OurSignatureDevelopments = () => {
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);

  // Number of items to duplicate at start and end
  const duplicateCount = projectData.length;

  // Combine original and duplicated items
  const extendedProjectData = [
    ...projectData.slice(-duplicateCount), // Clone last items for the start
    ...projectData, // Original items
    ...projectData.slice(0, duplicateCount), // Clone first items for the end
  ];

  // Initialize scroll position to the start of original items
  useEffect(() => {
    const carousel = carouselRef.current;
    const itemWidth = 400; // Width of each card (matches flex: 0 0 400px)
    const initialScroll = duplicateCount * itemWidth;
    carousel.scrollLeft = initialScroll;

    const handleScroll = () => {
      if (isScrolling.current) return;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const scrollPos = carousel.scrollLeft;

      // If scrolled to the duplicated start, jump to the original end
      if (scrollPos <= itemWidth * (duplicateCount - 1)) {
        isScrolling.current = true;
        carousel.scrollLeft = scrollPos + itemWidth * projectData.length;
        setTimeout(() => (isScrolling.current = false), 0);
      }
      // If scrolled to the duplicated end, jump to the original start
      else if (scrollPos >= maxScroll - itemWidth * (duplicateCount - 1)) {
        isScrolling.current = true;
        carousel.scrollLeft = scrollPos - itemWidth * projectData.length;
        setTimeout(() => (isScrolling.current = false), 0);
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [duplicateCount]);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <>
      <Section className="items-center relative">
        <SectionTitle text="Our Signature Developments" />
        <div className={styles.carousel} ref={carouselRef}>
          {extendedProjectData.map((data, index) => (
            <ProjectCard
              className={styles.projectCard}
              key={`${data.slug}-${index}`} // Unique key for duplicated items
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
        <button className={`${styles.scrollBtn} ${styles.left}`} onClick={scrollLeft}>
          ←
        </button>
        <button className={`${styles.scrollBtn} ${styles.right}`} onClick={scrollRight}>
          →
        </button>
      </Section>
      <Section className="mt-10">
        <CTASection
          title={["We don’t just construct buildings", "We craft stories."]}
          description="Every detail serves a purpose, every purpose serves the people who call it theirs Every detail serves a purpose, every purpose serves the people who call it theirs"
          btnText="Explore All Projects"
          url="/projects"
        />
      </Section>
    </>
  );
};

export default OurSignatureDevelopments;