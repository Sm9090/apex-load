import React from "react";
import mainBgImage from "../../../public/assets/c0647438f73a14db2c10f8affcc00f33.png";

function MainSection() {
  return (
    <div
      style={{
        background: `url(${mainBgImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        objectFit: "cover",
      }}
    >
      <div className="w-full flex justify-center items-center relative">
        <div className="my-[96px] flex flex-col items-end">
          <h1 className="w-[750px] xl:w-[600px] xl:text-[80px] xl:leading-[80px] text-[118px] font-neuePlak uppercase leading-[118px] text-[#FFFFFF] font-bold">
            Reliable Transport{" "}
          </h1>
          <h2 className="w-[450px] font-normal text-[52px] font-neuePlak uppercase leading-[72px] text-[#FFFFFF]  ">
            Solutions for Your Freight
          </h2>
          <button className="flex items-center  justify-start font-Poppins  text-[18px] px-2 py-1 border border-[#fff] rounded-full text-[#fff]">
            Book Your Free trail{" "}
            <span className=" pl-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20h20M20 10l10 10-10 10"
                  stroke="#D9D9D9"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
          </button>
        </div>
        <div
          className=" absolute left-0 top-60 xl:top-44 w-[128.44px] h-[343px] xl:w-[90px] xl:h-[250px] bg-[#D9D9D9]"
          style={{ transform: "skew(-50deg)" }}
        ></div>
        <div
          className=" absolute left-0 top-[10rem] xl:top-[6rem] w-[128.44px] h-[343px] xl:w-[90px] xl:h-[250px] opacity-60 z-10 "
          style={{
            transform: "skew(54deg)",
            background: "linear-gradient(to bottom, #000, #FF0000)",
          }}
        ></div>
        <div
          className=" absolute left-[4rem] xl:left-[3rem] top-[29rem] xl:top-[21rem] w-[132px] h-[54px] xl:h-[40px] xl:w-[90px] opacity-60 z-10 "
          style={{
            transform: "rotate(30deg) skew(-26deg)",
            background: "linear-gradient(to bottom, #000, #FF0000)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default MainSection;
