"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const InvetPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000); // 2s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed right-5 bottom-5 z-[100] ${
        show ? "popup-entry" : "opacity-0"
      } transition-all duration-700`}
    >
      <Link
        href="/invest"
        className="relative cursor-pointer flex items-center justify-center"
      >
        <Image
          src="/InvestCTA.svg"
          alt="Invest CTA Circle"
          height={200}
          width={200}
          className="h-28 w-28 animate-slow-rotate"
        />
        <h1 className="text-white font-semibold text-center text-[10px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-arrow-float">
          More <br/> Info
        </h1>
      </Link>
    </div>
  );
};

export default InvetPopup;
