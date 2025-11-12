import LocationSection from "@/components/sections/LocationSection/LocationSection";
import OurSignatureDevelopments from "@/components/sections/OurSignatureDevelopments/OurSignatureDevelopments";
import QuestionSection from "@/components/sections/QuestionSection/QuestionSection";
import Stats1 from "@/components/sections/Stats1/Stats1";
import WhyChooseVincitoreGroup from "@/components/sections/WhyChooseVincitoreGroup/WhyChooseVincitoreGroup";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";
import InvestPopup from "../components/ui/InvetPopup/InvetPopup";

export const metadata = {
  title: "Vincitore Group - Your Vision, Our Foundation!",
  description:
    "Vincitore Group builds premium residential and commercial projects in Ahmedabad. Discover luxury, quality, and trust with Vincitore Group’s signature developments.",
  keywords: [
    "Vincitore Group",
    "Luxury Construction Company Ahmedabad",
    "Real Estate Developers",
    "Premium Builders Ahmedabad",
    "Residential Projects Ahmedabad",
    "Real estate developer in ahmedabad",
    "New construction homes",
    "Property development projects",
    "Commercial real estate developer",
    "Real estate investments",
    "Construction company in Ahmedabad",
    "Best builder in Ahmedabad",
    "Top construction company Ahmedabad",
    "Real estate developer Ahmedabad",
    "Property developer in Ahmedabad",
    "New projects in Ahmedabad",
    "Building contractor Ahmedabad",
    "Civil construction company Ahmedabad",
    "Residential projects in Ahmedabad",
    "2 BHK flats in Ahmedabad",
    "3 BHK apartments Ahmedabad",
    "Affordable homes Ahmedabad",
    "Luxury flats in Ahmedabad",
    "New housing scheme Ahmedabad",
    "Commercial property in Ahmedabad",
    "Office space in Ahmedabad",
    "Shops for sale in Ahmedabad",
    "Commercial building Ahmedabad",
    "Corporate offices Ahmedabad",
    "Falts in Ahmedabad",
  ],
  openGraph: {
    title: "Vincitore Group | Luxury Construction Company in Ahmedabad",
    description:
      "Transforming dreams into timeless architectural landmarks across Ahmedabad. Explore our premium projects today.",
    url: "https://vincitoregroup.in",
    siteName: "Vincitore Group",
    images: [
      {
        url: "https://vincitoregroup.in/favicon.png",
        width: 1200,
        height: 1200,
        alt: "Vincitore Group - Luxury Construction Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincitore Group | Luxury Builders in Ahmedabad",
    description:
      "Discover luxury living and premium construction projects with Vincitore Group in Ahmedabad.",
    images: ["https://vincitoregroup.in/favicon.png"],
  },
  alternates: {
    canonical: "https://vincitoregroup.in/",
  },
};

// ✅ Page Component
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
      <InvestPopup />
    </main>
  );
}
