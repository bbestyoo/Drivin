import { useEffect, useState } from "react";


import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Banner } from "./Header";
import Footer from "./Footer";
import axios from "axios";



export function OurTeam() {
  return (
    <>
      <Banner topic="Our Team" />
      <div className="mb-40">
        <Agents />
      </div>
      <Footer />
    </>
  );
}

function Agents() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:8000/api/users")
    .then((res)=>{
      console.log(res)
      setUsers(res.data)

    })
    .catch((err)=>{
      console.log(err)
    })


  },[])




  return (
    <div>
      <section className="text-center">
        <h3 className="text-yellow-400 font-bold">MEET THE TEAM</h3>
        <h1 className="mt-2 mb-9 text-4xl font-bold">
          We Have Great <br /> Experience Of Driving
        </h1>
      </section>
      <section className="   px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          users?.map((user, i)=> (
            <div data-aos = 'slide-up' data-aos-offset={300} data-aos-duration={i*900 }>

            <Card  user={user} key={i} />
            </div>
          ))
          }
       
      </section>
    </div>
  );
}

export default Agents;

export const Card = ({user}) => {
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
          <img
            id=""
            alt="pp"
            src={`http://localhost:8000/${user.image}`}
            className="h-[35vh] sm:h-[60vh] md:h-[42vh] w-[70vw]  object-top object-cover"
          />
        </div>
        <div
          className={`  absolute opacity-0 top-0  transition-all duration-500 ease-in-out   ${
            isActive ? " opacity-100 top-40 " : ""
          }   left-10 translate-x-7 items-center  z-40  flex  justify-center gap-4`}
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
          <h1 className=" text-xl font-semibold">{user.username}</h1>
          <span className=" text-base ">Trainer</span>
        </div>
      </div>
    </div>
  );
};
