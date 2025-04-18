import { React, useState } from "react";
import hamburger from "../assets/burger.svg";
import drop from "../assets/dropdown.svg";
import phone from "../assets/phone.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import menuHome from "../assets/menu-home-1.jpg";
import { motion, AnimatePresence } from "framer-motion";
import HomeMenu from "./HomeMenu";
const MainNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="xl:fle text-[14px] font-medium h-[50.8px] max-xl:hidden">
      <div className="flex  max-xl:mx-6 max-xl:gap-2  justify-between w-full h-16 border border-t border-gray-300 sm:px-5 md:px-10 lg:px-10 xl:px-32 ">
        <div className="flex ">
          <div className="w-[306px] h-[50.8px] bg-custBlue relative  hover:bg-black cursor-pointer transition-all duration-500 ease-in-out">
            <RxHamburgerMenu className="h-7 w-7 absolute top-3 left-5 text-white" />
            <p className="absolute top-4 text-white font-roboto font-medium  left-16 ">
              All Catogories
            </p>
            <RiArrowDropDownLine className="h-6 w-6 absolute top-4 left-64 text-white" />
          </div>

          <div className="flex gap-0 text-custBlack text-center max-xl:justify-center py-4 font-roboto font-normal text-[14px] xl:w-[660px] ">
            <div className="relative">
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative px-1 hover:text-custBlue cursor-pointer">
                  <p className="w-16 text-custBlack font-medium">Home</p>
                  <img
                    src={drop}
                    className="h-4 absolute top-[3px] left-[56px]"
                    alt="dropdown icon"
                  />
                </div>

                <AnimatePresence>
  {isHovered && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="absolute top-[40px] left-0 w-[220px] h-[130px] shadow-lg bg-white z-50"
    >
      <HomeMenu />
    </motion.div>
  )}
</AnimatePresence>
              </div>
            </div>

            <div className="relative cursor-pointer hover:text-custBlue px-2">
              <p className="w-16 font-medium text-custBlack">Shop</p>
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
        <div className="flex items-center gap-4 w-[160px] xl:mr-10 h-[50.8px]">
          <img src={phone} className="h-6" alt="" />
          <div className="xl:flex flex-col justify-center hidden ">
            <h5 className="text-gray-500 text-[12px] font-roboto font-medium leading-[12px] ">
              Hotline:
            </h5>
            <p className="font-medium  xl:w-[160px] block leading-0 text-[14px]  ">
              +(402) 763 282 46
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
