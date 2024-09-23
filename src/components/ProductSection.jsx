import React from "react";
import Background from "../assets/Background.png";
import { GrFormNextLink } from "react-icons/gr";
import Merchandise from "../assets/Merchandise.png";
import Fulfillment from "../assets/Fulfillment.png";
import Selling from "../assets/Selling.png";
import Tshirt from "../assets/Tshirt.png";

const ProductSection = () => {
  return (
    <div
      className="py-20 px-10  bg-center bg-cover flex flex-col items-center justify-center min-h-min"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container flex flex-col lg:flex-row items-center  justify-between gap-10 py-10">
        <div className="w-full lg:w-1/2">
          <img src={Merchandise} alt="" />
        </div>
        <div className="w-full lg:w-2/5 px-5 lg:px-8 flex justify-center flex-col gap-3 lg:gap-6">
          <h1 className="text-gray-800  text-3xl lg:text-4xl font-semibold lg:text-left">
            Easily add your design to a wide range of products
          </h1>
          <p className="text-gray-600">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <button className="flex  items-center text-orange-500 hover:text-orange-600 font-semibold text-lg gap-2">
            All Products <GrFormNextLink className="w-8 h-8" />{" "}
          </button>
        </div>
      </div>

      <div className="container py-10 flex flex-col lg:flex-row gap-6 justify-between items-center">
        <div className="px-5 lg:px-10 flex flex-col gap-4 jsutify-between">
          <img className="w-24 h-24 lg:w-40 lg:h-40" src={Tshirt} alt="" />
          <h1 className="text-gray-800 font-semibold text-xl lg:text-2xl">
            <span className="text-orange-500 text-lg font-semibold">
              CREATE
            </span>
            <br />
            custom products
          </h1>
          <p className="text-gray-600">
            Easily add your designs to a wide range of products using our free
            tools
          </p>
        </div>
        <div className="px-5 lg:px-10 flex flex-col gap-4 jsutify-between">
          <img className="w-24 h-24 lg:w-40 lg:h-40" src={Selling} alt="" />
          <h1 className="text-gray-800 font-semibold text-xl lg:text-2xl">
            <span className="text-orange-500 text-lg font-semibold">SELL</span>
            <br />
            on your terms
          </h1>
          <p className="text-gray-600">
            Easily add your designs to a wide range of products using our free
            tools
          </p>
        </div>
        <div className="px-5 lg:px-10 flex flex-col gap-4 jsutify-between">
          <img className="w-24 h-24 lg:w-40 lg:h-40" src={Fulfillment} alt="" />
          <h1 className="text-gray-800 font-semibold text-xl lg:text-2xl">
            <span className="text-orange-500 text-lg font-semibold">
              WE HANDLE
            </span>
            <br />
            fulfillment
          </h1>
          <p className="text-gray-600">
            Easily add your designs to a wide range of products using our free
            tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
