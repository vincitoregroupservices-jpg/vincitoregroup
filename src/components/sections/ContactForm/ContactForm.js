"use client";

import Button from "@/components/ui/Button/Button";
import Section from "@/components/ui/Section/Section";
import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Working");

    // Mobile number validation
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Mobile number must be exactly 10 digits!");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", mobile: "", message: "" });
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
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side Info */}
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-black-2">
            Connect With Vincitore
          </h2>
          <p className="text-black-3 text-xl">
            Have questions or want to know more about Vincitore Group’s projects
            and services? We’re here to guide you every step of the way.
          </p>
          <p className="text-black-3 text-xl">
            Our dedicated team is always ready to assist with inquiries,
            partnerships, or investment opportunities — ensuring you get prompt
            responses and reliable solutions.
          </p>

          <div className="flex items-center gap-3">
            <Image
              src={"/icons/Call.svg"}
              height={200}
              width={200}
              alt="call"
              className="h-5 w-5"
            />
            <a
              href="tel:+916353101979"
              className="text-black-3 underline text-xl"
            >
              +91 63531 01979
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={"/icons/Call.svg"}
              height={200}
              width={200}
              alt="call"
              className="h-5 w-5"
            />
            <a
              href="tel:+919033013137"
              className="text-black-3 underline text-xl"
            >
              +91 90330 13137
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={"/icons/email.svg"}
              height={200}
              width={200}
              alt="email"
              className="h-5 w-5"
            />
            <a
              href="mailto:vincitoregroup07@gmail.com"
              className="text-black-3 underline text-xl"
            >
              vincitoregroup07@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          className="flex flex-col gap-3 w-full max-w-[500px] m-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-xl bg-gold-lighter w-full py-3 rounded-sm px-5 placeholder:text-gold-dark text-black-2 outline-none"
            placeholder="Your Name"
            required
          />

          <div className="text-xl bg-gold-lighter h-[50px] flex items-center gap-0 rounded-sm">
            <span className="pl-5 text-black-2">+91</span>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              maxLength={10}
              className="bg-gold-lighter h-full w-full px-3 py-3 placeholder:text-gold-dark text-black-2 outline-none"
              placeholder="Mobile Number"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[240px] text-xl bg-gold-lighter px-5 py-2 placeholder:text-gold-dark text-black-2 outline-none w-full h-[150px] resize-y rounded-sm"
            placeholder="Message..."
            required
          ></textarea>
          

          <div className="flex flex-col items-start">
            <Button
              text="Submit"
              className="w-[140px] text-sm py-3 mb-2"
              loading={isLoading}
              type={"submit"}
            />

            <p className="text-[10px] text-black-3">
              *By submitting you agree on our Terms and Conditions
            </p>
          </div>
        </form>
      </div>

      {/* <ToastContainer position="bottom-right" autoClose={3000} /> */}
    </Section>
  );
};

export default ContactForm;
