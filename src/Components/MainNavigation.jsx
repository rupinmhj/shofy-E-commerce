import { React, useState } from "react";
import drop from "../assets/dropdown.svg";
import phone from "../assets/phone.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import HomeMenu from "./HomeMenu";
import CatagoryOption from "./CatagoryOption";

const MainNavigation = ({ onCategorySelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const toggleCategory = () => {
    setShowCategory((prev) => !prev);
  };

  const handleCategoryClick = (e) => {
    const updatedCategory=!showCategory;
    
    console.log("Updated:"+updatedCategory);
    onCategorySelect({updatedCategory});
    
  };

  return (
    <div className="xl:fle text-[14px] font-medium h-[50.8px] max-xl:hidden">
      <div className="flex justify-between w-full h-16 border border-t border-gray-300 sm:px-5 md:px-10 lg:px-10 xl:px-32">
        <div className="flex">
          {/* Category Button */}
          <div
            onClick={toggleCategory}
            className="w-[306px] h-[50.8px] bg-custBlue relative hover:bg-black cursor-pointer transition-all duration-500 ease-in-out"
          >
            <RxHamburgerMenu className="h-7 w-7 absolute top-3 left-5 text-white" />
            <p className="absolute top-4 text-white font-roboto font-medium left-16">
              All Categories
            </p>
            <RiArrowDropDownLine className="h-6 w-6 absolute top-4 left-64 text-white" />

            {/* Show dropdown on click */}
            {showCategory && (
              <div className="absolute z-50 w-full top-[50px]">
                <CatagoryOption onClick={handleCategoryClick} onOptionClick={onCategorySelect} />
              </div>
            )}
          </div>

          {/* Nav Menu Items */}
          <div className="flex gap-0 text-custBlack text-center max-xl:justify-center py-4 font-roboto font-normal text-[14px] xl:w-[660px]">
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

                {/* Dropdown HomeMenu */}
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

            {/* Other menu items */}
            {["Shop", "Products", "Coupons", "Blog", "Contacts"].map((item, idx) => (
              <div
                key={item}
                className="relative cursor-pointer hover:text-custBlue px-2"
              >
                <p className="w-16 font-medium text-custBlack">{item}</p>
                {(item !== "Coupons" && item !== "Contacts") && (
                  <img
                    src={drop}
                    className={`h-4 absolute top-[3px] ${
                      item === "Products" ? "left-16" : "left-14"
                    }`}
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hotline section */}
        <div className="flex items-center gap-4 w-[160px] xl:mr-10 h-[50.8px]">
          <img src={phone} className="h-6" alt="phone" />
          <div className="xl:flex flex-col justify-center hidden">
            <h5 className="text-gray-500 text-[12px] font-roboto font-medium leading-[12px]">
              Hotline:
            </h5>
            <p className="font-medium xl:w-[160px] block leading-0 text-[14px]">
              +(402) 763 282 46
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
