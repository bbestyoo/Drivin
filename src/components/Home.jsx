import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Aboutus } from "./Aboutus";
import { Appointments, Courses } from "./Courses";
import Agents from "./Agents";

export const Home = () => {
  return (
    <div>
      <div className="relative">
        <Swiper
          className="mb-40"
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
          onSlideChange={() => console.log("slide change")}
          slideToClickedSlide={true}
        >
          <SwiperSlide>
            <div className=" relative  before:absolute  before:block  before:h-full before:w-full  before:bg-black before:inset-0 before:opacity-70">
              <img className=" " src="carousel-1.jpg" alt="oops" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" relative  before:absolute  before:block  before:h-full before:w-full  before:bg-black before:inset-0 before:opacity-70">
              <img src="carousel-2.jpg" alt="oops" />x
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex mx-20 absolute bottom-1 translate-y-[50%] z-10">
          <div className="flex gap-3 p-5 shadow-xl bg-white  ">
            <span>Logo</span>
            <div>
              <span>highlights</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                doloribus!
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-5 shadow-xl bg-white ">
            <span>Logo</span>
            <div>
              <span>highlights</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                doloribus!
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-5 shadow-xl bg-white  ">
            <span>Logo</span>
            <div>
              <span>highlights</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                doloribus!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Aboutus />
      <div className="relative h-ful">
        <div className=" relative bg-bgimage before:absolute  before:block  before:h-full before:w-full  before:bg-white before:inset-0 before:opacity-90"></div>
        <div className="absolute top-24">
          <Courses />

          <Appointments />
          <div className=" mt-52 mx-8 mb-28">
            <Agents />
          </div>
        </div>
      </div>
    </div>
  );
};
