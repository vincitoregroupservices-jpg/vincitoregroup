"use client";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/ui/HeroSection/HeroSection"), { ssr: false });
const ContactForm = dynamic(() => import("@/components/sections/ContactForm/ContactForm"), { ssr: false });
const Line = dynamic(() => import("@/components/ui/Line/Line"), { ssr: false });
const DirectContacts = dynamic(() => import("@/components/ui/DirectContacts/DirectContacts"), { ssr: false });
const LocationSection = dynamic(() => import("@/components/sections/LocationSection/LocationSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/ui/CTASection/CTASection"), { ssr: false });

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
        description="Every detail serves a purpose, every purpose serves the people who call it theirs Every detail serves a purpose, every purpose serves the people who call it theirs"
        btnText="Explore All Projects"
        url="/projects"
      />
    </main>
  );
}