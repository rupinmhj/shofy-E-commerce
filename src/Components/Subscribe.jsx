import React from "react";
import subImage from "../assets/subImage.png";
import plane from "../assets/plane.png";
import line from "../assets/line.svg"
const Subscribe = () => {
  return (
    <div className=" bg-bgBlue lg:h-[201.8px] max-xl:h-[286.8px] w-full flex relative mt-24  ">
      <div className="flex  xl:mx-24 max-xl:pt-16 max-lg:mx-6 px-2 w-full justify-between items-center z-10 max-lg:justify-center max-lg:flex-col">
        <div className="flex-col">
          <p className="font-medium font-roboto text-[16px] leading-[10px] text-white">
          SALE 20% OFF ALL STORE
          </p>
          <p className="font-extrabold font-roboto text-[40px] text-white">
            Subscribe our Newsletter
          </p>
        </div>
        <div className="xl:mt-6 mt-0 flex max-w-md gap-x-0 h-[60px] w-[526px] text-[14px] rounded-lg max-xl:pb-4">
          <label htmlFor="email-address" className=""></label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="rounded-l-lg min-w-0 flex-auto border border-white bg-white px-3.5 py-2 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-0 sm:text-sm/6"
          />

          <button
            type="submit"
            className="flex-none rounded-r-lg bg-custBlack px-8 py-2.5 text-sm font-semibold text-white "
          >
            Subscribe
          </button>
        </div>
      </div>
      <img
        src={subImage}
        className="absolute right-44 z-0 bottom-[24px] max-lg:bottom-24 max-lg:right-[60px]"
        alt=""
      />
      <img src={plane} className="h-10 absolute z-20 top-4 right-[600px]" alt="" />
      <img src={line} className="absolute right-[210px] top-12" alt="" />

    </div>
  );
};

export default Subscribe;
