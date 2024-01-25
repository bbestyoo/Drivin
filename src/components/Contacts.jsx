

import React from 'react'
import { Banner } from './Header'

export const Contacts = () => {
  return (
    <div>
        <Banner topic={"Contact Us"} />
        <div className=''>
            <div className="px-32 flex items-end gap-10 mb-24">
            <div>map</div>
     
      <div className="flex flex-col gap-3">
        <h3 className="text-yellow-400 uppercase text-l font-bold">About us</h3>
        <h1 className="font-bold text-4xl">
          We Help Students To Pass Test & Get A License On The First Try
        </h1>
        <p className="text-md text-gray-500">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
       
            <form className='mx-auto mt-32 bg-yellow-400 p-10 w-[60%]' action="">

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
        </div>

    </div>
    </div>
  )
}
