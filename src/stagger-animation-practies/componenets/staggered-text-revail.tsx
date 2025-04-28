import { motion } from "framer-motion";

const parentVAriants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 200,
    },
  },
};

const childrenVariants = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
};

export const StaggeredTextRevail = () => {
  const text = "this is some text to revail";

  return (
    <motion.div variants={parentVAriants} initial="initial" animate="animate">
      {text.split("").map((letter, idx) => (
        <motion.span variants={childrenVariants} key={idx}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
