"use client";
import React from "react";

interface props {
  title: string;
  isDropDown?: boolean;
  color?: boolean;
}

function Button({ title, isDropDown, color }: props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`px-4  rounded-full font-Poppins ${
          color ? "bg-[#D91E27] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#D91E27]"
        }   w-full  cursor-pointer flex  items-center justify-center `}
        onClick={handleToggle}
      >
        <button>{title}</button>
        {isDropDown && (
          <svg
            className={`w-4 h-4 transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default Button;
