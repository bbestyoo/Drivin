import { useState } from "react";
import pp1 from "../../public/pp1.jpg";
import pp2 from "../../public/pp2.jpg";
import pp3 from "../../public/pp3.jpg";
import pp4 from "../../public/pp4.jpg";
import "../App.css";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Agents() {
  return (
    <div>
      <section className=" container  px-8 flex gap-4 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default Agents;

export const Card = () => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);
  return (
    <div id="">
      <div
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        id="myCard"
        className={`myCard p-4 relative `}
      >
        <div className="myImg relative z-40" id="">
          <img id="" alt="pp" src={pp1} className="  h-80 w-64  object-cover" />
        </div>
        <div
          className={`  absolute  top-4 opacity-0 transition-all duration-500 ease-in-out   ${
            isActive ? " opacity-100 top-44 " : ""
          }   left-14 items-center  z-40  flex  justify-center gap-8`}
        >
          <span className=" border-2 border-[#f3bd00]  group  hover:bg-[#f3bd00]  p-2">
            <FaFacebookF className=" text-xl text-[#f3bd00] group-hover:text-white " />
          </span>
          <span className=" border-2 border-[#f3bd00]  group  hover:bg-[#f3bd00]  p-2">
            <FaTwitter className=" text-xl text-[#f3bd00] group-hover:text-white  " />
          </span>
          <span className=" border-2 border-[#f3bd00]  group   hover:bg-[#f3bd00]  p-2">
            <FaInstagram className=" text-xl text-[#f3bd00] group-hover:text-white " />
          </span>
        </div>
        <div className=" py-5 bg-[#F3F6F8] flex items-center flex-col gap-2">
          <h1 className=" text-xl font-semibold">Full Name</h1>
          <span className=" text-base ">Trainer</span>
        </div>
      </div>
    </div>
  );
};
