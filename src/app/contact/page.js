import ContactForm from "@/components/sections/ContactForm/ContactForm";
import LocationSection from "@/components/sections/LocationSection/LocationSection";
import CTASection from "@/components/ui/CTASection/CTASection";
import DirectContacts from "@/components/ui/DirectContacts/DirectContacts";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";

export const metadata = {
  title: "Contact Us | Vincitore Group",
  description:
    "Get in touch with Vincitore Group — your trusted partner in real estate and construction. Have questions about our projects, investments, or collaborations? We’re here to help you every step of the way.",
  keywords: [
    "Vincitore Group",
    "Contact Vincitore",
    "Real Estate Developers",
    "Construction Company",
    "Property Investment",
    "Ahmedabad Builders",
    "Luxury Apartments",
    "Commercial Projects",
    "Customer Support",
    "Real Estate Consultation",
  ],
  openGraph: {
    title: "Contact Us | Vincitore Group",
    description:
      "Have questions about our projects or investment opportunities? Reach out to Vincitore Group — your trusted construction and real estate experts.",
    url: "https://www.vincitoregroup.in/contact",
    siteName: "Vincitore Group",
    images: [
      {
        url: "/images/client.jpeg",
        width: 1200,
        height: 630,
        alt: "Vincitore Group - Contact Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Vincitore Group",
    description:
      "Connect with Vincitore Group for any real estate, construction, or investment inquiries. We’re just a message away.",
    images: ["/images/client.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <main className="mb-20">
      <HeroSection
        title={["Let’s Connect,", "We’re Here to Help."]}
        decription={[
          "Have questions about our projects, services, or investment opportunities?",
          "Our dedicated team is ready to guide you every step of the way.",
          "Reach out today and we’ll respond with the support you need.",
        ]}
        image={"/images/client.jpeg"}
      />

      <ContactForm />
      <Line />
      <DirectContacts />
      <Line />
      <LocationSection title="Find Vincitore Near You" CTABtn={true} />
      <Line />
      <CTASection
        title={["We don’t just construct buildings", "We craft stories."]}
        description="Every detail serves a purpose, every purpose serves the people who call it theirs."
        btnText="Explore All Projects"
        url="/projects"
      />
    </main>
  );
}
