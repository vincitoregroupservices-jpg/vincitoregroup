import LocationSection from "@/components/sections/LocationSection/LocationSection";
import CTASection from "@/components/ui/CTASection/CTASection";
import DirectContacts from "@/components/ui/DirectContacts/DirectContacts";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";
import WhereWeBuild from "@/components/ui/WhereWeBuild/WhereWeBuild";
import Image from "next/image";

export const metadata = {
  title: "Territories We Serve | Vincitore Group",
  description:
    "Explore Vincitore Group’s growing footprint across prime locations in India. We build landmarks that inspire trust, elevate lifestyles, and blend luxury with sustainability.",
  keywords: [
    "Vincitore Group Locations",
    "Territories We Serve",
    "Real Estate Developers India",
    "Luxury Real Estate Projects",
    "Residential and Commercial Properties",
    "Construction Company",
    "Property Development",
    "Vincitore Projects",
  ],
  openGraph: {
    title: "Territories We Serve | Vincitore Group",
    description:
      "Discover where Vincitore Group builds excellence — from premium residential projects to landmark commercial spaces across India.",
    url: "https://www.vincitoregroup.in/territories",
    siteName: "Vincitore Group",
    images: [
      {
        url: "/projects/vincitore-vintage/VincitoreVintage-1.jpg",
        width: 1200,
        height: 630,
        alt: "Vincitore Group Territories - Expanding Horizons",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Territories We Serve | Vincitore Group",
    description:
      "Explore the regions where Vincitore Group continues to build trust and redefine excellence in real estate.",
    images: ["/projects/vincitore-vintage/VincitoreVintage-1.jpg"],
  },
};

export default function TerritoryPage() {
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
