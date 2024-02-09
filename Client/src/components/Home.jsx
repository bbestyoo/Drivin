import React, { useEffect, useRef } from 'react';

import { Aboutus, Features } from "./Aboutus";
import { Appointments, Courses } from "./Courses";
import Agents from "./Agents";
import Footer from "./Footer";
import { Parallax } from "react-parallax";
import Testimonials from "./Testimonials";
import { PiNoteDuotone } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { FaCar } from "react-icons/fa";

import car0 from "/carousel-1.jpg";
import car1 from "/carousel-2.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'


const mock_data = [
  {
    id: 1,
    image: car0,
    text0: "Learn To Drive",
    text1: " With Confidence"
  },
  {
    id: 2,
    image: car1,
    text0: "Safe Driving Is ",
    text1: " Our Top Priority"
 
  },
]
export function Slides ({user}){

  return (
    <>
    <div className="relative">
      <div className=' relative  before:absolute before:block  before:h-full before:w-full  before:bg-black before:inset-0 before:opacity-70'>
        <img className='h-full w-full' src={user.image} alt="" />
      </div>
      <div className='text-center absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]'>
        <div className='text-white mb-10 mySlider'>

        <h1>{user.text0}</h1>
        <h1>{user.text1}</h1>
        </div>
        <div className='flex flex-col sm:flex-row gap-5 justify-center'>

        <button className='bg-yellow-400 sm:px-5 py-1 md:px-12 md:py-4 text-white'>Learn More</button>
        <button className='bg-white sm:px-5 py-1 md:px-12 md:py-4 text-black'>Our Courses</button>
        </div>
      </div>



    </div>
    </>
  )
}

export function Home() {

  useEffect(()=>{
    Aos.init({once: true});
  },[])


  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    isFinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 300,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="overflow-hidden">
      <div className="relative mb-40">
        <div className="relative">
          <Slider className='sliderHome' {...settings} ref={sliderRef}>
            {mock_data.map((slide, index) => (
              <>
              <div key={index}>
                <Slides user={slide} />
              </div>
              </>
              
            ))}
          </Slider>
        
          <div className="carousel-buttons">
            <div onClick={handlePrevSlide} className='px-4 group absolute top-0 left-20  h-[100%]  flex items-center'>

            <button className='text-5xl  opacity-50 group-hover:opacity-100 bg-yellow-400 p-1 text-white px-3' >{'<'}</button>
            </div>
            <div onClick={handleNextSlide} className='px-4 group absolute top-0 right-20  h-[100%]  flex items-center'>

            <button className='text-5xl  opacity-50 group-hover:opacity-100 bg-yellow-400 p-1 text-white px-3' >{'>'}</button>
            </div>
           
          </div>
  
      </div>
        <div  className="flex mx-5 sm:mx-20 flex-col my-20 lg:flex-row lg:absolute lg:-bottom-20 lg:translate-y-[50%] lg:z-10">
          <div data-aos = 'fade-in' data-aos-offset="900" data-aos-duration="800" className="flex gap-6 items-start p-5 py-10 shadow-xl bg-white  ">
            <span className='bg-yellow-400 p-2  text-white'><FaCar size={25}/></span>
            <div>
              <span className='text-xl font-semibold'>Easy Driving Learn</span>
              <p className='text-gray-400 mt-2'>
              Clita erat ipsum lorem sit sed stet duo justo erat amet

              </p>
            </div>
          </div>
          <div data-aos = 'fade-in' data-aos-offset="1000" data-aos-duration="1000" className="flex gap-6 items-start p-5 py-10 shadow-xl bg-white ">
            <span className='bg-yellow-400 p-2 text-white'><IoIosPeople size={25}/></span>
            <div>
              <span className='text-xl font-semibold'>National Instructor</span>
              <p className='text-gray-400 mt-2'>
              Clita erat ipsum lorem sit sed stet duo justo erat amet

              </p>
            </div>
          </div>
          <div data-aos = 'fade-in' data-aos-offset="1100" data-aos-duration="1100" className="flex gap-6 items-start p-5 py-10 shadow-xl bg-white  ">
            <span className='bg-yellow-400 p-1 text-white'><PiNoteDuotone size={25}/></span>
            <div>
              <span className='text-xl font-semibold'>Get licence</span>
              <p className='text-gray-400 mt-2'>
              Clita erat ipsum lorem sit sed stet duo justo erat amet

              </p>
            </div>
          </div>
        </div>
      </div>
      <Aboutus />
      <Parallax
        blur={5}
        bgImage="carousel-1.jpg"
        bgImageStyle={{
          width: "100%",
          height: "100%",
          opacity: "0.3",
          objectFit: "cover",
        }}
        bgImageAlt="the cat"
        bgImageSize="cover"
        strength={900}
      >
        <Courses />
        <Appointments />
      </Parallax>
      <Features />
      <div className=" mt-52 mx-8 mb-28">
        <Agents />
      </div>
      <div className="mt-24 mb-52">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
