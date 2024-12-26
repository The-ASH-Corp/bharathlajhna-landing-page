import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import FancyButton from "./ui/FancyButton";
import Title from "./ui/Title";

const Footer = () => {
  return (
    <>
      <div className="relative w-full flex flex-col sm:gap-[15px] items-center justify-center bg-[#F1F1F1] pt-[130px] sm:pt-[90px] mt-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px]">
          <Image
            src={"/assets/icons/pattern-footer.svg"}
            alt="footer pattern"
            fill
            priority={true}
            className="object-contain w-full object-center"
          />
        </div>

        <div className="absolute top-0 left-0 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px]">
          <Image
            src={"/assets/icons/pattern-footer.svg"}
            alt="footer pattern"
            fill
            priority={true}
            className="object-contain w-full object-center scale-x-[-1]"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-10 z-10">
          <div className="">
            <Title className={"text-center"}>
              We are available in multiple states
            </Title>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href={"/branch?tab=kerala"} >
             <FancyButton name={"KERALA"}  />
            </Link>
            <Link href={"/branch?tab=tamil"}>
            <FancyButton name={"TAMIL NADU"} />
            </Link>
            <Link href={"/branch?tab=pondichery"}>
            <FancyButton name={"PONDICHERRY"} />
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col justify-end sm:flex-row sm:justify-start gap-7 sm:gap-2 mt-10 font-poppins px-8 md:text-[15px] lg:text-[18px]">
          <div className="w-full flex justify-between">
            <div className="sm:w-full flex flex-col gap-8 sm:flex-row sm:gap-10 lg:gap-32 sm:justify-around sm:items-start">
              <div>
                <p className=" text-black opacity-50 mb-2">
                  HOUSING PROJECT
                </p>
                <ul className=" flex flex-col gap-2 lg:leading-9">
                  <li><Link href={"/projects"}>
                  Ongoing
                  </Link></li>

                  <li>
                    <Link href={"/projects"}>
                    Completed
                    </Link>
                    </li>

                  <li> <Link href={"/projects"}>
                  
                  Up Coming
                  </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="  text-black opacity-50 mb-2">
                  SERVICES
                </p>
                <ul className="  flex flex-col gap-2 lg:leading-9">
                  
                  <Link href={"/services"}>Land Development</Link>
                  <Link href={"/services"}>Housing Development</Link>
                  <Link href={"/services"}>BLM Transport</Link>
                  <Link href={"/services"}>Civil SuppLinkes</Link>
                  <Link href={"/services"}>BLM Jewellery</Link>
                </ul>
              </div>
              <div>
                <p className="  text-black opacity-50 mb-2">
                  CONTACT US
                </p>
                <ul className="  flex flex-col gap-2 lg:leading-9">
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
              <div className="hidden sm:block">
                <div className="w-[200px] text-start flex flex-col items-center mb-3">
                  <Image
                    src={"/assets/images/footer-logo.png"}
                    alt="footer logo"
                    width={150}
                    height={150}
                    priority={true}
                    // fill
                    className="object-contain "
                  />
                <p >
                We are an autonomous association of people united as members to meet our common social and cultural needs.
                </p>
                </div>
                <div className="w-full flex  gap-3 lg:gap-6 text-[#454545] sm:text-2xl lg:text-2xl">
                  <Link href="https://www.facebook.com/bharathlajhnasociety?mibextid=LQQJ4d">
                    <FaFacebook />
                  </Link>
                  <Link href="https://wa.me/9597775333">
                    <FaWhatsapp />
                  </Link>
                  <Link href="https://youtube.com/@bharathlajhnamultistateco-3613">
                    <FaYoutube />
                  </Link>
                  <Link href="https://instagram.com/bharathlajhnasociety?igshid=MjAxZDBhZDhlNA">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            <div className=" sm:mt-0 sm:hidden">
            <div className="w-[200px] text-start flex flex-col items-center ">
                  <Image
                    src={"/assets/images/footer-logo.png"}
                    alt="footer logo"
                    width={150}
                    height={150}
                    // fill
                    priority={true}
                    className="object-contain "
                  />
                <p>
                We are an autonomous association of people united as members to meet our common social and cultural needs.
                </p>
                </div>
              <div className="w-full flex  gap-3 lg:gap-6 text-[#454545] sm:text-3xl lg:text-2xl">
              <Link href="https://www.facebook.com/bharathlajhnasociety?mibextid=LQQJ4d">
                    <FaFacebook />
                  </Link>
                  <Link href="https://wa.me/9597775333">
                    <FaWhatsapp />
                  </Link>
                  <Link href="https://youtube.com/@bharathlajhnamultistateco-3613">
                    <FaYoutube />
                  </Link>
                  <Link href="https://instagram.com/bharathlajhnasociety?igshid=MjAxZDBhZDhlNA">
                    <FaInstagram />
                  </Link>
              </div>
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
