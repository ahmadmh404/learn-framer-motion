import { motion } from "framer-motion";
import { shapeVariants } from "../../variants";

const AnimatedShape = () => {
  return (
    <motion.div
      className="box bit"
      variants={shapeVariants}
      initial={shapeVariants.initial}
      whileHover={shapeVariants.hover}
      whileTap={shapeVariants.click}
    />
  );
};

export default AnimatedShape;
