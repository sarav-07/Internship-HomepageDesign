import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CustomDropdown = ({ label, options }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const handleMouseEnter = () => {
    setIsDropdown(true);
  };
  const handleMouseLeave = () => {
    setIsDropdown(false);
  };

  return (
    <div
      className=" relative flex  text-gray-800 hover:text-orange-500 hover:cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="md:text-base lg:text-lg font-semibold hover:text-inherit">{label}</p>
      <IoMdArrowDropdown className="w-7 h-7" />
      {isDropdown && (
        <ul className="absolute top-full left-0 bg-white border rounded-lg shadow-lg z-10 px-4 py-1.5 min-w-max">
          {options.map((option, index) => (
            <li
              className="font-semibold hover:text-orange-500 text-gray-800 py-1"
              key={index}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
