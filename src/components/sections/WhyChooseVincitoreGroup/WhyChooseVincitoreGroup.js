import FeatureCard from "@/components/cards/FeatureCard/FeatureCard";
import Description from "@/components/ui/Description/Description";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { features } from "../../../../public/features";
import Button from "@/components/ui/Button/Button";
import CTASection from "@/components/ui/CTASection/CTASection";
import Link from "next/link";

const WhyChooseVincitoreGroup = () => {
  return (
    <>
      <Section className="items-center">
        <SectionTitle text="Why Choose Vincitore Group?" />
        <Description text="Because your vision deserves more than just a building — it deserves a masterpiece. At Vincitore Group, we bring together expertise, innovation, and a passion for excellence to create spaces that stand the test of time." />
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 justify-center items-center w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>

        <Link href="about" className="flex justify-center">
          <Button text="Discover the Vincitore Difference" />
        </Link>
      </Section>
      <Section className="mt-5">
        <CTASection
          title={["Have a Vision?", "Let’s Build It Together."]}
          description="Whether you’re looking to invest, collaborate, or bring your dream project to life, Vincitore Group is here to make it happen. Share your ideas with us today."
          btnText="Explore Now"
          url="/invest"
        />
      </Section>
    </>
  );
};

export default WhyChooseVincitoreGroup;
