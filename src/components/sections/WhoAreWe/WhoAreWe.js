import Description from "@/components/ui/Description/Description";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Stats from "@/components/ui/Stats/Stats";
import React from "react";

const WhoAreWe = () => {
  return (
    <Section>
      <SectionTitle text={"Who Are We"} />
      <Description
        text={
          "Vincitore Group is a name synonymous with luxury, quality, and trust — creating spaces that inspire and endure."
        }
      />
      <Stats
        stats={[
          {
            value: "15",
            label: "Years of Excellence",
            punch: "+",
          },
          {
            value: "1000",
            label: "Happy Families",
            punch: "+",
          },
          {
            value: "50",
            label: "Skilled Experts",
            punch: "+",
          },
        ]}
      />
    </Section>
  );
};

export default WhoAreWe;
