import Image from "next/image";
import React from "react";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import Link from "next/link";

const RERACompliance = ({ project }) => {
  return (
    <Section className="my-20">
      <SectionTitle text="RERA Compliance" />
      <div className="bg-gold-lighter-2 rounded-xl flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-center p-6 md:p-8">
        {/* QR Code */}
        <div className="flex justify-center items-center bg-white rounded-md">
          <Image
            src={`/Rera_QR/${project.rera.qr}`}
            alt="RERA QR Code"
            width={500}
            height={500}
            className="h-[200px] w-[200px] object-contain rounded-2xl"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-black-3 text-sm">RERA Registration No.</p>
          <h3 className="text-4xl font-semibold text-black-2">
            {project.rera.reraNumber}
          </h3>
          <Link
            href={project.rera.reraLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-5" text="View Details" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default RERACompliance;
