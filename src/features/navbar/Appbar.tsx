'use client'
import CustomDropdown from "@/components/CustomDropDown";
import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/log.png";
import accIcon from "../../../public/assets/acc.jpg";
import Button from "@/components/Button";

function Appbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const appBarItems = [
    {
      content: "Transporters",
      menu: ["Search Loads", "Post A Truck", "EAC Profile"],
    },
    {
      content: "Full Service Broker",
      menu: ["Search Loads", "Post A Truck", "EAC Profile"],
    },
    {
      content: "Freight Forwarders/Brokers",
      menu: ["Search Loads", "Post A Truck", "EAC Profile"],
    },
  ];
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); 
  };

  return (
    <div>
      <div className="mx-[100px] lg2:mx-[60px] md:mx-[15px] py-[12px] flex justify-between items-center">
        <div className="flex gap-[29px] items-center">
          <Image src={logo} alt="" width={216} />
          <div className="lg:hidden flex gap-[15px]">
          {appBarItems.map((items, index) => (
            <div key={index} >
              <CustomDropdown title={items.content} options={items.menu} />
            </div>
          ))}
          </div>
        </div>
        <div className="flex items-center gap-[15px] lg:hidden">
          <Button title="Pricing"  />
          <Button title="Book a free Demo"  color={true} />
        </div>
        <div className="hidden lg:block">
        <div className="flex items-center gap-[15px]  ">
          <Image src={accIcon} alt="account"  width={30}/> 
          <button className="hamburger-menu text-white" onClick={toggleDrawer}>
            <svg
              className="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <line className="line1" x1="1" y1="15" x2="40" y2="15" />
              <line className="line2" x1="1" y1="25" x2="40" y2="25" />
              <line className="line3" x1="1" y1="35" x2="40" y2="35" />
              <circle className="circle" cx="25" cy="25" r="12" />
            </svg>
          </button>
          </div>
          <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-gray-800 text-white transition-transform transform z-50 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            className="text-white text-xl mb-4"
            onClick={toggleDrawer}
          >
            Close
          </button>
          {appBarItems.map((items, index) => (
            <div key={index} className="my-2">
              <CustomDropdown title={items.content} options={items.menu} />
            </div>
          ))}
        </div>
      </div>
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
      </div>
        </div>
      </div>
  );
}

export default Appbar;
