
import React, { useState } from 'react'
// import Headroom from 'react-headroom'
import { FaLocationDot } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom';
import { Home } from './Home';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";

export function HeaderTop(){
  return (
    <>
    <header className='flex justify-between px-11 bg-dark text-white'>
            <ul className='flex gap-8 py-2'>
                <li className='flex items-center'>
                <FaLocationDot className='text-yellow-400'/>
                123 Street, New York, USA

                </li>
                <li className='flex items-center gap-2'>
                <GoClock className='text-yellow-400'/>
                Mon - Fri : 09.00 AM - 09.00 PM
                </li>
            </ul>
            <div className='flex gap-6'>

            <ul className='flex gap-4 py-2'>
                <li className='flex gap-2 items-center'>
                    <FaPhone className='text-yellow-400' />
                    <p>

                    +012 345 6789
                    </p>

                </li>
            </ul>
            <ul className='flex gap-3'>
              <li className='pt-3'><FaFacebookF className='text-yellow-400'/></li>
              <li className='pt-3 pl-3 border-l border-yellow-400'><FaTwitter className='text-yellow-400'/></li>
                <li className='pt-3 px-3 border-x border-yellow-400'>
                <FaLinkedinIn className='text-yellow-400' />
                </li>
                <li className='pt-3'><FaInstagram className='text-yellow-400'/></li>
            </ul>
            </div>
    </header>
        
    </>
  )
}
export function Nav(){


    const [Hovered, setHovered] = useState(false)
    function hoverPages() {
      setHovered((prev)=> !prev)
    }
    




  return (
    <>
    {/* <Headroom> */}
    <header className='flex justify-between pl-11'>
      <ul className='border-r pr-14 py-3 '>
        <li className='py-3 flex items-center gap-3'>
        <FaCar size={40} className='text-yellow-500'/>
         <p className='font-bold text-3xl'>
          Drivin
          </p> 
        </li>
      </ul>
      <ul className='flex gap-9 text-lg font-normal'>
        <li className='py-7'>
          <Link to="/">
            Home
          </Link>
        </li>
        <li className='py-7'>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li className='py-7'>
          <NavLink to="/courses">
            Courses
          </NavLink>
        </li>
        <li onMouseEnter={hoverPages} onMouseLeave={hoverPages} className=' relative'>
          <NavLink  className="flex gap-2 items-end py-7" to="/">
            Pages
            <IoIosArrowDown />

        </NavLink>
        {
          Hovered && (
            <div className={`bg-white w-48 absolute -bottom-[10] z-10 py-2 transition-all duration-400 ease-in-out ${Hovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <p className='px-3 hover:bg-gray-200 py-2'>Features</p>
              <p className='px-3 hover:bg-gray-200 py-2'>Appointment</p>
              <p className='px-3 hover:bg-gray-200 py-2'>Our teams</p>
              <p className='px-3 hover:bg-gray-200 py-2'>Testimonials</p>
              <p className='px-3 hover:bg-gray-200 py-2'>404 page</p>

            </div>
          )
        }
        </li>
        <li className='py-7'>
          <NavLink to="/contacts">
          Contacts
          </NavLink>
        </li>
   
        <li className='text-white py-6   px-11 bg-yellow-400 text-xl font-normal '>
          <NavLink className="flex items-center gap-5" to="/get-started">
            Get Started <FaArrowRight />
          </NavLink>
        </li>
        </ul>
    </header>
    {/* </Headroom> */}
    
    </>
  )
}
