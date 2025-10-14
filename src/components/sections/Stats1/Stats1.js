import CTASection from "@/components/ui/CTASection/CTASection";
import Section from "@/components/ui/Section/Section";
import Stats from "@/components/ui/Stats/Stats";
import React from "react";

const Stats1 = () => {
  return (
    <>
      <section className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 gap-10">
        <Stats
          stats={[
            {
              value: "7+",
              label: "Masterpiece Projects",
              punch: "+",
              decimalPlaces: 0,
            },
            {
              value: "10+",
              label: "Years of Experience",
              punch: "+",
              decimalPlaces: 0,
            },
            {
              value: "2.1M+",
              label: "Sq. Ft. Under Construction",
              punch: "M+",
              decimalPlaces: 1,
            },
          ]}
        />
      </section>
      <Section className='mt-10'>
        <CTASection
          title={["More Than a Builder,", "We’re Visionaries."]}
          description="At Vincitore Group, we blend innovation, craftsmanship, and passion to create spaces that inspire. Our mission is to shape environments where elegance meets functionality, and every detail tells a story."
          btnText="Meet Vincitore Group"
          url="/about"
        />
      </Section>
    </>
  );
};

export default Stats1;
