import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import Animation from "../assets/Animation.json"
import Lottie from "lottie-react";
const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around py-20 px-5  lg:px-20 w-full ">
      <div className="w-full lg:w-2/4 flex flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl font-semibold text-gray-800 leading-tight flex flex-col">
          <span>Create and sell</span> <span>custom products</span>
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaCheck className="h-6 w-6 text-orange-500" />
            <p className="font-semibold text-gray-600">100% Free to use</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="h-6 w-6 text-orange-500" />
            <p className="font-semibold text-gray-600">
              900+ High-Quality Products
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="h-6 w-6 text-orange-500" />
            <p className="font-semibold text-gray-600">
              Largest global print network
            </p>
          </div>
        </div>
       <div>
       <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-orange-500 text-white hover:bg-orange-600 border rounded-md px-5 py-3 font-semibold hover:shadow-sm">
            Start for Free
          </button>
          <button className="text-gray-800 border border-slate-300 rounded-md px-5 py-3 font-semibold hover:shadow-sm flex items-center gap-1">
            <FaRegCirclePlay />
            How it works?
          </button>
        </div>
          <p className="text-orange-500 font-semibold text-lg pt-4">Trusted by over 8M sellers around the world</p>
       </div>
      </div>
      <div className="animation w-full lg:w-2/4 justify-center">
      <Lottie animationData={Animation} className="max-w-full"/>
      </div>
    </div>
  );
};

export default HeroSection;
