import { motion, useMotionValue } from "framer-motion";

export const ScaleButton = () => {
  const scaleX = useMotionValue(1);

  return (
    <div>
      <motion.button
        onHoverStart={() => scaleX.set(1.1)}
        onHoverEnd={() => scaleX.set(1)}
        style={{ scaleX }}
      >
        Touch me to scale
      </motion.button>
    </div>
  );
};
