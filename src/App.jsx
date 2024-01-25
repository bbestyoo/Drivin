import "./App.css";
import { HeaderTop, Nav } from "./components/Header";
import { About } from "./components/Aboutus";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { CoursesPage } from "./components/Courses";
import { Contacts } from "./components/Contacts";

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
      </Route>
      </Routes>
    </>
  );
}

export default App;
