import React from "react";
import StoreBg from "../assets/storebg.png";
import Store from "../assets/store.svg"

const ConnectStore = () => {
  return (
    <div className="py-10 px-5">
      <div className="text-center gap-3 flex flex-col">
        <h1 className=" text-3xl lg:text-4xl font-semibold text-gray-800 text-center">
          Connect your Store
        </h1>
        <p className="text-gray-600">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>
      </div>
      <div className="flex  items-center justify-center">
      <div className="bg-cover z-10 w-full max-w-3xl" style={{ backgroundImage: `url(${StoreBg})` }}>
        <img className="w-full z-20" src={Store}alt="" />
      </div>
      </div>
    </div>
  );
};

export default ConnectStore;
