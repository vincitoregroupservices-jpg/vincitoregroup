import Image from "next/image";
import React from "react";

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="w-full md:w-[100%] bg-gold-light flex gap-3 items-center rounded-full">
      <Image
        src={image}
        alt={name}
        height={1000}
        width={1000}
        className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-[18px] md:text-2xl font-semibold text-black-3">
          {name}
        </h1>
        <h4 className="text-[13px] md:text-[15px] text-black-3 bg-gold-lighter w-fit px-3 py-1 rounded-[6px]">
          {role}
        </h4>
      </div>
    </div>
  );
};

export default TeamMember;
