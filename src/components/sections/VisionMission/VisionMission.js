import CTASection from "@/components/ui/CTASection/CTASection";
import Description from "@/components/ui/Description/Description";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import VisionMissionCards from "@/components/ui/VisionMissionCards";
import Image from "next/image";
import React from "react";

const VisionMission = () => {
  return (
    <Section>
      <SectionTitle text={"Our Vision and Mission"} />
      <Description
        text={
          "At Vincitore Group, every project begins with a purpose — to create spaces that inspire, connect, and stand the test of time."
        }
      />

      <VisionMissionCards />

      <CTASection
        title={["Have a Vision?", "Let’s Build It Together."]}
        description={
          "Whether you’re looking to invest, collaborate, or bring your dream project to life, Vincitore Group is here to make it happen. Share your ideas with us today."
        }
        btnText={"Enquire Now"}
        url="/invest"
      />

      
    </Section>
  );
};

export default VisionMission;
