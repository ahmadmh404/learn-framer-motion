import { motion } from "framer-motion";

export const DraggableBox = () => {
  return (
    <motion.div
      className="box"
      drag
      dragConstraints={{ left: -100, right: 100, bottom: 100, top: -100 }}
    />
  );
};
