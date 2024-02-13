


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import { Banner } from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Appointment = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courses_type: '',
    car_type: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  console.log("here",formData)


  function handleSubmit(e) {
    e.preventDefault()
    
    axios.post("http://localhost:8000/api/createAppoints",formData,{ 
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`, 
      },
    
    })
    .then((res)=>{
      console.log(res)
      navigate("/")
      toast.success("Appointment Scheduled")
     
    })
    .catch((err)=>{
      console.log(err)  
    })

  }

  return (
    <div>
      <ToastContainer />
        <Banner topic="Appointment"/>
        <div className='px-10'>
        <div className='flex px-7 pl-16 gap-10 h-fit mb-40'>
            <div className=''>
            <div className="relative">
        <img className="h-[86vh] w-[77vw]" src="about-1.jpg" alt="" />
        <img
          className=" border-white border-solid  border-8 absolute -top-10 -left-10 h-[30vh]"
          src="about-2.jpg"
          alt="oops"
        />
      </div>
              </div>
           
     
      <div className="flex flex-col gap-3">
        <h3 className="text-yellow-400 uppercase text-l font-bold">APPOINTMENT
</h3>
        <h1 className="font-bold text-4xl">
        Make An Appointment To Pass Test & Get A License On The First Try
        </h1>
              
            <form onSubmit={handleSubmit} className=' mt-3 w-[100%]' action="">

            <div className='flex gap-5 mb-3'>
                <div className='inputBorder relative w-full p-1'>

                <input className='px-5 focus:outline-none placeholder:text-gray-500 py-4 w-full bg-gray-100' placeholder='Your name' name='name' onChange={handleChange} type="text" />
                </div>
                <div className='inputBorder relative w-full p-1'>

                <input className='px-5 focus:outline-none placeholder:text-gray-500 py-4 w-full bg-gray-100' placeholder='Your email'     name='email' onChange={handleChange}
                type="text" />
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='inputBorder relative w-full p-1'>

                <input className='px-5 focus:outline-none placeholder:text-gray-500 py-4 w-full bg-gray-100' placeholder='Course Type'  name='courses_type' onChange={handleChange} type="text" />
                </div>
                <div className='inputBorder relative w-full p-1'>

                <input className='px-5 focus:outline-none placeholder:text-gray-500 py-4 w-full bg-gray-100' placeholder='Car Type'  name='car_type' onChange={handleChange} type="text" />
                </div>
            </div>
           
            <div className='inputBorder relative w-full p-1 mt-3'>

            <input className=' placeholder:text-gray-500 focus:outline-none w-full h-32 placeholder: px-5 bg-gray-100' placeholder='messages'  name='message' onChange={handleChange} type="text" />
            </div>
            <button className=' mt-7 w-full bg-yellow-400 text-white font-semibold py-4 '>Submit</button>

            </form>
            
        </div>

    </div>
        </div>
        
        <Footer/>

    </div>
  )
}
