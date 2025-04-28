import { motion } from "framer-motion";

const initial = { borderRadius: "0%", scale: 1, rotate: 0 };
const animate = { borderRadius: "50%", scale: 1.2, rotate: 360 };

const Five = () => {
  return (
    <div className="flex items-center !gap-10">
      <motion.div
        className="box"
        initial={initial}
        animate={animate}
        transition={{
          duration: 1,
          repeat: Infinity,
          staggerChildren: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      />

      <motion.div
        className="box"
        initial={initial}
        animate={animate}
        transition={{
          duration: 1,
          repeat: Infinity,
          type: "spring",
          stiffness: 200,
        }}
      />

      <motion.div
        className="box"
        initial={initial}
        animate={animate}
        transition={{
          duration: 1,
          repeat: Infinity,
          type: "spring",
          stiffness: 200,
        }}
      />
    </div>
  );
};

export default Five;
