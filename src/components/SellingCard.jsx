import React from "react";
import MoneyPlant from "../assets/moneyplany.svg"

const SellingCard = () => {
  return (
    <div className="bg-gray-700 mx-5 md:mx-20 lg:mx-40 px-5 md:py-10 rounded-xl relative my-10">
      <div className=" w-full lg:w-2/5 flex flex-col gap-4 py-4">
        <h1 className="text-3xl md:text-4xl text-white font-semibold">
          Make Money, <br />
          Risk-Free
        </h1>
        <p className="text-white font-semibold">
          You pay for fulfillment only when you make a sale
        </p>
        <div className="bg-gray-950/50 shadow-sm p-8 rounded-lg text-white flex flex-col gap-6">
          <div className="flex justify-between">
            <p className="font-semibold">You sell a T shirt</p>
            <p className="font-semibold">$30</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">You pay for its Production</p>
            <p className="font-semibold">$12</p>
          </div>
          <span className="h-[0.5px] bg-white w-full "></span>
          <div className="flex justify-between items-center text-orange-500">
            <p className="font-semibold text-lg md:text-2xl">Your profit</p>
            <p className="font-semibold text-lg md:text-2xl">$42</p>
          </div>
        </div>
        <div className="pt-10 flex flex-col gap-4">
          <button className="bg-orange-500 max-w-max text-white hover:bg-orange-600  rounded-sm px-4 py-2 font-semibold hover:shadow-sm">
            Start Selling
          </button>
          <p className="text-white text-sm md:text-base">100% Free to use · 900+ Products · Largest print network</p>
        </div>
      </div>
      <div className="hidden absolute lg:block right-0 lg:-right-10 bottom-0">
        <img className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-xl" src={MoneyPlant} alt="" />
      </div>
    </div>
  );
};

export default SellingCard;
