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

export default function ProjectHighlights({ project }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Section>
      <SectionTitle text={`${project.name} - Project Highlights`} />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
        {project.commercial && (
          <div className="p-10 bg-gold-lighter rounded-xl flex flex-col gap-5 items-center justify-center">
            <div className="flex gap-3 flex-col">
              <h3 className="text-3xl font-semibold">Commercial Spaces</h3>
              <span className="bg-gold-dark h-[2px] w-auto mx-20" />
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="text-2xl text-black-2 font-medium">
                {project.commercial.spaces}
              </h2>
              <p className="text-black-1 font-medium">
                {project.commercial.units}
              </p>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <p className="text-black-1 font-medium">Sizes:</p>
              <h2 className="text-3xl text-gold-dark font-semibold">
                {project.commercial.sizeRange}
              </h2>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <p className="text-black-1 font-medium">Price Starting:</p>
              <h2 className="text-3xl text-gold-dark font-semibold">
                {project.commercial.priceFrom}
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
        )}

        {project.residential && (
          <div className="p-10 bg-gold-lighter rounded-xl flex flex-col gap-5 items-center justify-center">
            <div className="flex gap-3 flex-col">
              <h3 className="text-3xl font-semibold">Residential Spaces</h3>
              <span className="bg-gold-dark h-[2px] w-auto mx-20" />
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="text-2xl text-black-2 font-medium">
                {project.residential.spaces}
              </h2>
              <p className="text-black-1 font-medium">
                {project.residential.units}
              </p>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <p className="text-black-1 font-medium">Sizes:</p>
              <h2 className="text-3xl text-gold-dark font-semibold">
                {project.residential.sizeRange}
              </h2>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <p className="text-black-1 font-medium">Price Starting:</p>
              <h2 className="text-3xl text-gold-dark font-semibold">
                {project.residential.priceFrom}
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
        )}
      </div>
    </Section>
  );
}
