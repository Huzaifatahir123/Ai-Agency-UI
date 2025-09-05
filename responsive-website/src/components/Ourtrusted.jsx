import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion";
import { company_logos } from '../assets/assets'
const Ourtrusted = () => {
  return (
      <div className='flex flex-col gap-8 items-center px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-900 dark:text-white'>
               <motion.p 
                    initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.6}}
              viewport={{once:true}}
                className='text-lg text-gray-700 dark:text-white '>Trusted by Leading companies</motion.p>
               <div className='flex flex-wrap justify-center gap-8 items-center '>
                {company_logos.map((logo,index)=>(
                  <motion.img
                       initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}}
                   src={logo} key={index} alt="" className='w-22' />
                ))}
               </div>
      </div>
  )
}

export default Ourtrusted