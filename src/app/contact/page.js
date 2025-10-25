import ContactForm from "@/components/sections/ContactForm/ContactForm";
import LocationSection from "@/components/sections/LocationSection/LocationSection";
import CTASection from "@/components/ui/CTASection/CTASection";
import DirectContacts from "@/components/ui/DirectContacts/DirectContacts";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Line from "@/components/ui/Line/Line";

export default function Home() {
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
