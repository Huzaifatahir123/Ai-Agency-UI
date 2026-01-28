export const containerVariants = {
    hidden:{opacity:0},
    visible:{
        opacity:1,
        transition:{
      staggerChildren: 0.1, // 0.1s delay between each message
      delayChildren: 0.3
        }
    }
}
 export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};