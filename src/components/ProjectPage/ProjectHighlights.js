"use client";
import Link from "next/link";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { useState } from "react";

export default function ProjectHighlights({ project }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [current, setCurrent] = useState(0); // 0 = Residential, 1 = Commercial

  const hasResidential = !!project.residential;
  const hasCommercial = !!project.commercial;

  const currentType =
    current === 0 && hasResidential
      ? project.residential
      : current === 1 && hasCommercial
      ? project.commercial
      : null;

  const currentTitle = current === 0 ? "Residential Spaces" : "Commercial Spaces";

  return (
    <Section>
      <SectionTitle text={`${project.name} - Project Highlights`} />

      {/* 🔁 Tab Switcher */}
      <div className="bg-gold-light relative rounded-full flex text-center text-xl font-medium cursor-pointer w-full md:w-[600px] mx-auto mb-8">
        {hasResidential && (
          <h1
            onClick={() => setCurrent(0)}
            className={`w-[50%] py-3 rounded-full z-10 transition-colors duration-200 ${
              current === 0 ? "text-black1" : "text-black1"
            }`}
          >
            Residential
          </h1>
        )}
        {hasCommercial && (
          <h1
            onClick={() => setCurrent(1)}
            className={`w-[50%] py-3 rounded-full z-10 transition-colors duration-200 ${
              current === 1 ? "text-black1" : "text-black1"
            }`}
          >
            Commercial
          </h1>
        )}
        <span
          className={`absolute top-0 left-0 w-[50%] h-full bg-gold rounded-full transition-transform duration-300 ease-in-out`}
          style={{
            transform: current === 0 ? "translateX(0%)" : "translateX(100%)",
          }}
        />
      </div>

      {/* 💼 Card Section */}
      {currentType ? (
        <div className="p-10 md:min-w-[500px] bg-gold-lighter rounded-xl flex flex-col gap-5 items-center justify-center max-w-3xl mx-auto text-center">
          <div className="flex gap-3 flex-col">
            <h3 className="text-3xl font-semibold">{currentTitle}</h3>
            <span className="bg-gold-dark h-[2px] w-auto mx-20" />
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <h2 className="text-2xl text-black-2 font-medium">
              {currentType.spaces}
            </h2>
            <p className="text-black-1 font-medium">{currentType.units}</p>
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <p className="text-black-1 font-medium">Sizes:</p>
            <h2 className="text-3xl text-gold-dark font-semibold">
              {currentType.sizeRange}
            </h2>
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <p className="text-black-1 font-medium">Price Starting:</p>
            <h2 className="text-3xl text-gold-dark font-semibold">
              {currentType.priceFrom}
            </h2>
          </div>

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
                        alt="Call Icon"
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
      ) : (
        <div className="text-center text-gray-500 text-lg font-medium py-10">
          {current === 0
            ? "No Residential Details Available!"
            : "No Commercial Details Available!"}
        </div>
      )}
    </Section>
  );
}
