import { motion } from "framer-motion";

const Two = () => {
  return (
    <motion.div
      className="h-20 w-20 inset-0 bg-blue-500 rounded-full"
      initial={{ y: 0 }}
      animate={{ y: [0, -100, 0] }}
      transition={{
        duration: 0.6,
        ease: "easeIn",
        repeat: Infinity,
      }}
    />
  );
};

export default Two;
