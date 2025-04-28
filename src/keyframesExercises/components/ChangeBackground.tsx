import { motion } from "framer-motion";

const ChangeBackground = () => {
  return (
    <motion.div
      className="!h-screen w-full"
      initial={{ backgroundColor: "teal" }}
      animate={{
        backgroundColor: ["#f7ca21", "#043adc", "#abc245", "#888ca2"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
    />
  );
};

export default ChangeBackground;
