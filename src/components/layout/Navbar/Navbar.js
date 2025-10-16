"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navRef = useRef(null);
  const lineRef = useRef(null);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  // menu items array
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About us", path: "/about" },
    { label: "Contact us", path: "/contact" },
    { label: "Territory", path: "/territory" },
    { label: "For Investment", path: "/invest" },
  ];

  useEffect(() => {
    const navbar = navRef.current;
    const line = lineRef.current;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navbar, {
          backgroundColor: "var(--black-1)",
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(line, { opacity: 0, duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(navbar, {
          backgroundColor: "rgba(0,0,0,0)",
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(line, { opacity: 1, duration: 0.5, ease: "power2.out" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(()=>{
    gsap.from('#nav-gsap', {
      opacity: 0,
      y: -10,
      duration: 1
    })
  }, [])

  useEffect(() => {
    if (isOpen) {
      const links = menuRef.current.querySelectorAll(".menu-link");

      // Reset before animating
      gsap.set(links, { opacity: 0, y: 40 });
      gsap.set(btnRef.current, { opacity: 0, y: 40 });

      // Animate one by one
      gsap.to(links, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.3,
      });
      gsap.to(btnRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.15,
        delay: 1.2,
      });
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      id={'nav-gsap'}
      className="w-full fixed top-0 left-0 z-50 flex items-center px-10 py-4 md:px-20 md:py-6 justify-between"
    >
      <span
        ref={lineRef}
        className="h-[0.5px] w-[90%] bg-gold absolute bottom-[-1px] left-1/2 -translate-x-1/2"
      />

      {/* Hamburger */}
      <div
        className="flex flex-col gap-2 md:gap-3 md:w-[40%] z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* ------------------------ */}

        {/* Top Line */}
        <span
          className={`h-0.5 rounded-2xl bg-gold transition-all duration-300 w-6 md:w-8 origin-top-left
            ${
              isOpen ? "rotate-45 -translate-y-[7px] md:-translate-y-[9px]" : ""
            }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`h-0.5 rounded-2xl bg-gold transition-all duration-300 w-6 md:w-8 origin-top-left
            ${isOpen ? "-rotate-45" : ""}`}
        ></span>
      </div>

      {/* Logo */}
      <div className="md:w-[20%] flex items-center justify-center cursor-pointer">
        <Link href={"/"}>
          <Image
            src="/vincitore-logo.png"
            alt="Vincitore Logo"
            width={3000}
            height={3000}
            className={styles.logo}
            priority
            quality={100}
          />
        </Link>
      </div>

      {/* Call Button (Mobile) */}
      <div className="flex md:w-[40%] md:hidden items-center justify-end">
        <Link href={"tel:+916353101979"}>
          <Image
            src={"/icons/Call.svg"}
            width={3000}
            height={3000}
            alt="Call-Icon"
            className="h-6 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Call Button (Desktop) */}
      <div className="hidden md:w-[40%] md:flex items-center justify-end">
        <Link href={"tel:+916353101979"}>
          <Button text={"Enquire Now"} />
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`h-screen w-screen bg-[#13262E] absolute top-0 left-0 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex items-center`}
      >
        {/* Dynamic Menu Items */}
        <div
          className="flex flex-col gap-8 px-10 md:px-20 text-white"
          ref={menuRef}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="menu-link hover:text-gold transition-colors text-3xl"
            >
              {item.label}
            </Link>
          ))}

          {/* Enquiry Button */}
          <Link ref={btnRef} href={"tel:+916353101979"}>
            <Button text={"Enquiry Now"} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
