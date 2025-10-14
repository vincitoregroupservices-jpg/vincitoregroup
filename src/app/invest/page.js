import AboutOurInvestments from "@/components/sections/AboutOurInvestments/AboutOurInvestments";
import InvestForm from "@/components/sections/InvestForm/InvestForm";
import WhyInvestWithUs from "@/components/sections/WhyInvestWithUs/WhyInvestWithUs.js";
import GlimpsesOfOurJourney from "@/components/ui/GlimpsesOfOurJourney/GlimpsesOfOurJourney";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";

export default function Home() {
  return (
    <main>
      <HeroSection
        title={["Invest Smart,", "Grow Vincitore."]}
        decription={[
          "Premium real estate opportunities",
          "for high returns and growth.",
        ]}
        image="/images/Invest.jpg"
      />
      <AboutOurInvestments />
      <Line />
      <WhyInvestWithUs />
      <Line />
      <GlimpsesOfOurJourney />
      <Line />
      <InvestForm />
    </main>
  );
}
