"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FaWhatsapp } from "react-icons/fa6";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const handleNavMenu = () => setIsNavOpen((prev) => !prev);

  const socialLinks = [
    { href: "https://www.facebook.com/bharathlajhnasociety?mibextid=LQQJ4d", icon: <FaFacebook /> },
    { href: "https://wa.me/9597775333", icon: <FaWhatsapp /> },
    { href: "https://youtube.com/@bharathlajhnamultistateco-3613", icon: <FaYoutube /> },
    { href: "https://instagram.com/bharathlajhnasociety?igshid=MjAxZDBhZDhlNA", icon: <FaInstagram /> },
  ];

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/branch", label: "Our Branches" },
    { href: "/service", label: "Service" },
    { href: "/projects", label: "Our Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/loans", label: "Loans" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        "fixed top-0 z-[100] flex items-center justify-between w-full px-3 py-4 transition-all duration-300 ",
        scrolled && "backdrop-blur-[6px] backdrop-saturate-[180%] bg-black/30"
      )}
    >
      {/* Logo */}
      <Link href="/" className="w-14 z-[101]" onClick={() => setIsNavOpen(false)}>
        <Image
          src="/assets/images/nav-logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-3 lg:gap-9 text-white font-poppins font-light my-2">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={classNames(
                pathname === href ? "text-white border-b border-white" : ""
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>


      {/* Buttons */}
      <div className="flex items-center gap-3">
        {/* Membership Button */}
        <Link href="/membership" className="hidden sm:block">
          <Button
            fontFamily="poppins"
            textColor="black"
            bgColor="white"
            borderRadius="50px"
            paddingX="25px"
            paddingY="10px"
          >
            Membership
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="block z-[110] md:hidden">
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
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center p-6 pt-20 gap-6 h-screen">
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
