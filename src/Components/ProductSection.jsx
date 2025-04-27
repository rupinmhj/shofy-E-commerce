import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import lineBelow from "../assets/lineBelow.svg";

export default function ProductFilter({ click }) {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewProduct, setPreviewProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setItems(res.data);
        setAllItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterItems = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setItems(allItems);
    } else {
      const filtered = allItems.filter((item) => item.category === category);
      setItems(filtered);
    }
  };

  const handleClickCart = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handlePreview = (product) => {
    setPreviewProduct(product);
    setSelectedImage(product.image);
  };

  const closePreview = () => {
    setPreviewProduct(null);
  };

  return (
    <div
      className="lg:mx-28 p-4 font-roboto lg:mt-6"
      onClick={() => setPreviewProduct(null)}
    >
      <h1 className="text-2xl font-bold mb-6 lg:text-[36px] text-custBlack relative z-10">
        All Products
      </h1>
      <img
        src={lineBelow}
        className="absolute top-[244px] left-28 lg:h-10 hidden 2xl:block"
        alt=""
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {["all", "men's clothing", "jewelery", "electronics", "women's clothing"].map((cat) => (
          <button
            key={cat}
            onClick={() => filterItems(cat)}
            className={`px-4 py-2 rounded text-white ${
              selectedCategory === cat
                ? "bg-custBlack"
                : "bg-custBlue hover:bg-blue-300"
            }`}
          >
            {cat === "all" ? "All Products" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((product) => (
          <div
            key={product.id}
            className="group border border-gray-200 flex flex-col justify-start transition-all hover:shadow-lg hover:border-gray-300"
          >
            <div className="relative">
              <img
                src={product.image}
                className="aspect-square w-[80%] flex mx-auto my-4 rounded-lg object-cover transition-transform duration-200 transform group-hover:scale-105 hover:opacity-75"
                alt={product.title}
              />
              <div className="absolute translate-x-0 group-hover:translate-x-[-20px] flex-col inset-0 bg-white bg-opacity-30 flex items-end pr-4 justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={handleClickCart}
                  className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FiShoppingCart size={18} />
                </button>
                <button
                  onClick={() => handlePreview(product)}
                  className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FiEye size={18} />
                </button>
                <button className="bg-white text-gray-800 p-2 rounded-sm shadow hover:bg-blue-600 hover:text-white transition-all">
                  <FiHeart size={18} />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pl-6 pb-5">
              <h3 className="mt-4 text-[0.75rem] hover:text-blue-600 cursor-pointer leading-[1.625rem] font-bold text-left text-gray-500">
                {product.category}
              </h3>
              <h3 className="text-[0.938rem] leading-[1.25rem] font-bold text-left text-black hover:text-blue-600 cursor-pointer">
                {product.title.substring(0, 40)}...
              </h3>

              {/* Star Ratings */}
              <div className="flex my-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 fill-current ${
                      i < Math.round(product.rating.rate)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.78a1 1 0 00.95.69h3.982c.969 0 1.371 1.24.588 1.81l-3.221 2.34a1 1 0 00-.364 1.118l1.234 3.78c.3.921-.755 1.688-1.54 1.118l-3.221-2.34a1 1 0 00-1.176 0l-3.221 2.34c-.784.57-1.838-.197-1.54-1.118l1.234-3.78a1 1 0 00-.364-1.118L2.075 9.207c-.783-.57-.38-1.81.588-1.81h3.982a1 1 0 00.95-.69l1.234-3.78z" />
                  </svg>
                ))}
              </div>
              <p className="text-[0.938rem] leading-[1.25rem] font-bold text-left text-blue-600 cursor-pointer">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Preview Modal */}
      {previewProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 flex items-center justify-center font-roboto">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-6xl h-[65%] flex flex-col md:flex-row relative overflow-y-auto">
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 text-2xl text-red-600 font-bold"
            >
              X
            </button>

            <div className="flex flex-col gap-4 items-start w-[100px]">
              <img
                src={previewProduct.image}
                className="w-32 h-32 border hover:opacity-75 cursor-pointer mb-1"
                alt="product"
                onClick={() => setSelectedImage(previewProduct.image)}
              />
            </div>

            <div className="flex-1 mt-6 md:mt-0 md:ml-6 border">
              <img
                src={selectedImage}
                className="w-full h-[400px] object-contain"
                alt="selected product"
              />
            </div>

            <div className="flex-1 mt-4 md:mt-0 md:ml-6">
              <h2 className="text-[16px] font-medium text-gray-600 mb-2 text-start">
                {previewProduct.category}
              </h2>
              <h2 className="text-[32px] font-normal mb-2 text-start">
                {previewProduct.title}
              </h2>

              <div className="flex my-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 fill-current ${
                      i < Math.round(previewProduct.rating.rate)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.78a1 1 0 00.95.69h3.982c.969 0 1.371 1.24.588 1.81l-3.221 2.34a1 1 0 00-.364 1.118l1.234 3.78c.3.921-.755 1.688-1.54 1.118l-3.221-2.34a1 1 0 00-1.176 0l-3.221 2.34c-.784.57-1.838-.197-1.54-1.118l1.234-3.78a1 1 0 00-.364-1.118L2.075 9.207c-.783-.57-.38-1.81.588-1.81h3.982a1 1 0 00.95-.69l1.234-3.78z" />
                  </svg>
                ))}
              </div>

              <p className="text-blue-600 font-bold text-xl mt-4">
                ${previewProduct.price}
              </p>

              <p className="mt-4 text-gray-700">{previewProduct.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
