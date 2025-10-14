"use client";
import React, { useState, useRef, useEffect } from "react";
import { teamMembers } from "../../../../public/teamMembers";
import TeamMember from "@/components/cards/TeamMember/TeamMember";
import Image from "next/image";

const Team = () => {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("350px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (expanded) {
      // Expand to full scrollHeight
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      // Shrink back
      setMaxHeight("350px");
    }
  }, [expanded]);

  return (
    <div className="relative mt-5">
      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex items-center justify-center gap-2 w-fit px-4 py-2 md:px-6 md:py-2 rounded-md cursor-pointer transition-all duration-300 active:scale-95 bg-gradient-to-r from-gold to-gold-light bg-left hover:bg-right absolute top-[-20px] left-1/2 -translate-x-1/2 z-5"
      >
        <span className="font-medium text-black-2 transition-transform duration-300">
          Our Team
        </span>
        <Image
          src="/icons/arrow.svg"
          width={24}
          height={24}
          alt="arrow"
          className={`h-6 w-auto transition-transform duration-300 ${
            expanded ? "-rotate-90" : "rotate-90"
          }`}
        />
      </button>

      {/* Container with smooth accordion effect */}
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="grid md:grid-cols-2 gap-6 p-3 pt-10 border-[0.5px] border-gold rounded-3xl overflow-hidden relative transition-all duration-700 ease-in-out"
      >
        <div className={`absolute w-full h-full bg-linear-to-b from-lighter to-gold-light top-0 left-0 rounded-3xl  pointer-events-none ${expanded ? "opacity-0" : "opacity-90"}`}/>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
