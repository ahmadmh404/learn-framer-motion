import { motion } from "framer-motion";
import { childVariants, parentVariants } from "../../variants";

const Basics = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial={"hidden"}
      animate={"visible"}
      className="flex gap-5"
    >
      {...[1, 2, 3, 4, 5].map((_, idx) => (
        <motion.div
          key={idx}
          className="box circle stagger !mt-4"
          variants={childVariants}
        />
      ))}
    </motion.div>
  );
};

export default Basics;
