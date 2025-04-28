import { motion, useMotionValue, useTransform } from "framer-motion";

const DraggableBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const backgroundColor = useTransform(x, [-100, 100], ["#0000ff", "#ff0000"]);
  return (
    <motion.div
      className="w-32 h-32 flex items-center justify-center"
      style={{ x, y, backgroundColor }}
      drag
      dragConstraints={{
        top: -150,
        bottom: 150,
        left: -150,
        right: 150,
      }}
    >
      <span className="text-white font-semibold">Drag me!</span>
    </motion.div>
  );
};

export default DraggableBox;
