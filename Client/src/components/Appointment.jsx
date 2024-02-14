


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import { Banner } from './Header'
import Footer from './Footer'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export const Appointment = () => {
  
  const userDetails = useSelector((state) => state.user.value);
    console.log("user",userDetails)
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
        <Banner topic="Appointment"/>
        { userDetails &&

        <div className='mb-36 -mt-28 text-right mr-10'>

        <Link to="/myApps" >
        <button className='bg-yellow-400 text-white px-3 py-3 rounded-xl hover:bg-yellow-600'>My appointments</button>
        </Link>
        </div>
        }
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





export const Appoints = () => {

  const [items,setItems] = useState([])

  useEffect(()=> {

    axios.get("http://localhost:8000/api/Appoints",{
      headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },

  })
  .then((res)=>{
    console.log(res)
    setItems(res.data)
    
  })
  .catch((err)=>{
    console.log(err)
  })
  
},[handleDelete])

const {id} = useParams()

  function handleDelete(id){
    console.log("id",id)
    axios.delete(`http://localhost:8000/api/delAppoints/${id}`,{
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },

    })

    .then((res)=>{
      console.log(res)
      toast.success("items deleted")
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <>  
      <ToastContainer />

      <h1 className='font-bold text-3xl text-center my-16'>My Appointments</h1>
      <div className='px-28 flex flex-col gap-3'>
        {items.map((item)=>{
          
            return (
              <div className='border rounded flex items-center justify-between px-5'>
                <div>

                <h1>{`Client Name: ${item.name}`}</h1>
                <h1>{`Course type: ${item.courses_type}`}</h1>
                <h1>{`Car type: ${item.car_type}`}</h1>
                </div>
                <button onClick={()=>handleDelete(item._id)} className=' rounded-xl bg-yellow-400 text-white p-3'>Delete Appointment</button>
                

                
               </div>
            )
          
        })}

      </div>
        
      

    </>
  )
}
