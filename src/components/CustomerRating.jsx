import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import { FaChevronLeft } from "react-icons/fa";

const CustomerRating = () => {
  const userData = [
    {
      name: "Robert A. Voltaire",
      image: Avatar1,
      designation: "Store Link",
    },
    {
      name: "Sarah K. Watson",
      image: Avatar2,
      designation: "Etsy Merchant",
    },
    {
      name: "Michael J. Smith",
      image: Avatar3,
      designation: "Store Link",
    },
    {
      name: "Robert A. Voltaire",
      image: Avatar1,
      designation: "Ebay Merchant",
    },
    {
      name: "Sarah K. Watson",
      image: Avatar2,
      designation: "Retail Customer",
    },
  ];

  return (
    <div className=" px-5 py-10 bg-[#e5e7eb]">
      <div className="flex flex-col lg:flex-row items-center justify-start gap-6 px-10 w-full lg:w-2/3">
        <h1 className="text-gray-800 text-3xl md:text-4xl font-semibold">
          Trusted by over 8M sellers around the world
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Whether you are just getting started or run an enterprise-level
          e-commerce business, we do everything we can to ensure a positive
          merchant experience.
        </p>
      </div>

      <div className="flex gap-4 py-10 w-full overflow-x-scroll scroll-smooth scrollbar">
        <div className="flex gap-6 transition-all duration-500">
          {userData.map((customer, index) => (
            <div
              key={index}
              className="card bg-white px-10 py-8 rounded-xl flex gap-4 flex-col min-w-[300px] md:min-w-[400px] w-full"
            >
              <div className="flex gap-3 items-center">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={customer.image}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-semibold">{customer.name}</h1>
                  <p className="text-orange-500">{customer.designation}</p>
                  <p className="flex pt-2">
                    <FaStar className="text-orange-400 text-xl" />
                    <FaStar className="text-orange-400 text-xl" />
                    <FaStar className="text-orange-400 text-xl" />
                    <FaStar className="text-orange-400 text-xl" />
                    <FaStar className="text-orange-400 text-xl" />
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                Printify has been an incredible service for us musicians unable
                to keep large amount of inventory - now we can create designs
                previously too expensive to print without having to have 1,000
                shirts in our jam space. Thanks Printify!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
