import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";

export default function HeroSection({ project }) {
  return (
    <>
      <section
        className="relative h-[80vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      >
        {/* Overlay */}
        <div className="w-full absolute inset-0 bg-black opacity-75"></div>

        {/* Content */}
        <div className="relative z-10 flex-col flex md:flex-row md:justify-center md:items-center gap-5 md:gap-10 px-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-gold text-4xl md:text-5xl font-medium">
              {project.name}
            </h1>
            <p className="flex gap-1 text-white">
              <Image
                src={"/icons/location2.svg"}
                height={500}
                width={500}
                className="h-5 w-auto"
                alt="Location Icon"
              />{" "}
              {project.locationSummary} | {project.status}
            </p>
            <p className="flex gap-2">
              {project.interest.map((ele, index) => (
                <span
                  className="bg-gold-light text-black-2 px-3 py-1 rounded-sm text-sm font-medium"
                  key={index}
                >
                  {ele}
                </span>
              ))}
            </p>
          </div>
          <span className="md:h-[100px] md:w-[1px] h-[1px] w-[100px] bg-gold-lighter" />
          <div className="flex flex-col gap-3">
            {project.typeSummary.map((ele, index) => (
              <h3
                key={index}
                className="text-white text-xl md:text-2xl text-left"
              >
                {ele}
              </h3>
            ))}
            <Link href={`tel:${project.contact[0]}`}>
              <Button className={"mt-3"} text="Enquire Now" />
            </Link>
          </div>
        </div>
      </section>
      <Section className="gap-3 items-center justify-center mt-15">
        <h1 className="text-4xl w-[80vw] md:w-[30vw] text-center">
          {project.tagline.heading}
        </h1>
        <span className="h-[2px] w-[100px] bg-gold rounded-full" />
        <p className="text-2xl text-center md:w-[40vw]">
          {project.tagline.description}
        </p>
      </Section>
    </>
  );
}
