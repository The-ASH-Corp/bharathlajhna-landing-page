"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setisNavOpen] = useState(false);

  const pathname = usePathname();
  
  
  const handleNavMenu = () => {
    setisNavOpen(!isNavOpen);
  };

  const socialLinks = [
    {
      href: "",
      icon: <FaFacebook />,
    },
    {
      href: "",
      icon: <FaLinkedin />,
    },
    {
      href: "",
      icon: <FaYoutube />,
    },
    {
      href: "",
      icon: <FaInstagram />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-[100] flex items-center justify-between w-full px-3 py-4 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-[6px] backdrop-saturate-[180%] bg-black/30"
            : ""
        }`}
      >
        <div className="w-14">
          <Image
            src={"/assets/images/nav-logo.png"}
            alt="Logo"
            width={100}
            height={100}
            priority={true}
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center text-white gap-9 font-poppins font-light">
            <li>
              <Link
                className={`${
                  pathname === "/home" || pathname === "/"
                    ? "text-white border-b border-white"
                    : ""
                } `}
                href={"/home"}
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/about"
                    ? "text-white border-b border-white"
                    : ""
                } `}
                href={"/about"}
              >
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/branch"}
                className={`${
                  pathname === "/branch"
                    ? "text-white border-b border-white"
                    : ""
                } `}
              >
                Our Branches
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/service"
                    ? "text-white border-b border-white"
                    : ""
                } `}
                href={"/service"}
              >
                {" "}
                Service{" "}
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/projects"
                    ? "text-white border-b border-white"
                    : ""
                } `}
                href={"/projects"}
              >
                {" "}
                Our Projects{" "}
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/gallery"
                    ? "text-white border-b border-white"
                    : ""
                } `}
                href={"/gallery"}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/loans"
                    ? "text-white border-b border-white"
                    : ""
                } `}
                href={"/loans"}
              >
                {" "}
                Loans{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <div className="hidden sm:block">
            <Link href={"/membership"}>
              <Button
                fontFamily="poppins"
                textColor="black"
                bgColor="white"
                borderRadius="50px"
                width="auto"
                height="auto"
                paddingX="25px"
                paddingY="10px"
              >
                Membership
              </Button>
            </Link>
          </div>
          <div className="block z-10 md:hidden">
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

          {isNavOpen && (
            <div
              className={`p-6 px-12 pt-20 w-full h-screen bg-white fixed top-[-15px] left-0 flex flex-col items-center justify-between gap-3 mt-4 md:hidden`}
            >
              <ul className="w-full font-poppins text-xl font-normal text-[#AAAAAA]">
                <li
                  className={`p-3 border-b-2 ${
                    pathname === "/home" || pathname === "/"
                      ? "text-black border-black"
                      : ""
                  } `}
                >
                  <Link href={"/home"}>Home</Link>
                </li>
                <li
                  className={`p-3 border-b-2 ${
                    pathname === "/about" ? "text-black border-black" : ""
                  } `}
                >
                  <Link href={"/about"}>About</Link>
                </li>
                <li
                  className={`p-3 border-b-2 ${
                    pathname === "/branch" ? "text-black border-black" : ""
                  } `}
                >
                  <div className="flex justify-between">
                    <Link href={"/branch"}>Our Branches</Link>
                  </div>
                </li>
                <li
                  className={`p-3 border-b-2 ${
                    pathname === "/service" ? "text-black border-black" : ""
                  } `}
                >
                  <Link href={"/service"}>Services</Link>
                </li>
                <li
                  className={`p-3 border-b-2 ${
                    pathname === "/projects" ? "text-black border-black" : ""
                  } `}
                >
                  <Link href={"/projects"}>Our Projects</Link>
                </li>
                <li
                  className={`p-3 border-b-2 ${
                    pathname === "/gallery" ? "text-black border-black" : ""
                  } `}
                >
                  <div className="flex justify-between">
                    <Link href={"/gallery"}>Gallery</Link>
                  </div>
                </li>
                <li
                  className={`p-3 border-b-2 ${
                    pathname === "/loans" ? "text-black border-black" : ""
                  } `}
                >
                  <Link href={"/loans"}>Loans</Link>
                </li>
              </ul>

              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <ul className="flex gap-6">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        className="text-[#454545] text-2xl"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-[#454545] text-[10px] font-poppins">
                  &copy;2024 blm. ALL RIGHTS RESERVED
                </p>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
