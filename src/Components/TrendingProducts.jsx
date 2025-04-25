import React from "react";
import headphoneWireless from "../assets/headphone-wireless.png";
import headphoneWireless2 from "../assets/headphonewireless2.png";
import headphoneWireless3 from "../assets/headphone-wireless3.png";

import headphoneMic from "../assets/headphone-mic.png";
import headphoneMic2 from "../assets/headphoneMic2.png";
import headphoneMic3 from "../assets/headphoneMic3.png";

import headphoneGaming from "../assets/headphone-gaming.png";
import headphoneGaming2 from "../assets/headphoneGaming2.png";
import headphoneGaming3 from "../assets/headphoneGaming3.png";

import mobilegalaxy from "../assets/mobile-galaxy.png";
import mobilegalaxy2 from "../assets/mobileGalaxy2.png";

import ipad from "../assets/ipad.png";
import iphone from "../assets/mobile-iphone.png";
import iphone2 from "../assets/iphone2.png";
import iphone3 from "../assets/iphone3.png";

import cpuCooler1 from "../assets/cpu-cooler.png";
import cpuCooler2 from "../assets/cpu-cooler-2.png";
import blueMark from "../assets/blue-mark.svg"
import { FaArrowRightLong } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

const products = [
  {
    id: 1,
    product_catagory: "Headphone",
    name: "Headphones Wireless",
    href: "#",
    price: "$48",
    imageSrc: headphoneWireless,
    imageSrc2: headphoneWireless2, //pink
    imageSrc3: headphoneWireless3, //blue
    rating: 4,
    description: "Experience freedom with these wireless headphones, offering clear sound and a long-lasting battery."
  },
  {
    id: 2,
    product_catagory: "Headphone",
    name: "Headphones With Mic",
    href: "#",
    price: "$48",
    imageSrc: headphoneMic,
    imageSrc2: headphoneMic2,
    imageSrc3: headphoneMic3,
    rating: 4,
    description: "Perfect for calls and meetings, these headphones come with a built-in mic and noise isolation."
  },
  {
    id: 3,
    product_catagory: "Headphone",
    name: "Gaming Headphones",
    href: "#",
    price: "$48",
    imageSrc: headphoneGaming,
    imageSrc2: headphoneGaming2,
    imageSrc3: headphoneGaming3,
    rating: 3,
    description: "Immersive gaming experience with surround sound and an adjustable mic for communication."
  },
  {
    id: 4,
    product_catagory: "Mobile",
    name: "Ipad",
    href: "",
    price: "$840",
    imageSrc: ipad,
    imageSrc2: ipad,
    imageSrc3: ipad,
    rating: 4,
    description: "Sleek and powerful, the iPad is your all-in-one solution for work, creativity, and entertainment."
  },
  {
    id: 5,
    product_catagory: "Mobile",
    name: "Samsung Galaxy",
    href: "#",
    price: "$48",
    imageSrc: mobilegalaxy,
    imageSrc2: mobilegalaxy2,
    imageSrc3: mobilegalaxy,
    rating: 4,
    description: "A stylish and reliable smartphone with a vibrant display and impressive performance."
  },
  {
    id: 6,
    product_catagory: "Mobile",
    name: "Iphone 12 Pro",
    href: "#",
    price: "$48",
    imageSrc: iphone,
    imageSrc2: iphone2,
    imageSrc3: iphone3,
    rating: 4,
    description: "Capture stunning photos and enjoy blazing-fast performance with the iPhone 12 Pro."
  },
  {
    id: 7,
    product_catagory: "Cpu Cooler",
    name: "DeepCool Air Cooler",
    href: "#",
    price: "$48",
    imageSrc: cpuCooler1,
    imageSrc2: cpuCooler1,
    imageSrc3: cpuCooler1,
    rating: 4,
    description: "Efficient cooling for your CPU with a quiet fan and sleek design from DeepCool."
  },
  {
    id: 8,
    product_catagory: "Cpu Cooler",
    name: "Antec Air Cooler",
    href: "#",
    price: "$90",
    imageSrc: cpuCooler2,
    imageSrc2: cpuCooler2,
    imageSrc3: cpuCooler2,
    rating: 4,
    description: "Keep your processor cool under pressure with this high-performance Antec air cooler."
  }
];

const TrendingProducts = () => {
  return (
    <div className="overflow-hidden flex xl:mx-28 lg:mx-20 text-center justify-center flex-col mt-20 ">
      <div className="flex xl:w-full max-xl:mx-6  justify-between relative  px-0 ">
        <p className="font-roboto text-[2.25rem] font-bold leading-[2.688rem] z-10 px-4 max-lg:text-[30px]">Trending Products</p>
        <svg
          width="140"
          height="35"
          viewBox="0 0 114 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-4 left-0   "
        >
          <path
            d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
            stroke="#FF296A"
            stroke-width="4"
            stroke-miterlimit="3.8637"
            stroke-linecap="round"
          ></path>
        </svg>
        <div className=" h-[0.15rem] xl:w-[550px] bg-gray-200 mt-[1.25rem]"></div>
        <div className="flex gap-10 text-[1.25rem] leading-[1.625] max-lg:hidden">
          <span className="w-30 text-custBlack cursor-pointer relative ">New</span>
          <img src={blueMark} className="absolute top-6" alt="" />
          <span className="w-30  text-customGray cursor-pointer">Featured</span>
          <span className="w-30  text-customGray cursor-pointer">Top Seller</span>
        </div>
      </div>
      {/* for products show case */}
      <div className="bg-white max-lg:px-6">
        <div className=" w-full px-4 sm:px-2  py-12 lg:px-4  ">
          {/* <h2 className="sr-only">Products</h2> */}

          <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4 ">
            {products.map((product) => (
              <a
              key={product.id}
              href={product.href}
              className="group border border-gray-200 flex flex-col justify-start transition-all hover:shadow-lg hover:border-gray-300"
            >
              <div className="relative">
                <img
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg object-cover transition-transform duration-200 transform group-hover:scale-105 hover:opacity-75"
                />
                 <div className="absolute  translate-x-0 group-hover:translate-x-[-10px] flex-col inset-0 bg-white bg-opacity-30 flex items-end pr-4 justify-center gap-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <button className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-custBlue hover:text-white transition-all">
        <FiShoppingCart size={18} />
      </button>
      <button className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-custBlue hover:text-white transition-all">
        <FiEye size={18} />
      </button>
      <button className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-custBlue hover:text-white transition-all">
        <FiHeart size={18} />
      </button>
      </div>
    </div>
                <div className="border-t border-gray-200 pl-6 pb-5">
                <h3 className="mt-4 text-[0.75rem] hover:text-custBlue cursor-pointer leading-[1.625rem] font-bold text-left text-gray-500 ">
                  {product.product_catagory}
                </h3>
                <h3 className=" text-[0.938] leading-[1.25rem] font-bold text-left text-black hover:text-custBlue cursor-pointer">
                  {product.name}
                </h3>
                {/* ⭐ Star Ratings */}
                <div className="flex my-2 ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 fill-current ${
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.78a1 1 0 00.95.69h3.982c.969 0 1.371 1.24.588 1.81l-3.221 2.34a1 1 0 00-.364 1.118l1.234 3.78c.3.921-.755 1.688-1.54 1.118l-3.221-2.34a1 1 0 00-1.176 0l-3.221 2.34c-.784.57-1.838-.197-1.54-1.118l1.234-3.78a1 1 0 00-.364-1.118L2.075 9.207c-.783-.57-.38-1.81.588-1.81h3.982a1 1 0 00.95-.69l1.234-3.78z" />
                    </svg>
                  ))}
                </div>
                <p className=" text-[0.938] leading-[1.25rem] font-bold text-left text-custBlue cursor-pointer">
                  {product.price}
                </p>
                </div>
                
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex  h-30 w-full justify-between max-lg:flex-col max-lg:gap-y-4 px-3">
        <div className="bg-custback w-[65%] rounded-xl min-h-20 max-h-60 flex justify-between group">
          <div className="flex flex-col text-start px-10 py-10 justify-center font-medium">
            <h2 className="leading-[1.625rem] font-roboto text-[1rem] text-gray-600">
              Sale 20% off all store
            </h2>
            <span className="font-roboto text-[1.75rem]  leading-[2.25rem] p-0 text-custBlack">
              Smartphone
            </span>
            <span className="font-roboto text-[1.75rem]  leading-[2.25rem] text-custBlack ">
              Iphone 12 pro
            </span>
            <button className="inline-flex mt-4 hover:text-custBlue group text-[13px] font-roboto ">
              Shop Now
              <FaArrowRightLong className="mt-1 ml-2 transform transition-all duration-300 group-hover:translate-x-1"/>

            </button>
          </div>
          <div className="overflow-hidden relative ">
            <img
              src={iphone}
              className="object-cover w-full h-full mask mask-squircle group-hover:scale-125 transition-transform duration-200"
              alt="Phone"
            />
          </div>
        </div>
        <div className="bg-custBlue2 xl:w-[33%]  lg:w-[40%] rounded-xl min-h-20 max-h-60 flex justify-between group">
          <div className="flex flex-col text-start px-10 py-10">
            <h2 className="leading-[1.625rem] font-roboto text-[1.25rem]">
              Sale 30% off
            </h2>
            <span className="font-roboto text-[1.75rem] leading-[2.25rem] font-medium leading-2 ">
              Wireless
            </span>
            <span className="font-roboto text-[1.75rem] leading-[2.25rem] inline-block font-medium leading-2 p-0 ">
              Sony Hype
            </span>
            <button className="inline-flex mt-4 hover:text-custBlue text-custBlack group font-roboto text-[13px] ">
              Shop Now
              <FaArrowRightLong className="mt-1 ml-2 transform transition-all duration-300 group-hover:translate-x-1"/>

            </button>
          </div>
          <div className="overflow-hidden relative ">
            <img
              src={headphoneWireless}
              className="object-cover w-full h-full mask mask-squircle group-hover:scale-125 transition-transform duration-200"
              alt="Phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
