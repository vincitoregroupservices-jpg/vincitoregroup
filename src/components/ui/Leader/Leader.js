import Image from "next/image";
import Link from "next/link";
import React from "react";

const Leader = () => {
  return (
    <>
      <div className="hidden md:block rounded-3xl overflow-hidden">
        <div className="bg-gold-lighter-2 w-full h-fit rounded-t-full md:rounded-none md:rounded-l-full flex items-center justify-between flex-col md:flex-row">
          <Image
            src={"/team/Mr. Shailesh Patoliya.png"}
            width={2000}
            height={2000}
            className="rounded-full w-[400px] h-auto"
            alt="Mr. Shailesh Patoliya"
          />
          <div className="p-8 flex flex-col items-start justify-start gap-3">
            <div>
              <h1 className="text-gold-dark text-3xl md:text-4xl font-medium">
                Mr. Shailesh Patoliya
              </h1>
              <h3 className="text-black-2 text-sm md:text-lg font-medium">
                Founder & Managing Director of Vincitore Group
              </h3>
            </div>
            <p className="text-black-3 text-md font-normal">
              With over 10 years of experience in the real estate industry, Mr.
              Shailesh Patoliya’s journey is a true testament to determination
              and hard work. Delivering homes to more than 1,000 families and
              continuing to create dream spaces for many, his unwavering
              dedication, people-first approach, and deep understanding of the
              market have made him a trusted name in the industry, inspiring
              both clients and colleagues alike.
            </p>
            <div className="flex gap-2 cursor-pointer">
              <Link href={"https://wa.me/917802926276"}>
                <Image
                  target="_blank"
                  alt="Whatsapp Link"
                  src={"/icons/whatsapp.svg"}
                  width={200}
                  height={200}
                  className="w-[30px] h-[30px]"
                />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.facebook.com/share/19Eky2PxVA/?mibextid=wwXIfr"
                }
              >
                <Image
                  src={"/icons/facebook.svg"}
                  alt="Facebook Link"
                  width={200}
                  height={200}
                  className="w-[30px] h-[30px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gold-lighter-2 rounded-lg p-5 md:hidden overflow-hidden">
        <div className="overflow-hidden rounded-2xl">
          <div className="rounded-l-full gap-3 w-full h-fit flex items-center justify-between">
            <Image
              src={"/team/Mr. Shailesh Patoliya.png"}
              width={2000}
              height={2000}
              className="rounded-full w-[120px] h-auto"
              alt="Mr. Shailesh Patoliya"
            />

            <div className="flex flex-col gap-2">
              <h1 className="text-gold-dark text-2xl font-medium">
                Mr. Shailesh Patoliya
              </h1>
              <h3 className="text-black-2 text-sm font-medium">
                Founder & Managing Director of Vincitore Group
              </h3>
              <div className="flex gap-2 cursor-pointer">
                <Link href={"https://wa.me/917802926276"}>
                  <Image
                    target="_blank"
                    alt="Whatsapp Link"
                    src={"/icons/whatsapp.svg"}
                    width={200}
                    height={200}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.facebook.com/share/19Eky2PxVA/?mibextid=wwXIfr"
                  }
                >
                  <Image
                    src={"/icons/facebook.svg"}
                    alt="Facebook Link"
                    width={200}
                    height={200}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-4 flex flex-col items-start justify-start gap-3">
            <p className="text-black-3 text-md font-normal">
              With over 10 years of experience in the real estate industry, Mr.
              Shailesh Patoliya’s journey is a true testament to determination
              and hard work. Delivering homes to more than 1,000 families and
              continuing to create dream spaces for many, his unwavering
              dedication, people-first approach, and deep understanding of the
              market have made him a trusted name in the industry, inspiring
              both clients and colleagues alike.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leader;
