import Amenities from "@/components/ProjectPage/Amenities";
import LocationSection from "@/components/sections/LocationSection/LocationSection";
import OurSignatureDevelopments from "@/components/sections/OurSignatureDevelopments/OurSignatureDevelopments";
import QuestionSection from "@/components/sections/QuestionSection/QuestionSection";
import Stats1 from "@/components/sections/Stats1/Stats1";
import WhyChooseVincitoreGroup from "@/components/sections/WhyChooseVincitoreGroup/WhyChooseVincitoreGroup";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";

export default function Home() {
  return (
    <main>
      <HeroSection
        title={["Your Vision", "Our Foundation"]}
        decription={[
          "Vincitore Group - Transforming dreams into",
          "timeless architectural landmarks.",
        ]}
        btnText="Explore Projects"
        btnHref="/projects"
        video="https://res.cloudinary.com/dwriqxcdz/video/upload//q_auto,f_auto/v1760423832/landingVideo_cyi9aq.mp4"
      />
      <Stats1 />
      <Line />
      <OurSignatureDevelopments />
      <Line />
      <LocationSection title="Where We Shape the Future" CTABtn={true} />
      <Line />
      <WhyChooseVincitoreGroup />
      <Line />
      <QuestionSection />
    </main>
  );
}
