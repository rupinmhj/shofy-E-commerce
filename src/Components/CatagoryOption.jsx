import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const CatagoryOption = ({ onClick }) => {
  const categories = [
    "Men's Clothing",
    "Jewelery",
    "Electronics",
    "Women's Clothing",
  ];

  return (
    <div className="font-roboto bg-white shadow-md p-4">
      {categories.map((cat) => (
        <div
          key={cat}
          className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 cursor-pointer border-b-2"
          onClick={onClick}
        >
          <span>{cat}</span>
          <MdKeyboardArrowRight />
        </div>
      ))}
    </div>
  );
};

export default CatagoryOption;
