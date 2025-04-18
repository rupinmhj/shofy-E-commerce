import React from "react";
import subImage from "../assets/subImage.png";
const Subscribe = () => {
  return (
    <div className="overflow-hidden bg-bgBlue lg:h-[173px] w-full flex relative mt-24 pb-16 pt-8 ">
      <div className="flex  lg:mx-10 max-lg:mx-6 px-2 w-full justify-between items-center z-10 max-lg:flex-col">
        <div className="flex-col">
          <p className="font-medium font-roboto text-[16px] text-white">
            Sale 20% off all store
          </p>
          <p className="font-extrabold font-roboto text-[40px] text-white">
            Subscribe our Newsletter
          </p>
        </div>
        <div className="mt-6 flex max-w-md gap-x-0 h-[60px] w-[526px] text-[14px] rounded-lg">
          <label htmlFor="email-address" className=""></label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-auto border border-white bg-white px-3.5 py-2 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-0 sm:text-sm/6"
          />

          <button
            type="submit"
            className="flex-none  bg-custBlack px-8 py-2.5 text-sm font-semibold text-white "
          >
            Subscribe
          </button>
        </div>
      </div>
      <img
        src={subImage}
        className="absolute right-44 z-0 bottom-[2px] max-lg:bottom-24 max-lg:right-[60px]"
        alt=""
      />
    </div>
  );
};

export default Subscribe;
