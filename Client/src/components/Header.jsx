import React, { useState, useEffect } from "react";
// import Headroom from 'react-headroom'
import { FaLocationDot } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/UserSlice";

export function HeaderTop() {
  return (
    <>
      <header className="hidden lg:flex justify-between px-11 bg-dark text-white ">
        <ul className="flex gap-8 py-2">
          <li className="flex items-center text-sm">
            <FaLocationDot className="text-yellow-400" />
            123 Street, New York, USA
          </li>
          <li className="flex items-center gap-2 text-sm">
            <GoClock className="text-yellow-400" />
            Mon - Fri : 09.00 AM - 09.00 PM
          </li>
        </ul>
        <div className="flex gap-6">
          <ul className="flex gap-4 py-2">
            <li className="flex gap-2 items-center">
              <FaPhone className="text-yellow-400" />
              <p className=" text-sm">+012 345 6789</p>
            </li>
          </ul>
          <ul className="flex gap-3">
            <li className="group pt-3">
              <FaFacebookF className="text-yellow-400 group-hover:text-yellow-600" />
            </li>
            <li className="group pt-3 pl-3 border-l border-yellow-400">
              <FaTwitter className="text-yellow-400 group-hover:text-yellow-600" />
            </li>
            <li className="group pt-3 px-3 border-x border-yellow-400 transition-all ease-linear">
              <FaLinkedinIn className="text-yellow-400 group-hover:text-yellow-600" />
            </li>
            <li className="group pt-3">
              <FaInstagram className="text-yellow-400 group-hover:text-yellow-600" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
export function Nav() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.user.value);
  console.log("userbi", userDetails);
  const [Hovered, setHovered] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
  function hoverPages() {
    setHovered((prev) => !prev);
  }
  function handleMenu() {
    setMenu((prev) => !prev);
    console.log("menu", menu);
  }

  useEffect(() => {
    // Show/hide the scroll-to-top button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLogout() {
    console.log("clicked...")
    dispatch(logoutUser())
    navigate("/")
  }

  
  return (
    <>
      {/* <Headroom> */}

      <header
        className={`  ${showNav && 'sticky z-50 top-0 '}
         transition-all ease-in duration-300 bg-white flex flex-col lg:flex lg:flex-row lg:justify-between pl-11 w-full `}
      >
        <div className="header sm:border-b md:border-b sm:flex md:flex lg:flex justify-between w-full">
          <ul className="border-r pr-14 lg:py-2 sm:py-4 md:py-4  ">
            <li className="lg:py-3 sm:py-4 md:py-4  flex items-center gap-3">
              <FaCar size={30} className="text-yellow-500" />
              <p className="font-bold text-3xl">Drivin</p>
            </li>
          </ul>
          <ul className="py-7 lg:hidden pr-10">
            <li className="lg:hidden border p-2" onClick={handleMenu}>
              {menu ? (
                <IoCloseSharp size={30} />
              ) : (
                <RxHamburgerMenu size={30} />
              )}
            </li>
          </ul>
        </div>

        <ul
          className={` ${
            menu === false
              ? "hidden"
              : "flex flex-col gap-8 font-semibold font-sans py-4 text-xl"
          } w-fit lg:flex lg:flex-row lg:gap-8 text-sm font-semibold `}
        >
          <li className="lg:py-7 uppercase">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="lg:py-7 uppercase">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="lg:py-7 uppercase">
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li
            onMouseEnter={hoverPages}
            onMouseLeave={hoverPages}
            className=" relative uppercase"
          >
            <NavLink className="flex gap-2 items-end lg:py-7" to="/pages">
              Pages
              <IoIosArrowDown />
            </NavLink>
            {Hovered && (
              <div
                className={`bg-white w-48 absolute -bottom-[10] z-10 py-2 transition-all duration-400 ease-in-out ${
                  Hovered ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link to="/features">
                  <p className="px-3 hover:bg-gray-200 hover:cursor-pointer  py-2">
                    Features
                  </p>
                </Link>
                <Link to="/appointment">
                  <p className="px-3 hover:bg-gray-200 hover:cursor-pointer  py-2">
                    Appointment
                  </p>
                </Link>
                <Link to="/ourteam">
                  <p className="px-3 hover:bg-gray-200 hover:cursor-pointer  py-2">
                    Our teams
                  </p>
                </Link>
                <Link to="/features">
                  <p className="px-3 hover:bg-gray-200 hover:cursor-pointer  py-2">
                    Testimonials
                  </p>
                </Link>
                <Link to="/features">
                  <p className="px-3 hover:bg-gray-200 hover:cursor-pointer  py-2">
                    404 page
                  </p>
                </Link>
              </div>
            )}
          </li>
          <li className="lg:py-7 uppercase">
            <NavLink to="/contacts">Contact</NavLink>
          </li>

          <li
            className={`hidden lg:flex text-white lg:py-5 bg-yellow-400 text-lg font-normal w-full text-center px-11`}
          >
            <Link className="flex items-center gap-5 w-full text-center">
              {userDetails ? (
                <span onClick={handleLogout}  className="w-full">
                  <img src={userDetails.image} alt="" />
                  <p style={{ whiteSpace: 'nowrap' }}>{`Logout ${userDetails.username}`}</p>
                </span>
              ) : (
                <>
                <Link to="/login" className="flex items-center gap-3  ">

                  <p>GetStarted</p>
                  <FaArrowRight />
                </Link>
                </>
              )}
            </Link>
          </li>
        </ul>
      </header>
      {/* </Headroom> */}
      <Outlet />
    </>
  );
}

export function Banner(props) {
  return (
    <div className="relative mb-32">
      <div className="myBanner relative z-1">
        <img
          className="h-[45.5vh] w-full object-cover"
          src="carousel-1.jpg"
          alt=""
        />
      </div>
      <div className="absolute text-center  top-[50%] -translate-y-[50%]  left-[50%] -translate-x-[50%] z-50">
        <h1 className="text-5xl font-bold text-white">{props.topic}</h1>
        <section className="flex gap-2 justify-center my-8">
          <p className="text-white">Home /</p>
          <p className="text-white">Pages /</p>
          <p className="text-yellow-400">{props.topic}</p>
        </section>
      </div>
    </div>
  );
}
