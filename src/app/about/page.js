import LeaderAndTeam from "@/components/sections/LeaderAndTeam/LeaderAndTeam";
import QuestionSection from "@/components/sections/QuestionSection/QuestionSection";
import VisionMission from "@/components/sections/VisionMission/VisionMission";
import WhoAreWe from "@/components/sections/WhoAreWe/WhoAreWe";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";

export const metadata = {
  title: "About Us | Vincitore Group",
  description:
    "Discover the story of Vincitore Group — a visionary real estate developer building timeless spaces that go beyond boundaries. Learn about our mission, values, leadership, and legacy of excellence.",
  keywords: [
    "Vincitore Group",
    "About Vincitore",
    "Real Estate Developers",
    "Construction Company",
    "Luxury Projects",
    "Property Development",
    "Vision and Mission",
    "Leadership Team",
  ],
  openGraph: {
    title: "About Us | Vincitore Group",
    description:
      "Vincitore Group creates legacies by building spaces that redefine excellence. Meet our leaders and explore our vision.",
    url: "https://www.vincitoregroup.in/about",
    siteName: "Vincitore Group",
    images: [
      {
        url: "/team/Mr. Shailesh Patoliya.png",
        width: 1200,
        height: 1200,
        alt: "About Vincitore Group - Building Beyond Boundaries",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Vincitore Group",
    description:
      "Discover Vincitore Group — creating legacies beyond boundaries through innovation and excellence.",
    images: ["/team/Mr. Shailesh Patoliya.png"],
  },
};

export default function AboutPage() {
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
