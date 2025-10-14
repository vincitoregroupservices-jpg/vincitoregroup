import LeaderAndTeam from "@/components/sections/LeaderAndTeam/LeaderAndTeam";
import OurJourney from "@/components/sections/OurJourney/OurJourney";
import QuestionSection from "@/components/sections/QuestionSection/QuestionSection";
import VisionMission from "@/components/sections/VisionMission/VisionMission";
import WhoAreWe from "@/components/sections/WhoAreWe/WhoAreWe";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection
        title={["Building Beyond", "Boundaries"]}
        decription={[
          "At Vincitore Group, we don’t just create spaces.",
          "we create legacies.",
        ]}
        // btnText="Explore Our Journey"
        // btnHref="/about"
        image="/projects/shivalay-bunglols/ShivalayBunglols-2.jpg"
      />
      <WhoAreWe />
      <Line />
      <VisionMission />
      <Line />
      <LeaderAndTeam />
      {/* <Line />
      <OurJourney /> */}
      <Line />
      <QuestionSection />
    </main>
  );
}
