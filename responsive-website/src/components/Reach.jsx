import React from "react";
import { motion } from "framer-motion";
import {toast} from "react-hot-toast"
const Reach = () => {
  const [result, setResult] = React.useState("Submit");

  const handlesubmit = async (event) => {
    try{event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68d98f9b-7b0d-4548-8981-337cecc09939");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message Sent Successfully 😎✔");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
     setResult("Again Submit");
    }}catch(err){
       toast.error("error");
    }
    
  };
  return (
    <section id="contactus">
      <div className="flex flex-col items-center gap-8 px-4 py-20 sm:px-12 lg:px-24 xl:px-40 ">
        <motion.h1  initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}} className="text-black dark:text-white font-bold text-3xl sm:text-4xl lg:text-5xl ">
          Reach out to us
        </motion.h1>
        <motion.p 
         initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}}className="font-medium text-xl text-gray-700 text-center dark:text-white">
          From strategy to execution, we craft digital solutions that move your{" "}
          <br /> business forward.
        </motion.p>
      </div>

      {/* Form starts from here*/}
      <form onSubmit={handlesubmit}
        action=""
        className="px-4 py-5 justify-center gap-8 items-center sm:px-12 lg:px-24 xl:px-40 flex flex-wrap text-gray-800 "
      >
        <motion.input  initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}} className="px-4 py-4 dark:text-white border border-gray-700 outline-none shadow-[0_0_20px_4px_rgba(209,213,219,0.5)]" type="text" name="" id="" placeholder="Name" />
        <motion.input  initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}} className="px-4 py-4 dark:text-white border border-gray-700 outline-none shadow-[0_0_20px_4px_rgba(209,213,219,0.5)]"  type="text" placeholder="Email" />
        <motion.textarea  initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}} placeholder="Type Your Message" className="px-4 py-4 dark:text-white border w-full border-gray-700 outline-none shadow-[0_0_20px_4px_rgba(209,213,219,0.5)]" name="" id=""></motion.textarea>
        <motion.button
         initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.8}}
              viewport={{once:true}}
          type="submit"
          className="bg-blue-600 sm:hover:scale-105 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300"
        >
          {result}
        </motion.button>
      </form>
    </section>
  );
};

export default Reach;
