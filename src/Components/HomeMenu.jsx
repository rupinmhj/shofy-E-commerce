import React from 'react'
import menuHome1 from "../assets/menu-home-1.jpg"
import menuHome2 from "../assets/menu-home-2.jpg"
import menuHome3 from "../assets/menu-home-3.jpg"
import menuHome4 from "../assets/menu-home-4.jpg"
const HomeMenu = () => {
  return (
    <div className='overflow-hidden flex w-[1220px] h-[380px] px-2 gap-2 bg-white absolute left-[-310px] top-[-6px]'> 
    
    <div className="flex-col justify-center items-center w-80 mt-4 border-black">
         <img className="mb-4" src={menuHome1}  alt="" />
         <span className='text-[18px] mt-[20px] hover:text-custBlue'>Electronics</span>
       </div>
       <div className="flex-col justify-center items-center  w-80 mt-4 border-black">
         <img className="mb-4" src={menuHome2}  alt="" />
         <span className='text-[18px] mt-[20px] hover:text-custBlue'>Fashion</span>
       </div>
       <div className="flex-col justify-center items-center  w-80 mt-4 border-black">
         <img className="mb-4" src={menuHome3}  alt="" />
         <span className='text-[18px] mt-[20px] hover:text-custBlue'>Beauty</span>
       </div>
       <div className="flex-col justify-center items-center  w-80 mt-4 border-black">
         <img className="mb-4" src={menuHome4}  alt="" />
         <span className='text-[18px] mt-[20px] hover:text-custBlue'>Electronics</span>
       </div>
   
       
    </div>
  )
}

export default HomeMenu
