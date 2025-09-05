import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=' flex flex-col items-center gap-6  py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white  '>
              <motion.div
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.7}}
              viewport={{once:true}}
               className='inline-flex items-center border  border-gray-700 p-1.5 pr-4 rounded-full'>
                <img className='w-20' src={assets.group_profile} alt="" />
                <p className='font-medium text-sm'>Trusted By 10K+ People</p>
              </motion.div>

              <motion.h1 initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.9}}
              viewport={{once:true}}
               className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text  text-transparent'>digital</span> imapct.</motion.h1>
              <motion.p
               initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:1.1}}
              viewport={{once:true}}
               className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.</motion.p>
              <div className='relative'>
                    <motion.img
                    initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:1.3}}
              viewport={{once:true}} 
                     src={assets.hero_img} className='w-full max-w-6xl' alt="" />
                    <img src={assets.bgImage1} alt="" className='absolute -top-60 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
              </div>
            
    </div>
  )
}

export default Hero