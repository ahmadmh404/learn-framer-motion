import { motion } from "framer-motion";

const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      {...Array.from([1, 2, 3, 4]).map((_, idx) => (
        <motion.div
          key={idx}
          className="w-4 h-4 rounded-full bg-teal-500"
          initial={{ y: 0 }}
          animate={{
            y: [0, -20, 0],
            opacity: [100, 50, 100],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeOut",
            delay: idx * 0.15,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
