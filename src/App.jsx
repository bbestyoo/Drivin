import { useState } from "react";
import "./App.css";
import { HeaderTop } from "./components/Header";
import Agents from "./components/Agents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderTop />
    </>
  );
}

export default App;
