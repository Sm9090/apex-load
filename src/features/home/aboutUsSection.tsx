import React from "react";
import aboutusBgImage from "../../../public/assets/aboutusbg.jpeg";
import Image from "next/image";
import truck from "../../../public/assets/truck.png";

function AboutUsSection() {
  return (
    <div
      style={{
        background: `url(${aboutusBgImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        objectFit: "cover",
      }}
      className="overflow-hidden"
    >
      <div className=" h-[760px] lg:h-auto relative  mx-[100px] lg2:mx-[60px] lg:mx-32px lg:flex-col-reverse lg:items-start flex  items-center  justify-between">
        <div className="w-[720px] xl:w-[600px] lg2:w-[490px] lg:w-full ">
          <h1 className="text-[#FFFFFF] font-bold font-neuePlak text-[72px] leading-[101px] ">
            About <span className="text-[#D91E27]">us</span>
          </h1>
          <p className="text-[28px] font-bold font-neuePlak text-[#D91E27] leading-[39.45px]">
            Apexloads.com{" "}
            <span className="text-white">
              is a premier digital platform designed to revolutionize the
              logistics and transportation industry
            </span>{" "}
            <span className="text-[18px] text-[#FFFFFF] leading-[24px] font-normal">
              , with a special focus on the African market. We aim to bridge the
              gap between shippers and truck owners, providing a seamless and
              efficient solution to manage freight loads. Our platform is built
              on the principles of innovation, reliability, and accessibility,
              ensuring that all users, regardless of their location, can
              optimize their logistics operations and drive their businesses
              forward.
            </span>
          </p>
          <button className="border rounded-full border-[#FFFFFF] px-6 py-1 mt-[15px] text-[#FFFFFF]">
            Know more
          </button>
        </div>
        <div className="relative">
          <div
            className=" absolute right-[-78px] top-[-1rem] w-[100px] h-[281px] bg-[#D9D9D9]"
            style={{ transform: "skew(-50deg)" }}
          />
          <div
            className=" absolute right-[-78px] top-[14rem] w-[120px] h-[60px] opacity-60  "
            style={{
              transform: "rotate(51deg) skew(2deg)",
              background: "linear-gradient(to bottom, #000, #FF0000)",
            }}
          />
          <div className="w-[600px] " style={{ transform: "translateX(270px)" }}>
            <Image src={truck} alt="truck" width={750} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
