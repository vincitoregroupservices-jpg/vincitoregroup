"use client";
import Button from "@/components/ui/Button/Button";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InvestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    amount: "",
    interest: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mobile validation
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Number must be 10 digits!");
      return;
    }

    if (!formData.interest) {
      toast.error("Please select Interest Type!");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/sendInvestEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        toast.success("Investor enquiry sent successfully!");
        setFormData({ name: "", mobile: "", amount: "", interest: "" });
      } else {
        toast.error("Failed to send enquiry!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section className="flex flex-col gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 form-gsap">
      <SectionTitle text="Enquiry for Investors" />
      <div className="flex flex-row justify-center mb-20 gap-5">
        <Image
          height={1000}
          width={1000}
          src={"/images/hand-shake.png"}
          alt="Hand Shake"
          className="w-[400px] h-[300px] rounded-2xl hidden md:flex"
        />
        <form className="flex flex-col gap-3 w-[500px]" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-base bg-gold-lighter w-full py-3 rounded-sm px-5 placeholder:text-gold-dark text-black-2 outline-none"
            placeholder="Your Name"
            required
          />

          <div className="text-base bg-gold-lighter h-[50px] flex items-center rounded-sm">
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

          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="text-base bg-gold-lighter w-full py-3 rounded-sm px-5 placeholder:text-gold-dark text-black-2 outline-none"
            placeholder="Approximate Amount to Invest (in Lacs)"
            required
          />

          <Select
            value={formData.interest}
            onValueChange={(value) =>
              setFormData({ ...formData, interest: value })
            }
          >
            <SelectTrigger className="text-base border-none shadow-none w-fit bg-gold-lighter text-gold-dark">
              {formData.interest || "Interest Type"}
            </SelectTrigger>
            <SelectContent className="bg-gold-lighter text-gold-dark">
              <SelectItem className="focus:bg-gold-light" value="Residential">
                Residential
              </SelectItem>
              <SelectItem className="focus:bg-gold-light" value="Commercial">
                Commercial
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col items-start mt-2">
            <Button
              type="submit"
              text="Submit"
              className="w-[140px] text-sm py-3 mb-2"
              loading={isLoading}
            />
            <p className="text-[10px] text-black-3">
              *By submitting you agree on our Terms and Conditions
            </p>
          </div>
        </form>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </Section>
  );
};

export default InvestForm;
