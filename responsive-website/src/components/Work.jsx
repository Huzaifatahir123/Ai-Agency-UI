import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion";
const Work = () => {
  return (
    <section id='ourwork'>
          <div
           className="flex flex-col items-center gap-8 px-4 py-20 sm:px-12 lg:px-24 xl:px-40 ">
        <motion.h1
        initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}} 
         className="text-black dark:text-white font-bold text-3xl sm:text-4xl lg:text-5xl ">
              Our latest work
        </motion.h1>
        <motion.p
        initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}} 
        className="font-medium text-xl text-gray-700 text-center dark:text-white">
         From strategy to execution, we craft digital solutions that move your <br /> business forward.
        </motion.p>
      </div>





      {/* CARDS STARTS FROM HERE */}


      <motion.div
       
      className='flex flex-wrap items-center justify-center gap-8 px-4  py-5 sm:px-12 lg:px-24 xl:px-40'>
        <motion.div
        initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.5}}
              viewport={{once:true}}
         className='flex flex-col  sm:hover:scale-105 duration-300 ease-in-out  gap-4 rounded-2xl'>
            <img className='w-80' src={assets.work_mobile_app} alt="" />
            <h1 className='font-bold text-gray-700 dark:text-white text-2xl'>Mobile app marketing</h1>
            <p className='dark:text-white text-gray-500'>We turn bold ideas into powerful digital <br /> solutions that connect, engage...</p>

        </motion.div>
         {/* Card 2 */}
               <motion.div
               initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.7}}
              viewport={{once:true}} 
                className='flex flex-col  sm:hover:scale-105 duration-300 ease-in-out  gap-4 rounded-2xl'>
            <img className='w-80' src={assets.work_dashboard_management} alt="" />
            <h1 className='font-bold text-gray-700 dark:text-white text-2xl'>Dashboard management</h1>
            <p className='dark:text-white text-gray-500'>We help you execute your plan and <br /> deliver results.</p>

        </motion.div>
        {/* card 3 */}
                       <motion.div
                       initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:1}}
              viewport={{once:true}}
                       className='flex flex-col sm:hover:scale-105 duration-300 ease-in-out   gap-4 rounded-2xl'>
            <img className='w-80' src={assets.work_fitness_app} alt="" />
            <h1 className='font-bold text-gray-700 dark:text-white text-2xl'>Fitness app promotion</h1>
            <p className='dark:text-white text-gray-500'>We help you create a marketing strategy <br /> that drives results.</p>

        </motion.div>
      </motion.div>



     

    </section>
  )
}

export default Work