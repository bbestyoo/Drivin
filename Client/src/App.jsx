import "./App.css";
import { HeaderTop, Nav } from "./components/Header";
import { About, Features } from "./components/Aboutus";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { CoursesPage } from "./components/Courses";
import { Contacts } from "./components/Contacts";
import { FeaturesPage } from "./components/Features";
import { Appointment } from "./components/Appointment";
import { OurTeam } from "./components/Agents";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setUserDetails } from "./Redux/UserSlice";


function App() {

  const token = localStorage.getItem("token");
  console.log(token);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          console.log("yoyo");
          const response = await axios.get("http://localhost:8000/api/user", {
            headers: {
              authorization: `bearer ${token}`,
            },
          });
          console.log(response.data);
          dispatch(setUserDetails(response.data));
          // localStorage.clear()
        
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [token, dispatch]);




  return (
    <>
      <Routes>
        <Route  
          element={
            <>
              <HeaderTop />
              <Nav />
            </>
          }
        > <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/courses" element={<CoursesPage/>} ></Route>
        <Route path="/contacts" element={<Contacts/>} ></Route>
        <Route path="/features" element={<FeaturesPage/>} ></Route>
        <Route path="/appointment" element={<Appointment/>} ></Route>
        <Route path="/ourteam" element={<OurTeam/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
      </Route>
      </Routes>
    </>
  );
}

export default App;
