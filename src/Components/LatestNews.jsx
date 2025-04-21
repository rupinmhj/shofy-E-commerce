import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import { HiArrowLeftCircle, HiArrowRightCircle } from 'react-icons/hi2';
import { GoArrowRight } from "react-icons/go";
import blog1 from "../assets/blog-1.jpg"
import blog2 from "../assets/blog-2.jpg"
import blog3 from "../assets/blog-3.jpg"
import blog4 from "../assets/blog-2.jpg"
import { GoTag } from "react-icons/go";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const blogs = [
  {
    id: 1,
    title: "Top Tablets of 2025: What to Expect",
    source: "Tablet News",
    description: "Explore the latest innovations in tablet technology for 2025 and what brands are leading the race.",
    imageSrc: blog1,
    date:"18 February 2023",
  },
  {
    id: 2,
    title: "iPad Pro 2025 Leaks and Rumors",
    source: "Tablet News",
    description: "Get the inside scoop on what Apple might bring with the next-gen iPad Pro, including new features and design.",
    imageSrc: blog2, 
    date:"13 February 2023",
  },
  {
    id: 3,
    title: "Samsung Tab S9 vs iPad Air",
    source: "Tablet News",
    description: "A head-to-head comparison between Samsung's Tab S9 and Apple's iPad Air to help you decide the best pick.",
    imageSrc: blog3, 
    date:"27 February 2023",
  },
  {
    id: 4,
    title: "Best Budget Tablets Under $300",
    source: "Tablet News",
    description: "Looking for a solid tablet without breaking the bank? Here are the best budget tablets you can buy in 2025.",
    imageSrc: blog4, 
    date:"13 March 2023",
  },
];

const LatestNews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="overflow-hidden flex flex-col justify-center items-center w-[88%] mx-auto px-4 lg:my-10 max-mx-32">
      <div className="flex w-full justify-between p-10 relative  ">
        <p className="font-roboto text-[36px] font-bold text-textBlack text-center z-10 max-lg:text-[30px] ">Latest News And Articles</p>
        <svg
          width="140"
          height="40"
          viewBox="0 0 114 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-16 left-8 max-lg:top-6 max-lg:left-10 max-lg:size-24"
        >
          <path
            d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
            stroke="#FF296A"
            stroke-width="4"
            stroke-miterlimit="3.8637"
            stroke-linecap="round"
          ></path>
        </svg>
        <div className="text-center h-1 xl:w-[600px] bg-white mt-4 "></div>
        {/* <div className="flex gap-2">
          <div ref={prevRef} className="cursor-pointer"><HiArrowLeftCircle size={60} /></div>
          <div ref={nextRef} className="cursor-pointer"><HiArrowRightCircle size={60} /></div>
        </div> */}
      </div>

      <Swiper
        className="w-full  "
        modules={[Navigation, Pagination,Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // auto-scroll every 3s
        // pagination={{ clickable: true }}
        // navigation={{
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current,
        // }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="flex flex-col  justify-between   transition-all hover:shadow-lg hover:border-gray-600 px-9 py-4 rounded-lg bg-white h-full relative">
              <span className='absolute top-4 left-10 z-10 bg-custBlack text-white px-5 py-2 font-bold text-[14px]  '>{blog.date}</span>


              <img
                src={blog.imageSrc}
                alt={blog.title}
                className="w-full h-68 object-cover rounded-lg mb-4 "
              />
              <h3 className="mt-1 text-[18px] font-roboto font-bold text-black hover:text-custBlue cursor-pointer">{blog.title}</h3>   
              <div className="flex gap-2 py-2 mb-0">
              <GoTag className='text-custBlue size-3 mt-1'/>
              <p className="text-[14px] text-gray-600 font-roboto font-medium hover:text-custBlue cursor-pointer">{blog.source}</p>
              </div>
              
              <p className="mt-2 text-gray-700 text-[14px] font-roboto  cursor-text">{blog.description}</p>
              <div className='flex items-center justify-center border group border-gray-400 mt-6 rounded-lg p-2 w-32 h-10 hover:bg-custBlue hover:border-blue-600 transition-all hover:text-white font-medium  cursor-pointer'>
                <span className='text-[13px] font-medium font-roboto  '>Read more</span>
                <span>
                <GoArrowRight className='pl-2 size-8 font-mono group-hover:translate-x-2 transform translate-x-0 transition-all'/>
                </span>
                

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestNews;
