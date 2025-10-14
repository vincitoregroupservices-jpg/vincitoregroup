"use client";
import { useState, use, useEffect } from "react";
import { notFound } from "next/navigation";
import HeroSection from "@/components/ProjectPage/HeroSection";
import Line from "@/components/ui/Line/Line";
import Section from "@/components/ui/Section/Section";
import Button from "@/components/ui/Button/Button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectHighlights from "@/components/ProjectPage/ProjectHighlights";
import GoogleMap from "@/components/ProjectPage/GoogleMap";
import LocationAdvantage from "@/components/ProjectPage/LocationAdvantage";
import WhyChoose from "@/components/ProjectPage/WhyChoose";
import CTASection from "@/components/ProjectPage/CTASection";
import RERACompliance from "@/components/ProjectPage/ReraCompliance";
import LocationCTA from "@/components/ProjectPage/LocationCTA";
import Gallery from "@/components/ProjectPage/Gallery";
import Amenities from "@/components/ProjectPage/Amenities";
import projectData from "@/data/projectData";
import gsap from "gsap";

export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const project = projectData.find((p) => p.slug === slug);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    gsap.from("#bottom-gsap", {
      opacity: 0,
      y: 20,
      duration: 1,
    });
  }, []);
  if (!project) return notFound();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleDownload = async (e) => {
    console.log("Working");

    e.preventDefault();
    const { name, mobile } = formData;

    if (!name.trim() || !mobile.trim()) {
      toast.error("Please enter your name and mobile number!");
      return;
    } else if (mobile.trim().length !== 10) {
      toast.error("Number must be 10 digits!");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/downloadBrochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, mobile, project: project.name }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Email sent! Your brochure will start downloading...");
        setDialogOpen(false);

        setTimeout(() => {
          const link = document.createElement("a");
          link.href = project.brochure;
          link.download = `${project.name}.pdf`;
          link.click();
        }, 1500);

        setFormData({ name: "", mobile: "" });
      } else {
        toast.error("Failed to send email!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <main className="w-full">
      <HeroSection project={project} />
      <Line />
      <ProjectHighlights project={project} />
      <Line />
      <Amenities project={project} />
      <Line />
      <Gallery project={project} />
      <Line />
      <LocationAdvantage project={project} />
      <Line />
      <GoogleMap project={project} />
      <Line />
      <WhyChoose project={project} />
      <Line />
      <LocationCTA project={project} />
      <RERACompliance project={project} />
      <CTASection project={project} />

      {/* Fixed bottom bar */}
      <div
        id="bottom-gsap"
        className="flex gap-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex-row justify-center md:justify-between items-center bg-gold-lighter py-3 fixed bottom-0 w-full z-30"
      >
        <div className="hidden md:flex flex-col text-gold-dark">
          RERA Registration No.
          <h1 className="text-4xl font-bold">MAA10160</h1>
        </div>

        <div className="w-full md:w-fit text-gold-dark flex items-center justify-between gap-4">
          {project.name}

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger>
              <Button text={"Download Brochure"} />
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] bg-background">
              <DialogHeader>
                <DialogTitle>Download Brochure</DialogTitle>
                <DialogDescription>
                  Please fill your details to download the brochure.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleDownload}
                className="flex flex-col gap-3 mt-2"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="text-xl bg-gold-lighter w-full py-3 rounded-sm px-5 placeholder:text-gold-dark text-black-2 outline-none"
                  required
                />

                <div className="text-xl bg-gold-lighter h-[50px] flex items-center rounded-sm">
                  <span className="pl-5 text-black-2">+91</span>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="Mobile Number"
                    className="bg-gold-lighter h-full w-full px-3 py-3 placeholder:text-gold-dark text-black-2 outline-none"
                    required
                  />
                </div>

                <p className="text-[10px] text-black-3">
                  *By submitting you agree to our Terms and Conditions
                </p>
                <div onClick={handleDownload}>
                  <Button
                    text={isLoading ? "Downloading" : "Download Now"}
                    downloadBtn={true}
                    disabled={isLoading}
                    loading={isLoading}
                  />
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
}
