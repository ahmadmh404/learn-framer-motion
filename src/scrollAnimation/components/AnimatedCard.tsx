import { motion } from "framer-motion";

const initial = { opacity: 0, scale: 0.8 };
const whileInView = { opacity: 1, scale: 1, y: -20, backgroundColor: "wheat" };

const AnimatedCard = () => {
  return (
    <div className="h-[150vh] flex flex-col items-cneter justify-end">
      <motion.div
        className="bg-white !p-5 rounded-lg shadow-lg text-center !mb-20"
        initial={initial}
        whileInView={whileInView}
        transition={{
          duration: 0.4,
        }}
      >
        <h2 className="text-2xl font-bold text-gray-900">Animated Card</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
          molestiae?
        </p>
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
