
import React, { useState } from 'react'
import { BiBarChartAlt } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { Banner } from './Header';
import Agents from './Agents';
import Footer from './Footer';


export const CoursesPage = () =>{

    return (
        <>
        <Banner topic={"Courses"}/>
        <Courses/>
        <div className="mt-32">
    
        <Footer/>
        </div>
        </>
      )
}


export const CoursesComponents = () => {
    const [isActive, setIsActive] = useState(false);



    return (
        <div>
            <div className='bg-white'>
            <div className='flex flex-col items-center text-center gap-4 px-5'>
                <button className='bg-yellow-400 text-white px-6 py-1 font-semibold'>$99</button>
                <h1 className='font-semibold text-xl text-center'>Automatic Car Lessons</h1>
                <p className='text-gray-500'>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                <p className='flex justify-center mb-5 gap-2'>
                    <span className='flex items-center gap-2'>

                <BiBarChartAlt /> Beginner / 
                    </span>
                    <span className='flex items-center gap-2'>
                    <FaCalendarAlt /> 3 Week

                    </span>
                </p>
            </div>
            {/* <div className='relative before:absolute before:block before:bg-black before:h- before:w-full before:opacity-50 z-10 hover:before:h-full transition-hover 0.3s ease-in-out '>

                <img className='' src="courses-1.jpg" alt="oops" />
            </div> */}
            <div className='relative coursesDiv '>
                <div 
                 onMouseEnter={() => setIsActive(true)}
                 onMouseLeave={() => setIsActive(false)}
                 className='coursesImg  '>


                <img className='' src="courses-1.jpg" alt="oops" />
                </div>
                <div className={`transition-all duration-500 ease-in-out top-4 opacity-0   ${
            isActive ? " opacity-100 top-40 z-50 " : "" } text-yellow-400 border border-yellow-400 px-2 py-1 absolute top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%]`}>
                    Read More
                </div>
            </div>
            </div>
        </div>
    )
}




export const Courses = () => {

  return (
    <div className=' mx-5 sm:mx-20 mt-24 '>
        <div data-aos = 'slide-up' data-aos-offset="600" data-aos-duration="300" className="text-center">

        <p className='text-yellow-400 font-bold'>TRANDING COURSES</p>
        <h1 className='font-bold text-4xl'>Our Courses Upskill You <br /> With Driving Training</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-3 gap-6 mt-10'>
        {[...Array(3)].map((_, i) => (
            <div  data-aos = 'slide-up' data-aos-offset={800} data-aos-duration={i*900 }  >

        <CoursesComponents key={i} />
            </div>
      ))}

        </div>
        
           

    </div>
  )
}

export const Appointments = () => {
    return (
        <div data-aos = 'slide-up' data-aos-offset="1000" data-aos-duration="900" className='mx-auto mt-32 bg-yellow-400 p-10 w-[80%] sm:w-[60%]'>
            <form action="">

            <h1 className='font-bold text-4xl text-center'>Make Appointment</h1>
            <div className='flex flex-col sm:flex sm:flex-row gap-5 mt-7'>
                <input className='px-5 py-4 w-full' placeholder='Your name' type="text" />
                <input className='px-5 py-4 w-full' placeholder='Your email' type="text" />
            </div>
            <div className='flex flex-col sm:flex sm:flex-row  gap-5 mt-7'>
                <input className='px-5 py-4 w-full' placeholder='Courses type' type="text" />
                <input className='px-5 py-4 w-full' placeholder='Car type' type="text" />
            </div>
            <input className='mt-7 w-full h-24 px-5' placeholder='messages' type="text" />
            <button className=' mt-7 w-full bg-indigo-950 text-white font-semibold p-2'>Submit</button>

            </form>
            
        </div>
    )
}