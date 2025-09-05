import React from 'react'
import assests, { teamData } from '../assets/assets'
import { motion } from "framer-motion";
const Team = () => {
  return (
    <>
       <div className="flex flex-col items-center gap-8 px-4 py-20 sm:px-12 lg:px-24 xl:px-40 ">
        <motion.h1
          initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.5}}
              viewport={{once:true}}
         className="text-black dark:text-white font-bold text-3xl sm:text-4xl lg:text-5xl ">
              Meet the team
        </motion.h1>
        <motion.p
         initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.5}}
              viewport={{once:true}}
         className="font-medium text-xl text-gray-700 text-center dark:text-white">
       A passionate team of digital experts dedicated to your brands <br /> success.
        </motion.p>
      </div>


      {/* card starts here */}
      <div className='flex justify-start items-center gap-8 px-4 py-5 sm:px-12 lg:px-24 xl:px-40 flex-wrap'>

        {teamData.map((obj,key)=>(
              <motion.div
              key={key}
               initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.5}}
              viewport={{once:true}}
               className='
             sm:hover:scale-105 duration-300 ease-in-out flex border min-w-[220px] flex-1 rounded-2xl border-gray-400 gap-2   p-4  shadow-[0_0_20px_4px_rgba(209,213,219,0.5)]'>
            <img className='w-12 object-cover rounded-full' src={obj.image} alt="" />
            <div className='flex flex-col pr-4 items-start justify-center gap-1 '>
                <h1 className='font-bold text-gray-800 dark:text-white text-sm'>{obj.name}</h1>
                <p className=' text-gray-600 dark:text-white text-xs'>{obj.title}</p>
            </div>
        </motion.div>
        ))}
        
      </div>
    </>
 
  )
}

export default Team