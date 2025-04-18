import React from "react"
import instagram1 from "../assets/instagram-1.jpg"
import instagram2 from "../assets/instagram-2.jpg"
import instagram3 from "../assets/instagram-3.jpg"
import instagram4 from "../assets/instagram-4.jpg"
import instagram5 from "../assets/instagram-5.jpg"
import { IoLogoInstagram } from "react-icons/io";
const Instragram= ()=>{
    return(
      <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-8 max-lg:mx-16 lg:mx-32 mb-8 my-4">
      {[instagram1, instagram2, instagram3, instagram4, instagram5].map((img, i) => (
        <div key={i} className="relative group rounded-lg overflow-hidden cursor-pointer h-64">
          <img
            src={img}
            className="w-full h-full object-cover rounded-lg transition-all duration-150 "
            alt={`Instagram ${i + 1}`}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <IoLogoInstagram
            className="text-white size-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-500 
                       box-content p-1 border rounded-lg border-gray-200"
          />
        </div>
      ))}
    </div>
    
      

    )

    
}
export default Instragram;