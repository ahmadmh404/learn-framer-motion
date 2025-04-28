import { motion } from "framer-motion";

const parentVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const StaggeredList = () => {
  return (
    <motion.ul
      className="w-md flex flex-col"
      initial="initial"
      animate="animate"
      variants={parentVariants}
    >
      {[1, 2, 3, 4].map((_, idx) => (
        <motion.li
          variants={childrenVariants}
          className="bg-gray-700/40 !p-3 border-b border-gray-500 text-center"
          key={idx}
        >
          {idx}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredList;
