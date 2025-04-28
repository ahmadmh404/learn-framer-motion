import { motion, useMotionValue } from "framer-motion";

export const MovePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleTap = () => {
    x.set(Math.random() * 100);
    y.set(Math.random() * 100);
  };

  return <motion.div className="box" onTapStart={handleTap} style={{ x, y }} />;
};
