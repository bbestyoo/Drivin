import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Banner } from "./Header";
import Agents from "./Agents";
import Footer from "./Footer";

import Aos from 'aos'
import 'aos/dist/aos.css'




export function About (){
 

  return (
    <>
    <Banner topic={"About Us"}/>
    <Aboutus/>
    <div className="my-32">

    <Agents/>
    </div>
    <Footer/>
    </>
  )
}

export const Aboutus = () => {
  
  useEffect(()=>{
    Aos.init({once: true});
  },[])

  return (
    <div  className="px-10 sm:px-20 md:px-24 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 mb-24">
      <div data-aos = 'slide-up' data-aos-offset="400" data-aos-duration="800" className="aboutUsDiv relative pt-10 pl-10 ">
        <img className="h-full left-5 w-full" src="about-1.jpg" alt="" />
        <img
          className="aboutUsPic "
          src="about-2.jpg"
          alt="oops"
        />
      </div>
      <div data-aos = 'slide-up' data-aos-offset="500" data-aos-duration="1500" className="flex flex-col lg:gap-4">
        <h3 className="text-yellow-400 uppercase text-l font-bold">About us</h3>
        <h1 className="font-bold text-4xl">
          We Help Students To Pass Test & Get A License On The First Try
        </h1>
        <p className="text-md text-gray-500">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <p className="text-md text-gray-500">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <ul className="grid grid-cols-2 gap-3 my-4">
          <li className="flex items-center gap-3">
            <FaCheck className="text-yellow-400" />
            Fully Licensed
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="text-yellow-400" />
            Online Tracking
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="text-yellow-400" />
            Afordable Fee
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="text-yellow-400" />
            Best Trainers
          </li>
        </ul>
        <div className="flex flex-col gap-7 sm:flex-row sm:gap-28">
          <button className="text-white bg-yellow-400 px-9 py-4 hover:bg-yellow-300">
            Read more
          </button>
          <button className="border-yellow-400 border-2 px-9 py-4 text-yellow-400 hover:text-white hover:bg-yellow-400 transition-all duration-400 ease-in">
            Logo
            <span> 98897987</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export const Features = () => {
  useEffect(()=>{
    Aos.init({once: false});
  },[])
  return (
    <div  className="px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 my-24">
      <div data-aos = 'slide-up' data-aos-offset="400" data-aos-duration="900" className="flex flex-col gap-3">
        <h3 className="text-yellow-400 uppercase text-l font-bold">WHY CHOOSE US!</h3>
        <h1 className="font-bold mb-4 text-4xl">
        Best Driving Training <br /> Agency In Your City        </h1>
      
        <p className="text-md mb-5 text-gray-500">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li className="mb-5">
            <span className="flex items-center gap-3 mb-5">

            <FaCheck size={35} className="text-white p-2 bg-yellow-400" />
            <p className="font-semibold text-xl">

            Fully Licensed
            </p>
            </span>
            <span className="text-gray-500 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime!</span>
          </li>
          <li className="mb-5">
            <span className="flex items-center gap-3 mb-4">

            <FaCheck size={35} className="text-white p-2 bg-yellow-400" />
            <p className="font-semibold text-xl">

            Online Tracking         
            </p>
               </span>
            <span className="text-gray-500 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime!</span>
          </li>
          <li className="">
            <span className="flex items-center gap-3 mb-4">

            <FaCheck size={35} className="text-white p-2 bg-yellow-400" />
            <p className="font-semibold text-xl">

            Afordable Fee
            </p>
            </span>
            <span className="text-gray-500 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime!</span>
          </li>
          <li className="">
            <span className="flex items-center gap-3 mb-4">

            <FaCheck size={35} className="text-white p-2 bg-yellow-400" />
            <p className="font-semibold text-xl">

            Best Trainers
            </p>
            </span>
            <span className="text-gray-500 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime!</span>
          </li>
        
        </ul>
      
      </div>
      <div data-aos = 'slide-up' data-aos-duration="1500" data-aos-offset="450" className="relative self-end">
        <img className="h-[78vh] w-[95vw]" src="about-1.jpg" alt="" />
        <img
          className=" border-white border-solid  border-8 absolute -top-10 right-0 h-[25vh]"
          src="about-2.jpg"
          alt="oops"
        />
      </div>
    </div>
  );
};
