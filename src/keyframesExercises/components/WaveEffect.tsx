import { motion } from "framer-motion";

const boxes = Array.from([1, 2, 3, 4, 5]);

const WaveEffect = () => {
  return (
    <motion.div className="flex !gap-4">
      {boxes.map((_, idx) => (
        <motion.div
          className="box cirlce"
          animate={{ rotate: 270, borderRadius: "50%" }}
          transition={{
            repeat: Infinity,
            delay: 0.1 * idx,
            repeatType: "reverse",
            duration: 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default WaveEffect;
