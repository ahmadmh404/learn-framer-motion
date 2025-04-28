import { motion } from "framer-motion";

const BouncingBall = () => {
  return (
    <div className="flex !gap-5">
      <motion.div
        className="box circle"
        initial={{ y: 0 }}
        animate={{
          y: [0, -100, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
};

export default BouncingBall;
