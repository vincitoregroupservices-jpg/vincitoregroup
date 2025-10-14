import React from "react";
import Section from "../ui/Section/Section";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

const LocationAdvantage = ({ project }) => {
  return (
    <Section>
      <SectionTitle text={"Location Advantage"} />
      <ol className="text-md w-[80%] md:w-[60%] m-auto marker:text-gold-dark list-disc">
        {project.locationAdvantages.map((ele, index) => (
          <li key={index} className="my-3">
            {ele}
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default LocationAdvantage;
