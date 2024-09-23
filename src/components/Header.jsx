import React, { useState } from "react";
import { GiPawPrint } from "react-icons/gi";
import CustomDropdown from "./CustomDropdown";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const howItWorksOptions = [
    "How Printly Works",
    "Print on Demand",
    "Printly Quality Promise",
    "What to Sell?",
  ];
  const servicesOptions = [
    "Printly Studio",
    "Printly Express Delivery",
    "Transfer Products",
    "Order in Bulk",
    "Exprerts Program",
  ];
  const needHelpOptions = ["Help Center", "Contact", "My Requests"];
  const useCasesOptions = [
    "Merch for Fans",
    "Merch for eCommerce",
    "Merch for Enterprises",
    "Grow Your Store",
  ];
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <div className="flex lg:flex-row justify-between py-6 shadow-sm px-10">
      <div className="flex ;g:items-center gap-1">
        <GiPawPrint className="text-orange-500 h-8 w-8" />
        <h1 className="italic font-bold text-3xl  text-orange-500 hover:cursor-pointer">
          Printly
        </h1>
      </div>
     
      <div
        className={`flex flex-col lg:flex-row gap-3 items-center ${
          isMobileMenu ? "block" : "hidden lg:flex"
        }`}
      >
        <p className=" md:text-base lg:text-lg text-gray-800 font-semibold hover:text-orange-500 hover:cursor-pointer">
          Catalog
        </p>
        <CustomDropdown label="How it Works" options={howItWorksOptions} />
        <p className="md:text-base lg:text-lg text-gray-800 font-semibold hover:text-orange-500 hover:cursor-pointer">
          Pricing
        </p>
        <p className="md:text-base lg:text-lg text-gray-800 font-semibold hover:text-orange-500 hover:cursor-pointer">
          Blog
        </p>
        <CustomDropdown label="Services" options={servicesOptions} />
        <CustomDropdown label="Use-cases" options={useCasesOptions} />
        <CustomDropdown label="Need Help?" options={needHelpOptions} />
        <div className="flex flex-col gap-4 mt-4 md:mt-0 lg:hidden">
          <button className="text-gray-800 border border-slate-300 rounded-md px-5 py-2 font-semibold hover:text-orange-500 hover:shadow-sm">
            Log in
          </button>
          <button className="bg-orange-500 text-white hover:bg-orange-600 border rounded-md px-5 py-2 font-semibold hover:shadow-sm">
            Sign up
          </button>
        </div>  
      </div>
      <button
        className="lg:hidden text-gray-800"
        onClick={() => setIsMobileMenu((prev) => !prev)}
      >
        {isMobileMenu ? (
          <AiOutlineClose className="h-6 w-6" />
        ) : (
          <AiOutlineMenu className="h-6 w-6" />
        )}
      </button>

      <div className=" hidden lg:flex  gap-4 mt-4 md:mt-0">
        <button className="text-gray-800 border border-slate-300 rounded-md px-5 py-2 font-semibold hover:text-orange-500 hover:shadow-sm ">
          Log in
        </button>
        <button className="bg-orange-500 text-white hover:bg-orange-600 border rounded-md px-5 py-2 font-semibold hover:shadow-sm">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
