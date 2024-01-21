
import React from 'react'
import { BiBarChartAlt } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";

export const Courses = () => {
  return (
    <div className='mx-20 '>
        <div className="text-center">

        <p className='text-yellow-400 font-bold'>TRANDING COURSES</p>
        <h1 className='font-bold text-4xl'>Our Courses Upskill You <br /> With Driving Training</h1>
        </div>
        <div className='flex gap-6 mt-10'>
            <div className='bg-white'>
            <div className='flex flex-col items-center gap-4 px-5'>
                <button className='bg-yellow-400 text-white px-6 py-1 font-semibold'>$99</button>
                <h1>Automatic Car Lessons</h1>
                <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                <p className='flex justify-center mb-5 gap-2'>
                    <span className='flex items-center gap-2'>

                <BiBarChartAlt /> Beginner / 
                    </span>
                    <span className='flex items-center gap-2'>
                    <FaCalendarAlt /> 3 Week

                    </span>
                </p>
            </div>
                <img src="courses-1.jpg" alt="oops" />
            </div>
            <div  className='bg-white'>
            <div className='flex flex-col items-center gap-4 px-5'>
                <button className='bg-yellow-400 text-white px-6 py-1 font-semibold'>$99</button>
                <h1>Automatic Car Lessons</h1>
                <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                <p className='flex justify-center mb-5 gap-2'>
                    <span className='flex items-center gap-2'>

                <BiBarChartAlt /> Beginner / 
                    </span>
                    <span className='flex items-center gap-2'>
                    <FaCalendarAlt /> 3 Week

                    </span>
                </p>
            </div>
                <img src="courses-1.jpg" alt="oops" />
            </div>
            <div  className='bg-white'>
            <div className='flex flex-col items-center gap-4 px-5'>
                <button className='bg-yellow-400 text-white px-6 py-1 font-semibold'>$99</button>
                <h1>Automatic Car Lessons</h1>
                <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                <p className='flex justify-center mb-5 gap-2'>
                    <span className='flex items-center gap-2'>

                <BiBarChartAlt /> Beginner / 
                    </span>
                    <span className='flex items-center gap-2'>
                    <FaCalendarAlt /> 3 Week

                    </span>
                </p>
            </div>
                <img src="courses-1.jpg" alt="oops" />
            </div>
        </div>

    </div>
  )
}

export const Appointments = () => {
    return (
        <div className='mx-auto my-32 bg-yellow-400 p-10 w-[60%]'>
            <form action="">

            <h1 className='font-bold text-4xl text-center'>Make Appointment</h1>
            <div className='flex gap-5 mt-7'>
                <input className='px-5 py-4 w-full' placeholder='Your name' type="text" />
                <input className='px-5 py-4 w-full' placeholder='Your email' type="text" />
            </div>
            <div className='flex  gap-5 mt-7'>
                <input className='px-5 py-4 w-full' placeholder='Courses type' type="text" />
                <input className='px-5 py-4 w-full' placeholder='Car type' type="text" />
            </div>
            <input className='mt-7 w-full h-24 px-5' placeholder='messages' type="text" />
            <button className=' mt-7 w-full bg-indigo-950 text-white font-semibold p-2'>Submit</button>

            </form>
            
        </div>
    )
}