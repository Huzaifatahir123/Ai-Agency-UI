import React, { useState } from "react";
import { motion } from "framer-motion";

import assets from "../assets/assets";
import Toggletheme from "./Toggletheme";

function Navbar({ theme, settheme }) {
  const [sidebar, setsidebar] = useState(true);
  return (
    <motion.div 
    initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }} 
     className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 ">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt=""
        className="w-32 sm:w-40"
      />
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          sidebar ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all duration-300 ease-in-out`}
      >
        <motion.img
             initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.7}}
              viewport={{once:true}}
          src={assets.close_icon}
          onClick={() => {
            setsidebar(true);
          }}
          className="w-5 absolute right-4 top-4 sm:hidden"
          alt=""
        />
        <motion.a 
         onClick={()=>{setsidebar(true)}}
             initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.7}}
              viewport={{once:true}} href="/" className="sm:hover:border-b ">
          Home
        </motion.a>
        <motion.a onClick={()=>{setsidebar(true)}}
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.7}}
              viewport={{once:true}}
          href="#services" className="sm:hover:border-b">
          Services
        </motion.a>
        <motion.a  onClick={()=>{setsidebar(true)}}    initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.7}}
              viewport={{once:true}} 
        href="#ourwork" className="sm:hover:border-b">
          Our work
        </motion.a>
        <motion.a   onClick={()=>{setsidebar(true)}}    initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.7}}
              viewport={{once:true}} href="#contactus" className="sm:hover:border-b">
          Contact US
        </motion.a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <Toggletheme theme= {theme} settheme= {settheme} />
        <img
          onClick={() => {
            setsidebar(false);
          }}
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          className="w-8 sm:hidden"
        />
        <motion.a

          whileHover={{scale:1.05}}
          transition={{ease:"backInOut",duration: 0.2,}}
          href=""
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Navbar;
