import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Howhelp = () => {
  // 1. Define parent variants to handle orchestration (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each card animation
      },
    },
  };

  // 2. Define child variants for the actual movement
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section id="services">
      <div className="flex flex-col items-center gap-8 px-4 py-20 sm:px-12 lg:px-24 xl:px-40">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-white font-bold text-3xl sm:text-4xl lg:text-5xl"
        >
          How Can we help?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-medium text-xl text-gray-700 text-center dark:text-white"
        >
          From strategy to execution, we craft digital solutions that move your
          <br /> business forward.
        </motion.p>
      </div>

      {/* 3. Apply parent variants and viewport settings */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // 30% of viewport trigger
        className="flex flex-wrap items-center justify-center gap-6 px-4 py-10 sm:px-12 lg:px-24 xl:px-40"
      >
        {[
          { icon: assets.ads_icon, title: "Advertising", desc: "We turn bold ideas into powerful digital solutions..." },
          { icon: assets.content_icon, title: "Content marketing", desc: "We help you execute your plan and deliver results." },
          { icon: assets.marketing_icon, title: "Content writing", desc: "We help you create a marketing strategy." },
          { icon: assets.social_icon, title: "Social media", desc: "We help you build a strong social media presence." },
        ].map((card, index) => (
          /* 4. Convert the card wrapper to a motion component and use variants */
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-1 sm:min-w-[420px] max-sm:min-w-[240px] transition-transform duration-300 sm:hover:scale-[1.02] rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-md"
          >
            <div className="flex gap-6 items-center">
              <img
                className="w-24 h-24 border-8 border-gray-300 shadow-[0_0_20px_4px_rgba(209,213,219,0.5)] rounded-full object-cover"
                src={card.icon}
                alt={card.title}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  {card.title}
                </h1>
                <p className="text-gray-600 dark:text-white text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Howhelp;