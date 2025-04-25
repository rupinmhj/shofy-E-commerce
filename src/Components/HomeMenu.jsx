import React from 'react'
import menuHome1 from "../assets/menu-home-1.jpg"
import menuHome2 from "../assets/menu-home-2.jpg"
import menuHome3 from "../assets/menu-home-3.jpg"
import menuHome4 from "../assets/menu-home-4.jpg"
const HomeMenu = () => {
  return (
    <div className='overflow-hidden flex w-[1220px] h-[380px] px-2 gap-2 bg-white absolute left-[-310px] top-[-6px]'> 
    
    <div className="flex-col flex justify-center items-center w-80 mt-[-40px] bg-white/80 ">
         <img className="mb-4 hover:opacity-50 cursor-pointer" src={menuHome1}  alt="" />
         <span className='text-[18px] mt-[0px] hover:text-custBlue  cursor-pointer'>Electronics</span>
       </div>
       <div className="flex-col justify-center items-center  w-80 mt-4 ">
         <img className="mb-4 hover:opacity-50 cursor-pointer" src={menuHome2}  alt="" />
         <span className='text-[18px] mt-[20px] hover:text-custBlue  cursor-pointer'>Fashion</span>
       </div>
       <div className="flex-col justify-center items-center  w-80 mt-4 ">
         <img className="mb-4 hover:opacity-50 cursor-pointer" src={menuHome3}  alt="" />
         <span className='text-[18px] mt-[20px] hover:text-custBlue cursor-pointer'>Beauty</span>
       </div>
       <div className="flex-col justify-center items-center  w-80 mt-4 ">
         <img className="mb-4 hover:opacity-50 cursor-pointer" src={menuHome4}  alt="" />
         <span className='text-[18px] mt-[20px] hover:text-custBlue cursor-pointer'>Electronics</span>
       </div>
   
       
    </div>
  )
}

export default HomeMenu
