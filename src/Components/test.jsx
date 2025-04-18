import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function GridAndSwiperExample() {
  // Sample data for our cards
  const items = [
    { id: 1, title: 'Card 1', color: 'bg-blue-500' },
    { id: 2, title: 'Card 2', color: 'bg-green-500' },
    { id: 3, title: 'Card 3', color: 'bg-yellow-500' },
    { id: 4, title: 'Card 4', color: 'bg-red-500' },
    { id: 5, title: 'Card 5', color: 'bg-purple-500' },
    { id: 6, title: 'Card 6', color: 'bg-pink-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Grid vs Swiper Example</h1>
      
      {/* Grid Layout Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">CSS Grid Layout</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(item => (
            <div 
              key={item.id} 
              className={`${item.color} rounded-lg p-6 text-white shadow-md`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>This is a grid card item that adjusts based on screen size.</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Swiper Layout Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Swiper Slider Layout</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            }
          }}
          className="mySwiper"
        >
          {items.map(item => (
            <SwiperSlide key={item.id}>
              <div 
                className={`${item.color} rounded-lg p-6 text-white shadow-md h-40`}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>This is a swiper slide item that you can swipe through.</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default GridAndSwiperExample;