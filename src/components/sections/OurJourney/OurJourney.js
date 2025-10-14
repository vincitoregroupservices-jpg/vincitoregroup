import { ArcTimeline } from "@/components/ui/arc-timeline";
import Description from "@/components/ui/Description/Description";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { timelineData } from "@/data/timelineData";
import React from "react";

const OurJourney = () => {
  return (
    <Section>
      <SectionTitle text="A Decade of Vincitore Excellence" />
      <Description text="Over the past decade, Vincitore Group has redefined architectural excellence. From landmark residential projects to luxury developments, our journey reflects innovation, trust, and a legacy built brick by brick." />
      <ArcTimeline
        data={timelineData}
        arcConfig={{
          angleBetweenMinorSteps: 0.5, // ↓ closer spacing between steps
          lineCountFillBetweenSteps: 6, // ↓ fewer filler lines for compact view
          boundaryPlaceholderLinesCount: 10, // ↓ reduces empty space at start & end
        }}
        defaultActiveStep={{
          time: timelineData[0].time,
          stepIndex: 0,
        }}
      />
    </Section>
  );
};

export default OurJourney;
