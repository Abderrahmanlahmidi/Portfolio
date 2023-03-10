import React, { useState } from 'react'
import Home from "./scenes/Home/Index";
import Navbar from "./scenes/Navbar/Index";
import About from "../src/scenes/About/Index"
import Projects from "../src/scenes/Projects/Index"
import Skills from "../src/scenes/Skills/Index"
import Follow from "../src/scenes/Follow/Index"
import Contact from '../src/scenes/Contact/Index';

function App() {
  const [Select, setSelect] = useState("Home")
  return (
    <div>
     <Navbar  Select={Select} setSelect={setSelect}/>  
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Follow/>
     
     </div>
  ) 
}

export default App
