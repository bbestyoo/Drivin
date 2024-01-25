import "./App.css";
import { HeaderTop, Nav } from "./components/Header";
import Agents from "./components/Agents";
import { About, Aboutus } from "./components/Aboutus";
import { Courses } from "./components/Courses";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

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
        > <Route path="/" Component={<Home/>} />
        <Route path="/about" Component={<About/>} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
