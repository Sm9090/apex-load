"use client";
import driver from "../../../public/assets/driver.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

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
      <div className="mx-[100px] lg2:mx-[60px] my-[100px] lg:my-[70px] lg:mx-[32px] flex  items-center lg:block ">
        <div className="relative md:mb-[33px]">
          <h1 className="text-[#FFFFFF] hidden lg:block pl-[48px] pb-[20px] font-bold font-neuePlak text-[72px]  md:text-[32px] leading-[101px] lg:pl-0 lg:pb-[33px] ">
            Why Choose <span className="text-[#D91E27]">Us</span>
          </h1>
          <div
            className=" w-[500px] h-[563px] md:w-[362px] md:h-[371px] mr-[63px] lg2:mr-[30px] lg:m-auto  rounded-lg"
            style={{
              backgroundImage: `url(${driver.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "center",
              objectFit: "cover",
            }}
          />
          <div className="w-4 h-4 bg-[#D91E27] absolute z-10 right-[-9px] top-[150px] rounded-full lg:hidden" />
        </div>
        <div className="lg:mt-[33px] " >
          <h1 className="text-[#FFFFFF] pl-[48px] pb-[20px] font-bold font-neuePlak text-[72px] xl:text-[50px] leading-[101px] lg:hidden ">
            Why Choose <span className="text-[#D91E27]">Us</span>
          </h1>
          <Swiper
            direction="vertical"
            className="mySwiper  border-l !pl-[48px] lg:border-none lg:!p-0  h-[534px] "
            spaceBetween={40}
            slidesPerView={1.5}
            modules={[Navigation]}
            breakpoints={{
              1024: {
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2.5
              },
              600: {
                slidesPerView: 2
              },
              500:{
                slidesPerView: 1.7
              },
              0: {
                spaceBetween: 20,
                slidesPerView: 1.4
              },
            }}
          >
            <ul>
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-[#D91E27] p-8 rounded-md   lg2:!w-auto "
                >
                  <li>
                    <div className="mb-[13px] flex items-start gap-[15px]  relative">
                      <div className="!w-2 !h-2 lg:p-1 rounded-full bg-[#fff] absolute top-[15px] " />{" "}
                      <span className=" text-[#FFFFFF] font-semibold text-[24px] leading-[33px] pl-[18px] ">
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
            <div className="absolute bottom-[-3px] left-0  w-full h-[120px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>{" "}
          </Swiper>
        </div>
      </div>
  );
}

export default WhyChooseSection;
