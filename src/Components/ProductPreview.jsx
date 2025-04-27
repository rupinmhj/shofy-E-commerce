import { useState } from "react";
import question from "../assets/question.svg"
import wishlist from "../assets/wishList.svg"
import compare from "../assets/compare.svg"
const ProductPreview = ({ product, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(product.imageSrc);
    const [quantity, setQuantity] = useState(1);
    const [showMessage,setShowMessage]=useState(false)
   
    const handleClickCart=()=>{
        setShowMessage(true);
        setTimeout(()=>{
            setShowMessage(false);
        },2000)
    }
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 flex items-center justify-center  font-roboto ">
        <div className="bg-white rounded-lg p-6 w-[80%] h-[65%] flex flex-col md:flex-row py-10 ">
          <div className=" flex flex-col justify-start gap-4 items-start  w-[100px] ">
            <img
              src={product.imageSrc}
              className={`w-32 h-32 border hover:opacity-75 cursor-pointer mb-1 ${selectedImage === product.imageSrc ? "border-black" : ""}`}
              alt="product"
              onClick={() => setSelectedImage(product.imageSrc)}
            />
            <img
              src={product.imageSrc2}
              className={`w-32 h-32 border hover:opacity-75 cursor-pointer mb-1 ${selectedImage === product.imageSrc2 ? "border-black" : ""}`}
              alt="product"
              onClick={() => setSelectedImage(product.imageSrc2)}
            />
            <img
              src={product.imageSrc3}
              className={`w-32 h-32 border hover:opacity-75 cursor-pointer mb-1 ${selectedImage === product.imageSrc3 ? "border-black" : ""}`}
              alt="product"
              onClick={() => setSelectedImage(product.imageSrc3)}
            />
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-6 border">
            <img src={selectedImage} className="w-full h-[400px] object-contain" alt="selected product" />
          </div>
          <div className="flex-1 justify-start mt-4 md:mt-0 md:ml-6 font-roboto relative">
          <button onClick={onClose} className="mt-6 block absolute top-[-40px] right-0 text-red-600 font-bold">
              X
            </button>
            <h2 className="text-[16px] font-medium text-gray-600 mb-2 text-start">{product.product_catagory}</h2>
            <h2 className="text-[32px] font-normal mb-2 text-start">{product.name}</h2>
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
            <p className="text-gray-600 mb-4 text-start">{product.description}</p>
            <p className="text-custBlue text-lg font-semibold mb-4 text-start">{product.price}</p>
  
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-sm">Quantity:</span>
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-3 py-1 bg-gray-200 text-black rounded"
              >
                -
              </button>
              <span className="font-semibold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-200 text-black rounded"
              >
                +
              </button>
            </div>
  
            <button className="bg-custBlue text-white py-2 px-6 rounded shadow hover:bg-blue-700 transition-all flex text-start " onClick={handleClickCart}>
              Add to Cart
            </button>

            <div className="flex gap-8 mt-6">
                <span className="flex items-center gap-1 hover:text-custBlue cursor-pointer">

                <img src={compare} alt=""  />
                Compare
                </span>
                <span className="flex items-center gap-1 hover:text-custBlue cursor-pointer">
                <img src={wishlist} alt="" />
                Wishlist
                </span>
                <span className="flex items-center gap-1 hover:text-custBlue cursor-pointer">

                <img src={question} alt="" />
                Ask a quesiton
                </span>
            </div>
  
           
          </div>
          {showMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Item added to cart!
        </div>
      )}
          
        </div>
      </div>
    );
  };

  export default ProductPreview;