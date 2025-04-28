import { motion } from "framer-motion";

const BackgroundChanger = () => {
  return (
    <motion.div
      className="box rounded-md"
      initial={{ backgroundColor: "yellowgreen" }}
      animate={{
        backgroundColor: ["#fff", "#ff0000", "#00ff00"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    />
  );
};

export default BackgroundChanger;
