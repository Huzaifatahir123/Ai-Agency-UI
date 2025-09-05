import React from 'react'
import assets, { company_logos } from '../assets/assets'
import { motion } from "framer-motion";
const Footer = ({theme,settheme}) => {
  return (
    <motion.div initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:1}}
              viewport={{once:true}} className='flex bg-gray-200 dark:bg-gray-900 flex-wrap justify-center items-center gap-12 px-4 py-20 sm:px-12 lg:px-24 xl:px-40 '>

     <div className='flex flex-col gap-8 justify-center items-center '>

  <img className='w-32 sm:w-40' src={theme === "dark" ? assets.logo_dark : assets.logo} alt="" />
  <p className='dark:text-white max-sm:text-sm text-center'>From strategy to execution, we craft digital solutions that move your <br />
   business forward.</p>
    <div  className='flex flex-wrap gap-4 justify-center items-center'>
             <a href="" className="dark:text-white sm:hover:text-blue-500 ">
          Home
        </a>
        <a href="" className="dark:text-white sm:hover:text-blue-500">
          Services
        </a>
        <a href="" className="dark:text-white sm:hover:text-blue-500">
          Our work
        </a>
        <a href="" className="dark:text-white sm:hover:text-blue-500">
          Contact US
        </a>
    </div>
     </div>


     <div className='flex flex-col gap-8 justify-center items-center'>
        <h1 className='dark:text-white'>Subscribe to our newsletter</h1>
        <p className='dark:text-white max-sm:text-sm text-center'>
The latest news, articles, and resources, sent to your inbox weekly.</p>

 <div className='flex gap-2 max-sm:gap-8 flex-wrap justify-center items-center'>
  <input className="px-4 py-4 dark:text-white border border-gray-700 outline-none shadow-[0_0_20px_4px_rgba(209,213,219,0.5)]" type="text" name="" id="" placeholder="Enter Your Email" />
     <button
          type="submit"
          className="bg-blue-600 sm:hover:scale-105 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300"
        >
          Send Message
        </button>
 </div>

     </div>
    </motion.div>
  )
}

export default Footer