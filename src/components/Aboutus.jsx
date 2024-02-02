import React from "react";
import { FaCheck } from "react-icons/fa";
import { Banner } from "./Header";
import Agents from "./Agents";
import Footer from "./Footer";




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
  return (
    <div className="px-32 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:self-end lg:gap-10 mb-24">
      <div className="relative self-end w-full">
        <img className="lg:h-full w-full" src="about-1.jpg" alt="" />
        <img
          className=" border-white border-solid  border-8 absolute -top-10 -left-20 h-[25vh]"
          src="about-2.jpg"
          alt="oops"
        />
      </div>
      <div className="mt-10 lg:mt-0 h-full  lg:flex lg:flex-col lg:gap-4">
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
        <div className="flex gap-28">
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
  return (
    <div className="px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 my-24">
      <div className="flex flex-col gap-3">
        <h3 className="text-yellow-400 uppercase text-l font-bold">WHY CHOOSE US!</h3>
        <h1 className="font-bold mb-4 text-4xl">
        Best Driving Training <br /> Agency In Your City        </h1>
      
        <p className="text-md mb-5 text-gray-500">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <ul className="grid grid-cols-2 gap-3">
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
      <div className="relative">
        <img className="h-[75vh] w-[95vw]" src="about-1.jpg" alt="" />
        <img
          className=" border-white border-solid  border-8 absolute -top-10 right-0 h-[25vh]"
          src="about-2.jpg"
          alt="oops"
        />
      </div>
    </div>
  );
};
