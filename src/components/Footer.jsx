import React from "react";
import { GiPawPrint } from "react-icons/gi";

const Footer = () => {
    const integrations=["Shopify", "Etsy", "eBay", "Amazon", "Tiktok Shop"]
    const discover=["Blog", "Guides", "Products", "Pricing", "Brands"]
    const startSelling=["Custom T-shirts", "Custom Mugs", "Custom Caps", "Custom Branding", "Custom Hoodies"]
    const printify=["Print on Demand", "Print Providers", "Experts Program", "About", "Jobs", "Contact Sales"] 
  return (
    <div className="px-5 md:px-10 pt-10 py-20 bg-gray-200">
      <div className="flex items-center gap-1">
        <GiPawPrint className="text-orange-500 h-8 w-8" />
        <h1 className="italic font-bold text-3xl  text-orange-500 hover:cursor-pointer">
          Printly
        </h1>
      </div>
      <div className="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid  gap-10 justify-items-center" >
        <div className="flex flex-col gap-2 pt-10">
            <h1 className="font-semibold text-xl text-gray-800">Integrations</h1>
            {integrations.map((item, index)=> <p key={index} className="">{item}</p>
            )}
        </div>
        <div className="flex flex-col gap-2 pt-10">
            <h1 className="font-semibold text-xl text-gray-800">Discover</h1>
            {discover.map((item, index)=> <p key={index} className="">{item}</p>
            )}
        </div>
        <div className="flex flex-col gap-2 pt-10">
            <h1 className="font-semibold text-xl text-gray-800">Start Selling</h1>
            {startSelling.map((item, index)=> <p key={index} className="">{item}</p>
            )}
        </div>
        <div className="flex flex-col gap-2 pt-10">
            <h1 className="font-semibold text-xl text-gray-800">Printly</h1>
            {printify.map((item, index)=> <p key={index} className="">{item}</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
