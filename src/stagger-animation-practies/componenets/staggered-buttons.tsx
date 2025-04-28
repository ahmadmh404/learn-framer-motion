import { motion } from "framer-motion";

const button = ["button 1", "button 2", "button 3", "button 4"];

const parentVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
};

const childrenVariants = {
  initial: { scale: 1 },
  animate: { scale: 1.1 },
};

export const StaggeredButtons = () => {
  return (
    <motion.div
      className="flex gap-x-4"
      variants={parentVariants}
      whileHover="animate"
    >
      {button.map((btn, idx) => (
        <motion.button
          variants={childrenVariants}
          key={idx}
          className="!px-3 !py-1.5 bg-sky-600 rounded cursor-pointer"
        >
          {btn}
        </motion.button>
      ))}
    </motion.div>
  );
};
