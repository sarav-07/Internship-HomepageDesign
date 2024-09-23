import React from "react";
import Saving from "../assets/saving.svg";
import Scaling from "../assets/scaling.svg";
import Selection from "../assets/selection.svg";

const BenefitSection = () => {
  return (
    <div className="lg:py-10 py-5 px-5 lg:px-20">
    <div className="flex flex-col lg:flex-row gap-6 justify-between">
    <div className="px-4 flex flex-col gap-4">
        <img className="w-24 h-24" src={Saving} alt="" />
        <h1 className="text-gray-800 font-semibold text-xl lg:text-2xl">Higher Profits</h1>
        <p className="text-gray-800">
          We offer some of the lowest prices in the industry because print
          providers continuously compete to win your business.
        </p>
      </div>
      <div className="px-4 flex flex-col gap-4">
        <img className="w-24 h-24" src={Scaling} alt="" />
        <h1 className="text-gray-800 font-semibold text-xl lg:text-2xl">Higher Profits</h1>
        <p className="text-gray-800">
          We offer some of the lowest prices in the industry because print
          providers continuously compete to win your business.
        </p>
      </div>
      <div className="px-4 flex flex-col gap-4">
        <img className="w-24 h-24" src={Selection} alt="" />
        <h1 className="text-gray-800 font-semibold text-xl lg:text-2xl">Higher Profits</h1>
        <p className="text-gray-800">
          We offer some of the lowest prices in the industry because print
          providers continuously compete to win your business.
        </p>
      </div>
    </div>
    </div>
  );
};

export default BenefitSection;
