import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

import discount from "../assets/banner-offer.png";
import banner1 from "../assets/banner-slider-1.png";
import banner2 from "../assets/banner-slider-2.png";
import banner3 from "../assets/banner-slider-3.png";

import "swiper/css";
import "swiper/css/pagination";

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//     },
//   }),
// };

const slideData = [
  {
    id: 1,
    image: banner1,
    title1: "The Best Tablet",
    title2: "Collection 2025",
    discountPosition: "top-5 max-lg:top-[230px]",
    content: ["Premium design", "High-speed performance", "Long battery life"]
  },
  {
    id: 2,
    image: banner2,
    title1: "Smart Technology",
    title2: "Arrivals 2025",
    discountPosition: "top-20 max-lg:top-[230px]",
    content: ["Touch interface", "Voice control", "Smart connectivity"]
  },
  {
    id: 3,
    image: banner3,
    title1: "The Best Tablet",
    title2: "Collection 2025",
    discountPosition: "top-0 left-50 max-lg:top-[220px] max-lg:left-[200px]",
    content: ["4K display", "Ultra-fast processor", "Extended warranty"]
  }
];

const AdSwiper = () => {
  return (
    <div className="overflow-hidden flex relative items-center justify-around bg-sliderBlue py-20 xl:mx-32 sm:mx-20 rounded-2xl min-px-2">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="custNav"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div>
                <div className="flex max-lg:flex-col max-lg:gap-6 w-full items-center justify-around text-black">
                  <div className="text-white">
                    <motion.p
                      className="block w-auto text-[19px] leading-7 font-roboto font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                    >
                      Starting at $240
                    </motion.p>
                    <motion.p
                      className="block w-auto text-[56px] max-lg:text-[36px] max-lg:leading-[30px] leading-[60px] font-roboto font-extrabold py-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {slide.title1}
                    </motion.p>
                    <motion.p
                      className="block w-auto text-[56px] max-lg:text-[36px] max-lg:leading-[30px] leading-[60px] font-roboto font-extrabold py-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {slide.title2}
                    </motion.p>
                    <motion.p
                      className="block w-auto text-[32px] leading-7 font-oregano"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      Exclusive offer -40% this week.
                    </motion.p>
                    
                    {/* Feature content with animations */}
                   
                    
                    <motion.button
                      className="inline-flex mt-6 text-[14px] bg-custBlack hover:bg-white hover:text-custBlack text-white font-medium rounded-xl group outline-red-600 py-3 px-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    >
                      Shop Now
                      <FaArrowRightLong className="mt-1 ml-2 transform transition-all duration-300 group-hover:translate-x-1" />
                    </motion.button>
                  </div>

                  <div className="relative">
                    <motion.img
                      src={slide.image}
                      className="relative"
                      alt={`Banner ${slide.id}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={isActive ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <img
                        src={discount}
                        alt="Discount"
                        className={`absolute ${slide.discountPosition}`}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdSwiper;