import React from "react";
import headphone from "../assets/product-cat-1.png";
import mobile from "../assets/Mobile.png";
import heatpipe from "../assets/heatpipes.png";
import bluetooth from "../assets/bluetooth.png";
import smartwatch from "../assets/smartwatch.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlinePercentage } from "react-icons/ai";
import { CiHeadphones } from "react-icons/ci";
const callouts = [
  {
    name: "Headphones",
    imageSrc: headphone,
    href: "#",
    available:"3 Products",
  },
  {
    name: "mobile",
    imageSrc: mobile,
    href: "#",
    available:"3 Products",
  },
  {
    name: "Heatpipe",
    imageSrc: heatpipe,
    href: "#",
    available:"4 Products",
  },
  {
    name: "Bluetooth",
    imageSrc: bluetooth,
    href: "#",
    available:"2 Products",
  },
  {
    name: "Smartwatch",
    imageSrc: smartwatch,
    href: "#",
    available:"4 Products",
  },
];

const Product = () => {
  return (
    <div className="overflow-hidden flex mx-30 items-center justify-center flex-col w-full  ">
      <div className=" w-[90%] px-4 sm:px-6 lg:px-8  flex justify-center">
        <div className=" max-w-2xl py-4 sm:py-24 lg:max-w-full lg:py-16 ">
        <div className="mt-6 grid  max-sm:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 lg:pl-20 xl:pl-0 2xl:grid-cols-5 gap-x-20 gap-y-4 ">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative flex flex-col gap-y-0 justify-center items-center">
                <div
                  className=" h-[180px] w-[180px] bg-[#E2F1FF] rounded-full flex items-center justify-center" // Circle background
                >
                  <img
                    src={callout.imageSrc}
                    className="w-[76px] h-[98px] object-contain group-hover:opacity-100 transition-transform duration-300 transform group-hover:scale-110 cursor-pointer" // Adjusted to fit inside the circle
                    alt={callout.name}
                  />
                </div>
                <h1 className="mt-2 text-[20px] font-medium p-0 leading-0 font-roboto text-custBlack flex flex-col text-center">
                  <a href={callout.href}>
                    <span className="absolute " />
                    {callout.name}
                    
                  </a>
                </h1>
                <h2 className=" text-[14px] font-roboto text-gray-600 flex flex-col text-center leading-[14px]">
                    <a href={callout.href}>
                    <span className=" " />
                    {callout.available}
                    </a>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
            <div className="w-[85%]    text-center grid xl:grid-cols-4 grid-cols-2 gap-[10px]   ">
                <div className="h-[6.2rem]   bg-custGrey border  flex items-center jjustify-start pl-6 gap-6 ">
                <CiDeliveryTruck className="text-4xl text-red-600" />
                <div className="flex flex-col text-center  gap-0 relative">
                    <p className="text-[1rem] leading-[1.888rem] font-roboto text-custBlack flex flex-col text-left font-medium">Free Delivery</p>
                    <p className="text-[0.875rem] leading-[0.8rem]  mt-0 font-roboto text-gray-700 flex flex-col text-center   top-0">Orders of all items</p>
                </div>

                </div>
                <div className="h-[6.2rem]  bg-custGrey border  flex items-center justify-start pl-6 gap-6">
                <FiDollarSign  className="text-4xl text-red-600" />
                <div className="flex flex-col text-center  gap-0 relative">
                    <p className="text-[1rem] leading-[1.888rem] mt-0  font-roboto font-bold text-custBlack flex flex-col text-left ">Return & Refund</p>
                    <p className="text-[0.875rem] leading-[0.8rem]  font-roboto text-gray-700 flex flex-col text-center   top-0">Money back guarantee</p>
                </div>

                </div>
                <div className="h-[6.2rem]  bg-custGrey border  flex items-center justify-start pl-6 gap-6">
                <AiOutlinePercentage className="text-4xl text-red-600" />
                <div className="flex flex-col text-center  gap-0 relative">
                    <p className="text-[1rem] leading-[1.888rem] font-roboto text-custBlack font-bold flex flex-col text-left ">Free Delivery</p>
                    <p className="text-[0.875rem] leading-[0.8rem]  font-roboto text-gray-700 flex flex-col text-center  top-0">On every order over $140.</p>
                </div>

                </div>
                <div className="h-[6.2rem]  bg-custGrey border  flex items-center justify-start pl-6 gap-6">
                <CiHeadphones className="text-4xl text-red-600" />
                <div className="flex flex-col text-center  gap-0 relative">
                    <p className="text-[1rem] leading-[1.888rem] font-roboto text-custBlack font-bold flex flex-col text-left ">Support 24/7
                    </p>
                    <p className="text-[0.875rem] leading-[0.8rem]  font-roboto text-gray-700 flex flex-col text-center top-0">Contact us 24 hours a day</p>
                </div>

                </div>
            </div>
    </div>
  );
};

export default Product;
