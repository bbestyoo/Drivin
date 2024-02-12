import { FaUser, FaLock  } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Redux/UserSlice";

function Login() {

  console.log("render...")
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  function handlesubmit(e){

    e.preventDefault()
    console.log("gg",e.target.email.value,e.target.password.value)
    axios.post("http://localhost:8000/api/Login", {
      email: e.target.email.value,
      password: e.target.password.value

    })
    .then((res) =>{
      
      console.log("data",res.data)
      console.log("user",res.data.user)
      dispatch(setUserDetails(res.data.user))      //dispatch calls a reducer that may take a state res.data.user is a state jun xai state.value ma basxa ra action xai setUserDetails garne bayo  action
      localStorage.setItem("token",res.data.token)
      navigate("/") 
           
      
    })
    .catch((err)=>{
            // console.log(err);
            const errors = err.response.data;
            console.log("asdasd",errors);
            let temp = {};
            err.params != null ? (
            errors?.forEach((err) => {    
              temp[err.params] = [err.msg]
              setError(temp);

            })
            ) : setError(errors) ;
          
            console.log(temp);
            console.log("here",error)
        });
        

  
  }
  

  function clickEyeButton()  {
    setIsVisible((prevVisible) => !prevVisible);

  }

  return (
    <div className="bg-yellow-300 py-24">
    
      <div className="w-fit m-auto bg-yellow-200 rounded-3xl shadow-lg shadow-gray-400">
        <form onSubmit={(e) => { handlesubmit(e) }} className="  py-20 px-10 rounded-3xl ">
          <p className="text-3xl text-center font-medium mb-5 ">Login</p>
          <div className="mb-4">

          <div className="flex items-center p-2 px-4 rounded-3xl mt-4 bg-yellow-100 ">
            <input
              type="email"
              name="email"
              
              
              placeholder="enter your email address"
              className="bg-yellow-100 w-72 outline-none "
              
              />
            <FaUser />

          </div>
            <small className="text-red-800">{error?.email}</small>
          
              </div>
              <div className="mb-4">

          <div className="flex  border-black bg-yellow-100 items-center p-2 px-4 rounded-3xl mt-4">
            <input
              type={isVisible? "text" : "password"}
              name="password"
              
              placeholder="password"
              className=" w-72 outline-none bg-yellow-100 "
              onChange={(e)=>{setPassword(e.target.value)}}
            />
         {password.length <= 0 ? 
        
          <FaLock />
        
       : (
        <button type="button" onClick={()=>clickEyeButton()}>
          {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
        </button>
      )}

             

            
          
            
            
          </div>
          <small className="text-red-800">{error?.password}</small>
            </div>
          <div className="flex justify-between">
            <label>
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <p>Forget Password?</p>
          </div>
          <div>
            <small className="text-red-800">{error?.msg}</small>

          <button type="submit" className="w-full bg-yellow-400 rounded-3xl my-4 p-2 font-bold text-white text-xl hover:bg-yellow-500">
            Login
          </button>
          </div>
          <div className="flex justify-center">
            <p>Dont have an account?</p>
            <p className="font-bold">
              <Link to="/signup">Register</Link>
            </p>
          </div>

        </form>
    </div>
    </div>
  );
}

export default Login;

