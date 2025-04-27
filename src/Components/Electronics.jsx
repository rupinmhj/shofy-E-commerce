import React, { useState } from "react";
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
import mobilegalaxy3 from "../assets/mobile-galaxy3.png";
import ipad from "../assets/ipad.png";
import iphone from "../assets/mobile-iphone.png";
import iphone2 from "../assets/iphone2.png";
import iphone3 from "../assets/iphone3.png";
import gadgetGirl from "../assets/gadget-girl.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductPreview from "./ProductPreview";

const products = [
  {
    id: 1,
    product_category: "Headphone",
    name: "Headphones Wireless",
    href: "#",
    price: "$48",
    imageSrc: headphoneWireless,
    imageSrc2: headphoneWireless2,
    imageSrc3: headphoneWireless3,
    colors: ["#4265a5", "#f3c2d7", "#cd286a"],
    rating: 4,
    description:
      "Experience freedom with these wireless headphones, offering clear sound and a long-lasting battery.",
  },
  {
    id: 2,
    product_category: "Headphone",
    name: "Headphones With Mic",
    href: "#",
    price: "$48",
    imageSrc: headphoneMic,
    imageSrc2: headphoneMic2,
    imageSrc3: headphoneMic3,
    rating: 4,
    description:
      "Perfect for calls and meetings, these headphones come with a built-in mic and noise isolation.",
  },
  {
    id: 3,
    product_category: "Headphone",
    name: "Gaming Headphones",
    href: "#",
    price: "$48",
    imageSrc: headphoneGaming,
    imageSrc2: headphoneGaming2,
    imageSrc3: headphoneGaming3,
    rating: 3,
    description:
      "Immersive gaming experience with surround sound and an adjustable mic for communication.",
  },
  {
    id: 4,
    product_category: "Mobile",
    name: "iPad",
    href: "#",
    price: "$840",
    imageSrc: ipad,
    imageSrc2: ipad,
    imageSrc3: ipad,
    rating: 4,
    description:
      "Sleek and powerful, the iPad is your all-in-one solution for work, creativity, and entertainment.",
  },
  {
    id: 5,
    product_category: "Mobile",
    name: "Samsung Galaxy",
    href: "#",
    price: "$48",
    imageSrc: mobilegalaxy,
    imageSrc2: mobilegalaxy2,
    imageSrc3: mobilegalaxy3,
    rating: 4,
    description:
      "A stylish and reliable smartphone with a vibrant display and impressive performance.",
  },
  {
    id: 6,
    product_category: "Mobile",
    name: "iPhone 12 Pro",
    href: "#",
    price: "$48",
    imageSrc: iphone,
    imageSrc2: iphone2,
    imageSrc3: iphone3,
    rating: 4,
    description:
      "Capture stunning photos and enjoy blazing-fast performance with the iPhone 12 Pro.",
  },
];

const Electronics = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex flex-row justify-between lg:my-20 lg:mx-32 max-xl:flex-col max-xl:px-[100px] mb-5 max-xl:mt-14">
      <div className="flex flex-col xl:w-[33%] xl:h-[42rem] sticky xl:top-[6rem]">
        {/* Left Card */}
        <div className="flex border-2 border-pink-500 rounded-lg m-0 w-full h-[349.4px] justify-between relative overflow-hidden">
                    <div className='m-10'>
                        <h2 className='font-roboto text-custBlack font-semibold text-[20px] leading-[24px] py-0'>Electronics</h2>
                        <h2 className='font-roboto text-custBlack text-[20px] font-semibold leading-[24px] py-0'>Gadget</h2>
                        <div className='h-[1.5px] bg-custBlue w-[150px] mt-2 mb-4'></div>
                        <ul className='list-disc pl-5 text-[14px] text-textGray font-medium leading-[26px]'>
                            <li className='  py-0 font-medium'>Camera</li>
                            <li className=' font-medium py-0'>Mobile</li>
                            <li className=' font-medium py-0'>Laptop</li>
                            <li className=' font-medium py-0'>Tablet</li>
                            <li className=' font-medium py-0'>Monitor</li>
                            <li className=' font-medium py-0'>Headphones</li>
                        </ul>
                        <button className="inline-flex mt-4 text-[13px] font-medium hover:text-custBlue group ">
                      More Products
                      <FaArrowRightLong className="mt-1 ml-2 transform transition-all duration-300 group-hover:translate-x-1"/>
        
                    </button>
                    </div>
                    <div className=' '>
                        <img src={gadgetGirl} className=' absolute mt-10 right-[-8px] bottom-0' alt="" />
                    </div>
            </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full max-w-[1200px] mx-auto mt-6"
        >
          <SwiperSlide>
            <div className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 flex max-h-60 justify-between rounded-xl group">
              <div className="flex flex-col px-10 py-10 text-start">
                <h2 className="text-[14px] leading-[20px] font-medium text-white">
                  Sale 30% off
                </h2>
                <span className="text-[22px] font-bold text-white leading-[28px]">
                  Wireless
                </span>
                <span className="text-[22px] font-bold text-white leading-[28px]">
                  Sony Hyperfx
                </span>
              </div>
              <div className="overflow-hidden relative">
                <img
                  src={headphoneWireless}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  alt="Wireless Headphones"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 flex max-h-60 justify-between rounded-xl group">
              <div className="flex flex-col px-10 py-10 text-start">
                <h2 className="text-[14px] leading-[20px] font-medium text-white">
                  Sale 10% off
                </h2>
                <span className="text-[22px] font-bold text-white leading-[28px]">
                  iPhone12
                </span>
                <span className="text-[22px] font-bold text-white leading-[28px]">
                  Pro
                </span>
              </div>
              <div className="overflow-hidden relative">
                <img
                  src={iphone}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  alt="iPhone 12 Pro"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Right Side Products */}
      <div className="bg-white xl:w-[65%]">
        <div className="px-4 xl:py-0 sm:px-6 sm:py-4 lg:px-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group border border-gray-200 flex flex-col justify-start hover:shadow-lg hover:border-gray-300 transition-all"
              >
                <div className="relative">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="aspect-square w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-30 flex items-end justify-center pr-4 gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col">
                    <button className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-custBlue hover:text-white transition-all">
                      <FiShoppingCart size={18} />
                    </button>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-custBlue hover:text-white transition-all"
                    >
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Preview Popup */}
      {selectedProduct && (
        <ProductPreview
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Electronics;
