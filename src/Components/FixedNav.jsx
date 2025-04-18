import { React, useState } from "react";
import hamburger from "../assets/burger.svg";
import logo from "../assets/logo.svg";
import drop from "../assets/dropdown.svg";
import phone from "../assets/phone.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import HomeMenu from "./HomeMenu";
const FixedNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" xl:fle text-[14px] font-medium h-[66px] bg-white border-b shadow-lg shadow-black-500/50">
      <div className="flex justify-between w-full h-16  sm:px-5 md:px-10 lg:px-10 xl:px-32 ">
        <div className="flex ">
          {/* logo */}
          <div>
            <img src={logo} className="h-[36px] mr-[160px] mt-4" alt="Logo" />
          </div>

          <div className="flex gap-0 max-lg:hidden  text-center py-5 font-roboto font-normal text-[14px] w-[660px] ">
            <div className="relative">
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative px-1 hover:text-custBlue cursor-pointer">
                  <p className="w-16  text-custBlack font-medium">Home</p>
                  <img
                    src={drop}
                    className="h-4 absolute top-[3px] left-[56px]"
                    alt="dropdown icon"
                  />
                </div>

                {isHovered && (
                  <div
                    className="absolute top-[40px] left-0 w-[220px] h-[130px] shadow-lg bg-white z-50 
        animate-fadeInScale transition-all duration-300 ease-in-out"
                  >
                    <HomeMenu />
                  </div>
                )}
              </div>
            </div>

            <div className="relative cursor-pointer hover:text-custBlue px-2">
              <p className="w-16 text-custBlack font-medium ">Shop</p>
              <img
                src={drop}
                className="h-4 absolute top-[3px] left-14 "
                alt=""
              />
            </div>
            <div className="relative cursor-pointer hover:text-custBlue px-2">
              <p className="w-18 mr-4 text-custBlack font-medium">Products</p>
              <img
                src={drop}
                className="h-4 absolute top-[3px] left-16   "
                alt=""
              />
            </div>
            <div className="relative cursor-pointer hover:text-custBlue px-2">
              <p className="w-14 text-custBlack font-medium">Coupons</p>
            </div>
            <div className="relative cursor-pointer hover:text-custBlue px-2">
              <p className="w-16 text-custBlack font-medium">Blog</p>
              <img
                src={drop}
                className="h-4 absolute top-[3px] left-14 "
                alt=""
              />
            </div>
            <div className="relative cursor-pointer hover:text-custBlue px-2">
              <p className="w-16 text-custBlack font-medium">Contacts</p>
            </div>
          </div>
        </div>

        {/* Phone/Hotline section positioned at the right */}
        <div className="flex items-center  justify-end gap-4 text-[14px] text-gray-700  leading-[26px] max-lg:hidden ">
          <BiTransfer className="text-3xl cursor-pointer rotate-90 hover:text-custBlue" />
          <div className="relative cursor-pointer">
            <FaRegHeart className="text-[20px]" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <div className="relative cursor-pointer">
            <HiOutlineShoppingBag className="text-[20px]" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedNav;
