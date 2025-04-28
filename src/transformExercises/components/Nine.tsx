import { motion } from "framer-motion";

const initial = { skew: 0, scale: 1 };
const tapAnimate = { skew: 30, scale: 0.95 };
const hoverAnimate = { skew: -20, scale: 1.05 };

const Nine = () => {
  return (
    <div>
      <motion.button
        initial={initial}
        whileTap={tapAnimate}
        whileHover={hoverAnimate}
        className="!px-4 !py-2 bg-rose-500 rounded cursor-pointer"
      >
        Click to animate
      </motion.button>
    </div>
  );
};

export default Nine;
