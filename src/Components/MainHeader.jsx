import {React,useState} from 'react';
import logo from '../assets/logo.svg';
import { FaRegUser } from "react-icons/fa";
import { BiTransfer } from 'react-icons/bi';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const MainHeader = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className='overflow-hidden z-10 bg-white font-jost h-[110px] max-lg:h-[65px] flex  items-center max-lg:mx-2 '>
        <div className="flex h-[49.2px]   justify-between items-center w-full px-4 py-6 sm:px-6 md:px-12 lg:px-16 xl:px-32 sm:gap-8 md:gap-16 lg:gap-18 xl:gap-32">
          <div>
          <img src={logo} className="h-[38px]" alt="Logo" />
          </div>
      
      <div className="max-xl:hidden  xl:flex w-[650px] min-w-[200px] h-[49.2px] border-2 border-blue-500 rounded overflow-hidden text-sans-serif text-[14px] relative">
        <input
          type="text"
          placeholder="Search for Products..."
          className="flex-1 px-4 py-2  focus:outline-none text-gray-400 text-[14px] font-roboto "
        />
        {/* <select className="border-l border-gray-300 px-2 text-[18px] text-black focus:outline-none " onClick={() => setFlipped(!flipped)}> */}
      
        <select
        className="appearance-none cursor-pointer border border-gray-300 px-4 py-2 pr-10 text-[14px] font-roboto text-black focus:outline-none rounded duration-100 ease-in transition-all font-normal  "
        onClick={() => setFlipped(!flipped)}
        onBlur={() => setFlipped(false)} // Reset on close
      >
          <option >Select Category</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Jewellery</option>
        </select >
      
        
        <svg
  className={`w-4 h-4 absolute left-[500px] top-6  transform -translate-y-1/2 transition-transform duration-300 ${
    flipped ? "rotate-180" : ""
  }`}
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M19 9l-7 7-7-7"
  />
</svg>
        <button className="bg-custBlue px-4 flex items-center justify-center text-white">
        <svg
        className={`w-6 transition-transform duration-300 
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
        />
      </svg>
        </button>
      </div>
      <div className="flex items-center  justify-end gap-4 text-[14px] text-gray-700 h-[44px] leading-[26px]">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className='border border-gray-300 p-2 rounded-full max-lg:hidden '>
          <FaRegUser  className="text-[24px] text-gray-500" />
          </div>
          <div className="flex gap-1 flex-col w-28 max-lg:hidden font-roboto">
            <span className="text-[12px] font-medium text-gray-400 inline-block leading-[12px] p-0" >Hello, Sign In</span>
            <p className="font-semibold  text-[14px] inline-block leading-[14px] p-0 ">Your Account</p>
          </div>
        </div>
        <BiTransfer className="text-3xl cursor-pointer rotate-90 hover:text-custBlue max-lg:hidden" />
        <div className="relative cursor-pointer">
          <FaRegHeart className="text-[20px]"/>
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </div>
        <div className="relative cursor-pointer">
          <HiOutlineShoppingBag  className="text-[20px]"/>
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default MainHeader;
