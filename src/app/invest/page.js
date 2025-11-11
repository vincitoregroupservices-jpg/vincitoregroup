import AboutOurInvestments from "@/components/sections/AboutOurInvestments/AboutOurInvestments";
import InvestForm from "@/components/sections/InvestForm/InvestForm";
import WhyInvestWithUs from "@/components/sections/WhyInvestWithUs/WhyInvestWithUs.js";
import GlimpsesOfOurJourney from "@/components/ui/GlimpsesOfOurJourney/GlimpsesOfOurJourney";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";

export const metadata = {
  title: "Invest with Vincitore Group | Real Estate Investment Opportunities",
  description:
    "Explore premium real estate investment opportunities with Vincitore Group. Invest smart and grow with trusted experts in construction, development, and property investment.",
  keywords: [
    "Vincitore Group",
    "Real Estate Investment",
    "Property Investment",
    "Invest with Vincitore",
    "Construction Company",
    "Luxury Projects",
    "Ahmedabad Real Estate",
    "High Return Investments",
    "Commercial Properties",
    "Residential Projects",
    "Property investment in Ahmedabad",
    "Real estate investment Ahmedabad",
    "Best property to invest in Ahmedabad",
    "High return property Ahmedabad",
    "New investment projects Ahmedabad",
  ],
  openGraph: {
    title:
      "Invest with Vincitore Group | Premium Real Estate Investment Opportunities",
    description:
      "Grow with Vincitore Group — your trusted partner in real estate investments, luxury construction, and development projects with high ROI potential.",
    url: "https://www.vincitoregroup.in/invest",
    siteName: "Vincitore Group",
    images: [
      {
        url: "/images/Invest.jpg",
        width: 1200,
        height: 630,
        alt: "Invest with Vincitore Group - Premium Real Estate Opportunities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest with Vincitore Group | Real Estate Investment Opportunities",
    description:
      "Secure your financial growth with Vincitore Group’s exclusive real estate investment projects across India.",
    images: ["/images/Invest.jpg"],
  },
  alternates: {
    canonical: "https://www.vincitoregroup.in/invest",
  },
};

export default function InvestPage() {
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
      <InvestForm />
      <Line />
      <WhyInvestWithUs />
      <Line />
      <GlimpsesOfOurJourney />
    </main>
  );
}
