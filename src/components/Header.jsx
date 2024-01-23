
import React, { useState } from 'react'
// import Headroom from 'react-headroom'
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { Home } from './Home';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export function HeaderTop(){
  return (
    <>
    <header className='flex justify-between px-6 bg-dark text-white py-2'>
            <ul className='flex gap-4'>
                <li className='flex items-center'>
                <IoLocationOutline className='text-yellow-500'/>
                123 Street, New York, USA

                </li>
                <li className='flex items-center'>
                <GoClock />
                Mon - Fri : 09.00 AM - 09.00 PM
                </li>
            </ul>
            <ul className='flex gap-4'>
                <li className='flex items-center'>
                    Phone 
                    +012 345 6789

                </li>
                <li className='flex items-center'>
                    F T in O
                </li>
            </ul>
    </header>
    <Nav/>
        
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
    <header className='flex justify-between pl-6'>
      <ul className='border-r pr-14 py-4 '>
        <li className='py-3'>
          Logo
          Drivin
        </li>
      </ul>
      <ul className='flex gap-9 text-xl font-normal'>
        <li className='py-7'>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className='py-7'>
          <NavLink to="/">
            About
          </NavLink>
        </li>
        <li className='py-7'>
          <NavLink to="/">
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
          <NavLink to="/">
          Contacts
          </NavLink>
        </li>
   
        <li className='text-white py-7 px-7 bg-yellow-400 text-xl font-normal '>
          <NavLink className="flex items-center gap-5" to="/get-started">
            Get Started <FaArrowRight />
          </NavLink>
        </li>
        </ul>
    </header>
    {/* </Headroom> */}
    <Home/>
    
    </>
  )
}
