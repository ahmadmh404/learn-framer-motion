import { motion } from "framer-motion";

const PulsingButton = () => {
  return (
    <motion.button
      className="!px-5 !py-2 bg-blue-500 rounded-sm"
      animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ["#3b82f6", "#68a5fa", "#3b82f5"],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      Click me
    </motion.button>
  );
};

export default PulsingButton;
