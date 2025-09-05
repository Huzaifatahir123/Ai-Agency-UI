import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ourtrusted from './components/Ourtrusted';
import { useState } from "react";
import Howhelp from './components/Howhelp';
import Work from './components/Work';
import Team from './components/Team';
import Reach from './components/Reach';
import Footer from './components/Footer';
function App() {
  const [theme, settheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
  return (
  <div className = " dark:bg-black realative">
   <Navbar theme = {theme} settheme ={settheme} />
   <Hero />
   <Ourtrusted />
   <Howhelp />
   <Work />
   <Team />
   <Reach />
   <Footer theme={theme} settheme={settheme} />
  </div>

  
   
  )
}

export default App