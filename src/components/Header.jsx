
import React from 'react'
import Headroom from 'react-headroom'
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { Home } from './Home';

export function HeaderTop(){
  return (
    <>
    <header className='flex justify-between px-6 bg-blue-800 py-2'>
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
  return (
    <>
    <Headroom>
    <header className='flex px-6 bg'>
      <ul>
        <li className='py-3'>
          Logo
          Drivin
        </li>
      </ul>
      <ul className='flex gap-4 ml-40'>
        <li className='py-3'>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        
   
        <li className='text-white bg-yellow-400'>
          <NavLink to="/get-started">
            Get Started
          </NavLink>
        </li>
      </ul>
    </header>
    </Headroom>
    <Home/>
    
    </>
  )
}
