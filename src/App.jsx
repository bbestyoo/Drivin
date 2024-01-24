import "./App.css";
import { HeaderTop, Nav } from "./components/Header";
import Agents from "./components/Agents";
import { About } from "./components/Aboutus";
import { Courses } from "./components/Courses";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {

  return (
    <>
    <HeaderTop/>
    <Nav/>
     
      <Routes>


        <Route to="/" element={<Home/>} />
        <Route to="/about" element={<About/>} />
        <Route to="/courses" element={<Courses/>} />
      </Routes>
      {/* // </Routes> */}




    </>
  );
}

export default App;
