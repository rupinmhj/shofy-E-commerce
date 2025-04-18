import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import slider1 from "../assets/slider-img-1.png";
import slider2 from "../assets/slider-img-2.png";
import slider3 from "../assets/slider-img-3.png";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slidesData = [
  {
    id: 1,
    image: slider1,
    title1: "The best Tablet",
    title2: "Collection 2025",
    offer: "-40%",
    content: ["High performance", "Long battery life", "Premium design"]
  },
  {
    id: 2,
    image: slider2,
    title1: "Smart Technology",
    title2: "Arrivals 2025",
    offer: "-50%",
    content: ["AI-powered features", "Seamless connectivity", "Future-proof tech"]
  },
  {
    id: 3,
    image: slider3,
    title1: "Modern Gadgets",
    title2: "Super Sale",
    offer: "-30%",
    content: ["Innovative solutions", "Cutting-edge design", "Ultimate convenience"]
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const Slider = () => {
  const slideRef = useRef();

  const handlePrev = () => {
    slideRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    slideRef.current.swiper.slideNext();
  };

  return (
    <div className="overflow-hidden relative w-full h-[516px] group">
      {/* Navigation Buttons */}
      <FaChevronLeft
        onClick={handlePrev}
        className="max-xl:hidden absolute z-10 top-1/2 -translate-y-1/2 left-12 size-8 text-white  border-gray-200 p-2 border-[0.5px] rounded-full hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[20px] transition-all duration-300 cursor-pointer"
      />
      <FaChevronRight
        onClick={handleNext}
        className="max-xl:hidden absolute z-10 top-1/2 -translate-y-1/2 right-12 size-8 text-white  border-gray-200 p-2 border-[0.5px] rounded-full hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[-20px] transition-all duration-300 cursor-pointer"
      />

      <Swiper
        ref={slideRef}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={50}
        navigation={false}
        pagination={{ clickable: true }}
        className="px-4 py-8 mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="flex justify-center items-center h-[516px] bg-sliderBlue">
                <div className="flex w-full max-w-7xl mx-8 items-center justify-between text-white">
                  {/* Text */}
                  <div className="flex flex-col">
                    <motion.p
                      className="text-[16px] leading-[26px] font-roboto text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                    >
                      Starting at $240
                    </motion.p>
                    <motion.p
                      className="text-[56px] max-lg:text-[32px] max-lg:leading-[38px] leading-[60px]  font-roboto font-black text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {slide.title1}
                    </motion.p>
                    <motion.p
                      className="text-[56px] max-lg:text-[32px] max-lg:leading-[38px] leading-[60px] font-roboto font-black text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {slide.title2}
                    </motion.p>
                    <motion.p
                      className="text-[28px] leading-[38px] font-oregano text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      Exclusive offer{" "}
                      <span className="text-red-600 relative">
                        {slide.offer}
                        <svg
                          className="absolute left-2"
                          width="94"
                          height="20"
                          viewBox="0 0 94 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M74.8576 4.63367L78.6048 5.11367..."
                            fill="currentColor"
                          />
                        </svg>
                      </span>{" "}
                      this week.
                    </motion.p>
                    
                    {/* Content items with animations */}
                   
                   
                    <motion.a
                      href="/shop"
                      className=" group/inner inline-flex items-center text-[14px] w-40 font-medium font-roboto text-[#010F1C] mt-8 bg-white px-[29px] py-[9px] rounded-[6px] border border-white shadow-sm transition-all duration-300 hover:bg-custBlue hover:text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    >
                      Shop Now
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 group-hover/inner:translate-x-2 transform translate-x-0 transition-all"
                      >
                        <path
                          d="M16 6.99976L1 6.99976"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <img src={slide.image} alt={`Slide ${index + 1}`} />
                  </motion.div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;