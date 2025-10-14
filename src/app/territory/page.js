import LocationSection from "@/components/sections/LocationSection/LocationSection";
import CTASection from "@/components/ui/CTASection/CTASection";
import DirectContacts from "@/components/ui/DirectContacts/DirectContacts";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";
import WhereWeBuild from "@/components/ui/WhereWeBuild/WhereWeBuild";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-20">
      <HeroSection
        title={["Expanding Horizons,", "Building Bonds."]}
        decription={[
          "Vincitore Group has built its footprint across prime locations,",
          "creating landmarks that inspire trust, elevate lifestyles,",
          "and blend luxury with sustainability.",
        ]}
        image={"/projects/vincitore-vintage/VincitoreVintage-1.jpg"}
      />
      <LocationSection title="Territories We Serve" CTABtn={false} />
      <Line />
      <DirectContacts />
      <Line />
      <WhereWeBuild />
      <Line />
      <CTASection
        title={["We don’t just construct buildings", "We craft stories."]}
        description="Every detail serves a purpose, every purpose serves the people who call it theirs Every detail serves a purpose, every purpose serves the people who call it theirs"
        btnText="Explore All Projects"
        url="/projects"
      />
    </main>
  );
}
