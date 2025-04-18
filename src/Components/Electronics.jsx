import React from 'react'
import headphoneWireless from "../assets/headphone-wireless.png";
import headphoneMic from "../assets/headphone-mic.png";
import headphoneGaming from "../assets/headphone-gaming.png";
import mobilegalaxy from "../assets/mobile-galaxy.png";
import ipad from "../assets/ipad.png";
import iphone from "../assets/mobile-iphone.png";
import gadgetGirl from "../assets/gadget-girl.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

// for swipe slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const products = [
  {
    id: 1,
    product_catagory: "Headphone",
    name: "Headphones Wireless",
    href: "#",
    price: "$48",
    imageSrc: headphoneWireless,
    rating: 4,
  },
  {
    id: 2,
    product_catagory: "Headphone",
    name: "Headphones With Mic",
    href: "#",
    price: "$48",
    imageSrc: headphoneMic,
    rating: 4,
  },
  {
    id: 3,
    product_catagory: "Headphone",
    name: "Gaming Headphones",
    href: "#",
    price: "$48",
    imageSrc: headphoneGaming,
    rating: 3,
  },
  {
    id: 4,
    product_catagory: "Mobile",
    name: "Ipad",
    href: "",
    price: "$840",
    imageSrc: ipad,
    rating: 4,
  },
  {
    id: 5,
    product_catagory: "Mobile ",
    name: "Samsung Galaxy",
    href: "#",
    price: "$48",
    imageSrc: mobilegalaxy,
    rating: 4,
  },
  {
    id: 6,
    product_catagory: "Mobile",
    name: "Iphone 12 Pro",
    href: "#",
    price: "$48",
    imageSrc: iphone,
    rating: 4,
  },
 

];
const Electronics = () => {
  return (
    <div className=' flex flex-row justify-between lg:my-20 lg:mx-32 max-xl:flex-col max-xl:px-[100px] mb-5 max-xl:mt-14'>
        <div className="flex   xl:w-[33%] flex-col xl:h-[42rem] sticky xl:top-[6rem] ">
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
            
            <Swiper
  modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation={true} // Enable navigation without needing to manually define buttons
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
           className="w-full max-w-[1200px] mx-auto "
>
  <SwiperSlide className="">
    <div className='bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 flex max-h-60 justify-between rounded-xl mt-4 group '>
      <div className="flex flex-col text-start px-10 py-10 hover:motion-preset-rebound-down motion-delay-[250ms]">
        <h2 className="leading-[26px] font-roboto text-[14px] text-white ">
          Sale 30% off 
        </h2>
        <span className="font-roboto text-[24px] font-bold leading-[29px]  text-white ">
          Wireless
        </span>
        <span className="font-roboto text-[24px] font-bold leading-[29px] p-0 text-white ">
          Sony Hyperfx 
        </span>
        
      </div>
      <div className="overflow-hidden relative">
        <img
          src={headphoneWireless}
          className="object-cover w-full h-full mask mask-squircle group-hover:scale-125 transition-transform "
          alt="Phone"
        />
      </div>
    </div>
  </SwiperSlide>

 
  <SwiperSlide className="">
    <div className='bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 flex max-h-60 justify-between rounded-xl mt-4 group '>
      <div className="flex flex-col text-start px-10 py-10 hover:motion-preset-rebound-down hover:motion-delay-[250ms] transition-all ">
        <h2 className="leading-[26px] font-roboto text-[14px] text-white">
          Sale 10% off 
        </h2>
        <span className="font-roboto text-[24px] font-bold leading-[29px]  text-white ">
          Iphone12
        </span>
        <span className="ffont-roboto text-[24px] font-bold leading-[29px]  text-white">
          Pro 
        </span>
      </div>
      <div className="overflow-hidden relative">
        <img
          src={iphone}
          className="object-cover  w-full h-full  group-hover:scale-125 transition-transform duration-200"
          alt="Phone"
        />
      </div>
    </div>
  </SwiperSlide>
</Swiper>


        </div>
        <div className="bg-white xl:w-[65%]   ">
        <div className="  px-4 xl:py-0 sm:px-6 sm:py-4  lg:px-2 ">
          {/* <h2 className="sr-only">Products</h2> */}
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  xl:gap-x-8 ">
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
        
      
    </div>
  )
}

export default Electronics
