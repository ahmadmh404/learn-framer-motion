import { motion } from "framer-motion";

const parentVariants = {
  animate: {
    transition: {
      staggerChildren: 0.4,
      type: "spring",
      stiffness: 200,
    },
  },
};

const childrenVariants = {
  initial: { opacity: 0, backgroundColor: "gray" },
  animate: { opacity: 1, backgroundColor: "white" },
};

export const StaggeredGridLayout = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={parentVariants}
      className="grid grid-cols-3 gap-5"
    >
      {[1, 2, 3, 4, 5, 6].map((_, idx) => (
        <motion.div
          variants={childrenVariants}
          key={idx}
          className="bg-gray-100 !p-4 text-gray-900 font-bold"
        >
          {idx}
        </motion.div>
      ))}
    </motion.div>
  );
};
