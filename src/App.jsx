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

function App() {
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
      </Route>
      </Routes>
    </>
  );
}

export default App;
