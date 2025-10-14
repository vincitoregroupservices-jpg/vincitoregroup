"use client";
import ProjectCard from "@/components/cards/ProjectCard/ProjectCard";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import React, { useRef } from "react";
import styles from "./OurSignatureDevelopments.module.css";
import CTASection from "@/components/ui/CTASection/CTASection";
import { projectData } from "@/lib/projectsData";

const OurSignatureDevelopments = () => {
  const demo = [1, 2, 3, 4, 5, 6];
  const carouselRef = useRef(null);

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
          {projectData.map((data, index) => (
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
