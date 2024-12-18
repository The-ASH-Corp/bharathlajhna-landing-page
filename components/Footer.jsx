import Image from "next/image";
import FancyButton from "./ui/FancyButton";
import Title from "./ui/Title";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="relative w-full flex flex-col sm:gap-[15px] items-center justify-center bg-[#F1F1F1] pt-[130px] sm:pt-[90px] mt-10">
        <div className="absolute top-0 right-0 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px]">
          <Image
            src={"/assets/icons/pattern-footer.svg"}
            alt="footer pattern"
            fill
            className="object-contain w-full object-center"
          />
        </div>

        <div className="absolute top-0 left-0 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px]">
          <Image
            src={"/assets/icons/pattern-footer.svg"}
            alt="footer pattern"
            fill
            className="object-contain w-full object-center scale-x-[-1]"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-10 z-10">
          <div className="w-[280px]">
            <Title className={"text-center"}>
              We are available in multiple states
            </Title>
          </div>
          <div className="flex gap-3">
            <FancyButton name={"KERALA"} />
            <FancyButton name={"TAMIL NADU"} />
            <FancyButton name={"PONDICHERRY"} />
          </div>
        </div>

        <div className="w-full flex flex-col justify-end sm:flex-row sm:justify-start gap-7 sm:gap-2 mt-10 font-poppins px-8">
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-10 lg:gap-32">
              <div>
                <h1 className="text-[10px] sm:text-[12px] text-black opacity-50 mb-2">
                  HOUSING PROJECT
                </h1>
                <ul className="text-[12px] sm:text-[14px] flex flex-col gap-2">
                  <li>On Going</li>
                  <li>Completed</li>
                  <li>Up Coming</li>
                </ul>
              </div>
              <div>
                <h1 className="text-[10px] sm:text-[12px] text-black opacity-50 mb-2">
                  SERVICES
                </h1>
                <ul className="text-[12px] sm:text-[14px] flex flex-col gap-2">
                  <li>Land Development</li>
                  <li>Housing Development</li>
                  <li>BLM Transport</li>
                  <li>Civil Supplies</li>
                  <li>BLM Jewellery</li>
                </ul>
              </div>
              <div>
                <h1 className="text-[10px] sm:text-[12px] text-black opacity-50 mb-2">
                  CONTACT US
                </h1>
                <ul className="text-[12px] sm:text-[14px] flex flex-col gap-2">
                  <li className="flex">
                    Phone :{" "}
                    <p className="flex flex-col">
                      <span>+44- 2479 2445</span>
                      <span>+44- 2479 2445</span>{" "}
                    </p>
                  </li>
                  <li>Mobile : 9597 775 333</li>
                  <li>email : info@blmshcs.net</li>
                  <li className="flex flex-col">
                    <span className="text-accent_color">Toll Free Number</span>
                    <span>18003095005</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-80 sm:mt-0">
              <div className="relative w-[100px] h-[120px] lg:w-[200px] lg:h-[200px]">
                <Image
                  src={"/assets/images/footer-logo.png"}
                  alt="footer logo"
                  fill
                  className="object-contain w-full"
                />
              </div>
              <div className="w-full flex justify-center gap-3 lg:gap-6 text-[#454545] sm:text-lg lg:text-2xl">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between px-4 py-9">
          <p className="font-poppins text-black opacity-40 text-[12px]">
            &copy;2023 — Copyright
          </p>

          <p className="hidden sm:block font-poppins text-black opacity-40 text-[12px]">
            privacy policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
