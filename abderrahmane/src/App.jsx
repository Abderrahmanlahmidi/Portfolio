import React, { useState } from 'react'
import Home from "./scenes/Home/Index";
import Navbar from "./scenes/Navbar/Index";
import About from "../src/scenes/About/Index"
import Projects from "../src/scenes/Projects/Index"
import Skills from "../src/scenes/Skills/Index"

function App() {
  const [Select, setSelect] = useState("Home")
  return (
    <div>
     <Navbar  Select={Select} setSelect={setSelect}/>  
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
    </div>
  ) 
}

export default App
