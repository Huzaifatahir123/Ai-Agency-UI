import React from 'react';
import assets from '../assets/assets';
import { motion } from "framer-motion";

const Work = () => {
  // 1. Parent variants for orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger cards by 0.2 seconds
      },
    },
  };

  // 2. Child variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  const projectData = [
    { img: assets.work_mobile_app, title: "Mobile app marketing", desc: "We turn bold ideas into powerful digital solutions..." },
    { img: assets.work_dashboard_management, title: "Dashboard management", desc: "We help you execute your plan and deliver results." },
    { img: assets.work_fitness_app, title: "Fitness app promotion", desc: "We help you create a marketing strategy that drives results." }
  ];

  return (
    <section id='ourwork'>
      <div className="flex flex-col items-center gap-8 px-4 py-20 sm:px-12 lg:px-24 xl:px-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }} 
          className="text-black dark:text-white font-bold text-3xl sm:text-4xl lg:text-5xl"
        >
          Our latest work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }} 
          className="font-medium text-xl text-gray-700 text-center dark:text-white"
        >
          From strategy to execution, we craft digital solutions that move your <br /> business forward.
        </motion.p>
      </div>

      {/* 3. Staggered Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is visible
        className='flex flex-wrap items-center justify-center gap-8 px-4 py-5 sm:px-12 lg:px-24 xl:px-40'
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className='flex flex-col sm:hover:scale-105 transition-transform duration-300 ease-in-out gap-4 rounded-2xl cursor-pointer'
          >
            <img className='w-80 rounded-xl' src={project.img} alt={project.title} />
            <h1 className='font-bold text-gray-700 dark:text-white text-2xl'>{project.title}</h1>
            <p className='dark:text-white text-gray-500'>
              {project.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;