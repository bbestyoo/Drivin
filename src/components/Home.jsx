
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import { Aboutus } from './Aboutus';


export const Home = () => {
  return (
    <div >
      <div className='relative'>

      
    
    <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50} 
      slidesPerView={1}
      navigation
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }} 
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      slideToClickedSlide={true} 
    >
      <SwiperSlide>
      <img className="image-with-shadow" src="carousel-1.jpg" alt="oops" />
      </SwiperSlide>

      <SwiperSlide>
      <img className="image-with-shadow"  src="carousel-2.jpg" alt="oops" />
      </SwiperSlide>
      
      
  </Swiper>

  <div className='flex mx-20 absolute bottom-1 translate-y-[50%] z-10 mb-20'>
    <div className='flex gap-3 p-5 shadow-lg  '>
      <span>Logo</span>
      <div>
        <span>highlights</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloribus!</p>
      </div>
    </div>
    <div className='flex gap-3 p-5 shadow-lg  '>
      <span>Logo</span>
      <div>
        <span>highlights</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloribus!</p>
      </div>
    </div>
    <div className='flex gap-3 p-5 shadow-lg  '>
      <span>Logo</span>
      <div>
        <span>highlights</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloribus!</p>
      </div>
    </div>
  </div>
  </div>

  <Aboutus/>
  </div>


  )
}
