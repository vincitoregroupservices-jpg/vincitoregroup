import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Section from "../Section/Section";
import Link from "next/link";

// Data Array
const projects = [
  {
    name: "Vincitore Sky",
    phones: ["+91 78029 26276"],
    location: "Hanspura",
  },
  {
    name: "Vincitore Rivera",
    phones: ["+91 98244 05585", "+91 94262 81284"],
    location: "New Vastral",
  },
  {
    name: "Vincitore Valley",
    phones: ["+91 63531 01979"],
    location: "Hathijan",
  },
  {
    name: "Shivalay Bunglows",
    phones: ["+91 78029 26276"],
    location: "Naroda Dehgam Highway, Raipur",
  },
  {
    name: "The 7 Vincitore",
    phones: ["+91 90330 13137"],
    location: "New Vatva",
  },
  {
    name: "Vincitore Vintage",
    phones: ["+91 97266 54949"],
    location: "New Vastral",
  },
];

// Card Component
const ProjectCard = ({ name, phones, location }) => {
  return (
    <div className="bg-gold-lighter px-6 py-5 rounded-xl flex items-center justify-center flex-col gap-1 cursor-pointer">
      <h3 className="text-2xl font-semibold text-gold-dark">{name}</h3>
      <div className="flex flex-col gap-1">
        {phones.map((phone, i) => (
          <Link  href={`tel:${phone}`} key={i} className="underline text-black-2">
            {phone}
          </Link>
        ))}
      </div>
      <p className="text-black-2">{location}</p>
    </div>
  );
};

// Main Component
const DirectContacts = () => {
  return (
    <Section>
      <SectionTitle text="Direct Contacts for Every Project Site" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            phones={project.phones}
            location={project.location}
          />
        ))}
      </div>
    </Section>
  );
};

export default DirectContacts;
