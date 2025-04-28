import { motion } from "framer-motion";

const ZigzagBox = () => {
  return (
    <motion.div
      animate={{
        x: [0, -50, 0, 50, 0],
        y: [0, 50, 0, 50, 0],
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="box"
    />
  );
};

export default ZigzagBox;
