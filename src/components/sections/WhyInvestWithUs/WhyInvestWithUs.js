import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import React from "react";
import FeatureCard from "@/components/cards/FeatureCard/FeatureCard";
import { WhyInvestWithUsData } from "../../../../public/features";

const WhyInvestWithUs = () => {
  return (
    <Section>
      <SectionTitle text="Why Invest With Us" />
      <div
        className="grid gap-5
                grid-cols-2 md:grid-cols-2 xl:grid-cols-3 justify-center items-center"
      >
        {WhyInvestWithUsData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </Section>
  );
};

export default WhyInvestWithUs;
