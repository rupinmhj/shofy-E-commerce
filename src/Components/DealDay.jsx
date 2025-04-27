import React, { useState } from 'react'
import headphoneWireless from "../assets/headphone-wireless.png";
import headphoneWireless2 from "../assets/headphonewireless2.png";
import headphoneWireless3 from "../assets/headphone-wireless3.png";
import mobilegalaxy from "../assets/mobile-galaxy.png";
import mobilegalaxy2 from "../assets/mobileGalaxy2.png";
import mobilegalaxy3 from "../assets/mobile-galaxy3.png";
import cpuCooler1 from "../assets/cpu-cooler.png";
import cpuCooler11 from "../assets/cpu-cooler2.png";
import cpuCooler12 from "../assets/cpu-cooler3.png";
import cpuCooler2 from "../assets/cpu-cooler-2.png";
import CountdownTimer from './CountdownTimer';
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import ProductPreview from "./ProductPreview";

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
    colors:[
      "#4265a5",
      "#f3c2d7",
      "#cd286a"
    ],
    rating: 4,
    description:
      "Experience freedom with these wireless headphones, offering clear sound and a long-lasting battery.",
  },
  {
    id: 2,
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
    id: 3,
    product_catagory: "Cpu Cooler",
    name: "DeepCool Air Cooler",
    href: "#",
    price: "$48",
    imageSrc: cpuCooler1,
    imageSrc2: cpuCooler11,
    imageSrc3: cpuCooler12,
    rating: 4,
    description:
      "Efficient cooling for your CPU with a quiet fan and sleek design from DeepCool.", 
  },
];

const DealDay = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <div className='overflow-hidden w-full flex bg-cloud mt-14 px-20 pb-36 flex-col'>
        <div className="flex w-full justify-between px-10 relative pt-20 max-xl:px-2">
        <p className="font-roboto text-[2.25rem] max-xl:text-[30px] font-bold leading-[2.688rem] text-center z-10 text-custBlack">Deal of the Day</p>
        <svg
          width="140"
          height="35"
          viewBox="0 0 114 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[6rem] left-[1.1rem]"
        >
          <path
            d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
            stroke="#FF296A"
            strokeWidth="4"
            strokeMiterlimit="3.8637"
            strokeLinecap="round"
          ></path>
        </svg>
        <div className="text-center h-1 xl:w-[600px] bg-white mt-4"></div>
        <div className='flex gap-2'>
          <button className="flex items-center group hover:bg-black gap-2 px-10 py-4 text-white font-roboto font-bold rounded-xl text-[14px] bg-custBlue cursor-pointer transition-all duration-500 ease-in-out">
            View All Deals <span><FaArrowRight className='group-hover:translate-x-2 transform translate-x-0 transition-all' /></span>
          </button>
        </div>
      </div>
      
      <div>
        <div className="w-full px-4 py-16 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 max-md:grid-cols-1 sm:m-4 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group border bg-white border-gray-200 flex flex-col justify-start transition-all hover:shadow-lg hover:border-gray-300"
              >
                <div className="relative">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="aspect-square w-full rounded-lg object-cover transition-transform duration-200 transform group-hover:scale-105 hover:opacity-75"
                  />
                  <div className="absolute transition-all flex-col inset-0 bg-white bg-opacity-30 flex items-end pr-4 justify-center gap-0 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[-10px] duration-300">
                    <button className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-custBlue hover:text-white transition-all">
                      <FiShoppingCart size={18} />
                    </button>
                    <button 
                      className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-custBlue hover:text-white transition-all"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent any parent link navigation
                        setSelectedProduct(product);
                      }}
                    >
                      <FiEye size={18} />
                    </button>
                    <button className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-custBlue hover:text-white transition-all">
                      <FiHeart size={18} />
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-200 pl-6 pb-5">
                  <h3 className="mt-4 text-[0.75rem] hover:text-custBlue cursor-pointer leading-[1.625rem] font-bold text-left text-gray-500">
                    {product.product_catagory}
                  </h3>
                  <h3 className="text-[0.938] leading-[1.25rem] font-bold text-left text-black hover:text-custBlue cursor-pointer">
                    {product.name}
                  </h3>
                  <div className="flex my-2">
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
                  <p className="text-[0.938] leading-[1.25rem] font-bold text-left text-custBlue cursor-pointer">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {console.log(selectedProduct)}
      {selectedProduct && (
        <ProductPreview product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}

export default DealDay