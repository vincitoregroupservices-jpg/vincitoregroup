import TeamMember from "@/components/cards/TeamMember/TeamMember";
import Leader from "@/components/ui/Leader/Leader";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import React from "react";
import { teamMembers } from "../../../../public/teamMembers";
import Team from "@/components/ui/Team/Team";

const LeaderAndTeam = () => {
  return (
    <Section>
      <SectionTitle text={"Meet Our Visionary Leader"} />
      <Leader />
      <Team />
    </Section>
  );
};

export default LeaderAndTeam;
