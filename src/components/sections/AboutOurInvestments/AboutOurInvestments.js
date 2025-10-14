import Button from "@/components/ui/Button/Button";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutOurInvestments = () => {
  return (
    <Section>
      <SectionTitle text="About Our Investments" />
      <div className="flex flex-col md:flex-row items-center gap-10 h-fit">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            width={2000}
            height={2000}
            src="/images/investment.jpg"
            alt="Investment Opportunities"
            className="rounded-2xl shadow-lg h-[100%] w-auto object-fit"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 md:text-left">
          <p className="text-[#333] text-base md:text-lg leading-relaxed mb-4">
            At Vincitore Group, we specialize in carefully curated real estate
            opportunities that combine security, transparency, and high growth
            potential.
          </p>

          <p className="text-[#333] text-base md:text-lg leading-relaxed mb-6">
            Whether you’re a first-time investor or an institutional partner,
            our investment strategies are designed to deliver:
          </p>

          {/* List */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-start gap-3 text-[#222]">
              <Image
                src={"/icons/ConsistentReturns.svg"}
                width={2000}
                height={2000}
                alt="ConsistentReturns"
                className="w-10 h-auto"
              />
              Consistent Returns
            </div>
            <div className="flex items-center justify-start gap-3 text-[#222]">
              <Image
                alt="LowRisk"
                src={"/icons/LowRisk.svg"}
                width={2000}
                height={2000}
                className="w-10 h-auto"
              />
              Low Risk
            </div>
            <div className="flex items-center justify-start gap-3 text-[#222]">
              <Image
                alt="TrustedPartnerships"
                src={"/icons/TrustedPartnerships.svg"}
                width={2000}
                height={2000}
                className="w-10 h-auto"
              />
              Trusted Partnerships
            </div>
          </div>

          {/* Call Now Button */}
          <Link href={"tel:+916353101979"}>
            <Button text="Call Now" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default AboutOurInvestments;
