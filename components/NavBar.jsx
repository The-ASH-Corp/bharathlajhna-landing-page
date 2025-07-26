"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "./ui/Button";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const handleNavMenu = () => setIsNavOpen((prev) => !prev);

  const socialLinks = [
    {
      href: "https://www.facebook.com/bharathlajhnasociety?mibextid=LQQJ4d",
      icon: <FaFacebook />,
    },
    { href: "https://wa.me/9597775333", icon: <FaWhatsapp /> },
    {
      href: "https://youtube.com/@bharathlajhnamultistateco-3613",
      icon: <FaYoutube />,
    },
    {
      href: "https://instagram.com/bharathlajhnasociety?igshid=MjAxZDBhZDhlNA",
      icon: <FaInstagram />,
    },
  ];

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/branch", label: "Branches" },
    { href: "/service", label: "Service" },
    // { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/legal", label: "Update" },
  ];

  useEffect(() => {
    console.log("pathname", pathname);
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        "fixed md:top-0    z-[100] flex  items-center md:items-center justify-between w-full px-1  md:px-3 md:py-4 py-3 transition-all duration-300 ",
        scrolled &&
          "backdrop-blur-[6px]  bg-gradient-to-b from-black/70 to-transparent border-none"
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className=" w-14    z-[101]"
        onClick={() => setIsNavOpen(false)}
      >
        <Image
          src="/assets/images/nav-logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority={true}
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-8 lg:gap-12 font-poppins my-2 bg-white px-5 pt-2 pb-1 rounded-[30px] mx-2 border shadow-sm">
        {navLinks.map(({ href, label }) => (
          <li key={href} className="relative">
            <Link
              href={href}
              className={classNames(
                "pb-1 relative inline-block",
                pathname === href && "font-semibold"
              )}
            >
              {label}
              <span
                className={classNames(
                  "absolute left-0 bottom-0 h-[3px] rounded-full bg-yellow-300 transition-all duration-500 ease-in-out",
                  pathname === "/" && href === "/home"
                    ? "w-full"
                    : pathname === href
                    ? "w-full"
                    : "w-0"
                )}
              ></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className=" flex justify-center  gap-3">
        {/* Membership Button */}
        <Link href="/careers" className="   ">
          <Button
            fontFamily="poppins"
            textColor="white"
            bgColor="#00664E"
            borderRadius="50px"
            paddingX="25px"
            paddingY="10px"
          >
            Careers
          </Button>
        </Link>
        {/* Membership Button */}
        <Link href="/membership" className="">
          <Button
            fontFamily="poppins"
            textColor="black"
            bgColor="#FEDB02"
            borderRadius="50px"
            paddingX="25px"
            paddingY="10px"
          >
            Membership
          </Button>
        </Link>
        <Link href="https://bharathlajhna.in/" className="hidden lg:block  ">
          <Button
            fontFamily="poppins"
            textColor="white"
            bgColor="#00664E"
            borderRadius="50px"
            paddingX="25px"
            paddingY="10px"
          >
            Members Login
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="block z-[110] lg:hidden self-end">
          <Button
            flexDirection="column"
            gap="10"
            bgColor="white"
            width="40px"
            height="40px"
            borderRadius="50px"
            onClick={handleNavMenu}
            className={`${isNavOpen && "relative"}`}
          >
            <div
              className={`w-[25px] h-[3px] bg-black rounded-full transition-all duration-300 ease-in-out ${
                isNavOpen ? "absolute rotate-45 mt-[1px]" : ""
              }`}
            ></div>
            <div
              className={`w-[25px] h-[3px] bg-black rounded-full mt-1 transition-all duration-300 ease-in-out ${
                isNavOpen ? "absolute -rotate-45 mb-1" : ""
              }`}
            ></div>
            <div
              className={`w-[25px] h-[3px] bg-black rounded-full mt-1 transition-all duration-300 ease-in-out ${
                isNavOpen ? "hidden" : ""
              }`}
            ></div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-[100] bg-white  flex flex-col items-center p-6 pt-20 gap-4 h-screen">
          <ul className="w-full font-poppins text-xl text-[#AAAAAA]">
            {navLinks.map(({ href, label }) => (
              <li
                key={href}
                onClick={() => setIsNavOpen(false)}
                className={classNames(
                  "p-3 border-b-2",
                  pathname === href && "text-black border-black"
                )}
              >
                <Link href={href}>{label}</Link>
               
              </li>
            ))}
             <Link
                  href="https://bharathlajhna.in/"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Button className="mt-2"
                    fontFamily="poppins"
                    textColor="white"
                    bgColor="#00664E"
                    borderRadius="50px"
                    paddingX="25px"
                    paddingY="10px"
                    
                  >
                    Members Login
                  </Button>
                </Link>
          </ul>

          <div className="flex flex-col gap-3 items-center">
            <ul className="flex gap-6">
              {socialLinks.map(({ href, icon }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#454545] text-2xl"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[#454545] text-[10px] font-poppins">
              &copy;2024 BLM. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
