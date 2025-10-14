import Description from "../ui/Description/Description";
import Section from "../ui/Section/Section";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

export default function GoogleMap({ project }) {
  return (
    <Section>
      <SectionTitle text={"Location"} />
      <p className="text-xl text-center">{project.location}</p>
      <div className="border-1 border-gold-dark rounded-lg overflow-hidden">
        <iframe
          src={project.locationEmbed}
          className="w-full h-[400px] "
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
}
