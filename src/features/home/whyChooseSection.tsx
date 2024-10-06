"use client";
import Image from "next/image";
import driver from "../../../public/assets/driver.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import React from "react";

function WhyChooseSection() {
  const cards = [
    {
      title: "Proven Track Record of Excellence",
      content:
        "At Apex Loads, we pride ourselves on our proven track record of excellence in the logistics industry. With years of experience and a deep understanding of Africa’s unique logistical challenges, we have established ourselves as a trusted partner for businesses across the continent.",
    },
    {
      title: "Comprehensive Solutions Tailored to Your Needs",
      content:
        "We offer comprehensive logistics solutions tailored to meet the specific needs of cargo owners, brokers, and shippers. Whether you are looking to optimize your supply chain, streamline operations, or enhance visibility and control, Apex Loads has the expertise and technology to deliver results.",
    },
    {
      title: "Comprehensive Solutions Tailored to Your Needs",
      content:
        "We offer comprehensive logistics solutions tailored to meet the specific needs of cargo owners, brokers, and shippers. Whether you are looking to optimize your supply chain, streamline operations, or enhance visibility and control, Apex Loads has the expertise and technology to deliver results.",
    },
  ];
  return (
    <div>
      <div className="mx-[100px] my-[100px] flex  items-center">
        <div className="relative">
          <div
            className=" w-[500px] h-[563px] mr-[63px] rounded-lg"
            style={{
              backgroundImage: `url(${driver.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "center",
              objectFit: "cover",
            }}
          />
          <div className="w-4 h-4 bg-[#D91E27] absolute z-10 right-[-9px] top-[150px] rounded-full" />
        </div>
        <div>
          <h1 className="text-[#FFFFFF] pl-[48px] pb-[20px] font-bold font-neuePlak text-[72px] leading-[101px] ">
            Why Choose <span className="text-[#D91E27]">Us</span>
          </h1>
          <Swiper
            direction="vertical"
            className="mySwiper  border-l !pl-[48px] "
            spaceBetween={40}
            slidesPerView={1}
            modules={[Navigation]}
            breakpoints={{
              1024: {
                slidesPerView: 1.5,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            style={{ height: "534px" }}
          >
            <ul>
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-[#D91E27] p-8 rounded-md !max-h-max !w-[619px]"
                >
                  <li>
                    <div className="mb-[13px] flex items-center gap-[15px]">
                      <div className="!w-2 !h-2 rounded-full bg-[#fff] " />{" "}
                      <span className=" text-[#FFFFFF] font-semibold text-[24px] ">
                        {card.title}
                      </span>
                    </div>
                    <p className="text-[18px] text-[#FFFFFF] leading-[24px] font-normal">
                      {card.content}
                    </p>
                  </li>
                </SwiperSlide>
              ))}
            </ul>
            <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>{" "}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseSection;
