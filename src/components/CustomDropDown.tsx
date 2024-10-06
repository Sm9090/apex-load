"use client";
import { useEffect, useRef, useState } from "react";

interface props {
  title: string
  options?: string[]
}

const CustomDropdown = ({title , options} : props) => {

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };



  const handleOptionClick = (option: string) => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative  ssms:w-auto" ref={dropdownRef}>
      <div
        className="outline-none font-Poppins  bg-transparent  w-full text-[#FFFFFF] cursor-pointer flex  items-center "
        onClick={handleToggle}
      >
        <span>{title}</span>
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
      </div>
      {isOpen && (
        <div className="absolute w-[157px] bg-[#D91E27]  mt-2 z-10 p-[10px]">
          <ul className="max-h-52 pt-[5px] overflow-y-auto pb-[5px]">
            {options?.map((option) => (
              <li
                key={option}
                className={` hover:bg-[#000] hover:text-[#D91E27] transition-all duration-150 cursor-pointer px-[10px] py-[5px] text-[16px] text-[#FFFFFF] !font-prompt `}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
