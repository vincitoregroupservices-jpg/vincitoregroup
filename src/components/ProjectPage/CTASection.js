import React from "react";
import Section from "../ui/Section/Section";
import Button from "../ui/Button/Button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";

const CTASection = ({ project }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center py-20"
      style={{
        backgroundImage: `url(${project.thumbnail1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold max-w-3xl">
          {project.tagline.quate}
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={`/contact`}>
            <Button text="Get in Touch" outline noArrow />
          </Link>
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
    </div>
  );
};

export default CTASection;
