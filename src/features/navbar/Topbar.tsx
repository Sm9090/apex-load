import React from "react";
import Image from "next/image";
import CustomDropdown from "@/components/CustomDropDown";
import Button from "@/components/Button";
import whatsappIcon from "../../../public/assets/whatsapp.svg";
import phoneIcon from "../../../public/assets/phone.svg";
import mailIcon from "../../../public/assets/mail.svg";

function Topbar() {
  const contactInfo = [
    { content: "+254 (0) 709 677 400", icon: whatsappIcon },
    { content: "+254 (0) 709 677 400", icon: phoneIcon },
    { content: "info@apexloads.com", icon: mailIcon },
  ];

  const options = ["Search Loads", "Post A Truck", "EAC Profile"];
  return (
    <div className="bg-[#D91E27] w-full lg:hidden">
      <div className="mx-[100px] lg2:mx-[60px] py-[12px] flex justify-between">
        <div className="flex gap-[29px]">
          {contactInfo?.map((info, index) => (
            <div key={index} className="flex gap-[5px] ">
              <Image src={info.icon} alt="" width={24} height={24} />
              <p className="text-[16px] leading-[24px] font-Poppins text-[#FFFFFF]">
                {" "}
                {info.content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-[25px]">
          <CustomDropdown title="Products" options={options} />
          <div className="font-Poppins  bg-transparent   text-[#FFFFFF] cursor-pointer  ">
            <span>
              <a href="#" rel="noopener noreferrer">
                About Us
              </a>
            </span>
          </div>
          <CustomDropdown title="Resources" options={options} />
          <div className="ml-6">
            <Button title="Login" isDropDown={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
