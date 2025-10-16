"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection({ project }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Refs for GSAP
  const headingRef = useRef(null);
  const locationRef = useRef(null);
  const tagsRef = useRef([]);
  const contactRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Location/status fade
    gsap.from(locationRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    // Interest tags stagger
    gsap.from(tagsRef.current, {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      duration: 0.8,
      ease: "power3.out",
    });

    // Contact section slide in
    if (contactRef.current) {
      gsap.from(contactRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <>
      <section
        className="relative h-[80vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      >
        {/* Overlay */}
        <div className="w-full absolute inset-0 bg-black opacity-75"></div>
        <div className="absolute bottom-5 right-5">
          <Button
            text="Share"
            onClick={async () => {
              const shareData = {
                title: project.name,
                text: "Check out this project!",
                url: window.location.href,
              };

              if (navigator.share) {
                try {
                  await navigator.share(shareData);
                } catch (err) {
                  console.error("Error sharing:", err);
                }
              } else {
                // Fallback for desktop
                try {
                  await navigator.clipboard.writeText(shareData.url);
                  alert("URL copied to clipboard!");
                } catch (err) {
                  console.error("Failed to copy URL:", err);
                }
              }
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-col flex md:flex-row md:justify-center md:items-center gap-5 md:gap-10 px-10">
          <div className="flex flex-col gap-3">
            <h1
              ref={headingRef}
              className="text-gold text-4xl md:text-5xl font-medium"
            >
              {project.name}
            </h1>

            <p ref={locationRef} className="flex gap-1 text-white">
              <Image
                src={"/icons/location2.svg"}
                height={500}
                width={500}
                className="h-5 w-auto"
                alt="Location Icon"
              />{" "}
              {project.locationSummary} | {project.status}
            </p>

            <p className="flex gap-2">
              {project.interest.map((ele, index) => (
                <span
                  ref={(el) => (tagsRef.current[index] = el)}
                  className="bg-gold-light text-black-2 px-3 py-1 rounded-sm text-sm font-medium"
                  key={index}
                >
                  {ele}
                </span>
              ))}
            </p>
          </div>

          <span className="md:h-[100px] md:w-[1px] h-[1px] w-[100px] bg-gold-lighter" />

          <div className="flex flex-col gap-3" ref={contactRef}>
            {project.typeSummary.map((ele, index) => (
              <h3
                key={index}
                className="text-white text-xl md:text-2xl text-left"
              >
                {ele}
              </h3>
            ))}

            {project.contact.length > 1 ? (
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger>
                  <Button text={"Enquire Now"} />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-background">
                  <DialogHeader>
                    <DialogTitle>Enquire Now</DialogTitle>
                    <DialogDescription className="mb-4 text-muted-foreground">
                      Select a contact number below to contact us.
                    </DialogDescription>
                    {project.contact.map((ele, index) => (
                      <Link
                        href={`tel:${ele}`}
                        className="text-xl underline cursor-pointer flex gap-3 items-center"
                        key={index}
                        onClick={() => {
                          setDialogOpen(false);
                        }}
                      >
                        <Image
                          src={"/icons/Call.svg"}
                          height={300}
                          width={300}
                          className="h-4 w-auto"
                        />
                        {ele}
                      </Link>
                    ))}
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ) : (
              <Link href={`tel:${project.contact[0]}`}>
                <Button className={"mt-3"} text="Enquire Now" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Section className="gap-3 items-center justify-center mt-15">
        <h1 className="text-4xl w-[80vw] md:w-[30vw] text-center">
          {project.tagline.heading}
        </h1>
        <span className="h-[2px] w-[100px] bg-gold rounded-full" />
        <p className="text-2xl text-center md:w-[40vw]">
          {project.tagline.description}
        </p>
      </Section>
    </>
  );
}
