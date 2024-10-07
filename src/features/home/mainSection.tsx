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
        <div className="my-[96px] flex flex-col items-end md:items-start md:mx-[32px] md:z-20">
          <h1 className="w-[750px] xl:w-[600px] md:w-auto xl:text-[80px] xl:leading-[80px] text-[118px] md:text-[62px] md:leading-[62px] font-neuePlak uppercase leading-[118px] text-[#FFFFFF] font-bold ">
            Reliable Transport{" "}
          </h1>
          <h2 className="w-[450px] md:w-[200px] font-normal text-[52px] md:text-[24px] font-neuePlak uppercase leading-[72px] md:leading-[33.41px] text-[#FFFFFF]  ">
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
          className=" absolute left-0 top-60 xl:top-44 md:top-16 w-[128.44px] h-[343px] xl:w-[90px] xl:h-[250px] md:opacity-60 bg-[#D9D9D9]"
          style={{ transform: "skew(-50deg)" }}
        ></div>
        <div
          className=" absolute left-0 top-[10rem] xl:top-[6rem] md:top-[1rem] w-[128.44px] h-[343px] xl:w-[90px] xl:h-[250px] opacity-60 z-10 "
          style={{
            transform: "skew(54deg)",
            background: "linear-gradient(to bottom, #000, #FF0000)",
          }}
        ></div>
        <div
          className=" absolute left-[4rem] xl:left-[3rem] md:left-[2rem] top-[29rem] md:top-[15rem] xl:top-[21rem] w-[132px] h-[54px] xl:h-[40px] xl:w-[90px] opacity-60 z-10  "
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
