import React from "react";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";

// Data Array
const locations = [
  { name: "Hanspura", projects: 1, status: "Ready to Move" },
  { name: "Vastral", projects: 1, status: "Under Construction" },
  { name: "Vastral", projects: 1, status: "Ready to Possession time" },
  { name: "Hathijan", projects: 1, status: "Ready to Possession time" },
  { name: "Raypur Dabhoda", projects: 1, status: "Comming Soon" },
  { name: "Vatava", projects: 1, status: "Comming Soon" },
];

// Utility function to get status styles
const getStatusStyle = (status) => {
  switch (status) {
    case "Ready to Move":
      return "bg-[#D4FF97]";
    case "Under Construction":
      return "bg-[#E6E6E6]";
    case "Ready to Possession time":
      return "bg-[#FFDC95]";
    default:
      return "bg-[#E6E6E6]";
  }
};

// Card Component
const LocationCard = ({ name, projects, status }) => {
  return (
    <div className="bg-gold-lighter px-6 py-5 rounded-xl flex items-center justify-center flex-col gap-1 cursor-pointer">
      <h3 className="text-2xl font-semibold text-gold-dark">{name}</h3>
      <p className="text-black-2">{projects} Project</p>
      <span
        className={`px-3 py-1 rounded-md text-sm font-medium ${getStatusStyle(
          status
        )}`}
      >
        {status}
      </span>
    </div>
  );
};

const WhereWeBuild = () => {
  return (
    <Section>
      <SectionTitle text="Direct Contacts for Every Project Site" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((loc, index) => (
          <LocationCard
            key={index}
            name={loc.name}
            projects={loc.projects}
            status={loc.status}
          />
        ))}
      </div>
    </Section>
  );
};

export default WhereWeBuild;
