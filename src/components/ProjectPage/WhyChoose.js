import React from "react";
import Section from "../ui/Section/Section";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

const WhyChoose = ({ project }) => {
  return (
    <Section>
      <SectionTitle text={`Why ${project.name}?`} />
      <ol className="text-md w-[80%] md:w-[60%] m-auto marker:text-gold-dark list-disc">
        {project.Why.map((ele, index) => (
          <li key={index} className="my-3">
            {ele}
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default WhyChoose;
