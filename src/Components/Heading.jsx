import React from "react";

import truck from "../assets/truck.svg"
const Heading = () => {
  return (
    <div className="overflow-hidden bg-custBlack border border-custBlack font-roboto leading-[26px]  md:px-14 max-md:hidden text-white text-sm h-[33.8px] flex justify-between items-center xl:px-28">
      {/* Left Side */}
      <div className="flex items-center gap-2 pl-2">
        <span role="img" aria-label="truck">
          <img src={truck} alt="" />
        </span>
        <p className="font-normal text-[13px]">FREE Express Shipping On Orders $70+</p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6 text-white pl-12 text-[13px] font-medium font-roboto  leading-[26px] justify-between">
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2  pr-[0px]">
            <span>English</span>
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M5.25 7.25L10 12l4.75-4.75"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-full mt-1 right-0 bg-white text-black text-sm rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-10">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black pr-[10px]">
              Spanish
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black pr-[10px]">
              Hindi
            </div>
          </div>
        </div>

        <div className="cursor-pointer relative group">
          <div className="flex items-center gap-1">
            USD
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M5.25 7.25L10 12l4.75-4.75"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-full mt-1 right-0 bg-white text-black text-sm rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-10">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">
              CHF
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">
              GBR
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">
              KWD
            </div>
          </div>
        </div>

        <div className="cursor-pointer group relative">
          <div className="flex items-center gap-1">
            Setting
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M5.25 7.25L10 12l4.75-4.75"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <div className="absolute top-full w-10 mt-1 right-6 bg-white text-black text-sm rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-10">
            <div className="px-4 py-2 hover:bg-gray-100 cursoer-pointer w-36">My Profile</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursoer-pointer">Wishlist</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursoer-pointer">Cart</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursoer-pointer">Logout</div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Heading;
