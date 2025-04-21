import React from 'react';
// import { Facebook, Twitter, Linkedin, Timer as Vimeo, Mail, MapPin } from 'lucide-react';
import { RiVimeoFill } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import footerPay from "../assets/footer-pay.png";
import { TiMail } from "react-icons/ti";
import { LuMapPin } from "react-icons/lu";
import logo from "../assets/logo.svg"
const Footer = () => {
  return (
    <footer className="overflow-hidden bg-white py-16 px-4 md:pl-8 pl-10">
      <div className="max-w-7xl mx-auto">
        <div className='flex mt-10 '>
        <div className=" space-y-6  w-[440px]  mr-[120px]">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" />
            </div>
            <p className=" font-roboto text-[18px] text-textBlack">
              We are a team of designers and developers that create high-quality WordPress themes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600  bg-white hover:bg-custBlue hover:text-white  p-1">
                <RiFacebookLine size={20} />
              </a>
              <a href="#" className="text-gray-600  bg-white hover:bg-custBlue hover:text-white p-1">
                <IoLogoTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600  bg-white hover:bg-custBlue hover:text-white p-1">
                <BiLogoLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600  bg-white hover:bg-custBlue hover:text-white p-1">
                <RiVimeoFill size={18} className='mt-1' />
              </a>
            </div>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  pl-10 ">
          {/* Company Info */}
          

          {/* My Account */}
          <div className="">
            <h3 className="text-[20px] font-bold mb-3">My Account</h3>
            <ul className="space-y-2 text-[14px] font-roboto list-disc pl-4">
              <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Track Orders</a></li>
              <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Shipping</a></li>
              <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Wishlist</a></li>
              <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">My Account</a></li>
              <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Order History</a></li>
              <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Returns</a></li>
            </ul>
          </div>

         {/* Information */}
<div>
  <h3 className="text-[20px] font-bold mb-3">Information</h3>
  <ul className="space-y-2 text-[14px] font-roboto list-disc pl-4">
    <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Our Story</a></li>
    <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Careers</a></li>
    <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Privacy Policy</a></li>
    <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Terms & Conditions</a></li>
    <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Latest News</a></li>
    <li><a href="#" className="text-gray-800 leading-[26px] font-normal hover:text-gray-900">Contact Us</a></li>
  </ul>
</div>

{/* Talk To Us */}
<div>
  <h3 className="text-[20px] font-bold mb-3">Talk To Us</h3>
  <div className="space-y-2 text-[14px] font-roboto text-gray-800 leading-[26px]">
    <p>Got Questions? Call us</p>
    <p className="text-[22px] leading-[26px] hover:text-custBlue font-semibold cursor-pointer transition-all">+670 413 90 762</p>
    <div className="flex items-center space-x-2">
      <TiMail size={20} />
      <span>shofy@support.com</span>
    </div>
    <div className="flex items-start space-x-2">
      <LuMapPin size={20} className="mt-1 flex-shrink-0 " />
      <span className='text-[16px] leading-[20px]'>79 Sleepy Hollow St. Jamaica, New York 1432</span>
    </div>
  </div>
</div>

        </div>
        </div>
        

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-700 font-normal text-sm">
            © 2025 All Rights Reserved | Svelte Template by <span className='text-custBlue'>ThemePure.</span>
          </p>
          <div className="flex s">
          <img src={footerPay} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;