"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button/Button";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("working");
    e.preventDefault();
    setLoading(true);

    // Validate mobile number (10 digits)
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      toast.error("Number must be 10 digits!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", mobile: "", message: "" }); // clear form
        setLoading(false);
      } else {
        toast.error("Failed to send email!");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <Section className="mb-8 sm:mb-8 md:mb-8 lg:mb-16 xl:mb-16">
      <SectionTitle text="Have Questions? We’re Here to Help" />
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
            className="bg-gold-lighter h-full w-full px-3 py-3 placeholder:text-gold-dark text-black-2 outline-none"
            placeholder="Mobile Number"
            required
            maxLength={10} // limit typing to 10 digits
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
            type="submit"
            className="mb-2"
            loading={loading}
          />
          <p className="text-[10px] text-black-3">
            *By submitting you agree on our Terms and Conditions
          </p>
        </div>
      </form>
      {/* Toast Container */}
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Section>
  );
};

export default QuestionSection;
