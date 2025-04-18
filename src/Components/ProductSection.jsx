import React from 'react'
// import { HiArrowRightCircle, HiArrowLeftCircle } from "react-icons/hi2";
import { FaStar, FaRegStar } from 'react-icons/fa';
// Images
import headphoneWireless from "../assets/headphone-wireless.png";
import headphoneMic from "../assets/headphone-mic.png";
import headphoneGaming from "../assets/headphone-gaming.png";
import mobilegalaxy from "../assets/mobile-galaxy.png";
import ipad from "../assets/ipad.png";
import iphone from "../assets/mobile-iphone.png";
const productsOne = [
  { id: 1, product_catagory: "Headphone", name: "Headphones Wireless", href: "#", price: "$48", imageSrc: headphoneWireless, rating: 4 },
  { id: 2, product_catagory: "Headphone", name: "Headphones With Mic", href: "#", price: "$48", imageSrc: headphoneMic, rating: 4 },
  { id: 3, product_catagory: "Headphone", name: "Gaming Headphones", href: "#", price: "$48", imageSrc: headphoneGaming, rating: 3 },
  
];
const productsTwo = [
  
  { id: 1, product_catagory: "Mobile", name: "Ipad", href: "#", price: "$840", imageSrc: ipad, rating: 4 },
  { id: 2, product_catagory: "Mobile", name: "Samsung Galaxy", href: "#", price: "$48", imageSrc: mobilegalaxy, rating: 4 },
  { id: 3, product_catagory: "Mobile", name: "Iphone 12 Pro", href: "#", price: "$48", imageSrc: iphone, rating: 4 },
];
const productsThree = [
  { id: 1, product_catagory: "Headphone", name: "Headphones Wireless", href: "#", price: "$48", imageSrc: headphoneWireless, rating: 4 },
  
  { id: 2, product_catagory: "Mobile", name: "Samsung Galaxy", href: "#", price: "$48", imageSrc: mobilegalaxy, rating: 4 },
  { id: 3, product_catagory: "Mobile", name: "Iphone 12 Pro", href: "#", price: "$48", imageSrc: iphone, rating: 4 },
];
const ProductSection = ({ title, products }) => (
    <div className='overflow-hidden '>
      <p className='px-6 w-[450px] text-[24px] font-roboto font-bold mb-10 text-textBlack'>
        {title}
      </p>
      {products.map((product) => (
        <a
          key={product.id}
          href={product.href}
          className="flex justify-start h-38 bg-white px-4 py-2 border-b w-[420px] last:border-none "
        >
          <img
            src={product.imageSrc}
            className="bg-bgGray aspect-square h-36 w-36 rounded-lg object-cover transition-transform duration-200 transform cursor-pointer hover:opacity-75 xl:aspect-7/8"
          />
          <div className="pl-6 pb-5">
            <h3 className="mt-4 text-[0.75rem] hover:text-custBlue cursor-pointer leading-[1.625rem] font-medium font-roboto text-left text-gray-700">
              {product.product_catagory}
            </h3>
            <h3 className="text-[0.938] leading-[1.25rem] font-medium font-roboto text-left text-black hover:text-custBlue cursor-pointer">
              {product.name}
            </h3>
            {/* ⭐ Star Ratings */}
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
            <p className="text-[15px] leading-[1.25rem] font-bold text-left text-custBlue cursor-pointer">
              {product.price}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
  