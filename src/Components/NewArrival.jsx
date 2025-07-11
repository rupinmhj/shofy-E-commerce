import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";

// Images
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

import ProductPreview from "./ProductPreview";

// Products Data
const products = [
  {
    id: 1,
    product_catagory: "Headphone",
    name: "Headphones Wireless",
    href: "#",
    price: "$48",
    imageSrc: headphoneWireless,
    imageSrc2: headphoneWireless2,
    imageSrc3: headphoneWireless3,
    rating: 4,
    description:
      "Experience freedom with these wireless headphones, offering clear sound and a long-lasting battery.",
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
    description:
      "Perfect for calls and meetings, these headphones come with a built-in mic and noise isolation.",
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
    description:
      "Immersive gaming experience with surround sound and an adjustable mic for communication.",
  },
  {
    id: 4,
    product_catagory: "Mobile",
    name: "Ipad",
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
    product_catagory: "Mobile",
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
    product_catagory: "Mobile",
    name: "Iphone 12 Pro",
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



const NewArrival = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="overflow-hidden flex flex-col justify-center items-center xl:w-[85%] px-4 lg:my-20 xl:mx-32 max-lg:mx-8 my-12">
      {/* Header */}
      <div className="flex w-full justify-between py-5 relative">
        <p className="font-roboto text-[36px] max-lg:text-[30px] font-bold text-center z-10 text-custBlack">
          New Arrivals
        </p>
        <svg
          width="158"
          height="45"
          viewBox="0 0 114 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-10 left-[-8px]"
        >
          <path
            d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
            stroke="#FF296A"
            strokeWidth="4"
            strokeMiterlimit="3.8637"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex gap-2 pr-4">
          <div ref={prevRef} className="cursor-pointer">
            <FaAngleLeft className="border border-gray-400 p-[6px] rounded-full transition-all duration-300 hover:bg-custBlue hover:text-white" size={28} />
          </div>
          <div ref={nextRef} className="cursor-pointer">
            <FaAngleRight className="border border-gray-400 p-[6px] rounded-full transition-all duration-300 hover:bg-custBlue hover:text-white" size={28} />
          </div>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        className="w-full mx-3"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        onSwiper={setSwiper}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group border border-gray-200 flex flex-col justify-start transition-all hover:shadow-lg hover:border-gray-300">
              <div className="relative">
                <img
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg object-cover transition-transform duration-200 transform group-hover:scale-105 hover:opacity-75"
                  alt={product.name}
                />
                <div className="absolute inset-0 bg-white bg-opacity-30 flex flex-col items-end pr-4 justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
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

              {/* Product Details */}
              <div className="border-t border-gray-200 pl-6 pb-5">
                <h3 className="mt-4 text-[0.75rem] hover:text-custBlue cursor-pointer leading-[1.625rem] font-bold text-left text-gray-500">
                  {product.product_catagory}
                </h3>
                <h3 className="text-[0.938rem] leading-[1.25rem] font-bold text-left text-black hover:text-custBlue cursor-pointer">
                  {product.name}
                </h3>
                <div className="flex my-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 fill-current ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.78a1 1 0 00.95.69h3.982c.969 0 1.371 1.24.588 1.81l-3.221 2.34a1 1 0 00-.364 1.118l1.234 3.78c.3.921-.755 1.688-1.54 1.118l-3.221-2.34a1 1 0 00-1.176 0l-3.221 2.34c-.784.57-1.838-.197-1.54-1.118l1.234-3.78a1 1 0 00-.364-1.118L2.075 9.207c-.783-.57-.38-1.81.588-1.81h3.982a1 1 0 00.95-.69l1.234-3.78z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[0.938rem] leading-[1.25rem] font-bold text-left text-custBlue cursor-pointer">
                  {product.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product Preview */}
      {selectedProduct && (
        <ProductPreview product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default NewArrival;
