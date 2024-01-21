import React from "react";
import { FaCheck } from "react-icons/fa";

export const Aboutus = () => {
  return (
    <div className="px-32 flex items-end gap-10 mb-24">
      <div className="relative">
        <img className="h-[70vh] w-[80vw]" src="about-1.jpg" alt="" />
        <img
          className=" border-white border-solid  border-8 absolute -top-10 -left-20 h-[25vh]"
          src="about-2.jpg"
          alt="oops"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-yellow-400 uppercase text-l font-bold">About us</h3>
        <h1 className="font-bold text-4xl">We Help Students To Pass Test & Get A License On The First Try</h1>
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
          <li className="flex items-center gap-3" ><FaCheck className="text-yellow-400"/>Fully Licensed</li>
          <li className="flex items-center gap-3" ><FaCheck className="text-yellow-400"/>Online Tracking</li>
          <li className="flex items-center gap-3" ><FaCheck className="text-yellow-400"/>Afordable Fee</li>
          <li className="flex items-center gap-3" ><FaCheck className="text-yellow-400"/>Best Trainers</li>
        </ul>
        <div className="flex gap-28">

        <button className="text-white bg-yellow-400 px-9 py-4 hover:bg-yellow-300">Read more</button>
        <button className="border-yellow-400 border-2 px-9 py-4 text-yellow-400 hover:text-white hover:bg-yellow-400 transition-all duration-400 ease-in">
          Logo
          <span> 98897987</span>
        </button>
        </div>
      </div>
    </div>
  );
};
