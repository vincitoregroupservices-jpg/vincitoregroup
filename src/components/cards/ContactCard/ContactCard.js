import React from "react";

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
    <div className="bg-[#FFF3DC] p-6 rounded-xl shadow-sm text-center">
      <h3 className="text-xl font-semibold text-[#B36B00] mb-2">{name}</h3>
      <div className="mb-2">
        {phones.map((phone, i) => (
          <p key={i} className="underline text-gray-800">
            {phone}
          </p>
        ))}
      </div>
      <p className="text-gray-700">{location}</p>
    </div>
  );
};

// Main Component
const ContactCards = () => {
  return (
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
  );
};

export default ContactCards;
